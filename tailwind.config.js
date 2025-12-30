/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./home/**/*.{js,ts,jsx,tsx}",
    "./about-us/**/*.{js,ts,jsx,tsx}",
    "./academics/**/*.{js,ts,jsx,tsx}",
    "./admissions/**/*.{js,ts,jsx,tsx}",
    "./blog/**/*.{js,ts,jsx,tsx}",
    "./contact-us/**/*.{js,ts,jsx,tsx}",
    "./faq/**/*.{js,ts,jsx,tsx}",
    "./gallery/**/*.{js,ts,jsx,tsx}",
    "./single-blog/**/*.{js,ts,jsx,tsx}",
    "./staff/**/*.{js,ts,jsx,tsx}",
    "./*-profile/**/*.{js,ts,jsx,tsx}",
    "./events/**/*.{js,ts,jsx,tsx}",
    "./student-life/**/*.{js,ts,jsx,tsx}",
    "./careers/**/*.{js,ts,jsx,tsx}",
    "./single-job-details/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}"
  ],
  presets: [require("@relume_io/relume-tailwind")],
  theme: {
    extend: {
      /* ============================================================
         "Academic Prestige" Brand Colors
         ============================================================ */
      colors: {
        /* ============================================================
           Relume UI Color Token Overrides
           These override the defaults from @relume_io/relume-tailwind
           ============================================================ */
        
        /* ============================================================
           Override Relume Default Colors - Map to Brand Colors
           This prevents Relume from injecting unwanted black/neutral colors
           ============================================================ */
        // Override Tailwind's default black to use brand Deep Blue
        black: '#111184',  // Deep Blue - Your brand primary color
        white: '#ffffff',  // Keep white as is
        
        // Override Relume's neutral colors to use brand colors
        neutral: {
          white: '#ffffff',
          light: '#e5e7eb',    // Light gray for borders (matches border-primary)
          DEFAULT: '#1f2937',  // Dark gray for text (matches text-primary)
          black: '#111184',     // Map to Deep Blue (your brand)
        },
        
        brand: {
          black: '#9B111E',   // Ruby Red - Makes primary buttons red
          white: '#ffffff',
        },
        background: {
          DEFAULT: '#ffffff',
          primary: '#ffffff',
          secondary: '#FDFBD4', // Cream for alternate sections
          tertiary: '#666666',
          alternative: '#9B111E', // Ruby Red - Button backgrounds
          success: '#ecfdf3',
          error: '#fef3f2',
        },
        text: {
          DEFAULT: '#1f2937',     // Dark Gray - Professional text
          primary: '#1f2937',     // Dark Gray - Prevents text turning red
          secondary: '#4b5563',
          alternative: '#ffffff', // White text on dark backgrounds
          success: '#027a48',
          error: '#b42318',
        },
        border: {
          DEFAULT: '#111184',     // Deep Blue borders
          primary: '#e5e7eb',     // Light gray for subtle borders
          secondary: '#aaaaaa',
          tertiary: '#444444',
          alternative: '#ffffff',
          success: '#027a48',
          error: '#b42318',
        },

        /* ============================================================
           "Academic Prestige" Brand Colors - Custom Utilities
           ============================================================ */
        // Primary Brand Colors
        'school-blue': '#111184',    // Deep Blue - Navbar, Footer, Primary Headings
        'school-red': '#9B111E',     // Ruby Red - Buttons, Alerts, "School System" text
        'school-gold': '#EFBF04',    // Gold - Trophies, 5-star ratings, Position holders
        'school-cream': '#FDFBD4',   // Cream - Section backgrounds (alt to white)
        'school-green': '#00674F',   // Emerald Green - Success states, House colors

        // Color variations for hover states
        'school-blue-dark': '#0d0d6a',
        'school-blue-light': '#1a1aa8',
        'school-red-dark': '#7a0d18',
        'school-red-light': '#b8142a',

        // Legacy mappings for existing components
        'primary-color': 'var(--primary-color)',
        'secondary-color': 'var(--secondary-color)',
      },

      /* ============================================================
         Typography - Merriweather + Inter
         ============================================================ */
      fontFamily: {
        'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'serif': ['Merriweather', 'Georgia', 'Times New Roman', 'serif'],
        'heading': ['Merriweather', 'Georgia', 'Times New Roman', 'serif'],
        'body': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },

      /* ============================================================
         Animations (preserved from original)
         ============================================================ */
      keyframes: {
        "loop-vertically-top": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(-50%)" },
        },
        "loop-vertically-bottom": {
          from: { transform: "translateY(-50%)" },
          to: { transform: "translateY(0)" },
        },
        "marquee-left": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "loop-vertically-top": "loop-vertically-top 20s linear infinite",
        "loop-vertically-bottom": "loop-vertically-bottom 20s linear infinite",
        "marquee-left": "marquee-left 30s linear infinite",
      },

      /* ============================================================
         Spacing & Sizing Tokens
         ============================================================ */
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },

      /* ============================================================
         Box Shadow - Premium feel
         ============================================================ */
      boxShadow: {
        'premium': '0 4px 20px rgba(17, 17, 132, 0.12)',
        'premium-hover': '0 8px 30px rgba(17, 17, 132, 0.18)',
        'gold': '0 4px 20px rgba(239, 191, 4, 0.25)',
      },
    },
  },
  plugins: [],
}
