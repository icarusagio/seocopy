#!/usr/bin/env node
import fs from "node:fs/promises";
import path from "node:path";

const host = process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.posthog.com";
const projectId = process.env.POSTHOG_PROJECT_ID;
const apiKey = process.env.POSTHOG_PERSONAL_API_KEY;
const days = Number(process.argv[2] ?? process.env.POSTHOG_EXPORT_DAYS ?? 30);
const outputDir = process.argv[3] ?? "analytics-exports";

if (!projectId || !apiKey) {
  console.error("Missing POSTHOG_PROJECT_ID or POSTHOG_PERSONAL_API_KEY.");
  process.exit(1);
}

const query = `
  SELECT
    timestamp,
    event,
    person_id,
    distinct_id,
    properties.$pathname AS pathname,
    properties.$current_url AS current_url,
    properties.$referring_domain AS referring_domain,
    properties.industry AS industry,
    properties.tone AS tone,
    properties.accessMode AS access_mode,
    properties.hasUrl AS has_url,
    properties.hasDescription AS has_description
  FROM events
  WHERE timestamp >= now() - INTERVAL ${Math.min(Math.max(days, 1), 90)} DAY
    AND (event = '$pageview' OR event LIKE 'seo_copy_%')
  ORDER BY timestamp DESC
  LIMIT 10000
`;

const response = await fetch(`${host.replace(/\/$/, "")}/api/projects/${projectId}/query/`, {
  method: "POST",
  headers: {
    authorization: `Bearer ${apiKey}`,
    "content-type": "application/json",
  },
  body: JSON.stringify({ query: { kind: "HogQLQuery", query } }),
});

const payload = await response.json();
if (!response.ok) {
  console.error(payload.error ?? `PostHog export failed with HTTP ${response.status}`);
  process.exit(1);
}

await fs.mkdir(outputDir, { recursive: true });
const stamp = new Date().toISOString().replaceAll(":", "-").slice(0, 19);
const jsonPath = path.join(outputDir, `seocopy-events-${stamp}.json`);
const csvPath = path.join(outputDir, `seocopy-events-${stamp}.csv`);

await fs.writeFile(jsonPath, JSON.stringify(payload, null, 2));

const columns = payload.columns ?? [];
const rows = payload.results ?? [];
const escapeCsv = (value) => {
  const text = String(value ?? "");
  return /[",\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
};
const csv = [columns.map(escapeCsv).join(","), ...rows.map((row) => row.map(escapeCsv).join(","))].join("\n");
await fs.writeFile(csvPath, csv);

console.log(JSON.stringify({ jsonPath, csvPath, rows: rows.length }, null, 2));
