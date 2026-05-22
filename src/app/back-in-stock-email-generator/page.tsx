import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Back-in-Stock Email Generator",
  description:
    "Generate back-in-stock emails, restock alert subject lines, Shopify inventory recovery copy, product-return CTAs, FAQs, and SEO snippets from one restock brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/back-in-stock-email-generator",
  },
  keywords: [
    "back in stock email generator",
    "back-in-stock emails",
    "restock alert email copy",
    "Shopify back in stock email",
    "inventory recovery campaign copy",
    "ecommerce lifecycle email copy",
  ],
  openGraph: {
    title: "Back-in-Stock Email Generator | SEOCopy",
    description:
      "Turn product restocks, waitlist demand, urgency windows, and proof points into back-in-stock emails, Shopify restock alerts, subject lines, and conversion CTAs.",
    url: "https://seocopy.vercel.app/back-in-stock-email-generator",
    type: "website",
  },
};

const restockBlocks = [
  {
    label: "Restock alert sequences",
    body: "Draft first alerts, reminder nudges, low-stock follow-ups, subject lines, preview text, and CTA variants from one returning-product brief.",
  },
  {
    label: "Shopify inventory recovery copy",
    body: "Turn stockout demand, product benefits, sizing notes, shipping timing, and customer objections into merchant-ready back-in-stock campaigns.",
  },
  {
    label: "Waitlist-to-checkout messaging",
    body: "Create product-return CTAs, urgency-safe copy, FAQ snippets, SMS handoff ideas, and landing-page text that moves waitlisted shoppers toward checkout.",
  },
];

const outputs = [
  "Back-in-stock emails for Shopify stores, ecommerce brands, product drops, subscription restocks, and seasonal replenishment campaigns",
  "Restock alert sequences with first notices, reminder nudges, low-stock warnings, subject lines, preview text, and CTA variants",
  "Shopify inventory recovery copy that connects waitlist demand, product benefits, proof points, shipping timing, and urgency-safe offer language",
  "Product-return CTAs, FAQ snippets, SMS handoff ideas, landing-page blocks, and social reminder copy from one restock brief",
  "Tone variants for helpful, premium, concise, playful, urgency-aware, and merchant-friendly restock campaigns",
];

const faqs = [
  {
    question: "What is a back-in-stock email generator?",
    answer:
      "A back-in-stock email generator turns product restock details, waitlist demand, customer objections, product benefits, offer timing, and brand voice into restock alert emails, subject lines, preview text, product-return CTAs, and supporting FAQ copy.",
  },
  {
    question: "Can I use this for Shopify restock alert emails?",
    answer:
      "Yes. SEOCopy can create Shopify back-in-stock email copy for product restocks, size or variant returns, collection relaunches, low-stock reminders, SMS handoffs, and follow-up campaign snippets.",
  },
  {
    question: "How should a restock email be different from a promo email?",
    answer:
      "A restock email should lead with availability, shopper intent, product proof, and a clear buy-now CTA. Promo emails often lead with discounts, while back-in-stock emails can convert from urgency and previously captured demand without requiring a markdown.",
  },
  {
    question: "How many back-in-stock email generations are free?",
    answer:
      "You can try two free generations with no signup. After that, buy one generation for $5 or use the $19/month plan for ongoing SEO, landing page, and campaign copy.",
  },
];

export default function BackInStockEmailGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-teal-700 dark:text-teal-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(240,253,250,0.94))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(13,148,136,0.32))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-teal-800 dark:border-teal-400/20 dark:bg-teal-400/10 dark:text-teal-200">
              Back-in-Stock Email Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Turn restocked products into revenue-ready emails.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Paste the restocked product, inventory timing, waitlist signal, offer details, and brand voice. SEOCopy creates back-in-stock emails, restock alert subject lines, Shopify inventory recovery copy, product-return CTAs, FAQs, and SEO snippets.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=back-in-stock-email-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-teal-300 dark:text-slate-950 dark:hover:bg-teal-200"
              >
                Generate Back-in-Stock Email
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
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-700 dark:text-teal-300">
              Restock alert output checklist
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
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal-700 dark:text-teal-300">
            Recover captured restock demand
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Create restock alert copy for Shopify, ecommerce, product drops, subscriptions, and seasonal inventory returns.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {restockBlocks.map((item) => (
            <article key={item.label} className="rounded-[1.5rem] border border-black/10 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-700 dark:text-teal-300">
                {item.label}
              </p>
              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-10">
        <div className="rounded-[2rem] border border-black/10 bg-slate-950 p-8 text-white shadow-[0_24px_80px_rgba(15,23,42,0.14)] dark:border-white/10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal-200">
            Inventory recovery copy
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Give merchants a faster path from restock notification to checkout.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            SEOCopy helps teams turn product availability into polished alert emails, reminder sequences, proof-led body copy, objection answers, and CTA variants so captured out-of-stock demand can convert when inventory returns.
          </p>
          <Link
            href="/generate?source=back-in-stock-email-generator-cta"
            className="mt-8 inline-flex rounded-full bg-teal-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-teal-200"
          >
            Try Two Free Generations
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight">Back-in-stock email questions</h2>
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
