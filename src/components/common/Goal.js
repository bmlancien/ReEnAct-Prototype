import { GlobeEuropeAfricaIcon } from '@heroicons/react/24/outline';

const Goal = () => {
  return (
    <div className="flex items-center bg-slate-100 py-1 px-2">
      <GlobeEuropeAfricaIcon 
        className="w-4 h-4 me-2"
      />
      <span>
        Ziel 2040: 0 Tonne CO<sub>2</sub>
      </span>
    </div>
  )
}

export default Goal;