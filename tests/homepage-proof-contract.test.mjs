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
