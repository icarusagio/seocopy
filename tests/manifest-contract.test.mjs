import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { test } from "node:test";

const manifestSource = readFileSync(new URL("../src/app/manifest.ts", import.meta.url), "utf8");

const fieldExpectations = [
  ["installable product name", /name:\s*"SEOCopy — AI SEO Copy Generator"/],
  ["short app name", /short_name:\s*"SEOCopy"/],
  ["revenue-funnel start URL", /start_url:\s*"\/generate"/],
  ["root app scope", /scope:\s*"\/"/],
  ["standalone display mode", /display:\s*"standalone"/],
  ["theme color", /theme_color:\s*"#[0-9a-fA-F]{6}"/],
  ["business/productivity/marketing categories", /categories:\s*\["business",\s*"productivity",\s*"marketing"\]/],
];

test("web app manifest opens installs into the SEOCopy generator funnel", () => {
  for (const [label, pattern] of fieldExpectations) {
    assert.match(manifestSource, pattern, `missing ${label}`);
  }

  assert.match(manifestSource, /SEO metadata, OG tags, landing page copy, FAQs, and CTAs/);
});

test("manifest icon references only point at committed assets", () => {
  const iconSrcMatches = manifestSource.matchAll(/src:\s*"([^"]+)"/g);

  for (const [, iconSrc] of iconSrcMatches) {
    assert.ok(iconSrc.startsWith("/"), `icon source should be root-relative: ${iconSrc}`);
    assert.ok(
      existsSync(new URL(`../public${iconSrc}`, import.meta.url)),
      `manifest icon source must exist in public/: ${iconSrc}`,
    );
  }
});
