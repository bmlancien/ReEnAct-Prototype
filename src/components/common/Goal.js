import { GlobeEuropeAfricaIcon } from '@heroicons/react/24/outline';

const Goal = () => {
  return (
    <div className="flex items-center border-2 border-sky-300 py-1 px-2 text-sky-800">
      <GlobeEuropeAfricaIcon 
        className="w-6 h-6 me-2"
      />
      <span className="text-lg">
        Ziel 2040: <b>0 Tonne CO<sub>2</sub></b>
      </span>
    </div>
  )
}

export default Goal;