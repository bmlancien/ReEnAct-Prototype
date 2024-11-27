"use client";

import BottomNav from "../../../components/common/BottomNav";
import Breadcrumb from "../../../components/common/Breadcrumb";
import Goal from "../../../components/common/Goal";
import Image from "next/image";
import LayoutSimple from "../../../components/layout/LayoutSimple";
import Link from "next/link";
import Switch from "../../../components/common/Switch";
import { useState } from 'react';
import { LightButtonMedium, PrimaryButtonMedium } from "../../../components/common/Buttons";
import { ArrowLeftIcon, ArrowRightIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import dynamic from 'next/dynamic';

const EnergyShare = dynamic(() => import('../../../components/charts/EnergyShare'), {
  ssr: false,
});

const Slider = dynamic(() => import('../../../components/common/Slider'), {
  ssr: false,
});

export default function CreateScenario() {
  const [windEnergy, setWindEnergy] = useState(40);
  const [pvProduction, setPvProduction] = useState(60);
  const [pvRoofProduction, setpvRoofProduction] = useState(0.75);
  const [pvAgriProduction, setPvAgriProduction] = useState(0.75);
  const [pvMoorProduction, setPvMoorProduction] = useState(10);
  const [biomass, setBiomass] = useState(2);
  const [battery, setBattery] = useState(25);
  const [heat, setHeat] = useState(30);
  const [h2, setH2] = useState(2);
  const [electricityConsumption, setElectricityConsumption] = useState(100);
  const [heatConsumption, setHeatConsumption] = useState(100);

  // Calculate total energy production
  const totalEnergyProduction = windEnergy + pvProduction + pvRoofProduction;

  const data = [windEnergy, pvProduction, pvRoofProduction, pvAgriProduction, pvMoorProduction, biomass, battery, heat, h2, electricityConsumption, heatConsumption];

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
          <span>
            Szenario erstellen
          </span>
        </div>
      </nav>
      <main className="grow bg-gray-50">
        <div
          className="flex flex-col justify-center items-center pb-48"
        >
          <Image
            src="/images/creation.svg"
            width={1367}
            height={1209}
          />
        </div>
        {/* <LayoutSimple>
          <div className="flex justify-between pb-8">
            <span>Bitte nutzen Sie die Einstellungen und Schieberegler, um Ihr zukünftiges Szenario zu erstellen.</span>
            <Goal />
          </div>
          <div className="flex pt-12 justify-between">
            <div className="flex grow max-w-[32rem] pe-8">
              <div className="me-4 w-full bg-white p-8 rounded-lg">
                <h1 className="text-lg font-light uppercase pb-4">Erzeugung</h1>
                <div className="flex items-center pb-4">
                  <span className="me-2">
                    <svg width="24" height="24" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                      <g fill="#1e293b">
                        <path d="m53.328 37.516c-0.28125 0-0.54688-0.078125-0.79688-0.23438-0.70312-0.4375-0.92188-1.375-0.48438-2.0938l5.3594-8.5469-7.25-23.438c-0.078125-0.23438-0.45312-0.15625-0.45312 0.0625v31.766c0 0.84375-0.67188 1.5156-1.5156 1.5156s-1.5156-0.67188-1.5156-1.5156v-31.766c0-1.7969 1.4688-3.2656 3.2656-3.2656 1.4531 0 2.7031 0.92188 3.1094 2.3125l7.4531 24.125c0.125 0.42188 0.078125 0.875-0.17188 1.25l-5.7344 9.125c-0.26562 0.45312-0.76562 0.70312-1.2656 0.70312z"/>
                        <path d="m18.359 62.031c-1.125 0-2.2031-0.5625-2.8125-1.5781-0.29688-0.5-0.46875-1.0781-0.46875-1.6719 0-0.79688 0.29688-1.5625 0.8125-2.1562l16.875-18.828c0.29688-0.32812 0.73438-0.5 1.1562-0.5l11.031 0.20312c0.84375 0.015625 1.5 0.70312 1.4844 1.5469-0.015625 0.82812-0.6875 1.4844-1.5156 1.4844h-0.03125l-10.344-0.1875-16.375 18.297c-0.03125 0.03125-0.0625 0.09375-0.0625 0.15625 0.10938 0.21875 0.25 0.26562 0.375 0.1875l27.5-16.516c0.71875-0.4375 1.6406-0.20312 2.0781 0.51562s0.20312 1.6406-0.51562 2.0781l-27.516 16.531c-0.53125 0.29688-1.1094 0.4375-1.6719 0.4375z"/>
                        <path d="m81.656 61.391c-0.21875 0-0.4375-0.03125-0.67188-0.078125l-24.641-5.875c-0.42188-0.10938-0.79688-0.39062-1-0.78125l-4.875-9.4531c-0.39062-0.75-0.09375-1.6562 0.65625-2.0469 0.73438-0.39062 1.6562-0.09375 2.0469 0.65625l4.5625 8.8281 23.891 5.6875c0.14062 0.015625 0.20312-0.046875 0.25-0.10938 0.0625-0.10938 0.03125-0.25-0.09375-0.3125l-27.562-16.266c-0.71875-0.42188-0.95312-1.3594-0.53125-2.0781s1.3594-0.95312 2.0781-0.53125l27.547 16.281c1.5625 0.9375 2.0625 2.9375 1.1406 4.4844-0.59375 0.98438-1.6719 1.5938-2.7969 1.5938z"/>
                        <path d="m49.938 46.391c-3.6406 0-6.5938-2.9531-6.5938-6.5938s2.9531-6.5938 6.5938-6.5938 6.5938 2.9531 6.5938 6.5938-2.9531 6.5938-6.5938 6.5938zm0-10.156c-1.9688 0-3.5625 1.5938-3.5625 3.5625s1.5938 3.5625 3.5625 3.5625 3.5625-1.5938 3.5625-3.5625-1.5938-3.5625-3.5625-3.5625z"/>
                        <path d="m45.078 100h-0.046875c-0.84375-0.03125-1.5-0.71875-1.4688-1.5625l1.6719-54.719c0.03125-0.82812 0.70312-1.4688 1.5156-1.4688h0.046875c0.84375 0.03125 1.5 0.71875 1.4688 1.5625l-1.6719 54.719c-0.015625 0.82812-0.6875 1.4688-1.5156 1.4688z"/>
                        <path d="m54.609 100c-0.82812 0-1.5-0.65625-1.5156-1.4844l-1.1562-50.75c-0.015625-0.82812 0.64062-1.5312 1.4844-1.5469h0.03125c0.82812 0 1.5 0.65625 1.5156 1.4844l1.1562 50.75c0.015625 0.82812-0.64062 1.5312-1.4844 1.5469z"/>
                        <path d="m62.062 100h-24.422c-0.84375 0-1.5156-0.67188-1.5156-1.5156s0.67188-1.5156 1.5156-1.5156h24.406c0.84375 0 1.5156 0.67188 1.5156 1.5156s-0.67188 1.5156-1.5 1.5156z"/>
                      </g>
                    </svg>
                  </span>
                  <h2 className="text-lg font-semibold">Windkraft</h2>
                  <div className="ms-2">
                    <Switch 
                      container="slidersWind"
                    />
                  </div>
                </div>
                <div id="slidersWind">
                  <Slider
                    label="Leistung (MW)"
                    min={38.72}
                    max={58.72}
                    step={2}
                    value={windEnergy}
                    onChange={setWindEnergy}
                    unit="MW"
                    goal={55}
                    tooltipMessage="Hier kommt ein Text über Windkraft"
                  />
                </div>
                <div className="flex items-center pt-8 pb-4">
                  <span className="me-2">
                    <svg width="24" height="24" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                      <path d="m72.602 65h4.1992l16.898-45h-30.5l-16.898 45h21.102v10h-35l-0.003906-10h4.1992l17-45h-30.297l-16.902 45h21.102v10h-17.398v5h80v-5h-17.5zm-26.102-40-5.6992 15h-7.1992l5.6016-15h7.3008zm-19.699 0h7.1992l-5.6992 15h-7.1016zm-13.102 35 5.6016-15h7.1016l-5.6016 15zm12.5 0 5.6016-15h7.1992l-5.6992 15zm60.301-35-5.6992 15h-7.1992l5.6016-15h7.3008zm-19.699 0h7.1992l-5.6016 15h-7.1992zm-13.301 35 5.6016-15h7.1992l-5.6016 15zm12.699 0 5.6016-15h7.1992l-5.6992 15z" fill="#1e293b"/>
                    </svg>
                  </span>
                  <h2 className="text-lg font-semibold">Photovoltaik</h2>
                  <div className="ms-2">
                    <Switch 
                      container="slidersPV"
                    />
                  </div>
                </div>
                <div id="slidersPV">
                  <h3 className="text-sm pt-2">Freiflächen</h3>
                  <Slider
                    label="Leistung (MW)"
                    min={11.80}
                    max={221.80}
                    step={10}
                    value={pvProduction}
                    onChange={setPvProduction}
                    unit="MW"
                    goal={102}
                    tooltipMessage="Hier kommt ein Text über PV"
                  />
                  <h3 className="text-sm pt-2">Dachanlagen</h3>
                  <Slider
                    label="Leistung (MW)"
                    min={0.62}
                    max={2.00}
                    step={0.4}
                    value={pvRoofProduction}
                    onChange={setpvRoofProduction}
                    unit="MW"
                    goal={1}
                    tooltipMessage="Hier kommt ein Text über PV"
                  />
                  <h3 className="text-sm pt-2">Agri-Photovoltaik</h3>
                  <Slider
                    label="Leistung (MW)"
                    min={0}
                    max={2.00}
                    step={0.4}
                    value={pvAgriProduction}
                    onChange={setPvAgriProduction}
                    unit="MW"
                    goal={1}
                    tooltipMessage="Hier kommt ein Text über PV"
                  />
                  <h3 className="text-sm pt-2">Moor-Photovoltaik</h3>
                  <Slider
                    label="Leistung (MW)"
                    min={0}
                    max={50}
                    step={5}
                    value={pvMoorProduction}
                    onChange={setPvMoorProduction}
                    unit="MW"
                    goal={30}
                    tooltipMessage="Hier kommt ein Text über PV"
                  />
                </div>
                <div className="flex items-center pt-8 pb-4">
                  <span className="me-2">
                    <svg width="24" height="24" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                      <g fill="#1e293b">
                        <path d="m72.117 75.402c-0.42188-3.2617-1.293-7.5586-2.8047-13.043-5.1211-18.566-20.047-34.023-20.047-34.023 0.13672 0.27344 10.184 25.418 12.582 33.047 1.1484 3.293 2.5625 8.1367 3.5898 12.43 0.49609 0.13672 1.0352 0.29688 1.625 0.48438 2.0781 0.65625 3.6016 1.0234 5.0547 1.1055z"/>
                        <path d="m82.445 43.492c-1.6016 5.9336-2.918 12.148-2.918 12.148s-1.1289-4.9922-3.6719-9.4141c-6.8047-14.449-16.871-21.652-22.301-24.977-0.50781-0.30859-0.90234-0.29688-1.1719 0.035156-0.4375 0.53906-0.27734 0.71094 1.6836 2.7891 3.7227 3.9492 12.234 13.879 16.797 24.504 3.7969 8.8438 3.4609 19.957 2.6562 26.809 1.3867-0.10156 2.8477-0.46484 4.8008-1.0938 1.8555-0.59375 3.2031-0.94141 4.4648-1.0508 2.0977-13.684 6.2891-38.102 11.574-53.672l0.10938-0.21094s-6.75 6.4297-12.023 24.133z"/>
                        <path d="m88.914 79.219c-4.5391-1.4531-6.0625-1.4531-10.598 0-4.6719 1.5039-6.5234 1.5039-11.258 0-4.7773-1.5-6.1289-1.4023-10.602 0-4.7539 1.5039-6.5898 1.5039-11.258 0-4.5469-1.4531-6.0586-1.4531-10.602 0-4.668 1.5039-6.5234 1.5039-11.258 0-2.3047-0.72656-4.1094-1.0977-5.3555-1.0977-1.1758 0-2.9375 0.37109-5.25 1.0977-2.1523 0.68359-3.8672 1.0156-5.2148 1.0781v6.7617l0.015625 0.26953c0.79688-0.42188 2.5938-0.78906 4.9062-1.5156 4.8633-1.5391 6.5938-1.4531 11.199 0 4.4844 1.4102 5.8477 1.5078 10.605 0 4.7266-1.5039 6.5586-1.5039 11.312 0s6.1133 1.4102 10.605 0c4.5938-1.4688 6.3125-1.5469 11.191 0 4.4648 1.4102 5.8281 1.5039 10.605 0 4.7344-1.5039 6.5859-1.5039 11.254 0 2.0039 0.64844 3.6328 1.0078 4.8516 1.0781l0.039063-6.5859c-1.0195 0.13672-2.8594-0.33203-5.1914-1.0859z"/>
                        <path d="m88.914 90.68c-4.5391-1.4531-6.0625-1.4531-10.598 0-4.6719 1.5039-6.5234 1.5039-11.258 0-4.7773-1.5-6.1289-1.4023-10.602 0-4.7539 1.5039-6.5898 1.5039-11.258 0-4.5469-1.4531-6.0586-1.4531-10.602 0-4.668 1.5039-6.5234 1.5039-11.258 0-2.3047-0.72656-4.1094-1.0977-5.3555-1.0977-1.1758 0-2.9375 0.37109-5.25 1.0977-2.1523 0.68359-3.8672 1.0156-5.2148 1.0781v6.7617l0.015625 0.26953c0.79688-0.42187 2.5938-0.78906 4.9062-1.5156 4.8633-1.5391 6.5938-1.4531 11.199 0 4.4844 1.4102 5.8477 1.5078 10.605 0 4.7266-1.5039 6.5586-1.5039 11.312 0 4.7539 1.5039 6.1133 1.4102 10.605 0 4.5938-1.4688 6.3125-1.5469 11.191 0 4.4648 1.4102 5.8281 1.5039 10.605 0 4.7344-1.5039 6.5859-1.5039 11.254 0 2.0039 0.64844 3.6328 1.0078 4.8516 1.0781l0.039063-6.5859c-1.0195 0.13672-2.8594-0.33203-5.1914-1.0859z"/>
                        <path d="m27.32 48.441 1.2227 1.9297c0.60547 0.95703 6.0508 9.6406 12.414 22.891 1.1953 0.12891 2.4922 0.47266 4.2422 1.0273 4.6641 1.5 6.5039 1.5 11.258 0 1.8789-0.58984 3.2031-0.94531 4.4648-1.0508-0.23438-1.0547-0.50781-2.1211-0.83594-3.1758-1.8945-6.0977-13.18-28.531-13.293-28.758l-1.0312-2.0547 0.5625 2.2305c0.23828 0.94141 5.1172 20.238 6.8945 26.77-2.3281-3.9648-7.8555-13.254-8.2031-13.844-0.21484-0.76172-4.0977-14.773-3.3711-24.75 0.55859-15.594 4.6523-27.117 4.6953-27.23l0.42969-1.1914-0.85547 0.93359c-0.10156 0.10938-10.035 11.285-8.6797 35.883 0.11328 2.9844 0.42969 6.168 0.91406 9.2617-3.125-3.7031-8.2344-7.1953-8.2891-7.2344l-1.2656-0.85938 0.92188 1.2227c0.0625 0.082032 6.1953 8.2383 10.207 15.008 0.49219 2.2148 1.4492 5.3672 2.2969 8.1523 0.33594 1.1055 0.66016 2.1758 0.94141 3.1367-5.4727-8.1055-13.938-16.598-14.027-16.688z"/>
                        <path d="m30.594 75.301c1.1602-0.16406 2.418-0.49609 4.0039-1.0078 0.41016-0.13281 0.78516-0.24609 1.1484-0.35156-3.3945-6.7148-7.582-16.062-9.1758-24.039-2.8906-12.363 1.2773-21.078 1.3164-21.164 0 0-11.117 14.633-0.62109 39.707 1.1641 2.7734 2.2852 5.0234 3.3281 6.8555z"/>
                        <path d="m19.891 73.402c0.98047 0.17969 2.1289 0.47656 3.4492 0.89062 1.4648 0.46484 2.6523 0.78516 3.7305 0.96094-0.011718-0.039062-0.023437-0.082031-0.035156-0.125-4.3281-13.762-19.59-31.547-19.746-31.727l-1.4766-1.7109 1.0625 1.9922c0.054688 0.10547 5.8203 11.148 12.34 27.918 0.23438 0.59766 0.45312 1.1992 0.67578 1.8008z"/>
                      </g>
                    </svg>
                  </span>
                  <h2 className="text-lg font-semibold">Moorbewirtschaftung</h2>
                  <div className="ms-2">
                    <Switch 
                      container="sliderMoor"
                    />
                  </div>
                </div>
                <div id="sliderMoor">
                  <Slider
                    label="Leistung (MW)"
                    min={0.64}
                    max={5}
                    step={1}
                    value={biomass}
                    onChange={setBiomass}
                    unit="MW"
                    goal={4}
                    tooltipMessage="Hier kommt ein Text über Moorbewirtschaftung"
                  />
                </div>
                <div className="flex items-center pt-8 pb-4">
                  <span className="me-2">
                    <svg width="24" height="24" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#1e293b" d="m14.02 20.398h61.785c2.4844 0 4.7383 1.0156 6.3711 2.6484 0 0.066406 2.6484 2.3203 2.6484 6.3711v9.8828h5.5039c2.5586 0 4.6719 2.1094 4.6719 4.6719v12.059c0 2.1016-1.3672 3.25-1.3672 3.3008-0.84375 0.84375-2.0156 1.3672-3.3008 1.3672h-5.5039v9.8828c0 4.0547-2.6484 6.3047-2.6484 6.3711-1.6328 1.6328-3.8906 2.6484-6.3711 2.6484h-61.789c-4.9688 0-9.0195-4.0547-9.0195-9.0234v-41.156c0-4.9688 4.0508-9.0234 9.0195-9.0234zm56.039 43.82v-28.438c0-3.9492-6-3.9492-6 0v28.438c0 3.9492 6 3.9492 6 0zm-14.762 0v-28.438c0-3.9492-6-3.9492-6 0v28.438c0 3.9492 6 3.9492 6 0zm-14.766 0v-28.438c0-3.9492-6-3.9492-6 0v28.438c0 3.9492 6 3.9492 6 0zm-14.766 0v-28.438c0-3.9492-6-3.9492-6 0v28.438c0 3.9492 6 3.9492 6 0zm63.234-18.918h-4.1758v9.3984h4.1758zm-13.195-18.902h-61.785c-1.6562 0-3.0195 1.3633-3.0195 3.0195v41.16c0 1.6562 1.3633 3.0195 3.0195 3.0195h61.785c0.82812 0 1.582-0.33984 2.1289-0.89062l0.007812 0.007813c0.54688-0.54688 0.88281-1.3047 0.88281-2.1367v-41.156c0-0.83203-0.33984-1.5898-0.88281-2.1367l-0.007812 0.007813c-0.54688-0.55469-1.3008-0.89453-2.1289-0.89453z" fillRule="evenodd"/>
                    </svg>
                  </span>
                  <h2 className="text-lg font-semibold">Batteriespeicher</h2>
                  <div className="ms-2">
                    <Switch 
                      container="sliderBattery"
                    />
                  </div>
                </div>
                <div id="sliderBattery">
                  <Slider
                    label="Kapazität (MWh)"
                    min={0.38}
                    max={282.5}
                    step={10}
                    value={battery}
                    onChange={setBattery}
                    unit="MWh"
                    goal={40}
                    tooltipMessage="Hier kommt ein Text über Batteriespeicher"
                  />
                </div>
                <div className="flex items-center pt-8 pb-4">
                  <span className="me-2">
                    <svg width="24" height="24" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                      <g fill="#1e293b">
                        <path d="m50.98 83.812-2.2109-2.2773c-10.762-11.102-13.004-24.707-5.7227-34.734 3.2227-4.4141 4.6914-9.875 4.1172-15.312l-1.3867-14.301 3.6992 4.0391c9.7773 10.684 11.82 23.461 5.3008 33.133l-1.1719 1.7422c-2.8281 4.1797-4.1328 9.207-3.6953 14.23z"/>
                        <path d="m76.715 82.215-1.75-1.8047c-8.5156-8.7812-10.289-19.547-4.5312-27.484h0.003906c2.5508-3.4961 3.7148-7.8125 3.2578-12.117l-1.0938-11.316 2.9258 3.1992c7.7383 8.4531 9.3555 18.566 4.1953 26.219l-0.92969 1.3789c-2.2383 3.3047-3.2695 7.2812-2.9219 11.262z"/>
                        <path d="m25.602 82.215-1.7461-1.8047c-8.5156-8.7812-10.289-19.547-4.5312-27.484 2.5547-3.4961 3.7148-7.8125 3.2617-12.117l-1.0977-11.316 2.9258 3.1992c7.7383 8.4531 9.3555 18.566 4.1953 26.219l-0.92969 1.3789c-2.2344 3.3047-3.2695 7.2812-2.9219 11.258z"/>
                      </g>
                    </svg>
                  </span>
                  <h2 className="text-lg font-semibold">Wärmespeicher</h2>
                  <div className="ms-2">
                    <Switch 
                      container="sliderHeat"
                    />
                  </div>
                </div>
                <div id="sliderHeat">
                  <Slider
                    label="Zwischenspeicherung des täglichen Wärmbedarfs (%)"
                    min={0}
                    max={100}
                    step={10}
                    value={heat}
                    onChange={setHeat}
                    unit="%"
                    goal={50}
                    tooltipMessage="Hier kommt ein Text über Wärmespeicher"
                  />
                </div>
                <div className="flex items-center pt-8 pb-4">
                  <span className="me-2">
                    <svg width="24" height="24" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.14773 18V6.36364H5.25568V11.2898H10.6477V6.36364H12.7614V18H10.6477V13.0568H5.25568V18H3.14773ZM14.3192 20V18.8693L17.0522 16.6023C17.2794 16.4129 17.4745 16.2405 17.6374 16.0852C17.8003 15.9261 17.9253 15.7708 18.0124 15.6193C18.0995 15.464 18.1431 15.2955 18.1431 15.1136C18.1431 14.8182 18.0256 14.5871 17.7908 14.4205C17.5559 14.2538 17.2681 14.1705 16.9272 14.1705C16.5635 14.1705 16.27 14.2633 16.0465 14.4489C15.8268 14.6307 15.7169 14.8845 15.7169 15.2102H14.2113C14.2113 14.5057 14.4669 13.9508 14.9783 13.5455C15.4934 13.1364 16.1506 12.9318 16.9499 12.9318C17.4916 12.9318 17.9631 13.0284 18.3647 13.2216C18.77 13.411 19.0844 13.6686 19.3078 13.9943C19.5313 14.3201 19.6431 14.6856 19.6431 15.0909C19.6431 15.4167 19.5768 15.7197 19.4442 16C19.3116 16.2765 19.1052 16.5549 18.8249 16.8352C18.5446 17.1117 18.1866 17.411 17.751 17.733L16.5806 18.6648V18.7159H19.7681V20H14.3192Z" fill="#1e293b"/>
                    </svg>
                  </span>
                  <h2 className="text-lg font-semibold">Wasserstofferzeugung</h2>
                  <div className="ms-2">
                    <Switch 
                      container="sliderH2"
                    />
                  </div>
                </div>
                <div id="sliderH2">
                  <Slider
                    label="Leistung (MW)"
                    min={0}
                    max={10}
                    step={1}
                    value={h2}
                    onChange={setH2}
                    unit="MW"
                    goal={4.75}
                    tooltipMessage="Hier kommt ein Text über H2-Erzeugung"
                  />
                </div>
              </div>
            </div>
            <div className="flex grow max-w-[32rem] pe-8">
              <div className="me-4 w-full bg-white p-8 rounded-lg" style={{height: "fit-content"}}>
                <h1 className="text-lg font-light uppercase pb-4">Verbrauch</h1>
                <div className="flex items-center pb-4">
                  <span className="me-2">
                    <svg width="24" height="24" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#1e293b" d="m73.477 43.75h-21.133l10.234-36.504c0.17578-0.87891-0.89844-1.3867-1.4062-0.66406l-35.879 47.051c-0.74219 1.0938-0.039063 2.6172 1.2305 2.6172h21.133l-10.234 36.504c-0.17578 0.87891 0.89844 1.3867 1.4062 0.66406l35.879-47.031c0.72266-1.1133 0.039063-2.6367-1.2305-2.6367z"/>
                    </svg>
                  </span>
                  <h2 className="text-lg font-semibold">Strom</h2>
                  <div className="ms-2">
                    <Switch 
                      container="sliderElectricityConsumption"
                    />
                  </div>
                </div>
                <div id="sliderElectricityConsumption">
                  <Slider
                    label="Anteil am aktuellen Verbrauch (%)"
                    min={50}
                    max={200}
                    step={5}
                    value={electricityConsumption}
                    onChange={setElectricityConsumption}
                    unit="%"
                    goal={75}
                    tooltipMessage="Hier kommt ein Text über Stromverbrauch"
                  />
                </div>
                <div className="flex items-center pt-8 pb-4">
                  <span className="me-2">
                    <svg width="24" height="24" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                      <g fill="#1e293b">
                        <path d="m50.98 83.812-2.2109-2.2773c-10.762-11.102-13.004-24.707-5.7227-34.734 3.2227-4.4141 4.6914-9.875 4.1172-15.312l-1.3867-14.301 3.6992 4.0391c9.7773 10.684 11.82 23.461 5.3008 33.133l-1.1719 1.7422c-2.8281 4.1797-4.1328 9.207-3.6953 14.23z"/>
                        <path d="m76.715 82.215-1.75-1.8047c-8.5156-8.7812-10.289-19.547-4.5312-27.484h0.003906c2.5508-3.4961 3.7148-7.8125 3.2578-12.117l-1.0938-11.316 2.9258 3.1992c7.7383 8.4531 9.3555 18.566 4.1953 26.219l-0.92969 1.3789c-2.2383 3.3047-3.2695 7.2812-2.9219 11.262z"/>
                        <path d="m25.602 82.215-1.7461-1.8047c-8.5156-8.7812-10.289-19.547-4.5312-27.484 2.5547-3.4961 3.7148-7.8125 3.2617-12.117l-1.0977-11.316 2.9258 3.1992c7.7383 8.4531 9.3555 18.566 4.1953 26.219l-0.92969 1.3789c-2.2344 3.3047-3.2695 7.2812-2.9219 11.258z"/>
                      </g>
                    </svg>
                  </span>
                  <h2 className="text-lg font-semibold">Wärme</h2>
                  <div className="ms-2">
                    <Switch 
                      container="sliderHeatConsumption"
                    />
                  </div>
                </div>
                <div id="sliderHeatConsumption">
                  <Slider
                    label="Anteil am aktuellen Verbrauch (%)"
                    min={50}
                    max={200}
                    step={5}
                    value={heatConsumption}
                    onChange={setHeatConsumption}
                    unit="%"
                    goal={75}
                    tooltipMessage="Hier kommt ein Text über Wärmeverbrauch"
                  />
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/images/einstellungen_ergebnisse.svg"
                width={376}
                height={971}
              />
            </div>
          </div>
        </LayoutSimple> */}
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
            <PrimaryButtonMedium
              href="/questionsDefault/scenarioDetail"
              icon={ArrowRightIcon}
              text="Ergebnisse sehen"
            />
          </div>
        </div>
      </BottomNav>
    </>
  );
}
