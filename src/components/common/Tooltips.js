import { useState } from 'react';
import { InformationCircleIcon } from '@heroicons/react/24/outline';

const Tooltip = ({ message }) => {
  return (
    <div className="absolute bottom-full mb-2 w-max bg-gray-800 text-white text-xs rounded py-1 px-2 shadow-lg">
      {message}
    </div>
  );
};

const InfoWithTooltip = ({ message }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative inline-block">
      <InformationCircleIcon
        className="w-6 h-6 text-neutral-600 cursor-pointer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      />
      {showTooltip && <Tooltip message={message} />}
    </div>
  );
};

export default InfoWithTooltip;