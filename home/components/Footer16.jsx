"use client";

import { Button, Input } from "@relume_io/relume-ui";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { schoolInfo } from "../../src/data/schoolInfo";

const useForm = () => {
  const [email, setEmail] = useState("");
  const handleSetEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email });
  };
  return {
    email,
    handleSetEmail,
    handleSubmit,
  };
};

export function Footer16() {
  const formState = useForm();
  return (
    // Final branding: Ruby Red background with white text
    <footer id="relume" className="px-[5%] py-12 md:py-18 lg:py-20 bg-school-red text-white">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-[8vw] gap-y-12 pb-8 md:gap-y-16 md:pb-10 lg:grid-cols-[0.75fr_1fr] lg:gap-y-4 lg:pb-12">
          <div className="flex flex-col">
            <Link to="/" className="mb-5 md:mb-6">
              <img
                src="/images/white-logo.jpg"
                alt="Logo image"
                className="inline-block h-12 w-auto object-contain"
              />
            </Link>
            <p className="mb-5 md:mb-6 text-gray-100">
              Stay informed about school news and updates.
            </p>
            <div className="w-full max-w-md">
              <form
                className="mb-3 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-[1fr_max-content] md:gap-y-4"
                onSubmit={formState.handleSubmit}
              >
                <Input
                  id="email"
                  type="email"
                  placeholder="Your email address"
                  value={formState.email}
                  onChange={formState.handleSetEmail}
                  className="bg-white text-text-primary"
                />
                {/* CHANGE 2: Button changed to Blue so it pops against the Red background */}
                <Button
                  title="Subscribe"
                  className="bg-school-blue border-school-blue text-white hover:bg-school-blue-dark"
                  size="sm"
                >
                  Subscribe
                </Button>
              </form>
              <p className="text-xs text-gray-200">
                We respect your privacy and only send relevant updates.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-y-10 sm:grid-cols-3 sm:gap-x-6 md:gap-x-8 md:gap-y-4">
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-3 font-semibold md:mb-4 text-white">About us</h2>
              <ul className="flex flex-col items-start text-gray-100">
                <li className="py-2 text-sm hover:text-white hover:underline">
                  <Link to="/about-us" className="flex items-center gap-3">
                    <span>About Us</span>
                  </Link>
                </li>
                <li className="py-2 text-sm hover:text-white hover:underline">
                  <Link to="/academics" className="flex items-center gap-3">
                    <span>Academics</span>
                  </Link>
                </li>
                <li className="py-2 text-sm hover:text-white hover:underline">
                  <Link to="/staff" className="flex items-center gap-3">
                    <span>Staff</span>
                  </Link>
                </li>
                <li className="py-2 text-sm hover:text-white hover:underline">
                  <Link to="/faq" className="flex items-center gap-3">
                    <span>FAQ</span>
                  </Link>
                </li>
                <li className="py-2 text-sm hover:text-white hover:underline">
                  <Link to="/blog" className="flex items-center gap-3">
                    <span>Blog</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-3 font-semibold md:mb-4 text-white">Gallery</h2>
              <ul className="flex flex-col items-start text-gray-100">
                <li className="py-2 text-sm hover:text-white hover:underline">
                  <Link to="/contact-us" className="flex items-center gap-3">
                    <span>Contact Us</span>
                  </Link>
                </li>
                <li className="py-2 text-sm hover:text-white hover:underline">
                  <Link to="/admissions" className="flex items-center gap-3">
                    <span>Admissions</span>
                  </Link>
                </li>
                <li className="py-2 text-sm hover:text-white hover:underline">
                  <Link to="/gallery" className="flex items-center gap-3">
                    <span>Gallery</span>
                  </Link>
                </li>
                <li className="py-2 text-sm hover:text-white hover:underline">
                  <Link to="/careers" className="flex items-center gap-3">
                    <span>Careers</span>
                  </Link>
                </li>
                <li className="py-2 text-sm hover:text-white hover:underline">
                  <a 
                    href={`https://wa.me/${schoolInfo.contact.phone.replace(/\s+/g, "").replace("+", "")}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-3"
                  >
                    <span>WhatsApp</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-3 font-semibold md:mb-4 text-white">Social</h2>
              <ul className="flex flex-col items-start text-gray-100">
                <li className="py-2 text-sm hover:text-white hover:underline">
                  <a href={schoolInfo.social.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                    <BiLogoFacebookCircle className="size-6" />
                    <span>Facebook</span>
                  </a>
                </li>
                <li className="py-2 text-sm hover:text-white hover:underline">
                  <a href={schoolInfo.social.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                    <BiLogoInstagram className="size-6" />
                    <span>Instagram</span>
                  </a>
                </li>
                <li className="py-2 text-sm hover:text-white hover:underline">
                  <a href={schoolInfo.social.twitter} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                    <FaXTwitter className="size-6 p-0.5" />
                    <span>Twitter</span>
                  </a>
                </li>
                <li className="py-2 text-sm hover:text-white hover:underline">
                  <a href={schoolInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                    <BiLogoLinkedinSquare className="size-6" />
                    <span>LinkedIn</span>
                  </a>
                </li>
                <li className="py-2 text-sm hover:text-white hover:underline">
                  <a href={schoolInfo.social.youtube} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                    <BiLogoYoutube className="size-6" />
                    <span>YouTube</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pb-8 md:pb-10 lg:pb-12">
          <Link to="/">
            <h1 className="text-[clamp(4rem,15vw,15rem)] font-bold leading-none text-white">
              Benchmark
            </h1>
          </Link>
        </div>
        <div className="h-px w-full bg-white/20" />
        <div className="flex flex-col-reverse items-start justify-between pb-4 pt-6 text-sm md:flex-row md:items-center md:pb-0 md:pt-8 text-gray-200">
          <p className="mt-6 md:mt-0">
            © 2025 Benchmark School System. All rights reserved.
          </p>
          <ul className="grid grid-flow-row grid-cols-[max-content] justify-center gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0">
            <li className="underline hover:text-white">
              <a href="#">Terms of Service</a>
            </li>
            <li className="underline hover:text-white">
              <a href="#">Cookies Settings</a>
            </li>
            <li className="underline hover:text-white">
              <a href="#">Privacy policy</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}