"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout524() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            {/*<p className="mb-3 font-semibold md:mb-4">Life</p>*/}
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              What makes Benchmark different
            </h2>
            <p className="md:text-md">
              We believe in building the whole person, not just test scores.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
          <div className="relative flex flex-col justify-center p-6 md:p-8 lg:p-12">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-black/50" />
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                className="size-full object-cover"
                alt="Relume placeholder image"
              />
            </div>
            <div className="relative z-10">
              <p className="mb-2 inline-block text-sm font-semibold text-text-alternative">
                Inspections
              </p>
              <h3 className="mb-5 text-4xl font-bold leading-[1.2] text-text-alternative md:mb-6 md:text-5xl lg:text-6xl">
                Rigorous Monthly Assessments
              </h3>
              <p className="text-text-alternative">
                We don't wait for finals to check progress. Our monthly evaluation system ensures no student falls behind.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <Button variant="secondary-alt">Learn</Button>
                <Button
                  iconRight={<RxChevronRight />}
                  variant="link-alt"
                  size="link"
                >
                  Read
                </Button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="relative flex flex-col p-6 md:p-8 lg:p-6">
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/50" />
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  className="size-full object-cover"
                  alt="Relume placeholder image"
                />
              </div>
              <div className="relative z-10 flex flex-1 flex-col justify-between">
                <div className="mb-3 md:mb-4">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon-white.svg"
                    className="size-12"
                    alt="Relume logo"
                  />
                </div>
                <h3 className="mb-2 text-xl font-bold text-text-alternative md:text-2xl">
                  Student Voices Magazine
                </h3>
                <p className="text-text-alternative">
                  Confidence comes from expression. Our student-run magazine gives
                  young writers a platform to share their ideas.
                </p>
                <div className="mt-5 flex items-center md:mt-6">
                  <Button
                    iconRight={<RxChevronRight />}
                    variant="link-alt"
                    size="link"
                  >
                    Explore
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative flex flex-col p-6 md:p-8 lg:p-6">
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/50" />
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  className="size-full object-cover"
                  alt="Relume placeholder image"
                />
              </div>
              <div className="relative z-10 flex flex-1 flex-col justify-between">
                <div className="mb-3 md:mb-4">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon-white.svg"
                    className="size-12"
                    alt="Relume logo"
                  />
                </div>
                <h3 className="mb-2 text-xl font-bold text-text-alternative md:text-2xl">
                  Champions on the Field
                </h3>
                <p className="text-text-alternative">
                  Physical fitness is key to mental sharpness. We focus on
                  sportsmanship, teamwork, and competitive athletics.
                </p>
                <div className="mt-5 flex items-center md:mt-6">
                  <Button
                    iconRight={<RxChevronRight />}
                    variant="link-alt"
                    size="link"
                  >
                    Explore
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative flex flex-col p-6 md:p-8 lg:p-6">
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/50" />
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  className="size-full object-cover"
                  alt="Relume placeholder image"
                />
              </div>
              <div className="relative z-10 flex flex-1 flex-col justify-between">
                <div className="mb-3 md:mb-4">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon-white.svg"
                    className="size-12"
                    alt="Relume logo"
                  />
                </div>
                <h3 className="mb-2 text-xl font-bold text-text-alternative md:text-2xl">
                  Tarbiyat & Islamic Values
                </h3>
                <p className="text-text-alternative">
                  We integrate Nazra Quran and ethical grooming to build strong moral character.
                </p>
                <div className="mt-5 flex items-center md:mt-6">
                  <Button
                    iconRight={<RxChevronRight />}
                    variant="link-alt"
                    size="link"
                  >
                    Read
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative flex flex-col p-6 md:p-8 lg:p-6">
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/50" />
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  className="size-full object-cover"
                  alt="Relume placeholder image"
                />
              </div>
              <div className="relative z-10 flex flex-1 flex-col justify-between">
                <div className="mb-3 md:mb-4">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon-white.svg"
                    className="size-12"
                    alt="Relume logo"
                  />
                </div>
                <h3 className="mb-2 text-xl font-bold text-text-alternative md:text-2xl">
                  Innovation & STEM
                </h3>
                <p className="text-text-alternative">
                  Our robotics club and modern labs teach coding and essential future skills.
                </p>
                <div className="mt-5 flex items-center md:mt-6">
                  <Button
                    iconRight={<RxChevronRight />}
                    variant="link-alt"
                    size="link"
                  >
                    Discover
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
