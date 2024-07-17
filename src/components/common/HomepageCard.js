import Image from "next/image";

export default function HomepageCard({ src, text, children }) {
  return (
    <div className="bg-sky-500/50 overflow-hidden p-6">
      <div className="flex justify-center pb-6">
        <Image
          className="h-12 w-auto"
          src={src}
          width={48}
          height={48}
        />
      </div>
      <div className="pb-6 text-lg font-semibold text-center">{ text }</div>
      <div className="flex justify-center">
        { children }
      </div>
    </div>
  )
}
