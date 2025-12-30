# Branding Issues Checklist - Quick Reference

## 🔴 CRITICAL Branding Issues (Fix Immediately)

- [ ] **Third-Party Logos in Components**
  - Remove Webflow/Relume logos from:
    - `home/components/Testimonial23.jsx` (6 instances)
    - `home/components/Layout13.jsx` (4 instances)
    - `home/components/Logo3.jsx` (entire component)
    - `contact-us/components/Logo1.jsx` (entire component)
  - Replace with school branding or remove sections

- [ ] **Section Background Alternation Missing**
  - ALL sections use white background
  - Should alternate: White → Cream → White → Cream
  - Apply `bg-school-cream` or `bg-background-secondary` to every other section
  - Files: All page components

## 🟡 HIGH Priority Branding Issues

- [ ] **Gold Color Not Used for Achievements**
  - Stats numbers should be gold (`text-school-gold`)
  - Files:
    - `home/components/Stats30.jsx`
    - `about-us/components/Stats31.jsx`
  - Apply gold to: percentages, achievement numbers, awards

- [ ] **Announcement Bar Color Contrast**
  - Currently: Red background with dark gray text
  - Should be: Red background with white text
  - File: `src/components/AnnouncementBar.jsx` line 18
  - Change `text-text-primary` to `text-text-alternative` or `text-white`

## 🟠 MEDIUM Priority Branding Issues

- [ ] **Navbar Should Be Deep Blue**
  - Currently: White background
  - Brand guideline: "Deep Blue: Used for Navbar, Footer"
  - File: `home/components/Navbar1.jsx` line 49
  - Change to `bg-school-blue` with white text

- [ ] **Typography Inconsistency**
  - Verify all headings use `font-serif` or `font-heading`
  - Remove any `font-sans` from headings
  - Ensure Merriweather loads correctly
  - Audit all heading elements

- [ ] **Button Variant Audit**
  - Verify "Enroll", "Apply", "Submit" buttons use red (primary)
  - Verify "Learn more", "Explore", "View" buttons use blue outline (secondary)
  - Document button usage guide
  - Audit all buttons across site

- [ ] **Logo Usage Inconsistency**
  - Footer uses hardcoded path instead of `schoolInfo.logo`
  - File: `home/components/Footer16.jsx` line 40
  - Create reusable logo component
  - Standardize logo sizes

- [ ] **Testimonial Component Branding**
  - Remove third-party logos (Webflow/Relume)
  - Update carousel dots: `bg-black` → `bg-school-blue`
  - File: `home/components/Testimonial23.jsx` line 36
  - Replace placeholder avatars

- [ ] **Cream Backgrounds Not Used**
  - Cream color defined but never applied
  - Apply to: About sections, Testimonials, Team sections
  - Ensure text contrast is readable

## 🟢 LOW Priority Branding Issues

- [ ] **Heading Color Consistency**
  - Verify all headings on light backgrounds are Deep Blue
  - Verify headings on dark backgrounds are white
  - Audit heading colors across site

- [ ] **Link Styling**
  - Ensure all links use `text-school-blue`
  - Add hover underline effects
  - Test visited link states

- [ ] **Footer Branding**
  - Verify footer styling matches brand guidelines
  - Add brand color accents to links
  - Update social icon hover colors

- [ ] **Hero Section Brand Elements**
  - Add subtle brand color accents
  - Use gold for key messaging
  - Consider cream background for some heroes

- [ ] **Visual Hierarchy in Stats**
  - Use Gold for primary stat (100% pass rate)
  - Use Deep Blue for secondary stats
  - Add visual emphasis with color

## ✅ Brand Compliance Checklist

### Colors
- [ ] Deep Blue: Navbar, Footer, Headings ✓
- [ ] Ruby Red: Primary Buttons, Alerts ✓
- [ ] Gold: Achievements, Awards, Highlights ✗ (NOT USED)
- [ ] Emerald Green: Success States ✓
- [ ] Cream: Alternating Sections ✗ (NOT USED)
- [ ] No Third-Party Colors ✗ (Webflow/Relume logos present)

### Typography
- [ ] Headings: Merriweather (Serif) ✓ (defined, needs verification)
- [ ] Body: Inter (Sans-serif) ✓
- [ ] Heading weights appropriate ✓
- [ ] Body weights appropriate ✓

### Visual Elements
- [ ] Logo consistent ✗ (hardcoded paths)
- [ ] No placeholder logos ✗ (third-party logos present)
- [ ] Section alternation ✗ (all white)
- [ ] Buttons follow guidelines ✓ (CSS overrides exist)
- [ ] Links use Deep Blue ✓ (needs verification)

### Brand Personality
- [ ] Academic Prestige ✗ (missing cream, gold)
- [ ] Professional ✓
- [ ] Traditional yet Modern ✓
- [ ] Premium Feel ✗ (missing cream backgrounds)
- [ ] Consistent Visual Language ✗ (inconsistencies found)

---

## 🎯 Quick Wins (30 Minutes)

1. Fix Announcement Bar text color (white on red)
2. Change carousel dots to brand color (`bg-school-blue`)
3. Update footer logo to use `schoolInfo.logo`
4. Apply gold to one stats component as test

## 📊 Branding Issue Summary

- **CRITICAL**: 2 issues
- **HIGH**: 2 issues  
- **MEDIUM**: 6 issues
- **LOW**: 5 issues

**Total**: 15 branding issues identified  
**Estimated Fix Time**: 3-4 weeks

---

**Status**: Ready for Brand Implementation

