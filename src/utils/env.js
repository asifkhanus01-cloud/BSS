/**
 * Environment Variables Utility
 * 
 * This utility provides type-safe access to environment variables.
 * All Vite environment variables must be prefixed with VITE_
 * 
 * Usage:
 * import { env } from '../utils/env';
 * const apiUrl = env.API_BASE_URL;
 */

/**
 * Get environment variable with optional default value
 * @param {string} key - Environment variable key (without VITE_ prefix)
 * @param {string} defaultValue - Default value if not set
 * @returns {string} Environment variable value or default
 */
export const getEnv = (key, defaultValue = '') => {
    const value = import.meta.env[`VITE_${key}`];
    return value !== undefined ? value : defaultValue;
};

/**
 * Get boolean environment variable
 * @param {string} key - Environment variable key (without VITE_ prefix)
 * @param {boolean} defaultValue - Default value if not set
 * @returns {boolean} Environment variable value as boolean
 */
export const getEnvBool = (key, defaultValue = false) => {
    const value = getEnv(key, String(defaultValue));
    return value === 'true' || value === '1';
};

/**
 * Get number environment variable
 * @param {string} key - Environment variable key (without VITE_ prefix)
 * @param {number} defaultValue - Default value if not set
 * @returns {number} Environment variable value as number
 */
export const getEnvNumber = (key, defaultValue = 0) => {
    const value = getEnv(key, String(defaultValue));
    return Number(value) || defaultValue;
};

/**
 * Environment variables object
 * Access all environment variables through this object
 */
export const env = {
    // Application
    APP_NAME: getEnv('APP_NAME', 'Benchmark School System'),
    APP_URL: getEnv('APP_URL', typeof window !== 'undefined' ? window.location.origin : ''),
    APP_ENV: getEnv('APP_ENV', 'development'),
    
    // API Configuration
    API_BASE_URL: getEnv('API_BASE_URL', ''),
    API_TIMEOUT: getEnvNumber('API_TIMEOUT', 30000),
    
    // Form Submission
    FORM_SUBMISSION_METHOD: getEnv('FORM_SUBMISSION_METHOD', 'api'),
    FORM_SUBMISSION_ENDPOINT: getEnv('FORM_SUBMISSION_ENDPOINT', '/api/submit-form'),
    
    // EmailJS Configuration
    EMAILJS_SERVICE_ID: getEnv('EMAILJS_SERVICE_ID', ''),
    EMAILJS_TEMPLATE_ID: getEnv('EMAILJS_TEMPLATE_ID', ''),
    EMAILJS_PUBLIC_KEY: getEnv('EMAILJS_PUBLIC_KEY', ''),
    
    // Formspree Configuration
    FORMSPREE_FORM_ID: getEnv('FORMSPREE_FORM_ID', ''),
    
    // Analytics
    GOOGLE_ANALYTICS_ID: getEnv('GOOGLE_ANALYTICS_ID', ''),
    GOOGLE_TAG_MANAGER_ID: getEnv('GOOGLE_TAG_MANAGER_ID', ''),
    
    // Social Media
    FACEBOOK_PAGE_ID: getEnv('FACEBOOK_PAGE_ID', ''),
    INSTAGRAM_ACCESS_TOKEN: getEnv('INSTAGRAM_ACCESS_TOKEN', ''),
    
    // WhatsApp Configuration
    WHATSAPP_PHONE: getEnv('WHATSAPP_PHONE', '+923115890332'),
    WHATSAPP_MESSAGE_TEMPLATE: getEnv('WHATSAPP_MESSAGE_TEMPLATE', 'Hello! I have a question about Benchmark School System.'),
    
    // Contact Information
    CONTACT_EMAIL: getEnv('CONTACT_EMAIL', 'info@benchmark.edu.pk'),
    CONTACT_PHONE: getEnv('CONTACT_PHONE', '+92 311 5890332'),
    
    // Site Configuration
    SITE_NAME: getEnv('SITE_NAME', 'Benchmark School System'),
    SITE_DESCRIPTION: getEnv('SITE_DESCRIPTION', 'Empowering Minds, Creating Leaders'),
    SITE_KEYWORDS: getEnv('SITE_KEYWORDS', 'school,education,Peshawar,Pakistan,academic excellence'),
    
    // Feature Flags
    ENABLE_ANALYTICS: getEnvBool('ENABLE_ANALYTICS', false),
    ENABLE_CHATBOT: getEnvBool('ENABLE_CHATBOT', true),
    ENABLE_FORM_VALIDATION: getEnvBool('ENABLE_FORM_VALIDATION', true),
    
    // Build Configuration
    BUILD_VERSION: getEnv('BUILD_VERSION', '1.0.0'),
};

/**
 * Check if running in development mode
 */
export const isDevelopment = () => env.APP_ENV === 'development';

/**
 * Check if running in production mode
 */
export const isProduction = () => env.APP_ENV === 'production';

/**
 * Get full API URL
 * @param {string} endpoint - API endpoint path
 * @returns {string} Full API URL
 */
export const getApiUrl = (endpoint) => {
    const baseUrl = env.API_BASE_URL || '';
    const path = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
    return baseUrl ? `${baseUrl}${path}` : path;
};

/**
 * Get form submission URL based on method
 * @returns {string} Form submission URL
 */
export const getFormSubmissionUrl = () => {
    const method = env.FORM_SUBMISSION_METHOD;
    
    switch (method) {
        case 'emailjs':
            return 'emailjs';
        case 'formspree':
            return `https://formspree.io/f/${env.FORMSPREE_FORM_ID}`;
        case 'api':
        default:
            return getApiUrl(env.FORM_SUBMISSION_ENDPOINT);
    }
};

export default env;

