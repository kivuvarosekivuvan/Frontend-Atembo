'use client'
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, Tooltip, PointElement, LineElement } from "chart.js";
import Layout from "../Components/Layout";

import useGetTemp from "../hooks/useGetTemp";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip);

enum TimeRange {
  Days = "days",
  Weeks = "weeks",
  Months = "months",
}

const MyLineChart = () => {
  const [timeRange, setTimeRange] = useState(TimeRange.Days);
  const temperatureData = useGetTemp();
  console.log({ dailyTemp: temperatureData });

  const handleTimeRangeChange = (selectedRange: TimeRange) => {
    setTimeRange(selectedRange);
  };

  const filterTemperatureData = (data: any[], range: TimeRange) => {
    switch (range) {
      case TimeRange.Days:
        return data;
      case TimeRange.Weeks:
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
        return data.filter(item => new Date(item.time_stamp) >= oneWeekAgo)
          .map(item => ({
            ...item,
            dayOfWeek: new Date(item.time_stamp).toLocaleDateString(undefined, { weekday: 'long' }),
          }));
      case TimeRange.Months:
        const oneMonthAgo = new Date();
        oneMonthAgo.setDate(oneMonthAgo.getDate() - 30);
        return data.filter(item => new Date(item.time_stamp) >= oneMonthAgo)
          .map(item => ({
            ...item,
            monthName: new Date(item.time_stamp).toLocaleDateString(undefined, { month: 'short' }),
          }));
      default:
        return data;
    }
  };

  const filteredData = filterTemperatureData(temperatureData.temp, timeRange);

  const chartData = filteredData.map((item) => ({
    x: timeRange === TimeRange.Weeks ? item.dayOfWeek : item.monthName,
    y: parseFloat(item.temperature_with_unit),
  }));

  const getXAxisLabel = (timeRange: TimeRange) => {
    switch (timeRange) {
      case TimeRange.Days:
        return "Time";
      case TimeRange.Weeks:
        return "Day of Week";
      case TimeRange.Months:
        return "Month";
      default:
        return "";
    }
  };

  return (
    <div>
      <Layout>
        <div className="w-3/4 mx-auto p-4">
          <h2 className="text-green-900 font-bold text-4xl mb-4 mx-auto text-center">SYSTEM PERFORMANCE</h2>
          <p className="mx-auto text-center text-dark-grey italic">
            View all information and check live status of the Urban Verde System
          </p>
          <br />
          <h2 className="font-bold">System ID 2233</h2>
          <br />
          <div>
            <label className="flex justify-end">
              Select Time Range:
              <select
                value={timeRange}
                onChange={(e) => handleTimeRangeChange(e.target.value as TimeRange)}
                className="bg-white text-green-700 border-solid-gray p-5px w-40 border-solid border-2 border-gray-500 rounded-lg pl-1 ml-4 -mt-2 mr-3"
              >
                <option value={TimeRange.Days}>Days</option>
                <option value={TimeRange.Weeks}>Weeks</option>
                <option value={TimeRange.Months}>Months</option>
              </select>
            </label>
          </div>
          <br />
          <h2 className="font-bold">Temperature</h2>
          <br />
          <Line
            data={{
              datasets: [
                {
                  data: chartData,
                  label: "Temperature",
                  borderColor: "red",
                  backgroundColor: "transparent",
                },
              ],
            }}
            options={{
              scales: {
                y: {
                  beginAtZero: true,
                  title: {
                    display: true,
                    text: "Temperature in degrees",
                  },
                },
                x: {
                  title: {
                    display: true,
                    text: getXAxisLabel(timeRange),
                  },
                },
              },
            }}
          />
        </div>
      </Layout>
    </div>
  );
};

export default MyLineChart;