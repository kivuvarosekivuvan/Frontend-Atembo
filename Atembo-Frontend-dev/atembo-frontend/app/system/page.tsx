'use client'
import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, Tooltip, PointElement, LineElement } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip);

enum TimeRange {
  Days = "days",
  Weeks = "weeks",
  Months = "months",
}

const MyLineChart = () => {
  const [timeRange, setTimeRange] = useState(TimeRange.Days);

  const dataOptions = {
    [TimeRange.Days]: {
      labels: ["0", "02", "04", "06", "08", "10", "12", "14", "16", "18", "20", "22", "24"],
      datasets: [
        {
          data: [0, 7, 3, 11, 27, 10, 13, 18, 19, 14, 29, 28, 32],
          label: "Temperature",
          backgroundColor: "red",
        },
        {
          data: [0, 5, 13, 2, 15, 10, 12, 19, 14, 30, 28, 32],
          label: "Water Flow Rate",
          backgroundColor: "blue",
        },
      ],
    },
    [TimeRange.Weeks]: {
      labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      datasets: [
        {
          data: [15, 10, 22, 15, 14, 17, 32],
          label: "Temperature",
          backgroundColor: "purple",
        },
        {
          data: [13, 22, 15, 10, 22, 24, 28],
          label: "Water Flow Rate",
          backgroundColor: "red",
        },
      ],
    },
    [TimeRange.Months]: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          data: [0, 10, 16, 5, 10, 20, 28, 19, 7, 22, 18, 34],
          label: "Temperature",
          backgroundColor: "purple",
        },
        {
          data: [0, 6, 20, 2, 15, 19, 17, 19, 10, 13, 28, 30],
          label: "Water Flow Rate",
          backgroundColor: "blue",
        },
      ],
    },
  };

  const handleTimeRangeChange = (selectedRange: TimeRange) => {
    setTimeRange(selectedRange);
  };

  const chartData = dataOptions[timeRange];

  const getXAxisLabel = (timeRange: TimeRange) => {
    switch (timeRange) {
      case TimeRange.Days:
        return "Time";
      case TimeRange.Weeks:
        return "Days";
      case TimeRange.Months:
        return "Month";
      default:
        return "";
    }
  };

  return (
    <div className="w-3/4 mx-auto p-4 ">
<h2 className="text-green-900 font-bold text-4xl mb-4 mx-auto text-center">SYSTEM PERFORMANCE</h2>      <p className="mx-auto text-center text-dark-grey italic ">
        View all information and check live status of the Urban Verde System
      </p>
      <br />
      <h2 className="font-bold">System ID 2233</h2>
      <br />
      <div>
        <label className="flex justify-end ">
          Select Time Range:
          <select
            value={timeRange}text-green-700 
            onChange={(e) => handleTimeRangeChange(e.target.value as TimeRange)}
            className="bg-white text-green-700 border-solid-gray p-5px w-40 border-solid border-2 border-gray-500 rounded-lg pl-1 ml-4 -mt-2 mr-3 ">
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
        data={chartData}
        options={{
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: "Temperature in degrees and Water Flow Rate",
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

      <h2 className="font-bold">Water Flow Rate</h2>
      <br />
      <Line
        data={chartData}
        options={{
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: "Water flow rate",
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
  );
};

export default MyLineChart;