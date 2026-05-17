import { readdirSync, readFileSync, existsSync } from "node:fs";
import assert from "node:assert/strict";
import { test } from "node:test";

const appDir = new URL("../src/app/", import.meta.url);
const sitemap = readFileSync(new URL("../src/app/sitemap.ts", import.meta.url), "utf8");
const home = readFileSync(new URL("../src/app/page.tsx", import.meta.url), "utf8");
const readme = readFileSync(new URL("../README.md", import.meta.url), "utf8");

const routeInventory = [
  "/abandoned-cart-email-generator",
  "/abandoned-cart-sms-generator",
  "/about-us-page-generator",
  "/ad-copy-generator",
  "/advertorial-copy-generator",
  "/ai-copy-rewriter",
  "/ai-email-writer-generator",
  "/ai-page-title-generator",
  "/ai-product-description-generator",
  "/ai-seo-copy-generator",
  "/amazon-bullet-point-generator",
  "/amazon-product-description-generator",
  "/amazon-product-title-generator",
  "/app-store-description-generator",
  "/b2b-landing-page-copy-generator",
  "/black-friday-email-generator",
  "/blog-conclusion-generator",
  "/blog-introduction-generator",
  "/blog-meta-description-generator",
  "/blog-post-generator",
  "/blog-post-outline-generator",
  "/blog-title-generator",
  "/blog-topic-generator",
  "/brand-story-generator",
  "/brand-voice-generator",
  "/browse-abandonment-email-generator",
  "/call-to-action-generator",
  "/case-study-generator",
  "/category-description-generator",
  "/checkout-page-copy-generator",
  "/cold-email-generator",
  "/collection-page-seo-generator",
  "/competitor-comparison-page-generator",
  "/content-brief-generator",
  "/content-calendar-generator",
  "/copywriting-generator",
  "/customer-feedback-survey-generator",
  "/discount-email-generator",
  "/ecommerce-seo-copy-generator",
  "/email-marketing-copy-generator",
  "/email-preview-text-generator",
  "/email-sequence-generator",
  "/email-signature-generator",
  "/email-subject-line-generator",
  "/etsy-product-description-generator",
  "/facebook-ad-copy-generator",
  "/faq-generator",
  "/feature-benefit-generator",
  "/free-seo-copy-generator",
  "/google-ads-copy-generator",
  "/google-business-profile-description-generator",
  "/google-review-response-generator",
  "/hero-headline-generator",
  "/homepage-copy-generator",
  "/homepage-title-generator",
  "/how-to-guide-generator",
  "/image-alt-text-generator",
  "/instagram-ad-copy-generator",
  "/instagram-bio-generator",
  "/instagram-caption-generator",
  "/landing-page-ab-test-generator",
  "/landing-page-copy-generator",
  "/landing-page-headline-generator",
  "/landing-page-outline-generator",
  "/landing-page-seo-generator",
  "/landing-page-wireframe-generator",
  "/lead-magnet-generator",
  "/linkedin-ad-copy-generator",
  "/linkedin-headline-generator",
  "/linkedin-post-generator",
  "/linkedin-summary-generator",
  "/local-seo-copy-generator",
  "/marketing-copy-generator",
  "/meta-description-generator",
  "/meta-tag-generator",
  "/microcopy-generator",
  "/newsletter-copy-generator",
  "/pinterest-pin-description-generator",
  "/podcast-show-notes-generator",
  "/podcast-title-generator",
  "/popup-copy-generator",
  "/post-purchase-email-generator",
  "/press-kit-generator",
  "/press-release-generator",
  "/pricing-page-copy-generator",
  "/product-bullet-point-generator",
  "/product-comparison-generator",
  "/product-demo-script-generator",
  "/product-description-generator",
  "/product-explainer-video-generator",
  "/product-faq-generator",
  "/product-launch-copy-generator",
  "/product-name-generator",
  "/product-name-ideas-generator",
  "/product-page-seo-generator",
  "/product-positioning-generator",
  "/product-review-generator",
  "/product-seo-title-generator",
  "/proposal-generator",
  "/real-estate-listing-description-generator",
  "/referral-email-generator",
  "/restaurant-menu-description-generator",
  "/return-policy-generator",
  "/review-request-email-generator",
  "/saas-landing-page-copy-generator",
  "/sales-email-generator",
  "/sales-page-copy-generator",
  "/schema-markup-generator",
  "/seo-audit-report-generator",
  "/seo-content-generator",
  "/seo-friendly-url-generator",
  "/seo-keyword-generator",
  "/seo-title-generator",
  "/service-page-copy-generator",
  "/shipping-policy-generator",
  "/shopify-app-store-listing-generator",
  "/shopify-collection-description-generator",
  "/shopify-email-marketing-generator",
  "/shopify-image-alt-text-generator",
  "/shopify-meta-description-generator",
  "/shopify-product-description-generator",
  "/shopify-product-title-generator",
  "/shopify-seo-copy-generator",
  "/small-business-seo-copy-generator",
  "/sms-marketing-copy-generator",
  "/social-media-caption-generator",
  "/social-media-post-generator",
  "/startup-seo-copy-generator",
  "/tagline-generator",
  "/terms-and-conditions-generator",
  "/testimonial-generator",
  "/thank-you-page-copy-generator",
  "/tiktok-caption-generator",
  "/twitter-bio-generator",
  "/ugc-ad-script-generator",
  "/unique-selling-proposition-generator",
  "/value-proposition-generator",
  "/webinar-landing-page-generator",
  "/website-copy-generator",
  "/website-headline-generator",
  "/welcome-email-generator",
  "/winback-email-generator",
  "/youtube-description-generator",
  "/youtube-script-generator",
  "/youtube-title-generator"
];

