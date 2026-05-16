import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Landing Page SEO Generator",
  description:
    "Generate landing page SEO, search-intent sections, metadata and H1 ideas, FAQ schema prompts, and conversion CTAs from one offer brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/landing-page-seo-generator",
  },
  keywords: [
    "landing page SEO generator",
    "landing page SEO",
    "AI landing page SEO",
    "search-intent sections",
    "metadata and H1 ideas",
    "FAQ schema prompts",
    "landing page meta description",
    "conversion SEO copy",
  ],
  openGraph: {
    title: "Landing Page SEO Generator | SEOCopy",
    description:
      "Turn one offer brief into landing page SEO, search-intent sections, metadata and H1 ideas, FAQ schema prompts, and conversion-focused CTA copy.",
    url: "https://seocopy.vercel.app/landing-page-seo-generator",
    type: "website",
  },
};

const seoAssets = [
  {
    label: "Search-intent sections",
    title: "Map the landing page around the query your buyer already uses",
    body: "Generate section angles for problem awareness, product fit, proof, objections, alternatives, pricing reassurance, and final CTA blocks so the page answers intent before visitors bounce.",
  },
  {
    label: "Metadata and H1 ideas",
    title: "Ship title tags, H1 options, and SERP snippets together",
    body: "Draft landing page title tags, meta descriptions, H1 variants, social previews, and above-the-fold copy that stay aligned with one offer and one search intent.",
  },
  {
    label: "FAQ schema prompts",
    title: "Turn objections into page-ready FAQ blocks",
    body: "Create FAQ questions, concise answers, and schema-ready prompts for pricing, setup, comparisons, guarantees, outcomes, and buyer risk so SEO support also improves conversion.",
  },
];

const workflow = [
  "Paste the landing page offer, ICP, target keyword, competing alternatives, proof points, pricing notes, and primary conversion goal.",
  "Generate landing page SEO with search-intent sections, metadata and H1 ideas, FAQ schema prompts, social previews, and CTA variants.",
  "Choose the strongest section order and reuse the copy across the hero, proof blocks, FAQ accordion, SERP snippet, and ad-to-page message match.",
  "Publish the improved page, add internal links, and revisit the same brief when you need experiment variants or refreshed metadata.",
];

const faqs = [
  {
    question: "What is a landing page SEO generator?",
    answer:
      "A landing page SEO generator turns an offer brief into landing page SEO assets such as title tags, meta descriptions, H1 ideas, search-intent sections, FAQ prompts, and conversion-focused CTA copy.",
  },
  {
    question: "How is this different from a landing page copy generator?",
    answer:
      "A landing page copy generator drafts broader page copy. This landing page SEO generator focuses on search intent, metadata, H1 alignment, FAQ schema prompts, internal-link angles, and SERP-to-page message match.",
  },
  {
    question: "Can SEOCopy create FAQ schema prompts for landing pages?",
    answer:
      "Yes. SEOCopy can draft FAQ schema prompts and page-ready questions around pricing, setup, outcomes, objections, comparisons, guarantees, and buying risk so your developer can adapt them into structured data.",
  },
  {
    question: "How many landing page SEO generations are free?",
    answer:
      "You can run two free generations with no signup. After that, buy one generation for $5 or use the $19/month plan for ongoing landing page, SEO, product, email, SMS, and social copy.",
  },
];

export default function LandingPageSeoGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-sky-700 dark:text-sky-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(239,246,255,0.92))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(14,165,233,0.32))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-sky-800 dark:border-sky-400/20 dark:bg-sky-400/10 dark:text-sky-200">
              Landing Page SEO Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate landing page SEO that matches search intent and conversion intent.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy turns one offer brief into landing page SEO, search-intent sections, metadata and H1 ideas, FAQ schema prompts, social previews, and CTA variants for pages that need both traffic and revenue.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=landing-page-seo-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-sky-300 dark:text-slate-950 dark:hover:bg-sky-200"
              >
                Generate Landing Page SEO
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
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700 dark:text-sky-300">
              Landing page SEO workflow
            </p>
            <div className="mt-6 space-y-4">
              {workflow.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-2xl border border-slate-200 p-4 dark:border-white/10">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-800 dark:bg-sky-300 dark:text-slate-950">
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
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700 dark:text-sky-300">
            Landing page SEO assets included
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Move from a generic page brief to SEO copy that earns clicks and supports the sale.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {seoAssets.map((item) => (
            <article key={item.label} className="rounded-[1.5rem] border border-black/10 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700 dark:text-sky-300">
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
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-200">
            Search-to-sale alignment
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Brief once, then create metadata, page sections, FAQs, and CTA copy from the same intent.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            Use SEOCopy to keep landing page SEO, paid traffic message match, internal links, FAQ schema prompts, and conversion copy pointed at the same buyer outcome.
          </p>
          <Link
            href="/generate?source=landing-page-seo-generator-cta"
            className="mt-8 inline-flex rounded-full bg-sky-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-200"
          >
            Try Two Free Generations
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight">Landing page SEO generator questions</h2>
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
