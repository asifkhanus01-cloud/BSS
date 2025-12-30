"use client";

import { Button } from "@relume_io/relume-ui";
import React, { useState } from "react";
import { RxChevronRight } from "react-icons/rx";
import { Link } from "react-router-dom";
import {
    events,
    eventTypes,
    getUpcomingEvents,
    getPastEvents,
    getFeaturedEvents
} from "../../src/data/content";

export function EventEnhanced() {
    const [selectedType, setSelectedType] = useState("all");
    const [sortBy, setSortBy] = useState("date"); // date, title
    const [filterBy, setFilterBy] = useState("all"); // all, upcoming, past, featured

    // Filter events
    let filteredEvents = events;
    
    if (filterBy === "upcoming") {
        filteredEvents = getUpcomingEvents();
    } else if (filterBy === "past") {
        filteredEvents = getPastEvents();
    } else if (filterBy === "featured") {
        filteredEvents = getFeaturedEvents();
    }

    if (selectedType !== "all") {
        filteredEvents = filteredEvents.filter(event => event.type === selectedType);
    }

    // Sort events
    filteredEvents = [...filteredEvents].sort((a, b) => {
        if (sortBy === "date") {
            return new Date(a.date) - new Date(b.date);
        } else if (sortBy === "title") {
            return a.title.localeCompare(b.title);
        }
        return 0;
    });

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    };

    const getDateParts = (dateString) => {
        const date = new Date(dateString);
        return {
            day: date.getDate().toString().padStart(2, '0'),
            month: date.toLocaleDateString('en-US', { month: 'short' }),
            year: date.getFullYear(),
            weekday: date.toLocaleDateString('en-US', { weekday: 'short' })
        };
    };

    return (
        <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container">
                <div className="mb-12 md:mb-18 lg:mb-20">
                    <div className="mx-auto max-w-lg text-center">
                        <h4 className="font-semibold">Schedule</h4>
                        <h1 className="mt-3 text-5xl font-bold md:mt-4 md:text-7xl lg:text-8xl">
                            Calendar
                        </h1>
                        <p className="mt-5 text-base md:mt-6 md:text-md">
                            Navigate through our academic year month by month.
                        </p>
                    </div>
                </div>

                {/* Filters and Sorting */}
                <div className="mb-8 flex flex-wrap items-center justify-center gap-4 md:mb-12">
                    {/* Filter by status */}
                    <div className="flex gap-2">
                        <button
                            onClick={() => setFilterBy("all")}
                            className={`px-4 py-2 rounded-md font-semibold transition-all ${
                                filterBy === "all"
                                    ? "bg-school-blue text-white"
                                    : "bg-background-secondary text-text-primary hover:bg-school-blue hover:text-white"
                            }`}
                        >
                            All Events
                        </button>
                        <button
                            onClick={() => setFilterBy("upcoming")}
                            className={`px-4 py-2 rounded-md font-semibold transition-all ${
                                filterBy === "upcoming"
                                    ? "bg-school-blue text-white"
                                    : "bg-background-secondary text-text-primary hover:bg-school-blue hover:text-white"
                            }`}
                        >
                            Upcoming
                        </button>
                        <button
                            onClick={() => setFilterBy("past")}
                            className={`px-4 py-2 rounded-md font-semibold transition-all ${
                                filterBy === "past"
                                    ? "bg-school-blue text-white"
                                    : "bg-background-secondary text-text-primary hover:bg-school-blue hover:text-white"
                            }`}
                        >
                            Past
                        </button>
                        <button
                            onClick={() => setFilterBy("featured")}
                            className={`px-4 py-2 rounded-md font-semibold transition-all ${
                                filterBy === "featured"
                                    ? "bg-school-blue text-white"
                                    : "bg-background-secondary text-text-primary hover:bg-school-blue hover:text-white"
                            }`}
                        >
                            Featured
                        </button>
                    </div>

                    {/* Filter by type */}
                    <select
                        value={selectedType}
                        onChange={(e) => setSelectedType(e.target.value)}
                        className="px-4 py-2 rounded-md border border-border-primary bg-background-primary"
                    >
                        {eventTypes.map((type) => (
                            <option key={type.id} value={type.id}>
                                {type.name}
                            </option>
                        ))}
                    </select>

                    {/* Sort by */}
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="px-4 py-2 rounded-md border border-border-primary bg-background-primary"
                    >
                        <option value="date">Sort by Date</option>
                        <option value="title">Sort by Title</option>
                    </select>
                </div>

                {/* Events Grid */}
                <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
                    {filteredEvents.map((event) => {
                        const dateParts = getDateParts(event.date);
                        return (
                            <div key={event.id} className="flex flex-col items-start">
                                <Link
                                    to={`/events/${event.slug}`}
                                    className="relative mb-5 block aspect-[3/2] w-full md:mb-6 group"
                                >
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="absolute size-full object-cover transition-transform group-hover:scale-105"
                                    />
                                    <div className="absolute right-4 top-4 flex min-w-28 flex-col items-center bg-background-primary px-1 py-3 text-sm">
                                        <span>{dateParts.weekday}</span>
                                        <span className="text-2xl font-bold md:text-3xl lg:text-4xl">
                                            {dateParts.day}
                                        </span>
                                        <span>{dateParts.month} {dateParts.year}</span>
                                    </div>
                                </Link>
                                <span className={`mb-3 px-2 py-1 text-sm font-semibold md:mb-4 ${
                                    event.category === "academics" ? "bg-background-secondary" :
                                    event.category === "sports" ? "bg-school-green/20 text-school-green" :
                                    "bg-school-red/20 text-school-red"
                                }`}>
                                    {event.category === "academics" ? "Academic" :
                                     event.category === "sports" ? "Sports" :
                                     event.category === "celebration" ? "Celebration" : "Activity"}
                                </span>
                                <Link to={`/events/${event.slug}`}>
                                    <h2 className="text-xl font-bold md:text-2xl hover:text-school-blue transition-colors">
                                        {event.title}
                                    </h2>
                                </Link>
                                <p className="mb-2">{event.location}</p>
                                <p className="mb-4">{event.description}</p>
                                <Link to={`/events/${event.slug}`}>
                                    <Button
                                        title="View event"
                                        variant="link"
                                        size="link"
                                        iconRight={<RxChevronRight />}
                                        className="mt-5 md:mt-6"
                                    >
                                        View event
                                    </Button>
                                </Link>
                            </div>
                        );
                    })}
                </div>

                {filteredEvents.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-text-secondary text-lg">No events found matching your filters.</p>
                    </div>
                )}
            </div>
        </section>
    );
}

