"use client";

import BottomNav from "../../../components/common/BottomNav";
import BreadcrumbDefault from "../../../components/common/BreadcrumbDefault";
import Goal from "../../../components/common/Goal";
import LayoutSimple from "../../../components/layout/LayoutSimple";
import { LightButtonMedium, PrimaryButtonMedium } from "../../../components/common/Buttons";
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

export default function Question4() {
  return (
    <>
      <BreadcrumbDefault />
      <main className="grow">
        <LayoutSimple>
          <div className="relative flex justify-center pb-8">
            <h1 className="text-xl font-semibold">Windanlagenstandort</h1>
            <div className="absolute top-0 right-0">
              <Goal />
            </div>
          </div>
          <div className="flex">
            <div className="pe-24">
              <p className="pb-8">Die Errichtung von Windanlagen fernab von Wohngebieten reduziert Lärmbelästigung, erfordert jedoch effiziente Lösungen für Stromübertragung und Netzintegration. Der Naturschutz muss beim Ausbau erneuerbarer Energien berücksichtigt werden, um die biologische Vielfalt zu wahren. Zudem ist die Gewährleistung einer zuverlässigen Stromversorgung zentral, um den Energiebedarf zu decken und Autarkieziele zu erreichen, was eine sorgfältige Balance zwischen Nachhaltigkeit und Versorgungssicherheit verlangt.</p>
              <p className="text-lg font-semibold pb-2">Wie wichtig ist es für Sie, dass Windanlagen fernab von Wohngebieten errichtet werden, um Lärmbelästigung zu reduzieren?</p>
              <div>
                <select
                  id="location"
                  name="location"
                  className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue="Canada"
                >
                  <option>Unwichtig</option>
                  <option>Eher unwichtig</option>
                  <option>Eher wichtig</option>
                  <option>Wichtig</option>
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
              href="/questionsDefault/question3"
              icon={ArrowLeftIcon}
              text="Zurück"
            />
          </div>
          <div className="pe-2">
            <PrimaryButtonMedium
              href="/questionsDefault/question5"
              icon={ArrowRightIcon}
              text="Weitere Frage antworten"
            />
          </div>
        </div>
      </BottomNav>
    </>
  );
}
