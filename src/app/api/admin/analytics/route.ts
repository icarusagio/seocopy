import { NextResponse } from "next/server";

const posthogApiHost = process.env.POSTHOG_API_HOST ?? "https://us.posthog.com";
const projectId = process.env.POSTHOG_PROJECT_ID;
const personalApiKey = process.env.POSTHOG_PERSONAL_API_KEY;
const adminToken = process.env.ANALYTICS_ADMIN_TOKEN;

type QueryResult = {
  columns?: string[];
  results?: unknown[][];
  error?: string;
};

function unauthorized() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

async function runHogql(query: string): Promise<QueryResult> {
  if (!projectId || !personalApiKey) {
    return { error: "PostHog API is not configured." };
  }

  const response = await fetch(
    `${posthogApiHost.replace(/\/$/, "")}/api/projects/${projectId}/query/`,
    {
      method: "POST",
      headers: {
        authorization: `Bearer ${personalApiKey}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({ query: { kind: "HogQLQuery", query } }),
      cache: "no-store",
    },
  );

  const payload = (await response.json()) as QueryResult;
  if (!response.ok) {
    return {
      error:
        payload.error ??
        `PostHog query failed with HTTP ${response.status}. Check API credentials and region.`,
    };
  }

  return payload;
}

export async function GET(request: Request) {
  if (!adminToken) {
    return NextResponse.json(
      {
        error:
          "ANALYTICS_ADMIN_TOKEN is not configured. Set it in Vercel to enable the private analytics dashboard.",
      },
      { status: 503 },
    );
  }

  const url = new URL(request.url);
  const token =
    request.headers.get("x-analytics-token") ?? url.searchParams.get("token");

  if (token !== adminToken) {
    return unauthorized();
  }

  if (!projectId || !personalApiKey) {
    return NextResponse.json(
      {
        error:
          "PostHog API credentials are missing. Set POSTHOG_PROJECT_ID and POSTHOG_PERSONAL_API_KEY in Vercel.",
      },
      { status: 503 },
    );
  }

  const days = Math.min(Math.max(Number(url.searchParams.get("days") ?? 30), 1), 90);

  const [daily, topPages, actions, referrers, generationBreakdown] = await Promise.all([
    runHogql(`
      SELECT
        toDate(timestamp) AS day,
        uniq(person_id) AS unique_visitors,
        countIf(event = '$pageview') AS pageviews,
        countIf(event = 'seo_copy_generate_success') AS generations,
        countIf(event = 'seo_copy_checkout_started') AS checkout_starts
      FROM events
      WHERE timestamp >= now() - INTERVAL ${days} DAY
      GROUP BY day
      ORDER BY day ASC
    `),
    runHogql(`
      SELECT
        coalesce(properties.$pathname, properties.seocopy_path, properties.$current_url, 'unknown') AS page,
        count() AS pageviews,
        uniq(person_id) AS unique_visitors
      FROM events
      WHERE event = '$pageview' AND timestamp >= now() - INTERVAL ${days} DAY
      GROUP BY page
      ORDER BY pageviews DESC
      LIMIT 25
    `),
    runHogql(`
      SELECT
        event,
        count() AS events,
        uniq(person_id) AS unique_people
      FROM events
      WHERE timestamp >= now() - INTERVAL ${days} DAY
        AND (event = '$pageview' OR event LIKE 'seo_copy_%')
      GROUP BY event
      ORDER BY events DESC
    `),
    runHogql(`
      SELECT
        coalesce(properties.$referring_domain, properties.$referrer, 'direct/unknown') AS referrer,
        count() AS pageviews,
        uniq(person_id) AS unique_visitors
      FROM events
      WHERE event = '$pageview' AND timestamp >= now() - INTERVAL ${days} DAY
      GROUP BY referrer
      ORDER BY pageviews DESC
      LIMIT 20
    `),
    runHogql(`
      SELECT
        coalesce(properties.industry, 'unknown') AS industry,
        coalesce(properties.tone, 'unknown') AS tone,
        coalesce(properties.accessMode, 'unknown') AS access_mode,
        count() AS generations
      FROM events
      WHERE event = 'seo_copy_generate_success'
        AND timestamp >= now() - INTERVAL ${days} DAY
      GROUP BY industry, tone, access_mode
      ORDER BY generations DESC
      LIMIT 50
    `),
  ]);

  return NextResponse.json({
    days,
    generatedAt: new Date().toISOString(),
    daily,
    topPages,
    actions,
    referrers,
    generationBreakdown,
  });
}
