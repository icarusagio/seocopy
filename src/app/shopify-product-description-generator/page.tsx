import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shopify Product Description Generator",
  description:
    "Generate Shopify product descriptions, SEO titles, meta descriptions, benefit bullets, and CTA ideas from a rough product brief or URL.",
  alternates: {
    canonical: "https://seocopy.vercel.app/shopify-product-description-generator",
  },
  keywords: [
    "Shopify product description generator",
    "AI Shopify product description generator",
    "Shopify SEO product descriptions",
    "ecommerce product description generator",
    "Shopify product copy generator",
  ],
  openGraph: {
    title: "Shopify Product Description Generator | SEOCopy",
    description:
      "Turn product specs into Shopify-ready descriptions, search snippets, social previews, and CTA variants in seconds.",
    url: "https://seocopy.vercel.app/shopify-product-description-generator",
    type: "website",
  },
};

const benefits = [
  {
    title: "Turn specs into sellable Shopify copy",
    body: "Paste a supplier blurb, product URL, or bullet list and get benefit-led product descriptions that explain why shoppers should buy now.",
  },
  {
    title: "Package SEO and merchandising together",
    body: "Generate Shopify product descriptions alongside SEO titles, meta descriptions, OG copy, and CTA ideas so every listing is launch-ready.",
  },
  {
    title: "Refresh catalogs without a copy bottleneck",
    body: "Create consistent drafts for new drops, seasonal edits, and underperforming products before traffic arrives from ads, email, or search.",
  },
];

const outputs = [
  "Shopify-ready product descriptions built from rough specs",
  "SEO title tags and meta descriptions for product listings",
  "Benefit bullets that translate features into buying reasons",
  "Open Graph titles and descriptions for social shares",
  "CTA ideas for product detail pages, collection pages, and campaigns",
];

const faqs = [
  {
    question: "What does a Shopify product description generator create?",
    answer:
      "A useful Shopify product description generator turns rough product details into benefit-led descriptions, SEO titles, meta descriptions, social preview copy, and CTA ideas for product pages.",
  },
  {
    question: "Can SEOCopy write SEO metadata for Shopify products too?",
    answer:
      "Yes. SEOCopy generates product descriptions together with SEO titles, meta descriptions, Open Graph copy, headline variants, and calls to action so Shopify merchants can update the full listing in one workflow.",
  },
  {
    question: "When should a Shopify merchant use AI product descriptions?",
    answer:
      "AI product descriptions are useful when launching a new catalog, rewriting supplier-provided copy, refreshing low-converting product pages, or creating consistent copy for seasonal campaigns.",
  },
];

export default function ShopifyProductDescriptionGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(224,242,254,0.86))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(12,74,110,0.65))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Shopify Product Description Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate Shopify product descriptions that sell and rank.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Turn supplier notes, product URLs, or rough feature bullets into Shopify-ready descriptions, search metadata, social previews, benefit bullets, and CTA variants.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=shopify-product-description-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate Shopify Product Copy
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
              Shopify listing output
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
            Why use the Shopify product description generator
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            A faster path from product details to search-ready Shopify listings.
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
