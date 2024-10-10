"use client";

import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const EnergyShare = ({ data }) => {
  const chartData = {
    labels: ['Windkraft', 'Photovoltaik', 'Biomasse', 'Wasserstoff'],
    datasets: [
      {
        label: 'Anteil',
        data: data,
        backgroundColor: '#2dd4bf',
        borderColor: '#2dd4bf',
        borderWidth: 1,
        barThickness: 15,
      },
    ],
  };

  const options = {
    indexAxis: 'y',
    scales: {
      x: {
        beginAtZero: true,
        max: 50,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.raw} %`;
          },
        },
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default EnergyShare;