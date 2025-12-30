"use client";

import React from "react";

export function BlogPostHeader5() {
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative z-10 max-w-lg text-center">
        <p className="mb-3 text-sm font-semibold text-text-alternative md:mb-4">
          Culture
        </p>
        <h1 className="mb-5 text-5xl font-bold text-text-alternative md:text-7xl lg:text-8xl">
          Building character through discipline and support
        </h1>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:mt-12">
          <div className="mb-4 flex items-center">
            <div className="mb-4 flex flex-col items-center sm:mb-0">
              <div className="mb-3 shrink-0 md:mb-4">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Relume placeholder avatar"
                  className="size-14 min-h-14 min-w-14 rounded-full object-cover"
                />
              </div>
              <div className="text-text-alternative">
                <h6 className="font-semibold">Waleed Khan Khalil</h6>
                <div className="mt-1 flex">
                  <p className="text-sm">4 min read</p>
                  <span className="mx-2">•</span>
                  <p className="text-sm">Written by Waleed Khan Khalil</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
          className="size-full object-cover"
          alt="Relume placeholder image"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
}
