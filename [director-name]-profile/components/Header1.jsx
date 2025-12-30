"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { useLocation } from "react-router-dom";

const directorData = {
  "/waleed-khan-khalil": {
    name: "Waleed Khan Khalil",
    title: "Director, Benchmark School System",
    description:
      "Leading educational excellence in Peshawar for over two decades, committed to empowering young minds and creating tomorrow's leaders through rigorous academics and character development.",
  },
  "/noman-khan": {
    name: "Noman Khan",
    title: "Director, Benchmark School System",
    description:
      "Dedicated to fostering an environment of academic excellence and personal growth, shaping the next generation of leaders with integrity, discipline, and a passion for learning.",
  },
};

export function Header1() {
  const location = useLocation();
  const director = directorData[location.pathname] || directorData["/waleed-khan-khalil"];

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
              {director.name}
            </h1>
            <p className="md:text-md">
              {director.title}. {director.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="Message">Message</Button>
              <Button title="Connect" variant="secondary">
                Connect
              </Button>
            </div>
          </div>
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full object-cover"
              alt={director.name}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
