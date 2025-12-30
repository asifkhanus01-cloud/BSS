"use client";

import {
  Button,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@relume_io/relume-ui";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxChevronRight } from "react-icons/rx";
import { blogPosts } from "../../src/data/content";

const useRelume = ({ defaultValue }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  const isActive = (tabValue) => {
    return activeTab === tabValue ? 1 : 0;
  };

  return {
    activeTab,
    setActiveTab,
    isActive,
  };
};

export function Blog22() {
  const useActive = useRelume({ defaultValue: "view-all" });
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Featured</p>
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
              Building tomorrow's leaders today
            </h1>
            <p className="md:text-md">
              Discover the stories shaping our school community
            </p>
          </div>
        </div>
        {blogPosts.length > 0 && (
          <div className="mb-12 grid grid-cols-1 items-center gap-6 md:mb-16 md:grid-cols-2 md:gap-12">
            <Link to={`/blog/${blogPosts[0].slug}`} className="w-full">
              <img
                src={blogPosts[0].image || "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"}
                alt={blogPosts[0].title}
                className="aspect-[3/2] size-full object-cover"
              />
            </Link>
            <div className="flex h-full flex-col items-start justify-center">
              <div className="mb-4 flex w-full items-center justify-start">
                <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                  {blogPosts[0].category}
                </p>
                <p className="inline text-sm font-semibold">
                  {new Date(blogPosts[0].date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>
              <Link className="mb-2" to={`/blog/${blogPosts[0].slug}`}>
                <h3 className="mb-2 text-2xl font-bold md:text-3xl md:leading-[1.3] lg:text-4xl">
                  {blogPosts[0].title}
                </h3>
              </Link>
              <p>{blogPosts[0].excerpt}</p>
              <Link to={`/blog/${blogPosts[0].slug}`} className="mt-6 flex items-center justify-center gap-x-2">
                <Button
                  title="Read more"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Read more
                </Button>
              </Link>
            </div>
          </div>
        )}
        <Tabs
          value={useActive.activeTab}
          onValueChange={useActive.setActiveTab}
          className="flex flex-col justify-center"
        >
          <TabsList className="no-scrollbar mb-12 flex w-full items-center justify-start overflow-auto md:mb-16 md:ml-0 md:w-full md:overflow-hidden md:pl-0">
            <TabsTrigger
              value="view-all"
              className="px-4 data-[state=active]:border data-[state=active]:border-border-primary data-[state=inactive]:border-transparent data-[state=active]:bg-transparent data-[state=active]:text-neutral-black"
            >
              View all
            </TabsTrigger>
            <TabsTrigger
              value="category-one"
              className="px-4 data-[state=active]:border data-[state=active]:border-border-primary data-[state=inactive]:border-transparent data-[state=active]:bg-transparent data-[state=active]:text-neutral-black"
            >
              Academics
            </TabsTrigger>
            <TabsTrigger
              value="category-two"
              className="px-4 data-[state=active]:border data-[state=active]:border-border-primary data-[state=inactive]:border-transparent data-[state=active]:bg-transparent data-[state=active]:text-neutral-black"
            >
              Events
            </TabsTrigger>
            <TabsTrigger
              value="category-three"
              className="px-4 data-[state=active]:border data-[state=active]:border-border-primary data-[state=inactive]:border-transparent data-[state=active]:bg-transparent data-[state=active]:text-neutral-black"
            >
              Leadership
            </TabsTrigger>
            <TabsTrigger
              value="category-four"
              className="px-4 data-[state=active]:border data-[state=active]:border-border-primary data-[state=inactive]:border-transparent data-[state=active]:bg-transparent data-[state=active]:text-neutral-black"
            >
              Campus life
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="view-all"
            className="data-[state=active]:animate-tabs"
          >
            <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-2">
              <div className="flex size-full flex-col items-start justify-start">
                <Link to="/blog-post" className="mb-6 w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image"
                    className="aspect-video size-full object-cover"
                  />
                </Link>
                <div className="mb-4 flex w-full items-center justify-start">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    Academics
                  </p>
                  <p className="inline text-sm font-semibold">March 15, 2024</p>
                </div>
                <Link
                  className="mb-2 flex w-full flex-col items-start justify-start"
                  to="/blog-post"
                >
                  <h2 className="text-xl font-bold md:text-2xl">
                    Excellence in science education takes root
                  </h2>
                </Link>
                <p>
                  Our advanced laboratory programs prepare students for
                  competitive exams
                </p>
                <Button
                  title="Read more"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more
                </Button>
              </div>
              <div className="flex size-full flex-col items-start justify-start">
                <a href="#" className="mb-6 w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image"
                    className="aspect-video size-full object-cover"
                  />
                </a>
                <div className="mb-4 flex w-full items-center justify-start">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    Events
                  </p>
                  <p className="inline text-sm font-semibold">March 8, 2024</p>
                </div>
                <a
                  className="mb-2 flex w-full flex-col items-start justify-start"
                  href="#"
                >
                  <h2 className="text-xl font-bold md:text-2xl">
                    Annual sports day celebrates athletic achievement
                  </h2>
                </a>
                <p>
                  Students demonstrated remarkable skill and sportsmanship
                  throughout the day
                </p>
                <Button
                  title="Read more"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more
                </Button>
              </div>
              <div className="flex size-full flex-col items-start justify-start">
                <a href="#" className="mb-6 w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image"
                    className="aspect-video size-full object-cover"
                  />
                </a>
                <div className="mb-4 flex w-full items-center justify-start">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    Leadership
                  </p>
                  <p className="inline text-sm font-semibold">March 1, 2024</p>
                </div>
                <a
                  className="mb-2 flex w-full flex-col items-start justify-start"
                  href="#"
                >
                  <h2 className="text-xl font-bold md:text-2xl">
                    Character building through monthly inspections
                  </h2>
                </a>
                <p>
                  Rigorous standards ensure students develop discipline and
                  responsibility
                </p>
                <Button
                  title="Read more"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more
                </Button>
              </div>
              <div className="flex size-full flex-col items-start justify-start">
                <a href="#" className="mb-6 w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image"
                    className="aspect-video size-full object-cover"
                  />
                </a>
                <div className="mb-4 flex w-full items-center justify-start">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    Campus life
                  </p>
                  <p className="inline text-sm font-semibold">
                    February 20, 2024
                  </p>
                </div>
                <a
                  className="mb-2 flex w-full flex-col items-start justify-start"
                  href="#"
                >
                  <h2 className="text-xl font-bold md:text-2xl">
                    Student magazine showcases creative talent
                  </h2>
                </a>
                <p>
                  Monthly publication highlights student voices and achievements
                  across campus
                </p>
                <Button
                  title="Read more"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more
                </Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="category-one"
            className="data-[state=active]:animate-tabs"
          >
            <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-2">
              <div className="flex size-full flex-col items-start justify-start">
                <a href="#" className="mb-6 w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image"
                    className="aspect-video size-full object-cover"
                  />
                </a>
                <div className="mb-4 flex w-full items-center justify-start">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    Academics
                  </p>
                  <p className="inline text-sm font-semibold">March 15, 2024</p>
                </div>
                <a
                  className="mb-2 flex w-full flex-col items-start justify-start"
                  href="#"
                >
                  <h2 className="text-xl font-bold md:text-2xl">
                    Excellence in science education takes root
                  </h2>
                </a>
                <p>
                  Our advanced laboratory programs prepare students for
                  competitive exams
                </p>
                <Button
                  title="Read more"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more
                </Button>
              </div>
              <div className="flex size-full flex-col items-start justify-start">
                <a href="#" className="mb-6 w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image"
                    className="aspect-video size-full object-cover"
                  />
                </a>
                <div className="mb-4 flex w-full items-center justify-start">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    Events
                  </p>
                  <p className="inline text-sm font-semibold">March 8, 2024</p>
                </div>
                <a
                  className="mb-2 flex w-full flex-col items-start justify-start"
                  href="#"
                >
                  <h2 className="text-xl font-bold md:text-2xl">
                    Annual sports day celebrates athletic achievement
                  </h2>
                </a>
                <p>
                  Students demonstrated remarkable skill and sportsmanship
                  throughout the day
                </p>
                <Button
                  title="Read more"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more
                </Button>
              </div>
              <div className="flex size-full flex-col items-start justify-start">
                <a href="#" className="mb-6 w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image"
                    className="aspect-video size-full object-cover"
                  />
                </a>
                <div className="mb-4 flex w-full items-center justify-start">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    Leadership
                  </p>
                  <p className="inline text-sm font-semibold">March 1, 2024</p>
                </div>
                <a
                  className="mb-2 flex w-full flex-col items-start justify-start"
                  href="#"
                >
                  <h2 className="text-xl font-bold md:text-2xl">
                    Character building through monthly inspections
                  </h2>
                </a>
                <p>
                  Rigorous standards ensure students develop discipline and
                  responsibility
                </p>
                <Button
                  title="Read more"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more
                </Button>
              </div>
              <div className="flex size-full flex-col items-start justify-start">
                <a href="#" className="mb-6 w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image"
                    className="aspect-video size-full object-cover"
                  />
                </a>
                <div className="mb-4 flex w-full items-center justify-start">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    Campus life
                  </p>
                  <p className="inline text-sm font-semibold">
                    February 20, 2024
                  </p>
                </div>
                <a
                  className="mb-2 flex w-full flex-col items-start justify-start"
                  href="#"
                >
                  <h2 className="text-xl font-bold md:text-2xl">
                    Student magazine showcases creative talent
                  </h2>
                </a>
                <p>
                  Monthly publication highlights student voices and achievements
                  across campus
                </p>
                <Button
                  title="Read more"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more
                </Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="category-two"
            className="data-[state=active]:animate-tabs"
          >
            <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-2">
              <div className="flex size-full flex-col items-start justify-start">
                <a href="#" className="mb-6 w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image"
                    className="aspect-video size-full object-cover"
                  />
                </a>
                <div className="mb-4 flex w-full items-center justify-start">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    Academics
                  </p>
                  <p className="inline text-sm font-semibold">March 15, 2024</p>
                </div>
                <a
                  className="mb-2 flex w-full flex-col items-start justify-start"
                  href="#"
                >
                  <h2 className="text-xl font-bold md:text-2xl">
                    Excellence in science education takes root
                  </h2>
                </a>
                <p>
                  Our advanced laboratory programs prepare students for
                  competitive exams
                </p>
                <Button
                  title="Read more"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more
                </Button>
              </div>
              <div className="flex size-full flex-col items-start justify-start">
                <a href="#" className="mb-6 w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image"
                    className="aspect-video size-full object-cover"
                  />
                </a>
                <div className="mb-4 flex w-full items-center justify-start">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    Events
                  </p>
                  <p className="inline text-sm font-semibold">March 8, 2024</p>
                </div>
                <a
                  className="mb-2 flex w-full flex-col items-start justify-start"
                  href="#"
                >
                  <h2 className="text-xl font-bold md:text-2xl">
                    Annual sports day celebrates athletic achievement
                  </h2>
                </a>
                <p>
                  Students demonstrated remarkable skill and sportsmanship
                  throughout the day
                </p>
                <Button
                  title="Read more"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more
                </Button>
              </div>
              <div className="flex size-full flex-col items-start justify-start">
                <a href="#" className="mb-6 w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image"
                    className="aspect-video size-full object-cover"
                  />
                </a>
                <div className="mb-4 flex w-full items-center justify-start">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    Leadership
                  </p>
                  <p className="inline text-sm font-semibold">March 1, 2024</p>
                </div>
                <a
                  className="mb-2 flex w-full flex-col items-start justify-start"
                  href="#"
                >
                  <h2 className="text-xl font-bold md:text-2xl">
                    Character building through monthly inspections
                  </h2>
                </a>
                <p>
                  Rigorous standards ensure students develop discipline and
                  responsibility
                </p>
                <Button
                  title="Read more"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more
                </Button>
              </div>
              <div className="flex size-full flex-col items-start justify-start">
                <a href="#" className="mb-6 w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image"
                    className="aspect-video size-full object-cover"
                  />
                </a>
                <div className="mb-4 flex w-full items-center justify-start">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    Campus life
                  </p>
                  <p className="inline text-sm font-semibold">
                    February 20, 2024
                  </p>
                </div>
                <a
                  className="mb-2 flex w-full flex-col items-start justify-start"
                  href="#"
                >
                  <h2 className="text-xl font-bold md:text-2xl">
                    Student magazine showcases creative talent
                  </h2>
                </a>
                <p>
                  Monthly publication highlights student voices and achievements
                  across campus
                </p>
                <Button
                  title="Read more"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more
                </Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="category-three"
            className="data-[state=active]:animate-tabs"
          >
            <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-2">
              <div className="flex size-full flex-col items-start justify-start">
                <a href="#" className="mb-6 w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image"
                    className="aspect-video size-full object-cover"
                  />
                </a>
                <div className="mb-4 flex w-full items-center justify-start">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    Academics
                  </p>
                  <p className="inline text-sm font-semibold">March 15, 2024</p>
                </div>
                <a
                  className="mb-2 flex w-full flex-col items-start justify-start"
                  href="#"
                >
                  <h2 className="text-xl font-bold md:text-2xl">
                    Excellence in science education takes root
                  </h2>
                </a>
                <p>
                  Our advanced laboratory programs prepare students for
                  competitive exams
                </p>
                <Button
                  title="Read more"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more
                </Button>
              </div>
              <div className="flex size-full flex-col items-start justify-start">
                <a href="#" className="mb-6 w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image"
                    className="aspect-video size-full object-cover"
                  />
                </a>
                <div className="mb-4 flex w-full items-center justify-start">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    Events
                  </p>
                  <p className="inline text-sm font-semibold">March 8, 2024</p>
                </div>
                <a
                  className="mb-2 flex w-full flex-col items-start justify-start"
                  href="#"
                >
                  <h2 className="text-xl font-bold md:text-2xl">
                    Annual sports day celebrates athletic achievement
                  </h2>
                </a>
                <p>
                  Students demonstrated remarkable skill and sportsmanship
                  throughout the day
                </p>
                <Button
                  title="Read more"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more
                </Button>
              </div>
              <div className="flex size-full flex-col items-start justify-start">
                <a href="#" className="mb-6 w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image"
                    className="aspect-video size-full object-cover"
                  />
                </a>
                <div className="mb-4 flex w-full items-center justify-start">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    Leadership
                  </p>
                  <p className="inline text-sm font-semibold">March 1, 2024</p>
                </div>
                <a
                  className="mb-2 flex w-full flex-col items-start justify-start"
                  href="#"
                >
                  <h2 className="text-xl font-bold md:text-2xl">
                    Character building through monthly inspections
                  </h2>
                </a>
                <p>
                  Rigorous standards ensure students develop discipline and
                  responsibility
                </p>
                <Button
                  title="Read more"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more
                </Button>
              </div>
              <div className="flex size-full flex-col items-start justify-start">
                <a href="#" className="mb-6 w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image"
                    className="aspect-video size-full object-cover"
                  />
                </a>
                <div className="mb-4 flex w-full items-center justify-start">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    Campus life
                  </p>
                  <p className="inline text-sm font-semibold">
                    February 20, 2024
                  </p>
                </div>
                <a
                  className="mb-2 flex w-full flex-col items-start justify-start"
                  href="#"
                >
                  <h2 className="text-xl font-bold md:text-2xl">
                    Student magazine showcases creative talent
                  </h2>
                </a>
                <p>
                  Monthly publication highlights student voices and achievements
                  across campus
                </p>
                <Button
                  title="Read more"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more
                </Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="category-four"
            className="data-[state=active]:animate-tabs"
          >
            <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-2">
              <div className="flex size-full flex-col items-start justify-start">
                <a href="#" className="mb-6 w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image"
                    className="aspect-video size-full object-cover"
                  />
                </a>
                <div className="mb-4 flex w-full items-center justify-start">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    Academics
                  </p>
                  <p className="inline text-sm font-semibold">March 15, 2024</p>
                </div>
                <a
                  className="mb-2 flex w-full flex-col items-start justify-start"
                  href="#"
                >
                  <h2 className="text-xl font-bold md:text-2xl">
                    Excellence in science education takes root
                  </h2>
                </a>
                <p>
                  Our advanced laboratory programs prepare students for
                  competitive exams
                </p>
                <Button
                  title="Read more"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more
                </Button>
              </div>
              <div className="flex size-full flex-col items-start justify-start">
                <a href="#" className="mb-6 w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image"
                    className="aspect-video size-full object-cover"
                  />
                </a>
                <div className="mb-4 flex w-full items-center justify-start">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    Events
                  </p>
                  <p className="inline text-sm font-semibold">March 8, 2024</p>
                </div>
                <a
                  className="mb-2 flex w-full flex-col items-start justify-start"
                  href="#"
                >
                  <h2 className="text-xl font-bold md:text-2xl">
                    Annual sports day celebrates athletic achievement
                  </h2>
                </a>
                <p>
                  Students demonstrated remarkable skill and sportsmanship
                  throughout the day
                </p>
                <Button
                  title="Read more"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more
                </Button>
              </div>
              <div className="flex size-full flex-col items-start justify-start">
                <a href="#" className="mb-6 w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image"
                    className="aspect-video size-full object-cover"
                  />
                </a>
                <div className="mb-4 flex w-full items-center justify-start">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    Leadership
                  </p>
                  <p className="inline text-sm font-semibold">March 1, 2024</p>
                </div>
                <a
                  className="mb-2 flex w-full flex-col items-start justify-start"
                  href="#"
                >
                  <h2 className="text-xl font-bold md:text-2xl">
                    Character building through monthly inspections
                  </h2>
                </a>
                <p>
                  Rigorous standards ensure students develop discipline and
                  responsibility
                </p>
                <Button
                  title="Read more"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more
                </Button>
              </div>
              <div className="flex size-full flex-col items-start justify-start">
                <a href="#" className="mb-6 w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image"
                    className="aspect-video size-full object-cover"
                  />
                </a>
                <div className="mb-4 flex w-full items-center justify-start">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    Campus life
                  </p>
                  <p className="inline text-sm font-semibold">
                    February 20, 2024
                  </p>
                </div>
                <a
                  className="mb-2 flex w-full flex-col items-start justify-start"
                  href="#"
                >
                  <h2 className="text-xl font-bold md:text-2xl">
                    Student magazine showcases creative talent
                  </h2>
                </a>
                <p>
                  Monthly publication highlights student voices and achievements
                  across campus
                </p>
                <Button
                  title="Read more"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
