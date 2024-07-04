"use client";

import BottomNav from "../../../components/common/BottomNav";
import BreadcrumbDefault from "../../../components/common/BreadcrumbDefault";
import Goal from "../../../components/common/Goal";
import LayoutSimple from "../../../components/layout/LayoutSimple";
import { useState } from 'react';
import { LightButtonMedium, PrimaryButtonMedium } from "../../../components/common/Buttons";
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import dynamic from 'next/dynamic';

const EnergyShare = dynamic(() => import('../../../components/charts/EnergyShare'), {
  ssr: false,
});

export default function Question3() {
  const [windEnergy, setWindEnergy] = useState(55);
  const [settlementDistance, setSettlementDistance] = useState(700);
  const [landUsage, setLandUsage] = useState(8);
  const [pvProduction, setPvProduction] = useState(55);
  const [freeSpacePv, setFreeSpacePv] = useState(50);
  const [roofPv, setRoofPv] = useState(50);

  const data = [windEnergy, settlementDistance, landUsage, pvProduction, freeSpacePv, roofPv];

  return (
    <>
      <BreadcrumbDefault />
      <main className="grow">
        <LayoutSimple>
          <div className="flex justify-between pb-8">
            <span>Bitte nutzen Sie die Einstellungen und Schieberegler, um Ihr zukünftiges Szenario zu erstellen.</span>
            <Goal />
          </div>
        </LayoutSimple>
      </main>
      <BottomNav>
        <div className="flex">
          <div className="pe-2">
            <LightButtonMedium
              href="/questionsDefault/question2"
              icon={ArrowLeftIcon}
              text="Zurück"
            />
          </div>
          <div className="pe-2">
            <PrimaryButtonMedium
              href="/questionsDefault/question4"
              icon={ArrowRightIcon}
              text="Ergebnisse sehen"
            />
          </div>
        </div>
      </BottomNav>
    </>
  );
}
