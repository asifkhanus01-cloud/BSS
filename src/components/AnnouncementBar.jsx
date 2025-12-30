"use client";

import React from "react";
import clsx from "clsx";

export const AnnouncementBar = (props) => {
    const headings = [
        "Admissions Open 2026-27",
        "Enroll Now for a Bright Future",
        "Scholarships Available for Top Performers",
        "Admissions Open 2026-27",
        "Enroll Now for a Bright Future"
    ];

    return (
        <section
            id="announcement-bar"
            className="flex w-full overflow-hidden border-b border-border-primary bg-school-red text-white"
            style={{ backgroundColor: '#9B111E', color: '#ffffff' }}
        >
            <div className="flex w-[200%]">
                {Array(2)
                    .fill(0)
                    .map((_, index) => (
                        <div
                            key={index}
                            className="flex w-1/2 animate-marquee-left items-center justify-around py-3"
                        >
                            {headings.map((heading, headingIndex) => (
                                <div
                                    key={headingIndex}
                                    className={clsx(
                                        "items-center justify-center px-4 whitespace-nowrap",
                                    )}
                                >
                                    <h1 className="text-sm font-bold md:text-base">{heading}</h1>
                                </div>
                            ))}
                        </div>
                    ))}
            </div>
        </section>
    );
};
