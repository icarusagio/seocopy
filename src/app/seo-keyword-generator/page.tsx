import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SEO Keyword Generator",
  description:
    "Generate SEO keyword ideas, search-intent clusters, page angles, metadata prompts, FAQ opportunities, and conversion-focused copy briefs from one product or topic.",
  alternates: {
    canonical: "https://seocopy.vercel.app/seo-keyword-generator",
  },
  keywords: [
    "SEO keyword generator",
    "AI keyword generator",
    "keyword ideas generator",
    "SEO keyword research tool",
    "content keyword generator",
    "search intent generator",
  ],
  openGraph: {
    title: "SEO Keyword Generator | SEOCopy",
    description:
      "Turn a product, page, topic, or audience brief into keyword ideas, intent clusters, page angles, metadata prompts, FAQ opportunities, and CTA-ready copy directions.",
    url: "https://seocopy.vercel.app/seo-keyword-generator",
    type: "website",
  },
};

const deliverables = [
  {
    label: "Keyword map",
    title: "Move from rough topic to organized keyword ideas",
    body: "Generate seed keywords, long-tail variants, modifier ideas, and buyer-intent phrases grouped by awareness level, funnel stage, and page type.",
  },
  {
    label: "Intent clusters",
    title: "Know what each page should actually answer",
    body: "Separate informational, commercial, local, product, comparison, and transactional intent so every keyword cluster gets a matching page angle.",
  },
  {
    label: "Copy brief",
    title: "Turn research into publishable SEO assets",
    body: "Pair keyword clusters with title tags, meta descriptions, H1 angles, FAQ ideas, internal-link suggestions, and conversion CTAs.",
  },
];

const workflow = [
  "Paste a product description, service offer, audience, seed keyword, competitor page, or rough content idea.",
  "Add geography, buyer type, funnel stage, product category, or any keywords you already know are valuable.",
  "Generate keyword ideas, intent clusters, landing-page angles, metadata prompts, FAQs, and internal-link opportunities.",
  "Send the strongest cluster into SEOCopy's generator to draft SEO metadata and page copy for the next revenue page.",
];

const faqs = [
  {
    question: "What is an SEO keyword generator?",
    answer:
      "An SEO keyword generator expands a product, topic, URL, or audience brief into relevant search phrases, long-tail variants, intent clusters, and content angles you can use for SEO pages.",
  },
  {
    question: "Does SEOCopy replace a full keyword research suite?",
    answer:
      "SEOCopy is designed for fast keyword ideation and copy briefing. It helps you turn search intent into metadata, landing page copy, FAQs, and CTAs, while dedicated SEO suites remain useful for exact volume and difficulty data.",
  },
  {
    question: "Can I use generated keywords for product and service pages?",
    answer:
      "Yes. SEOCopy can create keyword clusters for ecommerce products, Shopify collections, SaaS pages, local services, comparison pages, blog briefs, and lead-generation landing pages.",
  },
  {
    question: "How many keyword briefs can I generate for free?",
    answer:
      "You can run two free generations without creating an account. After that, buy one more generation for $5 or use the $19/month plan for ongoing keyword, SEO, and copy work.",
  },
];

export default function SeoKeywordGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,254,255,0.88))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(8,47,73,0.68))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              SEO Keyword Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate SEO keyword ideas that become revenue pages.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy turns a product, topic, URL, or audience brief into keyword clusters, search-intent angles, metadata prompts, FAQ ideas, and conversion-focused copy directions.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=seo-keyword-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate SEO Keywords
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
              Four-step keyword workflow
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
            Keyword-to-copy deliverables
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            One seed idea, a sharper SEO roadmap.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {deliverables.map((item) => (
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
            From keyword idea to live SEO asset
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Stop collecting keyword lists that never become pages.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            Use SEOCopy to turn each keyword cluster into the metadata, headline, FAQ, and CTA brief needed to publish a page that can capture demand and drive the next conversion.
          </p>
          <Link
            href="/generate?source=seo-keyword-generator-cta"
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
