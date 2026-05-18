import Link from "next/link";

const valueProps = [
  {
    title: "Save hours on SEO production",
    body: "Generate ready-to-publish titles, descriptions, and landing page copy in one pass.",
  },
  {
    title: "Built for conversion",
    body: "Get sharper headlines, stronger CTAs, and copy angles aligned to the action you want.",
  },
  {
    title: "Grounded in SEO best practices",
    body: "Outputs are tuned for metadata length, keyword clarity, and social sharing performance.",
  },
];

const pricing = [
  {
    name: "Free",
    price: "2 generations",
    description: "Perfect for trying the workflow with no signup.",
    cta: "Start free",
    href: "/generate",
  },
  {
    name: "Pay Per Use",
    price: "$5",
    description: "Buy a single paid generation whenever you need one more.",
    cta: "Buy one generation",
    href: "/generate?plan=one-time",
  },
  {
    name: "Monthly",
    price: "$19/mo",
    description: "Unlimited generations for teams shipping landing pages every week.",
    cta: "Start monthly",
    href: "/generate?plan=subscription",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": "https://seocopy.vercel.app/#app",
      name: "SEOCopy",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: "https://seocopy.vercel.app/",
      description:
        "AI SEO metadata and landing page copy generator for founders, marketers, and Shopify merchants.",
      offers: [
        {
          "@type": "Offer",
          name: "Free",
          price: "0",
          priceCurrency: "USD",
          url: "https://seocopy.vercel.app/generate",
          description: "Two free AI SEO copy generations with no signup.",
        },
        {
          "@type": "Offer",
          name: "Pay Per Use",
          price: "5",
          priceCurrency: "USD",
          url: "https://seocopy.vercel.app/generate?plan=one-time",
          description: "One paid SEO or landing page copy generation.",
        },
        {
          "@type": "Offer",
          name: "Monthly",
          price: "19",
          priceCurrency: "USD",
          url: "https://seocopy.vercel.app/generate?plan=subscription",
          description: "Unlimited SEO and landing page copy generations for teams.",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://seocopy.vercel.app/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What can SEOCopy generate?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SEOCopy generates SEO titles, meta descriptions, Open Graph copy, landing page headlines, subheadlines, CTAs, FAQs, and campaign copy variants from a URL, keyword, product description, or rough offer brief.",
          },
        },
        {
          "@type": "Question",
          name: "Can I try SEOCopy for free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The free plan includes two AI generations so marketers and founders can test the workflow before buying a single generation or monthly access.",
          },
        },
        {
          "@type": "Question",
          name: "Who is SEOCopy built for?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SEOCopy is built for founders, Shopify merchants, content marketers, agencies, and small businesses that need publish-ready SEO metadata and conversion copy quickly.",
          },
        },
      ],
    },
  ],
};

