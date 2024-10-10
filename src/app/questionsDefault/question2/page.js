import BottomNav from "../../../components/common/BottomNav";
import BreadcrumbDefault from "../../../components/common/BreadcrumbDefault";
import EnergyShareStatic from "../../../components/charts/EnergyShareStatic";
import Goal from "../../../components/common/Goal";
import LayoutMap from "../../../components/layout/LayoutMap";
import Image from "next/image";
import { LightButtonMedium, PrimaryButtonMedium } from "../../../components/common/Buttons";
import { ArrowLeftIcon, ArrowRightIcon, ViewfinderCircleIcon } from '@heroicons/react/24/outline';

export default function Question2() {
  return (
    <>
      <BreadcrumbDefault />
      <LayoutMap>
        <div className="flex-1 overflow-auto w-full border-r border-slate-200">
          <div className="pt-12 pe-12">
            <div className="flex justify-between pb-8">
              <h1 className="text-xl font-semibold">Kennzahlen der Region 2024</h1>
              <Goal />
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
            <div className="pb-8">
              <div className="flex items-center pb-2">
                <span className="me-2">
                  <svg width="32" height="32" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <g fill="#1e293b">
                      <path d="m30.102 37.602c3.1992 0 5.6992-2.5 5.8008-5.6016 0.30078 0 0.60156 0.10156 0.89844 0.10156 3.6016 0 6.6992-2.3008 7.8984-5.6016 0.60156 0.10156 1.1992 0.19922 1.8984 0.19922 4.1992 0 7.8008-2.1016 10-5.3008 4.1016-0.69922 7.1992-4.1992 7.1992-8.5 0-4.8008-3.8984-8.6016-8.6016-8.6016-0.69922 0-1.3984 0.10156-2 0.30078-1.8984-1.1992-4.1992-2-6.6016-2-6.6992 0-12.102 5.3984-12.102 12.102 0 0.30078 0.10156 0.60156 0.10156 1-3.6016 1-6.1992 4.1992-6.1992 8.1016 0 0.89844 0.19922 1.6992 0.39844 2.5-2.6016 0.60156-4.5 2.8984-4.5 5.6992-0.09375 3 2.6055 5.6016 5.8086 5.6016z"/>
                      <path d="m38 44.199c-0.10156-1.1992-1.1992-2.1992-2.3984-2.1992h-11.801c-1.1992 0-2.3008 1-2.3984 2.1992l-0.40234 4.1992h17.398z"/>
                      <path d="m90.301 28c0-3.8984-3.1992-7.1016-7.1016-7.1016-0.60156 0-1.1016 0.10156-1.6992 0.19922-1.6016-1-3.3984-1.6016-5.3984-1.6016-5.5 0-10 4.5-10 10 0 0.30078 0.10156 0.5 0.10156 0.80078-2.8984 0.80078-5.1016 3.5-5.1016 6.6992 0 0.69922 0.10156 1.3984 0.30078 2-2.1016 0.5-3.6992 2.3984-3.6992 4.6992 0 2.6992 2.1992 4.8008 4.8008 4.8008 2.6016 0 4.6992-2.1016 4.8008-4.6992 0.30078 0 0.5 0.10156 0.80078 0.10156 3 0 5.5-1.8984 6.5-4.6016 0.5 0.10156 1 0.19922 1.5 0.19922 3.3984 0 6.5-1.6992 8.3008-4.3984 3.293-0.59766 5.8945-3.5977 5.8945-7.0977z"/>
                      <path d="m69.398 57.699-0.30078-3.3984c-0.10156-1.1992-1.1992-2.1992-2.3984-2.1992h-9c-1.1992 0-2.3008 1-2.3984 2.1992l-0.30078 3.3984z"/>
                      <path d="m79.398 92.102h-6.8984l-2.6992-29.199-15.301-0.003906-2.6992 29.199h-9.3008l-3.6016-38.398h-18.398l-3.5 38.402h-5.6016c-0.89844 0-1.6016 0.69922-1.6016 1.6016v2.1016c0 0.89844 0.69922 1.6016 1.6016 1.6016h68.102c0.89844 0 1.6016-0.69922 1.6016-1.6016v-2.1016c0-0.90234-0.80078-1.6016-1.7031-1.6016z"/>
                    </g>
                  </svg>
                </span>
                <span className="font-semibold">CO<sub>2</sub> Ausstoß</span>
              </div>
              <div className="border border-slate-200 p-4">
                <div className="pb-2"><b><span className="italic text-indigo-700">0,08 Tonnen CO2</span></b> Ausstoß in 2024</div>
                <div className="flex">
                  <div className="pe-4">
                    <svg width="32" height="32" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                      <g fill="#1e293b">
                        <path d="m92.688 44.957-14.031-3.0312c-0.42188-0.09375-0.80469-0.30469-1.1016-0.60938l-14.113-14.535c-0.99219-1.0156-2.375-1.5938-3.7891-1.5938h-36.262c-1.4609 0-2.8203 0.58203-3.8281 1.6367l-14.984 15.625c-0.9375 1.0039-1.4531 2.3047-1.4531 3.6602v13.453c0 2.418 1.6406 4.5234 3.9883 5.125l5.2578 1.3398c0.10938 0.03125 0.24219 0.023437 0.35938 0.042968 0.70312 4.9336 4.9414 8.7422 10.066 8.7422 5.082 0 9.293-3.75 10.047-8.625h31.707c0.75391 4.875 4.9648 8.625 10.047 8.625 5.082 0 9.2969-3.75 10.047-8.625h3.3086l3.8906-0.17188c2.8164-0.15625 5.0234-2.4805 5.0234-5.2969v-10.594c0-2.4648-1.7578-4.6367-4.1875-5.168zm-69.891 26.73c-3.8828 0-7.043-3.1523-7.0547-7.0352 0-0.007813 0.007812-0.015625 0.007812-0.027344 0-0.007812-0.003906-0.015625-0.003906-0.023438 0.015625-3.875 3.1719-7.0273 7.0547-7.0273 3.8828 0 7.0547 3.1641 7.0547 7.0547s-3.1641 7.0547-7.0547 7.0547zm51.805 0c-3.8906 0-7.0547-3.1641-7.0547-7.0547v-0.011718c0.003906-3.8867 3.168-7.0469 7.0547-7.0469 3.8867 0 7.0547 3.1641 7.0547 7.0547s-3.1641 7.0547-7.0547 7.0547zm19.148-10.969c0 1.1562-0.91016 2.1094-2.0508 2.1719l-3.8086 0.17188h-3.2422c-0.75781-4.8672-4.9688-8.6094-10.047-8.6094-5.0781 0-9.2891 3.7422-10.047 8.6094h-31.711c-0.75781-4.8672-4.9688-8.6094-10.047-8.6094-5.0234 0-9.1992 3.6641-10.023 8.4531l-4.8906-1.25c-0.96094-0.24609-1.6367-1.1055-1.6367-2.0938v-13.453c0-0.5625 0.21875-1.1055 0.59766-1.5117l14.969-15.609c0.41797-0.43359 0.97656-0.67578 1.5742-0.67578h36.266c0.58203 0 1.1484 0.23828 1.5508 0.65234l14.109 14.531c0.72656 0.75 1.6562 1.2617 2.6836 1.4844l14.027 3.0312c1 0.21875 1.7266 1.1055 1.7266 2.1133z"/>
                        <path d="m68.516 42.02h-18.109v-10.062c0-0.86328-0.69922-1.5625-1.5625-1.5625s-1.5625 0.69922-1.5625 1.5625v10.062h-15.219v-10.062c0-0.86328-0.69922-1.5625-1.5625-1.5625s-1.5625 0.69922-1.5625 1.5625v10.062h-14.754c-0.86328 0-1.5625 0.69922-1.5625 1.5625s0.69922 1.5625 1.5625 1.5625h54.336c0.86328 0 1.5625-0.69922 1.5625-1.5625s-0.69922-1.5625-1.5625-1.5625z"/>
                        <path d="m53.352 47.074h-1.7969c-0.86328 0-1.5625 0.69922-1.5625 1.5625s0.69922 1.5625 1.5625 1.5625h1.7969c0.86328 0 1.5625-0.69922 1.5625-1.5625s-0.69922-1.5625-1.5625-1.5625z"/>
                      </g>
                    </svg>
                  </div>
                  <div className="text-sm">
                    Entsprechen etwa dem jährlichen Ausstoß von rund 17.300 PKWs, die jeweils 15.000 Kilometer pro Jahr fahren.
                  </div>
                </div>
              </div>
            </div>
            <div className="pb-8">
              <div className="flex items-center pb-2">
                <span className="me-2">
                  <svg width="32" height="32" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <g fill="#1e293b">
                      <path d="m67.031 61.445v-0.61719c-0.011719-2.7031 1.0391-5.3047 2.9258-7.2383 5.2734-5.2891 8.2344-12.453 8.2344-19.918 0-7.4688-2.9648-14.633-8.2383-19.918-5.2773-5.2852-12.434-8.2578-19.902-8.2734-7.4688-0.011719-14.637 2.9375-19.934 8.2031-5.293 5.2656-8.2812 12.418-8.3125 19.887-0.027344 7.4648 2.9102 14.641 8.168 19.945 1.9297 1.9414 3.0078 4.5742 3 7.3125v0.62109-0.003907c0 2.5977 2.1016 4.7031 4.6992 4.7031 0.82812 0 1.5-0.67188 1.5-1.5 0-0.82813-0.67188-1.5-1.5-1.5-0.94141 0-1.6992-0.76172-1.6992-1.7031v-0.62109 0.003906c0.011719-3.5312-1.3828-6.9258-3.8711-9.4297-4.6953-4.7383-7.3203-11.148-7.293-17.82s2.6953-13.059 7.4297-17.766c4.7305-4.7031 11.133-7.3398 17.805-7.3281 6.6719 0.015625 13.066 2.6719 17.781 7.3945 4.7109 4.7227 7.3594 11.121 7.3633 17.793 0 6.6719-2.6445 13.07-7.3594 17.793-2.4453 2.5-3.8086 5.8633-3.7969 9.3594v0.61719c0 0.94141-0.76172 1.7031-1.7031 1.7031-0.82812 0-1.5 0.67188-1.5 1.5s0.67188 1.5 1.5 1.5c2.5977 0 4.7031-2.1016 4.7031-4.6992z"/>
                      <path d="m38.27 87.656c0.003907 3.7773 3.0664 6.8398 6.8438 6.8438h9.7773-0.003906c3.7773-0.003906 6.8398-3.0664 6.8438-6.8438v-10.418l1.5781-4.3281v-0.003906c0.31641-0.87109 0.1875-1.8477-0.34375-2.6094-0.53516-0.76172-1.4062-1.2148-2.3359-1.2148h-21.258c-0.92969 0-1.8008 0.45312-2.3359 1.2148-0.53125 0.76172-0.66016 1.7383-0.34375 2.6133l1.5781 4.3281zm16.617 3.8438h-9.7734c-2.1211-0.003906-3.8398-1.7227-3.8438-3.8438v-1.168h12.523c0.82812 0 1.5-0.67188 1.5-1.5s-0.67188-1.5-1.5-1.5h-12.523v-5.0156h17.461v9.1836c-0.003907 2.1211-1.7227 3.8398-3.8438 3.8438zm5.5273-19.418-1.2344 3.3906h-18.359l-1.2344-3.3906z"/>
                      <path d="m50 66.145c0.82812 0 1.5-0.67188 1.5-1.5v-12.062c2.9961-0.5 5.4961-2.5625 6.5508-5.4062 1.3203-3.8203-0.35156-7.6016-1.6914-10.637-1.375-3.1445-3.1055-6.1211-5.1602-8.8672-0.011719-0.015625-0.023438-0.027344-0.035157-0.039063-0.03125-0.039062-0.066406-0.074218-0.10156-0.11328-0.03125-0.035156-0.074219-0.074219-0.11328-0.10547-0.015625-0.011718-0.023438-0.023437-0.039063-0.035156-0.015625-0.011718-0.050781-0.027344-0.070312-0.042968-0.046875-0.03125-0.09375-0.058594-0.14062-0.085938-0.042969-0.019531-0.082031-0.039062-0.125-0.058594-0.046875-0.019531-0.09375-0.035156-0.14062-0.050781-0.046875-0.011719-0.09375-0.023437-0.14062-0.03125-0.046875-0.011719-0.097657-0.015625-0.14453-0.023437-0.046876 0-0.09375-0.007813-0.14063-0.007813-0.046874 0-0.10156 0-0.14844 0.007813-0.050781 0.007812-0.089844 0.011718-0.13672 0.019531v0.003906c-0.046875 0.007813-0.097656 0.019531-0.14453 0.035156-0.046875 0.011719-0.089844 0.027344-0.13672 0.046875-0.042968 0.019532-0.085937 0.035156-0.12891 0.058594-0.046875 0.027344-0.09375 0.054688-0.13672 0.085938-0.023437 0.015624-0.050781 0.027343-0.070312 0.042968-0.023438 0.015625-0.023438 0.023438-0.039063 0.035156-0.042968 0.03125-0.078125 0.066407-0.11719 0.10547-0.035157 0.035157-0.074219 0.074219-0.10547 0.11328-0.011719 0.011719-0.023438 0.023438-0.035156 0.039063-2.0547 2.7461-3.7852 5.7227-5.1602 8.8672-1.3477 3.0352-3.0195 6.8125-1.6992 10.637 1.0547 2.8438 3.5547 4.9102 6.5508 5.4062v12.062c0 0.82812 0.67188 1.5 1.5 1.5zm-5.2148-19.945c-0.9375-2.707 0.41016-5.7539 1.6016-8.4453v0.003906c1.0078-2.2969 2.2188-4.5039 3.6133-6.5859 1.3945 2.082 2.6055 4.2852 3.6133 6.5781 1.1875 2.6875 2.5352 5.7344 1.6016 8.4414v0.003906c-0.84375 2.1367-2.9141 3.5391-5.2148 3.5273-2.2969 0.011719-4.3672-1.3867-5.2148-3.5234z"/>
                    </g>
                  </svg>
                </span>
                <span className="font-semibold">Energieproduktion</span>
              </div>
              <div>
                <span>Total: <b>126,68 GWh</b></span>
              </div>
            </div>
            <EnergyShareStatic />
          </div>
        </div>
        <div className="flex-1 overflow-auto w-full">
          <div className="relative w-full h-screen overflow-hidden">
            <Image
              src="/images/map_image.png"
              layout="fill"
              objectFit="cover"
              alt="Map"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </LayoutMap>
      <BottomNav>
        <div className="flex">
          <div className="pe-2">
            <LightButtonMedium
              href="/questionsDefault/question1"
              icon={ArrowLeftIcon}
              text="Zurück"
            />
          </div>
          <div className="pe-2">
            <PrimaryButtonMedium
              href="/questionsDefault/question3"
              icon={ArrowRightIcon}
              text="Szenarien sehen"
            />
          </div>
        </div>
      </BottomNav>
    </>
  );
}
