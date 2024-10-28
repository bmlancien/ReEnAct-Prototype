"use client";

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import LayoutSimple from "../../../components/layout/LayoutSimple";
import BottomNav from "../../../components/common/BottomNav";
import { LightButtonMedium, PrimaryButtonMedium } from "../../../components/common/Buttons";
import { ArrowLeftIcon, ArrowRightIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { LinkIconBlue } from "../../../components/common/Links";
import Link from 'next/link';

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
  },
  3: {
    title: "Zubau PV",
    stats: [
      { name: "Gesamtenergie-produktion", value: "220 GWh", change: "+15%" },
      { name: "Anteil Flächennutzung", value: "14%", change: "+200%" },
      { name: "Windkraft", value: "80 GWh", change: "+150%" },
      { name: "Photovoltaik", value: "140 GWh", change: "+250%" },
      { name: "Biomasse", value: "1,8 GWh", change: "+10%" },
      { name: "Wasserstoff", value: "2,0 GWh", change: "+80%" }
    ],
    description: [
      "In diesem Szenario liegt der Schwerpunkt auf einem massiven Ausbau von Photovoltaikanlagen auf Dächern und Freiflächen. Ziel ist es, die Energieproduktion durch PV deutlich zu steigern.",
      "Durch den starken Zubau von PV-Anlagen wird ein großer Teil des Energiebedarfs gedeckt, insbesondere in sonnenreichen Regionen. Die Flächennutzung steigt entsprechend, was jedoch mit geringen Eingriffen in natürliche Gebiete kombiniert wird.",
      "Die lokale Bevölkerung profitiert von Einsparungen bei den Energiekosten, da die Nutzung von Solarenergie lokal verfügbar ist."
    ],
    vorteile: [
      "Deutliche Steigerung der Energieproduktion durch Photovoltaik.",
      "Geringe Betriebskosten nach der Installation.",
      "Wenig Emissionen bei der Energieproduktion."
    ],
    nachteile: [
      "Hoher Flächenverbrauch für PV-Anlagen auf Freiflächen.",
      "Saisonale Schwankungen bei der Energieproduktion, abhängig von Sonneneinstrahlung."
    ]
  },
  4: {
    title: "Moorbewirtschaftung",
    stats: [
      { name: "Gesamtenergie-produktion", value: "150 GWh", change: "+5%" },
      { name: "Anteil Flächennutzung", value: "6%", change: "+50%" },
      { name: "Windkraft", value: "60 GWh", change: "+100%" },
      { name: "Photovoltaik", value: "70 GWh", change: "+120%" },
      { name: "Biomasse", value: "20 GWh", change: "+200%" },
      { name: "Wasserstoff", value: "0,5 GWh", change: "+10%" }
    ],
    description: [
      "Dieses Szenario konzentriert sich auf die nachhaltige Bewirtschaftung von Mooren, um CO2-Emissionen zu verringern und die Biodiversität zu fördern.",
      "Durch die Renaturierung und nachhaltige Nutzung von Moorflächen kann nicht nur CO2 gebunden werden, sondern auch Energie aus Biomasse gewonnen werden. Die Energieproduktion steigt moderat, aber der Umweltnutzen ist signifikant.",
      "Die Maßnahmen zur Moorbewirtschaftung werden mit erneuerbaren Energiequellen wie Windkraft und Photovoltaik kombiniert, um die Energieproduktion zu ergänzen."
    ],
    vorteile: [
      "Erheblicher Beitrag zum Klimaschutz durch CO2-Bindung.",
      "Förderung der Biodiversität durch Renaturierung von Mooren.",
      "Zusätzliche Energiegewinnung aus Biomasse."
    ],
    nachteile: [
      "Geringere Gesamtenergieproduktion im Vergleich zu anderen Szenarien.",
      "Hohe Investitionskosten für Renaturierungsmaßnahmen."
    ]
  },
  5: {
    title: "Wasserstoff",
    stats: [
      { name: "Gesamtenergie-produktion", value: "180 GWh", change: "+10%" },
      { name: "Anteil Flächennutzung", value: "7%", change: "+70%" },
      { name: "Windkraft", value: "100 GWh", change: "+150%" },
      { name: "Photovoltaik", value: "60 GWh", change: "+100%" },
      { name: "Biomasse", value: "15 GWh", change: "+80%" },
      { name: "Wasserstoff", value: "30 GWh", change: "+300%" }
    ],
    description: [
      "In diesem Szenario wird der Fokus auf die Erzeugung und Nutzung von grünem Wasserstoff gelegt. Dieser wird als zentraler Energieträger für Industrie und Verkehr eingesetzt.",
      "Die Produktion von Wasserstoff erfolgt durch Elektrolyse, die durch erneuerbare Energien betrieben wird. Dies reduziert die Abhängigkeit von fossilen Brennstoffen und ermöglicht eine emissionsfreie Energieversorgung in verschiedenen Sektoren.",
      "Wasserstoff kann als Speichermedium genutzt werden, um Energieüberschüsse aus Wind- und Sonnenenergie auszugleichen."
    ],
    vorteile: [
      "Hohe Flexibilität bei der Nutzung von Wasserstoff als Energieträger.",
      "Speicherung und Nutzung von Energieüberschüssen.",
      "Reduzierung der CO2-Emissionen in der Industrie und im Verkehr."
    ],
    nachteile: [
      "Hohe Kosten für die Infrastruktur zur Wasserstofferzeugung und -verteilung.",
      "Geringe Effizienz bei der Umwandlung von Strom in Wasserstoff und zurück."
    ]
  },
  6: {
    title: "Kostenoptimierung",
    stats: [
      { name: "Gesamtenergie-produktion", value: "210 GWh", change: "+12%" },
      { name: "Anteil Flächennutzung", value: "9%", change: "+100%" },
      { name: "Windkraft", value: "110 GWh", change: "+170%" },
      { name: "Photovoltaik", value: "90 GWh", change: "+180%" },
      { name: "Biomasse", value: "7,5 GWh", change: "+40%" },
      { name: "Wasserstoff", value: "5,0 GWh", change: "+90%" }
    ],
    description: [
      "Das Szenario der Kostenoptimierung konzentriert sich darauf, die Energiewende kosteneffizient zu gestalten, ohne die langfristigen Klimaziele zu gefährden.",
      "Durch den Einsatz der kostengünstigsten Technologien und die Optimierung bestehender Infrastruktur wird die Energieproduktion gesteigert, während die Kosten im Vergleich zu anderen Szenarien geringer ausfallen.",
      "Die Nutzung von Wind- und Solarenergie wird gezielt ausgebaut, wobei der Fokus auf niedrigeren Investitions- und Betriebskosten liegt."
    ],
    vorteile: [
      "Geringere Investitionskosten im Vergleich zu anderen Szenarien.",
      "Effiziente Nutzung bestehender Infrastruktur und Technologien.",
      "Kosteneinsparungen für Verbraucher durch niedrigere Energiekosten."
    ],
    nachteile: [
      "Möglicherweise geringere Innovationskraft bei der Einführung neuer Technologien.",
      "Längere Amortisationszeiten bei bestimmten Investitionen."
    ]
  },
  7: {
    title: "Hohe CO2-Preise",
    stats: [
      { name: "Gesamtenergie-produktion", value: "250 GWh", change: "+18%" },
      { name: "Anteil Flächennutzung", value: "10%", change: "+120%" },
      { name: "Windkraft", value: "120 GWh", change: "+180%" },
      { name: "Photovoltaik", value: "100 GWh", change: "+190%" },
      { name: "Biomasse", value: "5,0 GWh", change: "+70%" },
      { name: "Wasserstoff", value: "7,0 GWh", change: "+150%" }
    ],
    description: [
      "Dieses Szenario basiert auf einem hohen CO2-Preis, der als wirtschaftlicher Anreiz dient, den Ausbau erneuerbarer Energien voranzutreiben und fossile Energieträger zu reduzieren.",
      "Durch hohe CO2-Kosten wird die Nutzung von Wind- und Solarenergie erheblich attraktiver, während die Nutzung von Kohle und Gas deutlich abnimmt. Unternehmen und Privatpersonen sind gezwungen, in klimafreundliche Technologien zu investieren.",
      "Die Energieproduktion wird durch verstärkte Nutzung erneuerbarer Energien gesteigert, während gleichzeitig der CO2-Ausstoß drastisch gesenkt wird."
    ],
    vorteile: [
      "Starker Anreiz zur Reduktion von CO2-Emissionen.",
      "Förderung von Investitionen in erneuerbare Energien.",
      "Langfristig wirtschaftliche Vorteile durch verringerte Abhängigkeit von fossilen Brennstoffen."
    ],
    nachteile: [
      "Erhebliche Kostensteigerungen für Verbraucher und Unternehmen durch hohe CO2-Preise.",
      "Mögliche soziale Ungleichheiten durch ungleiche Belastung."
    ]
  },
  8: {
    title: "Suffizienz",
    stats: [
      { name: "Gesamtenergie-produktion", value: "180 GWh", change: "+10%" },
      { name: "Anteil Flächennutzung", value: "5%", change: "+50%" },
      { name: "Windkraft", value: "90 GWh", change: "+130%" },
      { name: "Photovoltaik", value: "70 GWh", change: "+100%" },
      { name: "Biomasse", value: "10 GWh", change: "+60%" },
      { name: "Wasserstoff", value: "2,0 GWh", change: "+30%" }
    ],
    description: [
      "Das Szenario der Suffizienz zielt darauf ab, den Energieverbrauch durch Verhaltensänderungen und Effizienzsteigerungen zu reduzieren. Es setzt weniger auf den Ausbau erneuerbarer Energien und mehr auf den bewussten Umgang mit Ressourcen.",
      "Durch sparsamen Energieeinsatz und Reduktion des Konsums wird der Bedarf an neuer Energieinfrastruktur verringert. Die gesellschaftliche Akzeptanz für Einsparungen und bewussten Konsum ist dabei von zentraler Bedeutung.",
      "Energieeinsparungen werden durch Maßnahmen wie Energiesparprogramme, smarte Technologien und Förderung von Konsumverzicht erzielt."
    ],
    vorteile: [
      "Reduzierter Energieverbrauch und geringerer Bedarf an neuer Infrastruktur.",
      "Stärkung des Umweltbewusstseins und nachhaltiger Lebensstile.",
      "Weniger Eingriffe in natürliche Flächen durch geringere Energieproduktion."
    ],
    nachteile: [
      "Möglicherweise geringere Energieproduktion im Vergleich zu Szenarien mit starkem Ausbau erneuerbarer Energien.",
      "Hohe Abhängigkeit von Verhaltensänderungen der Bevölkerung, die schwer umsetzbar sind."
    ]
  },
  9: {
    title: "Autarkie",
    stats: [
      { name: "Gesamtenergie-produktion", value: "220 GWh", change: "+20%" },
      { name: "Anteil Flächennutzung", value: "11%", change: "+140%" },
      { name: "Windkraft", value: "110 GWh", change: "+160%" },
      { name: "Photovoltaik", value: "90 GWh", change: "+190%" },
      { name: "Biomasse", value: "7,0 GWh", change: "+40%" },
      { name: "Wasserstoff", value: "12 GWh", change: "+200%" }
    ],
    description: [
      "In diesem Szenario strebt die Region eine weitgehende energetische Unabhängigkeit an. Das Ziel ist es, den gesamten Energiebedarf durch lokale erneuerbare Energiequellen zu decken.",
      "Der starke Ausbau von Wind- und Solaranlagen sowie die lokale Wasserstoffproduktion ermöglichen eine weitgehende Energieautarkie. Energieimporte werden vermieden, und lokale Ressourcen optimal genutzt.",
      "Die Energiespeicherung spielt eine entscheidende Rolle, um die Versorgungssicherheit trotz der volatilen erneuerbaren Energien zu gewährleisten."
    ],
    vorteile: [
      "Hohe Unabhängigkeit von externen Energiequellen und -märkten.",
      "Stärkung der regionalen Wirtschaft durch lokale Energieproduktion.",
      "Reduzierte Abhängigkeit von geopolitischen Entwicklungen und Energiepreisschwankungen."
    ],
    nachteile: [
      "Hoher Investitionsaufwand für den Ausbau lokaler Infrastruktur.",
      "Technologische Herausforderungen bei der Energiespeicherung und -verteilung."
    ]
  },
  10: {
    title: "Weiter wie bisher",
    stats: [
      { name: "Gesamtenergie-produktion", value: "160 GWh", change: "+5%" },
      { name: "Anteil Flächennutzung", value: "4%", change: "+30%" },
      { name: "Windkraft", value: "70 GWh", change: "+100%" },
      { name: "Photovoltaik", value: "60 GWh", change: "+110%" },
      { name: "Biomasse", value: "5,5 GWh", change: "+20%" },
      { name: "Wasserstoff", value: "1,0 GWh", change: "+15%" }
    ],
    description: [
      "Dieses Szenario geht davon aus, dass keine nennenswerten Veränderungen in der Energiepolitik oder im Ausbau erneuerbarer Energien stattfinden. Es bleibt weitgehend beim Status quo.",
      "Der Zubau erneuerbarer Energien verläuft moderat, und fossile Energieträger bleiben eine wesentliche Komponente der Energieversorgung. Die Klimaziele werden unter diesen Bedingungen wahrscheinlich verfehlt.",
      "Langfristig entstehen hohe Kosten durch die fehlende Anpassung an erneuerbare Energien und die fortlaufende Nutzung fossiler Brennstoffe."
    ],
    vorteile: [
      "Geringe kurzfristige Investitionskosten.",
      "Keine drastischen Umstellungen in der Energieinfrastruktur oder im Verbraucherverhalten erforderlich."
    ],
    nachteile: [
      "Langfristig höhere Kosten durch die fortlaufende Nutzung fossiler Energien.",
      "Verfehlung der Klimaziele und zunehmende Abhängigkeit von fossilen Brennstoffen."
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
      <LayoutSimple>
        <div className="relative flex justify-center pb-8">
          <h1 className="text-xl font-semibold pe-4">{scenario.title}</h1>
          <LinkIconBlue href="/questionsDefault/scenariosOverview" text="Szenario ändern">
            <ArrowRightIcon className="h4 w-4"/>
          </LinkIconBlue>
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
              href="/pages/comparison"
              icon={ArrowRightIcon}
              text="Szenarien vergleichen"
            />
          </div>
        </div>
      </BottomNav>
    </>
  );
}

export default function ScenarioPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ContentPage />
    </Suspense>
  );
}