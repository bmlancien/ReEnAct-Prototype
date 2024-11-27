import BottomNav from "../../../components/common/BottomNav";
import BreadcrumbDefault from "../../../components/common/BreadcrumbDefault";
import EnergyShareStatic from "../../../components/charts/EnergyShareStatic";
import Goal from "../../../components/common/Goal";
import LayoutMap from "../../../components/layout/LayoutMap";
import Image from "next/image";
import Link from "next/link";
import { LightButtonMedium, PrimaryButtonMedium } from "../../../components/common/Buttons";
import { ArrowLeftIcon, ArrowRightIcon, ChevronRightIcon, ViewfinderCircleIcon } from '@heroicons/react/24/outline';

export default function RegionToday() {
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
          <span>
            Region heute
          </span>
        </div>
      </nav>
      <div
        className="flex flex-col justify-center items-center pb-48"
      >
        <Image
          src="/images/region.svg"
          width={1367}
          height={1772}
        />
      </div>
      <BottomNav>
        <div className="flex">
          <div className="pe-2">
            <LightButtonMedium
              href="/questionsDefault/challenges"
              icon={ArrowLeftIcon}
              text="Herausforderungen und Chancen"
            />
          </div>
          <div className="pe-2">
            <PrimaryButtonMedium
              href="/questionsDefault/scenariosOverview"
              icon={ArrowRightIcon}
              text="Szenarienübersicht"
            />
          </div>
        </div>
      </BottomNav>
    </>
  );
}
