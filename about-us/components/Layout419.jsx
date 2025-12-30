"use client";

import { Button } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

export function Layout419() {
  return (
    <section id="relume">
      {/* Waleed Khan Khalil Section (Text Left, Image Right) */}
      <DirectorSection
        tagline="Director"
        heading="Waleed Khan Khalil"
        description="At Benchmark, we believe education is not merely the transfer of knowledge but the cultivation of character. Our students leave these halls not just with strong grades, but with the discipline, integrity, and vision required to lead in an uncertain world. We measure our success not only by exam results but by the leaders our graduates become."
        image={{
          src: "/images/director-waleed-photo-blue-bg.jpeg",
          alt: "Waleed Khan Khalil",
        }}
        isImageLeft={false}
        profileLink="/waleed-khan-khalil"
      />

      {/* Noman Khan Section (Image Left, Text Right) */}
      <DirectorSection
        tagline="Director"
        heading="Noman Khan"
        description="At Benchmark, we believe education is not merely the transfer of knowledge but the cultivation of character. Our students leave these halls not just with strong grades, but with the discipline, integrity, and vision required to lead in an uncertain world. We measure our success not only by exam results but by the leaders our graduates become."
        image={{
          src: "/images/director-numan-annual-day.JPG",
          alt: "Noman Khan",
        }}
        isImageLeft={true}
        profileLink="/noman-khan"
      />
    </section>
  );
}

function DirectorSection({ tagline, heading, description, image, isImageLeft, profileLink }) {
  return (
    <div className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div className={clsx(isImageLeft && "md:order-2")}>
            <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {heading}
            </h2>
            <p className="md:text-md">{description}</p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Link to={profileLink}>
                <Button variant="secondary">Read more</Button>
              </Link>
              <Link to="/admissions">
                <Button variant="link" size="link" iconRight={<RxChevronRight />}>
                  Admissions
                </Button>
              </Link>
            </div>
          </div>
          <div className={clsx(isImageLeft && "md:order-1")}>
            <img
              src={image.src}
              className="w-full object-cover"
              alt={image.alt}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
