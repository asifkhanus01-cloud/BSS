import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Navbar1 } from "../../home/components/Navbar1";
import { Footer16 } from "../../home/components/Footer16";
import { ScrollToTop } from "./ScrollToTop";
import { AnnouncementBar } from "./AnnouncementBar";
import { WhatsAppChatbot } from "./WhatsAppChatbot";
import SEO from "./SEO";

// SEO configuration for different pages
const seoConfig = {
    "/": {
        title: "Home",
        description: "Welcome to Benchmark School System (Peshawar). We provide world-class education focused on academic excellence, character building, and leadership development.",
    },
    "/about-us": {
        title: "About Us",
        description: "Learn about Benchmark School System's mission, values, and commitment to academic excellence and character development in Peshawar.",
    },
    "/academics": {
        title: "Academics",
        description: "Explore our comprehensive academic programs from Montessori to Matriculation, designed to prepare students for success.",
    },
    "/admissions": {
        title: "Admissions",
        description: "Join Benchmark School System. Learn about our admission process, requirements, and how to enroll your child.",
    },
    "/contact-us": {
        title: "Contact Us",
        description: "Get in touch with Benchmark School System. Find our contact information, campus locations, and office hours.",
    },
    "/gallery": {
        title: "Gallery",
        description: "View photos from Benchmark School System events, activities, and campus life.",
    },
    "/staff": {
        title: "Our Staff",
        description: "Meet the dedicated faculty and staff members of Benchmark School System.",
    },
    "/faq": {
        title: "Frequently Asked Questions",
        description: "Find answers to common questions about Benchmark School System admissions, programs, and policies.",
    },
    "/blog": {
        title: "Blog",
        description: "Read the latest news, articles, and updates from Benchmark School System.",
    },
    "/events": {
        title: "Events",
        description: "Stay updated with upcoming events and activities at Benchmark School System.",
    },
    "/student-life": {
        title: "Student Life",
        description: "Discover the vibrant student life, extracurricular activities, and opportunities at Benchmark School System.",
    },
    "/careers": {
        title: "Careers",
        description: "Join our team! Explore career opportunities at Benchmark School System.",
    },
};

export default function Layout() {
    const location = useLocation();
    const currentSeo = seoConfig[location.pathname] || {
        title: "Benchmark School System",
        description: "Welcome to Benchmark School System (Peshawar). We provide world-class education focused on academic excellence, character building, and leadership development.",
    };

    return (
        <>
            <SEO 
                title={currentSeo.title}
                description={currentSeo.description}
            />
            <div className="flex flex-col min-h-screen">
                <ScrollToTop />
                <AnnouncementBar />
                <Navbar1 />
                <main className="flex-grow" role="main" aria-label="Main content">
                    <Outlet />
                </main>
                <Footer16 />
                <WhatsAppChatbot />
            </div>
        </>
    );
}
