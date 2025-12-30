"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header129() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
              Join our community of learners
            </h1>
            <p className="md:text-md">
              Begin your journey with Benchmark School System for the 2024-2025
              academic year. We welcome ambitious students ready to excel
              academically and grow as leaders.
            </p>
            <div className="mt-6 flex gap-x-4 md:mt-8">
              <Button title="Apply">Apply</Button>
              <Button title="Prospectus" variant="secondary">
                Prospectus
              </Button>
            </div>
          </div>
          <div className="relative flex w-full">
            <div className="absolute bottom-[10%] left-0 w-[35%]">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-dim.png"
                className="aspect-square size-full object-cover"
                alt="Relume placeholder image 1"
              />
            </div>
            <div className="mx-[10%] w-full">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                className="aspect-square size-full object-cover"
                alt="Relume placeholder image 2"
              />
            </div>
            <div className="absolute right-0 top-[10%] w-2/5">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape-dim.png"
                className="aspect-[3/2] size-full object-cover"
                alt="Relume placeholder image 3"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
