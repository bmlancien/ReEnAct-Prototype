"use client";

import Header from "../../../components/common/Header";
import LayoutSimple from "../../../components/layout/LayoutSimple";
import { useState } from 'react';
import { SelectionButtonSmall } from '../../../components/common/Buttons';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title,
  ChartDataLabels
);

const barBackgroundColor = '#cbd5e1';
const barBackgroundColorSelected = '#34d399';
const barThickness = '10';

const buttons = [
  { id: 1, text: "Mein Szenario" },
  { id: 2, text: "Szenario Wind+ 2040" },
  { id: 3, text: "Szenario PV+ 2040" },
  { id: 4, text: "Szenario H2+ 2040" },
  { id: 5, text: "Szenario Mix 2040" }
];

const data = [
  { id: 1, values: [32.8, 8.80, 25, 25, 40, 10] },
  { id: 2, values: [34.6, 12.4, 40, 20, 20, 20] },
  { id: 3, values: [36.6, 11.2, 40, 30, 20, 5] },
  { id: 4, values: [35.1, 10.0, 25, 20, 25, 30] },
  { id: 5, values: [33.9, 7.10, 10, 40, 25, 25] }
];

const ScenarioComparison = () => {
  const [selectedId, setSelectedId] = useState(buttons[0].id);

  function handleSelected(id) {
    setSelectedId(id);
  }

  const sortedData = (index) => {
    return data
      .map(d => ({ ...d, value: d.values[index] }))
      .sort((a, b) => b.value - a.value);
  };

  const chartOptions = (title, isHorizontal = false) => ({
    indexAxis: isHorizontal ? 'y' : 'x',
    scales: {
      [isHorizontal ? 'x' : 'y']: {
        display: false
      },
      [isHorizontal ? 'y' : 'x']: {
        grid: {
          display: false
        },
        ticks: {
          display: false
        }
      }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: false
      },
      title: {
        display: true,
        text: title,
        align: 'start'
      },
      datalabels: {
        anchor: 'end',
        align: 'end',
        color: '#000',
        font: {
          weight: 'bold'
        }
      }
    }
  });

  const chartDataEnergyProduktion = {
    labels: sortedData(0).map(d => buttons.find(button => button.id === d.id).text),
    datasets: [
      {
        label: 'Energieproduktion (GWh)',
        data: sortedData(0).map(d => d.values[0]),
        backgroundColor: sortedData(0).map(d => d.id === selectedId ? barBackgroundColorSelected : barBackgroundColor),
        barThickness: barThickness
      }
    ]
  };

  const chartDataLandUse = {
    labels: sortedData(1).map(d => buttons.find(button => button.id === d.id).text),
    datasets: [
      {
        label: 'Anteil Flächennutzung (%)',
        data: sortedData(1).map(d => d.values[1]),
        backgroundColor: sortedData(1).map(d => d.id === selectedId ? barBackgroundColorSelected : barBackgroundColor),
        barThickness: barThickness
      }
    ]
  };

  const chartDataWindShare = {
    labels: sortedData(2).map(d => buttons.find(button => button.id === d.id).text),
    datasets: [
      {
        label: 'Anteil Windkraft (%)',
        data: sortedData(2).map(d => d.values[2]),
        backgroundColor: sortedData(2).map(d => d.id === selectedId ? barBackgroundColorSelected : barBackgroundColor),
        barThickness: barThickness
      }
    ]
  };

  const chartDataPVShare = {
    labels: sortedData(3).map(d => buttons.find(button => button.id === d.id).text),
    datasets: [
      {
        label: 'Anteil Photovoltaik (%)',
        data: sortedData(3).map(d => d.values[3]),
        backgroundColor: sortedData(3).map(d => d.id === selectedId ? barBackgroundColorSelected : barBackgroundColor),
        barThickness: barThickness
      }
    ]
  };

  const chartDataBiomassShare = {
    labels: sortedData(4).map(d => buttons.find(button => button.id === d.id).text),
    datasets: [
      {
        label: 'Anteil Biomasse (%)',
        data: sortedData(4).map(d => d.values[4]),
        backgroundColor: sortedData(4).map(d => d.id === selectedId ? barBackgroundColorSelected : barBackgroundColor),
        barThickness: barThickness
      }
    ]
  };

  const chartDataHydrogenShare = {
    labels: sortedData(5).map(d => buttons.find(button => button.id === d.id).text),
    datasets: [
      {
        label: 'Anteil Wasserstoff (%)',
        data: sortedData(5).map(d => d.values[5]),
        backgroundColor: sortedData(5).map(d => d.id === selectedId ? barBackgroundColorSelected : barBackgroundColor),
        barThickness: barThickness
      }
    ]
  };

  return (
    <>
      <Header title="Szenarienvergleich" isShare={true} />
      <main>
        <LayoutSimple>
          <div className="flex space-x-4 mb-4">
            {buttons.map((button) => (
              <SelectionButtonSmall
                key={button.id}
                text={button.text}
                selected={selectedId === button.id}
                onClick={() => handleSelected(button.id)}
              />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Bar data={chartDataEnergyProduktion} options={chartOptions("Energieproduktion (GWh)")} />
            </div>
            <div>
              <Bar data={chartDataLandUse} options={chartOptions("Anteil Flächennutzung (%)")} />
            </div>
            <div>
              <Bar data={chartDataWindShare} options={chartOptions("Anteil Windkraft (%)", true)} />
            </div>
            <div>
              <Bar data={chartDataPVShare} options={chartOptions("Anteil Photovoltaik (%)", true)} />
            </div>
            <div>
              <Bar data={chartDataBiomassShare} options={chartOptions("Anteil Biomasse (%)", true)} />
            </div>
            <div>
              <Bar data={chartDataHydrogenShare} options={chartOptions("Anteil Wasserstoff (%)", true)} />
            </div>
          </div>
        </LayoutSimple>
      </main>
    </>
  );
}

export default ScenarioComparison;
