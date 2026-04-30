import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import {
  buildUsageState,
  getUsageState,
  setFreeUsageCookie,
  setPaidCreditsCookie,
} from "@/lib/access";
import { generateSeoCopy } from "@/lib/ai";
import { FREE_GENERATION_LIMIT } from "@/lib/constants";
import { getClientIp, isRateLimited } from "@/lib/rate-limit";
import type { GeneratePayload } from "@/lib/types";

export async function POST(request: Request) {
  const ip = getClientIp(request);

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please wait a minute." },
      { status: 429 },
    );
  }

  let body: GeneratePayload;
  try {
    body = (await request.json()) as GeneratePayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  if (!body.url && !body.description) {
    return NextResponse.json(
      { error: "Provide a URL or a business description." },
      { status: 400 },
    );
  }

  const raw = await getUsageState();
  const cookieStore = await cookies();

  // Determine access
  if (
    !raw.subscriptionActive &&
    raw.paidCredits < 1 &&
    raw.freeUsed >= FREE_GENERATION_LIMIT
  ) {
    return NextResponse.json(
      { error: "Free usage exhausted. Purchase credits or subscribe to continue." },
      { status: 402 },
    );
  }

  try {
    const { data, sourceSummary } = await generateSeoCopy(body);

    // Deduct usage
    const updatedRaw = { ...raw };
    if (raw.subscriptionActive) {
      // no deduction
    } else if (raw.paidCredits > 0) {
      updatedRaw.paidCredits = raw.paidCredits - 1;
      setPaidCreditsCookie(cookieStore, updatedRaw.paidCredits);
    } else {
      updatedRaw.freeUsed = raw.freeUsed + 1;
      setFreeUsageCookie(cookieStore, updatedRaw.freeUsed);
    }

    const usage = buildUsageState(updatedRaw);

    return NextResponse.json({ data, usage, sourceSummary });
  } catch (error) {
    console.error("[generate] AI generation failed:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Generation failed. Please try again.",
      },
      { status: 500 },
    );
  }
}
