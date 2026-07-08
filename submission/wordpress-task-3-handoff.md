# WordPress Handoff: Services Page (Task 3)

*Note: The actual WordPress live build will be handled manually outside this project repository.*

## Page Choice
**Services Page**

## Section-by-Section Layout & Implementation Notes

### 1. Page Header (Hero)
- **Component Style:** Full width, subtle background color (`#F6F4EE`).
- **Eyebrow:** "Services"
- **Title (H1):** "Accounting services for sole traders and small limited companies."
- **Description:** "Practical support for accounts, tax returns, corporation tax, VAT, payroll, bookkeeping, and business advice, delivered by a small team that values clear communication."
- **Implementation Note:** Use a standard Gutenberg Hero block or a Hero widget in Elementor/Kadence. Center-align the text.

### 2. Introduction & Image Section
- **Layout:** Two-column grid (50/50). Text on the left, Image on the right.
- **Left Column:**
  - **Eyebrow:** "For small businesses under £500k turnover"
  - **Title (H2):** "Practical accounting support without the corporate maze."
  - **Text:** "From accounts and tax returns to VAT, payroll, and bookkeeping, the firm focuses on the services small business owners need most, explained clearly and handled reliably."
- **Right Column (Image):**
  - **Suggested Image:** `accounting-services-desk.jpg` (Optimized for web, <200kb, approx. 1000px wide).
- **Implementation Note:** Use an Columns block (Gutenberg) or Section/Inner Section (Elementor). Add subtle padding and ensure it stacks nicely on mobile (image below text).

### 3. Detailed Services Grid
- **Layout:** Two-column grid (Cards).
- **Cards Content:**
  - **Accounts & Tax:** "Year-end accounts and tax returns prepared accurately and filed on time, with a clear explanation of what you owe and why."
  - **Bookkeeping:** "Monthly or quarterly bookkeeping that keeps your records straight, so you always know where your business stands."
  - **Payroll & Pensions:** "Complete payroll management, including payslips, PAYE, and workplace pension compliance for your staff."
  - **VAT Returns:** "Making Tax Digital compliant VAT returns calculated and submitted automatically, ensuring you never miss a deadline."
- **Design Style:** Use a light background (`#FAF9F4`) with a subtle border (`#E5E1D8`) for the cards. Minimalist design.
- **Implementation Note:** Use Grid/Columns block or a dedicated Card block if using Spectra/Kadence.

### 4. Final Call to Action
- **Layout:** Centered block at the bottom of the page.
- **Title (H2):** "Not sure which service you need?"
- **Description:** "Book a free consultation and we’ll help you understand what support makes sense for your business."
- **Button:** "Book a free consultation" (Linking to `/contact`).
- **Implementation Note:** Standard CTA block with a solid, high-contrast button.

## General WordPress Guidelines
- **Typography:** Ensure a clean sans-serif font (like Inter or Roboto) to match the Next.js visual style.
- **Colors:**
  - Background: `#F6F4EE`
  - Card Backgrounds: `#FAF9F4`
  - Borders: `#E5E1D8`
  - Text: `#4B5563` (body), `#111827` (headings)
- **Responsive:** Verify that the two-column sections collapse perfectly into single columns on mobile devices, and that there is no horizontal overflow. No pricing tables or 'get a quote' options should be added.
