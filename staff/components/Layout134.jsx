"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout134() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">
        <p className="mb-3 font-semibold md:mb-4">Foundation</p>
        <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
          Building strength through thoughtful educator selection
        </h2>
        <p className="md:text-md">
          Benchmark School System believes that great teaching begins with great
          teachers. We recruit educators who understand that instruction is both
          craft and calling, selecting individuals who bring not just
          credentials but genuine commitment to student growth and character
          development.
        </p>
        <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
          <Button title="Discover" variant="secondary">
            Discover
          </Button>
          <Button
            title="Arrow"
            variant="link"
            size="link"
            iconRight={<RxChevronRight />}
          >
            Arrow
          </Button>
        </div>
      </div>
    </section>
  );
}
