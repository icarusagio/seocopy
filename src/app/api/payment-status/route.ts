import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import {
  addClaimedSession,
  buildUsageState,
  getClaimedSessions,
  getUsageState,
  setPaidCreditsCookie,
  setSubscriptionCookie,
} from "@/lib/access";
import { getStripe } from "@/lib/stripe";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const sessionId = url.searchParams.get("session_id");

  if (!sessionId) {
    return NextResponse.json(
      { error: "Missing session_id parameter." },
      { status: 400 },
    );
  }

  const stripe = getStripe();
  const cookieStore = await cookies();

  // Prevent double-claiming
  const claimed = getClaimedSessions(cookieStore);
  if (claimed.includes(sessionId)) {
    const raw = await getUsageState();
    return NextResponse.json({
      usage: buildUsageState(raw),
      message: "Payment already applied.",
    });
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== "paid") {
      return NextResponse.json(
        { error: "Payment not completed." },
        { status: 402 },
      );
    }

    const raw = await getUsageState();
    let updatedRaw = { ...raw };

    if (session.mode === "subscription") {
      updatedRaw.subscriptionActive = true;
      setSubscriptionCookie(cookieStore);
    } else {
      updatedRaw.paidCredits = raw.paidCredits + 1;
      setPaidCreditsCookie(cookieStore, updatedRaw.paidCredits);
    }

    addClaimedSession(cookieStore, sessionId);

    const usage = buildUsageState(updatedRaw);
    return NextResponse.json({
      usage,
      message:
        session.mode === "subscription"
          ? "Subscription activated. Unlimited access unlocked."
          : "Credit added. You have a new paid generation.",
    });
  } catch (error) {
    console.error("[payment-status] Stripe session retrieval failed:", error);
    return NextResponse.json(
      { error: "Unable to verify payment." },
      { status: 500 },
    );
  }
}
