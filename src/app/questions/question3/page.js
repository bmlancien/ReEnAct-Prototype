"use client";

import BottomNav from "../../../components/common/BottomNav";
import Breadcrumb from "../../../components/common/Breadcrumb";
import EnergyShare from "../../../components/charts/EnergyShare";
import Goal from "../../../components/common/Goal";
import LayoutSimple from "../../../components/layout/LayoutSimple";
import Slider from "../../../components//common/Slider";
import { useState } from 'react';
import { LightButtonMedium, PrimaryButtonMedium } from "../../../components/common/Buttons";
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

export default function Question3() {
  const [windEnergy, setWindEnergy] = useState(55);
  const [settlementDistance, setSettlementDistance] = useState(700);
  const [landUsage, setLandUsage] = useState(8);
  const [pvProduction, setPvProduction] = useState(55);
  const [freeSpacePv, setFreeSpacePv] = useState(50);
  const [roofPv, setRoofPv] = useState(50);

  return (
    <>
      <Breadcrumb />
      <main className="grow">
        <LayoutSimple>
          <div className="flex justify-between pb-8">
            <span>Bitte nutzen Sie die Einstellungen und Schieberegler, um Ihr zukünftiges Szenario zu erstellen.</span>
            <Goal />
          </div>
          <div className="flex pt-12 pb-32 pe-12">
            <div className="flex grow">
              <div className="me-4">
                <div className="flex items-center pb-4">
                  <span className="me-2">
                    <svg width="32" height="32" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
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
                </div>
                <Slider
                  label="Anteil an Energieproduktion (%)"
                  min={30}
                  max={80}
                  step={1}
                  value={windEnergy}
                  onChange={setWindEnergy}
                  unit="%"
                />
                <Slider
                  label="Abstand zu Siedlungen (m)"
                  min={400}
                  max={1000}
                  step={1}
                  value={settlementDistance}
                  onChange={setSettlementDistance}
                  unit="m"
                />
                <Slider
                  label="Nutzung Landschaftsschutzgebiete (%)"
                  min={4}
                  max={12}
                  step={1}
                  value={landUsage}
                  onChange={setLandUsage}
                  unit="%"
                />
              </div>
              <div className="ms-4">
                <div className="flex items-center pb-4">
                  <span className="me-2">
                    <svg width="32" height="32" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                      <path d="m72.602 65h4.1992l16.898-45h-30.5l-16.898 45h21.102v10h-35l-0.003906-10h4.1992l17-45h-30.297l-16.902 45h21.102v10h-17.398v5h80v-5h-17.5zm-26.102-40-5.6992 15h-7.1992l5.6016-15h7.3008zm-19.699 0h7.1992l-5.6992 15h-7.1016zm-13.102 35 5.6016-15h7.1016l-5.6016 15zm12.5 0 5.6016-15h7.1992l-5.6992 15zm60.301-35-5.6992 15h-7.1992l5.6016-15h7.3008zm-19.699 0h7.1992l-5.6016 15h-7.1992zm-13.301 35 5.6016-15h7.1992l-5.6016 15zm12.699 0 5.6016-15h7.1992l-5.6992 15z" fill="#1e293b"/>
                    </svg>
                  </span>
                  <h2 className="text-lg font-semibold">Photovoltaik</h2>
                </div>
                <Slider
                  label="Anteil an Energieproduktion (%)"
                  min={30}
                  max={80}
                  step={1}
                  value={pvProduction}
                  onChange={setPvProduction}
                  unit="%"
                />
                <Slider
                  label="Anteil Freiflächen-PV (%)"
                  min={0}
                  max={100}
                  step={1}
                  value={freeSpacePv}
                  onChange={setFreeSpacePv}
                  unit="%"
                />
                <Slider
                  label="Anteil Aufdach-PV (%)"
                  min={0}
                  max={100}
                  step={1}
                  value={roofPv}
                  onChange={setRoofPv}
                  unit="%"
                />
              </div>
            </div>
            <div className="flex justify-end">
              <div className="w-full max-w-4xl bg-white border rounded-lg shadow-md">
                <div className="p-6 bg-gray-100 border-b">
                  <h2 className="text-xl font-medium text-gray-700">Energieproduktion 2040</h2>
                  <p className="text-3xl font-bold text-gray-900">32,8 GWh</p>
                  <p className="text-lg text-gray-600">2023: 31,6 GWh</p>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-700 mb-4">Anteil pro Energieträger</h3>
                  <div>
                    <EnergyShare />
                  </div>
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
              href="/questions/question2"
              icon={ArrowLeftIcon}
              text="Zurück"
            />
          </div>
          <div className="pe-2">
            <PrimaryButtonMedium
              href="/questions/question4"
              icon={ArrowRightIcon}
              text="Weiter"
            />
          </div>
        </div>
      </BottomNav>
    </>
  );
}
