import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Product Launch Email Generator",
  description:
    "Generate product launch emails, pre-launch teasers, launch-day announcements, follow-up sequences, FAQ snippets, and conversion CTAs from one go-to-market brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/product-launch-email-generator",
  },
  keywords: [
    "product launch email generator",
    "AI product launch emails",
    "pre-launch email copy",
    "launch announcement email",
    "product launch sequence",
    "go to market email copy",
  ],
  openGraph: {
    title: "Product Launch Email Generator | SEOCopy",
    description:
      "Turn one launch brief into product launch emails, pre-launch teasers, launch-day announcements, follow-up sequences, and conversion CTAs.",
    url: "https://seocopy.vercel.app/product-launch-email-generator",
    type: "website",
  },
};

const launchMoments = [
  {
    label: "Pre-launch teasers",
    body: "Warm up the list with problem framing, curiosity hooks, waitlist CTAs, and proof snippets before the product is available.",
  },
  {
    label: "Launch-day announcements",
    body: "Package the promise, offer, features, pricing note, urgency window, and primary CTA into emails readers can act on immediately.",
  },
  {
    label: "Follow-up sequences",
    body: "Create reminder emails, objection reducers, customer-proof angles, FAQ answers, and deadline nudges that keep the launch moving.",
  },
];

const outputs = [
  "Product launch emails for pre-launch, launch-day, last-call, and post-launch follow-up moments",
  "Subject lines, preview text, opening hooks, launch-day announcements, and CTA variants",
  "Segment-aware angles for waitlists, free users, customers, prospects, affiliates, and partners",
  "Landing page snippets, social handoff copy, FAQ answers, and sales enablement notes",
  "Launch calendar guidance that turns one product brief into a sequenced campaign",
];

const faqs = [
  {
    question: "What is a product launch email generator?",
    answer:
      "A product launch email generator turns a product, audience, offer, timeline, and proof points into launch emails with pre-launch teasers, launch-day announcements, follow-up reminders, FAQs, and conversion CTAs.",
  },
  {
    question: "Can SEOCopy write a full product launch sequence?",
    answer:
      "Yes. SEOCopy can draft a product launch sequence for SaaS, Shopify apps, ecommerce products, agencies, creators, and services, including teaser emails, announcement emails, reminder emails, and post-launch follow-ups.",
  },
  {
    question: "How is this different from a product update email generator?",
    answer:
      "Product update emails explain shipped improvements to existing users. Product launch emails focus on a new product, offer, or campaign window and include pre-launch buildup, launch-day positioning, urgency, proof, and conversion CTAs.",
  },
  {
    question: "How many product launch emails can I generate for free?",
    answer:
      "You can try two free generations without signup. After that, buy one generation for $5 or use the $19/month plan for ongoing launch, SEO, landing page, and lifecycle email copy.",
  },
];

export default function ProductLaunchEmailGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(240,253,244,0.92))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(20,83,45,0.34))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-800 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-200">
              Product Launch Email Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate product launch emails that turn launch attention into buyers.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Paste the product, audience, offer, launch date, proof, objections, and CTA. SEOCopy creates product launch emails with pre-launch teasers, launch-day announcements, follow-up sequences, FAQs, and conversion CTAs.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=product-launch-email-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-emerald-300 dark:text-slate-950 dark:hover:bg-emerald-200"
              >
                Generate Product Launch Emails
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
              Product launch email output checklist
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
            From launch brief to revenue sequence
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Build the emails that move subscribers from curiosity to purchase while the launch window is open.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {launchMoments.map((item) => (
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
            Launch with a sequenced inbox plan
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Give every launch segment a reason to click before momentum fades.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            SEOCopy helps founders, Shopify merchants, SaaS teams, creators, and agencies turn one go-to-market brief into product launch email copy, segmented follow-ups, objection reducers, and CTAs tied to revenue moments.
          </p>
          <Link
            href="/generate?source=product-launch-email-generator-cta"
            className="mt-8 inline-flex rounded-full bg-emerald-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-200"
          >
            Try Two Free Generations
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight">Product launch email questions</h2>
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
