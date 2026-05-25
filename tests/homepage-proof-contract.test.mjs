import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const homepageSource = await readFile(new URL("../src/app/page.tsx", import.meta.url), "utf8");

test("homepage includes output proof samples for buyer-intent conversion", () => {
  const requiredCopy = [
    "Output proof",
    "See the type of publish-ready copy buyers get before they pay.",
    "DTC skincare",
    "Local service",
    "B2B SaaS",
    "Barrier Repair Serum for Calm, Camera-Ready Skin",
    "Austin Emergency Plumbers Available in 60 Minutes",
    "Spot Expansion Risks Before Renewal Calls Start",
  ];

  for (const copy of requiredCopy) {
    assert.match(homepageSource, new RegExp(copy.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
});

test("homepage pricing section reduces checkout risk before paid conversion", () => {
  const requiredCopy = [
    "Low-risk checkout promise",
    "Try 2 free generations with no signup before you buy.",
    "Keep every title, description, CTA, and page section you generate.",
    "Use one $5 generation for a one-off sprint or cancel monthly access anytime.",
  ];

  for (const copy of requiredCopy) {
    assert.match(homepageSource, new RegExp(copy.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
});

test("homepage highlights the fastest revenue-producing copy tasks", () => {
  const requiredCopy = [
    "Revenue sprint shortcuts",
    "Start with the copy task closest to revenue.",
    "Launch a product page today",
    "Fix an underperforming landing page",
    "Ship a revenue email",
    "/product-page-seo-generator",
    "/landing-page-seo-generator",
    "/email-marketing-copy-generator",
  ];

  for (const copy of requiredCopy) {
    assert.match(homepageSource, new RegExp(copy.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
});

test("homepage gives trial visitors copy-paste prompt starters", () => {
  const requiredCopy = [
    "Copy-paste prompt starters",
    "Remove the blank-page step before the first free generation.",
    "Product page sprint",
    "Local service sprint",
    "Retention campaign sprint",
    "homepage-prompt-starter-product-page",
    "homepage-prompt-starter-local-service",
    "homepage-prompt-starter-retention",
    "promptStarterHref",
    "encodeURIComponent(starter.prompt)",
    "Open generator with this sprint",
  ];

  for (const copy of requiredCopy) {
    assert.match(homepageSource, new RegExp(copy.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
});

test("homepage explains the free trial activation path before paid checkout", () => {
  const requiredCopy = [
    "Free trial activation path",
    "Know exactly when a free generation is worth paying for.",
    "1. Paste a ready brief",
    "2. Compare the output to a live page",
    "3. Upgrade only for the next revenue asset",
    "homepage-trial-activation-path",
  ];

  for (const copy of requiredCopy) {
    assert.match(homepageSource, new RegExp(copy.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
});

test("homepage shows before-and-after conversion proof before trial activation", () => {
  const requiredCopy = [
    "Before/after conversion proof",
    "Show trial visitors the rewrite quality before they spend a free generation.",
    "Product page rescue",
    "Local service booking",
    "Retention email winback",
    "Leakproof Travel Mug That Keeps Coffee Hot Through the Commute",
    "Dallas Pest Control With Same-Week Appointments",
    "Your favorites are back in stock",
    "homepage-before-after-product-page",
    "homepage-before-after-local-service",
    "homepage-before-after-retention-email",
  ];

  for (const copy of requiredCopy) {
    assert.match(homepageSource, new RegExp(copy.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
});

test("homepage groups popular generators into buyer revenue pathways", () => {
  const requiredCopy = [
    "Revenue pathway finder",
    "Match the next generator to the buyer outcome.",
    "Shopify merchant",
    "Recover carts and product views",
    "Founder launching paid traffic",
    "Turn ad clicks into a clearer page",
    "Agency or content operator",
    "Package repeatable SEO deliverables",
    "/abandoned-cart-email-generator",
    "/browse-abandonment-email-generator",
    "/back-in-stock-email-generator",
    "/landing-page-seo-generator",
    "/google-ads-description-generator",
    "/pricing-page-copy-generator",
    "/seo-audit-report-generator",
    "/content-brief-generator",
    "/case-study-generator",
  ];

  for (const copy of requiredCopy) {
    assert.match(homepageSource, new RegExp(copy.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
});

test("homepage maps paid-intent visitors to tracked revenue sprints", () => {
  const requiredCopy = [
    "Paid-intent action map",
    "Turn the visitor’s revenue problem into the next generation.",
    "Merchant with stock or cart leaks",
    "Visitors are reaching products, then leaving before checkout.",
    "Founder buying traffic this week",
    "Ad spend is live, but the landing page does not explain the offer fast enough.",
    "Agency packaging recurring delivery",
    "Clients need a repeatable SEO or conversion asset instead of another blank-doc kickoff.",
    "homepage-paid-intent-merchant-recovery",
    "homepage-paid-intent-traffic-page",
    "homepage-paid-intent-agency-sprint",
  ];

  for (const copy of requiredCopy) {
    assert.match(homepageSource, new RegExp(copy.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
});

test("homepage preloads revenue-ready briefs for high-intent trial visitors", () => {
  const requiredCopy = [
    "Ready-to-buy brief builder",
    "Turn a fuzzy problem into a copy-ready prompt before the free trial.",
    "High-intent visitors often know the revenue leak but not the inputs SEOCopy needs.",
    "Ecommerce operator",
    "Paid traffic founder",
    "Agency sprint lead",
    "Recover revenue from carts, browse sessions, or restock demand.",
    "Turn a campaign hypothesis into page copy before spend scales.",
    "Package one client brief into a sellable SEO or conversion deliverable.",
    "homepage-brief-builder-ecommerce-recovery",
    "homepage-brief-builder-paid-traffic",
    "homepage-brief-builder-agency-sprint",
    "readyBriefBuilderHref",
    "encodeURIComponent(builder.prompt)",
    "Open prefilled brief",
  ];

  for (const copy of requiredCopy) {
    assert.match(homepageSource, new RegExp(copy.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
});

test("homepage routes launch visitors into bundled generator playbooks", () => {
  const requiredCopy = [
    "Launch playbook router",
    "Bundle the next three assets for a revenue launch.",
    "High-intent visitors can move from a launch goal to the exact generator sequence",
    "Shopify launch",
    "Paid campaign launch",
    "Retention launch",
    "/shopify-app-store-listing-generator",
    "/shopify-app-launch-copy-generator",
    "/product-update-email-generator",
    "/google-ads-description-generator",
    "/landing-page-ab-test-generator",
    "/checkout-page-copy-generator",
    "/post-purchase-email-generator",
    "/winback-email-generator",
    "/loyalty-program-email-generator",
    "homepage-launch-playbook-shopify",
    "homepage-launch-playbook-paid-campaign",
    "homepage-launch-playbook-retention",
    "Open launch sprint",
  ];

  for (const copy of requiredCopy) {
    assert.match(homepageSource, new RegExp(copy.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
});

test("homepage reduces checkout hesitation with a paid-generation readiness ladder", () => {
  const requiredCopy = [
    "Checkout readiness ladder",
    "Show visitors when the next paid generation is justified.",
    "Reduce hesitation by turning the free trial into a short decision path",
    "1. Pick the asset tied to revenue",
    "2. Paste the exact offer and proof",
    "3. Buy only when the next output has a home",
    "homepage-checkout-readiness-asset",
    "homepage-checkout-readiness-brief",
    "homepage-checkout-readiness-upgrade",
    "/generate?plan=one-time&source=homepage-checkout-readiness-upgrade",
    "Open this checkout step",
  ];

  for (const copy of requiredCopy) {
    assert.match(homepageSource, new RegExp(copy.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
});

test("homepage gives free-trial visitors explicit one-time purchase triggers", () => {
  const requiredCopy = [
    "Paid generation triggers",
    "Know the exact moment to spend $5 on the next output.",
    "Convert free-trial momentum into a concrete one-time purchase",
    "The free output names a campaign you can ship today",
    "You found a stronger page angle but need variants",
    "A client or teammate approved the first draft",
    "homepage-paid-generation-trigger-campaign",
    "homepage-paid-generation-trigger-variants",
    "homepage-paid-generation-trigger-approved-brief",
    "/generate?plan=one-time&source=homepage-paid-generation-trigger-campaign",
    "Buy the next $5 output",
  ];

  for (const copy of requiredCopy) {
    assert.match(homepageSource, new RegExp(copy.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
});

test("homepage shows repeat visitors when monthly subscription beats one-off checkout", () => {
  const requiredCopy = [
    "Subscription upgrade signals",
    "Show repeat users when monthly access beats one-off checkout.",
    "Convert serious trial users into the $19/month plan",
    "You need more than three copy assets this month",
    "A paid campaign needs weekly iteration",
    "An agency or operator is shipping for multiple clients",
    "homepage-subscription-upgrade-signal-roadmap",
    "homepage-subscription-upgrade-signal-iteration",
    "homepage-subscription-upgrade-signal-agency",
    "/generate?plan=subscription&source=homepage-subscription-upgrade-signal-roadmap",
    "Start monthly when this fits",
  ];

  for (const copy of requiredCopy) {
    assert.match(homepageSource, new RegExp(copy.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
});

test("homepage turns subscription interest into monthly output plans", () => {
  const requiredCopy = [
    "Monthly output plans",
    "Turn a subscription into a shipping calendar.",
    "Give high-intent visitors concrete monthly use cases",
    "Merchant retention month",
    "Paid traffic testing month",
    "Agency delivery month",
    "homepage-monthly-output-plan-retention",
    "homepage-monthly-output-plan-paid-traffic",
    "homepage-monthly-output-plan-agency",
    "/generate?plan=subscription&source=homepage-monthly-output-plan-retention",
    "Open the monthly plan",
  ];

  for (const copy of requiredCopy) {
    assert.match(homepageSource, new RegExp(copy.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
});

test("homepage gives subscribers team-ready handoff kits", () => {
  const requiredCopy = [
    "Subscription handoff kits",
    "Make monthly outputs easy to approve and ship.",
    "Turn subscription interest into team-ready deliverables",
    "Founder approval kit",
    "Marketer launch kit",
    "Client delivery kit",
    "homepage-subscription-handoff-kit-founder",
    "homepage-subscription-handoff-kit-marketer",
    "homepage-subscription-handoff-kit-client",
    "/generate?plan=subscription&source=homepage-subscription-handoff-kit-founder",
    "Start this monthly handoff",
  ];

  for (const copy of requiredCopy) {
    assert.match(homepageSource, new RegExp(copy.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
});

test("homepage gives subscribers first-month success checkpoints", () => {
  const requiredCopy = [
    "Subscription success checkpoints",
    "Show subscribers how the first month pays back.",
    "Reduce subscription hesitation by making the first paid month feel measurable",
    "Week 1: Ship the first revenue asset",
    "Week 2: Create the follow-up variants",
    "Week 4: Package the renewal proof",
    "homepage-subscription-success-week-one",
    "homepage-subscription-success-variants",
    "homepage-subscription-success-renewal",
    "/generate?plan=subscription&source=homepage-subscription-success-week-one",
    "Start this success checkpoint",
  ];

  for (const copy of requiredCopy) {
    assert.match(homepageSource, new RegExp(copy.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
});

test("homepage handles subscription objections before recurring checkout", () => {
  const requiredCopy = [
    "Subscription objection reducers",
    "Answer the last questions before monthly checkout.",
    "Convert high-intent visitors who like the output but hesitate on recurring access",
    "I am not sure I will use it every week",
    "I need proof before adding another tool",
    "My team already has scattered prompts",
    "homepage-subscription-objection-weekly-use",
    "homepage-subscription-objection-proof",
    "homepage-subscription-objection-workflow",
    "/generate?plan=subscription&source=homepage-subscription-objection-weekly-use",
    "Start this monthly answer",
  ];

  for (const copy of requiredCopy) {
    assert.match(homepageSource, new RegExp(copy.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
});
