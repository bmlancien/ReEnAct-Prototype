'use client';

import { Range, getTrackBackground } from 'react-range';  // Static import for react-range
import { InformationCircleIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';

const Slider = ({ label, min, max, step, value, onChange, unit, goal }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Client-only rendering check
  }, []);

  const clampedValue = Math.max(min, Math.min(value, max));

  if (!isClient) {
    return null;  // Prevent rendering on server
  }

  return (
    <div className="mb-8 relative">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center space-x-2">
          <label className="font-semibold text-gray-700">{label}</label>
          <InformationCircleIcon className="h-5 w-5 text-gray-500" />
        </div>
        <span className="text-gray-700">{clampedValue} {unit}</span>
      </div>

      <div className="relative w-full">
        <Range
          values={[clampedValue]}
          step={step}
          min={min}
          max={max}
          onChange={(values) => onChange(values[0])}
          renderTrack={({ props: trackProps, children }) => {
            return (
              <div
                {...trackProps}
                className="h-1 w-full bg-gray-300 rounded relative"
                style={{
                  background: getTrackBackground({
                    values: [clampedValue],
                    colors: ['#38bdf8', '#ccc'],
                    min,
                    max,
                  }),
                }}
              >
                {children}
                <div
                  className="absolute h-4 w-2 bg-gray-800 rounded"
                  style={{ left: `calc(${((goal - min) / (max - min)) * 100}% - 1px)`, top: '-6px' }}
                />
              </div>
            );
          }}
          renderThumb={({ props: thumbProps }) => (
            <div {...thumbProps} className="h-4 w-4 bg-sky-600 rounded-full shadow" />
          )}
        />
      </div>

      <div
        className="absolute text-gray-800 text-xs font-semibold"
        style={{ left: `calc(${((goal - min) / (max - min)) * 100}% - 24px)`, top: '44px' }}
      >
        Ziel: {goal} {unit}
      </div>
    </div>
  );
};

export default Slider;
