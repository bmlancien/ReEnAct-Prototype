"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import steps from '../../app/questionsCustom/steps';

export default function Breadcrumb() {
  const pathname = usePathname();
  const [currentStepIndex, setCurrentStepIndex] = useState(
    steps.findIndex((step) => step.href === pathname)
  );

  useEffect(() => {
    const currentStep = steps.find((step) => step.href === pathname);
    const newIndex = steps.indexOf(currentStep);
    setCurrentStepIndex(newIndex);
  }, [pathname]);

  return (
    <nav className="flex items-center justify-center px-6 py-2 border border-b-slate-200" aria-label="Progress">
      <p className="text-sm font-medium">
        {steps.map((step, index) => (
          index === currentStepIndex ? step.name : ''
        ))}
      </p>
      <ol role="list" className="ml-8 flex items-center space-x-5">
        {steps.map((step, index) => (
          <li key={step.name}>
            {index < currentStepIndex ? (
              <Link href={step.href} legacyBehavior>
                <a className="block h-2.5 w-2.5 rounded-full bg-blue-600 hover:bg-blue-900">
                  <span className="sr-only">{step.name}</span>
                </a>
              </Link>
            ) : index === currentStepIndex ? (
              <Link href={step.href} legacyBehavior>
                <a className="relative flex items-center justify-center" aria-current="step">
                  <span className="absolute flex h-5 w-5 p-px" aria-hidden="true">
                    <span className="h-full w-full rounded-full bg-blue-200" />
                  </span>
                  <span className="relative block h-2.5 w-2.5 rounded-full bg-blue-600" aria-hidden="true" />
                  <span className="sr-only">{step.name}</span>
                </a>
              </Link>
            ) : (
              <Link href={step.href} legacyBehavior>
                <a className="block h-2.5 w-2.5 rounded-full bg-gray-200 hover:bg-gray-400">
                  <span className="sr-only">{step.name}</span>
                </a>
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
