import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";

const generatorClient = await readFile(
  new URL("../src/components/generator-client.tsx", import.meta.url),
  "utf8",
);

test("generator captures core revenue funnel analytics events", () => {
  for (const eventName of [
    "seocopy_generate_submitted",
    "seocopy_generate_succeeded",
    "seocopy_generate_failed",
    "seocopy_checkout_started",
    "seocopy_checkout_redirected",
    "seocopy_checkout_failed",
    "seocopy_payment_confirmed",
    "seocopy_checkout_canceled",
    "seocopy_output_copied",
  ]) {
    assert.match(generatorClient, new RegExp(`trackRevenueEvent\\("${eventName}"`));
  }
});

test("analytics helper is gated by the public PostHog key", () => {
  assert.match(generatorClient, /process\.env\.NEXT_PUBLIC_POSTHOG_KEY/);
  assert.match(generatorClient, /posthog\.capture\(eventName/);
});

test("checkout analytics preserves safe CTA source attribution", async () => {
  const generatePage = await readFile(
    new URL("../src/app/generate/page.tsx", import.meta.url),
    "utf8",
  );
  const homepage = await readFile(
    new URL("../src/app/page.tsx", import.meta.url),
    "utf8",
  );

  assert.match(homepage, /plan=one-time&source=homepage-pricing-card/);
  assert.match(homepage, /plan=subscription&source=homepage-pricing-card/);
  assert.match(generatePage, /\^\[a-z0-9-\]\{1,48\}\$/);
  assert.match(generatorClient, /initialCheckoutSource \?\? "url-plan"/);
  assert.match(generatorClient, /source = "generator-pricing-card"/);
  assert.match(generatorClient, /source,/);
});
