import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Browse Abandonment Email Generator",
  description:
    "Generate browse abandonment emails, product-view recovery flows, personalized product reminders, Shopify browse recovery copy, FAQs, and SEO snippets from one viewed product moment.",
  alternates: {
    canonical: "https://seocopy.vercel.app/browse-abandonment-email-generator",
  },
  keywords: [
    "browse abandonment email generator",
    "browse abandonment emails",
    "product view recovery email",
    "Shopify browse recovery copy",
    "personalized product reminder email",
    "ecommerce lifecycle email copy",
  ],
  openGraph: {
    title: "Browse Abandonment Email Generator | SEOCopy",
    description:
      "Turn product views, category interest, objections, and incentives into browse abandonment emails, product-view recovery flows, Shopify browse recovery copy, and conversion CTAs.",
    url: "https://seocopy.vercel.app/browse-abandonment-email-generator",
    type: "website",
  },
};

const recoveryBlocks = [
  {
    label: "Product-view recovery flows",
    body: "Draft first reminders, proof-led follow-ups, category nudges, subject lines, preview text, and CTA variants from a shopper's viewed product or collection.",
  },
  {
    label: "Personalized product reminders",
    body: "Turn product benefits, customer objections, alternatives, and recently viewed context into reminder copy that feels helpful instead of generic.",
  },
  {
    label: "Shopify browse recovery copy",
    body: "Create Shopify browse recovery copy for merchants who need product recommendations, back-in-stock tie-ins, SMS handoff snippets, FAQ answers, and landing-page CTAs.",
  },
];

const outputs = [
  "Browse abandonment emails for ecommerce stores, Shopify merchants, subscription boxes, marketplaces, and product-led launches",
  "Product-view recovery flows with first reminders, comparison nudges, social-proof follow-ups, subject lines, preview text, and CTA variants",
  "Personalized product reminders that connect viewed items, benefits, objections, category alternatives, and timely incentives",
  "Shopify browse recovery copy for recently viewed product emails, collection reminders, recommendation modules, FAQ snippets, and retargeting hooks",
  "Tone variants for helpful, premium, playful, concise, merchant-friendly, and urgency-aware browse recovery campaigns",
];

const faqs = [
  {
    question: "What is a browse abandonment email generator?",
    answer:
      "A browse abandonment email generator turns product views, collection interest, shopper objections, offer details, and brand voice into browse abandonment emails, subject lines, preview text, product-view recovery flows, and conversion CTAs.",
  },
  {
    question: "How is browse abandonment different from abandoned cart email copy?",
    answer:
      "Abandoned cart copy targets shoppers who added an item to cart or started checkout. Browse abandonment emails target earlier product-view intent, so the copy usually leans on product education, recommendations, proof, and gentle reminders before a cart exists.",
  },
  {
    question: "Can I use this for Shopify browse recovery copy?",
    answer:
      "Yes. SEOCopy can create Shopify browse recovery copy for recently viewed product emails, collection reminders, personalized recommendations, back-in-stock tie-ins, SMS handoffs, and post-click FAQ content.",
  },
  {
    question: "How many browse abandonment email generations are free?",
    answer:
      "You can try two free generations with no signup. After that, buy one generation for $5 or use the $19/month plan for ongoing SEO, landing page, and campaign copy.",
  },
];

export default function BrowseAbandonmentEmailGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-teal-700 dark:text-teal-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(240,253,250,0.94))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(13,148,136,0.32))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-teal-800 dark:border-teal-400/20 dark:bg-teal-400/10 dark:text-teal-200">
              Browse Abandonment Email Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Bring product browsers back before the cart is lost.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Paste the product viewed, collection context, shopper intent, offer, and brand voice. SEOCopy creates browse abandonment emails, product-view recovery flows, personalized product reminders, Shopify browse recovery copy, FAQs, and SEO snippets.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=browse-abandonment-email-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-teal-300 dark:text-slate-950 dark:hover:bg-teal-200"
              >
                Generate Browse Abandonment Email
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
              Browse recovery output checklist
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
            Convert earlier ecommerce intent
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Create product-view recovery copy for ecommerce, Shopify, marketplaces, subscriptions, and launch campaigns.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {recoveryBlocks.map((item) => (
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
            Revenue-focused lifecycle copy
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Give merchants a faster path from product interest to a return visit.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            SEOCopy helps teams turn browsing context into polished product reminders, recommendation angles, proof-led body copy, objection answers, and CTA variants so earlier shopper intent does not disappear between a product page and checkout.
          </p>
          <Link
            href="/generate?source=browse-abandonment-email-generator-cta"
            className="mt-8 inline-flex rounded-full bg-teal-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-teal-200"
          >
            Try Two Free Generations
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight">Browse abandonment email questions</h2>
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
