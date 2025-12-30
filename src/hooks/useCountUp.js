import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook for animating numbers from 0 to target value
 * Triggers when element comes into view using Intersection Observer
 * @param {number|string} targetValue - The target number or string (e.g., "100%", "50+", "1000+")
 * @param {number} duration - Animation duration in milliseconds (default: 2000)
 * @param {number} delay - Delay before animation starts in milliseconds (default: 0)
 * @returns {object} - { value: string, ref: React.RefObject } - The animated value and ref to attach to element
 */
export function useCountUp(targetValue, duration = 2000, delay = 0) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const startTimeRef = useRef(null);
  const animationFrameRef = useRef(null);
  const observerRef = useRef(null);
  const elementRef = useRef(null);
  const hasBeenVisibleRef = useRef(false);
  const lastCountRef = useRef(0);

  // Parse the target value to extract number and suffix
  const parseValue = (value) => {
    if (typeof value === 'number') {
      return { number: value, suffix: '', isPercentage: false };
    }
    
    const str = String(value);
    const percentageMatch = str.match(/^(\d+(?:\.\d+)?)%$/);
    if (percentageMatch) {
      return { number: parseFloat(percentageMatch[1]), suffix: '%', isPercentage: true };
    }
    
    const plusMatch = str.match(/^(\d+(?:\.\d+)?)\+$/);
    if (plusMatch) {
      return { number: parseFloat(plusMatch[1]), suffix: '+', isPercentage: false };
    }
    
    const yearsMatch = str.match(/^(\d+(?:\.\d+)?)\s*Years?$/i);
    if (yearsMatch) {
      return { number: parseFloat(yearsMatch[1]), suffix: ' Years', isPercentage: false };
    }
    
    // Try to extract just the number
    const numberMatch = str.match(/(\d+(?:\.\d+)?)/);
    if (numberMatch) {
      const number = parseFloat(numberMatch[1]);
      const suffix = str.replace(numberMatch[1], '').trim();
      return { number, suffix, isPercentage: false };
    }
    
    return { number: 0, suffix: str, isPercentage: false };
  };

  const { number: targetNumber, suffix, isPercentage } = parseValue(targetValue);

  // Reset state when targetValue changes
  useEffect(() => {
    setCount(0);
    setHasStarted(false);
    hasBeenVisibleRef.current = false;
    startTimeRef.current = null;
    lastCountRef.current = 0;
  }, [targetValue]);

  // Intersection Observer to detect when element is visible
  useEffect(() => {
    const element = elementRef.current;
    let timeoutId = null;
    
    if (!element || hasBeenVisibleRef.current) {
      // If already visible, don't set up observer again
      return;
    }

    // Set up Intersection Observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasBeenVisibleRef.current) {
            hasBeenVisibleRef.current = true;
            
            // Clean up observer once triggered
            if (observerRef.current) {
              observerRef.current.disconnect();
            }
            
            // Start animation after delay
            timeoutId = setTimeout(() => {
              setHasStarted(true);
              startTimeRef.current = Date.now();
            }, delay);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: '50px' // Start animation slightly before element is fully visible
      }
    );

    observerRef.current.observe(element);

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [delay]);

  // Animation loop
  useEffect(() => {
    if (!hasStarted) {
      // Show 0 while waiting to start
      setCount(0);
      return;
    }

    // Ensure startTime is set
    if (!startTimeRef.current) {
      startTimeRef.current = Date.now();
    }

    const animate = () => {
      const elapsed = Date.now() - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);

      const currentValue = targetNumber * easeOut;
      const roundedCount = Math.round(currentValue);

      // Only update state if the value actually changed to prevent unnecessary re-renders and blinking
      if (roundedCount !== lastCountRef.current) {
        setCount(roundedCount);
        lastCountRef.current = roundedCount;
      }

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        // Ensure final value is exact
        if (targetNumber !== lastCountRef.current) {
          setCount(targetNumber);
          lastCountRef.current = targetNumber;
        }
      }
    };

    // Start animation immediately
    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [hasStarted, targetNumber, duration]);

  // Format the output
  const formatValue = () => {
    // Always use whole numbers for clean display
    const displayCount = Math.round(count);
    return `${displayCount}${suffix}`;
  };

  return { value: formatValue(), ref: elementRef };
}
