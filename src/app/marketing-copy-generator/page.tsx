import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Marketing Copy Generator",
  description:
    "Generate marketing copy, SEO metadata, landing page headlines, social previews, and CTA variants from a URL or short product brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/marketing-copy-generator",
  },
  keywords: [
    "marketing copy generator",
    "AI marketing copy generator",
    "marketing content generator",
    "campaign copy generator",
    "AI copywriting tool",
    "landing page copy generator",
  ],
  openGraph: {
    title: "Marketing Copy Generator | SEOCopy",
    description:
      "Turn a rough offer into campaign-ready copy, SEO snippets, social previews, landing page headlines, and CTA angles.",
    url: "https://seocopy.vercel.app/marketing-copy-generator",
    type: "website",
  },
};

const copyBlocks = [
  {
    label: "Search demand",
    title: "SEO titles + meta descriptions",
    body: "Package the same offer into search snippets that clarify who the page is for and why they should click.",
  },
  {
    label: "Landing page",
    title: "Headlines + subheadlines",
    body: "Move from vague product notes to clear hero copy, benefit angles, and page messaging your team can test.",
  },
  {
    label: "Campaign CTA",
    title: "CTA variants + social previews",
    body: "Generate action-oriented CTA options and Open Graph copy so campaigns stay consistent across channels.",
  },
];

const workflow = [
  "Paste a URL, product description, or rough campaign brief.",
  "Choose the industry and tone that best matches the audience.",
  "Generate SEO metadata, headlines, social preview copy, and CTA variants.",
  "Copy the strongest angle into your landing page, launch post, or campaign doc.",
];

const faqs = [
  {
    question: "What is a marketing copy generator?",
    answer:
      "A marketing copy generator turns a short product, offer, or campaign brief into usable copy assets such as SEO titles, meta descriptions, landing page headlines, social preview copy, and calls to action.",
  },
  {
    question: "Can SEOCopy help with campaign copy and landing pages?",
    answer:
      "Yes. SEOCopy is designed for founders, marketers, and ecommerce teams that need fast copy variants for landing pages, SEO snippets, product pages, and social previews before a launch or campaign refresh.",
  },
  {
    question: "Do I need an existing website URL?",
    answer:
      "No. You can paste an existing URL for context or describe the product, service, or campaign manually. A concise brief is enough to generate marketing copy variants.",
  },
  {
    question: "How many free marketing copy generations do I get?",
    answer:
      "You can run two free generations without creating an account. After that, buy one more generation for $5 or use the $19/month plan for ongoing copy production.",
  },
];

export default function MarketingCopyGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,254,255,0.88))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(8,47,73,0.68))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Marketing Copy Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate marketing copy that keeps the offer clear everywhere.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy turns a rough campaign brief into search snippets, landing page headlines, social previews, CTA ideas, and launch-ready messaging you can test immediately.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=marketing-copy-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate Marketing Copy
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
            Copy blocks included
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            One offer, multiple copy assets for the funnel.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {copyBlocks.map((item) => (
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
            Campaign-ready output
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Stop rewriting the same product promise for every page, post, and snippet.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            Use SEOCopy to align the promise people see in search, the story they read on the page, and the action you want them to take next.
          </p>
          <Link
            href="/generate?source=marketing-copy-generator-cta"
            className="mt-8 inline-flex rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            Try Two Free Generations
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
