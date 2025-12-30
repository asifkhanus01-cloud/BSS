"use client";

import { useParams } from "react-router-dom";

const jobData = {
  "math-teacher": {
    title: "Senior mathematics teacher",
    description: "Lead our secondary mathematics program and inspire the next generation of problem solvers in Peshawar.",
    category: "Academic",
    type: "Full-time",
    posted: "Posted today"
  },
  "english-instructor": {
    title: "English language instructor",
    description: "Develop engaging curriculum and foster communication skills across all grade levels.",
    category: "Academic",
    type: "Full-time",
    posted: "Posted today"
  },
  "science-head": {
    title: "Science department head",
    description: "Oversee laboratory programs and coordinate interdisciplinary science initiatives for the school.",
    category: "Administration",
    type: "Full-time",
    posted: "Posted 2 days ago"
  }
};

export function PortfolioHeader1() {
  const { slug } = useParams();
  const job = jobData[slug] || jobData["math-teacher"]; // Fallback to math teacher if not found

  return (
    <section id="relume" className="px-[5%]">
      <div className="mx-auto max-w-lg py-16 text-center md:py-24 lg:py-28">
        <div>
          <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
            {job.title}
          </h1>
          <p className="md:text-md">
            {job.description}
          </p>
          <ul className="mt-5 flex flex-wrap justify-center gap-2 md:mt-6">
            <li className="flex">
              <span className="bg-background-secondary px-2 py-1 text-sm font-semibold">
                {job.category}
              </span>
            </li>
            <li className="flex">
              <span className="bg-background-secondary px-2 py-1 text-sm font-semibold">
                {job.type}
              </span>
            </li>
            <li className="flex">
              <span className="bg-background-secondary px-2 py-1 text-sm font-semibold">
                {job.posted}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