const useCasePages = [
  {
    title: "AI SEO Copy Generator",
    href: "/ai-seo-copy-generator",
    body: "Search titles, meta descriptions, OG tags, headlines, and CTA variants from a URL or rough offer.",
  },
  {
    title: "SaaS Landing Page Copy Generator",
    href: "/saas-landing-page-copy-generator",
    body: "Hero copy, SEO metadata, feature-benefit sections, objection handling, and CTA variants for SaaS teams.",
  },
  {
    title: "Ecommerce SEO Copy Generator",
    href: "/ecommerce-seo-copy-generator",
    body: "SEO titles, meta descriptions, product-page angles, and campaign copy for ecommerce teams.",
  },
  {
    title: "Shopify SEO Copy Generator",
    href: "/shopify-seo-copy-generator",
    body: "Product titles, meta descriptions, OG tags, and conversion copy for Shopify merchants.",
  },
  {
    title: "Shopify App Store Listing Generator",
    href: "/shopify-app-store-listing-generator",
    body: "App subtitles, listing copy, merchant-facing benefits, feature bullets, FAQs, screenshot captions, and install CTAs for Shopify app launches.",
  },
  {
    title: "Shopify Email Marketing Generator",
    href: "/shopify-email-marketing-generator",
    body: "Product-drop email campaigns, segmented promo angles, Klaviyo-ready copy blocks, subject lines, preview text, and CTAs for Shopify merchants.",
  },
  {
    title: "Startup SEO Copy Generator",
    href: "/startup-seo-copy-generator",
    body: "Search snippets, hero copy, social previews, and CTA variants for founder-led launches.",
  },
  {
    title: "Meta Tag Generator",
    href: "/meta-tag-generator",
    body: "SEO title tags, meta descriptions, Open Graph copy, and social preview angles for any product page or landing page.",
  },
  {
    title: "Free SEO Copy Generator",
    href: "/free-seo-copy-generator",
    body: "Two free AI generations for SEO titles, meta descriptions, social previews, headlines, and CTA variants.",
  },
  {
    title: "FAQ Generator",
    href: "/faq-generator",
    body: "SEO FAQ questions, answer snippets, schema-ready copy, objection handling, and CTAs for landing pages.",
  },
  {
    title: "Blog Title Generator",
    href: "/blog-title-generator",
    body: "SEO blog titles, snippets, social previews, and CTA angles from one rough topic or keyword.",
  },
  {
    title: "Blog Topic Generator",
    href: "/blog-topic-generator",
    body: "SEO blog topic ideas, search-intent angles, metadata prompts, FAQs, internal links, and CTA direction from one product or keyword brief.",
  },
  {
    title: "Blog Post Outline Generator",
    href: "/blog-post-outline-generator",
    body: "SEO blog outlines, search-intent angles, H2 structures, FAQ sections, metadata, and CTA variants from one topic brief.",
  },
  {
    title: "Blog Post Generator",
    href: "/blog-post-generator",
    body: "SEO blog post drafts, metadata, FAQs, social previews, and CTA angles from one topic, keyword, URL, or content brief.",
  },
  {
    title: "Content Brief Generator",
    href: "/content-brief-generator",
    body: "Search intent, outlines, metadata, FAQ ideas, internal links, and CTAs for SEO content assignments.",
  },
  {
    title: "SEO Content Generator",
    href: "/seo-content-generator",
    body: "SEO titles, meta descriptions, outlines, FAQ ideas, social previews, and CTA variants from one keyword, URL, or offer brief.",
  },
  {
    title: "SEO Audit Report Generator",
    href: "/seo-audit-report-generator",
    body: "Prioritized SEO audit findings, metadata rewrites, content gaps, FAQ ideas, and conversion CTAs from one URL or crawl brief.",
  },
  {
    title: "SEO Keyword Generator",
    href: "/seo-keyword-generator",
    body: "Keyword ideas, search-intent clusters, metadata prompts, FAQ opportunities, and conversion copy briefs from one product or topic.",
  },
  {
    title: "SEO Friendly URL Generator",
    href: "/seo-friendly-url-generator",
    body: "Readable URL slugs, matching metadata, social previews, and CTA variants for product, blog, and landing pages.",
  },
  {
    title: "Schema Markup Generator",
    href: "/schema-markup-generator",
    body: "Schema type recommendations, JSON-LD starter copy, FAQ snippets, metadata, and validation notes for richer search results.",
  },
  {
    title: "How-To Guide Generator",
    href: "/how-to-guide-generator",
    body: "How-to guides, step-by-step tutorial sections, instructional SEO outlines, FAQ schema prompts, metadata, and CTAs from one process brief.",
  },
  {
    title: "Content Calendar Generator",
    href: "/content-calendar-generator",
    body: "SEO content calendar ideas, publishing plans, metadata prompts, FAQ angles, and CTA direction from one product or audience brief.",
  },
  {
    title: "Lead Magnet Generator",
    href: "/lead-magnet-generator",
    body: "Lead magnet ideas, opt-in page copy, SEO snippets, nurture email angles, FAQs, and CTAs from one audience or offer brief.",
  },
  {
    title: "Popup Copy Generator",
    href: "/popup-copy-generator",
    body: "Popup copy, exit-intent offers, email capture modals, discount and lead magnet variants, reassurance microcopy, and CTAs from one campaign brief.",
  },
  {
    title: "Homepage Copy Generator",
    href: "/homepage-copy-generator",
    body: "Homepage copy, hero section messaging, homepage section copy, proof blocks, FAQs, and above-the-fold CTAs from one offer brief.",
  },
  {
    title: "Blog Introduction Generator",
    href: "/blog-introduction-generator",
    body: "Search-intent blog introductions, article openers, SEO metadata, social previews, and CTA variants from one topic brief.",
  },
  {
    title: "Blog Conclusion Generator",
    href: "/blog-conclusion-generator",
    body: "Article wrap-ups, recap paragraphs, final CTAs, SEO metadata, and social preview copy from one content brief.",
  },
  {
    title: "Blog Meta Description Generator",
    href: "/blog-meta-description-generator",
    body: "Blog meta descriptions, SERP snippets, social previews, title alternatives, and CTA variants from one article brief.",
  },
  {
    title: "Competitor Comparison Page Generator",
    href: "/competitor-comparison-page-generator",
    body: "Comparison pages, alternative-page positioning, proof sections, FAQs, SEO metadata, and CTAs from one competitor brief.",
  },
  {
    title: "Product Comparison Table Generator",
    href: "/product-comparison-table-generator",
    body: "Product comparison tables, feature grids, alternative-page proof points, FAQs, and CTAs from one product or competitor brief.",
  },
  {
    title: "Product Description Generator",
    href: "/product-description-generator",
    body: "Benefit-led ecommerce product descriptions, metadata, and CTA variants for faster merchandising.",
  },
  {
    title: "AI Product Description Generator",
    href: "/ai-product-description-generator",
    body: "AI product descriptions, feature-to-benefit product copy, ecommerce SEO snippets, and Shopify/Amazon listing angles from one product brief.",
  },
  {
    title: "Product Demo Script Generator",
    href: "/product-demo-script-generator",
    body: "Product demo scripts, demo flow, feature proof moments, objection-handling talk tracks, follow-up CTAs, and FAQs from one product or sales brief.",
  },
  {
    title: "Product Explainer Video Generator",
    href: "/product-explainer-video-generator",
    body: "Product explainer videos, voiceover hooks, problem-solution storyboards, scene-by-scene scripts, and launch CTAs from one product brief.",
  },
  {
    title: "Product FAQ Generator",
    href: "/product-faq-generator",
    body: "Product FAQs, buyer objection answers, PDP FAQ schema snippets, and Shopify product questions from one product brief.",
  },
  {
    title: "Product Review Generator",
    href: "/product-review-generator",
    body: "Product review copy, star-rating summaries, testimonial snippets, review request follow-ups, and SEO proof blocks from one customer-feedback brief.",
  },
  {
    title: "Return Policy Generator",
    href: "/return-policy-generator",
    body: "Return policy copy, refund and exchange rules, shipping cutoff notes, support-reducing FAQs, and trust snippets from one store operations brief.",
  },
  {
    title: "Shipping Policy Generator",
    href: "/shipping-policy-generator",
    body: "Shipping policy copy, delivery timelines, carrier cutoff notes, support-reducing shipping FAQs, and delivery trust snippets from one fulfillment brief.",
  },
  {
    title: "Terms and Conditions Generator",
    href: "/terms-and-conditions-generator",
    body: "Terms and conditions copy, store policy clauses, checkout acceptance language, support-reducing terms FAQs, and trust snippets from one business rules brief.",
  },
  {
    title: "Shopify Product Description Generator",
    href: "/shopify-product-description-generator",
    body: "Shopify-ready product descriptions, SEO metadata, benefit bullets, social previews, and CTAs from rough product notes.",
  },
  {
    title: "Etsy Product Description Generator",
    href: "/etsy-product-description-generator",
    body: "Etsy-ready listing descriptions, marketplace SEO titles, tag angles, benefit bullets, social previews, and CTAs from maker notes.",
  },
  {
    title: "Amazon Product Description Generator",
    href: "/amazon-product-description-generator",
    body: "Amazon-ready product descriptions, SEO titles, feature bullets, keyword angles, A+ content ideas, and campaign copy from product specs.",
  },
  {
    title: "Amazon Product Title Generator",
    href: "/amazon-product-title-generator",
    body: "Amazon listing titles, marketplace SEO snippets, feature-led angles, bullets, and campaign CTAs from one product brief.",
  },
  {
    title: "Amazon Bullet Point Generator",
    href: "/amazon-bullet-point-generator",
    body: "Amazon bullet points, feature bullets, marketplace SEO snippets, benefit-led listing bullets, FAQs, and CTAs from one product brief.",
  },
  {
    title: "Product Page SEO Generator",
    href: "/product-page-seo-generator",
    body: "SEO titles, meta descriptions, benefit bullets, social previews, and CTAs for ecommerce product pages.",
  },
  {
    title: "Collection Page SEO Generator",
    href: "/collection-page-seo-generator",
    body: "Search titles, meta descriptions, collection intros, social previews, and CTAs for Shopify collections and ecommerce category pages.",
  },
  {
    title: "Shopify Collection Description Generator",
    href: "/shopify-collection-description-generator",
    body: "Shopify collection descriptions, SEO metadata, social previews, benefit bullets, and CTA ideas for category pages and gift guides.",
  },
  {
    title: "Shopify Meta Description Generator",
    href: "/shopify-meta-description-generator",
    body: "Shopify product and collection meta descriptions, SEO title ideas, social previews, benefit bullets, and CTA copy for ecommerce search traffic.",
  },
  {
    title: "Shopify Image Alt Text Generator",
    href: "/shopify-image-alt-text-generator",
    body: "Shopify product image alt text, collection image descriptions, SEO captions, filename ideas, and accessibility-friendly variants for ecommerce image updates.",
  },
  {
    title: "Category Description Generator",
    href: "/category-description-generator",
    body: "SEO category descriptions, collection intros, merchandising angles, metadata, FAQs, and CTAs for ecommerce category pages.",
  },
  {
    title: "Small Business SEO Copy Generator",
    href: "/small-business-seo-copy-generator",
    body: "SEO metadata, website copy, service blurbs, FAQs, and CTAs for small businesses turning local interest into calls, bookings, and quote requests.",
  },
  {
    title: "Service Page Copy Generator",
    href: "/service-page-copy-generator",
    body: "SEO metadata, hero copy, proof points, FAQs, and CTA variants for agencies, consultants, and local service businesses.",
  },
  {
    title: "Local SEO Copy Generator",
    href: "/local-seo-copy-generator",
    body: "City-aware metadata, local service page copy, proof bullets, FAQs, and booking CTAs for local businesses and agencies.",
  },
  {
    title: "Real Estate Listing Description Generator",
    href: "/real-estate-listing-description-generator",
    body: "Property descriptions, SEO metadata, social previews, FAQs, and showing CTAs for agents and real estate teams.",
  },
  {
    title: "Restaurant Menu Description Generator",
    href: "/restaurant-menu-description-generator",
    body: "Menu descriptions, restaurant SEO metadata, delivery app blurbs, specials, FAQs, and ordering CTAs from rough dish notes.",
  },
  {
    title: "Google Business Profile Description Generator",
    href: "/google-business-profile-description-generator",
    body: "GBP descriptions, local SEO metadata, service blurbs, Google posts, FAQs, and call-focused CTAs for local businesses.",
  },
  {
    title: "Google Review Response Generator",
    href: "/google-review-response-generator",
    body: "Google review replies, service recovery responses, local SEO snippets, FAQs, and CTAs for reputation-focused local businesses.",
  },
  {
    title: "Product SEO Title Generator",
    href: "/product-seo-title-generator",
    body: "Buyer-intent product title tags, meta descriptions, social previews, and PDP copy for ecommerce pages.",
  },
  {
    title: "Shopify Product Title Generator",
    href: "/shopify-product-title-generator",
    body: "Shopify product titles, SEO title tags, collection-ready angles, social previews, and PDP copy variants from one product brief.",
  },
  {
    title: "Product Name Generator",
    href: "/product-name-generator",
    body: "Brandable product names, ecommerce listing titles, SEO snippets, social previews, and launch copy angles from one product brief.",
  },
  {
    title: "Product Name Ideas Generator",
    href: "/product-name-ideas-generator",
    body: "Product name ideas, naming territories, SEO listing titles, social previews, and launch copy from one product brief.",
  },
  {
    title: "Product Bullet Point Generator",
    href: "/product-bullet-point-generator",
    body: "Benefit-led product bullets, feature-to-benefit rewrites, SEO metadata, FAQs, and CTAs for Shopify, Amazon, and ecommerce PDPs.",
  },
  {
    title: "Product Comparison Generator",
    href: "/product-comparison-generator",
    body: "Comparison-page copy, alternative-page positioning, proof tables, SEO metadata, FAQs, and CTAs from one competitor brief.",
  },
  {
    title: "Landing Page Copy Generator",
    href: "/landing-page-copy-generator",
    body: "Hero headlines, subheadlines, CTAs, and SEO metadata for launches and page refreshes.",
  },
  {
    title: "Landing Page Outline Generator",
    href: "/landing-page-outline-generator",
    body: "Section-by-section page plans, conversion flows, wireframe-ready copy briefs, FAQs, and CTAs from one offer brief.",
  },
  {
    title: "Landing Page SEO Generator",
    href: "/landing-page-seo-generator",
    body: "Landing page SEO, search-intent sections, metadata and H1 ideas, FAQ schema prompts, social previews, and CTA variants from one offer brief.",
  },
  {
    title: "Landing Page Wireframe Generator",
    href: "/landing-page-wireframe-generator",
    body: "Landing page wireframes, section layout blocks, above-the-fold structure, conversion-ready wireframe notes, FAQs, and CTA direction from one offer brief.",
  },
  {
    title: "Landing Page A/B Test Generator",
    href: "/landing-page-ab-test-generator",
    body: "Landing page A/B tests, variant hypotheses, experiment-ready copy blocks, conversion test ideas, FAQs, and CTA directions from one offer brief.",
  },
  {
    title: "B2B Landing Page Copy Generator",
    href: "/b2b-landing-page-copy-generator",
    body: "Demo-focused B2B page copy, proof sections, objection handling, SEO snippets, FAQs, and sales CTAs from one offer brief.",
  },
  {
    title: "Landing Page Headline Generator",
    href: "/landing-page-headline-generator",
    body: "Hero headlines, subheadlines, SEO metadata, social previews, and CTA variants for faster landing page tests.",
  },
  {
    title: "Hero Headline Generator",
    href: "/hero-headline-generator",
    body: "Conversion-focused hero headlines, subheadlines, CTA variants, proof bullets, and SEO snippets from one offer brief.",
  },
  {
    title: "Sales Page Copy Generator",
    href: "/sales-page-copy-generator",
    body: "Long-form sales page headlines, proof sections, objection handling, FAQs, SEO snippets, and CTA variants from one offer brief.",
  },
  {
    title: "Proposal Generator",
    href: "/proposal-generator",
    body: "Client proposal positioning, scope, pricing rationale, proof, FAQs, follow-up copy, and CTA variants from one project brief.",
  },
  {
    title: "Image Alt Text Generator",
    href: "/image-alt-text-generator",
    body: "Accessible image alt text, SEO captions, filename ideas, product image snippets, and metadata variants from one image brief.",
  },
  {
    title: "Meta Description Generator",
    href: "/meta-description-generator",
    body: "Click-worthy meta descriptions, SEO title ideas, and OG copy for pages that need more search traffic.",
  },
  {
    title: "SEO Title Generator",
    href: "/seo-title-generator",
    body: "Search-friendly title tags, snippet copy, and headline variants for pages competing for buyer intent.",
  },
  {
    title: "AI Page Title Generator",
    href: "/ai-page-title-generator",
    body: "SEO page titles, meta descriptions, social previews, and CTA ideas from a URL, keyword, or rough page brief.",
  },
  {
    title: "Homepage Title Generator",
    href: "/homepage-title-generator",
    body: "Homepage SEO title tags, meta descriptions, social previews, hero headlines, and CTA copy from a rough offer.",
  },
  {
    title: "Website Copy Generator",
    href: "/website-copy-generator",
    body: "Homepage-ready headlines, SEO metadata, social previews, and CTA ideas from a rough offer.",
  },
  {
    title: "Copywriting Generator",
    href: "/copywriting-generator",
    body: "Conversion-focused page copy, SEO snippets, social previews, campaign angles, and CTA variants from one product or offer brief.",
  },
  {
    title: "Course Description Generator",
    href: "/course-description-generator",
    body: "Course descriptions, learning outcomes, module summaries, FAQs, SEO snippets, and enrollment CTAs from one course brief.",
  },
  {
    title: "Customer Feedback Survey Generator",
    href: "/customer-feedback-survey-generator",
    body: "Customer feedback surveys, post-purchase survey questions, NPS prompts, product feedback forms, and retention insight CTAs from one research brief.",
  },
  {
    title: "Marketing Copy Generator",
    href: "/marketing-copy-generator",
    body: "Campaign-ready SEO snippets, landing page headlines, social previews, and CTA variants from one product brief.",
  },
  {
    title: "Advertorial Copy Generator",
    href: "/advertorial-copy-generator",
    body: "Story-led advertorial hooks, proof sections, SEO snippets, FAQs, and CTA variants for native ad and pre-sell page tests.",
  },
  {
    title: "AI Copy Rewriter",
    href: "/ai-copy-rewriter",
    body: "Rewrite rough website, product, ad, and landing page copy into clearer SEO snippets, headlines, social previews, and CTA variants.",
  },
  {
    title: "Product Launch Copy Generator",
    href: "/product-launch-copy-generator",
    body: "Launch page headlines, announcement copy, SEO snippets, social previews, benefit bullets, and CTA variants from one launch brief.",
  },
  {
    title: "Call to Action Generator",
    href: "/call-to-action-generator",
    body: "CTA buttons, supporting microcopy, objection reducers, SEO snippets, and headline angles for pages that need more clicks.",
  },
  {
    title: "Cold Email Generator",
    href: "/cold-email-generator",
    body: "Cold email drafts, subject lines, follow-up sequences, CTA options, and outreach landing snippets from one prospect or offer brief.",
  },
  {
    title: "Brand Voice Generator",
    href: "/brand-voice-generator",
    body: "Brand voice guidelines, tone examples, SEO metadata, landing page copy, and CTA variants from one positioning brief.",
  },
  {
    title: "Brand Story Generator",
    href: "/brand-story-generator",
    body: "Founder stories, About page narratives, proof bullets, SEO snippets, social previews, and CTAs from one positioning brief.",
  },
  {
    title: "Ad Copy Generator",
    href: "/ad-copy-generator",
    body: "Paid search headlines, social ad hooks, landing page copy, SEO snippets, and CTA variants from one campaign brief.",
  },
  {
    title: "Google Ads Copy Generator",
    href: "/google-ads-copy-generator",
    body: "Google Ads headlines, descriptions, landing page angles, SEO snippets, and CTA variants from one PPC campaign brief.",
  },
  {
    title: "Facebook Ad Copy Generator",
    href: "/facebook-ad-copy-generator",
    body: "Facebook ad hooks, primary text, headlines, CTAs, landing page snippets, and SEO metadata from one paid social campaign brief.",
  },
  {
    title: "Instagram Ad Copy Generator",
    href: "/instagram-ad-copy-generator",
    body: "Instagram ad copy, Reels hooks, Story ad variants, carousel captions, CTAs, and paid social landing snippets from one campaign brief.",
  },
  {
    title: "UGC Ad Script Generator",
    href: "/ugc-ad-script-generator",
    body: "UGC ad scripts, creator hook ideas, testimonial-style product proof, B-roll prompts, short-form video CTAs, and landing snippets from one campaign brief.",
  },
  {
    title: "Email Subject Line Generator",
    href: "/email-subject-line-generator",
    body: "Subject lines, preview text, landing hooks, SEO snippets, and CTA variants from one campaign brief.",
  },
  {
    title: "Email Marketing Copy Generator",
    href: "/email-marketing-copy-generator",
    body: "Promotional emails, lifecycle sends, subject lines, preview text, landing snippets, and CTA variants from one campaign brief.",
  },
  {
    title: "Email Preview Text Generator",
    href: "/email-preview-text-generator",
    body: "Preview text, preheader pairings, inbox snippets, landing hooks, and CTA variants from one campaign brief.",
  },
  {
    title: "Email Signature Generator",
    href: "/email-signature-generator",
    body: "Email signatures, professional signature copy, founder and sales CTAs, disclaimer snippets, and polished signoffs from one profile brief.",
  },
  {
    title: "Winback Email Generator",
    href: "/winback-email-generator",
    body: "Winback emails, customer reactivation campaigns, lapsed-customer offers, subscription renewal nudges, and CTA variants from one retention brief.",
  },
  {
    title: "Post-Purchase Email Generator",
    href: "/post-purchase-email-generator",
    body: "Post-purchase emails, order confirmation follow-ups, cross-sell recommendations, second-purchase CTAs, FAQs, and SEO snippets from one customer moment.",
  },
  {
    title: "Discount Email Generator",
    href: "/discount-email-generator",
    body: "Discount emails, promo code announcements, limited-time offer angles, coupon redemption CTAs, FAQs, and SEO snippets from one offer brief.",
  },
  {
    title: "Black Friday Email Generator",
    href: "/black-friday-email-generator",
    body: "Black Friday emails, Cyber Monday follow-ups, promo code reminders, holiday sale landing snippets, FAQs, and CTAs from one seasonal offer brief.",
  },
  {
    title: "Referral Email Generator",
    href: "/referral-email-generator",
    body: "Referral emails, friend-invite campaigns, reward reminders, advocate sharing CTAs, FAQs, and SEO snippets from one referral program brief.",
  },
  {
    title: "Checkout Page Copy Generator",
    href: "/checkout-page-copy-generator",
    body: "Checkout page copy, trust-building payment CTAs, shipping and returns reassurance, checkout FAQ snippets, and conversion copy from one checkout brief.",
  },
  {
    title: "Thank You Page Copy Generator",
    href: "/thank-you-page-copy-generator",
    body: "Thank you page copy, post-conversion next steps, upsell and referral CTAs, confirmation page FAQs, and SEO snippets from one offer brief.",
  },
  {
    title: "SMS Marketing Copy Generator",
    href: "/sms-marketing-copy-generator",
    body: "SMS promos, cart nudges, winback texts, opt-out reminders, landing snippets, and CTA variants from one campaign brief.",
  },
  {
    title: "Abandoned Cart SMS Generator",
    href: "/abandoned-cart-sms-generator",
    body: "Abandoned cart SMS, Shopify cart recovery texts, discount and urgency reminders, compliance-safe opt-out language, and mobile CTAs from one checkout brief.",
  },
  {
    title: "Newsletter Copy Generator",
    href: "/newsletter-copy-generator",
    body: "Newsletter subject lines, preview text, issue sections, sponsor blurbs, SEO snippets, and CTA variants from one rough email brief.",
  },
  {
    title: "Social Media Caption Generator",
    href: "/social-media-caption-generator",
    body: "Social captions, post hooks, SEO snippets, landing page copy, social previews, and CTA variants from one campaign brief.",
  },
  {
    title: "Social Media Post Generator",
    href: "/social-media-post-generator",
    body: "Social media posts, platform-specific post drafts, campaign angles, engagement CTAs, and landing snippets from one campaign brief.",
  },
  {
    title: "Instagram Caption Generator",
    href: "/instagram-caption-generator",
    body: "Instagram captions, post hooks, landing page copy, SEO snippets, social previews, and CTA variants from one offer brief.",
  },
  {
    title: "Instagram Bio Generator",
    href: "/instagram-bio-generator",
    body: "Instagram bios, creator profile taglines, link-in-bio CTAs, keyword angles, and pinned-post hooks from one profile brief.",
  },
  {
    title: "TikTok Caption Generator",
    href: "/tiktok-caption-generator",
    body: "TikTok captions, short-video hooks, hashtag angles, SEO snippets, social previews, and CTA variants from one campaign brief.",
  },
  {
    title: "Pinterest Pin Description Generator",
    href: "/pinterest-pin-description-generator",
    body: "Pinterest pin descriptions, board SEO copy, keyword angles, idea pin hooks, and CTA variants from one visual campaign brief.",
  },
  {
    title: "Twitter Bio Generator",
    href: "/twitter-bio-generator",
    body: "Twitter/X bios, profile taglines, pinned-post hooks, SEO snippets, social previews, and CTA variants from one profile brief.",
  },
  {
    title: "YouTube Description Generator",
    href: "/youtube-description-generator",
    body: "YouTube descriptions, SEO titles, chapters, pinned comments, social previews, and CTA variants from one video brief.",
  },
  {
    title: "YouTube Title Generator",
    href: "/youtube-title-generator",
    body: "YouTube titles, thumbnail hooks, search angles, description openings, and CTA variants from one video brief.",
  },
  {
    title: "YouTube Script Generator",
    href: "/youtube-script-generator",
    body: "Video scripts, hooks, intros, SEO titles, descriptions, pinned comments, and CTA variants from one creator brief.",
  },
  {
    title: "Podcast Show Notes Generator",
    href: "/podcast-show-notes-generator",
    body: "Podcast show notes, episode summaries, SEO titles, timestamps, newsletter blurbs, social hooks, and CTA variants from one episode brief.",
  },
  {
    title: "Podcast Title Generator",
    href: "/podcast-title-generator",
    body: "Podcast titles, episode hooks, SEO episode titles, show description angles, social teasers, and CTA variants from one episode brief.",
  },
  {
    title: "LinkedIn Post Generator",
    href: "/linkedin-post-generator",
    body: "LinkedIn hooks, founder-led post drafts, proof bullets, SEO snippets, and CTA variants from one product update or campaign brief.",
  },
  {
    title: "LinkedIn Ad Copy Generator",
    href: "/linkedin-ad-copy-generator",
    body: "LinkedIn ad copy, B2B paid social hooks, sponsored content variants, lead-gen CTA angles, landing snippets, and FAQs from one campaign brief.",
  },
  {
    title: "AI Email Writer Generator",
    href: "/ai-email-writer-generator",
    body: "Sales emails, launch announcements, lifecycle nurture copy, follow-ups, subject lines, and CTA variants from one campaign brief.",
  },
  {
    title: "Email Sequence Generator",
    href: "/email-sequence-generator",
    body: "Welcome flows, product launches, sales nurture, abandoned-cart reminders, follow-ups, subject lines, and CTA variants from one campaign brief.",
  },
  {
    title: "Review Request Email Generator",
    href: "/review-request-email-generator",
    body: "Review request emails, post-purchase review flows, customer feedback prompts, testimonial collection CTAs, FAQs, and SEO snippets from one customer moment.",
  },
  {
    title: "Abandoned Cart Email Generator",
    href: "/abandoned-cart-email-generator",
    body: "Abandoned cart emails, cart recovery sequences, discount and urgency angles, Shopify recovery copy, FAQs, and SEO snippets from one checkout moment.",
  },
  {
    title: "Browse Abandonment Email Generator",
    href: "/browse-abandonment-email-generator",
    body: "Browse abandonment emails, product-view recovery flows, personalized product reminders, Shopify browse recovery copy, FAQs, and SEO snippets from one viewed product moment.",
  },
  {
    title: "Welcome Email Generator",
    href: "/welcome-email-generator",
    body: "Welcome emails, onboarding email sequences, first-purchase nurture copy, subscriber activation CTAs, FAQs, and SEO snippets from one signup moment.",
  },
  {
    title: "Sales Email Generator",
    href: "/sales-email-generator",
    body: "Sales emails, demo follow-up emails, proposal follow-up copy, objection-handling CTAs, FAQs, and SEO snippets from one warm pipeline moment.",
  },
  {
    title: "LinkedIn Headline Generator",
    href: "/linkedin-headline-generator",
    body: "LinkedIn profile headlines, recruiter keywords, founder positioning, proof hooks, and CTA variants from one professional profile brief.",
  },
  {
    title: "LinkedIn Summary Generator",
    href: "/linkedin-summary-generator",
    body: "LinkedIn About sections, professional profile intros, proof-led story arcs, recruiter keywords, and CTA variants from one profile brief.",
  },
  {
    title: "Pricing Page Copy Generator",
    href: "/pricing-page-copy-generator",
    body: "Pricing page headlines, plan blurbs, FAQs, objection handling, SEO snippets, and CTA variants from one offer brief.",
  },
  {
    title: "Value Proposition Generator",
    href: "/value-proposition-generator",
    body: "Positioning statements, homepage hero copy, proof bullets, SEO snippets, social previews, and CTA variants from one product brief.",
  },
  {
    title: "Unique Selling Proposition Generator",
    href: "/unique-selling-proposition-generator",
    body: "USP statements, differentiation angles, proof bullets, SEO snippets, FAQs, and CTA variants from one product or service brief.",
  },
  {
    title: "Website Headline Generator",
    href: "/website-headline-generator",
    body: "Homepage headlines, subheadlines, proof bullets, SEO snippets, FAQ ideas, and CTA variants from one website brief.",
  },
  {
    title: "Product Positioning Generator",
    href: "/product-positioning-generator",
    body: "Positioning statements, differentiation angles, messaging pillars, SEO snippets, FAQs, and CTA variants from one product brief.",
  },
  {
    title: "Feature Benefit Generator",
    href: "/feature-benefit-generator",
    body: "Turn raw features and specs into buyer-focused benefits, proof bullets, objection reducers, SEO snippets, and CTA angles.",
  },
  {
    title: "Microcopy Generator",
    href: "/microcopy-generator",
    body: "UX microcopy, form helper text, empty states, confirmations, errors, CTA labels, and SEO snippets from one product flow brief.",
  },
  {
    title: "Case Study Generator",
    href: "/case-study-generator",
    body: "Customer story outlines, interview questions, proof snippets, SEO metadata, pull quotes, and CTA copy from one win brief.",
  },
  {
    title: "Testimonial Generator",
    href: "/testimonial-generator",
    body: "Customer testimonials, review highlights, social proof snippets, SEO metadata, and CTA variants from raw customer feedback.",
  },
  {
    title: "Press Release Generator",
    href: "/press-release-generator",
    body: "Press releases, media pitches, announcement copy, SEO metadata, social previews, and CTA variants from one launch brief.",
  },
  {
    title: "Press Kit Generator",
    href: "/press-kit-generator",
    body: "Company boilerplates, founder bios, product facts, media pitches, FAQs, SEO snippets, and CTAs from one brand or launch brief.",
  },
  {
    title: "Webinar Landing Page Generator",
    href: "/webinar-landing-page-generator",
    body: "Webinar registration pages, agendas, speaker proof, SEO snippets, reminder copy, and CTA variants from one event brief.",
  },
  {
    title: "Tagline Generator",
    href: "/tagline-generator",
    body: "Brand taglines, slogans, homepage one-liners, SEO snippets, social previews, and CTA variants from one positioning brief.",
  },
  {
    title: "About Us Page Generator",
    href: "/about-us-page-generator",
    body: "About page copy, founder story, mission statements, proof points, FAQs, metadata, and CTAs from rough brand notes.",
  },
  {
    title: "App Store Description Generator",
    href: "/app-store-description-generator",
    body: "App Store and Google Play descriptions, ASO angles, feature bullets, screenshot captions, FAQs, and CTAs from one app brief.",
  },
];

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="relative isolate">
        <div className="absolute inset-x-0 top-0 -z-10 h-[42rem] bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.22),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(249,115,22,0.18),_transparent_28%),linear-gradient(180deg,rgba(248,250,252,1),rgba(241,245,249,0.8)_60%,rgba(255,255,255,1))] dark:bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.22),_transparent_26%),radial-gradient(circle_at_top_right,_rgba(251,146,60,0.18),_transparent_24%),linear-gradient(180deg,rgba(2,6,23,1),rgba(15,23,42,0.92)_55%,rgba(2,6,23,1))]" />
        <div className="mx-auto flex max-w-7xl flex-col px-6 pb-24 pt-8 lg:px-10">
          <header className="mb-16 flex items-center justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-300">
                SEOCopy
              </p>
            </div>
            <nav className="flex items-center gap-3 text-sm font-medium text-slate-600 dark:text-slate-300">
              <a href="#pricing" className="transition hover:text-slate-950 dark:hover:text-white">
                Pricing
              </a>
              <Link
                href="/generate"
                className="rounded-full border border-slate-300 px-4 py-2 transition hover:border-slate-950 hover:text-slate-950 dark:border-white/15 dark:hover:border-white dark:hover:text-white"
              >
                Open Generator
              </Link>
            </nav>
          </header>

          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="mb-5 inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
                AI-Powered SEO Copy in Seconds
              </p>
              <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl dark:text-white">
                Generate metadata and landing page copy that reads like it was
                written by a strong growth team.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                SEOCopy turns a URL or product description into SEO titles, meta
                descriptions, OG tags, headlines, subheadlines, and CTA ideas
                you can use immediately.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/generate"
                  className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
                >
                  Generate Free
                </Link>
                <a
                  href="#pricing"
                  className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950 dark:border-white/15 dark:text-slate-200 dark:hover:border-white dark:hover:text-white"
                >
                  View Pricing
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-black/10 bg-[linear-gradient(155deg,rgba(15,23,42,0.98),rgba(30,41,59,0.95))] p-8 text-white shadow-[0_30px_110px_rgba(15,23,42,0.24)]">
              <div className="mb-6 flex items-center justify-between">
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100">
                  Live Output Style
                </span>
                <span className="text-sm text-slate-300">60 char SEO title</span>
              </div>
              <div className="space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">
                    SEO Title
                  </p>
                  <p className="mt-2 text-xl font-semibold">
                    Luxury Skincare That Restores Glow Without Irritation
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">
                    Meta Description
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-200">
                    Discover dermatologist-informed skincare for sensitive skin,
                    built to brighten, calm, and convert more clicks into
                    customers.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">
                      Headline
                    </p>
                    <p className="mt-2 text-base font-medium">
                      Calm Skin. Visible Radiance. Zero Guesswork.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">
                      CTA
                    </p>
                    <p className="mt-2 text-base font-medium">Shop the Ritual</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-3">
          {valueProps.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.75rem] border border-black/10 bg-white/75 p-6 shadow-[0_20px_70px_rgba(15,23,42,0.08)] backdrop-blur dark:border-white/10 dark:bg-white/5"
            >
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
                {item.title}
              </h2>
              <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="generator-preview"
        className="mx-auto max-w-7xl px-6 py-12 lg:px-10"
      >
        <div className="rounded-[2rem] border border-black/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(241,245,249,0.86))] p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(15,23,42,0.9),rgba(15,23,42,0.72))]">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-300">
                Generator Preview
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
                Start with two free generations, then upgrade only if it earns
                its place in your workflow.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
                Drop in a page URL or describe your offer. SEOCopy returns
                structured SEO assets and landing page copy variants, ready to
                paste into CMS, ads, and new page drafts.
              </p>
              <Link
                href="/generate"
                className="mt-8 inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Open the Generator
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {["SEO Title", "Meta Description", "OG Tags", "Headlines", "Subheadlines", "CTAs"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-white/80 p-5 dark:border-white/10 dark:bg-white/5"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-300">
                      {item}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                      Structured output with copy-ready variants and one-click
                      clipboard actions.
                    </p>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-300">
            Popular generators
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
            Start with a focused workflow.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {useCasePages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="rounded-[1.75rem] border border-black/10 bg-white/80 p-6 shadow-[0_20px_70px_rgba(15,23,42,0.08)] transition hover:-translate-y-0.5 hover:border-cyan-300 dark:border-white/10 dark:bg-white/5"
            >
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
                {page.title}
              </h2>
              <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">
                {page.body}
              </p>
              <span className="mt-5 inline-flex text-sm font-semibold text-cyan-700 dark:text-cyan-300">
                Open generator page →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-300">
            Pricing
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 dark:text-white">
            Simple pricing for testing, one-off work, and always-on production.
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {pricing.map((plan, index) => (
            <article
              key={plan.name}
              className={`rounded-[2rem] border p-7 shadow-[0_20px_70px_rgba(15,23,42,0.08)] ${
                index === 1
                  ? "border-slate-950 bg-slate-950 text-white dark:border-cyan-300 dark:bg-cyan-300 dark:text-slate-950"
                  : "border-black/10 bg-white/80 dark:border-white/10 dark:bg-white/5"
              }`}
            >
              <p
                className={`text-sm font-semibold uppercase tracking-[0.2em] ${
                  index === 1
                    ? "text-cyan-200 dark:text-slate-700"
                    : "text-slate-500 dark:text-slate-300"
                }`}
              >
                {plan.name}
              </p>
              <p className="mt-5 text-4xl font-semibold tracking-tight">
                {plan.price}
              </p>
              <p
                className={`mt-4 text-base leading-7 ${
                  index === 1
                    ? "text-slate-200 dark:text-slate-800"
                    : "text-slate-600 dark:text-slate-300"
                }`}
              >
                {plan.description}
              </p>
              <Link
                href={plan.href}
                className={`mt-7 inline-flex w-full justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${
                  index === 1
                    ? "bg-white text-slate-950 hover:bg-cyan-50 dark:bg-slate-950 dark:text-white dark:hover:bg-slate-800"
                    : "bg-slate-950 text-white hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
                }`}
              >
                {plan.cta}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-black/10 px-6 py-10 dark:border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between dark:text-slate-300">
          <p>SEOCopy helps teams ship sharper SEO metadata and landing page copy.</p>
          <div className="flex items-center gap-5">
            <Link href="/" className="transition hover:text-slate-950 dark:hover:text-white">
              Home
            </Link>
            <Link
              href="/generate"
              className="transition hover:text-slate-950 dark:hover:text-white"
            >
              Generator
            </Link>
            <a href="#pricing" className="transition hover:text-slate-950 dark:hover:text-white">
              Pricing
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
