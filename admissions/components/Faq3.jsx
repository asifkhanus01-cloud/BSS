"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from "@relume_io/relume-ui";
import React from "react";

export function Faq3() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[.75fr,1fr] lg:gap-x-20">
        <div>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Questions
          </h2>
          <p className="md:text-md">
            Find answers to common questions about admissions, fees, and
            enrollment at Benchmark.
          </p>
          <div className="mt-6 md:mt-8">
            <Button title="Ask us" variant="secondary">
              Ask us
            </Button>
          </div>
        </div>
        <Accordion type="multiple">
          <AccordionItem value="item-0">
            <AccordionTrigger className="md:py-5 md:text-md">
              When does enrollment open?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Admissions for the next academic year typically open in January.
              We accept applications throughout the year based on seat
              availability. Contact our admissions office for current intake
              schedules.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger className="md:py-5 md:text-md">
              Is the entrance test mandatory?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Yes, all applicants must complete our entrance examination to
              assess academic readiness and proper grade placement. The test
              covers mathematics, English, and reasoning. Results help us
              understand your child's strengths.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="md:py-5 md:text-md">
              Can transfer students apply mid-year?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Transfer admissions are considered based on available seats and
              academic standing. We require a character certificate from your
              previous school. Contact us to discuss your specific situation.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="md:py-5 md:text-md">
              What payment options do you offer?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              We accept monthly and annual payment plans for tuition fees.
              Annual payments offer savings compared to monthly installments.
              Bank transfers and cash payments are both welcome.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="md:py-5 md:text-md">
              Are scholarships available?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Merit-based scholarships are awarded to exceptional students
              demonstrating academic excellence and leadership potential.
              Financial assistance programs may be available for qualifying
              families. Speak with our admissions team about eligibility.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
