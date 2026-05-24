import { readdirSync, readFileSync, existsSync } from "node:fs";
import assert from "node:assert/strict";
import { test } from "node:test";

const appDir = new URL("../src/app/", import.meta.url);
const sitemap = readFileSync(new URL("../src/app/sitemap.ts", import.meta.url), "utf8");
const home = readFileSync(new URL("../src/app/page.tsx", import.meta.url), "utf8");
const manifest = readFileSync(new URL("../src/app/manifest.ts", import.meta.url), "utf8");
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
  "/back-in-stock-email-generator",
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
  "/churn-reduction-email-generator",
  "/cold-email-generator",
  "/collection-page-seo-generator",
  "/competitor-comparison-page-generator",
  "/content-brief-generator",
  "/content-calendar-generator",
  "/copywriting-generator",
  "/coupon-email-generator",
  "/course-description-generator",
  "/customer-feedback-survey-generator",
  "/customer-retention-email-generator",
  "/discount-email-generator",
  "/ecommerce-seo-copy-generator",
  "/email-marketing-copy-generator",
  "/email-preview-text-generator",
  "/email-sequence-generator",
  "/email-signature-generator",
  "/email-subject-line-generator",
  "/etsy-product-description-generator",
  "/etsy-product-title-generator",
  "/event-invitation-email-generator",
  "/facebook-ad-copy-generator",
  "/faq-generator",
  "/feature-benefit-generator",
  "/free-seo-copy-generator",
  "/google-ads-copy-generator",
  "/google-ads-description-generator",
  "/google-ads-headline-generator",
  "/google-business-profile-description-generator",
  "/google-business-profile-post-generator",
  "/google-review-response-generator",
  "/hero-headline-generator",
  "/holiday-gift-guide-generator",
  "/homepage-copy-generator",
  "/homepage-title-generator",
  "/how-to-guide-generator",
  "/image-alt-text-generator",
  "/influencer-outreach-email-generator",
  "/instagram-ad-copy-generator",
  "/instagram-bio-generator",
  "/instagram-caption-generator",
  "/job-description-generator",
  "/klaviyo-email-generator",
  "/landing-page-ab-test-generator",
  "/landing-page-copy-generator",
  "/landing-page-headline-generator",
  "/landing-page-outline-generator",
  "/landing-page-seo-generator",
  "/landing-page-wireframe-generator",
  "/lead-magnet-generator",
  "/lead-nurturing-email-generator",
  "/linkedin-ad-copy-generator",
  "/linkedin-carousel-generator",
  "/linkedin-company-page-description-generator",
  "/linkedin-headline-generator",
  "/linkedin-post-generator",
  "/linkedin-summary-generator",
  "/local-seo-copy-generator",
  "/loyalty-program-email-generator",
  "/mailchimp-email-generator",
  "/marketing-copy-generator",
  "/meta-description-generator",
  "/meta-tag-generator",
  "/microcopy-generator",
  "/microsoft-ads-description-generator",
  "/newsletter-copy-generator",
  "/pinterest-ad-copy-generator",
  "/pinterest-pin-description-generator",
  "/podcast-episode-description-generator",
  "/podcast-show-notes-generator",
  "/podcast-title-generator",
  "/popup-copy-generator",
  "/post-purchase-email-generator",
  "/press-kit-generator",
  "/press-release-generator",
  "/pricing-page-copy-generator",
  "/product-bullet-point-generator",
  "/product-comparison-generator",
  "/product-comparison-table-generator",
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
  "/product-update-email-generator",
  "/proposal-generator",
  "/real-estate-listing-description-generator",
  "/reddit-ad-copy-generator",
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
  "/shopify-app-launch-copy-generator",
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
  "/tiktok-ad-copy-generator",
  "/tiktok-caption-generator",
  "/trial-activation-email-generator",
  "/twitter-bio-generator",
  "/ugc-ad-script-generator",
  "/unique-selling-proposition-generator",
  "/value-proposition-generator",
  "/webinar-invitation-email-generator",
  "/webinar-landing-page-generator",
  "/website-copy-generator",
  "/website-headline-generator",
  "/welcome-email-generator",
  "/white-paper-generator",
  "/winback-email-generator",
  "/x-twitter-post-generator",
  "/youtube-description-generator",
  "/youtube-script-generator",
  "/youtube-shorts-script-generator",
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
    route: "etsy-product-title-generator",
    requiredTexts: [
      "Etsy Product Title Generator",
      "Etsy product titles",
      "marketplace SEO snippets",
      "tag angles",
      "Etsy title output checklist",
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
    route: "holiday-gift-guide-generator",
    requiredTexts: [
      "Holiday Gift Guide Generator",
      "holiday gift guide copy",
      "curated product picks",
      "seasonal SEO snippets",
      "shop-now CTAs",
      "FAQPage",
    ],
  },
  {
    route: "coupon-email-generator",
    requiredTexts: [
      "Coupon Email Generator",
      "coupon emails",
      "promo code announcements",
      "redemption reminders",
      "click-ready CTAs",
      "FAQPage",
    ],
  },
  {
    route: "linkedin-company-page-description-generator",
    requiredTexts: [
      "LinkedIn Company Page Description Generator",
      "LinkedIn company About copy",
      "tagline options",
      "specialties",
      "follow CTAs",
      "FAQPage",
    ],
  },
  {
    route: "mailchimp-email-generator",
    requiredTexts: [
      "Mailchimp Email Generator",
      "Mailchimp-ready email campaigns",
      "audience variants",
      "Mailchimp subject-line and preview-text pairs",
      "Mailchimp campaign playbooks",
      "FAQPage",
    ],
  },
  {
    route: "trial-activation-email-generator",
    requiredTexts: [
      "Trial Activation Email Generator",
      "trial activation emails",
      "onboarding nudges",
      "upgrade CTAs",
      "Trial lifecycle output checklist",
      "FAQPage",
    ],
  },
  {
    route: "event-invitation-email-generator",
    requiredTexts: [
      "Event Invitation Email Generator",
      "event invitation emails",
      "RSVP copy",
      "reminder nudges",
      "Event invitation output checklist",
      "FAQPage",
    ],
  },
  {
    route: "webinar-invitation-email-generator",
    requiredTexts: [
      "Webinar Invitation Email Generator",
      "webinar invitation emails",
      "reminder sequences",
      "replay follow-ups",
      "Webinar email workflow",
      "FAQPage",
    ],
  },
  {
    route: "churn-reduction-email-generator",
    requiredTexts: [
      "Churn Reduction Email Generator",
      "churn reduction emails",
      "cancellation-save copy",
      "renewal-risk nudges",
      "Retention output checklist",
      "FAQPage",
    ],
  },
  {
    route: "product-update-email-generator",
    requiredTexts: [
      "Product Update Email Generator",
      "product update emails",
      "feature announcement copy",
      "release-note summaries",
      "Product update output checklist",
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
    route: "linkedin-carousel-generator",
    requiredTexts: [
      "LinkedIn Carousel Generator",
      "LinkedIn carousels",
      "slide-by-slide outlines",
      "B2B content brief",
      "conversion caption",
      "FAQPage",
    ],
  },
  {
    route: "lead-nurturing-email-generator",
    requiredTexts: [
      "Lead Nurturing Email Generator",
      "lead nurturing emails",
      "drip campaign copy",
      "segment-aware follow-ups",
      "conversion CTAs",
      "FAQPage",
    ],
  },
  {
    route: "loyalty-program-email-generator",
    requiredTexts: [
      "Loyalty Program Email Generator",
      "loyalty program emails",
      "rewards campaign copy",
      "VIP tier announcements",
      "member perks CTAs",
      "FAQPage",
    ],
  },
  {
    route: "podcast-episode-description-generator",
    requiredTexts: [
      "Podcast Episode Description Generator",
      "podcast episode descriptions",
      "SEO summaries",
      "app snippets",
      "listener CTAs",
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
    route: "back-in-stock-email-generator",
    requiredTexts: [
      "Back-in-Stock Email Generator",
      "back-in-stock emails",
      "restock alert subject lines",
      "Shopify inventory recovery copy",
      "Restock alert output checklist",
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
    route: "influencer-outreach-email-generator",
    requiredTexts: [
      "Influencer Outreach Email Generator",
      "influencer outreach emails",
      "creator collaboration pitches",
      "affiliate partnership asks",
      "gifted-collab follow-ups",
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
    route: "x-twitter-post-generator",
    requiredTexts: [
      "X Twitter Post Generator",
      "X/Twitter posts",
      "thread outlines",
      "engagement prompts",
      "conversion CTAs",
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
    route: "customer-retention-email-generator",
    requiredTexts: [
      "Customer Retention Email Generator",
      "customer retention emails",
      "lifecycle email copy",
      "repeat-purchase CTAs",
      "loyalty offers",
      "FAQPage",
    ],
  },
  {
    route: "course-description-generator",
    requiredTexts: [
      "Course Description Generator",
      "course descriptions",
      "learning outcomes",
      "module summaries",
      "enrollment CTAs",
      "FAQPage",
    ],
  },
  {
    route: "job-description-generator",
    requiredTexts: [
      "Job Description Generator",
      "job descriptions",
      "responsibilities",
      "qualification sections",
      "hiring CTAs",
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
  {
    route: "product-comparison-table-generator",
    requiredTexts: [
      "Product Comparison Table Generator",
      "product comparison tables",
      "feature grids",
      "alternative-page proof points",
      "buyer decision criteria",
      "FAQPage",
    ],
  },
  {
    route: "shopify-app-launch-copy-generator",
    requiredTexts: [
      "Shopify App Launch Copy Generator",
      "Shopify app launch copy",
      "Product Hunt",
      "launch emails",
      "install CTAs",
      "FAQPage",
    ],
  },
  {
    route: "google-ads-headline-generator",
    requiredTexts: [
      "Google Ads Headline Generator",
      "Google Ads headlines",
      "responsive search ad headlines",
      "keyword-matched PPC angles",
      "landing page hooks",
      "FAQPage",
    ],
  },
  {
    route: "microsoft-ads-description-generator",
    requiredTexts: [
      "Microsoft Ads Description Generator",
      "Microsoft Ads descriptions",
      "Bing search ad copy",
      "PPC offer angles",
      "landing page hooks",
      "FAQPage",
    ],
  },
  {
    route: "tiktok-ad-copy-generator",
    requiredTexts: [
      "TikTok Ad Copy Generator",
      "TikTok ad hooks",
      "Spark Ads angles",
      "creator-style primary text",
      "landing page snippets",
      "FAQPage",
    ],
  },
  {
    route: "pinterest-ad-copy-generator",
    requiredTexts: [
      "Pinterest Ad Copy Generator",
      "Pinterest ad copy",
      "promoted pin headlines",
      "shopping campaign descriptions",
      "Visual commerce conversion",
      "FAQPage",
    ],
  },
  {
    route: "reddit-ad-copy-generator",
    requiredTexts: [
      "Reddit Ad Copy Generator",
      "Reddit ad copy",
      "promoted post headlines",
      "community-aware angles",
      "comment-safe proof",
      "FAQPage",
    ],
  },
  {
    route: "white-paper-generator",
    requiredTexts: [
      "White Paper Generator",
      "white paper outline",
      "executive summary",
      "research-backed sections",
      "lead magnet CTAs",
      "FAQPage",
    ],
  },
  {
    route: "youtube-shorts-script-generator",
    requiredTexts: [
      "YouTube Shorts Script Generator",
      "YouTube Shorts scripts",
      "retention beats",
      "caption overlays",
      "YouTube Shorts hooks",
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

test("web app manifest opens installed users into the revenue funnel", () => {
  assert.ok(manifest.includes('name: "SEOCopy — AI SEO Copy Generator"'), "manifest missing product name");
  assert.ok(manifest.includes('start_url: "/generate"'), "manifest should open to generator funnel");
  assert.ok(manifest.includes('display: "standalone"'), "manifest should enable app-like launch");
  assert.ok(manifest.includes('theme_color: "#2563eb"'), "manifest missing browser theme color");
  assert.ok(manifest.includes('"business", "productivity", "marketing"'), "manifest missing buyer-facing categories");
  assert.ok(!manifest.includes('/favicon.ico'), "manifest should not advertise missing favicon asset");
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
