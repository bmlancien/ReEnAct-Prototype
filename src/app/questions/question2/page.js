import BottomNav from "../../../components/common/BottomNav";
import Breadcrumb from "../../../components/common/Breadcrumb";
import LayoutMap from "../../../components/layout/LayoutMap";
import { LightButtonMedium, PrimaryButtonMedium } from "../../../components/common/Buttons";
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

export default function Question2() {
  return (
    <>
      <Breadcrumb />
      <LayoutMap>
        <div class="flex-1 overflow-auto w-full border-r border-slate-200">
          <div className="p-12">
            Test
          </div>
        </div>
        <div class="flex-1 overflow-auto w-full">
          Map 
        </div>
      </LayoutMap>
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
