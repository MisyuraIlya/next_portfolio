"use client"
import React, { useEffect, useRef } from 'react';
import {Chart, registerables} from 'chart.js';

type Radar = {
    data: object
}
const RadarChart = ({ data }: Radar) => {
  const chartRef = useRef(null);

  useEffect(() => {
    Chart.register(...registerables); // Register required chart controllers

    const chartOptions = {
      scale: {
        ticks: {
          beginAtZero: true,
        },
      },
    };

    const chartData = {
      labels: Object.keys(data),
      datasets: [
        {
          label: 'Data',
          data: Object.values(data),
          backgroundColor: 'rgba(75, 192, 192, 0.4)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    };

    const chart = new Chart(chartRef.current, {
      type: 'radar',
      data: chartData,
      options: chartOptions,
    });

    return () => {
      chart.destroy();
    };
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default RadarChart;
