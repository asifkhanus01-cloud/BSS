"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function EventHeader4() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="w-full">
            <p className="mb-3 font-semibold md:mb-4">Coming</p>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Highlights
            </h1>
            <p className="md:text-md">
              Mark your calendar for these pivotal moments in our school year.
            </p>
          </div>
        </div>
        <div className="mb-16 grid auto-cols-fr auto-rows-auto grid-cols-1 items-start gap-8 lg:grid-cols-2">
          <div className="border border-border-primary">
            <a href="#" className="relative block w-full max-w-full">
              <div className="w-full overflow-hidden">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Relume placeholder image 1"
                  className="aspect-[3/2] size-full object-cover"
                />
              </div>
              <div className="absolute right-4 top-4 flex min-w-28 flex-col items-center bg-background-primary px-1 py-3 text-sm">
                <span>Wed</span>
                <span className="text-2xl font-bold md:text-3xl lg:text-4xl">
                  14
                </span>
                <span>Feb 2024</span>
              </div>
            </a>
            <div className="flex flex-col items-start p-6">
              <p className="mb-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                Academic
              </p>
              <a href="#">
                <h2 className="text-xl font-bold md:text-2xl">
                  Mid-term examinations
                </h2>
              </a>
              <p className="mb-2">Main campus</p>
              <p>
                Students sit for comprehensive assessments across all subjects.
              </p>
              <Button
                title="View event"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                className="mt-5 md:mt-6"
              >
                View event
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col items-center border border-border-primary px-4 py-6 md:flex-row md:py-4">
              <div className="flex min-w-24 shrink-0 flex-col items-center bg-background-primary p-0 px-1 py-3 text-base md:px-1 md:py-3">
                <span>Fri</span>
                <span className="text-2xl font-bold md:text-3xl lg:text-4xl">
                  23
                </span>
                <span>Feb 2024</span>
              </div>
              <div className="mt-6 flex flex-col items-start border-t border-border-primary pt-6 md:ml-6 md:mt-0 md:border-l md:border-t-0 md:pl-6 md:pt-0">
                <div className="flex flex-wrap items-center gap-4">
                  <a href="#">
                    <h2 className="text-xl font-bold md:text-2xl">
                      Sports day
                    </h2>
                  </a>
                  <p className="bg-background-secondary px-2 py-1 text-sm font-semibold">
                    Full house
                  </p>
                </div>
                <p className="mb-2 text-sm">Athletic field</p>
                <p>
                  Annual inter-house competition showcasing talent and teamwork.
                </p>
                <Button
                  title="View event"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                  className="mt-5 md:mt-6"
                >
                  View event
                </Button>
              </div>
            </div>
            <div className="flex flex-col items-center border border-border-primary px-4 py-6 md:flex-row md:py-4">
              <div className="flex min-w-24 shrink-0 flex-col items-center bg-background-primary p-0 px-1 py-3 text-base md:px-1 md:py-3">
                <span>Sat</span>
                <span className="text-2xl font-bold md:text-3xl lg:text-4xl">
                  02
                </span>
                <span>Mar 2024</span>
              </div>
              <div className="mt-6 flex flex-col items-start border-t border-border-primary pt-6 md:ml-6 md:mt-0 md:border-l md:border-t-0 md:pl-6 md:pt-0">
                <a href="#">
                  <h2 className="text-xl font-bold md:text-2xl">
                    Annual concert
                  </h2>
                </a>
                <p className="mb-2 text-sm">Auditorium</p>
                <p>
                  Students perform music and drama productions before parents.
                </p>
                <Button
                  title="View event"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                  className="mt-5 md:mt-6"
                >
                  View event
                </Button>
              </div>
            </div>
            <div className="flex flex-col items-center border border-border-primary px-4 py-6 md:flex-row md:py-4">
              <div className="flex min-w-24 shrink-0 flex-col items-center bg-background-primary p-0 px-1 py-3 text-base md:px-1 md:py-3">
                <span>Sun</span>
                <span className="text-2xl font-bold md:text-3xl lg:text-4xl">
                  10
                </span>
                <span>Mar 2024</span>
              </div>
              <div className="mt-6 flex flex-col items-start border-t border-border-primary pt-6 md:ml-6 md:mt-0 md:border-l md:border-t-0 md:pl-6 md:pt-0">
                <a href="#">
                  <h2 className="text-xl font-bold md:text-2xl">
                    Founder's day
                  </h2>
                </a>
                <p className="mb-2 text-sm">Main hall</p>
                <p>Celebration of our institution's legacy and values.</p>
                <Button
                  title="View event"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                  className="mt-5 md:mt-6"
                >
                  View event
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
