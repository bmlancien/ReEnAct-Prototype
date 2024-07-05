"use client";

import { LinkIconBlue } from "../../components/common/Links";
import { ShareIcon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Header({ title, isShare }) {
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
          <p className="text-base font-medium">
            { title }
          </p>
        </div>
      </div>
    </nav>
  );
}
