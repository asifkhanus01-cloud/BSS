"use client";

import {
  Button,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@relume_io/relume-ui";
import React, { useEffect, useState } from "react";
import { RxChevronRight } from "react-icons/rx";

const useCarousel = () => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleDotClick = (index) => () => {
    // No TypeScript annotation
    if (api) {
      api.scrollTo(index);
    }
  };

  const dotClassName = (index) => {
    return `mx-[3px] inline-block size-2 rounded-full ${current === index + 1 ? "bg-school-blue" : "bg-gray-300"
      }`;
  };

  return { api, setApi, current, handleDotClick, dotClassName };
};

export function Testimonial23() {
  const carouselContext = useCarousel();
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            What families say
          </h1>
          <p className="md:text-md">Real voices from parents who trust us</p>
        </div>
        <Carousel
          setApi={carouselContext.setApi}
          opts={{ loop: true, align: "start" }}
          className="overflow-hidden md:px-3.5"
        >
          <div className="relative">
            <CarouselContent className="ml-0 md:flex-row">
              <CarouselItem className="mr-4 basis-full pl-0 md:mr-0 md:basis-1/2 md:px-4 lg:basis-1/3">
                <div className="flex w-full flex-col items-start justify-between border border-border-primary p-6 md:p-8">
                  <div className="mb-8 md:mb-10 lg:mb-12">
                    <img
                      className="max-h-12"
                      src="images/Google_2015_logo.svg.png"
                      alt="Testimonial logo 1"
                    />
                  </div>
                  <p className="md:text-md">
                    The focus on Board Exam preparation is excellent. My son secured 94% in Matric
                    thanks to the teachers' extra effort and the monthly test system.
                  </p>
                  <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-fit md:flex-row md:items-center">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                      alt="Testimonial avatar 1"
                      className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold">Dr. Arshad Khan</p>
                      <p>Parent, Peshawar</p>
                    </div>
                  </div>
                  <div className="mt-6 py-1 md:mt-8">
                    <Button
                      title="Read more"
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                      className="gap-2.5"
                    >
                      Read more
                    </Button>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="mr-4 basis-full pl-0 md:mr-0 md:basis-1/2 md:px-4 lg:basis-1/3">
                <div className="flex w-full flex-col items-start justify-between border border-border-primary p-6 md:p-8">
                  <div className="mb-8 md:mb-10 lg:mb-12">
                    <img
                      className="max-h-12"
                      src="images/Google_2015_logo.svg.png"
                      alt="Testimonial logo 2"
                    />
                  </div>
                  <p className="md:text-md">
                    What I appreciate most is the discipline. It is a safe,
                    structured environment where I know my daughter is learning
                    good values along with her books.
                  </p>
                  <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-fit md:flex-row md:items-center">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                      alt="Testimonial avatar 2"
                      className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold">Mrs. Salma Gul</p>
                      <p>Parent, Peshawar</p>
                    </div>
                  </div>
                  <div className="mt-6 py-1 md:mt-8">
                    <Button
                      title="Read more"
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                      className="gap-2.5"
                    >
                      Read more
                    </Button>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="mr-4 basis-full pl-0 md:mr-0 md:basis-1/2 md:px-4 lg:basis-1/3">
                <div className="flex w-full flex-col items-start justify-between border border-border-primary p-6 md:p-8">
                  <div className="mb-8 md:mb-10 lg:mb-12">
                    <img
                      className="max-h-12"
                      src="images/Google_2015_logo.svg.png"
                      alt="Testimonial logo 3"
                    />
                  </div>
                  <p className="md:text-md">
                    Very professional management. They keep parents updated on attendance,
                    test marks, and behavior constantly. There are never any surprises.
                  </p>
                  <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-fit md:flex-row md:items-center">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                      alt="Testimonial avatar 3"
                      className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold">Tariq Mehmood</p>
                      <p>Parent, Peshawar</p>
                    </div>
                  </div>
                  <div className="mt-6 py-1 md:mt-8">
                    <Button
                      title="Read more"
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                      className="gap-2.5"
                    >
                      Read more
                    </Button>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="mr-4 basis-full pl-0 md:mr-0 md:basis-1/2 md:px-4 lg:basis-1/3">
                <div className="flex w-full flex-col items-start justify-between border border-border-primary p-6 md:p-8">
                  <div className="mb-8 md:mb-10 lg:mb-12">
                    <img
                      className="max-h-12"
                      src="images/Google_2015_logo.svg.png"
                      alt="Testimonial logo 4"
                    />
                  </div>
                  <p className="md:text-md">
                    My son used to cry going to his old school, but he loves the Montessori section here.
                    The teachers are polite, caring, and very patient.
                  </p>
                  <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-fit md:flex-row md:items-center">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                      alt="Testimonial avatar 4"
                      className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold">Ayesha Zafar</p>
                      <p>Parent, Peshawar</p>
                    </div>
                  </div>
                  <div className="mt-6 py-1 md:mt-8">
                    <Button
                      title="Read more"
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                      className="gap-2.5"
                    >
                      Read more
                    </Button>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="mr-4 basis-full pl-0 md:mr-0 md:basis-1/2 md:px-4 lg:basis-1/3">
                <div className="flex w-full flex-col items-start justify-between border border-border-primary p-6 md:p-8">
                  <div className="mb-8 md:mb-10 lg:mb-12">
                    <img
                      className="max-h-12"
                      src="images/Google_2015_logo.svg.png"
                      alt="Testimonial logo 5"
                    />
                  </div>
                  <p className="md:text-md">
                    It is not just about 'ratta' (rote learning). My son has gained so much confidence
                    through the debating club and sports activities. A complete school.
                  </p>
                  <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-fit md:flex-row md:items-center">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                      alt="Testimonial avatar 5"
                      className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold">Kamran Shah</p>
                      <p>Parent, Peshawar</p>
                    </div>
                  </div>
                  <div className="mt-6 py-1 md:mt-8">
                    <Button
                      title="Read more"
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                      className="gap-2.5"
                    >
                      Read more
                    </Button>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="mr-4 basis-full pl-0 md:mr-0 md:basis-1/2 md:px-4 lg:basis-1/3">
                <div className="flex w-full flex-col items-start justify-between border border-border-primary p-6 md:p-8">
                  <div className="mb-8 md:mb-10 lg:mb-12">
                    <img
                      className="max-h-12"
                      src="images/Google_2015_logo.svg.png"
                      alt="Testimonial logo 6"
                    />
                  </div>
                  <p className="md:text-md">
                    The faculty is highly qualified and cooperative. They don't just teach the
                    syllabus but ensure every student's concepts are clear before moving forward.
                  </p>
                  <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-fit md:flex-row md:items-center">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                      alt="Testimonial avatar 6"
                      className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold">Sobia Jamil</p>
                      <p>Parent, Peshawar</p>
                    </div>
                  </div>
                  <div className="mt-6 py-1 md:mt-8">
                    <Button
                      title="Read more"
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                      className="gap-2.5"
                    >
                      Read more
                    </Button>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="-ml-3.5 hidden md:flex md:size-12 lg:size-14" />
            <CarouselNext className="-mr-3.5 hidden md:flex md:size-12 lg:size-14" />
          </div>
        </Carousel>
        <div className="mt-[30px] flex items-center justify-center md:mt-[46px]">
          <button
            onClick={carouselContext.handleDotClick(0)}
            className={carouselContext.dotClassName(0)}
          />
          <button
            onClick={carouselContext.handleDotClick(1)}
            className={carouselContext.dotClassName(1)}
          />
          <button
            onClick={carouselContext.handleDotClick(2)}
            className={carouselContext.dotClassName(2)}
          />
          <button
            onClick={carouselContext.handleDotClick(3)}
            className={carouselContext.dotClassName(3)}
          />
          <button
            onClick={carouselContext.handleDotClick(4)}
            className={carouselContext.dotClassName(4)}
          />
          <button
            onClick={carouselContext.handleDotClick(5)}
            className={carouselContext.dotClassName(5)}
          />
        </div>
      </div>
    </section>
  );
}
