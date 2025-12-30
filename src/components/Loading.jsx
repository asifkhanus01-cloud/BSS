import React from "react";

/**
 * Loading Component - Reusable loading spinner
 * Follows accessibility best practices with ARIA labels
 */
export function Loading({ 
    size = "md", 
    text = "Loading...", 
    fullScreen = false,
    className = "" 
}) {
    const sizeClasses = {
        sm: "size-6",
        md: "size-12",
        lg: "size-16"
    };

    const spinner = (
        <div 
            className={`inline-block ${sizeClasses[size]} animate-spin rounded-full border-4 border-solid border-school-blue border-r-transparent ${className}`}
            role="status"
            aria-label={text}
        >
            <span className="sr-only">{text}</span>
        </div>
    );

    if (fullScreen) {
        return (
            <div 
                className="fixed inset-0 flex flex-col items-center justify-center bg-background-primary z-50"
                role="status"
                aria-live="polite"
                aria-label="Loading page content"
            >
                {spinner}
                {text && (
                    <p className="mt-4 text-text-secondary">{text}</p>
                )}
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center py-8">
            {spinner}
            {text && (
                <p className="mt-4 text-text-secondary">{text}</p>
            )}
        </div>
    );
}

/**
 * Loading Skeleton - For content placeholders
 */
export function LoadingSkeleton({ 
    lines = 3, 
    className = "" 
}) {
    return (
        <div className={`animate-pulse space-y-4 ${className}`} aria-label="Loading content">
            {Array.from({ length: lines }).map((_, index) => (
                <div 
                    key={index}
                    className="h-4 bg-gray-200 rounded w-full"
                    style={{ width: index === lines - 1 ? '75%' : '100%' }}
                />
            ))}
        </div>
    );
}

/**
 * Page Loading Wrapper - Used for code splitting
 */
export function PageLoading() {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background-primary">
            <div className="inline-block size-16 animate-spin rounded-full border-4 border-solid border-school-blue border-r-transparent" role="status" aria-label="Loading page">
                <span className="sr-only">Loading page...</span>
            </div>
            <p className="mt-4 text-text-secondary">Loading page...</p>
        </div>
    );
}

