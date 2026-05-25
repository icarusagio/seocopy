import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Back-in-Stock SMS Generator",
  description:
    "Generate back-in-stock SMS alerts, Shopify restock texts, low-stock reminders, compliance-safe opt-out language, and mobile CTAs from one restock brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/back-in-stock-sms-generator",
  },
  keywords: [
    "back in stock SMS generator",
    "back-in-stock SMS alerts",
    "Shopify restock text message",
    "restock alert SMS copy",
    "low stock SMS reminder",
    "ecommerce SMS recovery copy",
  ],
  openGraph: {
    title: "Back-in-Stock SMS Generator | SEOCopy",
    description:
      "Turn restocked products, waitlist demand, variant availability, and urgency windows into concise back-in-stock SMS alerts and mobile checkout CTAs.",
    url: "https://seocopy.vercel.app/back-in-stock-sms-generator",
    type: "website",
  },
};

const smsBlocks = [
  {
    label: "Restock text alerts",
    body: "Create first-notice texts, variant-specific restock alerts, waitlist updates, and concise mobile CTAs when product inventory returns.",
  },
  {
    label: "Low-stock reminders",
    body: "Generate urgency-safe follow-up texts that mention stock limits, sizing or color availability, shipping cutoffs, and offer windows without sounding spammy.",
  },
  {
    label: "Compliance-safe handoff",
    body: "Draft short opt-out language, consent-aware phrasing, and email-to-SMS handoff variants for Shopify merchants and ecommerce lifecycle teams.",
  },
];

const outputs = [
  "Back-in-stock SMS alerts for Shopify stores, ecommerce waitlists, product drops, replenishment campaigns, and variant restocks",
  "Concise restock text messages with product availability, waitlist signal, urgency-safe wording, and mobile-first CTAs",
  "Low-stock reminder copy, final-call nudges, shipping-timing notes, and follow-up texts for shoppers who showed purchase intent",
  "Compliance-safe opt-out language, character-conscious variants, and email/SMS handoff copy from one restock brief",
  "Tone variants for helpful, premium, urgent, playful, VIP, and brand-safe inventory recovery texts",
];

const faqs = [
  {
    question: "What is a back-in-stock SMS generator?",
    answer:
      "A back-in-stock SMS generator turns restocked product details, waitlist demand, inventory limits, offer timing, and brand voice into short restock text alerts, low-stock reminders, opt-out language, and mobile checkout CTAs.",
  },
  {
    question: "Can I use this for Shopify restock texts?",
    answer:
      "Yes. SEOCopy can draft Shopify restock text messages for product returns, size or color variant restocks, waitlist alerts, collection relaunches, and low-stock follow-ups.",
  },
  {
    question: "How is this different from a back-in-stock email generator?",
    answer:
      "Back-in-stock emails can carry more product proof and FAQ copy. Back-in-stock SMS needs shorter, mobile-first wording with clear availability, a direct CTA, urgency-safe language, and compliant opt-out support.",
  },
  {
    question: "How many back-in-stock SMS generations are free?",
    answer:
      "You can try two free generations with no signup. After that, buy one generation for $5 or use the $19/month plan for ongoing SEO, landing page, email, and SMS copy production.",
  },
];

export default function BackInStockSmsGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,253,245,0.94))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(5,150,105,0.32))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-800 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-200">
              Back-in-Stock SMS Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Turn restocked inventory into concise SMS alerts shoppers can act on.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Paste the restocked product, variant, inventory limit, waitlist signal, offer timing, and brand voice. SEOCopy creates back-in-stock SMS alerts, Shopify restock texts, low-stock reminders, compliance-safe opt-out language, and mobile CTAs.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=back-in-stock-sms-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-emerald-300 dark:text-slate-950 dark:hover:bg-emerald-200"
              >
                Generate Back-in-Stock SMS
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
              Restock SMS output checklist
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
            Recover waitlisted demand by text
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Create short restock alerts for Shopify, ecommerce drops, replenishment lists, and variant returns.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {smsBlocks.map((item) => (
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
            Mobile inventory recovery
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Give shoppers a direct path from restock ping to checkout.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            SEOCopy helps merchants turn returning availability into SMS alerts, follow-up reminders, opt-out-safe snippets, and CTA variants that fit the short, urgent, mobile moments where restock demand converts.
          </p>
          <Link
            href="/generate?source=back-in-stock-sms-generator-cta"
            className="mt-8 inline-flex rounded-full bg-emerald-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-200"
          >
            Try Two Free Generations
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight">Back-in-stock SMS generator questions</h2>
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
