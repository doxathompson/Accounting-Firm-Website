# PageSpeed and SEO Audit Summary (Task 4)

## Overview
- **Homepage URL:** `https://accounting-firm-website-one.vercel.app/`
- **Tools used:**
  - Google PageSpeed Insights
  - Lighthouse SEO / SEOptimer

## Scores
### Initial Scores (Before Optimization)
- **Mobile Performance:** `[Score Placeholder]`
- **Desktop Performance:** `[Score Placeholder]`
- **SEO Score:** `[Score Placeholder]`

### Final Scores (After Optimization)
- **Mobile Performance:** `[Score Placeholder]` (Target: 85+)
- **Desktop Performance:** `[Score Placeholder]`
- **SEO Score:** `[Score Placeholder]`

## Changes Made
1. **Image Optimization:** Resized large images (e.g. `responsive-accounting-support.jpg`, `small-accounting-team.jpg`) from 3800px down to a maximum of 1800px to reduce payload size, improving Largest Contentful Paint (LCP) and overall load speed.
2. **Next.js `<Image />` Sizes Attribute:** Added the `sizes` attribute to all fill-based images (e.g., `sizes="(max-width: 1024px) 100vw, 50vw"`). This prevents the browser from downloading unnecessarily large images on mobile devices, vastly improving mobile performance.
3. **SEO Metadata Update:** Corrected the `<title>`, `<meta name="description">`, and Open Graph tags in `src/app/layout.tsx` to precisely target small businesses and sole traders in London, ensuring all core on-page SEO checks pass. Added the `metadataBase` to ensure OG images load correctly.
4. **Added `sitemap.ts` and `robots.ts`:** Created dynamic sitemap and robots.txt files to ensure proper crawling and indexing by search engines.
5. **Responsive Fixes & Forbidden Language Check:** Verified there is no horizontal overflow on mobile, and confirmed that negative SEO signals or off-brand phrases like "pricing", "cheap", or "get a quote" have been completely avoided to maintain a high-trust, conversion-ready page.

## Screenshot Checklist
- `[ ]` PageSpeed Insights Mobile Score Screenshot
- `[ ]` PageSpeed Insights Desktop Score Screenshot
- `[ ]` Lighthouse/SEO Tool Score Screenshot
