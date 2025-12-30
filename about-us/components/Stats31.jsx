"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { useCountUp } from "../../src/hooks/useCountUp";

// Stat Card Component with Count-Up Animation
function StatCard({ value, title, description, delay = 0 }) {
  const { value: animatedValue, ref } = useCountUp(value, 2000, delay);
  
  return (
    <div ref={ref} className="border border-border-primary p-8">
      <p className="mb-8 text-10xl font-bold leading-[1.3] md:mb-10 md:text-[4rem] lg:mb-12 lg:text-[5rem] text-school-gold">
        {animatedValue}
      </p>
      <h3 className="text-md font-bold leading-[1.4] md:text-xl">
        {title}
      </h3>
      <p className="mt-2">{description}</p>
    </div>
  );
}

export function Stats31() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-[0.5fr_1fr] lg:items-center lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Achievement</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Proven results speak clearly
            </h2>
            <p className="md:text-md">
              Our students consistently demonstrate excellence. These numbers
              reflect our commitment to rigorous standards and dedicated
              instruction.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Academics" variant="secondary">
                Academics
              </Button>
              <Button
                title="Staff"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Staff
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 py-2 md:grid-cols-2">
            <StatCard
              value="100%"
              title="Matric pass rate"
              description="Every student who sits for exams succeeds."
              delay={0}
            />
            <StatCard
              value="50+"
              title="A+ grades awarded"
              description="Excellence is the standard we maintain year after year."
              delay={200}
            />
            <StatCard
              value="1000+"
              title="Students enrolled"
              description="A thriving community of learners across all grades."
              delay={400}
            />
            <StatCard
              value="10+"
              title="Years of service"
              description="A quarter century of building leaders in Peshawar."
              delay={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
