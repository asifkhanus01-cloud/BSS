# Color Usage Guide - Benchmark School System

## 🎨 Your Brand Color Palette (9 Colors)

### Primary Brand Colors
1. **Deep Blue** (`#111184`) - `school-blue`
   - **Use for**: Navbar, Footer, Headings, Primary CTAs, Borders
   - **Tailwind**: `bg-school-blue`, `text-school-blue`, `border-school-blue`

2. **Ruby Red** (`#9B111E`) - `school-red`
   - **Use for**: Primary Buttons (Enroll, Apply), Alerts, Accents
   - **Tailwind**: `bg-school-red`, `text-school-red`

3. **Gold** (`#EFBF04`) - `school-gold`
   - **Use for**: Achievements, Awards, Ratings, Highlights
   - **Tailwind**: `bg-school-gold`, `text-school-gold`

4. **Cream** (`#FDFBD4`) - `school-cream`
   - **Use for**: Alternate section backgrounds
   - **Tailwind**: `bg-school-cream`, `bg-background-secondary`

5. **Emerald Green** (`#00674F`) - `school-green`
   - **Use for**: Success states, Positive messaging
   - **Tailwind**: `bg-school-green`, `text-school-green`

### Neutral Colors (Semantic)
6. **White** (`#ffffff`) - `white` or `bg-background-primary`
   - **Use for**: Primary backgrounds, Text on dark backgrounds
   - **Tailwind**: `bg-white`, `bg-background-primary`, `text-white`, `text-text-alternative`

7. **Dark Gray** (`#1f2937`) - `text-text-primary`
   - **Use for**: Primary text, Body text
   - **Tailwind**: `text-text-primary`

8. **Medium Gray** (`#4b5563`) - `text-text-secondary`
   - **Use for**: Secondary text, Muted text
   - **Tailwind**: `text-text-secondary`

9. **Light Gray** (`#e5e7eb`) - `border-border-primary`
   - **Use for**: Borders, Dividers
   - **Tailwind**: `border-border-primary`

---

## ✅ DO Use (Correct Colors)

### Backgrounds
```jsx
// Primary background (white)
<div className="bg-background-primary">  // or bg-white

// Alternate background (cream)
<div className="bg-background-secondary">  // or bg-school-cream

// Brand backgrounds
<div className="bg-school-blue">   // Deep Blue
<div className="bg-school-red">    // Ruby Red
```

### Text Colors
```jsx
// Primary text (dark gray)
<p className="text-text-primary">

// Secondary text (medium gray)
<p className="text-text-secondary">

// Text on dark backgrounds (white)
<p className="text-text-alternative">  // or text-white

// Brand text
<h1 className="text-school-blue">  // Deep Blue
<span className="text-school-gold">  // Gold for achievements
```

### Borders
```jsx
// Light borders
<div className="border-border-primary">

// Brand borders
<div className="border-school-blue">
```

---

## ❌ DON'T Use (Relume Defaults - Now Overridden)

### Before (Don't Use):
```jsx
// ❌ OLD - Relume defaults (now overridden)
<div className="bg-black">        // Now = Deep Blue
<div className="text-black">       // Now = Deep Blue
<div className="bg-neutral-white"> // Now = Cream
<div className="bg-neutral-light">  // Now = Light Gray
```

### After (Use Brand Colors):
```jsx
// ✅ NEW - Use brand colors
<div className="bg-school-blue">   // Deep Blue
<div className="text-school-blue"> // Deep Blue
<div className="bg-background-primary"> // White
<div className="border-border-primary"> // Light Gray
```

---

## 🎯 Color Usage Rules

### 1. Backgrounds
- **White sections**: `bg-background-primary` or `bg-white`
- **Cream sections**: `bg-background-secondary` or `bg-school-cream`
- **Brand sections**: `bg-school-blue` or `bg-school-red`

### 2. Text
- **Dark text on light**: `text-text-primary` (dark gray)
- **Light text on dark**: `text-text-alternative` or `text-white`
- **Brand text**: `text-school-blue` (headings)
- **Achievements**: `text-school-gold` (stats, awards)

### 3. Buttons
- **Primary buttons**: `bg-school-red` with `text-white`
- **Secondary buttons**: `border-school-blue` with `text-school-blue`
- **Link buttons**: `text-school-blue`

### 4. Borders
- **Light borders**: `border-border-primary` (light gray)
- **Brand borders**: `border-school-blue` (deep blue)

---

## 🔄 What Changed (After Implementation)

### Relume Colors Now Map to Brand:
- `bg-black` → Now uses Deep Blue (#111184) ✅
- `text-black` → Now uses Deep Blue (#111184) ✅
- `bg-neutral-white` → Now uses Cream (#FDFBD4) ✅
- `bg-neutral-light` → Now uses Light Gray (#e5e7eb) ✅

### This Means:
- Any component using `bg-black` will now show Deep Blue
- Any component using `text-black` will now show Deep Blue
- Consistent branding across all components
- No more Relume color interference

---

## 📝 Quick Reference

| Element | Use This Color | Tailwind Class |
|---------|---------------|----------------|
| Navbar/Footer | Deep Blue | `bg-school-blue` |
| Primary Buttons | Ruby Red | `bg-school-red` |
| Headings | Deep Blue | `text-school-blue` |
| Body Text | Dark Gray | `text-text-primary` |
| Achievements | Gold | `text-school-gold` |
| Section BG (Alt) | Cream | `bg-school-cream` |
| Borders | Light Gray | `border-border-primary` |
| Text on Dark | White | `text-text-alternative` |

---

**Status**: Active after color system implementation  
**Last Updated**: 2025-01-27

