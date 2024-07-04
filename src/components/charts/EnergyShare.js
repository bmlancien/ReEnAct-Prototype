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

const EnergyShare = () => {
  const data = {
    labels: ['Windkraft', 'Photovoltaik', 'Biomasse', 'Wasserstoff', 'Fossile Brennstoffe'],
    datasets: [
      {
        label: 'Anteil',
        data: [40, 25, 15, 10, 10],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
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
        display: true,
        text: 'Anteil pro Energieträger',
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

  return <Bar data={data} options={options} />;
};

export default EnergyShare;
