import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const robotsSource = await readFile(new URL("../src/app/robots.ts", import.meta.url), "utf8");

test("robots metadata points crawlers to public revenue pages and sitemap", () => {
  const requiredCopy = [
    "userAgent: \"*\"",
    "allow: \"/\"",
    "https://seocopy.vercel.app",
    "sitemap: `${siteUrl}/sitemap.xml`",
    "host: siteUrl",
  ];

  for (const copy of requiredCopy) {
    assert.match(robotsSource, new RegExp(copy.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
});

test("robots disallows only non-public implementation surfaces", () => {
  const disallowedPrivateSurfaces = ["/api/", "/analytics", "/analytics/", "/_next/"];
  const publicRevenueSurfaces = [
    "/generate",
    "-generator",
    "/product-page-seo-generator",
    "/landing-page-seo-generator",
    "/etsy-product-title-generator",
  ];

  for (const route of disallowedPrivateSurfaces) {
    assert.match(robotsSource, new RegExp(route.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }

  for (const route of publicRevenueSurfaces) {
    assert.doesNotMatch(robotsSource, new RegExp(`disallow:\\s*[^;]*${route.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`));
  }
});
