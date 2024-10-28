import { InformationCircleIcon } from '@heroicons/react/24/outline';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"


const Goal = () => {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <div className="flex items-center border-2 border-sky-300 py-1 px-2 text-sky-800 cursor-pointer">
        <span className="text-lg text-sky-600">
          Ziel 2040
        </span>
        <InformationCircleIcon 
          className="w-6 h-6 ms-2 text-sky-600"
        />
      </div>
      </HoverCardTrigger>
      <HoverCardContent>
        Die Ziele für 2040 sind:
        <ul className="list-disc pt-2 ps-4">
          <li>CO<sub>2</sub>-Neutralität</li>
          <li>EE-Ziele für Deutschland</li>
        </ul>
      </HoverCardContent>
    </HoverCard>
  )
}

export default Goal;