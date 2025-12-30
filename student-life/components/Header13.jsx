"use client";

import {
  Button,
  Dialog,
  DialogContent,
  DialogTrigger,
  VideoIframe,
} from "@relume_io/relume-ui";
import React from "react";
import { FaCirclePlay } from "react-icons/fa6";

export function Header13() {
  return (
    <section id="relume" className="flex h-svh min-h-svh flex-col">
      <div className="relative flex-1">
        <Dialog>
          <DialogTrigger className="absolute inset-0 flex size-full items-center justify-center object-cover">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-video-thumbnail.svg"
              alt="Relume placeholder image"
              className="size-full object-cover"
            />
            <span className="absolute inset-0 z-10 bg-black/50" />
            <FaCirclePlay className="absolute z-20 size-16 text-white" />
          </DialogTrigger>
          <DialogContent>
            <VideoIframe video="https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW" />
          </DialogContent>
        </Dialog>
      </div>
      <div className="px-[5%]">
        <div className="container">
          <div className="grid grid-rows-1 items-start gap-y-5 py-12 md:grid-cols-2 md:gap-x-12 md:gap-y-8 md:py-18 lg:gap-x-20 lg:gap-y-16 lg:py-20">
            <div>
              <h1 className="text-6xl font-bold text-text-primary md:text-9xl lg:text-10xl">
                Life at Benchmark School System
              </h1>
            </div>
            <div>
              <p className="text-base text-text-primary md:text-md">
                Experience a world of opportunity, creativity, and friendship
                beyond the classroom. Here, students discover their passions,
                build lasting connections, and develop the character that
                defines true leaders.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                <Button title="Explore Sports">Explore Sports</Button>
                <Button title="View Clubs" variant="secondary">
                  View Clubs
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
