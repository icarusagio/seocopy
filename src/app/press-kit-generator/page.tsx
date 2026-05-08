import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Press Kit Generator",
  description:
    "Generate press kit copy, company boilerplates, founder bios, product facts, media pitches, FAQs, and launch CTAs from one brand brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/press-kit-generator",
  },
  keywords: [
    "press kit generator",
    "AI press kit generator",
    "media kit generator",
    "company boilerplate generator",
    "founder bio generator",
    "startup press kit",
    "product launch press kit",
  ],
  openGraph: {
    title: "Press Kit Generator | SEOCopy",
    description:
      "Turn a company, founder, product, or launch brief into press kit boilerplate, bios, media facts, pitches, FAQs, and CTAs.",
    url: "https://seocopy.vercel.app/press-kit-generator",
    type: "website",
  },
};

const pressKitAssets = [
  {
    label: "Boilerplate",
    title: "Package the company story for journalists",
    body: "Generate concise company boilerplates, product summaries, category positioning, milestone blurbs, and quotable descriptions that fit media pages and launch docs.",
  },
  {
    label: "Founder and product facts",
    title: "Turn scattered proof into a usable fact sheet",
    body: "Convert founder notes, metrics, customer segments, launch timing, and feature details into structured facts a reporter, partner, or marketplace reviewer can scan quickly.",
  },
  {
    label: "Pitch-ready copy",
    title: "Create outreach angles without rewriting from scratch",
    body: "Draft media pitches, announcement snippets, social previews, FAQ answers, and CTA variants that point readers toward the product, waitlist, demo, or launch page.",
  },
];

const workflow = [
  "Paste the company, product, launch, founder, audience, proof, and availability notes.",
  "Add the press kit goal: launch announcement, investor update, App Store listing, partner page, or media room refresh.",
  "Generate boilerplate, founder bios, product facts, media pitch angles, FAQ answers, and CTA variants in one pass.",
  "Publish the strongest assets to the media kit, launch page, marketplace profile, or outreach doc.",
];

const faqs = [
  {
    question: "What does the press kit generator create?",
    answer:
      "It creates company boilerplate, founder bios, product descriptions, fact-sheet bullets, milestone copy, media pitch angles, FAQ answers, SEO snippets, social previews, and CTA variants from one brand or launch brief.",
  },
  {
    question: "Can I use it for startup launches and Shopify apps?",
    answer:
      "Yes. SEOCopy can turn a startup, Shopify app, SaaS product, ecommerce brand, agency, or local business brief into press kit copy that supports marketplace listings, launch pages, partner outreach, and media rooms.",
  },
  {
    question: "How is this different from the press release generator?",
    answer:
      "Use the press release generator for a dated announcement. Use the press kit generator when you need reusable company assets: boilerplate, bios, fact sheets, pitches, FAQs, and media-ready positioning.",
  },
  {
    question: "How many free press kit drafts can I generate?",
    answer:
      "You can run two free generations without signup. After that, buy one more generation for $5 or use the $19/month plan for ongoing launch and SEO copy.",
  },
];

export default function PressKitGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,254,255,0.88))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(8,47,73,0.68))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Press Kit Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate press kit copy for launches, media rooms, and marketplace profiles.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy helps founders, Shopify merchants, SaaS teams, and agencies turn one brand brief into company boilerplate, founder bios, product facts, pitch angles, and CTA-ready launch copy.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=press-kit-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate a Press Kit
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
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-700 dark:text-cyan-300">
              Four-step workflow
            </p>
            <div className="mt-6 space-y-4">
              {workflow.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-2xl border border-slate-200 p-4 dark:border-white/10">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-sm font-bold text-cyan-800 dark:bg-cyan-300 dark:text-slate-950">
                    {index + 1}
                  </span>
                  <p className="font-medium">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-10">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-300">
            Press assets included
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            One brand brief becomes a reusable media kit.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {pressKitAssets.map((item) => (
            <article key={item.label} className="rounded-[1.5rem] border border-black/10 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-700 dark:text-cyan-300">
                {item.label}
              </p>
              <h3 className="mt-4 text-2xl font-semibold">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-10">
        <div className="rounded-[2rem] border border-black/10 bg-slate-950 p-8 text-white shadow-[0_24px_80px_rgba(15,23,42,0.14)] dark:border-white/10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
            Media-ready assets without the blank page
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Make every announcement, profile, and outreach email point to the same clear story.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            Use SEOCopy when a launch needs reusable copy beyond one press release: generate boilerplate, facts, pitch angles, and conversion copy that can support both search discovery and sales follow-up.
          </p>
          <Link
            href="/generate?source=press-kit-generator-cta"
            className="mt-8 inline-flex rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            Try Two Free Press Kit Drafts
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight">FAQ</h2>
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
