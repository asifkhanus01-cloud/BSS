"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Event7() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <h4 className="font-semibold">Schedule</h4>
            <h1 className="mt-3 text-5xl font-bold md:mt-4 md:text-7xl lg:text-8xl">
              Calendar
            </h1>
            <p className="mt-5 text-base md:mt-6 md:text-md">
              Navigate through our academic year month by month.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
          <div className="flex flex-col items-start">
            <a
              href="#"
              className="relative mb-5 block aspect-[3/2] w-full md:mb-6"
            >
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
                className="absolute size-full object-cover"
              />
              <div className="absolute right-4 top-4 flex min-w-28 flex-col items-center bg-background-primary px-1 py-3 text-sm">
                <span>Mon</span>
                <span className="text-2xl font-bold md:text-3xl lg:text-4xl">
                  05
                </span>
                <span>Feb 2024</span>
              </div>
            </a>
            <span className="mb-3 bg-background-secondary px-2 py-1 text-sm font-semibold md:mb-4">
              Academics
            </span>
            <a href="#">
              <h2 className="text-xl font-bold md:text-2xl">
                Winter break ends
              </h2>
            </a>
            <p className="mb-2">Main campus</p>
            <p>Classes resume with renewed energy and focus.</p>
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
          <div className="flex flex-col items-start">
            <a
              href="#"
              className="relative mb-5 block aspect-[3/2] w-full md:mb-6"
            >
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
                className="absolute size-full object-cover"
              />
              <div className="absolute right-4 top-4 flex min-w-28 flex-col items-center bg-background-primary px-1 py-3 text-sm">
                <span>Thu</span>
                <span className="text-2xl font-bold md:text-3xl lg:text-4xl">
                  15
                </span>
                <span>Feb 2024</span>
              </div>
            </a>
            <span className="mb-3 bg-background-secondary px-2 py-1 text-sm font-semibold md:mb-4">
              Activities
            </span>
            <a href="#">
              <h2 className="text-xl font-bold md:text-2xl">
                Science exhibition
              </h2>
            </a>
            <p className="mb-2">Gymnasium</p>
            <p>Students showcase research projects and experimental work.</p>
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
          <div className="flex flex-col items-start">
            <a
              href="#"
              className="relative mb-5 block aspect-[3/2] w-full md:mb-6"
            >
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
                className="absolute size-full object-cover"
              />
              <div className="absolute right-4 top-4 flex min-w-28 flex-col items-center bg-background-primary px-1 py-3 text-sm">
                <span>Fri</span>
                <span className="text-2xl font-bold md:text-3xl lg:text-4xl">
                  24
                </span>
                <span>Feb 2024</span>
              </div>
            </a>
            <span className="mb-3 bg-background-secondary px-2 py-1 text-sm font-semibold md:mb-4">
              Sports
            </span>
            <a href="#">
              <h2 className="text-xl font-bold md:text-2xl">
                Inter-house cricket
              </h2>
            </a>
            <p className="mb-2">Athletic field</p>
            <p>Houses compete in spirited matches throughout the day.</p>
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
        <div className="mt-12 flex justify-center md:mt-18 lg:mt-20">
          <Button variant="secondary" size="primary" title="View all">
            View all
          </Button>
        </div>
      </div>
    </section>
  );
}
