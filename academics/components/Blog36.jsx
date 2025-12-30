"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Blog36() {
  // Data for Class 10
  const class10Toppers = [
    {
      position: "1st Position",
      name: "Abdul Hadi", // Replace with actual name
      marks: "1045/1100",
      description: "Topped the entire Science Group. A true example of dedication.",
      image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
      link: "#",
    },
    {
      position: "2nd Position",
      name: "Fatima Noor", // Replace with actual name
      marks: "1032/1100",
      description: "Consistent excellence. Secured the second highest marks in the district.",
      image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
      link: "#",
    },
    {
      position: "3rd Position",
      name: "Muhammad Umar", // Replace with actual name
      marks: "1021/1100",
      description: "Outstanding performance in Biology and Physics. A future doctor in the making.",
      image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
      link: "#",
    },
  ];

  // Data for Class 9
  const class9Toppers = [
    {
      position: "1st Position",
      name: "Zainab Bibi", // Replace with actual name
      marks: "515/550",
      description: "An incredible start. Set a new record for Class 9 scores.",
      image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
      link: "#",
    },
    {
      position: "2nd Position",
      name: "Ahmed Khan", // Replace with actual name
      marks: "508/550",
      description: "Proven brilliance in Mathematics and Computer Science.",
      image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
      link: "#",
    },
    {
      position: "3rd Position",
      name: "Sara Ali", // Replace with actual name
      marks: "502/550",
      description: "Hard work defined. We are proud of this exceptional achievement.",
      image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
      link: "#",
    },
  ];

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        {/* Main Header */}
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg text-center">
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Our Pride: Board Position Holders
            </h2>
            <p className="md:text-md">
              Celebrating the brilliant minds who conquered the BISE Peshawar exams.
            </p>
          </div>
        </div>

        {/* ROW 1: Class 10 Toppers */}
        <div className="mb-8 md:mb-10">
          <h3 className="mb-6 text-3xl font-bold md:text-4xl">Class 10 (Matric) Results</h3>
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
            {class10Toppers.map((student, index) => (
              <div
                key={index}
                className="flex size-full flex-col items-center justify-start border border-border-primary"
              >
                <a href={student.link} className="w-full">
                  <img
                    src={student.image}
                    alt={`${student.name} profile`}
                    className="aspect-[3/2] size-full object-cover"
                  />
                </a>
                <div className="px-5 py-6 md:p-6">
                  <div className="mb-4 flex w-full items-center justify-start">
                    <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                      {student.position}
                    </p>
                  </div>
                  <a className="mb-2 block max-w-full" href={student.link}>
                    <h2 className="text-xl font-bold md:text-2xl">
                      {student.name} — {student.marks}
                    </h2>
                  </a>
                  <p>{student.description}</p>
                  <Button
                    title="View Marksheet"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                    className="mt-6 flex items-center justify-center gap-x-2"
                  >
                    View Marksheet
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ROW 2: Class 9 Toppers */}
        <div className="mt-16 md:mt-24">
          <h3 className="mb-6 text-3xl font-bold md:text-4xl">Class 9 Results</h3>
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
            {class9Toppers.map((student, index) => (
              <div
                key={index}
                className="flex size-full flex-col items-center justify-start border border-border-primary"
              >
                <a href={student.link} className="w-full">
                  <img
                    src={student.image}
                    alt={`${student.name} profile`}
                    className="aspect-[3/2] size-full object-cover"
                  />
                </a>
                <div className="px-5 py-6 md:p-6">
                  <div className="mb-4 flex w-full items-center justify-start">
                    <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                      {student.position}
                    </p>
                  </div>
                  <a className="mb-2 block max-w-full" href={student.link}>
                    <h2 className="text-xl font-bold md:text-2xl">
                      {student.name} — {student.marks}
                    </h2>
                  </a>
                  <p>{student.description}</p>
                  <Button
                    title="View Result"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                    className="mt-6 flex items-center justify-center gap-x-2"
                  >
                    View Result
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}