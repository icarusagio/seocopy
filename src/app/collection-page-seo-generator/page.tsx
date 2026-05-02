import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Collection Page SEO Generator",
  description:
    "Generate SEO titles, meta descriptions, Open Graph copy, collection intro copy, and CTA ideas for ecommerce category and Shopify collection pages.",
  alternates: {
    canonical: "https://seocopy.vercel.app/collection-page-seo-generator",
  },
  keywords: [
    "collection page SEO generator",
    "Shopify collection page SEO",
    "category page SEO generator",
    "ecommerce category page copy",
    "AI collection page copy generator",
  ],
  openGraph: {
    title: "Collection Page SEO Generator | SEOCopy",
    description:
      "Turn a rough product category, Shopify collection, or merchandising brief into search-ready collection page metadata and conversion copy.",
    url: "https://seocopy.vercel.app/collection-page-seo-generator",
    type: "website",
  },
};

const benefits = [
  {
    title: "Capture category-level buying intent",
    body: "Collection and category pages often rank for high-intent searches. Create metadata and intro copy that matches what shoppers compare before they click.",
  },
  {
    title: "Ship cleaner Shopify collection pages",
    body: "Draft SEO titles, meta descriptions, social previews, intro copy, benefit bullets, and CTA ideas from a collection name or rough merchandising angle.",
  },
  {
    title: "Scale SEO refreshes across catalog groups",
    body: "Move through seasonal edits, gift guides, best-seller collections, and category launches without writing every snippet from scratch.",
  },
];

const outputs = [
  "Search-friendly title tags for Shopify collections and ecommerce categories",
  "Meta descriptions focused on comparison intent and shopper benefits",
  "Open Graph titles and descriptions for social and campaign previews",
  "Short collection intro copy that explains the assortment clearly",
  "CTA and merchandising angles for featured collections, gift guides, and category pages",
];

const faqs = [
  {
    question: "What is a collection page SEO generator?",
    answer:
      "A collection page SEO generator creates title tags, meta descriptions, social preview copy, intro text, and CTA angles for ecommerce category pages or Shopify collection pages.",
  },
  {
    question: "Can SEOCopy write Shopify collection page metadata?",
    answer:
      "Yes. SEOCopy can turn a Shopify collection name, category brief, or rough list of products into SEO metadata and page copy you can adapt for the collection editor.",
  },
  {
    question: "How is collection page SEO different from product page SEO?",
    answer:
      "Product page SEO sells one item. Collection page SEO helps shoppers compare a group of products, understand the assortment, and click into the right product or buying path.",
  },
];

export default function CollectionPageSeoGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(224,242,254,0.86))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(12,74,110,0.65))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Collection Page SEO Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate collection page SEO copy for category traffic.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Turn a Shopify collection, ecommerce category, or merchandising brief into SEO metadata, social previews, collection intro copy, and CTA ideas built for shoppers comparing options.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=collection-page-seo-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate Collection Page SEO
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
              Collection page output
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
            Why use the collection page SEO generator
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            A faster way to turn product groups into searchable selling pages.
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
