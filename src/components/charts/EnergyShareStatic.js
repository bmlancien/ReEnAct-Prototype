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

const EnergyShareStatic = () => {
  const data = {
    labels: ['Windenergie', 'Photovoltaik', 'Fossile Brennstoffe (?)'],
    datasets: [
      {
        label: 'Anteil',
        data: [112.13, 14.55, 100],
        backgroundColor: '#38bdf8',
        borderColor: '#38bdf8',
        barThickness: 10
      },
    ],
  };

  const options = {
    indexAxis: 'y',
    scales: {
      x: {
        beginAtZero: true,
        max: 120,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Anteil pro Energieträger (%)',
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

export default EnergyShareStatic;
