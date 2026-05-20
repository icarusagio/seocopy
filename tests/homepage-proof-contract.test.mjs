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