const routeContracts = [
  {
    route: "amazon-bullet-point-generator",
    requiredTexts: [
      "Amazon Bullet Point Generator",
      "Amazon bullet points",
      "feature bullets",
      "marketplace SEO",
      "benefit-led listing bullets",
      "FAQPage",
    ],
  },
  {
    route: "landing-page-outline-generator",
    requiredTexts: [
      "Landing Page Outline Generator",
      "landing page outline",
      "section-by-section page plan",
      "conversion flow",
      "wireframe-ready copy brief",
      "FAQPage",
    ],
  },
  {
    route: "landing-page-seo-generator",
    requiredTexts: [
      "Landing Page SEO Generator",
      "landing page SEO",
      "search-intent sections",
      "metadata and H1 ideas",
      "FAQ schema prompts",
      "FAQPage",
    ],
  },
  {
    route: "schema-markup-generator",
    requiredTexts: [
      "Schema Markup Generator",
      "schema markup",
      "JSON-LD starter copy",
      "FAQ snippets",
      "validation notes",
      "FAQPage",
    ],
  },
  {
    route: "how-to-guide-generator",
    requiredTexts: [
      "How-To Guide Generator",
      "how-to guides",
      "step-by-step tutorial sections",
      "instructional SEO outline",
      "FAQ schema prompts",
      "FAQPage",
    ],
  },
  {
    route: "landing-page-wireframe-generator",
    requiredTexts: [
      "Landing Page Wireframe Generator",
      "landing page wireframes",
      "section layout blocks",
      "above-the-fold structure",
      "conversion-ready wireframe notes",
      "FAQPage",
    ],
  },
  {
    route: "landing-page-ab-test-generator",
    requiredTexts: [
      "Landing Page A/B Test Generator",
      "landing page A/B tests",
      "variant hypotheses",
      "experiment-ready copy blocks",
      "conversion test ideas",
      "FAQPage",
    ],
  },
  {
    route: "ai-product-description-generator",
    requiredTexts: [
      "AI Product Description Generator",
      "AI product descriptions",
      "feature-to-benefit product copy",
      "ecommerce SEO snippets",
      "Shopify and Amazon listing angles",
      "FAQPage",
    ],
  },
  {
    route: "linkedin-ad-copy-generator",
    requiredTexts: [
      "LinkedIn Ad Copy Generator",
      "LinkedIn ad copy",
      "B2B paid social hooks",
      "sponsored content variants",
      "lead-gen CTA angles",
      "FAQPage",
    ],
  },
  {
    route: "ai-email-writer-generator",
    requiredTexts: [
      "AI Email Writer Generator",
      "AI email writer",
      "sales emails",
      "launch announcements",
      "lifecycle nurture copy",
      "FAQPage",
    ],
  },
  {
    route: "email-sequence-generator",
    requiredTexts: [
      "Email Sequence Generator",
      "email sequence copy",
      "welcome flows",
      "product launches",
      "sales nurture",
      "FAQPage",
    ],
  },
  {
    route: "review-request-email-generator",
    requiredTexts: [
      "Review Request Email Generator",
      "review request emails",
      "post-purchase review flows",
      "customer feedback prompts",
      "testimonial collection CTAs",
      "FAQPage",
    ],
  },
  {
    route: "abandoned-cart-email-generator",
    requiredTexts: [
      "Abandoned Cart Email Generator",
      "abandoned cart emails",
      "cart recovery sequences",
      "discount and urgency angles",
      "Shopify recovery copy",
      "FAQPage",
    ],
  },
  {
    route: "welcome-email-generator",
    requiredTexts: [
      "Welcome Email Generator",
      "welcome emails",
      "onboarding email sequences",
      "first-purchase nurture copy",
      "subscriber activation CTAs",
      "FAQPage",
    ],
  },
  {
    route: "sales-email-generator",
    requiredTexts: [
      "Sales Email Generator",
      "sales emails",
      "demo follow-up emails",
      "proposal follow-up copy",
      "objection-handling CTAs",
      "FAQPage",
    ],
  },
  {
    route: "browse-abandonment-email-generator",
    requiredTexts: [
      "Browse Abandonment Email Generator",
      "browse abandonment emails",
      "product-view recovery flows",
      "personalized product reminders",
      "Shopify browse recovery copy",
      "FAQPage",
    ],
  },
  {
    route: "winback-email-generator",
    requiredTexts: [
      "Winback Email Generator",
      "winback emails",
      "customer reactivation campaigns",
      "lapsed-customer offers",
      "subscription renewal nudges",
      "FAQPage",
    ],
  },
  {
    route: "post-purchase-email-generator",
    requiredTexts: [
      "Post-Purchase Email Generator",
      "post-purchase emails",
      "order confirmation follow-ups",
      "cross-sell recommendations",
      "second-purchase CTAs",
      "FAQPage",
    ],
  },
  {
    route: "discount-email-generator",
    requiredTexts: [
      "Discount Email Generator",
      "discount emails",
      "promo code announcements",
      "limited-time offer angles",
      "coupon redemption CTAs",
      "FAQPage",
    ],
  },
  {
    route: "referral-email-generator",
    requiredTexts: [
      "Referral Email Generator",
      "referral emails",
      "friend-invite campaigns",
      "reward reminders",
      "advocate sharing CTAs",
      "FAQPage",
    ],
  },
  {
    route: "checkout-page-copy-generator",
    requiredTexts: [
      "Checkout Page Copy Generator",
      "checkout page copy",
      "trust-building payment CTAs",
      "shipping and returns reassurance",
      "checkout FAQ snippets",
      "FAQPage",
    ],
  },
  {
    route: "abandoned-cart-sms-generator",
    requiredTexts: [
      "Abandoned Cart SMS Generator",
      "abandoned cart SMS",
      "Shopify cart recovery texts",
      "discount and urgency reminders",
      "compliance-safe opt-out language",
      "FAQPage",
    ],
  },
  {
    route: "instagram-ad-copy-generator",
    requiredTexts: [
      "Instagram Ad Copy Generator",
      "Instagram ad copy",
      "Reels hooks",
      "Story ad variants",
      "paid social landing snippets",
      "FAQPage",
    ],
  },
  {
    route: "black-friday-email-generator",
    requiredTexts: [
      "Black Friday Email Generator",
      "Black Friday emails",
      "Cyber Monday follow-ups",
      "promo code reminders",
      "holiday sale landing snippets",
      "FAQPage",
    ],
  },
  {
    route: "ugc-ad-script-generator",
    requiredTexts: [
      "UGC Ad Script Generator",
      "UGC ad scripts",
      "creator hook ideas",
      "testimonial-style product proof",
      "short-form video CTAs",
      "FAQPage",
    ],
  },
  {
    route: "social-media-post-generator",
    requiredTexts: [
      "Social Media Post Generator",
      "social media posts",
      "platform-specific post drafts",
      "campaign angles",
      "engagement CTAs",
      "FAQPage",
    ],
  },
  {
    route: "podcast-title-generator",
    requiredTexts: [
      "Podcast Title Generator",
      "podcast titles",
      "episode hooks",
      "SEO episode titles",
      "show description angles",
      "FAQPage",
    ],
  },
  {
    route: "product-faq-generator",
    requiredTexts: [
      "Product FAQ Generator",
      "product FAQs",
      "buyer objection answers",
      "PDP FAQ schema snippets",
      "Shopify product questions",
      "FAQPage",
    ],
  },
  {
    route: "product-review-generator",
    requiredTexts: [
      "Product Review Generator",
      "product review copy",
      "star-rating summaries",
      "testimonial snippets",
      "review request follow-ups",
      "FAQPage",
    ],
  },
  {
    route: "return-policy-generator",
    requiredTexts: [
      "Return Policy Generator",
      "return policy copy",
      "refund and exchange rules",
      "shipping cutoff notes",
      "support-reducing FAQs",
      "FAQPage",
    ],
  },
  {
    route: "shipping-policy-generator",
    requiredTexts: [
      "Shipping Policy Generator",
      "shipping policy copy",
      "delivery timelines",
      "carrier cutoff notes",
      "support-reducing shipping FAQs",
      "FAQPage",
    ],
  },
  {
    route: "terms-and-conditions-generator",
    requiredTexts: [
      "Terms and Conditions Generator",
      "terms and conditions copy",
      "store policy clauses",
      "checkout acceptance language",
      "support-reducing terms FAQs",
      "FAQPage",
    ],
  },
  {
    route: "email-signature-generator",
    requiredTexts: [
      "Email Signature Generator",
      "email signatures",
      "professional signature copy",
      "founder and sales CTAs",
      "disclaimer snippets",
      "FAQPage",
    ],
  },
  {
    route: "thank-you-page-copy-generator",
    requiredTexts: [
      "Thank You Page Copy Generator",
      "thank you page copy",
      "post-conversion next steps",
      "upsell and referral CTAs",
      "confirmation page FAQs",
      "FAQPage",
    ],
  },
  {
    route: "shopify-email-marketing-generator",
    requiredTexts: [
      "Shopify Email Marketing Generator",
      "Shopify email marketing",
      "product-drop email campaigns",
      "segmented promo angles",
      "Klaviyo-ready copy blocks",
      "FAQPage",
    ],
  },
  {
    route: "shopify-collection-description-generator",
    requiredTexts: [
      "Shopify Collection Description Generator",
      "Shopify collection descriptions",
      "SEO title tags and meta descriptions",
      "Open Graph titles and descriptions",
      "Shopify collection SEO",
      "FAQPage",
    ],
  },
  {
    route: "shopify-image-alt-text-generator",
    requiredTexts: [
      "Shopify Image Alt Text Generator",
      "Shopify image alt text",
      "product image alt text",
      "accessibility first",
      "filename ideas",
      "FAQPage",
    ],
  },
  {
    route: "popup-copy-generator",
    requiredTexts: [
      "Popup Copy Generator",
      "popup copy",
      "exit-intent offers",
      "email capture modals",
      "discount and lead magnet variants",
      "FAQPage",
    ],
  },
  {
    route: "customer-feedback-survey-generator",
    requiredTexts: [
      "Customer Feedback Survey Generator",
      "customer feedback surveys",
      "post-purchase survey questions",
      "NPS prompts",
      "product feedback forms",
      "FAQPage",
    ],
  },
  {
    route: "homepage-copy-generator",
    requiredTexts: [
      "Homepage Copy Generator",
      "homepage copy",
      "hero section messaging",
      "homepage section copy",
      "above-the-fold CTAs",
      "FAQPage",
    ],
  },
  {
    route: "product-demo-script-generator",
    requiredTexts: [
      "Product Demo Script Generator",
      "product demo scripts",
      "demo flow",
      "objection-handling talk tracks",
      "follow-up CTAs",
      "FAQPage",
    ],
  },
  {
    route: "product-explainer-video-generator",
    requiredTexts: [
      "Product Explainer Video Generator",
      "product explainer videos",
      "explainer video scripts",
      "problem-solution storyboard",
      "voiceover hooks",
      "FAQPage",
    ],
  },
];

