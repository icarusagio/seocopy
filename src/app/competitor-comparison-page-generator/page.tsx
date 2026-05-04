import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Competitor Comparison Page Generator",
  description:
    "Generate competitor comparison pages, alternative pages, SEO metadata, proof sections, objection handling, and CTA copy from one positioning brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/competitor-comparison-page-generator",
  },
  keywords: [
    "competitor comparison page generator",
    "AI competitor comparison page generator",
    "alternative page generator",
    "SaaS comparison page generator",
    "competitor landing page copy",
    "SEO comparison page generator",
  ],
  openGraph: {
    title: "Competitor Comparison Page Generator | SEOCopy",
    description:
      "Turn positioning notes, proof points, and competitor gaps into search-ready comparison pages, alternative pages, CTAs, FAQs, and metadata.",
    url: "https://seocopy.vercel.app/competitor-comparison-page-generator",
    type: "website",
  },
};

const outputBlocks = [
  {
    label: "Positioning",
    title: "Explain why buyers should switch without sounding defensive",
    body: "Frame the competitor gap around buyer outcomes, product fit, implementation speed, pricing clarity, support quality, and the situations where your offer wins.",
  },
  {
    label: "Search intent",
    title: "Build pages for comparison and alternative queries",
    body: "Generate SEO titles, meta descriptions, H1s, comparison intros, feature tables, and FAQ copy for searches like 'Brand A alternative' or 'Brand A vs Brand B'.",
  },
  {
    label: "Conversion",
    title: "Turn evaluation traffic into demos, trials, or checkout starts",
    body: "Package objection handling, proof bullets, migration reassurance, and CTAs so visitors can take the next step while they are actively comparing options.",
  },
];

const workflow = [
  "Paste your product, competitor name, target buyer, primary keyword, and the conversion action you want from the page.",
  "Add the differences buyers care about: pricing, onboarding, integrations, support, feature depth, proof, and risk reducers.",
  "Generate comparison-page sections, SEO metadata, FAQ answers, social snippets, and CTA variants in one pass.",
  "Review for factual accuracy, add screenshots or proof where needed, and publish the strongest variant as a comparison or alternatives page.",
];

const examples = [
  "Alternative page for a project management SaaS competing against a complex incumbent",
  "Comparison landing page for a Shopify app replacing spreadsheet-based inventory alerts",
  "Agency software 'vs' page that turns evaluation traffic into demo requests",
  "Founder-led product page positioning a simpler tool against enterprise suites",
];

const faqs = [
  {
    question: "What is a competitor comparison page generator?",
    answer:
      "A competitor comparison page generator turns positioning notes, competitor gaps, proof points, and a target keyword into a structured page that helps buyers compare options and decide whether to try your product.",
  },
  {
    question: "Can SEOCopy write alternative pages for SEO?",
    answer:
      "Yes. SEOCopy can draft alternative-page metadata, H1s, comparison intros, feature sections, FAQs, and CTAs for searches around alternatives, competitors, and product comparisons.",
  },
  {
    question: "What should I include in a comparison-page brief?",
    answer:
      "Include the competitor name, your product category, target buyer, key differences, pricing or packaging notes, proof points, objections, compliance constraints, and the CTA you want visitors to take next.",
  },
  {
    question: "Do comparison pages need factual review?",
    answer:
      "Yes. AI-generated comparison copy should be checked against current competitor claims, pricing, and product details before publishing. Use the output as a strong first draft, then add verified proof and screenshots.",
  },
];

export default function CompetitorComparisonPageGenerator() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,254,255,0.88))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(22,78,99,0.58))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Competitor Comparison Page Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate competitor comparison pages that win high-intent buyers.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy turns positioning notes into comparison pages, alternative pages, SEO metadata, proof sections, objection handling, FAQs, and CTAs for visitors already evaluating solutions.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=competitor-comparison-page-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate a Comparison Page
              </Link>
              <a
                href="#examples"
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950 dark:border-white/15 dark:text-slate-200 dark:hover:border-white dark:hover:text-white"
              >
                See Comparison Examples
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
            Comparison copy included
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            One positioning brief, sharper assets for search, evaluation, and conversion.
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
            Example comparison briefs
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Capture visitors who are already comparing vendors, alternatives, and switching paths.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {examples.map((example) => (
              <div key={example} className="rounded-2xl border border-white/10 bg-white/5 p-5 font-medium">
                {example}
              </div>
            ))}
          </div>
          <Link
            href="/generate?source=competitor-comparison-page-generator-cta"
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
