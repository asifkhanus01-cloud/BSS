"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { BiLogoDribbble, BiLogoLinkedinSquare } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

export function Team2() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          {/* <p className="mb-3 font-semibold md:mb-4">Faculty</p>*/}
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Our faculty
          </h2>
          <p className="md:text-md">
            Dedicated professionals shaping tomorrow's leaders
          </p>
        </div>
        <div className="grid grid-cols-1 items-start justify-center gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-4">
          <div className="flex flex-col text-center">
            <div className="relative mb-5 w-full overflow-hidden rounded-lg pt-[100%] md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-md font-semibold md:text-lg">
                Shahid Khan
              </h5>
              <h6 className="md:text-md text-school-red">Principal</h6>
            </div>
          </div>
          <div className="flex flex-col text-center">
            <div className="relative mb-5 w-full overflow-hidden rounded-lg pt-[100%] md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-md font-semibold md:text-lg">
                Mr. Ahmed Hassan
              </h5>
              <h6 className="md:text-md text-school-red">Vice Principal</h6>
            </div>
          </div>
          <div className="flex flex-col text-center">
            <div className="relative mb-5 w-full overflow-hidden rounded-lg pt-[100%] md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-md font-semibold md:text-lg">
                Mrs. Saira Malik
              </h5>
              <h6 className="md:text-md text-school-red">English department head</h6>
            </div>
          </div>
          <div className="flex flex-col text-center">
            <div className="relative mb-5 w-full overflow-hidden rounded-lg pt-[100%] md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-md font-semibold md:text-lg">
                Mr. Tariq Hussain
              </h5>
              <h6 className="md:text-md text-school-red">Science coordinator</h6>
            </div>
          </div>
          <div className="flex flex-col text-center">
            <div className="relative mb-5 w-full overflow-hidden rounded-lg pt-[100%] md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-md font-semibold md:text-lg">
                Miss Hira Nawaz
              </h5>
              <h6 className="md:text-md text-school-red">Urdu language specialist</h6>
            </div>
          </div>
          <div className="flex flex-col text-center">
            <div className="relative mb-5 w-full overflow-hidden rounded-lg pt-[100%] md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-md font-semibold md:text-lg">
                Mr. Rashid Ali
              </h5>
              <h6 className="md:text-md text-school-red">Sports director</h6>
            </div>
          </div>
          <div className="flex flex-col text-center">
            <div className="relative mb-5 w-full overflow-hidden rounded-lg pt-[100%] md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-md font-semibold md:text-lg">
                Mrs. Nadia Iqbal
              </h5>
              <h6 className="md:text-md text-school-red">Guidance counselor</h6>
            </div>
          </div>
          <div className="flex flex-col text-center">
            <div className="relative mb-5 w-full overflow-hidden rounded-lg pt-[100%] md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-md font-semibold md:text-lg">
                Mr. Karim Siddiqui
              </h5>
              <h6 className="md:text-md text-school-red">History teacher</h6>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-14 w-full max-w-md text-center md:mt-20 lg:mt-24">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Join our team
          </h4>
          <p className="md:text-md">
            We are always seeking talented educators who share our vision
          </p>
          <div className="mt-6 flex items-center justify-center gap-x-4 text-center md:mt-8">
            <Button variant="secondary">Explore</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