const discoveredMarketingRoutes = readdirSync(appDir, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => `/${entry.name}`)
  .filter((route) => route !== "/generate" && !route.startsWith("("))
  .filter((route) => existsSync(new URL(`../src/app/${route.slice(1)}/page.tsx`, import.meta.url)))
  .sort();

test("route inventory stays synchronized with App Router marketing pages", () => {
  assert.deepEqual(
    routeInventory,
    discoveredMarketingRoutes,
    "Update routeInventory whenever a marketing page is added or removed",
  );
});

test("all marketing routes are discoverable from homepage, sitemap, and README", () => {
  for (const route of routeInventory) {
    const routePath = new URL(`../src/app/${route.slice(1)}/page.tsx`, import.meta.url);
    assert.ok(existsSync(routePath), `Missing route page for ${route}`);

    const page = readFileSync(routePath, "utf8");
    assert.ok(page.includes(`/generate?source=${route.slice(1)}`), `${route} missing generator CTA source`);
    assert.ok(sitemap.includes(route), `sitemap missing ${route}`);
    assert.ok(home.includes(route), `homepage use-case list missing ${route}`);
    assert.ok(readme.includes(route), `README product routes missing ${route}`);
  }
});

test("high-intent route contracts keep revenue copy intact", () => {
  for (const { route, requiredTexts } of routeContracts) {
    const routePath = new URL(`../src/app/${route}/page.tsx`, import.meta.url);
    assert.ok(existsSync(routePath), `Missing route page for /${route}`);

    const page = readFileSync(routePath, "utf8");
    for (const requiredText of [...requiredTexts, `/generate?source=${route}`]) {
      assert.ok(page.includes(requiredText), `/${route} missing required page content: ${requiredText}`);
    }
  }
});
