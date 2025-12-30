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
          <p className="mb-3 font-semibold md:mb-4">Faculty</p>
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Our educators
          </h2>
          <p className="md:text-md">
            Qualified subject specialists dedicated to student success
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
                Dr. Amir Khan
              </h5>
              <h6 className="md:text-md text-school-red">Mathematics head</h6>
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
                Mrs. Fatima Ahmed
              </h5>
              <h6 className="md:text-md text-school-red">English coordinator</h6>
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
                Mr. Hassan Malik
              </h5>
              <h6 className="md:text-md text-school-red">Science department</h6>
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
                Miss Saira Iqbal
              </h5>
              <h6 className="md:text-md text-school-red">Primary educator</h6>
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
              <h6 className="md:text-md text-school-red">Urdu and Islamic studies</h6>
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
                Mrs. Hina Rashid
              </h5>
              <h6 className="md:text-md text-school-red">Social sciences</h6>
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
                Mr. Kamran Ali
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
                Miss Zainab Farooq
              </h5>
              <h6 className="md:text-md text-school-red">Montessori specialist</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
