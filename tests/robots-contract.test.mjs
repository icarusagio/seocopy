import { readFileSync } from "node:fs";
import assert from "node:assert/strict";
import { test } from "node:test";

const robots = readFileSync(new URL("../src/app/robots.ts", import.meta.url), "utf8");

test("robots metadata allows revenue pages while pointing crawlers at the sitemap", () => {
  assert.match(robots, /allow:\s*"\/"/);
  assert.match(robots, /sitemap:\s*`\$\{siteUrl\}\/sitemap\.xml`/);
  assert.match(robots, /host:\s*siteUrl/);
  assert.match(robots, /disallow:\s*\["\/api\/",\s*"\/analytics"\]/);
  assert.doesNotMatch(robots, /disallow:\s*"\/"/);
});
