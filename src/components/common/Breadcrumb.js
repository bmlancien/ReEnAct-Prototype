"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import steps from '../../app/questionsCustom/steps';
import { LinkIconBlue } from "../../components/common/Links";
import { ShareIcon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Breadcrumb({ isShare }) {
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
      <div className="relative w-full max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="absolute left-2 sm:left-6 lg:left-8">
          <LinkIconBlue
            href="/"
            text="Abbrechen"
          >
            <XMarkIcon className="h4 w-4"/>
          </LinkIconBlue>
        </div>
        {isShare && (
          <div className="absolute right-2 sm:right-6 lg:right-8">
            <LinkIconBlue
              href="#"
              text="Link teilen"
            >
              <ShareIcon className="h4 w-4"/>
            </LinkIconBlue>
          </div>
        )}
        <div className="flex items-center justify-center">
          <p className="text-base font-semibold">
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
        </div>
      </div>
    </nav>
  );
}
