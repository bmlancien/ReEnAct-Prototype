import BottomNav from "../../../components/common/BottomNav";
import Breadcrumb from "../../../components/common/Breadcrumb";
import LayoutSimple from "../../../components/layout/LayoutSimple";
import Link from "next/link";
import { LightButtonMedium, PrimaryButtonMedium } from "../../../components/common/Buttons";
import { ArrowLeftIcon, ArrowRightIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { LinkIconBlue } from "../../../components/common/Links";

export default function ScenarioDetail() {
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
            Szenario Details
          </span>
        </div>
      </nav>
      <main className="grow">
        <LayoutSimple>
          <div className="relative flex justify-center pb-8">
            <h1 className="text-xl font-semibold pe-4">Mein Zukunftszenario</h1>
          </div>
          <div className="flex flex-wrap -mx-2 mb-10">
            <div className="w-full md:w-1/6 px-2 mb-4 md:mb-0 flex">
              <div className="bg-white p-6 border rounded-lg shadow flex flex-col w-full">
                <h3 className="text-lg font-medium flex-grow">Gesamtenergie&nbsp;-produktion</h3>
                <p className="text-3xl font-bold"><span className="italic text-indigo-700">234 GWh</span></p>
                <p className="text-sm">+8,3%</p>
              </div>
            </div>
            <div className="w-full md:w-1/6 px-2 mb-4 md:mb-0 flex">
              <div className="bg-white p-6 border rounded-lg shadow flex flex-col w-full">
                <h3 className="text-lg font-medium flex-grow">Anteil Flächennutzung</h3>
                <p className="text-3xl font-bold"><span className="italic text-indigo-700">8,8%</span></p>
                <p className="text-sm">+150%</p>
              </div>
            </div>
            <div className="w-full md:w-1/6 px-2 mb-4 md:mb-0 flex">
              <div className="bg-white p-6 border rounded-lg shadow flex flex-col w-full">
                <h3 className="text-lg font-medium flex-grow">Windkraft</h3>
                <p className="text-3xl font-bold"><span className="italic text-indigo-700">100 GWh</span></p>
                <p className="text-sm">+200%</p>
              </div>
            </div>
            <div className="w-full md:w-1/6 px-2 mb-4 md:mb-0 flex">
              <div className="bg-white p-6 border rounded-lg shadow flex flex-col w-full">
                <h3 className="text-lg font-medium flex-grow">Photovoltaik</h3>
                <p className="text-3xl font-bold"><span className="italic text-indigo-700">111 GWh</span></p>
                <p className="text-sm">+200%</p>
              </div>
            </div>
            <div className="w-full md:w-1/6 px-2 mb-4 md:mb-0 flex">
              <div className="bg-white p-6 border rounded-lg shadow flex flex-col w-full">
                <h3 className="text-lg font-medium flex-grow">Biomasse</h3>
                <p className="text-3xl font-bold"><span className="italic text-indigo-700">3,0 GWh</span></p>
                <p className="text-sm">+50%</p>
              </div>
            </div>
            <div className="w-full md:w-1/6 px-2 flex">
              <div className="bg-white p-6 border rounded-lg shadow flex flex-col w-full">
                <h3 className="text-lg font-medium flex-grow">Wasserstoff</h3>
                <p className="text-3xl font-bold"><span className="italic text-indigo-700">4,8 GWh</span></p>
                <p className="text-sm">+125%</p>
              </div>
            </div>
          </div>
          <div className="columns-2 ">
            <div className="bg-white pe-6 mb-10">
              <p className="mb-6">
                Dieses Szenario setzt auf eine ausgewogene Mischung aus erneuerbaren Energiequellen, um die Klimaziele 2040 zu erreichen. Durch die Kombination von Photovoltaikanlagen, Windparks, Biomasse und Bioenergie wird der Energiebedarf nachhaltig gedeckt und die Abhängigkeit von einer einzelnen Energieart reduziert.
              </p>
              <p className="mb-6">
                Der Einsatz von PV-Anlagen auf Dächern und Freiflächen ergänzt die Windenergie und nutzt vorhandene Ressourcen optimal. Moderater Flächenverbrauch schützt natürliche Gebiete und berücksichtigt den Naturschutz.
              </p>
              <p className="mb-6">
                Einwohner und lokale Wirtschaft sind eingeladen, aktiv teilzunehmen. Die Maßnahmen sind nicht nur umweltschonend, sondern auch neu wirtschaftlich.
              </p>
            </div>
            <div className="p-6 bg-slate-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Vorteile</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Ausgewogener Energiemix erhöht Resilienz und Zuverlässigkeit.</li>
                    <li>Nutzung mehrerer erneuerbarer Quellen reduziert die Abhängigkeit von einer einzigen Energieart.</li>
                    <li>Moderater Flächenverbrauch, wodurch natürliche Gebiete besser erhalten bleiben.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Nachteile</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Komplexere Infrastruktur und Verwaltung aufgrund der Vielfalt der Energiequellen.</li>
                    <li>Höhere Anfangskosten und logistische Herausforderungen beim Aufbau diverser erneuerbarer Projekte.</li>
                  </ul>
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
              href="/questionsDefault/createScenario"
              icon={ArrowLeftIcon}
              text="Szenario ändern"
            />
          </div>
          <div className="pe-2">
            <PrimaryButtonMedium
              href="/pages/comparison"
              text="Szenarienvergleich"
            />
          </div>
        </div>
      </BottomNav>
    </>
  );
}
