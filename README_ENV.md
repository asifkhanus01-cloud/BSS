# Environment Variables Setup Guide

This project uses environment variables to manage configuration across different environments (development, staging, production).

## Quick Start

1. **Copy the example file:**
   ```bash
   cp .env.example .env.local
   ```

2. **Edit `.env.local`** with your actual values

3. **Never commit `.env.local`** - it's already in `.gitignore`

## Available Environment Variables

### Application Configuration
- `VITE_APP_NAME` - Application name (default: "Benchmark School System")
- `VITE_APP_URL` - Base URL of the application
- `VITE_APP_ENV` - Environment (development, staging, production)

### API Configuration
- `VITE_API_BASE_URL` - Base URL for API endpoints
- `VITE_API_TIMEOUT` - API request timeout in milliseconds (default: 30000)

### Form Submission
- `VITE_FORM_SUBMISSION_METHOD` - Method to use: `api`, `emailjs`, `formspree`, or `custom`
- `VITE_FORM_SUBMISSION_ENDPOINT` - API endpoint for form submissions

### EmailJS (if using EmailJS)
- `VITE_EMAILJS_SERVICE_ID` - Your EmailJS service ID
- `VITE_EMAILJS_TEMPLATE_ID` - Your EmailJS template ID
- `VITE_EMAILJS_PUBLIC_KEY` - Your EmailJS public key

### Formspree (if using Formspree)
- `VITE_FORMSPREE_FORM_ID` - Your Formspree form ID

### Analytics
- `VITE_GOOGLE_ANALYTICS_ID` - Google Analytics tracking ID (format: G-XXXXXXXXXX)
- `VITE_GOOGLE_TAG_MANAGER_ID` - Google Tag Manager ID (format: GTM-XXXXXXX)

### WhatsApp
- `VITE_WHATSAPP_PHONE` - WhatsApp phone number (default: +923115890332)
- `VITE_WHATSAPP_MESSAGE_TEMPLATE` - Default message template for WhatsApp

### Contact Information
- `VITE_CONTACT_EMAIL` - Contact email address
- `VITE_CONTACT_PHONE` - Contact phone number

### Site Configuration
- `VITE_SITE_NAME` - Site name for SEO
- `VITE_SITE_DESCRIPTION` - Site description for SEO
- `VITE_SITE_KEYWORDS` - Site keywords for SEO (comma-separated)

### Feature Flags
- `VITE_ENABLE_ANALYTICS` - Enable/disable analytics (true/false)
- `VITE_ENABLE_CHATBOT` - Enable/disable WhatsApp chatbot (true/false)
- `VITE_ENABLE_FORM_VALIDATION` - Enable/disable form validation (true/false)

### Build Configuration
- `VITE_BUILD_VERSION` - Application version number

## Usage in Code

Import and use environment variables through the utility:

```javascript
import { env, getEnv, getEnvBool } from '../utils/env';

// Access pre-configured values
const apiUrl = env.API_BASE_URL;
const isAnalyticsEnabled = env.ENABLE_ANALYTICS;

// Or use helper functions
const customValue = getEnv('CUSTOM_KEY', 'default');
const isEnabled = getEnvBool('FEATURE_FLAG', false);
```

## Environment-Specific Files

- `.env` - Default environment variables (committed to git)
- `.env.local` - Local overrides (gitignored, for development)
- `.env.development` - Development environment variables
- `.env.production` - Production environment variables

## Important Notes

1. **All Vite environment variables must be prefixed with `VITE_`**
2. **Environment variables are exposed to the client-side code** - never put sensitive secrets here
3. **Use `.env.local` for local development** - it overrides `.env`
4. **Restart the dev server** after changing environment variables

## Production Deployment

For production, set environment variables in your hosting platform:
- **Vercel**: Add in Project Settings → Environment Variables
- **Netlify**: Add in Site Settings → Build & Deploy → Environment
- **Other platforms**: Follow their documentation for setting environment variables

## Security Best Practices

1. ✅ Use environment variables for configuration
2. ✅ Never commit `.env.local` or `.env*.local` files
3. ✅ Use different values for development and production
4. ✅ Keep sensitive data out of client-side environment variables
5. ✅ Use server-side environment variables for API keys and secrets

