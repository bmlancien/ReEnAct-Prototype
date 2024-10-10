import Link from "next/link";

export default function ScenarioCard({ href, icon, title, text, bgColor, textColor }) {
  return (
    <Link href={href}>
      <div
        className={`border border-neutral-200 rounded-lg w-full max-w-[20rem] p-4 h-full flex flex-col ${bgColor ? bgColor : "bg-neutral-50"} 
        transition-transform duration-200 hover:scale-105 hover:shadow-lg`}
      >
        <div className="flex align-items pb-2">
          <svg width="24" height="24" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            {icon}
          </svg>
          <h2 
            className="text-lg font-semibold ps-2"
            style={{ color: textColor || "#262626" }}
          >
            {title}
          </h2>
        </div>
        <div className="text-base flex-grow">{text}</div>
      </div>
    </Link>
  );
}
