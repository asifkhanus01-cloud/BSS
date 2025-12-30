"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@relume_io/relume-ui";
import React from "react";
import {
  BiLinkAlt,
  BiLogoFacebookCircle,
  BiLogoLinkedinSquare,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

export function BlogPostHeader1({ blogPost }) {
  if (!blogPost) {
    return null;
  }

  const formattedDate = new Date(blogPost.date).toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  });

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 flex w-full max-w-lg flex-col items-start justify-start md:mb-16 lg:mb-20">
          <Breadcrumb className="mb-6 flex w-full items-center">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#">{blogPost.category}</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="mb-8 text-5xl font-bold md:mb-10 md:text-7xl lg:mb-12 lg:text-8xl">
            {blogPost.title}
          </h1>
          <div className="flex w-full flex-col items-start justify-between sm:flex-row sm:items-end">
            <div className="mb-4 flex items-center sm:mb-0">
              <div className="mr-4 shrink-0">
                <img
                  src={blogPost.authorImage || "images/numan-headshot.JPG"}
                  alt={blogPost.author}
                  className="size-14 min-h-14 min-w-14 rounded-full object-cover"
                />
              </div>
              <div>
                <h6 className="font-semibold">{blogPost.author}</h6>
                <div className="mt-1 flex">
                  <p className="text-sm">{formattedDate}</p>
                  <span className="mx-2">•</span>
                  <p className="text-sm">7 min read</p>
                </div>
              </div>
            </div>
            <div className="mt-4 grid grid-flow-col grid-cols-[max-content] items-start gap-2">
              <a
                href="#"
                className="rounded-[1.25rem] bg-background-secondary p-1"
              >
                <BiLinkAlt className="size-6" />
              </a>
              <a
                href="#"
                className="rounded-[1.25rem] bg-background-secondary p-1"
              >
                <BiLogoLinkedinSquare className="size-6" />
              </a>
              <a
                href="#"
                className="rounded-[1.25rem] bg-background-secondary p-1"
              >
                <FaXTwitter className="size-6 p-0.5" />
              </a>
              <a
                href="#"
                className="rounded-[1.25rem] bg-background-secondary p-1"
              >
                <BiLogoFacebookCircle className="size-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto w-full overflow-hidden">
          <img
            src={blogPost.image || "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"}
            className="aspect-[2] size-full object-cover"
            alt={blogPost.title}
          />
        </div>
      </div>
    </section>
  );
}
