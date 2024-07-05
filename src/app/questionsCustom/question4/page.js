import BottomNav from "../../../components/common/BottomNav";
import Breadcrumb from "../../../components/common/Breadcrumb";
import LayoutSimple from "../../../components/layout/LayoutSimple";
import { LightButtonMedium, PrimaryButtonMedium } from "../../../components/common/Buttons";
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { LinkIconBlue } from "../../../components/common/Links"

export default function Question4() {
  return (
    <>
      <Breadcrumb
        isShare={true}
      />
      <main className="grow">
        <LayoutSimple>
          <div className="relative flex justify-center pb-8">
            <h1 className="text-xl font-semibold">Mein Zukunftszenario</h1>
            <div className="absolute top-0 right-0">
              <LinkIconBlue
                href="/pages/comparison"
                text="Mit anderen Szenarien vergleichen"
              >
                <ArrowRightIcon className="h4 w-4"/>
              </LinkIconBlue>
            </div>
          </div>
          <div className="flex flex-wrap -mx-2 mb-10">
            <div className="w-full md:w-1/6 px-2 mb-4 md:mb-0 flex">
              <div className="bg-white p-6 border rounded-lg shadow flex flex-col w-full">
                <h3 className="text-lg font-medium flex-grow">Gesamtenergie&nbsp;-produktion</h3>
                <p className="text-3xl font-bold">32,8 GWh</p>
                <p className="text-sm">+8,3%</p>
              </div>
            </div>
            <div className="w-full md:w-1/6 px-2 mb-4 md:mb-0 flex">
              <div className="bg-white p-6 border rounded-lg shadow flex flex-col w-full">
                <h3 className="text-lg font-medium flex-grow">Anteil Flächennutzung</h3>
                <p className="text-3xl font-bold">8,8%</p>
                <p className="text-sm">+150%</p>
              </div>
            </div>
            <div className="w-full md:w-1/6 px-2 mb-4 md:mb-0 flex">
              <div className="bg-white p-6 border rounded-lg shadow flex flex-col w-full">
                <h3 className="text-lg font-medium flex-grow">Windkraft</h3>
                <p className="text-3xl font-bold">15,0 GWh</p>
                <p className="text-sm">+200%</p>
              </div>
            </div>
            <div className="w-full md:w-1/6 px-2 mb-4 md:mb-0 flex">
              <div className="bg-white p-6 border rounded-lg shadow flex flex-col w-full">
                <h3 className="text-lg font-medium flex-grow">Photovoltaik</h3>
                <p className="text-3xl font-bold">10,0 GWh</p>
                <p className="text-sm">+200%</p>
              </div>
            </div>
            <div className="w-full md:w-1/6 px-2 mb-4 md:mb-0 flex">
              <div className="bg-white p-6 border rounded-lg shadow flex flex-col w-full">
                <h3 className="text-lg font-medium flex-grow">Biomasse</h3>
                <p className="text-3xl font-bold">3,0 GWh</p>
                <p className="text-sm">+50%</p>
              </div>
            </div>
            <div className="w-full md:w-1/6 px-2 flex">
              <div className="bg-white p-6 border rounded-lg shadow flex flex-col w-full">
                <h3 className="text-lg font-medium flex-grow">Wasserstoff</h3>
                <p className="text-3xl font-bold">4,8 GWh</p>
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
              href="/questionsCustom/question3"
              icon={ArrowLeftIcon}
              text="Zurück"
            />
          </div>
          <div className="pe-2 invisible">
            <PrimaryButtonMedium
              href=""
              text=""
            />
          </div>
        </div>
      </BottomNav>
    </>
  );
}
