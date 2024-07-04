"use client";

import BottomNav from "../../../components/common/BottomNav";
import BreadcrumbDefault from "../../../components/common/BreadcrumbDefault";
import Goal from "../../../components/common/Goal";
import LayoutSimple from "../../../components/layout/LayoutSimple";
import { LightButtonMedium, PrimaryButtonMedium } from "../../../components/common/Buttons";
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

export default function Question3() {
  return (
    <>
      <BreadcrumbDefault />
      <main className="grow">
        <LayoutSimple>
          <div className="relative flex justify-center pb-8">
            <h1 className="text-xl font-semibold">Erneuerbare Energiequellen</h1>
            <div className="absolute top-0 right-0">
              <Goal />
            </div>
          </div>
          <div className="flex">
            <div className="pe-24">
              <p className="pb-8">In der Region spielen erneuerbare Energien eine zunehmend wichtige Rolle. Photovoltaikanlagen und Windparks prägen bereits das Landschaftsbild und leisten einen wesentlichen Beitrag zur nachhaltigen Energieversorgung der Gegend. Parallel dazu wird intensiv an Lösungen im Bereich Wassermanagement gearbeitet, um den Herausforderungen des Klimawandels effektiv zu begegnen und Ressourcen schonend zu nutzen. Wasserstofftechnologie, als grüne Alternative, gewinnt ebenfalls an Bedeutung und ergänzt das Portfolio der Region im Streben nach einer umweltfreundlichen Zukunft.</p>
              <p className="text-lg font-semibold pb-2">Welche der folgenden erneuerbaren Energiequellen sollten Ihrer Meinung nach in unserer Region weiter ausgebaut werden?</p>
              <div>
                <select
                  id="location"
                  name="location"
                  className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue="Canada"
                >
                  <option>Photovoltaik</option>
                  <option>Wind</option>
                  <option>Biomasse</option>
                </select>
              </div>
            </div>
            <div>
              <svg
                className="h-[400px] w-[400p] border border-gray-300 bg-white text-gray-300"
                preserveAspectRatio="none"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 200 200"
                aria-hidden="true"
              >
                <path vectorEffect="non-scaling-stroke" strokeWidth={1} d="M0 0l200 200M0 200L200 0" />
              </svg>
            </div>
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
              text="Weitere Frage antworten"
            />
          </div>
        </div>
      </BottomNav>
    </>
  );
}
