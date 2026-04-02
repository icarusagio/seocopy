export const FREE_GENERATION_LIMIT = 2;
export const RATE_LIMIT_WINDOW_MS = 60_000;
export const RATE_LIMIT_MAX_REQUESTS = 10;

export const FREE_USAGE_COOKIE = "seo_copy_free_used";
export const PAID_CREDITS_COOKIE = "seo_copy_paid_credits";
export const SUBSCRIPTION_COOKIE = "seo_copy_subscription";
export const CLAIMED_SESSIONS_COOKIE = "seo_copy_claimed_sessions";

export const INDUSTRIES = [
  "SaaS",
  "Ecommerce",
  "Healthcare",
  "Real Estate",
  "Finance",
  "Education",
  "Marketing Agency",
  "Hospitality",
  "Legal",
  "Home Services",
] as const;

export const TONES = ["Professional", "Casual", "Bold", "Luxury"] as const;

export const CHECKOUT_OPTIONS = {
  single: {
    amount: 500,
    label: "$5 single generation",
    mode: "payment" as const,
  },
  subscription: {
    amount: 1900,
    label: "$19 monthly unlimited",
    mode: "subscription" as const,
  },
};
