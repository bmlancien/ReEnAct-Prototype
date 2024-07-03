import BottomNav from "../../../components/common/BottomNav";
import Breadcrumb from "../../../components/common/Breadcrumb";
import { LightButtonMedium, PrimaryButtonMedium } from "../../../components/common/Buttons";
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

export default function Question2() {
  return (
    <>
      <Breadcrumb />
      <main className="grow">
        Question 2
      </main>
      <BottomNav>
        <div className="flex">
          <div className="pe-2">
            <LightButtonMedium
              href="/questions/question1"
              icon={ArrowLeftIcon}
              text="Zurück"
            />
          </div>
          <div className="pe-2">
            <PrimaryButtonMedium
              href="/questions/question3"
              icon={ArrowRightIcon}
              text="Weiter"
            />
          </div>
        </div>
      </BottomNav>
    </>
  );
}
