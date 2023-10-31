import { getTemp } from "../Utilities/utils";
import { useEffect, useState } from "react";

interface TempData {
  id: number;
  device: number;
  time_stamp: string;
  humidity_with_unit: string;
  temperature_with_unit: string;
}

const useGetTemp = () => {
  const [temp, setTemp] = useState<string[]>([]);
  const [chartData, setChartData] = useState<any>(null);

  useEffect(() => {
    const calculateAverageTemperatures = (temperatureData: TempData[]) => {
      const monthlyData: { [key: string]: { totalTemperature: number; count: number } } = {};

      temperatureData.forEach((data) => {
        const date = new Date(data.time_stamp);
        const month = date.toLocaleDateString("en-US", { month: "long" });

        if (!monthlyData[month]) {
          monthlyData[month] = {
            totalTemperature: 0,
            count: 0,
          };
        }

        monthlyData[month].totalTemperature += parseFloat(data.temperature_with_unit);
        monthlyData[month].count++;
      });

      const timestamps = Object.keys(monthlyData);
      const temperatures = timestamps.map((month) => {
        const averageTemperature =
          monthlyData[month].totalTemperature / monthlyData[month].count;
        return averageTemperature.toFixed(2);
      });

      return {
        labels: timestamps,
        datasets: [
          {
            data: temperatures,
            borderColor: "rgb(53, 162, 235)",
            backgroundColor: "#156700",
            type: "bar",
          },
        ],
      };
    };

    const fetchTemperatureData = async () => {
      try {
        const temperatureData = await getTemp();
        setTemp(temperatureData.map((data:any) => data.temperature_with_unit));

        if (temperatureData.length > 0) {
          const chartData = calculateAverageTemperatures(temperatureData);
          setChartData(chartData);

        }
      } catch (error) {
        return error
      }
    };

    fetchTemperatureData();
  }, []);

  return { temp, chartData };
};

export default useGetTemp;