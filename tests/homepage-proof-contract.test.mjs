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
