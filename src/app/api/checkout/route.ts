import { NextResponse } from "next/server";

import { captureServerEvent } from "@/lib/analytics";
import { CHECKOUT_OPTIONS } from "@/lib/constants";
import { getStripe } from "@/lib/stripe";

function getCheckoutOrigin(request: Request) {
  const candidates = [
    request.headers.get("origin"),
    request.headers.get("referer"),
    request.url,
  ];

  for (const candidate of candidates) {
    if (!candidate) {
      continue;
    }

    try {
      return new URL(candidate).origin;
    } catch {
      // Ignore malformed proxy/client headers and try the next source.
    }
  }

  return "http://localhost:3000";
}

export async function POST(request: Request) {
  let body: { plan?: string };
  try {
    body = (await request.json()) as { plan?: string };
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const plan = body.plan as keyof typeof CHECKOUT_OPTIONS | undefined;

  if (!plan || !(plan in CHECKOUT_OPTIONS)) {
    return NextResponse.json(
      { error: "Invalid plan. Use 'single' or 'subscription'." },
      { status: 400 },
    );
  }

  const option = CHECKOUT_OPTIONS[plan];
  const stripe = getStripe();

  const origin = getCheckoutOrigin(request);

  try {
    if (plan === "subscription") {
      // Create a price on the fly (or use a pre-created price ID)
      const session = await stripe.checkout.sessions.create({
        mode: "subscription",
        line_items: [
          {
            price_data: {
              currency: "usd",
              unit_amount: option.amount,
              recurring: { interval: "month" },
              product_data: {
                name: "SEOCopy Unlimited Monthly",
                description: "Unlimited AI-powered SEO copy generation",
              },
            },
            quantity: 1,
          },
        ],
        success_url: `${origin}/generate?paid=true&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${origin}/generate?canceled=true`,
      });

      void captureServerEvent(
        "seo_copy_checkout_started",
        { plan, amount: option.amount, mode: "subscription" },
        request,
      );

      return NextResponse.json({ url: session.url });
    }

    // One-time payment
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            unit_amount: option.amount,
            product_data: {
              name: "SEOCopy Single Generation",
              description: "One AI-powered SEO copy generation credit",
            },
          },
          quantity: 1,
        },
      ],
      success_url: `${origin}/generate?paid=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/generate?canceled=true`,
    });

    void captureServerEvent(
      "seo_copy_checkout_started",
      { plan, amount: option.amount, mode: "payment" },
      request,
    );

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("[checkout] Stripe session creation failed:", error);
    void captureServerEvent(
      "seo_copy_checkout_error",
      { plan, message: error instanceof Error ? error.message : "unknown" },
      request,
    );
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Unable to create checkout session.",
      },
      { status: 500 },
    );
  }
}
