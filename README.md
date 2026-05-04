# SEOCopy

SEOCopy turns a URL or rough product description into SEO metadata and launch-ready landing page copy in seconds.

Live product: https://seocopy.vercel.app

## What it generates

- SEO title and meta description tuned for search snippets
- Open Graph title and description for social sharing
- Three headline, subheadline, and CTA variants for landing pages
- Product-page copy ideas for Shopify merchants and ecommerce teams

## Who it is for

SEOCopy is built for founders, Shopify merchants, and small teams that need publishable copy without starting from a blank page.

Use it when you need to:

- Refresh thin product pages before a campaign
- Draft metadata for a new landing page
- Rewrite a stale homepage hero section
- Create quick SEO copy variants for testing

## Pricing

- 2 free generations
- $5 one-off generation pack
- $19/month subscription for ongoing usage

## Product routes

- `/` — main landing page
- `/generate` — generator flow
- `/ai-seo-copy-generator` — broad AI SEO copy use-case page
- `/saas-landing-page-copy-generator` — SaaS landing page copy use-case page
- `/ecommerce-seo-copy-generator` — ecommerce SEO copy use-case page
- `/meta-description-generator` — meta description use-case page
- `/seo-title-generator` — title tag use-case page
- `/ai-page-title-generator` — AI page title and snippet use-case page
- `/homepage-title-generator` — homepage SEO title and hero copy use-case page
- `/website-copy-generator` — website copy use-case page
- `/marketing-copy-generator` — marketing campaign copy, SEO snippets, social previews, and CTA use-case page
- `/ad-copy-generator` — paid search, social ad hooks, landing page copy, SEO snippets, and CTA use-case page
- `/email-subject-line-generator` — email subject lines, preview text, landing hooks, SEO snippets, and CTA use-case page
- `/social-media-caption-generator` — social captions, post hooks, landing page copy, SEO snippets, and CTA use-case page
- `/youtube-description-generator` — YouTube descriptions, SEO titles, chapters, pinned comments, social previews, and CTA use-case page
- `/linkedin-post-generator` — LinkedIn post hooks, founder-led drafts, proof bullets, SEO snippets, and CTA use-case page
- `/pricing-page-copy-generator` — pricing page headlines, plan blurbs, FAQs, objection handling, SEO snippets, and CTA use-case page
- `/case-study-generator` — customer story outlines, interview questions, proof snippets, SEO metadata, pull quotes, and CTA use-case page
- `/testimonial-generator` — customer testimonials, review highlights, social proof snippets, SEO metadata, and CTA variants from raw customer feedback.
- `/press-release-generator` — press releases, media pitches, announcement copy, SEO metadata, social previews, and CTA variants from one launch brief.
- `/about-us-page-generator` — About Us page, founder story, mission, proof, and CTA copy use-case page
- `/landing-page-copy-generator` — landing page copy use-case page
- `/landing-page-headline-generator` — landing page hero headline, SEO metadata, social preview, and CTA use-case page
- `/product-description-generator` — ecommerce product copy use-case page
- `/shopify-product-description-generator` — Shopify product description and SEO use-case page
- `/etsy-product-description-generator` — Etsy listing description and marketplace SEO use-case page
- `/amazon-product-description-generator` — Amazon product description, bullets, and marketplace SEO use-case page
- `/product-page-seo-generator` — ecommerce product page SEO use-case page
- `/collection-page-seo-generator` — ecommerce category and Shopify collection page SEO use-case page
- `/category-description-generator` — ecommerce category description and merchandising copy use-case page
- `/small-business-seo-copy-generator` — small business SEO, website copy, and CTA use-case page
- `/service-page-copy-generator` — agency, consultant, and local service page copy use-case page
- `/local-seo-copy-generator` — local business and service-area SEO copy use-case page
- `/real-estate-listing-description-generator` — property listing description and real estate SEO copy use-case page
- `/restaurant-menu-description-generator` — restaurant menu descriptions, delivery app copy, and hospitality SEO use-case page
- `/google-business-profile-description-generator` — Google Business Profile descriptions and local SEO copy use-case page
- `/product-seo-title-generator` — ecommerce product title tag use-case page
- `/shopify-seo-copy-generator` — Shopify SEO use-case page
- `/startup-seo-copy-generator` — startup launch SEO/copy use-case page
- `/meta-tag-generator` — SEO and social metadata use-case page
- `/free-seo-copy-generator` — free SEO copy trial use-case page
- `/faq-generator` — SEO FAQ questions, answer snippets, schema-ready copy, and CTA use-case page
- `/blog-title-generator` — SEO blog title and snippet use-case page

## Tech stack

- Next.js App Router
- Anthropic for copy generation
- Stripe Checkout for one-time and subscription payments
- Vercel deployment

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000 to view the app.

For production validation:

```bash
npm run lint
npm run build
```

## Environment variables

The app expects production secrets to be configured in the hosting environment. Do not commit secret values.

Common variables include:

- `ANTHROPIC_API_KEY`
- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`
- `NEXT_PUBLIC_SITE_URL`

## Revenue goal

SEOCopy is part of the active revenue sprint: ship a lightweight AI SEO/copy tool with immediate checkout, soft-launch distribution, and fast conversion iteration.
