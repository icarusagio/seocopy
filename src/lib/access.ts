import { cookies } from "next/headers";

import {
  CLAIMED_SESSIONS_COOKIE,
  FREE_GENERATION_LIMIT,
  FREE_USAGE_COOKIE,
  PAID_CREDITS_COOKIE,
  SUBSCRIPTION_COOKIE,
} from "@/lib/constants";
import type { UsageState } from "@/lib/types";

type MutableCookieStore = Awaited<ReturnType<typeof cookies>>;

function parseInteger(value: string | undefined, fallback = 0) {
  const parsed = Number.parseInt(value ?? "", 10);
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : fallback;
}

export async function getUsageState() {
  const cookieStore = await cookies();
  const freeUsed = parseInteger(cookieStore.get(FREE_USAGE_COOKIE)?.value);
  const paidCredits = parseInteger(cookieStore.get(PAID_CREDITS_COOKIE)?.value);
  const subscriptionActive =
    cookieStore.get(SUBSCRIPTION_COOKIE)?.value === "active";

  return {
    freeUsed,
    paidCredits,
    subscriptionActive,
  };
}

export function buildUsageState(input: {
  freeUsed: number;
  paidCredits: number;
  subscriptionActive: boolean;
}): UsageState {
  const accessMode = input.subscriptionActive
    ? "subscription"
    : input.paidCredits > 0
      ? "paid"
      : "free";

  return {
    ...input,
    freeRemaining: Math.max(FREE_GENERATION_LIMIT - input.freeUsed, 0),
    accessMode,
  };
}

export function setFreeUsageCookie(
  cookieStore: MutableCookieStore,
  freeUsed: number,
) {
  cookieStore.set(FREE_USAGE_COOKIE, String(freeUsed), {
    maxAge: 60 * 60 * 24 * 30,
    path: "/",
    sameSite: "lax",
  });
}

export function setPaidCreditsCookie(
  cookieStore: MutableCookieStore,
  credits: number,
) {
  cookieStore.set(PAID_CREDITS_COOKIE, String(Math.max(credits, 0)), {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 30,
    path: "/",
    sameSite: "lax",
  });
}

export function setSubscriptionCookie(cookieStore: MutableCookieStore) {
  cookieStore.set(SUBSCRIPTION_COOKIE, "active", {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 30,
    path: "/",
    sameSite: "lax",
  });
}

export function getClaimedSessions(cookieStore: MutableCookieStore) {
  const raw = cookieStore.get(CLAIMED_SESSIONS_COOKIE)?.value ?? "";
  return raw
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);
}

export function addClaimedSession(
  cookieStore: MutableCookieStore,
  sessionId: string,
) {
  const claimedSessions = new Set(getClaimedSessions(cookieStore));
  claimedSessions.add(sessionId);

  cookieStore.set(CLAIMED_SESSIONS_COOKIE, Array.from(claimedSessions).join(","), {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 30,
    path: "/",
    sameSite: "lax",
  });
}
