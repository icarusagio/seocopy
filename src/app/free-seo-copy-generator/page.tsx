import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free SEO Copy Generator",
  description:
    "Generate free SEO titles, meta descriptions, Open Graph copy, headlines, and CTA variants from a URL or short product brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/free-seo-copy-generator",
  },
  keywords: [
    "free SEO copy generator",
    "free AI SEO copy generator",
    "SEO copy generator free",
    "free meta description generator",
    "free landing page copy generator",
  ],
  openGraph: {
    title: "Free SEO Copy Generator | SEOCopy",
    description:
      "Try SEOCopy for free and turn a URL or rough offer into search snippets, social previews, headlines, and CTA ideas.",
    url: "https://seocopy.vercel.app/free-seo-copy-generator",
    type: "website",
  },
};

const benefits = [
  {
    title: "Start without signup friction",
    body: "Use the free generation allowance to test SEO titles, meta descriptions, and page copy before deciding whether to upgrade.",
  },
  {
    title: "Cover the full snippet stack",
    body: "Generate search titles, descriptions, Open Graph copy, hero headlines, subheadlines, and CTAs from one brief.",
  },
  {
    title: "Move from idea to publishable copy",
    body: "Paste a URL, product description, or landing page idea and get structured copy variants ready for your CMS or storefront.",
  },
];

const outputs = [
  "SEO title options for search snippets",
  "Click-focused meta descriptions",
  "Open Graph title and description copy",
  "Hero headline and subheadline variants",
  "CTA ideas for product pages and landing pages",
];

const faqs = [
  {
    question: "Is the SEO copy generator really free to try?",
    answer:
      "Yes. SEOCopy includes two free generations so you can test the workflow with a URL, product brief, or landing page idea before buying more usage.",
  },
  {
    question: "What can I generate with the free SEO copy tool?",
    answer:
      "Each generation can produce SEO titles, meta descriptions, Open Graph copy, landing page headlines, subheadlines, and CTA variants from the same prompt.",
  },
  {
    question: "Who should use a free SEO copy generator?",
    answer:
      "It is useful for founders, ecommerce operators, Shopify merchants, and marketers who need quick copy drafts for pages that are too important to leave blank.",
  },
];

export default function FreeSeoCopyGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(224,242,254,0.86))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(12,74,110,0.65))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Free SEO Copy Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate free SEO copy before another page ships blank.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Try SEOCopy with two free generations. Turn a URL, product description, or rough landing page idea into SEO titles, meta descriptions, social previews, headlines, and CTAs.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=free-seo-copy-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate Free SEO Copy
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
              Free generation output
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
            Why use the free generator
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            A low-friction path from rough offer to search-ready copy.
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
