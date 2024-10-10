"use client";

import BottomNav from "../../../components/common/BottomNav";
import BreadcrumbDefault from "../../../components/common/BreadcrumbDefault";
import Goal from "../../../components/common/Goal";
import LayoutSimple from "../../../components/layout/LayoutSimple";
import ScenarioCard from "../../../components/common/ScenarioCard";
import { LightButtonMedium, PrimaryButtonMedium } from "../../../components/common/Buttons";
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

export default function Question3() {
  return (
    <>
      <BreadcrumbDefault />
      <main className="grow">
        <LayoutSimple>
          <div className="relative flex justify-center pb-8">
            <h1 className="text-xl font-semibold">Szenarienübersicht</h1>
            <div className="absolute top-0 right-0">
              <Goal />
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4 items-stretch pt-8">
            <ScenarioCard
              href=""
              icon={
                <path d="m83.844 60.027c-6.1602-3.9453-17.168-10.949-21.668-13.547-3.4609-1.9961-5.9883-2.957-7.332-3.3867-0.1875-0.96875-0.65234-1.8359-1.3203-2.5117 0.96094-1.668 2.3828-4.7656 2.3828-8.543 0-7.2383-2.7812-21.523-3.6367-25.727-0.25781-1.2617-1.3359-2.1484-2.625-2.1484-1.4375 0-2.6172 1.1211-2.6875 2.5547-0.089843 1.957-0.89844 19.285-0.89844 25.551 0 3.8711 0.41016 6.543 0.73438 8.0586-0.71484 0.62109-1.2422 1.4414-1.5039 2.3789-1.918-0.003906-5.3086 0.30469-8.6055 2.2031-6.4648 3.7422-18.18 13.996-20.461 16.016-0.58203 0.51172-0.91406 1.2461-0.91406 2.0078 0 0.47656 0.12891 0.94531 0.36719 1.3398 0.49609 0.86328 1.3945 1.3477 2.3203 1.3477 0.41797 0 0.83984-0.097656 1.2383-0.30469 5.8281-3.0039 18.043-9.3789 22.562-11.992 2.0703-1.1953 3.6602-2.293 4.8281-3.1875l-2.8125 38.484c-2.9844 0.47266-5.2734 3.0508-5.2734 6.168 0 0.57422 0.46484 1.043 1.043 1.043h20.832c0.57422 0 1.043-0.46484 1.043-1.043 0-3.1133-2.293-5.6953-5.2734-6.168l-2.6875-36.734c1.0156 1.1289 2.3164 2.2891 3.9414 3.2305 6.2734 3.6172 20.035 8.3555 24.066 9.707 0.26953 0.10156 0.55859 0.15234 0.89062 0.15234 0.95703 0 1.8477-0.51172 2.332-1.3438 0.71484-1.2383 0.32813-2.8203-0.88281-3.6055zm-33.828-13.16c-1.5664 0-2.8398-1.2734-2.8398-2.8398s1.2734-2.8398 2.8398-2.8398 2.8359 1.2695 2.8398 2.8359v0.011718c-0.003907 1.5625-1.2773 2.832-2.8398 2.832zm-1.8672-14.598c0-6.2188 0.80469-23.504 0.89453-25.449 0.015625-0.32031 0.28125-0.57031 0.60547-0.57031 0.28516 0 0.52734 0.19531 0.58203 0.47656 0.60156 2.9609 3.5938 18.09 3.5938 25.316 0 3.2578-1.2539 5.9883-2.0469 7.4023-0.55078-0.21094-1.1367-0.33984-1.7617-0.33984-0.45312 0-0.88281 0.082031-1.3008 0.19531-0.27344-1.4805-0.56641-3.8047-0.56641-7.0273zm-7.3867 19.254c-4.4883 2.5938-16.664 8.9492-22.48 11.945-0.28516 0.14844-0.63281 0.050781-0.80469-0.24609-0.054687-0.089844-0.082031-0.18359-0.082031-0.28516 0-0.16797 0.078125-0.32812 0.21094-0.44922 2.2578-1.9961 13.828-12.133 20.121-15.773 2.8242-1.6289 5.8164-1.9102 7.4375-1.9258 0.16797 1.0586 0.65625 2.0117 1.3867 2.7383-1.0781 0.92578-2.9414 2.3516-5.7969 4zm18.484 42.223h-18.488c0.46484-1.7969 2.0977-3.125 4.0352-3.125h10.418c1.9375 0 3.5703 1.3281 4.0352 3.125zm-13.332-5.207 2.9062-39.754c0.38281 0.097656 0.78125 0.16406 1.1953 0.16406 0.40234 0 0.78906-0.0625 1.168-0.15625l2.9062 39.746zm37.008-25.949c-0.16016 0.27734-0.57812 0.32422-0.71484 0.27344-2.8633-0.96094-17.465-5.9375-23.727-9.5508-2.7305-1.5781-4.4141-3.8672-5.2656-5.2812l-0.019532-0.28125c0.75391-0.64453 1.3086-1.5039 1.5664-2.4883 1.3359 0.46875 3.5 1.3633 6.375 3.0234 4.4609 2.5742 15.438 9.5586 21.578 13.492 0.27734 0.17969 0.36719 0.53516 0.20703 0.8125z"/>
              }
              title="Wind-Repowering"
              text="Bestehende Windkraftanlagen werden durch leistungsstärkere, moderne Turbinen ersetzt."
            />
            <ScenarioCard
              href=""
              icon={
                <path d="m71.875 7.8125v-3.125c0-0.86328 0.69922-1.5625 1.5625-1.5625s1.5625 0.69922 1.5625 1.5625v3.125c0 0.86328-0.69922 1.5625-1.5625 1.5625s-1.5625-0.69922-1.5625-1.5625zm10.938 10.938c0 0.41406 0.16406 0.8125 0.45703 1.1055s0.69141 0.45703 1.1055 0.45703h3.125c0.86328 0 1.5625-0.69922 1.5625-1.5625s-0.69922-1.5625-1.5625-1.5625h-3.125c-0.86328 0-1.5625 0.69922-1.5625 1.5625zm-1.5625-6.25c0.46094 0 0.89844-0.20312 1.1953-0.55859l1.9453-2.3164c0.54297-0.66016 0.45312-1.6367-0.20312-2.1875s-1.6328-0.46875-2.1914 0.17969l-1.9414 2.3164c-0.39063 0.46484-0.47656 1.1133-0.22266 1.6641 0.25781 0.55078 0.80859 0.90234 1.418 0.90234zm-15.625 76.562v6.25c0 0.41406-0.16406 0.8125-0.45703 1.1055s-0.69141 0.45703-1.1055 0.45703h-59.375c-0.86328 0-1.5625-0.69922-1.5625-1.5625v-6.25c0-0.86328 0.69922-1.5625 1.5625-1.5625h23.484l1.3008-43.586c-0.75391-0.46484-1.4336-1.0312-2.0273-1.6875l-4.2031 2.6562c-0.25 0.16016-0.54297 0.24219-0.83594 0.24219-0.0625 0-0.12109-0.003906-0.18359-0.011719-0.18359-0.019531-4.5117-0.52734-6.5117-0.94531l0.003906 0.003906c-3.9414-0.96484-7.8164-2.1836-11.594-3.6523-0.55469-0.21484-0.93359-0.72266-0.98828-1.3125-0.054687-0.58984 0.22656-1.1602 0.73047-1.4727 3.4258-2.125 6.9648-4.0781 10.594-5.8398 1.8594-0.87109 6.0664-2.2031 6.2461-2.2578h-0.003906c0.33594-0.10547 0.69922-0.097657 1.0273 0.027343l4.4688 1.7031c0.66016-1.1719 1.5625-2.1875 2.6484-2.9844l-2.1172-4.25v0.003907c-0.16016-0.32031-0.20703-0.6875-0.12891-1.0352 0.039063-0.17969 0.97656-4.4375 1.6016-6.3906 1.3438-3.8242 2.9414-7.5586 4.7852-11.172 0.26562-0.52344 0.80469-0.85156 1.3906-0.85156h0.011719c0.59375 0.003906 1.1328 0.34375 1.3906 0.875 0.125 0.25781 3.1211 6.3906 4.7617 11.113 0.67969 1.9648 1.5781 6.2617 1.6172 6.4453 0.070312 0.34375 0.023438 0.69922-0.13281 1.0156l-2.1172 4.2461c1.0469 0.76953 1.9258 1.75 2.582 2.875l4.6094-1.7227h-0.003906c0.33203-0.12109 0.69141-0.12891 1.0273-0.023437 0.17969 0.058593 4.3711 1.418 6.2422 2.3125 3.6094 1.793 7.125 3.7695 10.535 5.918 0.5 0.31641 0.77734 0.88672 0.71875 1.4766-0.058594 0.58984-0.44531 1.0938-0.99609 1.3047-3.793 1.4414-7.6719 2.6289-11.621 3.5547-2 0.41797-6.3555 0.87891-6.5391 0.89844-0.054688 0.003907-0.10938 0.007813-0.16406 0.007813-0.29688 0-0.58984-0.085937-0.83984-0.24609l-4.0703-2.6016c-0.57812 0.65625-1.25 1.2305-1.9883 1.7031l1.1836 43.66h23.48c0.41406 0 0.8125 0.16406 1.1055 0.45703s0.45703 0.69141 0.45703 1.1055zm-21.875-53.125c0 1.2188-0.23828 2.4258-0.70312 3.5547l3.6289 2.3203c1.2305-0.13672 4.2344-0.48828 5.6953-0.79297l-0.003906-0.003906c2.7383-0.61719 5.4375-1.3906 8.0859-2.3242-2.0859-1.2383-4.9883-2.8945-7.4297-4.0469-1.332-0.63672-4.1836-1.6055-5.3477-1.9922l-4.0938 1.5312c0.10938 0.57812 0.16797 1.1641 0.16797 1.7539zm-18.004 3.6641c-0.71484-1.6641-0.92188-3.5078-0.59375-5.2891l-4.0234-1.5312c-1.168 0.37891-4.0273 1.3242-5.3555 1.9453-2.4648 1.1328-5.3828 2.7734-7.4766 3.9922v0.003906c2.6406 0.94922 5.332 1.75 8.0625 2.3906 1.457 0.30469 4.4492 0.68359 5.6836 0.83203zm4.0234-16.367 1.8633 3.7383c1.7891-0.54688 3.6992-0.54688 5.4844 0l1.8672-3.7461c-0.25781-1.1992-0.91016-4.1328-1.3945-5.5312-0.88672-2.5547-2.2266-5.6172-3.2305-7.8203l-0.003906 0.003906c-1.2109 2.5312-2.2734 5.1289-3.1797 7.7852-0.45703 1.4297-1.1328 4.3672-1.4062 5.5742zm4.6055 18.953c2.5273 0 4.8086-1.5234 5.7734-3.8594 0.96875-2.3359 0.43359-5.0234-1.3555-6.8086-1.7852-1.7891-4.4727-2.3242-6.8086-1.3555-2.3359 0.96484-3.8594 3.2461-3.8594 5.7734 0.003906 3.4492 2.8008 6.2461 6.25 6.25zm1.9336 2.9219c-1.2344 0.26172-2.5078 0.26953-3.7461 0.023437l-1.2656 42.367h6.1602zm26.191 45.516h-56.25v3.125h56.25zm-3.125-70.312h3.125c0.86328 0 1.5625-0.69922 1.5625-1.5625s-0.69922-1.5625-1.5625-1.5625h-3.125c-0.86328 0-1.5625 0.69922-1.5625 1.5625s0.69922 1.5625 1.5625 1.5625zm7.8125-1.5625c0-2.5273 1.5234-4.8086 3.8594-5.7734 2.3359-0.96875 5.0234-0.43359 6.8086 1.3555 1.7891 1.7852 2.3242 4.4727 1.3555 6.8086-0.96484 2.3359-3.2461 3.8594-5.7734 3.8594-3.4492-0.003906-6.2461-2.8008-6.25-6.25zm3.125 0c0 1.2656 0.76172 2.4023 1.9297 2.8867 1.168 0.48438 2.5117 0.21484 3.4062-0.67578 0.89062-0.89453 1.1602-2.2383 0.67578-3.4062-0.48438-1.168-1.6211-1.9297-2.8867-1.9297-1.7266 0.003906-3.1211 1.3984-3.125 3.125zm26.234 55.648c-0.29688 0.37891-0.75391 0.60156-1.2344 0.60156h-20.312v4.6875h6.25c0.86328 0 1.5625 0.69922 1.5625 1.5625s-0.69922 1.5625-1.5625 1.5625h-15.625c-0.86328 0-1.5625-0.69922-1.5625-1.5625s0.69922-1.5625 1.5625-1.5625h6.25v-4.6875h-20.312c-0.48047 0-0.9375-0.22266-1.2344-0.60547-0.29297-0.37891-0.39844-0.875-0.28125-1.3438l5.9648-23.438h0.003906c0.17578-0.69141 0.79688-1.1758 1.5117-1.1758h31.82c0.71484 0 1.3359 0.48438 1.5117 1.1758l5.9648 23.438h0.003906c0.11719 0.46875 0.011719 0.96484-0.28125 1.3477zm-35.953-7.2109h-5.8281l-1.1953 4.6875h6.0859zm1.5625-7.8125h-5.4023l-1.1953 4.6875h5.6602zm0.625-3.125 0.9375-4.6875h-4.9766l-1.1914 4.6875zm9.0938 10.938h-8.0938l-0.9375 4.6875h9.0312zm0-7.8125h-6.5312l-0.9375 4.6875h7.4688zm0-7.8125h-4.9688l-0.9375 4.6875h5.9062zm3.125 4.6875h5.9062l-0.9375-4.6875h-4.9688zm0 7.8125h7.4688l-0.9375-4.6875h-6.5312zm9.0312 7.8125-0.9375-4.6875h-8.0938v4.6875zm0.0625-15.625h5.2305l-1.1914-4.6875h-4.9766zm1.5625 7.8125h5.6562l-1.1953-4.6875h-5.3984zm7.6484 7.8125-1.1953-4.6875h-5.8281l0.9375 4.6875zm-28.684-59.742c0.66016 0.54297 1.6367 0.45313 2.1875-0.20312 0.54688-0.65625 0.46875-1.6328-0.17969-2.1875l-2.3164-1.9453c-0.66016-0.54688-1.6406-0.45703-2.1914 0.19922-0.55078 0.66016-0.46875 1.6406 0.18359 2.1953z"/>
              }
              title="Zubau Wind und PV"
              text="Windkraft und Photovoltaik werden gemeinsam ausgebaut, um erneuerbare Energien zu maximieren."
            />
            <ScenarioCard
              href=""
              icon={
                <path d="m94.016 52.176-2.8438-15.238-3.1016-16.617c-0.57422-3.0781-3.2617-5.3086-6.3906-5.3086h-63.355c-3.1328 0-5.8164 2.2305-6.3906 5.3086l-3.1016 16.617-2.8477 15.238c-0.35156 1.9023 0.15625 3.8594 1.3906 5.3477 1.2344 1.4844 3.0664 2.3438 5 2.3438h29.688v10.078h-8.0625c-3.5898 0.003907-6.4961 2.9102-6.5 6.5v6.0508-0.003906c0 0.66406 0.26172 1.3008 0.73047 1.7695s1.1055 0.73047 1.7695 0.73047h40c0.66406 0 1.3008-0.26172 1.7695-0.73047s0.73047-1.1055 0.73047-1.7695v-6.0469c-0.003906-3.5898-2.9102-6.4961-6.5-6.5h-8.0625v-10.078h29.688c1.9336 0 3.7656-0.85938 5-2.3438 1.2344-1.4883 1.7422-3.4453 1.3906-5.3477zm-10.863-30.945 2.5586 13.707h-13.863l-1.9102-14.93h11.738c0.72266-0.003906 1.3438 0.51172 1.4766 1.2227zm-27.715 33.637h-2.9375v-14.93h14.941l1.9062 14.93zm-24.789 0 1.9062-14.93h14.945v14.93zm16.852-34.859v14.93h-14.301l1.9023-14.93zm5 14.934v-14.934h12.398l1.9062 14.934zm-34.176-14.934h11.738l-1.9102 14.93h-13.863l2.5586-13.707c0.13281-0.71094 0.75391-1.2266 1.4766-1.2227zm-7.1016 34.32c-0.28516-0.34375-0.40625-0.79688-0.32031-1.2344l2.457-13.156h14.156l-1.9062 14.93h-13.234c-0.44531 0.003906-0.87109-0.19531-1.1523-0.53906zm56.277 22.117v3.5508h-35v-3.5508c0-0.82812 0.67188-1.5 1.5-1.5h32c0.82812 0 1.5 0.67188 1.5 1.5zm-14.562-6.5h-5.875v-10.078h5.8789zm35.84-15.617c-0.28125 0.34375-0.70703 0.54297-1.1523 0.53906h-13.234l-1.9062-14.93h14.16l2.457 13.156c0.082032 0.4375-0.035156 0.89062-0.32422 1.2344z"/>
              }
              title="Zubau PV"
              text="Der Ausbau der Photovoltaik steht im Mittelpunkt, um mehr Solarenergie zu gewinnen."
            />
            <ScenarioCard
              href=""
              icon={
                <g>
                  <path d="m72.117 75.402c-0.42188-3.2617-1.293-7.5586-2.8047-13.043-5.1211-18.566-20.047-34.023-20.047-34.023 0.13672 0.27344 10.184 25.418 12.582 33.047 1.1484 3.293 2.5625 8.1367 3.5898 12.43 0.49609 0.13672 1.0352 0.29688 1.625 0.48438 2.0781 0.65625 3.6016 1.0234 5.0547 1.1055z"/>
                  <path d="m82.445 43.492c-1.6016 5.9336-2.918 12.148-2.918 12.148s-1.1289-4.9922-3.6719-9.4141c-6.8047-14.449-16.871-21.652-22.301-24.977-0.50781-0.30859-0.90234-0.29688-1.1719 0.035156-0.4375 0.53906-0.27734 0.71094 1.6836 2.7891 3.7227 3.9492 12.234 13.879 16.797 24.504 3.7969 8.8438 3.4609 19.957 2.6562 26.809 1.3867-0.10156 2.8477-0.46484 4.8008-1.0938 1.8555-0.59375 3.2031-0.94141 4.4648-1.0508 2.0977-13.684 6.2891-38.102 11.574-53.672l0.10938-0.21094s-6.75 6.4297-12.023 24.133z"/>
                  <path d="m88.914 79.219c-4.5391-1.4531-6.0625-1.4531-10.598 0-4.6719 1.5039-6.5234 1.5039-11.258 0-4.7773-1.5-6.1289-1.4023-10.602 0-4.7539 1.5039-6.5898 1.5039-11.258 0-4.5469-1.4531-6.0586-1.4531-10.602 0-4.668 1.5039-6.5234 1.5039-11.258 0-2.3047-0.72656-4.1094-1.0977-5.3555-1.0977-1.1758 0-2.9375 0.37109-5.25 1.0977-2.1523 0.68359-3.8672 1.0156-5.2148 1.0781v6.7617l0.015625 0.26953c0.79688-0.42188 2.5938-0.78906 4.9062-1.5156 4.8633-1.5391 6.5938-1.4531 11.199 0 4.4844 1.4102 5.8477 1.5078 10.605 0 4.7266-1.5039 6.5586-1.5039 11.312 0s6.1133 1.4102 10.605 0c4.5938-1.4688 6.3125-1.5469 11.191 0 4.4648 1.4102 5.8281 1.5039 10.605 0 4.7344-1.5039 6.5859-1.5039 11.254 0 2.0039 0.64844 3.6328 1.0078 4.8516 1.0781l0.039063-6.5859c-1.0195 0.13672-2.8594-0.33203-5.1914-1.0859z"/>
                  <path d="m88.914 90.68c-4.5391-1.4531-6.0625-1.4531-10.598 0-4.6719 1.5039-6.5234 1.5039-11.258 0-4.7773-1.5-6.1289-1.4023-10.602 0-4.7539 1.5039-6.5898 1.5039-11.258 0-4.5469-1.4531-6.0586-1.4531-10.602 0-4.668 1.5039-6.5234 1.5039-11.258 0-2.3047-0.72656-4.1094-1.0977-5.3555-1.0977-1.1758 0-2.9375 0.37109-5.25 1.0977-2.1523 0.68359-3.8672 1.0156-5.2148 1.0781v6.7617l0.015625 0.26953c0.79688-0.42187 2.5938-0.78906 4.9062-1.5156 4.8633-1.5391 6.5938-1.4531 11.199 0 4.4844 1.4102 5.8477 1.5078 10.605 0 4.7266-1.5039 6.5586-1.5039 11.312 0 4.7539 1.5039 6.1133 1.4102 10.605 0 4.5938-1.4688 6.3125-1.5469 11.191 0 4.4648 1.4102 5.8281 1.5039 10.605 0 4.7344-1.5039 6.5859-1.5039 11.254 0 2.0039 0.64844 3.6328 1.0078 4.8516 1.0781l0.039063-6.5859c-1.0195 0.13672-2.8594-0.33203-5.1914-1.0859z"/>
                  <path d="m27.32 48.441 1.2227 1.9297c0.60547 0.95703 6.0508 9.6406 12.414 22.891 1.1953 0.12891 2.4922 0.47266 4.2422 1.0273 4.6641 1.5 6.5039 1.5 11.258 0 1.8789-0.58984 3.2031-0.94531 4.4648-1.0508-0.23438-1.0547-0.50781-2.1211-0.83594-3.1758-1.8945-6.0977-13.18-28.531-13.293-28.758l-1.0312-2.0547 0.5625 2.2305c0.23828 0.94141 5.1172 20.238 6.8945 26.77-2.3281-3.9648-7.8555-13.254-8.2031-13.844-0.21484-0.76172-4.0977-14.773-3.3711-24.75 0.55859-15.594 4.6523-27.117 4.6953-27.23l0.42969-1.1914-0.85547 0.93359c-0.10156 0.10938-10.035 11.285-8.6797 35.883 0.11328 2.9844 0.42969 6.168 0.91406 9.2617-3.125-3.7031-8.2344-7.1953-8.2891-7.2344l-1.2656-0.85938 0.92188 1.2227c0.0625 0.082032 6.1953 8.2383 10.207 15.008 0.49219 2.2148 1.4492 5.3672 2.2969 8.1523 0.33594 1.1055 0.66016 2.1758 0.94141 3.1367-5.4727-8.1055-13.938-16.598-14.027-16.688z"/>
                  <path d="m30.594 75.301c1.1602-0.16406 2.418-0.49609 4.0039-1.0078 0.41016-0.13281 0.78516-0.24609 1.1484-0.35156-3.3945-6.7148-7.582-16.062-9.1758-24.039-2.8906-12.363 1.2773-21.078 1.3164-21.164 0 0-11.117 14.633-0.62109 39.707 1.1641 2.7734 2.2852 5.0234 3.3281 6.8555z"/>
                  <path d="m19.891 73.402c0.98047 0.17969 2.1289 0.47656 3.4492 0.89062 1.4648 0.46484 2.6523 0.78516 3.7305 0.96094-0.011718-0.039062-0.023437-0.082031-0.035156-0.125-4.3281-13.762-19.59-31.547-19.746-31.727l-1.4766-1.7109 1.0625 1.9922c0.054688 0.10547 5.8203 11.148 12.34 27.918 0.23438 0.59766 0.45312 1.1992 0.67578 1.8008z"/>
                </g>
              }
              title="Moorbewirtschaftung"
              text="Moorlandschaften werden wiederhergestellt, um CO₂-Speicherung und Klimaschutz zu fördern."
            />
            <ScenarioCard
              href=""
              icon={
                <path d="M12.5909 70V23.4545H21.0227V43.1591H42.5909V23.4545H51.0455V70H42.5909V50.2273H21.0227V70H12.5909ZM57.2768 78V73.4773L68.2086 64.4091C69.1177 63.6515 69.898 62.9621 70.5495 62.3409C71.2011 61.7045 71.7011 61.0833 72.0495 60.4773C72.398 59.8561 72.5723 59.1818 72.5723 58.4545C72.5723 57.2727 72.1026 56.3485 71.1632 55.6818C70.2238 55.0152 69.0723 54.6818 67.7086 54.6818C66.2541 54.6818 65.0799 55.053 64.1859 55.7955C63.3071 56.5227 62.8677 57.5379 62.8677 58.8409H56.845C56.845 56.0227 57.8677 53.803 59.9132 52.1818C61.9738 50.5455 64.6026 49.7273 67.7995 49.7273C69.9662 49.7273 71.8526 50.1136 73.4586 50.8864C75.0799 51.6439 76.3374 52.6742 77.2314 53.9773C78.1253 55.2803 78.5723 56.7424 78.5723 58.3636C78.5723 59.6667 78.3071 60.8788 77.7768 62C77.2465 63.1061 76.4208 64.2197 75.2995 65.3409C74.1783 66.447 72.7465 67.6439 71.0041 68.9318L66.3223 72.6591V72.8636H79.0723V78H57.2768Z"/>
              }
              title="Wasserstoff"
              text="Wasserstoff wird als Energieträger eingesetzt, um fossile Brennstoffe zu ersetzen."
            />
            <ScenarioCard
              href=""
              icon={
                <path d="m74.73 75c-3.5 1.8359-7.3984 2.7891-11.352 2.7812-11.109 0-20.609-7.4883-24.32-18h20.09c1.3828 0 2.5-1.1211 2.5-2.5 0-1.3828-1.1172-2.5-2.5-2.5h-21.367c-0.25781-1.582-0.39062-3.1797-0.39062-4.7812 0-1.5078 0.11719-3.0117 0.34766-4.5h21.41c1.3828 0 2.5-1.1211 2.5-2.5s-1.1172-2.5-2.5-2.5h-20.148c3.6016-10.641 13.172-18.262 24.379-18.262 3.9531-0.015625 7.8477 0.93359 11.352 2.7617 1.1914 0.45312 2.5273-0.0625 3.1094-1.1953 0.58203-1.1328 0.21875-2.5195-0.83984-3.2266-4.2109-2.2031-8.8945-3.3477-13.648-3.3398-14 0-25.789 9.8086-29.648 23.262h-9.582c-1.3828 0-2.5 1.1211-2.5 2.5s1.1172 2.5 2.5 2.5h8.5703c-0.19922 1.4922-0.29688 2.9961-0.30078 4.5 0.003906 1.5938 0.11328 3.1875 0.32812 4.7695h-8.6016 0.003906c-1.3828 0-2.5 1.1211-2.5 2.5 0 1.3828 1.1172 2.5 2.5 2.5h9.6797c3.9414 13.309 15.711 23 29.578 23 4.7461 0.003907 9.418-1.1484 13.621-3.3477 0.66406-0.25391 1.1914-0.77734 1.4453-1.4414 0.25781-0.66406 0.21484-1.4062-0.10937-2.0391-0.32422-0.63281-0.90234-1.0977-1.5938-1.2773-0.6875-0.17969-1.418-0.058593-2.0117 0.33594z"/>
              }
              title="Kostenoptimierung"
              text="Der Ausbau der Energieproduktion erfolgt mit dem Fokus auf Kosteneffizienz."
            />
            <ScenarioCard
              href=""
              icon={
                <g>
                  <path d="m37.242 64.281c-2.1445 0-4.2891-0.81641-5.918-2.4492-3.2656-3.2656-3.2656-8.5742 0-11.84 3.2617-3.2656 8.5742-3.2656 11.84 0 0.40234 0.40234 0.40234 1.0508 0 1.4531-0.40234 0.40234-1.0508 0.40234-1.4531 0-2.4648-2.4648-6.4688-2.4609-8.9336 0-2.4609 2.4609-2.4609 6.4688 0 8.9336 2.4648 2.4609 6.4727 2.4609 8.9336 0 0.40234-0.40234 1.0508-0.40234 1.4531 0 0.40234 0.40234 0.40234 1.0508 0 1.4531-1.6289 1.6328-3.7734 2.4492-5.918 2.4492z" fillRule="evenodd"/>
                  <path d="m54.148 49.598c-3.4844 0-6.3164 2.832-6.3164 6.3164 0 3.4844 2.8359 6.3164 6.3164 6.3164 3.4844 0 6.3164-2.832 6.3164-6.3164 0-3.4844-2.832-6.3164-6.3164-6.3164zm0 14.688c-4.6172 0-8.3711-3.7539-8.3711-8.3711 0-4.6172 3.7539-8.3711 8.3711-8.3711 4.6172 0 8.3711 3.7578 8.3711 8.3711 0 4.6172-3.7539 8.3711-8.3711 8.3711z" fillRule="evenodd"/>
                  <path d="m70.102 66.438h-4.7383c-0.39062 0-0.74609-0.21875-0.92188-0.57031-0.17188-0.35156-0.13281-0.76563 0.10156-1.0781l3.8984-5.1484c0.027344-0.039063 0.058594-0.074219 0.09375-0.10547 0.28516-0.28516 0.44141-0.66797 0.44141-1.0742s-0.15625-0.78516-0.44141-1.0742c-0.59375-0.59375-1.5547-0.58984-2.1445 0-0.40234 0.40234-1.0508 0.40234-1.4531 0-0.40234-0.40234-0.40234-1.0508 0-1.4531 1.3945-1.3945 3.6602-1.3945 5.0547 0 0.67578 0.67578 1.0469 1.5703 1.0469 2.5273 0 0.92969-0.35156 1.8047-0.99219 2.4727l-2.6133 3.4492h2.6719c0.56641 0 1.0273 0.46094 1.0273 1.0273s-0.46094 1.0273-1.0273 1.0273z" fillRule="evenodd"/>
                  <path d="m18.246 54.258c-6.1016 0-11.07 4.9648-11.07 11.07s4.9688 11.07 11.07 11.07h61.246c7.3477 0 13.328-5.9805 13.328-13.328 0-6.1953-4.3828-11.664-10.426-13.008-0.28906-0.066406-0.53516-0.25-0.67969-0.51172-0.14062-0.26172-0.16406-0.57031-0.058594-0.84766 0.55469-1.4922 0.83594-3.0547 0.83594-4.6562 0-7.3516-5.9805-13.328-13.328-13.328-1.9492 0-3.832 0.41406-5.5938 1.2305-0.24609 0.11328-0.53516 0.125-0.78906 0.03125-0.25781-0.097657-0.46484-0.28906-0.57812-0.53906-2.1562-4.7617-6.9219-7.8359-12.145-7.8359-7.3477 0-13.328 5.9805-13.328 13.328v0.039062c0.003906 0.039063 0.003906 0.078125 0.003906 0.11719 0 0.35547-0.18359 0.68359-0.48438 0.87109s-0.67969 0.20703-0.99609 0.046874c-1.5391-0.76172-3.1914-1.1445-4.9062-1.1445-6.1055 0-11.074 4.9648-11.074 11.07 0 1.7188 0.38672 3.3672 1.1445 4.8984 0.16406 0.33594 0.13672 0.73438-0.074219 1.0391-0.21094 0.30859-0.57422 0.47656-0.94922 0.4375-0.39062-0.039063-0.77734-0.058594-1.1484-0.058594zm0 24.199c-7.2383 0-13.125-5.8867-13.125-13.125 0-7.1328 5.7188-12.953 12.812-13.121-0.47266-1.3672-0.71094-2.7969-0.71094-4.2695 0-7.2383 5.8906-13.125 13.129-13.125 1.5156 0 2.9844 0.25391 4.3906 0.75391 0.69531-7.8438 7.3008-14.016 15.324-14.016 5.6914 0 10.914 3.1641 13.574 8.1445 1.7656-0.68359 3.6211-1.0273 5.5312-1.0273 8.4844 0 15.387 6.9023 15.387 15.383 0 1.4648-0.20703 2.9062-0.60938 4.2969 2.9258 0.88672 5.5586 2.6484 7.5 5.0391 2.2148 2.7266 3.4375 6.168 3.4375 9.6875 0 8.4844-6.9023 15.383-15.387 15.383h-61.246z" fillRule="evenodd"/>
                </g>
              }
              title="Hohe CO2-Preise"
              text="Hohe CO₂-Preise lenken den Ausbau erneuerbarer Energien und verringern Emissionen."
            />
            <ScenarioCard
              href=""
              icon={
                <g>
                  <path d="m51.199 19.199c-7.1992-0.30078-14.102 2.1992-19.301 7.1992-5.1992 5-8.1016 11.699-8.1016 18.898 0 5.8984 1.8984 11.5 5.6016 16.199 3.1992 4.1016 5.3984 8 6.8008 12.102l0.10156 0.30078v10.5c0 1.3008 1 2.5 2.3008 2.6992 0.5 5.8008 5.3984 10.402 11.398 10.402s10.898-4.6016 11.398-10.5c1.3008-0.19922 2.3008-1.3008 2.3008-2.6992v-10.402l0.10156-0.30078c1.3984-4.1016 3.6016-8 6.8008-12 3.8984-4.8984 5.8984-11.102 5.6016-17.301-0.70312-13.496-11.602-24.496-25.004-25.098zm7 55.801v6.6016h-16.398v-6.6016zm-8.1992 17c-3 0-5.3984-2.1992-5.8984-5h11.801c-0.50391 2.8984-2.9023 5-5.9023 5zm16.199-33.898c-3 3.8008-5.1992 7.5-6.8008 11.398h-18.797c-1.6016-3.8008-3.8008-7.6016-6.8008-11.398-2.8984-3.6992-4.3984-8.1016-4.3984-12.801 0-5.6992 2.3008-11 6.3984-15 4.1016-3.8984 9.5-6 15.301-5.6992 10.602 0.5 19.199 9.1992 19.699 19.699 0.097657 5.0977-1.5 9.8984-4.6016 13.801z"/>
                  <path d="m50 13c1.5 0 2.6992-1.1992 2.6992-2.6992v-5.1016c0-1.5-1.1992-2.6992-2.6992-2.6992s-2.6992 1.1992-2.6992 2.6992v5.1016c0 1.5 1.1992 2.6992 2.6992 2.6992z"/>
                  <path d="m30.102 16.398c0.5 0.89844 1.3984 1.3984 2.3984 1.3984 0.5 0 0.89844-0.10156 1.3984-0.39844 1.3008-0.80078 1.8008-2.3984 1-3.6992l-2.5-4.3984c-0.80078-1.3008-2.3984-1.8008-3.6992-1s-1.8008 2.3984-1 3.6992z"/>
                  <path d="m21 25.398-4.3984-2.5c-1.3008-0.80078-3-0.30078-3.6992 1-0.80078 1.3008-0.30078 3 1 3.6992l4.3984 2.5c0.39844 0.19922 0.89844 0.39844 1.3984 0.39844 0.89844 0 1.8984-0.5 2.3984-1.3984 0.70312-1.1992 0.20312-2.8984-1.0977-3.6992z"/>
                  <path d="m17.699 45.301c0-1.5-1.1992-2.6992-2.6992-2.6992h-5.1016c-1.5 0-2.6992 1.1992-2.6992 2.6992s1.1992 2.6992 2.6992 2.6992h5.1016c1.5 0.10156 2.6992-1.1992 2.6992-2.6992z"/>
                  <path d="m18.301 60.5-4.4023 2.5c-1.3008 0.80078-1.8008 2.3984-1 3.6992 0.5 0.89844 1.3984 1.3984 2.3984 1.3984 0.5 0 0.89844-0.10156 1.3984-0.39844l4.3984-2.5c1.3008-0.80078 1.8008-2.3984 1-3.6992-0.79297-1.3008-2.4922-1.8008-3.793-1z"/>
                  <path d="m86.102 63-4.3984-2.5c-1.3008-0.80078-3-0.30078-3.6992 1-0.80078 1.3008-0.30078 3 1 3.6992l4.3984 2.5c0.39844 0.19922 0.89844 0.39844 1.3984 0.39844 0.89844 0 1.8984-0.5 2.3984-1.3984 0.60156-1.3008 0.19922-2.8984-1.0977-3.6992z"/>
                  <path d="m90.102 42.602h-5.1016c-1.5 0-2.6992 1.1992-2.6992 2.6992s1.1992 2.6992 2.6992 2.6992h5.1016c1.5 0 2.6992-1.1992 2.6992-2.6992s-1.1992-2.6992-2.6992-2.6992z"/>
                  <path d="m80.301 30.5c0.5 0 0.89844-0.10156 1.3984-0.39844l4.3984-2.5c1.3008-0.80078 1.8008-2.3984 1-3.6992-0.80078-1.3008-2.3984-1.8008-3.6992-1l-4.3984 2.4961c-1.3008 0.80078-1.8008 2.3984-1 3.6992 0.5 1.0039 1.3984 1.4023 2.3008 1.4023z"/>
                  <path d="m66.102 17.398c0.39844 0.19922 0.89844 0.39844 1.3984 0.39844 0.89844 0 1.8984-0.5 2.3984-1.3984l2.5-4.3984c0.80078-1.3008 0.30078-3-1-3.6992-1.3008-0.80078-3-0.30078-3.6992 1l-2.5 4.3984c-0.80078 1.1992-0.39844 2.9023 0.90234 3.6992z"/>
                </g>
              }
              title="Suffizienz"
              text="Nachhaltigkeit steht im Mittelpunkt, mit dem Ziel, weniger Energie zu verbrauchen und Ressourcen zu schonen."
            />
            <ScenarioCard
              href=""
              icon={
                <path d="m89.785 45.32-6.9727 9.5c-0.61328 0.83203-1.5625 1.2773-2.5195 1.2773-0.64062 0-1.293-0.19531-1.8477-0.60938l-9.5-6.9727c-1.3906-1.0195-1.6914-2.9766-0.67187-4.3672 1.0156-1.3906 2.9766-1.6953 4.3672-0.67188l3.2969 2.4219c-1.0352-13.422-12.258-24.027-25.941-24.027-9.293 0-17.93 4.9883-22.543 13.012-0.85938 1.5-2.7734 2.0078-4.2656 1.1523-1.4961-0.85938-2.0117-2.7695-1.1523-4.2617 5.7227-9.9648 16.434-16.152 27.957-16.152 16.875 0 30.746 13.016 32.148 29.539l2.5977-3.5391c1.0234-1.3945 2.9766-1.6953 4.3672-0.67188 1.3906 1.0195 1.6914 2.9766 0.67188 4.3672zm-10.918 18.578c-1.5273-0.80469-3.418-0.21484-4.2227 1.3125-4.4609 8.5039-13.254 13.789-22.941 13.789-13.68 0-24.902-10.609-25.938-24.023l3.3164 2.4336c1.3828 1.0234 3.3477 0.72266 4.3672-0.67188 1.0195-1.3906 0.71484-3.3477-0.67578-4.3672l-9.5039-6.9727c-1.3867-1.0234-3.3477-0.72266-4.3672 0.67187l-6.9727 9.5c-1.0195 1.3906-0.72266 3.3477 0.67187 4.3672 0.55859 0.41406 1.2031 0.60938 1.8477 0.60938 0.95703 0 1.9102-0.44141 2.5195-1.2773l2.5781-3.5156c1.4219 16.504 15.289 29.504 32.148 29.504 12.016 0 22.926-6.5625 28.477-17.129 0.80078-1.5273 0.21094-3.418-1.3125-4.2227z"/>
              }
              title="Autarkie"
              text="Die Region strebt Energieunabhängigkeit an, indem sie den eigenen Bedarf komplett selbst deckt."
            />
            <ScenarioCard
              href=""
              icon={
                <g>
                  <path d="m88.609 48.891-12.5-12.5c-0.29297-0.29297-0.69531-0.45703-1.1094-0.45312h-12.5c-0.63672-0.003906-1.207 0.37891-1.4531 0.96484-0.24219 0.58594-0.10547 1.2617 0.34375 1.707l11.406 11.391-11.391 11.391c-0.44922 0.44531-0.58594 1.1172-0.34766 1.7031 0.24219 0.58203 0.80859 0.96484 1.4414 0.96875h12.5c0.41406 0.003906 0.81641-0.16016 1.1094-0.45312l12.5-12.5c0.29688-0.29297 0.46094-0.69141 0.46094-1.1094s-0.16406-0.81641-0.46094-1.1094zm-14.25 12.047h-8.0938l9.8281-9.8281c0.60547-0.60938 0.60547-1.5938 0-2.2031l-9.8281-9.8438h8.0781l10.938 10.938z"/>
                  <path d="m63.609 48.891-12.5-12.5c-0.29297-0.29297-0.69531-0.45703-1.1094-0.45312h-12.5c-0.63672-0.003906-1.207 0.37891-1.4531 0.96484-0.24219 0.58594-0.10547 1.2617 0.34375 1.707l11.406 11.391-11.391 11.391c-0.44922 0.44531-0.58594 1.1172-0.34766 1.7031 0.24219 0.58203 0.80859 0.96484 1.4414 0.96875h12.5c0.41406 0.003906 0.81641-0.16016 1.1094-0.45312l12.5-12.5c0.29688-0.29297 0.46094-0.69141 0.46094-1.1094s-0.16406-0.81641-0.46094-1.1094zm-14.25 12.047h-8.0938l9.8281-9.8281c0.60547-0.60938 0.60547-1.5938 0-2.2031l-9.8281-9.8438h8.0781l10.938 10.938z"/>
                  <path d="m38.609 48.891-12.5-12.5c-0.29297-0.29297-0.69531-0.45703-1.1094-0.45312h-12.5c-0.63672-0.003906-1.207 0.37891-1.4531 0.96484-0.24219 0.58594-0.10547 1.2617 0.34375 1.707l11.406 11.391-11.406 11.391c-0.44922 0.44531-0.58594 1.1211-0.34375 1.707 0.24609 0.58594 0.81641 0.96875 1.4531 0.96484h12.5c0.41406 0.003906 0.81641-0.16016 1.1094-0.45312l12.5-12.5c0.29688-0.29297 0.46094-0.69141 0.46094-1.1094s-0.16406-0.81641-0.46094-1.1094zm-14.25 12.047h-8.0938l9.8281-9.8281c0.60547-0.60938 0.60547-1.5938 0-2.2031l-9.8281-9.8438h8.0781l10.938 10.938z"/>
                </g>
              }
              title="Weiter wie bisher"
              text="Es erfolgt keine wesentliche Änderung, und die aktuelle Energiepolitik wird fortgesetzt."
            />
            <ScenarioCard
              href=""
              icon={
                <path fill="#075985" d="m79.301 20.699c-16.199-16.199-42.5-16.199-58.699 0-16.199 16.199-16.199 42.5 0 58.699 16.199 16.199 42.5 16.199 58.699 0 16.199-16.199 16.199-42.598 0-58.699zm-10.5 31.699c-0.60156 0.60156-1.5 1-2.3984 1h-13v13c0 0.89844-0.39844 1.8008-1 2.3984-0.60156 0.60156-1.5 1-2.3984 1-1.8984 0-3.3984-1.5-3.3984-3.3984v-13h-13c-1.8984 0-3.3984-1.5-3.3984-3.3984s1.5-3.3984 3.3984-3.3984h13v-13c0-1.8984 1.5-3.3984 3.3984-3.3984 1.8984 0 3.3984 1.5 3.3984 3.3984v13h13c1.8984 0 3.3984 1.5 3.3984 3.3984-0.10156 0.89844-0.40234 1.8008-1 2.3984z"/>
              }
              title="Szenario erstellen"
              text="Erstellen Sie Ihr eigenes Szenario anhand verschiedener Parameter."
              bgColor="bg-sky-100"
              textColor="#075985"
            />
          </div>
        </LayoutSimple>
      </main>
      <BottomNav>
        <div className="flex">
          <div className="pe-2">
            <LightButtonMedium
              href="/questionsDefault/question2"
              icon={ArrowLeftIcon}
              text="Zurück"
            />
          </div>
        </div>
      </BottomNav>
    </>
  );
}
