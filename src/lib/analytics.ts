import { createHash } from "node:crypto";

const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com";

export function analyticsEnabled() {
  return Boolean(posthogKey);
}

export function distinctIdFromRequest(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for") ?? "";
  const realIp = request.headers.get("x-real-ip") ?? "";
  const userAgent = request.headers.get("user-agent") ?? "";
  const acceptLanguage = request.headers.get("accept-language") ?? "";
  const seed = `${forwardedFor.split(",")[0].trim()}|${realIp}|${userAgent}|${acceptLanguage}`;

  return `server_${createHash("sha256").update(seed).digest("hex").slice(0, 32)}`;
}

export async function captureServerEvent(
  event: string,
  properties: Record<string, unknown>,
  request: Request,
) {
  if (!posthogKey) {
    return;
  }

  const payload = {
    api_key: posthogKey,
    event,
    distinct_id: distinctIdFromRequest(request),
    properties: {
      ...properties,
      $ip: request.headers.get("x-forwarded-for")?.split(",")[0]?.trim(),
      $user_agent: request.headers.get("user-agent") ?? undefined,
      path: new URL(request.url).pathname,
      source: "seocopy_server",
    },
    timestamp: new Date().toISOString(),
  };

  try {
    await fetch(`${posthogHost.replace(/\/$/, "")}/capture/`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
      keepalive: true,
    });
  } catch (error) {
    // Analytics must never break the product path.
    console.warn("[analytics] capture failed", error);
  }
}
