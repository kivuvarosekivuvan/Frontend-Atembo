import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import useGetTemp from '../../hooks/useGetTemp';
import { Chart, CategoryScale, LinearScale, BarElement } from 'chart.js';
Chart.register(CategoryScale, LinearScale, BarElement);

const GraphPage = () => {
  const { chartData } = useGetTemp();

  return (
    <div className='mt-[50px]'>
      <h1>Temperature Graph</h1>
      {chartData ? (
        <Bar
          data={chartData}
          options={{
            scales: {
              y: {
                title: { display: true, text: 'Average Temperature' },
              },
              x: {
                title: { display: true, text: 'Months' },
              },
            },
          }}
        />
      ) : (
        <p>Loading chart data...</p>
      )}
    </div>
  );
};

export default GraphPage;