#!/usr/bin/env node
import fs from "node:fs/promises";

const inputPath = process.argv[2];
if (!inputPath) {
  console.error("Usage: npm run analytics:analyze -- analytics-exports/seocopy-events-....json");
  process.exit(1);
}

const payload = JSON.parse(await fs.readFile(inputPath, "utf8"));
const columns = payload.columns ?? [];
const rows = payload.results ?? [];
const index = Object.fromEntries(columns.map((column, i) => [column, i]));
const get = (row, column) => row[index[column]];

const counts = new Map();
const pages = new Map();
const referrers = new Map();
const generations = new Map();
const daily = new Map();

for (const row of rows) {
  const event = get(row, "event") ?? "unknown";
  counts.set(event, (counts.get(event) ?? 0) + 1);

  const timestamp = String(get(row, "timestamp") ?? "").slice(0, 10);
  if (timestamp) {
    const day = daily.get(timestamp) ?? { pageviews: 0, generations: 0, checkouts: 0 };
    if (event === "$pageview") day.pageviews += 1;
    if (event === "seo_copy_generate_success") day.generations += 1;
    if (event === "seo_copy_checkout_started") day.checkouts += 1;
    daily.set(timestamp, day);
  }

  if (event === "$pageview") {
    const page = get(row, "pathname") ?? get(row, "current_url") ?? "unknown";
    pages.set(page, (pages.get(page) ?? 0) + 1);
    const referrer = get(row, "referring_domain") ?? "direct/unknown";
    referrers.set(referrer, (referrers.get(referrer) ?? 0) + 1);
  }

  if (event === "seo_copy_generate_success") {
    const key = [
      get(row, "industry") ?? "unknown",
      get(row, "tone") ?? "unknown",
      get(row, "access_mode") ?? "unknown",
    ].join(" / ");
    generations.set(key, (generations.get(key) ?? 0) + 1);
  }
}

const top = (map, limit = 10) =>
  [...map.entries()].sort((a, b) => b[1] - a[1]).slice(0, limit);

const summary = {
  rows: rows.length,
  events: Object.fromEntries(top(counts, 20)),
  topPages: Object.fromEntries(top(pages)),
  topReferrers: Object.fromEntries(top(referrers)),
  generationSegments: Object.fromEntries(top(generations, 20)),
  daily: Object.fromEntries([...daily.entries()].sort()),
};

console.log(JSON.stringify(summary, null, 2));
