import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Answer Engine Optimization Generator",
  description:
    "Generate answer engine optimization copy for AI search, featured snippets, FAQ answers, citation-ready summaries, comparison blurbs, and conversion CTAs from one brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/answer-engine-optimization-generator",
  },
  keywords: [
    "answer engine optimization generator",
    "AEO copy generator",
    "AI search optimization copy",
    "featured snippet copy generator",
    "generative engine optimization copy",
    "AI overview SEO copy",
  ],
  openGraph: {
    title: "Answer Engine Optimization Generator | SEOCopy",
    description:
      "Turn a product, service, or article brief into AI-search-friendly answers, FAQ snippets, comparison copy, source notes, and conversion CTAs.",
    url: "https://seocopy.vercel.app/answer-engine-optimization-generator",
    type: "website",
  },
};

const outputBlocks = [
  {
    label: "AI-search answer",
    title: "Short answers built for citations",
    body: "Draft direct, sourceable answer blocks that explain what you do, who it is for, and why it matters before an AI overview or answer engine summarizes the page.",
  },
  {
    label: "Snippet structure",
    title: "FAQ and comparison sections",
    body: "Turn buyer questions into concise FAQ answers, comparison blurbs, pros-and-cons sections, and entity-rich paragraphs that search engines can parse.",
  },
  {
    label: "Revenue bridge",
    title: "Helpful answers with next-step CTAs",
    body: "Pair informational answers with product proof, objection reducers, and conversion CTAs so AI-search visitors still know what to do next.",
  },
];

const workflow = [
  "Paste the product, service, article, or landing page topic plus the buyer questions you want AI search tools to answer accurately.",
  "Add proof points, differentiators, audience context, and the next conversion action for the visitor after the answer.",
  "Generate AEO copy: answer blocks, FAQ snippets, comparison blurbs, citation-ready summaries, and CTA variants.",
  "Publish the best answers on your page, FAQ section, knowledge base, comparison page, or product explainer.",
];

const examples = [
  "AI-search FAQ section for a Shopify returns policy page",
  "Featured-snippet answer blocks for a B2B SaaS comparison page",
  "Citation-ready service summaries for a local agency website",
  "Product explainer answers that bridge from research intent to a demo CTA",
];

const faqs = [
  {
    question: "What is an answer engine optimization generator?",
    answer:
      "An answer engine optimization generator creates concise, structured copy that helps AI search tools, featured snippets, and answer engines understand a page: direct answers, FAQs, comparison blurbs, summaries, and next-step CTAs.",
  },
  {
    question: "Can SEOCopy help with AI Overviews and generative search?",
    answer:
      "Yes. SEOCopy can draft answer-first sections, entity-rich summaries, question-and-answer blocks, and proof-led snippets that make pages clearer for AI Overviews, chat search, and traditional organic snippets.",
  },
  {
    question: "Is AEO different from regular SEO copy?",
    answer:
      "AEO emphasizes direct answers, structured context, sourceable claims, and concise explanations. Regular SEO copy still matters, but answer engines often need clearer summaries, FAQs, and comparison sections to cite or summarize a page correctly.",
  },
  {
    question: "How many free AEO copy generations are included?",
    answer:
      "You can run two free generations without an account. After that, buy one more generation for $5 or use the $19/month plan for ongoing SEO, AEO, and conversion copy production.",
  },
];

export default function AnswerEngineOptimizationGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(224,242,254,0.9))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(14,116,144,0.58))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Answer Engine Optimization Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate answer engine optimization copy for AI search visibility.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy turns a product, service, or content brief into answer-first sections, FAQ snippets, comparison blurbs, citation-ready summaries, and CTAs for pages that need to show up in AI answers and search snippets.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=answer-engine-optimization-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate AEO Copy
              </Link>
              <a
                href="#examples"
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950 dark:border-white/15 dark:text-slate-200 dark:hover:border-white dark:hover:text-white"
              >
                See AEO Examples
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/10 bg-white/85 p-7 shadow-[0_24px_80px_rgba(15,23,42,0.1)] dark:border-white/10 dark:bg-white/5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-700 dark:text-cyan-300">
              AEO copy workflow
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
            AEO copy blocks included
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            One brief, structured answers that help searchers understand and act.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {outputBlocks.map((item) => (
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

      <section id="examples" className="mx-auto max-w-6xl px-6 pb-20 lg:px-10">
        <div className="rounded-[2rem] border border-black/10 bg-slate-950 p-8 text-white shadow-[0_24px_80px_rgba(15,23,42,0.14)] dark:border-white/10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
            Built for AI-search discovery moments
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Draft answers for the pages buyers and answer engines inspect before a click, demo, or purchase.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {examples.map((example) => (
              <div key={example} className="rounded-2xl border border-white/10 bg-white/5 p-5 font-medium">
                {example}
              </div>
            ))}
          </div>
          <Link
            href="/generate?source=answer-engine-optimization-generator-cta"
            className="mt-8 inline-flex rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            Try Two Free Generations
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-10">
        <div className="grid gap-6 md:grid-cols-2">
          {faqs.map((item) => (
            <article key={item.question} className="rounded-[1.5rem] border border-black/10 p-6 dark:border-white/10">
              <h3 className="text-xl font-semibold">{item.question}</h3>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{item.answer}</p>
            </article>
          ))}
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.answer,
                },
              })),
            }),
          }}
        />
      </section>
    </main>
  );
}
