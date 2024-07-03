import Image from "next/image";

export default function HomepageSecondaryCards({ src, text, children }) {
  return (
    <div className="flex overflow-hidden border border-slate-300 p-6">
      <div className="pe-4">
        <Image
          className="h-12 w-auto"
          src={src}
          width={48}
          height={48}
        />
      </div>
      <div className="flex flex-col justify-between">
        <p className="font-semibold">{ text }</p>
        { children }
      </div>
    </div>
  )
}
