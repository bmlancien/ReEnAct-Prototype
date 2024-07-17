import { Range, getTrackBackground } from 'react-range';
import { InformationCircleIcon } from '@heroicons/react/24/outline';

const Slider = ({ label, min, max, step, value, onChange, unit }) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center space-x-2">
          <label className="font-semibold text-gray-700">{label}</label>
          <InformationCircleIcon className="h-5 w-5 text-gray-500" />
        </div>
        <span className="text-gray-700">{value} {unit}</span>
      </div>
      <Range
        values={[value]}
        step={step}
        min={min}
        max={max}
        onChange={(values) => onChange(values[0])}
        renderTrack={({ props: trackProps, children }) => {
          const { key, ...restTrackProps } = trackProps;
          return (
            <div
              {...restTrackProps}
              className="h-1 w-full bg-gray-300 rounded"
              style={{
                background: getTrackBackground({
                  values: [value],
                  colors: ['#38bdf8', '#ccc'],
                  min,
                  max,
                }),
              }}
              key={key}
            >
              {children}
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
  );
};

export default Slider;