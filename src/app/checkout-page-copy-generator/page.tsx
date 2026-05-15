import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Checkout Page Copy Generator",
  description:
    "Generate checkout page copy, trust-building payment CTAs, shipping and returns reassurance, checkout FAQ snippets, and conversion copy from one checkout brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/checkout-page-copy-generator",
  },
  keywords: [
    "checkout page copy generator",
    "checkout page copy",
    "payment CTA copy",
    "shipping and returns reassurance",
    "checkout FAQ snippets",
    "conversion checkout copy",
    "ecommerce checkout copy",
    "cart checkout copy",
  ],
  openGraph: {
    title: "Checkout Page Copy Generator | SEOCopy",
    description:
      "Turn a checkout brief into trust-building payment CTAs, shipping and returns reassurance, checkout FAQ snippets, guarantee copy, and recovery-ready conversion angles.",
    url: "https://seocopy.vercel.app/checkout-page-copy-generator",
    type: "website",
  },
};

const checkoutMoments = [
  {
    label: "Trust-building payment CTAs",
    body: "Translate the payment step, accepted methods, installment options, guarantee language, and purchase outcome into clear checkout button and helper copy.",
  },
  {
    label: "Shipping and returns reassurance",
    body: "Clarify shipping timing, free-shipping thresholds, return windows, refund rules, exchanges, and delivery confidence without adding checkout friction.",
  },
  {
    label: "Checkout FAQ snippets",
    body: "Generate short answers for common last-mile objections around payment security, delivery dates, taxes, subscriptions, discounts, and order changes.",
  },
];

const outputs = [
  "Checkout page copy for ecommerce stores, Shopify merchants, SaaS checkout flows, preorder launches, service deposits, and paid digital products",
  "Trust-building payment CTAs with primary buttons, secondary reassurance, microcopy, and risk-reversal language",
  "Shipping and returns reassurance for delivery timing, thresholds, exchanges, refunds, warranties, and order-protection notes",
  "Checkout FAQ snippets that answer security, discount, subscription, delivery, tax, and post-purchase questions before buyers abandon",
  "Tone variants for premium, direct-response, friendly, minimalist, founder-led, urgent, B2B, local, and high-ticket checkout experiences",
];

const faqs = [
  {
    question: "What is a checkout page copy generator?",
    answer:
      "A checkout page copy generator turns a checkout brief into checkout page copy, trust-building payment CTAs, shipping and returns reassurance, checkout FAQ snippets, guarantee copy, and conversion-focused microcopy.",
  },
  {
    question: "Can this help reduce checkout abandonment?",
    answer:
      "Yes. Use it to clarify what happens after purchase, answer payment and delivery concerns, make refund or guarantee language easier to understand, and strengthen the final CTA before the buyer leaves.",
  },
  {
    question: "How is this different from the call-to-action generator?",
    answer:
      "The call-to-action generator focuses on CTAs across a full marketing funnel. This checkout page copy generator focuses on the final purchase step: payment CTAs, order reassurance, shipping and returns clarity, and checkout FAQ snippets.",
  },
  {
    question: "How many checkout copy generations are free?",
    answer:
      "You can try two free generations with no signup. After that, buy one generation for $5 or use the $19/month plan for ongoing SEO, checkout, product, landing page, and lifecycle copy.",
  },
];

export default function CheckoutPageCopyGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,253,245,0.92))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(5,150,105,0.32))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-800 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-200">
              Checkout Page Copy Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Write checkout copy that keeps buyers moving to payment.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Paste the product, offer, payment step, shipping promise, returns policy, guarantee, objections, and brand voice. SEOCopy creates checkout page copy, trust-building payment CTAs, shipping and returns reassurance, checkout FAQ snippets, and conversion copy.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=checkout-page-copy-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-emerald-300 dark:text-slate-950 dark:hover:bg-emerald-200"
              >
                Generate Checkout Page Copy
              </Link>
              <a
                href="#faq"
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950 dark:border-white/15 dark:text-slate-200 dark:hover:border-white dark:hover:text-white"
              >
                Read FAQ
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/10 bg-white/85 p-7 shadow-[0_24px_80px_rgba(15,23,42,0.1)] dark:border-white/10 dark:bg-white/5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700 dark:text-emerald-300">
              Checkout copy output checklist
            </p>
            <div className="mt-6 space-y-4">
              {outputs.map((output) => (
                <div key={output} className="rounded-2xl border border-slate-200 p-4 dark:border-white/10">
                  <p className="font-medium">{output}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-10">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700 dark:text-emerald-300">
            Convert more final-step intent
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Create checkout copy for payment steps, shipping promises, return policies, discount reminders, guarantee blocks, and last-mile buyer questions.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {checkoutMoments.map((item) => (
            <article key={item.label} className="rounded-[1.5rem] border border-black/10 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700 dark:text-emerald-300">
                {item.label}
              </p>
              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-10">
        <div className="rounded-[2rem] border border-black/10 bg-slate-950 p-8 text-white shadow-[0_24px_80px_rgba(15,23,42,0.14)] dark:border-white/10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-200">
            Revenue-focused checkout copy
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Remove the small doubts that stop a motivated buyer from completing checkout.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            SEOCopy helps founders, Shopify merchants, SaaS teams, and agencies package final-step copy for payment confidence, delivery clarity, policy reassurance, guarantee language, and checkout FAQs without rebuilding the funnel.
          </p>
          <Link
            href="/generate?source=checkout-page-copy-generator-cta"
            className="mt-8 inline-flex rounded-full bg-emerald-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-200"
          >
            Try Two Free Generations
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight">Checkout page copy questions</h2>
        <div className="mt-6 space-y-4">
          {faqs.map((faq) => (
            <article key={faq.question} className="rounded-2xl border border-black/10 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </main>
  );
}
