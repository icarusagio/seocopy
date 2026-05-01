import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI SEO Copy Generator",
  description:
    "Generate SEO titles, meta descriptions, Open Graph copy, and landing page messaging with an AI SEO copy generator built for publish-ready output.",
  alternates: {
    canonical: "https://seocopy.vercel.app/ai-seo-copy-generator",
  },
  keywords: [
    "AI SEO copy generator",
    "SEO copy generator",
    "AI meta description generator",
    "AI landing page copy generator",
    "SEO title generator",
  ],
  openGraph: {
    title: "AI SEO Copy Generator | SEOCopy",
    description:
      "Turn a URL or rough offer into SEO metadata, social previews, headlines, and CTA variants in seconds.",
    url: "https://seocopy.vercel.app/ai-seo-copy-generator",
    type: "website",
  },
};

const outputs = [
  "SEO title options shaped for clear search intent",
  "Meta descriptions written for click-through and snippet length",
  "Open Graph titles and descriptions for shareable pages",
  "Landing page headlines, subheadlines, and CTA variants",
];

const scenarios = [
  [
    "New pages",
    "Draft metadata and hero copy before a product, feature, or campaign page goes live.",
  ],
  [
    "Stale pages",
    "Rewrite weak titles, descriptions, and above-the-fold copy without starting from a blank doc.",
  ],
  [
    "Small teams",
    "Give founders, marketers, and operators a fast first pass before editing in their CMS.",
  ],
];

const faqs = [
  {
    question: "What does the AI SEO copy generator create?",
    answer:
      "SEOCopy creates SEO titles, meta descriptions, Open Graph copy, headlines, subheadlines, CTA ideas, and short landing page copy variants from a URL or offer description.",
  },
  {
    question: "Is the output ready to publish?",
    answer:
      "The output is designed to be copy-ready and length-aware, but you should still review facts, claims, brand voice, and compliance details before publishing.",
  },
  {
    question: "Can I try it without signing up?",
    answer:
      "Yes. SEOCopy includes two free generations with no signup, then offers one-off and monthly paid options for ongoing SEO copy production.",
  },
];

export default function AiSeoCopyGeneratorPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              AI SEO Copy Generator
            </p>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate AI SEO copy that is structured, searchable, and ready to edit.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy turns a page URL, product description, or rough offer into
              SEO metadata and landing page copy variants so you can ship better
              pages without waiting on a full copywriting cycle.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=ai-seo-copy-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate AI SEO Copy
              </Link>
              <a
                href="#faq"
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950 dark:border-white/15 dark:text-slate-200 dark:hover:border-white dark:hover:text-white"
              >
                Read FAQ
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/10 bg-white p-7 shadow-[0_24px_80px_rgba(15,23,42,0.1)] dark:border-white/10 dark:bg-white/5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-700 dark:text-cyan-300">
              What you get
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
        <div className="grid gap-6 md:grid-cols-3">
          {scenarios.map(([title, body]) => (
            <article key={title} className="rounded-[1.5rem] border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-white/5">
              <h2 className="text-2xl font-semibold">{title}</h2>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight">FAQ</h2>
        <div className="mt-6 space-y-4">
          {faqs.map((faq) => (
            <article key={faq.question} className="rounded-2xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-white/5">
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
