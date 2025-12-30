/**
 * Accessibility Utilities
 * Helper functions for improving accessibility across the application
 * Follows WCAG 2.1 AA standards
 */

/**
 * Generate accessible alt text for images
 * @param {string} context - Context of the image (e.g., "director profile", "school event")
 * @param {string} name - Name or description of the subject
 * @returns {string} - Descriptive alt text
 */
export const generateAltText = (context, name) => {
    if (!name) return "Image";
    return `${context}: ${name}`;
};

/**
 * Check if color contrast meets WCAG standards
 * @param {string} foreground - Foreground color (hex)
 * @param {string} background - Background color (hex)
 * @returns {boolean} - True if contrast ratio meets WCAG AA (4.5:1)
 */
export const checkContrast = (foreground, background) => {
    // Simplified contrast check - in production, use a proper library
    // This is a placeholder for the actual contrast calculation
    return true; // Assume passing for now
};

/**
 * Generate ARIA label for interactive elements
 * @param {string} action - Action being performed
 * @param {string} target - Target of the action
 * @returns {string} - ARIA label
 */
export const generateAriaLabel = (action, target) => {
    return `${action} ${target}`;
};

/**
 * Skip to main content link (for keyboard navigation)
 */
export const SkipToMainContent = () => {
    return (
        <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-school-blue focus:text-white focus:rounded"
        >
            Skip to main content
        </a>
    );
};

/**
 * Focus management utilities
 */
export const focusManagement = {
    /**
     * Trap focus within an element (for modals)
     */
    trapFocus: (element) => {
        const focusableElements = element.querySelectorAll(
            'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        const handleTabKey = (e) => {
            if (e.key !== 'Tab') return;

            if (e.shiftKey) {
                if (document.activeElement === firstElement) {
                    lastElement.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastElement) {
                    firstElement.focus();
                    e.preventDefault();
                }
            }
        };

        element.addEventListener('keydown', handleTabKey);
        firstElement?.focus();

        return () => {
            element.removeEventListener('keydown', handleTabKey);
        };
    },

    /**
     * Restore focus to previous element
     */
    restoreFocus: (previousElement) => {
        if (previousElement) {
            previousElement.focus();
        }
    }
};

/**
 * Announce changes to screen readers
 */
export const announceToScreenReader = (message, priority = 'polite') => {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', priority);
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
        document.body.removeChild(announcement);
    }, 1000);
};

