"use client";

import React, { useState } from "react";
import { galleryImages, galleryCategories, getGalleryImagesByCategory, getGalleryCategoriesWithCounts } from "../../src/data/content";
import { FaTimes } from "react-icons/fa";
import { OptimizedImage } from "../../src/components/OptimizedImage";

export function GalleryEnhanced() {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const imagesPerPage = 12;

    const filteredImages = getGalleryImagesByCategory(selectedCategory);
    const totalPages = Math.ceil(filteredImages.length / imagesPerPage);
    const currentImages = filteredImages.slice(
        (currentPage - 1) * imagesPerPage,
        currentPage * imagesPerPage
    );
    
    // Get categories with counts
    const categoriesWithCounts = getGalleryCategoriesWithCounts();

    const handleCategoryChange = (categoryId) => {
        setSelectedCategory(categoryId);
        setCurrentPage(1); // Reset to first page when category changes
    };

    const openLightbox = (image) => {
        setSelectedImage(image);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
    };

    const navigateImage = (direction) => {
        const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
        let newIndex;
        
        if (direction === "next") {
            newIndex = (currentIndex + 1) % filteredImages.length;
        } else {
            newIndex = currentIndex - 1;
            if (newIndex < 0) newIndex = filteredImages.length - 1;
        }
        
        setSelectedImage(filteredImages[newIndex]);
    };

    return (
        <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container">
                <div className="mb-12 text-center md:mb-18 lg:mb-20">
                    <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                        Visual stories
                    </h2>
                    <p className="md:text-md">
                        Browse our collection of campus life and student achievements
                    </p>
                </div>

                {/* Category Filter */}
                <div className="mb-8 flex flex-wrap items-center justify-center gap-4 md:mb-12">
                    {categoriesWithCounts.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => handleCategoryChange(category.id)}
                            className={`px-4 py-2 rounded-md font-semibold transition-all ${
                                selectedCategory === category.id
                                    ? "bg-school-blue text-white"
                                    : "bg-background-secondary text-text-primary hover:bg-school-blue hover:text-white"
                            }`}
                        >
                            {category.name} ({category.count})
                        </button>
                    ))}
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-2 items-start justify-center gap-6 md:gap-8 lg:grid-cols-4">
                    {currentImages.map((image) => (
                        <button
                            key={image.id}
                            onClick={() => openLightbox(image)}
                            className="group relative overflow-hidden rounded-lg transition-transform hover:scale-105"
                        >
                            <OptimizedImage
                                src={image.thumbnail || image.src}
                                alt={image.alt}
                                className="size-full object-cover"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
                                <p className="text-sm font-semibold text-white">{image.title}</p>
                            </div>
                        </button>
                    ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="mt-12 flex items-center justify-center gap-2 md:mt-18 lg:mt-20">
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                            disabled={currentPage === 1}
                            className="px-4 py-2 rounded-md border border-border-primary disabled:opacity-50 disabled:cursor-not-allowed hover:bg-school-blue hover:text-white hover:border-school-blue transition-all"
                        >
                            Previous
                        </button>
                        <span className="px-4 py-2 text-text-primary">
                            Page {currentPage} of {totalPages}
                        </span>
                        <button
                            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                            disabled={currentPage === totalPages}
                            className="px-4 py-2 rounded-md border border-border-primary disabled:opacity-50 disabled:cursor-not-allowed hover:bg-school-blue hover:text-white hover:border-school-blue transition-all"
                        >
                            Next
                        </button>
                    </div>
                )}

                {/* Lightbox Modal */}
                {selectedImage && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
                        onClick={closeLightbox}
                    >
                        <button
                            onClick={closeLightbox}
                            className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
                            aria-label="Close lightbox"
                        >
                            <FaTimes className="size-6" />
                        </button>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                navigateImage("prev");
                            }}
                            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
                            aria-label="Previous image"
                        >
                            <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                navigateImage("next");
                            }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
                            aria-label="Next image"
                        >
                            <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                        <div
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-h-[90vh] max-w-[90vw]"
                        >
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                className="max-h-[90vh] max-w-full object-contain rounded-lg"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                                <h3 className="text-xl font-bold text-white mb-2">{selectedImage.title}</h3>
                                <p className="text-white/80 text-sm">{selectedImage.alt}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

