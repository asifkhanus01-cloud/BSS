"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout394() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          {/* <p className="mb-3 font-semibold md:mb-4">Pathways</p> */}
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            A Complete Journey of Excellence
          </h1>
          <p className="md:text-md">
            From their first steps in Montessori to their final Board Exams,
            we guide your child through every stage of growth.
          </p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          <div className="flex flex-col border border-border-primary">
            <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
              <div>
                <p className="mb-2 font-semibold">Early Years</p>
                <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  Preschool & Montessori
                </h2>
                <p>
                  Activity-based learning that builds confidence. We focus on curiosity and fun, not heavy school bags."
                </p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Explore Montessori"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Explore Montessori
                </Button>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
              />
            </div>
          </div>
          <div className="flex flex-col border border-border-primary">
            <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
              <div>
                <p className="mb-2 font-semibold">
                  Grades 1 to 5
                </p>
                <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  Primary & Character Building
                </h2>
                <p>No ratta (rote learning). We build strong concepts in Math and Science while ensuring good moral character (Tarbiyat).</p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="View Syllabus"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  View Syllabus
                </Button>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
              />
            </div>
          </div>
          <div className="flex flex-col border border-border-primary">
            <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
              <div>
                <p className="mb-2 font-semibold">
                  Grades 9 & 10 (BISE Peshawar)
                </p>
                <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  Secondary & Matriculation
                </h2>
                <p>Serious preparation for Board exams. We focus on science practicals and high marks
                  to secure their future in Medical or Engineering.</p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="See Board Results"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  See Board Results
                </Button>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
