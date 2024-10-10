"use client";

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import LayoutSimple from "../../../components/layout/LayoutSimple";
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { LinkIconBlue } from "../../../components/common/Links";

// Scenario data here or import it from another file
const scenarios = {
  1: {
    title: "Wind-Repowering",
    stats: [
      { name: "Gesamtenergie-produktion", value: "234 GWh", change: "+8,3%" },
      { name: "Anteil Flächennutzung", value: "8,8%", change: "+150%" },
      { name: "Windkraft", value: "100 GWh", change: "+200%" },
      { name: "Photovoltaik", value: "111 GWh", change: "+200%" },
      { name: "Biomasse", value: "3,0 GWh", change: "+50%" },
      { name: "Wasserstoff", value: "4,8 GWh", change: "+125%" }
    ],
    description: [
      "Dieses Szenario setzt auf eine ausgewogene Mischung aus erneuerbaren Energiequellen, um die Klimaziele 2040 zu erreichen. Durch die Kombination von Photovoltaikanlagen, Windparks, Biomasse und Bioenergie wird der Energiebedarf nachhaltig gedeckt und die Abhängigkeit von einer einzelnen Energieart reduziert..",
      "Der Einsatz von PV-Anlagen auf Dächern und Freiflächen ergänzt die Windenergie und nutzt vorhandene Ressourcen optimal. Moderater Flächenverbrauch schützt natürliche Gebiete und berücksichtigt den Naturschutz.",
      "Einwohner und lokale Wirtschaft sind eingeladen, aktiv teilzunehmen. Die Maßnahmen sind nicht nur umweltschonend, sondern auch neu wirtschaftlich."
    ],
    vorteile: [
      "Ausgewogener Energiemix erhöht Resilienz und Zuverlässigkeit.",
      "Nutzung mehrerer erneuerbarer Quellen reduziert die Abhängigkeit von einer einzigen Energieart.",
      "Moderater Flächenverbrauch, wodurch natürliche Gebiete besser erhalten bleiben."
    ],
    nachteile: [
      "Komplexere Infrastruktur und Verwaltung aufgrund der Vielfalt der Energiequellen.",
      "Höhere Anfangskosten und logistische Herausforderungen beim Aufbau diverser erneuerbarer Projekte."
    ]
  },
  2: {
    title: "Zubau Wind und PV",
    stats: [
      { name: "Gesamtenergie-produktion", value: "300 GWh", change: "+25%" },
      { name: "Anteil Flächennutzung", value: "12%", change: "+180%" },
      { name: "Windkraft", value: "180 GWh", change: "+220%" },
      { name: "Photovoltaik", value: "120 GWh", change: "+210%" },
      { name: "Biomasse", value: "2,5 GWh", change: "+30%" },
      { name: "Wasserstoff", value: "6,0 GWh", change: "+140%" }
    ],
    description: [
      "In diesem Szenario wird der Ausbau von Windkraftanlagen und Photovoltaikanlagen stark vorangetrieben, um den wachsenden Energiebedarf zu decken und die Klimaziele 2040 zu erreichen.",
      "Durch den großflächigen Einsatz von Freiflächen-Photovoltaik und neuen Windparks steigt die Energieproduktion erheblich. Der Fokus liegt dabei auf der optimalen Nutzung vorhandener Flächen.",
      "Die lokale Bevölkerung wird in die Entscheidungsprozesse eingebunden, um die Akzeptanz der Maßnahmen zu erhöhen."
    ],
    vorteile: [
      "Hohe Energieerträge durch den starken Ausbau von Wind- und PV-Anlagen.",
      "Geringere Abhängigkeit von fossilen Energieträgern durch die verstärkte Nutzung erneuerbarer Energien.",
      "Neue Arbeitsplätze in der erneuerbaren Energiebranche."
    ],
    nachteile: [
      "Hoher Flächenverbrauch für Photovoltaikanlagen könnte zu Konflikten mit Naturschutzbelangen führen.",
      "Erhöhte Investitionskosten aufgrund der umfangreichen Infrastrukturmaßnahmen."
    ]
  }
};

function ContentPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const scenario = scenarios[id]; // Get scenario based on the id

  if (!scenario) {
    return <div>Select an item from the previous page.</div>;
  }

  return (
    <LayoutSimple>
      <div className="relative flex justify-center pb-8">
        <div className="absolute top-0 left-0">
          <LinkIconBlue href="/questionsDefault/question3" text="Alle Szenarien sehen">
            <ArrowLeftIcon className="h4 w-4"/>
          </LinkIconBlue>
        </div>
        <h1 className="text-xl font-semibold">{scenario.title}</h1>
        <div className="absolute top-0 right-0">
          <LinkIconBlue href="/pages/comparison" text="Mit anderen Szenarien vergleichen">
            <ArrowRightIcon className="h4 w-4"/>
          </LinkIconBlue>
        </div>
      </div>

      <div className="flex flex-wrap -mx-2 mb-10">
        {scenario.stats.map((stat, index) => (
          <div key={index} className="w-full md:w-1/6 px-2 mb-4 md:mb-0 flex">
            <div className="bg-white p-6 border rounded-lg shadow flex flex-col w-full">
              <h3 className="text-lg font-medium flex-grow">{stat.name}</h3>
              <p className="text-3xl font-bold">
                <span className="italic text-indigo-700">{stat.value}</span>
              </p>
              <p className="text-sm">{stat.change}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="columns-2">
        <div className="bg-white pe-6 mb-10">
          {scenario.description.map((desc, index) => (
            <p key={index} className="mb-6">{desc}</p>
          ))}
        </div>

        <div className="p-6 bg-slate-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Vorteile</h4>
              <ul className="list-disc list-inside space-y-1">
                {scenario.vorteile.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Nachteile</h4>
              <ul className="list-disc list-inside space-y-1">
                {scenario.nachteile.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </LayoutSimple>
  );
}

export default function ScenarioPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ContentPage />
    </Suspense>
  );
}