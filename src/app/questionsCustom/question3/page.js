"use client";

import BottomNav from "../../../components/common/BottomNav";
import Breadcrumb from "../../../components/common/Breadcrumb";
import Goal from "../../../components/common/Goal";
import LayoutSimple from "../../../components/layout/LayoutSimple";
import Switch from "../../../components/common/Switch";
import { useState } from 'react';
import { LightButtonMedium, PrimaryButtonMedium } from "../../../components/common/Buttons";
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import dynamic from 'next/dynamic';

// Dynamically load EnergyShare and Slider
const EnergyShare = dynamic(() => import('../../../components/charts/EnergyShare'), {
  ssr: false,
});

const Slider = dynamic(() => import('../../../components/common/Slider'), {
  ssr: false,
});

export default function Question3() {
  const [windEnergy, setWindEnergy] = useState(120);
  const [settlementDistance, setSettlementDistance] = useState(700);
  const [landUsage, setLandUsage] = useState(8);
  const [pvProduction, setPvProduction] = useState(100);
  const [pvRoofProduction, setpvRoofProduction] = useState(1);

  const totalEnergyProduction = windEnergy + pvProduction + pvRoofProduction;

  const data = [windEnergy, settlementDistance, landUsage, pvProduction, pvRoofProduction];

  return (
    <>
      <Breadcrumb />
      <main className="grow">
        <LayoutSimple>
          <div className="flex justify-between pb-8">
            <span>Bitte nutzen Sie die Einstellungen und Schieberegler, um Ihr zukünftiges Szenario zu erstellen.</span>
            <Goal />
          </div>
          <div className="flex pt-12 justify-between">
            <div className="flex grow max-w-[60rem] pe-8">
              <div className="me-4 flex-1">
                <Slider
                  label="Leistung (MW)"
                  min={38.72}
                  max={58.72}
                  step={2}
                  value={windEnergy}
                  onChange={setWindEnergy}
                  unit="MW"
                  goal={55}
                />
              </div>
              <div className="ms-4 flex-1">
                <Slider
                  label="Leistung (MW)"
                  min={11.80}
                  max={221.80}
                  step={10}
                  value={pvProduction}
                  onChange={setPvProduction}
                  unit="MW"
                  goal={102}
                />
              </div>
              <div className="ms-4 flex-1">
                <Slider
                  label="Leistung (MW)"
                  min={0.62}
                  max={2.00}
                  step={0.4}
                  value={pvRoofProduction}
                  onChange={setpvRoofProduction}
                  unit="MW"
                  goal={1}
                />
              </div>
            </div>
            <div className="flex justify-end">
              <div className="w-full max-w-4xl bg-white border rounded-lg shadow-md">
                <div className="p-6 bg-gray-100 border-b">
                  <h2 className="text-xl font-medium text-gray-700">Energieproduktion 2040</h2>
                  <p className="text-3xl font-bold text-gray-900">{totalEnergyProduction.toFixed(1)} GWh</p>
                  <p className="text-lg text-gray-600">2023: <span className="italic text-indigo-700">126,68 GWh</span></p>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-700 mb-4">Anteil pro Energieträger</h3>
                  <div>
                    <EnergyShare data={data} />
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
              href="/questionsCustom/question2"
              icon={ArrowLeftIcon}
              text="Zurück"
            />
          </div>
          <div className="pe-2">
            <PrimaryButtonMedium
              href="/questionsCustom/question4"
              icon={ArrowRightIcon}
              text="Ergebnisse sehen"
            />
          </div>
        </div>
      </BottomNav>
    </>
  );
}
