# Issues Checklist - Quick Reference

## 🔴 Critical Issues (Fix Immediately)

- [ ] **Duplicate Application Entry Points**
  - Remove or consolidate `benchmark-school-system/App.tsx`
  - Location: `benchmark-school-system/` directory

- [ ] **Placeholder Images** (50+ instances)
  - Replace CloudFront placeholder URLs with actual images
  - Key files:
    - `home/components/Header108.jsx` (7 images)
    - `home/components/Gallery10.jsx` (7 images)
    - `about-us/components/Header69.jsx`
    - `admissions/components/Header129.jsx` (3 images)
    - `[director-name]-profile/components/Header1.jsx`
    - `student-life/components/Gallery6.jsx` (6 images)
    - And many more...

- [ ] **Non-Functional Forms**
  - Add form validation and submit handlers
  - Files:
    - `admissions/components/Cta40.jsx`
    - `contact-us/components/Contact6.jsx`
    - `[director-name]-profile/components/Contact5.jsx`
    - `single-job-details/components/Contact2.jsx`

## 🟡 Medium Priority Issues

- [ ] **Broken Navigation Links**
  - Fix "Connect" link in Footer (line 124)
  - Fix "WhatsApp" link in Footer (line 129)
  - File: `home/components/Footer16.jsx`

- [ ] **Missing Legal Pages**
  - Create `/privacy` page
  - Create `/terms` page
  - Create `/cookies` page
  - Or remove links from footer

- [ ] **Incorrect Form Field Type**
  - Change email input to tel input
  - File: `admissions/components/Cta40.jsx` line 24

- [ ] **Director Profile Images**
  - Map director images:
    - Waleed: `/public/images/director-waleed-photo-blue-bg.jpeg`
    - Noman: `/public/images/director-numan.jpg`
  - File: `[director-name]-profile/components/Header1.jsx`

- [ ] **SEO Meta Tags**
  - Add Open Graph tags
  - Add Twitter Card tags
  - Add structured data (JSON-LD)
  - File: `index.html`

- [ ] **Error Boundaries**
  - Add React error boundaries
  - Create `src/components/ErrorBoundary.jsx`

## 🟢 Low Priority Issues

- [ ] **CSS Class Typos**
  - Fix `rb-5` → `mb-5` in `about-us/components/Layout145.jsx` line 13
  - Fix `rb-4` → `mb-4` in `admissions/components/Cta40.jsx` line 20

- [ ] **Unused Code Cleanup**
  - Review and remove `benchmark-school-system/` directory if not needed
  - Remove unused HTML files

- [ ] **Image Alt Text**
  - Replace "Relume placeholder image" with descriptive alt text
  - Ensure all images have meaningful alt attributes

- [ ] **Loading States**
  - Add loading indicators for async operations

## 📋 Enhancement Suggestions

- [ ] Create centralized image mapping (`src/data/images.js`)
- [ ] Implement React Hook Form + Zod validation
- [ ] Add form submission service integration
- [ ] Create content management structure
- [ ] Implement blog routing (`/blog/:slug`)
- [ ] Add gallery lightbox functionality
- [ ] Implement event management system
- [ ] Add analytics (Google Analytics)
- [ ] Optimize images (WebP, lazy loading)
- [ ] Add accessibility improvements (ARIA labels, keyboard navigation)
- [ ] Implement code splitting
- [ ] Add unit/integration tests

## ✅ Quick Wins (Can Fix in 5 Minutes)

1. Fix CSS typos (`rb-5` → `mb-5`, `rb-4` → `mb-4`)
2. Fix form input type (email → tel)
3. Fix broken footer links (Connect, WhatsApp)
4. Add director profile images
5. Fix image alt text

---

**Total Issues**: 15+ critical/medium, 5+ low priority
**Estimated Fix Time**: 2-3 weeks for all issues
**Quick Wins Time**: 30 minutes

