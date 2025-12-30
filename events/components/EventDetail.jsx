"use client";

import React from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@relume_io/relume-ui";
import { RxChevronRight, RxChevronLeft } from "react-icons/rx";
import { getEventBySlug, events } from "../../src/data/content";

export function EventDetail() {
    const { slug } = useParams();
    const event = getEventBySlug(slug);

    if (!event) {
        return (
            <section className="px-[5%] py-16 md:py-24 lg:py-28">
                <div className="container text-center">
                    <h1 className="mb-4 text-4xl font-bold">Event Not Found</h1>
                    <p className="mb-8 text-text-secondary">The event you're looking for doesn't exist.</p>
                    <Link to="/events">
                        <Button variant="secondary">Back to Events</Button>
                    </Link>
                </div>
            </section>
        );
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const getDateParts = (dateString) => {
        const date = new Date(dateString);
        return {
            day: date.getDate().toString().padStart(2, '0'),
            month: date.toLocaleDateString('en-US', { month: 'short' }),
            year: date.getFullYear(),
            weekday: date.toLocaleDateString('en-US', { weekday: 'long' })
        };
    };

    const dateParts = getDateParts(event.date);

    // Find next and previous events
    const currentIndex = events.findIndex(e => e.id === event.id);
    const nextEvent = events[currentIndex + 1] || events[0];
    const prevEvent = events[currentIndex - 1] || events[events.length - 1];

    return (
        <section className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container max-w-4xl">
                {/* Back Button */}
                <Link to="/events" className="mb-8 inline-flex items-center text-school-blue hover:text-school-blue-dark">
                    <RxChevronLeft className="mr-2" />
                    Back to Events
                </Link>

                {/* Event Header */}
                <div className="mb-8">
                    <span className={`mb-4 inline-block px-3 py-1 text-sm font-semibold ${
                        event.category === "academics" ? "bg-background-secondary" :
                        event.category === "sports" ? "bg-school-green/20 text-school-green" :
                        "bg-school-red/20 text-school-red"
                    }`}>
                        {event.category === "academics" ? "Academic" :
                         event.category === "sports" ? "Sports" :
                         event.category === "celebration" ? "Celebration" : "Activity"}
                    </span>
                    <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">{event.title}</h1>
                    <div className="flex flex-wrap items-center gap-6 text-text-secondary">
                        <div className="flex items-center">
                            <svg className="mr-2 size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span>{formatDate(event.date)}</span>
                        </div>
                        {event.time && (
                            <div className="flex items-center">
                                <svg className="mr-2 size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>{event.time}</span>
                            </div>
                        )}
                        <div className="flex items-center">
                            <svg className="mr-2 size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span>{event.location}</span>
                        </div>
                    </div>
                </div>

                {/* Event Image */}
                <div className="mb-8 overflow-hidden rounded-lg">
                    <img
                        src={event.image}
                        alt={event.title}
                        className="w-full object-cover"
                    />
                </div>

                {/* Event Description */}
                <div className="mb-12">
                    <h2 className="mb-4 text-2xl font-bold">About This Event</h2>
                    <div className="prose max-w-none">
                        <p className="mb-4 text-lg leading-relaxed text-text-primary">
                            {event.fullDescription || event.description}
                        </p>
                    </div>
                </div>

                {/* Event Details Card */}
                <div className="mb-12 rounded-lg border border-border-primary bg-background-secondary p-6 md:p-8">
                    <h3 className="mb-4 text-xl font-bold">Event Details</h3>
                    <div className="space-y-3">
                        <div className="flex items-start">
                            <span className="mr-4 font-semibold min-w-[100px]">Date:</span>
                            <span>{formatDate(event.date)}</span>
                        </div>
                        {event.time && (
                            <div className="flex items-start">
                                <span className="mr-4 font-semibold min-w-[100px]">Time:</span>
                                <span>{event.time}</span>
                            </div>
                        )}
                        <div className="flex items-start">
                            <span className="mr-4 font-semibold min-w-[100px]">Location:</span>
                            <span>{event.location}</span>
                        </div>
                        <div className="flex items-start">
                            <span className="mr-4 font-semibold min-w-[100px]">Category:</span>
                            <span className="capitalize">{event.category}</span>
                        </div>
                    </div>
                </div>

                {/* Navigation to Next/Previous Events */}
                <div className="flex flex-col gap-4 border-t border-border-primary pt-8 md:flex-row md:justify-between">
                    {prevEvent && (
                        <Link
                            to={`/events/${prevEvent.slug}`}
                            className="flex items-center text-school-blue hover:text-school-blue-dark"
                        >
                            <RxChevronLeft className="mr-2" />
                            <div>
                                <p className="text-sm text-text-secondary">Previous Event</p>
                                <p className="font-semibold">{prevEvent.title}</p>
                            </div>
                        </Link>
                    )}
                    {nextEvent && (
                        <Link
                            to={`/events/${nextEvent.slug}`}
                            className="flex items-center text-school-blue hover:text-school-blue-dark md:ml-auto"
                        >
                            <div className="text-right">
                                <p className="text-sm text-text-secondary">Next Event</p>
                                <p className="font-semibold">{nextEvent.title}</p>
                            </div>
                            <RxChevronRight className="ml-2" />
                        </Link>
                    )}
                </div>
            </div>
        </section>
    );
}

