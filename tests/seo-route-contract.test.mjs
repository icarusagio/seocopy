import { readFileSync, existsSync } from "node:fs";
import assert from "node:assert/strict";

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
];

const sitemap = readFileSync(new URL("../src/app/sitemap.ts", import.meta.url), "utf8");
const home = readFileSync(new URL("../src/app/page.tsx", import.meta.url), "utf8");
const readme = readFileSync(new URL("../README.md", import.meta.url), "utf8");

for (const { route, requiredTexts } of routeContracts) {
  const routePath = new URL(`../src/app/${route}/page.tsx`, import.meta.url);
  assert.ok(existsSync(routePath), `Missing route page for /${route}`);

  const page = readFileSync(routePath, "utf8");
  for (const requiredText of [...requiredTexts, `/generate?source=${route}`]) {
    assert.ok(page.includes(requiredText), `/${route} missing required page content: ${requiredText}`);
  }

  assert.ok(sitemap.includes(`/${route}`), `sitemap missing /${route}`);
  assert.ok(home.includes(`/${route}`), `homepage use-case list missing /${route}`);
  assert.ok(readme.includes(`/${route}`), `README product routes missing /${route}`);
}
