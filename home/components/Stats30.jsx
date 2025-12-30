"use client";

import React from "react";
import { useCountUp } from "../../src/hooks/useCountUp";

// Stat Card Component with Count-Up Animation
function StatCard({ value, title, description, className = "", delay = 0 }) {
  const { value: animatedValue, ref } = useCountUp(value, 2000, delay);
  
  return (
    <div ref={ref} className={`border border-border-primary p-8 ${className}`}>
      <p className="mb-8 text-10xl font-bold leading-[1.3] md:mb-10 md:text-[4rem] lg:mb-12 lg:text-[5rem] text-school-gold">
        {animatedValue}
      </p>
      <div className="mt-auto">
        <h3 className="text-md font-bold leading-[1.4] md:text-xl">
          {title}
        </h3>
        <p className="mt-2">{description}</p>
      </div>
    </div>
  );
}

export function Stats30() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20">
          <div>
            <h3 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">
              Proven excellence across every measure
            </h3>
          </div>
          <div>
            <p className="md:text-md">
              Our students do not just pass exams. They master them, year after
              year, with discipline and determination.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <StatCard
            value="100%"
            title="Matric pass rate"
            description="Consistent excellence in BISE Peshawar Board results year after year."
            className="flex flex-col md:col-span-2 md:row-span-1 lg:col-span-1 lg:row-span-2"
            delay={0}
          />
          <div>
            <img
              className="aspect-[3/2] size-full object-cover"
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              alt="Relume placeholder image"
            />
          </div>
          <StatCard
            value="50%"
            title="Board Position Holders"
            description="Students who secured Top 3 positions in regional board exams."
            delay={200}
          />
          <StatCard
            value="10 Years"
            title="Of Educational Excellence"
            description="Serving the Peshawar community with dedication and trust."
            className="[&:nth-last-child(2)]:order-last [&:nth-last-child(2)]:md:order-none"
            delay={400}
          />
          <div>
            <img
              className="aspect-[3/2] size-full object-cover"
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
