"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { BiLogoDribbble, BiLogoLinkedinSquare } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

export function Team6() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          {/*<p className="mb-3 font-semibold md:mb-4">Faculty</p>*/}
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Visionary Leadership
          </h2>
          <p className="md:text-md">
            The experienced hands guiding your child’s future.
          </p>
        </div>
        <div className="grid grid-cols-1 items-start justify-center gap-x-8 gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          <div className="flex flex-col text-center">
            <div className="relative mb-5 w-full overflow-hidden rounded-lg pt-[100%] md:mb-6">
              <img
                src="images/Mr-Shahid-Khan.JPG"
                alt="Principal Mr Shahid Khan"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-md font-semibold md:text-lg">
                Mr. Shahid Khan
              </h5>
              <h6 className="md:text-md text-school-red">Principal</h6>
            </div>
            <p>
              The pillar of our daily operations. Dedicated to ensuring a safe,
              structured, and nurturing environment for every student.
            </p>
          </div>
          <div className="flex flex-col text-center">
            <div className="relative mb-5 w-full overflow-hidden rounded-lg pt-[100%] md:mb-6">
              <img
                src="images/numan-headshot.JPG"
                alt="Managing Director Mr Noman Khan"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-md font-semibold md:text-lg">
                Mr. Noman Khan
              </h5>
              <h6 className="md:text-md text-school-red">Managing Director</h6>
            </div>
            <p>
              A visionary educator with over 20 years of experience in shaping the academic landscape of Peshawar.
              Believes in strict discipline and high academic standards.
            </p>
          </div>
          <div className="flex flex-col text-center">
            <div className="relative mb-5 w-full overflow-hidden rounded-lg pt-[100%] md:mb-6">
              <img
                src="images/Mr-waleed-khalil.png"
                alt="Managing Director Waleed Khan Khalil"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-md font-semibold md:text-lg">Waleed Khan Khalil</h5>
              <h6 className="md:text-md text-school-red">Managing Director</h6>
            </div>
            <p>
              Focused on curriculum innovation and teacher training to
              ensure our syllabus meets international standards
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
