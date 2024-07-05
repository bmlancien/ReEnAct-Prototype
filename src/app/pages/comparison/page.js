"use client";

import Header from "../../../components/common/Header";
import LayoutSimple from "../../../components/layout/LayoutSimple";
import { useState } from 'react';
import { SelectionButtonSmall } from '../../../components/common/Buttons';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
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

const barBackgroundColor = '#e2e8f0';
const barBackgroundColorSelected = '#10b981';
const barThickness = '10';

const buttons = [
  { id: 1, text: "Mein Szenario" },
  { id: 2, text: "Szenario Wind+ 2040" },
  { id: 3, text: "Szenario PV+ 2040" },
  { id: 4, text: "Szenario H2+ 2040" },
  { id: 5, text: "Szenario Mix 2040" }
];

const data = [
  { id: 1, values: [32.8, 8.80, 25.53, 22.47, 35.99, 16.01, 2.50, 150, 2.80, 5.00, 3.80] },
  { id: 2, values: [34.6, 12.4, 38.10, 18.90, 25.05, 17.95, 8.30, 170, 3.60, 4.20, 2.40] },
  { id: 3, values: [36.6, 11.2, 45.20, 25.80, 18.25, 10.75, 6.40, 230, 4.10, 5.70, 1.20] },
  { id: 4, values: [35.1, 10.0, 28.35, 18.25, 26.85, 26.55, 9.10, 190, 3.50, 4.80, 2.20] },
  { id: 5, values: [33.9, 7.10, 12.10, 38.05, 30.20, 19.65, 7.20, 250, 5.30, 6.10, 3.40] }
];


const ScenarioComparison = () => {
  const [selectedId, setSelectedId] = useState(buttons[0].id);
  const [displayTitle, setDisplayTitle] = useState(true);

  function handleSelected(id) {
    setSelectedId(id);
  }

  const selectedData = data.find(d => d.id === selectedId).values;

  const sortedData = (index) => {
    return data
      .map(d => ({ ...d, value: d.values[index] }))
      .sort((a, b) => b.value - a.value);
  };

  const chartOptions = (title, displayTitle, isHorizontal = false, maxValue) => ({
    indexAxis: isHorizontal ? 'y' : 'x',
    scales: {
      [isHorizontal ? 'x' : 'y']: {
        display: false,
        min: 0,
        max: maxValue
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
    layout: {
      padding: {
        top: 10,
        right: 20,
        bottom: 10,
        left: 20
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
        display: displayTitle,
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

  const maxEnergyProduction = Math.max(...sortedData(0).map(d => d.value)) + 10;
  const maxLandUse = Math.max(...sortedData(1).map(d => d.value)) + 10;
  const maxWindShare = Math.max(...sortedData(2).map(d => d.value)) + 10;
  const maxPVShare = Math.max(...sortedData(3).map(d => d.value)) + 10;
  const maxBiomassShare = Math.max(...sortedData(4).map(d => d.value)) + 10;
  const maxHydrogenShare = Math.max(...sortedData(5).map(d => d.value)) + 10;

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
          <div className="flex space-x-4 pb-4 mb-8 border-b">
            {buttons.map((button) => (
              <SelectionButtonSmall
                key={button.id}
                text={button.text}
                selected={selectedId === button.id}
                onClick={() => handleSelected(button.id)}
              />
            ))}
          </div>
          <div className="flex space-x-4 pb-4">
            <div className="flex justify-between basis-1/2 bg-slate-50 p-4">
              <div className="flex flex-col justify-between">
                <div>
                  <p>Energieproduktion:</p>
                  <div className="flex">
                    <div className="text-3xl font-semibold pe-2">
                      {`${selectedData[0]} GWh`}
                    </div>
                    <div className="flex items-center text-sm">
                      <ArrowUpRightIcon
                        className="h4 w-4 me-2"
                      />
                      <span>
                        {`+${selectedData[6]} %`}
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <span className="text-sm">
                    {`Energieexport: ${selectedData[8]} GWh`}
                  </span>
                </div>
              </div>
              <div>
                <Bar data={chartDataEnergyProduktion} options={chartOptions("", false, false, maxEnergyProduction)} />
              </div>
            </div>
            <div className="flex justify-between basis-1/2 bg-slate-50 p-4">
              <div className="flex flex-col justify-between">
                <div>
                  <p>Anteil Flächennutzung::</p>
                  <div className="flex">
                    <div className="text-3xl font-semibold pe-2">
                      {`${selectedData[1]} %`}
                    </div>
                    <div className="flex items-center text-sm">
                      <ArrowUpRightIcon
                        className="h4 w-4 me-2"
                      />
                      <span>
                        {`+${selectedData[7]} %`}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col text-sm">
                  <span>
                    {`Wind: ${selectedData[9]} %`}
                  </span>
                  <span>
                    {`Photovoltaik: ${selectedData[10]} %`}
                  </span>
                </div>
              </div>
              <div>
                <Bar data={chartDataLandUse} options={chartOptions("", false, false, maxLandUse)} />
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="w-50">
              <div className="flex">
                <div>
                  <Bar data={chartDataWindShare} options={chartOptions("Anteil Windkraft (%)", displayTitle, true, maxWindShare)} />
                </div>
                <div>
                  <Bar data={chartDataPVShare} options={chartOptions("Anteil Photovoltaik (%)", displayTitle, true, maxPVShare)} />
                </div>
              </div>
              <div className="flex">
                <div>
                  <Bar data={chartDataBiomassShare} options={chartOptions("Anteil Biomasse (%)", displayTitle, true, maxBiomassShare)} />
                </div>
                <div>
                  <Bar data={chartDataHydrogenShare} options={chartOptions("Anteil Wasserstoff (%)", displayTitle, true, maxHydrogenShare)} />
                </div>
              </div>
            </div>
          </div>
        </LayoutSimple>
      </main>
    </>
  );
}

export default ScenarioComparison;
