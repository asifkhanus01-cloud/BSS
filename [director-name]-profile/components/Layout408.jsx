"use client";

import { Button, useMediaQuery } from "@relume_io/relume-ui";
import { useMotionValue, motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { RxChevronRight } from "react-icons/rx";
import clsx from "clsx";

const calculateScales = (totalSections, scrollYProgress) => {
  return Array.from({ length: totalSections }, (_, index) => {
    const sectionFraction = 1 / totalSections;
    const start = sectionFraction * index;
    const end = sectionFraction * (index + 1);

    return index < totalSections - 1
      ? useTransform(scrollYProgress, [start, end], [1, 0.8])
      : useMotionValue(1);
  });
};

export const Layout408 = (props) => {
  const { tagline, heading, description, featureSections } = {
    ...Layout408Defaults,
    ...props,
  };

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end 60%"],
  });

  const scales = calculateScales(featureSections.length, scrollYProgress);

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h1>
          <p className="md:text-md">{description}</p>
        </div>
        <div
          ref={containerRef}
          className="grid grid-cols-1 gap-6 md:gap-0"
        >
          {featureSections.map((featureSection, index) => (
            <FeatureSection
              key={index}
              {...featureSection}
              scale={scales[index]}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureSection = ({ scale, index, ...featureSection }) => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isEven = index % 2 === 0;

  return (
    <React.Fragment>
      {isMobile ? (
        // FIX: Removed 'content-center' so children can stretch
        <div className="static grid grid-cols-1 overflow-hidden border border-gray-300 bg-white">
          <FeatureSectionContent isEven={isEven} {...featureSection} />
        </div>
      ) : (
        <motion.div
          // FIX: Removed 'content-center' here as well. 
          // Now the grid columns will stretch to fill the 80vh height.
          className="static grid grid-cols-1 overflow-hidden border border-gray-300 bg-white md:sticky md:top-[10%] md:mb-[10vh] md:h-[80vh] md:grid-cols-2"
          style={{ scale }}
        >
          <FeatureSectionContent isEven={isEven} {...featureSection} />
        </motion.div>
      )}
    </React.Fragment>
  );
};

const FeatureSectionContent = ({ isEven, ...featureSection }) => (
  <React.Fragment>
    <div
      className={clsx(
        "order-first flex flex-col justify-center p-6 md:p-8 lg:p-12",
        isEven ? "md:order-first" : "md:order-last"
      )}
    >
      <p className="mb-2 font-semibold">{featureSection.tagline}</p>
      <h2 className="rb-5 mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
        {featureSection.heading}
      </h2>
      <p>{featureSection.description}</p>
      <div className="mt-6 flex items-center gap-x-4 md:mt-8">
        {featureSection.buttons.map((button, index) => (
          <Button key={index} {...button}>
            {button.title}
          </Button>
        ))}
      </div>
    </div>
    <div
      className={clsx(
        "order-last w-full h-full",
        isEven ? "md:order-last" : "md:order-first"
      )}
    >
      <img
        src={featureSection.image.src}
        alt={featureSection.image.alt}
        className="w-full h-full object-cover"
      />
    </div>
  </React.Fragment>
);

export const Layout408Defaults = {
  tagline: "Foundation",
  heading: "Education and qualifications",
  description: "Advanced study in educational leadership and institutional management across multiple disciplines.",
  featureSections: [
    {
      tagline: "Degrees",
      heading: "Bachelor of Arts in Education",
      description: "Completed at University of Peshawar with distinction in pedagogical theory and classroom practice.",
      buttons: [
        { title: "View", variant: "secondary" },
        { title: "Details", variant: "link", size: "link", iconRight: <RxChevronRight /> },
      ],
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "Education certificate",
      },
    },
    {
      tagline: "Degrees",
      heading: "Master of Education Administration",
      description: "Advanced studies in school leadership and educational policy from a leading institution.",
      buttons: [
        { title: "View", variant: "secondary" },
        { title: "Details", variant: "link", size: "link", iconRight: <RxChevronRight /> },
      ],
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "Master's degree certificate",
      },
    },
    {
      tagline: "Experience",
      heading: "Two Decades of Leadership",
      description: "Over 20 years of experience in educational administration, curriculum development, and student mentorship.",
      buttons: [
        { title: "View", variant: "secondary" },
        { title: "Details", variant: "link", size: "link", iconRight: <RxChevronRight /> },
      ],
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "Leadership experience",
      },
    },
  ],
};
