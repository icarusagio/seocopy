import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Product Page SEO Generator",
  description:
    "Generate SEO titles, meta descriptions, Open Graph copy, benefit bullets, and CTA ideas for ecommerce product pages that need more qualified clicks.",
  alternates: {
    canonical: "https://seocopy.vercel.app/product-page-seo-generator",
  },
  keywords: [
    "product page SEO generator",
    "AI product page SEO generator",
    "ecommerce product page SEO",
    "product page copy generator",
    "Shopify product page SEO",
  ],
  openGraph: {
    title: "Product Page SEO Generator | SEOCopy",
    description:
      "Turn a rough product brief into search-ready product page metadata, benefit copy, social previews, and CTA variants in seconds.",
    url: "https://seocopy.vercel.app/product-page-seo-generator",
    type: "website",
  },
};

const benefits = [
  {
    title: "Match product copy to buyer intent",
    body: "Start with a product name, URL, or rough feature list and get metadata plus on-page copy angles built around what shoppers are actually trying to buy.",
  },
  {
    title: "Improve snippets before campaigns launch",
    body: "Package the SEO title, meta description, Open Graph copy, and CTA variants together so product pages look stronger in search, social, and ads.",
  },
  {
    title: "Move faster across large catalogs",
    body: "Create consistent product-page copy drafts for seasonal drops, SKU refreshes, and Shopify collections without opening a blank document every time.",
  },
];

const outputs = [
  "Search-friendly product page title tags",
  "Meta descriptions focused on benefits and purchase intent",
  "Open Graph titles and descriptions for social previews",
  "Benefit bullets that clarify the product's strongest angles",
  "CTA ideas for product detail pages, collections, and campaigns",
];

const faqs = [
  {
    question: "What should a product page SEO generator create?",
    answer:
      "A useful product page SEO generator should create concise title tags, meta descriptions, social preview copy, benefit-led page copy, and CTA ideas from the same product brief.",
  },
  {
    question: "Can SEOCopy help with Shopify product page SEO?",
    answer:
      "Yes. SEOCopy is useful for Shopify merchants and ecommerce teams that need product metadata, product-page copy angles, and launch-ready snippets for individual SKUs or collections.",
  },
  {
    question: "Is product page SEO different from a product description?",
    answer:
      "Yes. A product description explains the item on the page, while product page SEO also covers title tags, meta descriptions, Open Graph copy, search intent, and calls to action that help shoppers click and convert.",
  },
];

export default function ProductPageSeoGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(224,242,254,0.86))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(12,74,110,0.65))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Product Page SEO Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate product page SEO copy before shoppers bounce.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Turn a product URL, SKU brief, or rough feature list into SEO metadata, social previews, benefit bullets, and CTA ideas for ecommerce product pages.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=product-page-seo-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate Product Page SEO
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
              Product page output
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
            Why use the product page SEO generator
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            A faster way to turn product details into searchable selling pages.
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
