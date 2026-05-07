import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shopify Meta Description Generator",
  description:
    "Generate Shopify meta descriptions, SEO title ideas, product-page snippets, collection-page snippets, social previews, and CTA copy for ecommerce pages.",
  alternates: {
    canonical: "https://seocopy.vercel.app/shopify-meta-description-generator",
  },
  keywords: [
    "Shopify meta description generator",
    "AI Shopify meta description generator",
    "Shopify SEO meta description",
    "ecommerce meta description generator",
    "Shopify product meta description",
  ],
  openGraph: {
    title: "Shopify Meta Description Generator | SEOCopy",
    description:
      "Turn a Shopify product, collection, or store brief into search snippets, SEO title ideas, social previews, and buyer-focused CTA copy.",
    url: "https://seocopy.vercel.app/shopify-meta-description-generator",
    type: "website",
  },
};

const benefits = [
  {
    title: "Write snippets for buyer intent",
    body: "Convert product notes, collection names, or rough merchandising angles into meta descriptions that match what shoppers are searching for.",
  },
  {
    title: "Refresh Shopify SEO at catalog speed",
    body: "Draft product-page and collection-page snippets without opening a blank doc for every SKU, seasonal drop, or category refresh.",
  },
  {
    title: "Pair search copy with conversion copy",
    body: "Get SEO title options, social previews, benefit bullets, and CTA ideas so each page has a consistent angle across search, social, and onsite copy.",
  },
];

const outputs = [
  "Meta descriptions for Shopify product pages and collection pages",
  "SEO title tag ideas with product, collection, and brand keywords",
  "Open Graph titles and descriptions for shared product and category links",
  "Benefit bullets and buyer-intent angles to reuse above the fold",
  "CTA variants for product pages, collections, gift guides, and sale pages",
];

const faqs = [
  {
    question: "What is a Shopify meta description generator?",
    answer:
      "A Shopify meta description generator drafts search-result snippets for product pages, collection pages, and store pages from a short product, audience, or merchandising brief.",
  },
  {
    question: "How long should a Shopify meta description be?",
    answer:
      "A practical target is roughly 140 to 160 characters, but the best description should clearly state the product or collection value, include the main keyword naturally, and give shoppers a reason to click.",
  },
  {
    question: "Can SEOCopy help with product and collection metadata?",
    answer:
      "Yes. SEOCopy can draft Shopify product meta descriptions, collection snippets, SEO titles, social preview copy, benefit bullets, and CTA ideas from one short brief.",
  },
];

export default function ShopifyMetaDescriptionGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(224,242,254,0.86))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(12,74,110,0.65))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Shopify Meta Description Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate Shopify meta descriptions built for clicks.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Turn a Shopify product, collection, or store brief into SEO snippets, title tag ideas, social previews, benefit bullets, and CTA copy for high-intent ecommerce pages.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=shopify-meta-description-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate Shopify Metadata
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
              Shopify metadata output
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
            Why use the Shopify meta description generator
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            A faster way to turn product and collection briefs into search-ready snippets.
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
