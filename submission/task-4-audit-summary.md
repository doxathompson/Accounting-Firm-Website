# PageSpeed and SEO Audit Summary
Task 4

**Homepage URL:**
https://accounting-firm-website-one.vercel.app/

**Tools used:**
Google PageSpeed Insights
Lighthouse SEO Audit

## Final PageSpeed Insights Results

### Mobile Results
[View Full Mobile Report](https://pagespeed.web.dev/analysis/https-accounting-firm-website-one-vercel-app/3n8mstsq95?form_factor=mobile)
| Category | Score |
| :--- | :--- |
| Performance | 98 |
| Accessibility | 95 |
| Best Practices | 100 |
| SEO | 100 |

### Desktop Results
[View Full Desktop Report](https://pagespeed.web.dev/analysis/https-accounting-firm-website-one-vercel-app/3n8mstsq95?form_factor=desktop)
| Category | Score |
| :--- | :--- |
| Performance | 100 |
| Accessibility | 95 |
| Best Practices | 100 |
| SEO | 100 |

### Screenshots Captured
- pagespeed-mobile-final.png
- pagespeed-desktop-final.png
- pagespeed-diagnostics.png

## Changes Made and Why

### 1. Image Optimization
Large images were resized from very high-resolution originals down to more appropriate web dimensions. This reduced page weight and helped improve load speed, especially on mobile devices.

This supports better Largest Contentful Paint, faster visual loading, and a smoother mobile experience.

### 2. Responsive Image Delivery
The homepage uses the Next.js `<Image />` component, with `sizes` attributes added to fill-based images.

Example:
```tsx
sizes="(max-width: 1024px) 100vw, 50vw"
```

This helps the browser request image sizes appropriate to the user’s device, rather than downloading unnecessarily large desktop images on mobile. Apparently phones do not enjoy being force-fed desktop-sized images. Who knew.

### 3. SEO Metadata Improvements
The homepage metadata was updated to include:
- clear page title
- relevant meta description
- Open Graph title and description
- Open Graph image
- metadataBase for correct absolute URL handling

The metadata targets the client’s intended audience: sole traders, small business owners, and limited companies in London.

### 4. Sitemap and Robots Files
Dynamic `sitemap.ts` and `robots.ts` files were added to support search engine crawling and indexing.

These files help search engines understand which pages are available and how the site should be crawled.

### 5. Responsive Layout Improvements
The homepage was reviewed and adjusted for mobile responsiveness.

Improvements included:
- clean mobile stacking for the hero section
- responsive card grids
- no horizontal overflow
- readable mobile text sizes
- tap-friendly CTA buttons
- mobile-friendly navigation

This ensures the page works properly across mobile, tablet, and desktop.

### 6. Conversion and Positioning Alignment
The homepage was reviewed against the client brief to ensure the copy supports the firm’s positioning around reliability, responsiveness, and personal service.

The page avoids price-led language such as:
- “Get a quote”
- “Starting from”
- pricing tables
- cheap accounting language

The primary call to action remains:
**Book a free consultation**

This supports the client’s relationship-led positioning rather than making the service feel transactional.

## Final Outcome
The final homepage exceeded the required mobile performance score of 85, achieving a mobile performance score of **98** and a desktop performance score of **100**.

The page also passed the core on-page SEO checks, with an SEO score of **100** on both mobile and desktop.
