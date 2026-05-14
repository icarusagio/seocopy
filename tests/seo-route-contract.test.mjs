import { readFileSync, existsSync } from "node:fs";
import assert from "node:assert/strict";

const route = "amazon-bullet-point-generator";
const routePath = new URL(`../src/app/${route}/page.tsx`, import.meta.url);

assert.ok(existsSync(routePath), `Missing route page for /${route}`);

const page = readFileSync(routePath, "utf8");
for (const requiredText of [
  "Amazon Bullet Point Generator",
  "Amazon bullet points",
  "feature bullets",
  "marketplace SEO",
  "benefit-led listing bullets",
  `/generate?source=${route}`,
  "FAQPage",
]) {
  assert.ok(page.includes(requiredText), `/${route} missing required page content: ${requiredText}`);
}

const sitemap = readFileSync(new URL("../src/app/sitemap.ts", import.meta.url), "utf8");
assert.ok(sitemap.includes(`/${route}`), `sitemap missing /${route}`);

const home = readFileSync(new URL("../src/app/page.tsx", import.meta.url), "utf8");
assert.ok(home.includes(`/${route}`), `homepage use-case list missing /${route}`);

const readme = readFileSync(new URL("../README.md", import.meta.url), "utf8");
assert.ok(readme.includes(`/${route}`), `README product routes missing /${route}`);
