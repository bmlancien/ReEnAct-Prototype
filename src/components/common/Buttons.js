import Link from "next/link";

export const PrimaryButtonMedium = ({ href, children }) => (
  <Link
    href={href}
    className="rounded-full min-w-[100px] bg-emerald-400 px-2.5 py-1.5 text-base text-center font-semibold text-slate-800 shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
  >
    { children }
  </Link>
);

export const WhiteButtonMedium = ({ href, children }) => (
  <Link
    href={href}
    className="rounded-full min-w-[100px] bg-white px-2.5 py-1.5 text-base text-center font-semibold text-slate-800 shadow-sm hover:bg-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-200"
  >
    { children }
  </Link>
);

export const LightButtonMedium = ({ href, children }) => (
  <Link
    href={href}
    className="rounded-full min-w-[100px] bg-slate-100 px-2.5 py-1.5 text-base text-center font-semibold text-slate-800 shadow-sm hover:bg-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-300"
  >
    {children}
  </Link>
);

export const OutlinePrimaryButtonMedium = ({ href, children }) => (
  <Link
    href={href}
    className="rounded-full min-w-[100px] border-2 border-emerald-400 bg-transparent px-2.5 py-1.5 text-base text-center font-semibold text-emerald-400 shadow-sm hover:bg-emerald-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
  >
    {children}
  </Link>
);

export const OutlineWhiteButtonMedium = ({ href, children }) => (
  <Link
    href={href}
    className="rounded-full min-w-[100px] border-2 border-white bg-transparent px-2.5 py-1.5 text-base text-center font-semibold text-slate-800 shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-800"
  >
    {children}
  </Link>
);

