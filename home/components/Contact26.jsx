"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Contact26() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 mx-auto flex max-w-lg flex-col justify-center text-center md:mb-18 lg:mb-20">
          {/* <p className="mb-3 font-semibold md:mb-4">Campuses</p> */}
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Separate Campuses
          </h2>
          <p className="md:text-md">
            Promoting focused learning environments for both genders.
          </p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 items-center gap-x-12 gap-y-12 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col items-center justify-start text-center">
            <div className="mb-6 aspect-[3/2] md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                className="h-full w-full object-cover"
                alt="Relume placeholder image"
              />
            </div>
            <h3 className="mb-3 text-2xl font-bold leading-[1.4] md:text-3xl lg:mb-4 lg:text-4xl">
              Boys Campus
            </h3>
            <p className="text-center">Shinwari Town Near MMC Hospital , Peshawar, Pakistan</p>
            <div className="mt-5 md:mt-6">
              <Button
                title="View map"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                View map
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start text-center">
            <div className="mb-6 aspect-[3/2] md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                className="h-full w-full object-cover"
                alt="Relume placeholder image"
              />
            </div>
            <h3 className="mb-3 text-2xl font-bold leading-[1.4] md:text-3xl lg:mb-4 lg:text-4xl">
              Girls Campus
            </h3>
            <p className="text-center">Shinwari Town Near MMC Hospital , Peshawar, Pakistan</p>
            <div className="mt-5 md:mt-6">
              <Button
                title="View map"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                View map
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
