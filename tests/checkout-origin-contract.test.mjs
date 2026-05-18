import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";

const checkoutRoute = await readFile(
  new URL("../src/app/api/checkout/route.ts", import.meta.url),
  "utf8",
);

test("checkout success and cancel URLs use normalized origins", () => {
  assert.match(checkoutRoute, /function getCheckoutOrigin\(request: Request\)/);
  assert.match(checkoutRoute, /new URL\(candidate\)\.origin/);
  assert.match(checkoutRoute, /const origin = getCheckoutOrigin\(request\);/);
  assert.doesNotMatch(checkoutRoute, /referer"\)\?\.replace/);
});

test("checkout origin fallback checks origin, referer, and request URL before localhost", () => {
  assert.match(
    checkoutRoute,
    /request\.headers\.get\("origin"\),\s*request\.headers\.get\("referer"\),\s*request\.url,/s,
  );
  assert.match(checkoutRoute, /return "http:\/\/localhost:3000";/);
});
