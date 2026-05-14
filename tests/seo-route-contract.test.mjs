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
