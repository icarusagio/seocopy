"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { startTransition, useEffect, useState } from "react";

import {
  CHECKOUT_OPTIONS,
  FREE_GENERATION_LIMIT,
  INDUSTRIES,
  TONES,
} from "@/lib/constants";
import type {
  GeneratePayload,
  GenerateResponse,
  GenerationResult,
  Industry,
  Tone,
  UsageState,
} from "@/lib/types";

function defaultUsageFromFreeCount(freeUsed: number): UsageState {
  return {
    freeUsed,
    freeRemaining: Math.max(FREE_GENERATION_LIMIT - freeUsed, 0),
    paidCredits: 0,
    subscriptionActive: false,
    accessMode: "free",
  };
}

function setFreeUsageCookie(freeUsed: number) {
  document.cookie = `seo_copy_free_used=${freeUsed};max-age=${60 * 60 * 24 * 30};path=/;samesite=lax`;
}

type Notice = { type: "error" | "success" | "info"; text: string };

interface GeneratorClientProps {
  initialUsage: UsageState;
  checkoutState: {
    paid: boolean;
    canceled: boolean;
    sessionId?: string;
  };
}

function OutputCard({
  title,
  values,
}: {
  title: string;
  values: string | string[];
}) {
  const [copiedValue, setCopiedValue] = useState<string | null>(null);
  const items = Array.isArray(values) ? values : [values];

  return (
    <section>
      <h3 className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-300">
        {title}
      </h3>
      <div className="space-y-2">
        {items.map((value) => (
          <div
            key={value}
            className="flex items-start justify-between gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-white/10 dark:bg-slate-950/50"
          >
            <p className="text-sm text-slate-800 dark:text-slate-100">
              {value}
            </p>
            <button
              type="button"
              onClick={() => {
                navigator.clipboard.writeText(value);
                setCopiedValue(value);
                window.setTimeout(() => setCopiedValue(null), 1500);
              }}
              className="rounded-full border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-slate-900 hover:text-slate-900 dark:border-white/15 dark:text-slate-200 dark:hover:border-white"
            >
              {copiedValue === value ? "Copied" : "Copy"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function GeneratorClient({
  initialUsage,
  checkoutState,
}: GeneratorClientProps) {
  const router = useRouter();
  const [usage, setUsage] = useState(initialUsage);
  const [result, setResult] = useState<GenerationResult | null>(null);
  const [sourceSummary, setSourceSummary] = useState<string | undefined>();
  const [pending, setPending] = useState(false);
  const [checkoutPending, setCheckoutPending] = useState<
    "single" | "subscription" | null
  >(null);
  const [notice, setNotice] = useState<Notice | null>(
    checkoutState.canceled
      ? {
          type: "info",
          text: "Checkout was canceled. You can still use your free generations.",
        }
      : null,
  );
  const [form, setForm] = useState<GeneratePayload>({
    url: "",
    description: "",
    industry: "",
    tone: "Professional",
  });

  useEffect(() => {
    const storedValue = window.localStorage.getItem("seocopy_free_used");
    const localFreeUsed = storedValue
      ? Number.parseInt(storedValue, 10)
      : 0;

    if (
      Number.isFinite(localFreeUsed) &&
      localFreeUsed >= 0 &&
      localFreeUsed !== usage.freeUsed &&
      !usage.subscriptionActive &&
      usage.paidCredits === 0
    ) {
      setUsage(
        defaultUsageFromFreeCount(
          Math.min(localFreeUsed, FREE_GENERATION_LIMIT),
        ),
      );
    }

    if (!storedValue) {
      window.localStorage.setItem(
        "seocopy_free_used",
        String(usage.freeUsed),
      );
    }

    setFreeUsageCookie(usage.freeUsed);
  }, [usage.freeUsed, usage.paidCredits, usage.subscriptionActive]);

  useEffect(() => {
    if (!checkoutState.paid || !checkoutState.sessionId) {
      return;
    }

    let cancelled = false;

    startTransition(() => {
      void (async () => {
        try {
          const response = await fetch(
            `/api/payment-status?session_id=${encodeURIComponent(checkoutState.sessionId!)}`,
            { method: "GET" },
          );
          const payload = (await response.json()) as
            | { usage: UsageState; message?: string }
            | { error: string };

          if (!response.ok) {
            throw new Error(
              "error" in payload ? payload.error : "Unable to verify payment.",
            );
          }

          if (!cancelled) {
            setUsage((payload as { usage: UsageState }).usage);
            setNotice({
              type: "success",
              text:
                (payload as { message?: string }).message ??
                "Payment confirmed. Access unlocked.",
            });
            router.replace("/generate");
          }
        } catch (error) {
          if (!cancelled) {
            setNotice({
              type: "error",
              text:
                error instanceof Error
                  ? error.message
                  : "Unable to verify payment. Refresh to try again.",
            });
          }
        }
      })();
    });

    return () => {
      cancelled = true;
    };
  }, [checkoutState.paid, checkoutState.sessionId, router]);

  const isBlocked =
    !usage.subscriptionActive &&
    usage.paidCredits < 1 &&
    usage.freeRemaining < 1;

  async function handleGenerate(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setNotice(null);

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(form),
      });

      const payload = (await response.json()) as
        | GenerateResponse
        | { error: string };

      if (!response.ok) {
        throw new Error(
          "error" in payload ? payload.error : "Generation failed.",
        );
      }

      const res = payload as GenerateResponse;
      setResult(res.data);
      setUsage(res.usage);
      setSourceSummary(res.sourceSummary);
      window.localStorage.setItem(
        "seocopy_free_used",
        String(res.usage.freeUsed),
      );
      setFreeUsageCookie(res.usage.freeUsed);
      setNotice({
        type: "success",
        text:
          res.usage.accessMode === "free"
            ? `Generation complete. ${res.usage.freeRemaining} free run(s) left.`
            : res.usage.accessMode === "paid"
              ? `Generation complete. ${res.usage.paidCredits} paid credit(s) left.`
              : "Generation complete. Subscription access is active.",
      });
    } catch (error) {
      setNotice({
        type: "error",
        text:
          error instanceof Error
            ? error.message
            : "Something went wrong generating copy.",
      });
    } finally {
      setPending(false);
    }
  }

  async function handleCheckout(plan: "single" | "subscription") {
    setCheckoutPending(plan);
    setNotice(null);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ plan }),
      });
      const payload = (await response.json()) as {
        url?: string;
        error?: string;
      };

      if (!response.ok || !payload.url) {
        throw new Error(payload.error ?? "Unable to start checkout.");
      }

      window.location.href = payload.url;
    } catch (error) {
      setNotice({
        type: "error",
        text:
          error instanceof Error
            ? error.message
            : "Unable to start checkout.",
      });
      setCheckoutPending(null);
    }
  }

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-8 px-6 py-10 lg:px-10">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left: Form */}
        <section className="rounded-[2rem] border border-black/10 bg-white/75 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur dark:border-white/10 dark:bg-white/5">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-300">
                Generator
              </p>
              <h1 className="text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
                SEO copy, meta tags, and landing page messaging
              </h1>
            </div>
            <Link
              href="/"
              className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950 dark:border-white/15 dark:text-slate-100 dark:hover:border-white"
            >
              Back to landing
            </Link>
          </div>

          {/* Usage stats */}
          <div className="mb-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-slate-950/50">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-300">
                Free Left
              </p>
              <p className="mt-2 text-3xl font-semibold text-slate-950 dark:text-white">
                {usage.subscriptionActive ? "∞" : usage.freeRemaining}
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-slate-950/50">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-300">
                Paid Credits
              </p>
              <p className="mt-2 text-3xl font-semibold text-slate-950 dark:text-white">
                {usage.subscriptionActive ? "∞" : usage.paidCredits}
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-slate-950/50">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-300">
                Access
              </p>
              <p className="mt-2 text-xl font-semibold text-slate-950 dark:text-white">
                {usage.subscriptionActive
                  ? "Unlimited"
                  : usage.paidCredits > 0
                    ? "Paid"
                    : "Free"}
              </p>
            </div>
          </div>

          {/* Notice */}
          {notice ? (
            <div
              className={`mb-6 rounded-2xl px-4 py-3 text-sm ${
                notice.type === "error"
                  ? "border border-red-200 bg-red-50 text-red-700 dark:border-red-400/20 dark:bg-red-500/10 dark:text-red-200"
                  : notice.type === "success"
                    ? "border border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-400/20 dark:bg-emerald-500/10 dark:text-emerald-200"
                    : "border border-cyan-200 bg-cyan-50 text-cyan-700 dark:border-cyan-400/20 dark:bg-cyan-500/10 dark:text-cyan-200"
              }`}
            >
              {notice.text}
            </div>
          ) : null}

          {/* Form */}
          <form className="space-y-5" onSubmit={handleGenerate}>
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
                URL
              </span>
              <input
                type="url"
                value={form.url ?? ""}
                onChange={(e) =>
                  setForm((c) => ({ ...c, url: e.target.value }))
                }
                placeholder="https://example.com"
                className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-slate-950 dark:border-white/10 dark:bg-slate-950/60 dark:text-white dark:focus:border-cyan-300"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
                Product or business description
              </span>
              <textarea
                value={form.description ?? ""}
                onChange={(e) =>
                  setForm((c) => ({ ...c, description: e.target.value }))
                }
                placeholder="Describe what you sell, who it serves, and the outcome customers want."
                rows={6}
                className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-slate-950 dark:border-white/10 dark:bg-slate-950/60 dark:text-white dark:focus:border-cyan-300"
              />
            </label>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
                  Industry
                </span>
                <select
                  value={form.industry ?? ""}
                  onChange={(e) =>
                    setForm((c) => ({
                      ...c,
                      industry: e.target.value as Industry,
                    }))
                  }
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-slate-950 dark:border-white/10 dark:bg-slate-950/60 dark:text-white dark:focus:border-cyan-300"
                >
                  <option value="">Select an industry</option>
                  {INDUSTRIES.map((industry) => (
                    <option key={industry} value={industry}>
                      {industry}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
                  Tone
                </span>
                <select
                  value={form.tone ?? "Professional"}
                  onChange={(e) =>
                    setForm((c) => ({
                      ...c,
                      tone: e.target.value as Tone,
                    }))
                  }
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-slate-950 dark:border-white/10 dark:bg-slate-950/60 dark:text-white dark:focus:border-cyan-300"
                >
                  {TONES.map((tone) => (
                    <option key={tone} value={tone}>
                      {tone}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="submit"
                disabled={pending || isBlocked}
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-400 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                {pending ? "Generating..." : "Generate"}
              </button>
              {isBlocked ? (
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Free usage exhausted. Unlock more below.
                </p>
              ) : (
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Use a URL, a description, or both for better outputs.
                </p>
              )}
            </div>
          </form>
        </section>

        {/* Right: Output + Upgrade */}
        <aside className="space-y-6">
          {/* Upgrade */}
          <section className="rounded-[2rem] border border-black/10 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.25),_transparent_45%),linear-gradient(160deg,rgba(15,23,42,0.98),rgba(30,41,59,0.94))] p-8 text-white shadow-[0_24px_80px_rgba(15,23,42,0.22)]">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
              Upgrade Access
            </p>
            <h2 className="text-2xl font-semibold tracking-tight">
              Buy one credit or unlock unlimited monthly generation
            </h2>
            <div className="mt-6 space-y-4">
              <button
                type="button"
                onClick={() => void handleCheckout("single")}
                disabled={checkoutPending !== null}
                className="flex w-full items-center justify-between rounded-2xl border border-white/15 bg-white/10 px-5 py-4 text-left transition hover:bg-white/15 disabled:cursor-not-allowed disabled:opacity-70"
              >
                <span>
                  <span className="block text-sm font-semibold">
                    {CHECKOUT_OPTIONS.single.label}
                  </span>
                  <span className="block text-sm text-cyan-100/80">
                    Add one paid generation credit
                  </span>
                </span>
                <span className="text-sm font-semibold">
                  {checkoutPending === "single" ? "Loading..." : "Buy"}
                </span>
              </button>

              <button
                type="button"
                onClick={() => void handleCheckout("subscription")}
                disabled={checkoutPending !== null}
                className="flex w-full items-center justify-between rounded-2xl border border-white/15 bg-white px-5 py-4 text-left text-slate-950 transition hover:bg-cyan-50 disabled:cursor-not-allowed disabled:opacity-70"
              >
                <span>
                  <span className="block text-sm font-semibold">
                    {CHECKOUT_OPTIONS.subscription.label}
                  </span>
                  <span className="block text-sm text-slate-600">
                    Unlimited generations while active
                  </span>
                </span>
                <span className="text-sm font-semibold">
                  {checkoutPending === "subscription" ? "Loading..." : "Start"}
                </span>
              </button>
            </div>
          </section>

          {/* Output */}
          <section className="rounded-[2rem] border border-black/10 bg-white/75 p-6 shadow-[0_20px_70px_rgba(15,23,42,0.08)] backdrop-blur dark:border-white/10 dark:bg-white/5">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-slate-950 dark:text-white">
                Output
              </h2>
              {sourceSummary ? (
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-white/10 dark:text-slate-200">
                  {sourceSummary}
                </span>
              ) : null}
            </div>

            {result ? (
              <div className="space-y-5">
                <OutputCard title="SEO Title" values={result.seoTitle} />
                <OutputCard
                  title="Meta Description"
                  values={result.metaDescription}
                />
                <OutputCard
                  title="OG Tags"
                  values={[result.ogTitle, result.ogDescription]}
                />
                <OutputCard title="Headlines" values={result.headlines} />
                <OutputCard
                  title="Subheadlines"
                  values={result.subheadlines}
                />
                <OutputCard
                  title="CTA Suggestions"
                  values={result.ctaSuggestions}
                />
              </div>
            ) : (
              <div className="rounded-3xl border border-dashed border-slate-300 p-8 text-center text-slate-600 dark:border-white/15 dark:text-slate-300">
                Generated SEO titles, descriptions, OG tags, headlines,
                subheadlines, and CTAs will appear here.
              </div>
            )}
          </section>
        </aside>
      </div>
    </div>
  );
}
