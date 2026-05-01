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
- `/website-copy-generator` — website copy use-case page
- `/landing-page-copy-generator` — landing page copy use-case page
- `/product-description-generator` — ecommerce product copy use-case page
- `/product-page-seo-generator` — ecommerce product page SEO use-case page
- `/shopify-seo-copy-generator` — Shopify SEO use-case page
- `/startup-seo-copy-generator` — startup launch SEO/copy use-case page
- `/meta-tag-generator` — SEO and social metadata use-case page
- `/free-seo-copy-generator` — free SEO copy trial use-case page
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
