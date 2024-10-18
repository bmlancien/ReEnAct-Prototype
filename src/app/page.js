import { WhiteButtonMedium,  OutlineWhiteButtonMedium } from "../components/common/Buttons";
import HomepageCard from "../components/common/HomepageCard";
import HomepageSecondaryCards from "../components/common/HomepageSecondaryCards";
import Image from "next/image";
import LayoutMap from "../components/layout/LayoutMap";
// import Modal from "../components/common/Modal";
import { LinkIcon } from "../components/common/Links";
import { ArrowDownIcon, ArrowRightIcon, ViewfinderCircleIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <>
      {/* <Modal /> */}
      <main className="grow">
        <div className="bg-sky-400 py-20">
          <div className="mx-auto max-w-7xl px-8">
            <h1
              className="text-3xl font-bold text-center pb-12">
                Welches Zukunftsszenario passt zu Peenetal/Loitz?
            </h1>
          </div>
          <div className="mx-auto max-w-7xl px-8">
            <div className="columns-3">
              <HomepageCard
                src="/images/quiz.png"
                text="Finden Sie Ihr ideales vorgefertigtes Szenario"
              >
                <WhiteButtonMedium
                  href="/questionsDefault/question1"
                  text="Los geht's"
                />
              </HomepageCard>
              <HomepageCard
                src="/images/compare.png"
                text="Vergleichen Sie verschiedene vorgefertigte Szenarien"
              >
                <WhiteButtonMedium
                  href="/pages/comparison"
                  text="Vergleichen"
                />
              </HomepageCard>
              <HomepageCard
                src="/images/switch.png"
                text="Gestalten Sie Ihr eigenes, individuelles Szenario"
              >
                <OutlineWhiteButtonMedium
                  href="/questionsCustom/question1"
                  text="Los geht's"
                />
              </HomepageCard>
            </div>
          </div>
        </div>
        <div className="bg-white pt-20 pb-48">
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
        </div>
        <LayoutMap>
          <div className="flex-1 overflow-auto w-full">
            <div className="pe-12">
              <div className="flex justify-between pb-8">
                <h1 className="text-2xl font-semibold" id="region">Peenetal/Loitz</h1>
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
                    <tr>
                      <td className="border px-4 py-2">Arbeitsplätze im Energiesektor</td>
                      <td className="border px-4 py-2"><span className="italic text-indigo-700">180</span></td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Investitionen in ern. Energien</td>
                      <td className="border px-4 py-2"><span className="italic text-indigo-700">3.5 Mio. €</span></td>
                    </tr>
                  </tbody>
                </table>
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
      </main>
    </>
  );
}
