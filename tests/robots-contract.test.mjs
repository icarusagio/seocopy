import { readFileSync } from "node:fs";
import assert from "node:assert/strict";
import { test } from "node:test";

const robotsSource = readFileSync(
  new URL("../src/app/robots.ts", import.meta.url),
  "utf8",
);

test("robots metadata keeps public revenue pages crawlable", () => {
  assert.match(robotsSource, /allow:\s*"\/"/);
  assert.match(robotsSource, /userAgent:\s*"\*"/);
  assert.match(robotsSource, /sitemap:\s*`\$\{siteUrl\}\/sitemap\.xml`/);
  assert.match(robotsSource, /host:\s*siteUrl/);
});

test("robots metadata blocks only non-public operational surfaces", () => {
  const disallowMatch = robotsSource.match(/disallow:\s*\[([^\]]+)\]/s);
  assert.ok(disallowMatch, "robots.ts should declare an explicit disallow array");

  const disallowEntries = Array.from(
    disallowMatch[1].matchAll(/"([^"]+)"/g),
    (match) => match[1],
  );

  assert.deepEqual(disallowEntries, ["/api/", "/analytics", "/analytics/"]);
  assert.ok(!disallowEntries.includes("/generate"));
  assert.ok(!disallowEntries.some((entry) => entry.includes("generator")));
});
