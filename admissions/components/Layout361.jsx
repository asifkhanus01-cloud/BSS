"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout361() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Requirements</p>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              What you need to know
            </h2>
            <p className="md:text-md">
              Students must meet age requirements for their desired grade level
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 md:gap-8">
          <div className="border border-border-primary">
            <div className="flex items-center justify-center">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                className="size-full object-cover"
                alt="Relume placeholder image 1"
              />
            </div>
            <div className="p-6 md:p-8 lg:p-12">
              <p className="mb-2 text-sm font-semibold">Age criteria</p>
              <h3 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                Age criteria and eligibility standards
              </h3>
              <p>
                Primary admission requires students to be five years old by
                July. Middle section accepts students aged eleven and above.
                Secondary enrollment is for students aged fourteen and older. We
                assess readiness through entrance examinations and interviews to
                ensure proper placement.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <Button title="Learn more" variant="secondary">
                  Learn more
                </Button>
                <Button
                  title="Expand"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Expand
                </Button>
              </div>
            </div>
          </div>
          <div className="border border-border-primary">
            <div className="flex items-center justify-center">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                className="size-full object-cover"
                alt="Relume placeholder image 1"
              />
            </div>
            <div className="p-6 md:p-8 lg:p-12">
              <p className="mb-2 text-sm font-semibold">Documents</p>
              <h3 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                Required documents for enrollment
              </h3>
              <p>
                Gather your birth certificate, two recent passport-sized
                photographs, previous academic report cards, and immunization
                records. Parents must provide valid identification and proof of
                residence. Transfer students need character certificates from
                their previous institution. All documents should be original or
                certified copies.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <Button title="Prepare now" variant="secondary">
                  Prepare now
                </Button>
                <Button
                  title="Next"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
