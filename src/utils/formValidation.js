/**
 * Form Validation Utilities
 * Centralized validation functions for all forms
 */
import { getFormSubmissionUrl, getApiUrl, env } from './env';

// Phone number validation (Pakistan format)
export const validatePhone = (phone) => {
    if (!phone) return "Phone number is required";
    // Remove spaces, dashes, and parentheses
    const cleaned = phone.replace(/[\s\-\(\)]/g, '');
    // Check if it's a valid Pakistan phone number (10-11 digits, may start with +92 or 0)
    const phoneRegex = /^(\+92|0)?[0-9]{10}$/;
    if (!phoneRegex.test(cleaned)) {
        return "Please enter a valid phone number (e.g., +92 311 5890332 or 0311 5890332)";
    }
    return null;
};

// Email validation
export const validateEmail = (email) => {
    if (!email) return "Email is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return "Please enter a valid email address";
    }
    return null;
};

// Required field validation
export const validateRequired = (value, fieldName) => {
    if (!value || value.trim() === '') {
        return `${fieldName} is required`;
    }
    return null;
};

// Minimum length validation
export const validateMinLength = (value, minLength, fieldName) => {
    if (value && value.length < minLength) {
        return `${fieldName} must be at least ${minLength} characters`;
    }
    return null;
};

// Maximum length validation
export const validateMaxLength = (value, maxLength, fieldName) => {
    if (value && value.length > maxLength) {
        return `${fieldName} must be no more than ${maxLength} characters`;
    }
    return null;
};

// Grade/Class validation
export const validateGrade = (grade) => {
    if (!grade) return "Grade/Class is required";
    const validGrades = [
        'Pre-Nursery', 'Nursery', 'KG', 'Grade 1', 'Grade 2', 'Grade 3', 
        'Grade 4', 'Grade 5', 'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10'
    ];
    if (!validGrades.includes(grade)) {
        return "Please select a valid grade";
    }
    return null;
};

/**
 * Form submission handler with environment variable support
 * Supports multiple submission methods: api, emailjs, formspree
 */
export const handleFormSubmit = async (formData, formType = 'contact') => {
    if (!env.ENABLE_FORM_VALIDATION) {
        console.warn('Form validation is disabled');
    }

    try {
        const submissionUrl = getFormSubmissionUrl();
        const method = env.FORM_SUBMISSION_METHOD;

        console.log(`Submitting ${formType} form:`, { formData, method, url: submissionUrl });

        // Handle different submission methods
        switch (method) {
            case 'emailjs':
                return await submitViaEmailJS(formData, formType);
            
            case 'formspree':
                return await submitViaFormspree(formData, formType, submissionUrl);
            
            case 'api':
            default:
                return await submitViaAPI(formData, formType, submissionUrl);
        }
    } catch (error) {
        console.error("Form submission error:", error);
        return {
            success: false,
            message: "Something went wrong. Please try again later or contact us directly."
        };
    }
};

/**
 * Submit form via API endpoint
 */
const submitViaAPI = async (formData, formType, endpoint) => {
    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...formData,
                formType,
                timestamp: new Date().toISOString(),
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        return {
            success: true,
            message: result.message || "Thank you! Your form has been submitted successfully. We will contact you soon.",
            data: result
        };
    } catch (error) {
        console.error("API submission error:", error);
        // Fallback to simulation in development
        if (env.APP_ENV === 'development') {
            return simulateSubmission(formData, formType);
        }
        throw error;
    }
};

/**
 * Submit form via EmailJS
 */
const submitViaEmailJS = async (formData, formType) => {
    // EmailJS integration would go here
    // Requires @emailjs/browser package
    console.log("EmailJS submission (not implemented yet)", formData);
    return {
        success: false,
        message: "EmailJS integration not yet configured. Please contact support."
    };
};

/**
 * Submit form via Formspree
 */
const submitViaFormspree = async (formData, formType, endpoint) => {
    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...formData,
                _subject: `New ${formType} form submission from Benchmark School System`,
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return {
            success: true,
            message: "Thank you! Your form has been submitted successfully. We will contact you soon."
        };
    } catch (error) {
        console.error("Formspree submission error:", error);
        throw error;
    }
};

/**
 * Simulate form submission (for development/testing)
 */
const simulateSubmission = async (formData, formType) => {
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
    
    // Simulate success or failure
    const success = Math.random() > 0.1; // 90% success rate for demo

    if (success) {
        console.log(`Form submitted successfully (simulated):`, formData);
        return {
            success: true,
            message: "Thank you! Your form has been submitted successfully. We will contact you soon."
        };
    } else {
        console.error(`Form submission failed (simulated):`, formData);
        return {
            success: false,
            message: "Failed to send your inquiry. Please try again."
        };
    }
};

