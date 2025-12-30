"use client";

import React from "react";
import { LuMapPin } from "react-icons/lu";
import { MdAccessTime } from "react-icons/md";

export function Career13() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Careers</p>
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Open positions
          </h2>
          <p className="md:text-md">
            Join our team and help shape the future of education in Peshawar.
          </p>
        </div>
        <div className="flex flex-col gap-6 md:gap-8">
          <div className="border border-border-primary p-6 md:p-8">
            <div className="mb-3 flex justify-between gap-4 md:mb-4">
              <a href="#">
                <h3 className="text-xl font-bold md:text-2xl">
                  Mathematics teacher
                </h3>
              </a>
              <p className="self-start bg-background-secondary px-2 py-1 text-sm font-semibold">
                Academic
              </p>
            </div>
            <p className="mb-5 md:mb-6">
              Seeking an experienced educator to lead secondary mathematics
              curriculum.
            </p>
            <div className="flex flex-wrap gap-y-3">
              <div className="mr-6 flex items-center">
                <div className="mr-3 flex-none">
                  <LuMapPin className="flex size-6 flex-col items-center justify-center" />
                </div>
                <span className="md:text-md">Peshawar</span>
              </div>
              <div className="mr-6 flex items-center">
                <div className="mr-3 flex-none">
                  <MdAccessTime className="flex size-6 flex-col items-center justify-center" />
                </div>
                <span className="md:text-md">Full-time</span>
              </div>
            </div>
            <div className="mt-6 md:mt-8">
              <a
                className="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary text-text-primary bg-background-primary px-5 py-2"
                href="#"
              >
                Apply now
              </a>
            </div>
          </div>
          <div className="border border-border-primary p-6 md:p-8">
            <div className="mb-3 flex justify-between gap-4 md:mb-4">
              <a href="#">
                <h3 className="text-xl font-bold md:text-2xl">
                  Sports coordinator
                </h3>
              </a>
              <p className="self-start bg-background-secondary px-2 py-1 text-sm font-semibold">
                Athletics
              </p>
            </div>
            <p className="mb-5 md:mb-6">
              Develop and manage comprehensive sports programs for all student
              levels.
            </p>
            <div className="flex flex-wrap gap-y-3">
              <div className="mr-6 flex items-center">
                <div className="mr-3 flex-none">
                  <LuMapPin className="flex size-6 flex-col items-center justify-center" />
                </div>
                <span className="md:text-md">Peshawar</span>
              </div>
              <div className="mr-6 flex items-center">
                <div className="mr-3 flex-none">
                  <MdAccessTime className="flex size-6 flex-col items-center justify-center" />
                </div>
                <span className="md:text-md">Full-time</span>
              </div>
            </div>
            <div className="mt-6 md:mt-8">
              <a
                className="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary text-text-primary bg-background-primary px-5 py-2"
                href="#"
              >
                Apply now
              </a>
            </div>
          </div>
          <div className="border border-border-primary p-6 md:p-8">
            <div className="mb-3 flex justify-between gap-4 md:mb-4">
              <a href="#">
                <h3 className="text-xl font-bold md:text-2xl">
                  Administrative assistant
                </h3>
              </a>
              <p className="self-start bg-background-secondary px-2 py-1 text-sm font-semibold">
                Administration
              </p>
            </div>
            <p className="mb-5 md:mb-6">
              Support school operations with organizational and clerical
              expertise.
            </p>
            <div className="flex flex-wrap gap-y-3">
              <div className="mr-6 flex items-center">
                <div className="mr-3 flex-none">
                  <LuMapPin className="flex size-6 flex-col items-center justify-center" />
                </div>
                <span className="md:text-md">Peshawar</span>
              </div>
              <div className="mr-6 flex items-center">
                <div className="mr-3 flex-none">
                  <MdAccessTime className="flex size-6 flex-col items-center justify-center" />
                </div>
                <span className="md:text-md">Full-time</span>
              </div>
            </div>
            <div className="mt-6 md:mt-8">
              <a
                className="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary text-text-primary bg-background-primary px-5 py-2"
                href="#"
              >
                Apply now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
