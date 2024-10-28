import { InformationCircleIcon } from '@heroicons/react/24/outline';

const Goal = () => {
  return (
    <div className="flex items-center border-2 border-sky-300 py-1 px-2 text-sky-800">
      <span className="text-lg text-sky-600">
        Ziel 2040
      </span>
      <InformationCircleIcon 
        className="w-6 h-6 ms-2 text-sky-600"
      />
    </div>
  )
}

export default Goal;