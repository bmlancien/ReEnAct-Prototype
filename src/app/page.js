import { PrimaryButtonMedium, SecondaryButtonMedium, BlackButtonMedium } from "../components/common/Buttons";
import Image from "next/image";
import LayoutMap from "../components/layout/LayoutMap";
// import Modal from "../components/common/Modal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { ArrowDownIcon, ArrowRightIcon, ViewfinderCircleIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <>
      {/* <Modal /> */}
      <main className="grow">
        <div className="bg-sky-400 py-20 mb-28">
          <div className="mx-auto max-w-7xl px-8">
            <h1
              className="text-4xl font-bold pb-8">
                Welches Zukunftsszenario passt zu Peenetal/Loitz?
            </h1>
            <p
              className="text-2xl max-w-[48rem] pb-4"
            >
              Diese App hilft der Region, die Energiewende voranzutreiben und die Klimaziele Deutschlands zu erreichen.
            </p>
            <p
              className="text-2xl max-w-[48rem]"
            >
              Visualisieren und vergleichen Sie vorgefertigte Szenarien oder erstellen Sie Ihr eigenes, um die nachhaltige Zukunft der Region mitzugestalten.
            </p>
          </div>
          <div className="mx-auto max-w-7xl px-8">
            <div className="w-[16rem] pt-8 pb-24">
              <BlackButtonMedium
                href="/questionsDefault/question1"
                text="Szenario finden"
              />
            </div>
          </div>
          <div className="mx-auto max-w-7xl px-8">
            <div className="columns-3">
              <SecondaryButtonMedium
                href="/questionsDefault/question3"
                text="Vorgefertigtes Szenario auswählen"
              />
              <SecondaryButtonMedium
                href="/pages/comparison"
                text="Vorgefertigtes Szenario vergleichen"
              />
              <SecondaryButtonMedium
                href="/questionsCustom/question3"
                text="Eigenes Szenario erstellen"
              />
            </div>
          </div>
        </div>
        {/* <div className="bg-white pt-20 pb-48">
          <div className="mx-auto max-w-7xl px-8">
            <div className="columns-3">
              <HomepageSecondaryCards
                src="/images/region.png"
                text="Die Region heute"
              >
                <LinkIcon
                  href="#region"
                  text="Mehr erfahren"
                >
                  <ArrowDownIcon className="h-6 w-6" />
                </LinkIcon>
              </HomepageSecondaryCards>
              <HomepageSecondaryCards
                src="/images/wind.png"
                text="Chancen der Energiewende"
              >
                <LinkIcon
                  href="#energy-transition"
                  text="Mehr erfahren"
                >
                  <ArrowDownIcon className="h-6 w-6" />
                </LinkIcon>
              </HomepageSecondaryCards>
              <HomepageSecondaryCards
                src="/images/question.png"
                text="FAQ und Glossar"
              >
                <LinkIcon
                  href="#"
                  text="Hilfe suchen"
                >
                  <ArrowRightIcon className="h-6 w-6" />
                </LinkIcon>
              </HomepageSecondaryCards>
            </div>
          </div>
        </div> */}
        <LayoutMap>
          <div className="flex-1 overflow-auto w-full">
            <div className="pe-12">
              <div className="flex justify-between pb-8">
                <h1 className="text-2xl font-semibold" id="region">Peenetal/Loitz heute</h1>
              </div>
              <div className="pb-8">
                Diese Region zeichnet sich durch ihren wachsenden Einsatz erneuerbarer Energien aus und leistet einen wichtigen Beitrag zur Energiewende. Trotz der überschaubaren Größe entwickelt sich die Region dynamisch, indem sie innovative Lösungen zur nachhaltigen Energiegewinnung umsetzt. Besonders der Energiesektor bietet neue Investitionsmöglichkeiten, während die Landschaft durch Windkraft und Solaranlagen zunehmend für die Energieerzeugung genutzt wird. Die Region zeigt eindrucksvoll, wie ländliche Gebiete zur Erreichung der Klimaziele beitragen können, und bietet gleichzeitig Chancen für lokale Unternehmen und Gemeinden.
              </div>
              <div className="pb-8">
                <div className="flex items-center pb-2">
                  <ViewfinderCircleIcon
                    className="h-8 w-8 me-2"
                  />
                  <span className="font-semibold">Überblick</span>
                </div>
                <table className="table-auto w-full">
                  <tbody>
                    <tr>
                      <td className="border px-4 py-2">Bevölkerung</td>
                      <td className="border px-4 py-2">5.998</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Fläche</td>
                      <td className="border px-4 py-2">170,46 km<sup>2</sup></td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Fläche Erneuerbare Energien</td>
                      <td className="border px-4 py-2">20,85 km<sup>2</sup></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="w-[15rem] pt-8">
                <PrimaryButtonMedium
                  href="/questionsDefault/question2"
                  text="Details sehen"
                />
              </div>
            </div>
          </div>
          <div className="flex-1 overflow-auto w-full">
            <div className="relative w-full h-[32rem] overflow-hidden">
              <Image
                src="/images/map_image.png"
                layout="fill"
                objectFit="cover"
                alt="Map"
                className="absolute inset-0 w-full h-[32rem] object-cover"
              />
            </div>
          </div>
        </LayoutMap>
        <div className="bg-white pb-32">
          <div className="mx-auto max-w-7xl px-8">
            <div className="flex gap-x-12" id="energy-transition">
              <div>
                <p className="max-w-xl mb-8 p-8 bg-slate-100 font-semibold mt-20">Hauptziel ist es, bis 2040 eine CO2-Emission von 0% zu erreichen. Gemeinsam können wir unsere Region zu einem Vorreiter der Energiezukunft machen und damit auch einen wichtigen Beitrag zu den nationalen Energiezielen leisten.</p>
              </div> 
              <div>
                <h1 className="text-2xl font-semibold pb-8">Chancen der Energiewende</h1>
                <p className="max-w-xl mb-8">Die Energiewende bringt Herausforderungen mit sich. Veränderungen in der Infrastruktur, wirtschaftliche Auswirkungen und Anpassungen im Lebensstil können Unsicherheiten auslösen. Eine nachhaltige und gerechte Lösung stellt sicher, dass der Übergang zu sauberer Energie der gesamten Gemeinschaft zugutekommt.</p>
                <p className="max-w-xl mb-8">Es gibt mehrere Wege, das Hauptziel zu erreichen. Diese Wege werden durch verschiedene Zukunftsszenarien dargestellt. Mithilfe einiger Fragen können Sie das beste Zukunftsszenario und damit die optimale Lösung für die Region finden.</p>
              </div>      
            </div>
          </div>
        </div>
        <div className="bg-white pb-32">
          <div className="mx-auto max-w-7xl px-8">
            <div className="flex flex-col gap-x-12" id="glossar-help">
              <h1 className="text-2xl font-semibold pb-8">Häufige Fragen & Ressourcen</h1>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Was ist das Ziel der App?</AccordionTrigger>
                  <AccordionContent>
                  Die App hilft dabei, das optimale Zukunftsszenario für die Region zu finden, um bis 2040 die Ziele für erneuerbare Energien und CO₂-Neutralität zu erreichen. Sie zeigt verschiedene Optionen und deren Auswirkungen, damit die Benutzer fundierte Entscheidungen treffen können.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Welche Szenarien werden in der App angeboten?</AccordionTrigger>
                  <AccordionContent>
                  Die App bietet mehrere Szenarien zur Auswahl, darunter beispielsweise Wind – Repowering, Zubau von Wind und PV, Moorbewirtschaftung und Wasserstoffnutzung. Jedes Szenario simuliert, wie sich verschiedene Technologien und Strategien auf die Energieproduktion und CO₂-Emissionen auswirken könnten.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Wie wird ein passendes Szenario für die Region ausgewählt?</AccordionTrigger>
                  <AccordionContent>
                  Benutzer können ihre Prioritäten wie Kostenoptimierung, hohe CO₂-Preise oder Energieautarkie auswählen. Die App berechnet dann, wie gut jedes Szenario zu den gewählten Prioritäten und zur Struktur der Region passt.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Welche Informationen erhalte ich durch die Nutzung der App?</AccordionTrigger>
                  <AccordionContent>
                  Die App zeigt umfassende Informationen zu jedem Szenario, darunter potenzielle Einsparungen an CO₂, Investitionskosten und Auswirkungen auf die Landschaft und Biodiversität. Außerdem erhalten die Nutzer Einblicke, wie sich die Umsetzung auf verschiedene Zeiträume und Ziele auswirken könnte.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-5">
                  <AccordionTrigger>Wer kann die App nutzen?</AccordionTrigger>
                  <AccordionContent>
                  Die App ist vor allem für Bürger und Bürgerinnen der Region Peenetal/Loitz gedacht, sie kann aber auch von lokalen Unternehmen, Beratern und der interessierten Öffentlichkeit verwendet werden, um die Transformation in Richtung Nachhaltigkeit besser zu verstehen.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>Wie unterstützt die App die CO₂-Neutralität?</AccordionTrigger>
                  <AccordionContent>
                  Die App berechnet für jedes Szenario den potenziellen Beitrag zur CO₂-Reduktion und den Ausbau erneuerbarer Energien, um den Pfad zur CO₂-Neutralität transparent darzustellen. Durch die Simulation der Szenarien können Nutzer abschätzen, wie die gewählte Strategie zur Zielerreichung bis 2040 beiträgt.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <div className="w-[15rem] pt-8">
                <PrimaryButtonMedium
                  href=""
                  text="Glossar und FAQ sehen"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
