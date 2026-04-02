import {
  RATE_LIMIT_MAX_REQUESTS,
  RATE_LIMIT_WINDOW_MS,
} from "@/lib/constants";

const ipHits = new Map<string, number[]>();

export function getClientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() ?? "unknown";
  }

  return request.headers.get("x-real-ip") ?? "unknown";
}

export function isRateLimited(ip: string) {
  const now = Date.now();
  const hits = ipHits.get(ip) ?? [];
  const recentHits = hits.filter((timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS);

  recentHits.push(now);
  ipHits.set(ip, recentHits);

  return recentHits.length > RATE_LIMIT_MAX_REQUESTS;
}
