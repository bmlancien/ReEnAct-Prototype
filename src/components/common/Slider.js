'use client';

import { Range, getTrackBackground } from 'react-range';
import { InformationCircleIcon } from '@heroicons/react/24/outline';

const Slider = ({ label, min, max, step, value, onChange, unit, goal }) => {
  // Clamp the value to ensure it's between min and max
  const clampedValue = Math.max(min, Math.min(value, max));

  return (
    <div className="mb-8 relative">
      {/* Slider label and current value */}
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center space-x-2">
          <label className="font-semibold text-gray-700">{label}</label>
          <InformationCircleIcon className="h-5 w-5 text-gray-500" />
        </div>
        <span className="text-gray-700">{clampedValue} {unit}</span>
      </div>

      {/* Range slider */}
      <div className="relative w-full">
        <Range
          values={[clampedValue]} // Use the clamped value to avoid min and max value errors
          step={step}
          min={min}
          max={max}
          onChange={(values) => onChange(values[0])}
          renderTrack={({ props: trackProps, children }) => {
            const { key, ...restTrackProps } = trackProps;
            return (
              <div
                {...restTrackProps}
                className="h-1 w-full bg-gray-300 rounded relative"
                style={{
                  background: getTrackBackground({
                    values: [clampedValue],
                    colors: ['#38bdf8', '#ccc'],
                    min,
                    max,
                  }),
                }}
                key={key}
              >
                {children}
                {/* Rectangular marker */}
                <div
                  className="absolute h-4 w-2 bg-gray-800 rounded"
                  style={{ left: `calc(${((goal - min) / (max - min)) * 100}% - 1px)`, top: '-6px' }}
                />
              </div>
            );
          }}
          renderThumb={({ props: thumbProps }) => {
            const { key, ...restThumbProps } = thumbProps;
            return (
              <div
                {...restThumbProps}
                className="h-4 w-4 bg-sky-600 rounded-full shadow"
                key={key}
              />
            );
          }}
        />
      </div>

      {/* Goal marker */}
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