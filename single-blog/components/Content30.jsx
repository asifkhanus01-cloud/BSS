"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@relume_io/relume-ui";
import React, { Fragment } from "react";
import {
  BiLinkAlt,
  BiLogoFacebookCircle,
  BiLogoLinkedinSquare,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { schoolInfo } from "../../src/data/schoolInfo";

export function Content30({ blogPost }) {
  if (!blogPost) {
    return null;
  }

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = encodeURIComponent(blogPost.title);
  const shareUrlEncoded = encodeURIComponent(shareUrl);
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto max-w-lg">
          <div className="mb-14 flex flex-col gap-y-8 sm:flex-row sm:items-center sm:justify-between md:mb-16 md:gap-y-0">
            <Breadcrumb className="flex items-center">
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
            <div className="flex items-start gap-2">
              <a
                href={shareUrl}
                onClick={(e) => {
                  e.preventDefault();
                  navigator.clipboard.writeText(shareUrl);
                }}
                className="size-8 rounded-[1.25rem] bg-background-secondary p-1 hover:bg-background-tertiary"
                title="Copy link"
              >
                <BiLinkAlt className="size-6" />
              </a>
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrlEncoded}&title=${shareText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="size-8 rounded-[1.25rem] bg-background-secondary p-1 hover:bg-background-tertiary"
                title="Share on LinkedIn"
              >
                <BiLogoLinkedinSquare className="size-6" />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${shareUrlEncoded}&text=${shareText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="size-8 rounded-[1.25rem] bg-background-secondary p-1 hover:bg-background-tertiary"
                title="Share on Twitter"
              >
                <FaXTwitter className="size-6 p-0.5" />
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrlEncoded}`}
                target="_blank"
                rel="noopener noreferrer"
                className="size-8 rounded-[1.25rem] bg-background-secondary p-1 hover:bg-background-tertiary"
                title="Share on Facebook"
              >
                <BiLogoFacebookCircle className="size-6" />
              </a>
            </div>
          </div>
          <div className="prose mb-12 md:prose-md lg:prose-lg md:mb-16 lg:mb-20">
            <Fragment>
              <div dangerouslySetInnerHTML={{ __html: blogPost.content || blogPost.excerpt }} />
            </Fragment>
          </div>
          <div>
            <div className="mb-8 text-center md:mb-10 lg:mb-12">
              <p className="font-semibold md:text-md">Share this post</p>
              <div className="mb-8 mt-3 flex items-start justify-center gap-2 sm:mb-0 md:mt-4">
                <a
                  href="#"
                  className="size-8 rounded-[1.25rem] bg-background-secondary p-1"
                >
                  <BiLinkAlt className="size-6" />
                </a>
                <a
                  href="#"
                  className="size-8 rounded-[1.25rem] bg-background-secondary p-1"
                >
                  <BiLogoLinkedinSquare className="size-6" />
                </a>
                <a
                  href="#"
                  className="size-8 rounded-[1.25rem] bg-background-secondary p-1"
                >
                  <FaXTwitter className="size-6 p-0.5" />
                </a>
                <a
                  href="#"
                  className="size-8 rounded-[1.25rem] bg-background-secondary p-1"
                >
                  <BiLogoFacebookCircle className="size-6" />
                </a>
              </div>
            </div>
            <div>
              <ul className="flex flex-wrap justify-center gap-2">
                {blogPost.tags && blogPost.tags.map((tag, index) => (
                  <li key={index} className="flex">
                    <span className="bg-background-secondary px-2 py-1 text-sm font-semibold">
                      {tag}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="my-8 h-px bg-border-primary md:my-10 lg:my-12" />
          <div className="flex flex-col items-center gap-4 text-center">
            <div>
              <img
                src={blogPost.authorImage || schoolInfo.logo.src}
                alt={blogPost.author}
                className="size-14 rounded-full object-cover"
              />
            </div>
            <div className="grow">
              <p className="font-semibold md:text-md">{blogPost.author}</p>
              <p>Benchmark School System</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
