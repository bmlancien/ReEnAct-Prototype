import { PrimaryButtonMedium, WhiteButtonMedium, LightButtonMedium, OutlinePrimaryButtonMedium, OutlineWhiteButtonMedium } from "../components/common/Buttons";
import HomepageCard from "../components/common/HomepageCard";
import Image from "next/image";

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
                <WhiteButtonMedium>
                  Los geht's
                </WhiteButtonMedium>
              </HomepageCard>
              <HomepageCard
                src="/images/switch.png"
                text="Gestalten Sie Ihr eigenes, individuelles Szenario"
              >
                <WhiteButtonMedium>
                  Los geht's
                </WhiteButtonMedium>
              </HomepageCard>
              <HomepageCard
                src="/images/compare.png"
                text="Vergleichen Sie verschiedene Experten-Szenarien"
              >
                <OutlineWhiteButtonMedium>
                  Vergleichen
                </OutlineWhiteButtonMedium>
              </HomepageCard>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
