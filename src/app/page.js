import { PrimaryButtonMedium, WhiteButtonMedium, LightButtonMedium, OutlinePrimaryButtonMedium, OutlineWhiteButtonMedium } from "../components/common/Buttons";
import HomepageCard from "../components/common/HomepageCard";
import HomepageSecondaryCards from "../components/common/HomepageSecondaryCards";
import { LinkIcon } from "../components/common/Links";
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="grow">
        <div className="bg-emerald-400 py-20">
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
                text="Finden Sie Ihr ideales Experten-Szenario in wenigen Fragen"
              >
                <WhiteButtonMedium
                  href="/questions/question1"
                >
                  Los geht's
                </WhiteButtonMedium>
              </HomepageCard>
              <HomepageCard
                src="/images/switch.png"
                text="Gestalten Sie Ihr eigenes, individuelles Szenario"
              >
                <WhiteButtonMedium
                  href="/questions/question1"
                >
                  Los geht's
                </WhiteButtonMedium>
              </HomepageCard>
              <HomepageCard
                src="/images/compare.png"
                text="Vergleichen Sie verschiedene Experten-Szenarien"
              >
                <OutlineWhiteButtonMedium
                  href="/questions/question1"
                >
                  Vergleichen
                </OutlineWhiteButtonMedium>
              </HomepageCard>
            </div>
          </div>
        </div>
        <div className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-8">
            <div className="columns-3">
              <HomepageSecondaryCards
                src="/images/region.png"
                text="Die Region heute"
              >
                <LinkIcon
                  href="#"
                  text="Mehr erfahren"
                >
                  <ArrowRightIcon className="h-6 w-6" />
                </LinkIcon>
              </HomepageSecondaryCards>
              <HomepageSecondaryCards
                src="/images/wind.png"
                text="Chancen der Energiewende"
              >
                <LinkIcon
                  href="#"
                  text="Mehr erfahren"
                >
                  <ArrowRightIcon className="h-6 w-6" />
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
      </main>
    </>
  );
}
