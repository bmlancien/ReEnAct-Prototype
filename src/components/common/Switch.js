'use client'

import { useState, useEffect } from 'react'
import { Switch } from '@headlessui/react'

export default function CustomSwitch({ container }) {
  const [enabled, setEnabled] = useState(true);
  const sliderContainer = document.getElementById(container);
  
  useEffect(() => { // Only run this effect after the component has mounted
    const sliderContainer = document.getElementById(container);
    if (sliderContainer) {
      if (enabled) {
        sliderContainer.style.opacity = '1';
        sliderContainer.style.pointerEvents = 'auto';
      } else {
        sliderContainer.style.opacity = '0.4';
        sliderContainer.style.pointerEvents = 'none';
      }
    }
  }, [enabled, container]); // dependency array -> when to run effect

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className="group relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2 data-[checked]:bg-sky-600"
    >
      <span className="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        className="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-5"
      />
    </Switch>
  )
}
