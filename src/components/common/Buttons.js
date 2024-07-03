import Link from "next/link";

export const PrimaryButtonMedium = ({ href, icon: Icon, text }) => (
  <Link
    href={href}
    className="block rounded-full min-w-[100px] border-2 border-emerald-400 bg-emerald-400 px-2.5 py-1.5 text-base text-center font-semibold text-slate-800 shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
  >
    <span className="flex justify-center items-center">
      {Icon && (
        <span className="me-2">
          <Icon 
            className="h-4 w-4"
          />
        </span>
      )}
      { text }
    </span>
  </Link>
);

export const WhiteButtonMedium = ({ href, icon: Icon, text }) => (
  <Link
    href={href}
    className="block rounded-full min-w-[100px] border-2 border-white bg-white px-2.5 py-1.5 text-base text-center font-semibold text-slate-800 shadow-sm hover:bg-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-300"
  >
    <span className="flex justify-center items-center">
      {Icon && (
        <span className="me-2">
          <Icon 
            className="h-4 w-4"
          />
        </span>
      )}
      { text }
    </span>
  </Link>
);

export const LightButtonMedium = ({ href, icon: Icon, text }) => (
  <Link
    href={href}
    className="block rounded-full min-w-[100px] border-2 border-emerald-400 bg-transparent px-2.5 py-1.5 text-base text-center font-semibold text-emerald-400 shadow-sm hover:bg-emerald-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
  >
    <span className="flex justify-center items-center">
      {Icon && (
        <span className="me-2">
          <Icon 
            className="h-4 w-4"
          />
        </span>
      )}
      { text }
    </span>
  </Link>
);

export const OutlineWhiteButtonMedium = ({ href, icon: Icon, text }) => (
  <Link
    href={href}
    className="block rounded-full min-w-[100px] border-2 border-white bg-transparent px-2.5 py-1.5 text-base text-center font-semibold text-slate-800 shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-800"
  >
    <span className="flex justify-center items-center">
      {Icon && (
        <span className="me-2">
          <Icon 
            className="h-4 w-4"
          />
        </span>
      )}
      { text }
    </span>
  </Link>
);