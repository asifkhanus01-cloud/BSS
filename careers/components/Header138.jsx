"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header138() {
  return (
    <section id="relume" className="flex min-h-svh flex-col md:h-svh">
      <div className="relative flex flex-1 flex-col">
        <div className="relative flex-1">
          <img
            className="absolute inset-0 aspect-[3/2] size-full object-cover"
            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
            alt="Relume placeholder image 1"
          />
        </div>
        <div className="absolute bottom-[-15%] right-[5%] w-[30%] md:w-1/5">
          <img
            className="aspect-square size-full object-cover"
            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-portrait-dim.png"
            alt="Relume placeholder image 2"
          />
        </div>
      </div>
      <div className="px-[5%]">
        <div className="container">
          <div className="py-12 md:py-18 lg:py-20">
            <div className="auto-cols-1fr mt-[5%] grid grid-cols-1 items-start gap-5 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20 lg:gap-y-16">
              <div>
                <h1 className="text-6xl font-bold text-text-primary md:text-9xl lg:text-10xl">
                  Join our team
                </h1>
              </div>
              <div>
                <p className="text-base text-text-primary md:text-md">
                  Explore opportunities to shape the future of education. Build
                  your career with Benchmark School System, where excellence
                  meets purpose.
                </p>
                <div className="mt-6 flex gap-x-4 md:mt-8">
                  <Button title="Apply">Apply</Button>
                  <Button title="Learn" variant="secondary">
                    Learn
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
