"use client";

import Header from "../../../components/common/Header";
import LayoutSimple from "../../../components/layout/LayoutSimple";
import { LinkIconBlue } from "../../../components/common/Links";
import { useState } from 'react';
import { SelectionButtonSmall } from '../../../components/common/Buttons';
import { ArrowLeftIcon, ArrowUpRightIcon, ArrowRightIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { LightButtonMedium, PrimaryButtonMedium } from "../../../components/common/Buttons";
import { Bar } from 'react-chartjs-2';
import BottomNav from "../../../components/common/BottomNav";
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
import Link from "next/link";

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
const barBackgroundColorSelected = '#4f46e5';
const barThicknessMd = '8';
const barThicknessSm = '4';

const buttons = [
  { id: 1, text: "Wind – Repowering" },
  { id: 2, text: "Zubau Wind und PV" },
  { id: 3, text: "Zubau PV" },
  { id: 4, text: "Moorbewirtschaftung" },
  { id: 5, text: "Wasserstoff" },
  { id: 6, text: "Kostenoptimierung" },
  { id: 7, text: "Hohe CO2-Preise" },
  { id: 8, text: "Suffizienz" },
  { id: 9, text: "Autarkie" },
  { id: 10, text: "Weiter wie bisher" },
  { id: 11, text: "Mein Szenario" }
];

const data = [
  { id: 1, values: [282.8, 8.80, 25.53, 22.47, 35.99, 16.01, 2.50, 150, 2.80, 5.00, 3.80] },
  { id: 2, values: [214.6, 12.4, 38.10, 18.90, 25.05, 17.95, 8.30, 170, 3.60, 4.20, 2.40] },
  { id: 3, values: [226.6, 11.2, 45.20, 25.80, 18.25, 10.75, 6.40, 230, 4.10, 5.70, 1.20] },
  { id: 4, values: [205.1, 10.0, 28.35, 18.25, 26.85, 26.55, 9.10, 190, 3.50, 4.80, 2.20] },
  { id: 5, values: [186.9, 7.10, 12.10, 38.05, 30.20, 19.65, 7.20, 250, 5.30, 6.10, 3.40] },
  { id: 6, values: [250.1, 8.90, 27.80, 22.90, 29.10, 17.10, 7.50, 160, 4.30, 5.20, 3.00] },
  { id: 7, values: [230.2, 9.30, 35.30, 27.50, 20.90, 14.30, 6.90, 180, 3.90, 5.00, 2.70] },
  { id: 8, values: [192.4, 11.80, 33.10, 29.60, 25.20, 21.50, 8.60, 240, 4.60, 5.90, 2.80] },
  { id: 9, values: [221.5, 10.50, 28.60, 24.70, 28.30, 20.60, 6.30, 220, 4.40, 4.70, 1.50] },
  { id: 10, values: [180.7, 6.90, 10.90, 40.20, 31.70, 18.90, 7.10, 260, 5.50, 6.20, 3.60] },
  { id: 11, values: [200.2, 8.3, 12.14, 40.20, 31.70, 19.90, 8.10, 260, 3.50, 5.20, 3.60] }
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
    responsive: true,
    maintainAspectRatio: false,
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
        color: (context) => {
          const dataIndex = context.dataIndex;
          const label = context.chart.data.labels[dataIndex];
          const scenarioId = buttons.find(button => button.text === label)?.id; 
          return scenarioId === selectedId ? '#4f46e5' : '#a3a3a3';
        },
        font: {
          weight: 'bold'
        }
      }
    }
  });

  const maxEnergyProduction = Math.max(...sortedData(0).map(d => d.value)) + 50;
  const maxLandUse = Math.max(...sortedData(1).map(d => d.value)) + 50;
  const maxWindShare = Math.max(...sortedData(2).map(d => d.value)) + 50;
  const maxPVShare = Math.max(...sortedData(3).map(d => d.value)) + 50;
  const maxBiomassShare = Math.max(...sortedData(4).map(d => d.value)) + 50;
  const maxHydrogenShare = Math.max(...sortedData(5).map(d => d.value)) + 50;

  const chartDataEnergyProduktion = {
    labels: sortedData(0).map(d => buttons.find(button => button.id === d.id).text),
    datasets: [
      {
        label: 'Energieproduktion (GWh)',
        data: sortedData(0).map(d => d.values[0]),
        backgroundColor: sortedData(0).map(d => d.id === selectedId ? barBackgroundColorSelected : barBackgroundColor),
        barThickness: barThicknessMd
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
        barThickness: barThicknessMd
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
        barThickness: barThicknessSm
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
        barThickness: barThicknessSm
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
        barThickness: barThicknessSm
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
        barThickness: barThicknessSm
      }
    ]
  };

  return (
    <>
      <nav className="flex items-center justify-center px-6 py-2 border border-b-slate-200">
        <div className="flex relative w-full max-w-7xl px-2 sm:px-6 lg:px-8">
          <span className="text-sky-800 font-semibold">
            <Link
              href="/"
            >
              Startseite
            </Link>
          </span>
          <ChevronRightIcon
            className="w-6 h-6 ms-2"
          />
          <span className="text-sky-800 font-semibold">
            <Link
              href="/questionsDefault/challenges"
            >
              Herausforderungen und Chancen
            </Link>
          </span>
          <ChevronRightIcon
            className="w-6 h-6 ms-2"
          />
          <span className="text-sky-800 font-semibold">
            <Link
              href="/questionsDefault/regionToday"
            >
              Region heute
            </Link>
          </span>
          <ChevronRightIcon
            className="w-6 h-6 ms-2"
          />
          <span className="text-sky-800 font-semibold">
            <Link
              href="/questionsDefault/scenariosOverview"
            >
              Szenarienübersicht
            </Link>
          </span>
          <ChevronRightIcon
            className="w-6 h-6 ms-2"
          />
          <span className="">
            Szenarienvergleich
          </span>
        </div>
      </nav>
      <main>
        <LayoutSimple>
          <div className="flex justify-between pb-4">
            <h1 className="pb-4">Vergleichen Sie zwischen 10 vorgefertigten Szenarien:</h1>
          </div>
          <div className="flex flex-wrap pb-4 mb-8 border-b">
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
                      <span className="italic text-indigo-700">{`${selectedData[0]} GWh`}</span>
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
                    <span className="italic text-indigo-700">{`Energieexport: ${selectedData[8]} GWh`}</span>
                  </span>
                </div>
              </div>
              <div className="w-full">
                <Bar data={chartDataEnergyProduktion} options={chartOptions("", false, false, maxEnergyProduction)} />
              </div>
            </div>
            <div className="flex justify-between basis-1/2 bg-slate-50 p-4">
              <div className="flex flex-col justify-between">
                <div>
                  <p>Anteil Flächennutzung:</p>
                  <div className="flex">
                    <div className="text-3xl font-semibold pe-2">
                      <span className="italic text-indigo-700">{`${selectedData[1]} %`}</span>
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
                    <span className="italic text-indigo-700">{`Wind: ${selectedData[9]} %`}</span>
                  </span>
                  <span>
                    <span className="italic text-indigo-700">{`Photovoltaik: ${selectedData[10]} %`}</span>
                  </span>
                </div>
              </div>
              <div className="w-full">
                <Bar data={chartDataLandUse} options={chartOptions("", false, false, maxLandUse)} />
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="w-full">
              <div className="flex">
                <div style={{ height: '300px' }}>
                  <Bar data={chartDataWindShare} options={chartOptions("Anteil Windkraft (%)", displayTitle, true, maxWindShare)} />
                </div>
                <div style={{ height: '300px' }}>
                  <Bar data={chartDataPVShare} options={chartOptions("Anteil Photovoltaik (%)", displayTitle, true, maxPVShare)} />
                </div>
                <div style={{ height: '300px' }}>
                  <Bar data={chartDataBiomassShare} options={chartOptions("Anteil Biomasse (%)", displayTitle, true, maxBiomassShare)} />
                </div>
                <div style={{ height: '300px' }}>
                  <Bar data={chartDataHydrogenShare} options={chartOptions("Anteil Wasserstoff (%)", displayTitle, true, maxHydrogenShare)} />
                </div>
              </div>
            </div>
          </div>
        </LayoutSimple>
      </main>
      <BottomNav>
        <div className="flex">
          <div className="pe-2">
            <LightButtonMedium
              href="/questionsDefault/scenariosOverview"
              icon={ArrowLeftIcon}
              text="Szenarienübersicht"
            />
          </div>
          <div className="pe-2">
            <LightButtonMedium
              href="/questionsDefault/createScenario"
              text="Szenario erstellen"
            />
          </div>
        </div>
      </BottomNav>
    </>
  );
}

export default ScenarioComparison;
