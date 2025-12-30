import React from "react";
import { useLocation } from "react-router-dom";
import { schoolInfo } from "../data/schoolInfo";
import { env } from "../utils/env";

/**
 * SEO Component - Handles all meta tags, Open Graph, Twitter Cards, and JSON-LD
 * Follows full-stack developer best practices for SEO
 */
export default function SEO({ 
    title, 
    description, 
    image, 
    type = "website",
    keywords = "school, education, Peshawar, Pakistan, academic excellence, benchmark school"
}) {
    const location = useLocation();
    const baseUrl = env.APP_URL || (typeof window !== 'undefined' ? window.location.origin : 'https://benchmark.edu.pk');
    const currentUrl = `${baseUrl}${location.pathname}`;
    const siteName = env.SITE_NAME || schoolInfo.name;
    const defaultTitle = `${siteName} | ${schoolInfo.tagline}`;
    const defaultDescription = env.SITE_DESCRIPTION || "Welcome to Benchmark School System (Peshawar). We provide world-class education focused on academic excellence, character building, and leadership development.";
    const defaultImage = `${baseUrl}${schoolInfo.logo.src}`;
    const siteKeywords = env.SITE_KEYWORDS || keywords;
    
    const pageTitle = title ? `${title} | ${siteName}` : defaultTitle;
    const pageDescription = description || defaultDescription;
    const pageImage = image || defaultImage;

    // JSON-LD Structured Data
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": siteName,
        "description": pageDescription,
        "url": baseUrl,
        "logo": `${baseUrl}${schoolInfo.logo.src}`,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": schoolInfo.contact.address,
            "addressLocality": "Peshawar",
            "addressRegion": "Khyber Pakhtunkhwa",
            "addressCountry": "PK"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": schoolInfo.contact.phone,
            "contactType": "General Inquiry",
            "email": schoolInfo.contact.email
        },
        "sameAs": [
            schoolInfo.social.facebook,
            schoolInfo.social.instagram,
            schoolInfo.social.twitter,
            schoolInfo.social.youtube,
            schoolInfo.social.linkedin
        ]
    };

    return (
        <>
            {/* Primary Meta Tags */}
            <title>{pageTitle}</title>
            <meta name="description" content={pageDescription} />
            <meta name="keywords" content={siteKeywords} />
            <meta name="author" content={siteName} />
            <link rel="canonical" href={currentUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={pageDescription} />
            <meta property="og:image" content={pageImage} />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:locale" content="en_US" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={currentUrl} />
            <meta name="twitter:title" content={pageTitle} />
            <meta name="twitter:description" content={pageDescription} />
            <meta name="twitter:image" content={pageImage} />

            {/* Additional SEO Meta Tags */}
            <meta name="robots" content="index, follow" />
            <meta name="googlebot" content="index, follow" />
            <meta name="theme-color" content="#111184" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
            <meta name="apple-mobile-web-app-title" content={siteName} />

            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
        </>
    );
}

