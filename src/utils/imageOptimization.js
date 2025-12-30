/**
 * Image Optimization Utilities
 * Provides lazy loading, responsive images, and optimization helpers
 */

/**
 * Generate responsive image srcset
 * @param {string} basePath - Base image path
 * @param {Array<number>} widths - Array of widths (e.g., [400, 800, 1200])
 * @returns {string} srcset string
 */
export const generateSrcSet = (basePath, widths = [400, 800, 1200]) => {
    return widths.map(width => `${basePath}?w=${width} ${width}w`).join(', ');
};

/**
 * Get optimized image URL (for future CDN integration)
 * @param {string} imagePath - Original image path
 * @param {Object} options - Optimization options
 * @returns {string} Optimized image URL
 */
export const getOptimizedImageUrl = (imagePath, options = {}) => {
    const { width, quality = 80, format = 'webp' } = options;
    
    // For now, return original path
    // In production, this would integrate with image CDN/optimization service
    if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
        return imagePath;
    }
    
    // Future: Add CDN URL transformation
    // return `${CDN_BASE_URL}${imagePath}?w=${width}&q=${quality}&f=${format}`;
    return imagePath;
};

/**
 * Lazy Image Component Props Generator
 * @param {string} src - Image source
 * @param {string} alt - Alt text
 * @param {Object} options - Additional options
 * @returns {Object} Props for img element
 */
export const getLazyImageProps = (src, alt, options = {}) => {
    const {
        loading = 'lazy',
        decoding = 'async',
        className = '',
        sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
    } = options;

    return {
        src,
        alt,
        loading,
        decoding,
        className: `${className} transition-opacity duration-300`,
        sizes,
        onError: (e) => {
            // Fallback to placeholder on error
            e.target.src = '/images/placeholder.jpg';
        }
    };
};

/**
 * Preload critical images
 * @param {Array<string>} imagePaths - Array of image paths to preload
 */
export const preloadImages = (imagePaths) => {
    if (typeof window === 'undefined') return;
    
    imagePaths.forEach(path => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = path;
        document.head.appendChild(link);
    });
};

/**
 * Check if image is in viewport (for advanced lazy loading)
 * @param {HTMLElement} element - Image element
 * @returns {boolean} True if in viewport
 */
export const isInViewport = (element) => {
    if (!element) return false;
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

/**
 * Intersection Observer for lazy loading
 * @param {HTMLElement} element - Element to observe
 * @param {Function} callback - Callback when element enters viewport
 * @param {Object} options - IntersectionObserver options
 */
export const observeElement = (element, callback, options = {}) => {
    if (typeof window === 'undefined' || !window.IntersectionObserver) {
        // Fallback for browsers without IntersectionObserver
        callback();
        return;
    }

    const defaultOptions = {
        root: null,
        rootMargin: '50px',
        threshold: 0.01,
        ...options
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                callback(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, defaultOptions);

    if (element) {
        observer.observe(element);
    }

    return () => observer.disconnect();
};

