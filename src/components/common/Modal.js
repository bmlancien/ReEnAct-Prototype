'use client'

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'

export default function Modal() {
  const [open, setOpen] = useState(true)

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-3xl sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div>
              <div className="mt-3 text-center sm:mt-5">
                <DialogTitle as="h3" className="text-4xl font-semibold leading-6 text-slate-800 pb-8">
                  StempTool Peenetal/Loitz
                </DialogTitle>
                <div className="mt-2 pb-8">
                  <p className="text-xl text-gray-500">
                    Finden Sie heraus, wie die Region Peenetal/Loitz bis 2040 eine CO2-Emission von 0% erreichen kann.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-between pb-8">
              <div>
                <svg
                  className="h-[120px] w-[120px] border border-gray-300 bg-white text-gray-300"
                  preserveAspectRatio="none"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 200 200"
                  aria-hidden="true"
                >
                  <path vectorEffect="non-scaling-stroke" strokeWidth={1} d="M0 0l200 200M0 200L200 0" />
                </svg>
              </div>
              <div>
                <svg
                  className="h-[120px] w-[120px] border border-gray-300 bg-white text-gray-300"
                  preserveAspectRatio="none"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 200 200"
                  aria-hidden="true"
                >
                  <path vectorEffect="non-scaling-stroke" strokeWidth={1} d="M0 0l200 200M0 200L200 0" />
                </svg>
              </div>
              <div>
                <svg
                  className="h-[120px] w-[120px] border border-gray-300 bg-white text-gray-300"
                  preserveAspectRatio="none"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 200 200"
                  aria-hidden="true"
                >
                  <path vectorEffect="non-scaling-stroke" strokeWidth={1} d="M0 0l200 200M0 200L200 0" />
                </svg>
              </div>
              <div>
                <svg
                  className="h-[120px] w-[120px] border border-gray-300 bg-white text-gray-300"
                  preserveAspectRatio="none"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 200 200"
                  aria-hidden="true"
                >
                  <path vectorEffect="non-scaling-stroke" strokeWidth={1} d="M0 0l200 200M0 200L200 0" />
                </svg>
              </div>
            </div>
            <div className="flex justify-between pb-8">
              <div>
                <svg
                  className="h-[120px] w-[120px] border border-gray-300 bg-white text-gray-300"
                  preserveAspectRatio="none"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 200 200"
                  aria-hidden="true"
                >
                  <path vectorEffect="non-scaling-stroke" strokeWidth={1} d="M0 0l200 200M0 200L200 0" />
                </svg>
              </div>
              <div>
                <svg
                  className="h-[120px] w-[120px] border border-gray-300 bg-white text-gray-300"
                  preserveAspectRatio="none"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 200 200"
                  aria-hidden="true"
                >
                  <path vectorEffect="non-scaling-stroke" strokeWidth={1} d="M0 0l200 200M0 200L200 0" />
                </svg>
              </div>
              <div>
                <svg
                  className="h-[120px] w-[120px] border border-gray-300 bg-white text-gray-300"
                  preserveAspectRatio="none"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 200 200"
                  aria-hidden="true"
                >
                  <path vectorEffect="non-scaling-stroke" strokeWidth={1} d="M0 0l200 200M0 200L200 0" />
                </svg>
              </div>
              <div>
                <svg
                  className="h-[120px] w-[120px] border border-gray-300 bg-white text-gray-300"
                  preserveAspectRatio="none"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 200 200"
                  aria-hidden="true"
                >
                  <path vectorEffect="non-scaling-stroke" strokeWidth={1} d="M0 0l200 200M0 200L200 0" />
                </svg>
              </div>
            </div>
            <div className="mt-5 sm:mt-6">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex w-full justify-center rounded-md bg-emerald-500 px-3 py-2 font-semibold shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
              >
                Schließen
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
