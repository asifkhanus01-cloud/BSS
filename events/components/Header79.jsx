"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

const imageColumns = [
    { className: "-mt-[20%] animate-loop-vertically-top" },
    { className: "-mt-[50%] animate-loop-vertically-bottom" },
    { className: "animate-loop-vertically-top" },
    { className: "mt-[-30%] animate-loop-vertically-bottom" },
    { className: "mt-[-20%] animate-loop-vertically-top" },
];

export const Header79 = (props) => {
    const { heading, description, buttons, imagesPartOne, imagesPartTwo } = {
        ...Header79Defaults,
        ...props,
    };
    return (
        <section id="relume" className="relative px-[5%]">
            <div className="flex max-h-[60rem] min-h-svh items-center">
                <div className="container py-16 md:py-24 lg:py-28">
                    <div className="relative z-10 mx-auto max-w-lg text-center">
                        <h1 className="mb-5 text-6xl font-bold text-neutral-light md:mb-6 md:text-9xl lg:text-10xl text-white">
                            {heading}
                        </h1>
                        <p className="text-neutral-light md:text-md text-white">{description}</p>
                        <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
                            {buttons.map((button, index) => (
                                <Button key={index} {...button}>
                                    {button.title}
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <div className="absolute inset-0 z-10 bg-black/50" />
                    <div className="grid w-full grid-cols-2 gap-x-4 px-4 md:grid-cols-3 lg:grid-cols-5">
                        {imageColumns.map((column, index) => (
                            <AnimatedImageColumn
                                key={index}
                                imagesPartOne={imagesPartOne}
                                imagesPartTwo={imagesPartTwo}
                                className={column.className}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const ImageGrid = ({ images }) => (
    <React.Fragment>
        {images.map((image, index) => (
            <div key={index} className="grid size-full grid-cols-1 gap-4">
                <div className="relative w-full pt-[120%]">
                    <img
                        className="absolute inset-0 size-full object-cover"
                        src={image.src}
                        alt={image.alt}
                    />
                </div>
            </div>
        ))}
    </React.Fragment>
);

const AnimatedImageColumn = ({
    imagesPartOne,
    imagesPartTwo,
    className,
}) => (
    <div className={`grid size-full columns-2 grid-cols-1 gap-4 self-center ${className}`}>
        <ImageGrid images={imagesPartOne} />
        <ImageGrid images={imagesPartTwo} />
    </div>
);

export const Header79Defaults = {
    heading: "School calendar and events",
    description:
        "Stay up to date with our academic and co-curricular schedule. Plan ahead and never miss an important milestone in your child's educational journey.",
    buttons: [
        { title: "Explore", variant: "secondary" },
        { title: "Contact", variant: "secondary-alt" }
    ],
    imagesPartOne: [
        {
            src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
            alt: "Relume placeholder image 1",
        },
        {
            src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
            alt: "Relume placeholder image 2",
        },
        {
            src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
            alt: "Relume placeholder image 3",
        },
        {
            src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
            alt: "Relume placeholder image 4",
        },
    ],
    imagesPartTwo: [
        {
            src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
            alt: "Relume placeholder image 5",
        },
        {
            src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
            alt: "Relume placeholder image 6",
        },
        {
            src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
            alt: "Relume placeholder image 7",
        },
        {
            src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
            alt: "Relume placeholder image 8",
        },
    ],
};
