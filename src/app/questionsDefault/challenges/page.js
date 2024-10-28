import BottomNav from "../../../components/common/BottomNav";
import BreadcrumbDefault from "../../../components/common/BreadcrumbDefault";
import LayoutCentered from "../../../components/layout/LayoutCentered";
import { LightButtonMedium, PrimaryButtonMedium } from "../../../components/common/Buttons";
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function Challenges() {
  return (
    <>
      <BreadcrumbDefault />
      <main className="grow">
        <LayoutCentered>
          <div className="flex flex-col flex-wrap justify-center content-center align-center">
            <p className="max-w-xl mb-8">Die Energiewende bringt Herausforderungen mit sich. Veränderungen in der Infrastruktur, wirtschaftliche Auswirkungen und Anpassungen im Lebensstil können Unsicherheiten auslösen. Eine nachhaltige und gerechte Lösung stellt sicher, dass der Übergang zu sauberer Energie der gesamten Gemeinschaft zugutekommt.</p>
            <p className="max-w-xl mb-8 p-8 bg-slate-100 font-semibold">Hauptziel ist es, bis 2040 eine CO2-Emission von 0% zu erreichen. Gemeinsam können wir unsere Region zu einem Vorreiter der Energiezukunft machen und damit auch einen wichtigen Beitrag zu den nationalen Energiezielen leisten.</p>
            <p className="max-w-xl mb-8">Es gibt mehrere Wege, das Hauptziel zu erreichen. Diese Wege werden durch verschiedene Zukunftsszenarien dargestellt. Mithilfe einiger Fragen können Sie das beste Zukunftsszenario und damit die optimale Lösung für die Region finden.</p>
          </div>
        </LayoutCentered>
      </main>
      <BottomNav>
        <div className="flex">
          <div className="pe-2 invisible">
            <LightButtonMedium
              href="#"
              text=""
            />
          </div>
          <div className="pe-2">
            <PrimaryButtonMedium
              href="/questionsDefault/regionToday"
              icon={ArrowRightIcon}
              text="Details zur Region sehen"
            />
          </div>
          <div className="pe-2">
            <LightButtonMedium
              href="/questionsDefault/scenariosOverview"
              text="Szenarien sehen"
            />
          </div>
        </div>
      </BottomNav>
    </>
  );
}
