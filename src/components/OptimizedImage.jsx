/**
 * Optimized Image Component
 * Provides lazy loading, error handling, and responsive images
 */
import React, { useState, useRef, useEffect } from 'react';
import { getLazyImageProps, observeElement } from '../utils/imageOptimization';

export function OptimizedImage({
    src,
    alt,
    className = '',
    loading = 'lazy',
    width,
    height,
    sizes,
    onLoad,
    onError,
    placeholder = '/images/placeholder.jpg',
    ...props
}) {
    const [imageSrc, setImageSrc] = useState(placeholder);
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);
    const imgRef = useRef(null);

    useEffect(() => {
        if (loading === 'lazy' && imgRef.current) {
            const cleanup = observeElement(
                imgRef.current,
                (element) => {
                    setImageSrc(src);
                },
                { rootMargin: '50px' }
            );
            return cleanup;
        } else {
            setImageSrc(src);
        }
    }, [src, loading]);

    const handleLoad = (e) => {
        setIsLoaded(true);
        if (onLoad) onLoad(e);
    };

    const handleError = (e) => {
        setHasError(true);
        setImageSrc(placeholder);
        if (onError) onError(e);
    };

    const imageProps = getLazyImageProps(src, alt, {
        loading,
        className: `${className} ${isLoaded ? 'opacity-100' : 'opacity-0'}`,
        sizes
    });

    return (
        <img
            ref={imgRef}
            src={imageSrc}
            alt={alt}
            width={width}
            height={height}
            className={imageProps.className}
            loading={loading}
            decoding="async"
            onLoad={handleLoad}
            onError={handleError}
            style={{
                transition: 'opacity 0.3s ease-in-out',
                ...props.style
            }}
            {...props}
        />
    );
}

