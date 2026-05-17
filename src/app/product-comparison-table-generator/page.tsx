import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Product Comparison Table Generator",
  description:
    "Generate product comparison tables, feature grids, alternative-page proof points, FAQs, and CTAs that help shoppers compare options and choose faster.",
  alternates: {
    canonical: "https://seocopy.vercel.app/product-comparison-table-generator",
  },
  keywords: [
    "product comparison table generator",
    "AI product comparison table generator",
    "feature comparison table",
    "product comparison copy",
    "alternative page comparison table",
  ],
  openGraph: {
    title: "Product Comparison Table Generator | SEOCopy",
    description:
      "Turn product, competitor, or plan notes into buyer-friendly comparison tables, feature grids, decision criteria, FAQs, and conversion CTAs.",
    url: "https://seocopy.vercel.app/product-comparison-table-generator",
    type: "website",
  },
};

const benefits = [
  {
    title: "Turn messy notes into comparison tables",
    body: "Start with product specs, competitor notes, plan differences, or a rough sales brief and get a structured feature grid that is easier for buyers to scan.",
  },
  {
    title: "Support alternative and versus pages",
    body: "Package differentiators, proof points, decision criteria, and objections into copy blocks that fit comparison pages, product pages, and sales enablement assets.",
  },
  {
    title: "Move shoppers toward a clear choice",
    body: "Generate concise CTAs, FAQ answers, and recommendation copy so readers understand the strongest fit without getting stuck in feature-by-feature analysis.",
  },
];

const outputs = [
  "Feature comparison table structures",
  "buyer decision criteria and recommendation copy",
  "Alternative-page proof points and differentiators",
  "FAQ answers for comparison and versus pages",
  "CTA ideas for product, pricing, and competitor pages",
];

const faqs = [
  {
    question: "What is a product comparison table generator?",
    answer:
      "A product comparison table generator turns product specs, competitor notes, and buyer criteria into structured feature grids, differentiator copy, FAQs, and CTAs for comparison pages.",
  },
  {
    question: "Can SEOCopy help with competitor comparison pages?",
    answer:
      "Yes. SEOCopy can draft comparison tables, alternative-page positioning, proof points, objection answers, and conversion CTAs from a rough competitor or product brief.",
  },
  {
    question: "What should a good comparison table include?",
    answer:
      "A useful comparison table should include clear feature categories, meaningful buyer criteria, short proof points, honest tradeoffs, and a next-step CTA that helps the right customer choose.",
  },
];

export default function ProductComparisonTableGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(224,242,254,0.86))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(12,74,110,0.65))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Product Comparison Table Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate product comparison tables that make buying decisions easier.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Turn product specs, competitor notes, and plan differences into comparison tables, proof points, FAQs, and CTAs for high-intent buyers.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=product-comparison-table-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate Comparison Table Copy
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
              Comparison output
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
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-300">
            Why use the product comparison table generator
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            A faster way to turn feature differences into conversion copy.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {benefits.map((item) => (
            <article key={item.title} className="rounded-[1.5rem] border border-black/10 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{item.body}</p>
            </article>
          ))}
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
