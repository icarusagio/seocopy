import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ecommerce SEO Copy Generator",
  description:
    "Generate ecommerce SEO titles, meta descriptions, product-page copy, category-page angles, and CTAs from a short store or product brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/ecommerce-seo-copy-generator",
  },
  keywords: [
    "ecommerce SEO copy generator",
    "AI ecommerce copy generator",
    "ecommerce meta description generator",
    "product page SEO copy",
    "category page copy generator",
  ],
  openGraph: {
    title: "Ecommerce SEO Copy Generator | SEOCopy",
    description:
      "Turn store, product, and category details into search-ready ecommerce copy in seconds.",
    url: "https://seocopy.vercel.app/ecommerce-seo-copy-generator",
    type: "website",
  },
};

const useCases = [
  {
    title: "Product pages",
    body: "Convert supplier notes, feature lists, or rough product positioning into search snippets and benefit-led copy customers understand.",
  },
  {
    title: "Category pages",
    body: "Draft category intros, title tags, and meta descriptions that explain the assortment while matching commercial search intent.",
  },
  {
    title: "Campaign landing pages",
    body: "Create headline, subheadline, and CTA variants for launches, seasonal promotions, bundles, and limited-time offers.",
  },
];

const outputs = [
  "SEO title and meta description for store pages",
  "Open Graph copy for social previews and ads",
  "Product or category page copy angles",
  "Headline, subheadline, and CTA variants",
  "A reusable brief you can adapt for more SKUs",
];

const faqs = [
  {
    question: "What ecommerce copy can SEOCopy generate?",
    answer:
      "SEOCopy generates SEO titles, meta descriptions, Open Graph copy, landing-page headlines, subheadlines, CTA ideas, and product or category page copy from a URL or short brief.",
  },
  {
    question: "Is this different from the Shopify SEO generator?",
    answer:
      "The Shopify page is tuned specifically for Shopify merchants. This ecommerce SEO copy generator is broader and works for Shopify, WooCommerce, Amazon-adjacent landing pages, marketplaces, and direct-to-consumer stores.",
  },
  {
    question: "Can I try it without a subscription?",
    answer:
      "Yes. You can run two free generations without creating an account. If the output is useful, buy a one-off generation pack or use the monthly plan for ongoing catalog work.",
  },
];

export default function EcommerceSeoCopyGeneratorPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-white p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-white/5 md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Ecommerce SEO Copy Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate ecommerce SEO copy for product, category, and campaign pages.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy turns a store URL, product description, or campaign brief into search-ready
              metadata and conversion copy. Use it to refresh thin pages, launch new products,
              and produce more copy variants without slowing down your catalog workflow.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=ecommerce-seo-copy-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate Ecommerce Copy
              </Link>
              <a
                href="#faq"
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950 dark:border-white/15 dark:text-slate-200 dark:hover:border-white dark:hover:text-white"
              >
                Read FAQ
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/10 bg-slate-50 p-7 dark:border-white/10 dark:bg-slate-950/70">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-700 dark:text-cyan-300">
              Output checklist
            </p>
            <div className="mt-6 space-y-4">
              {outputs.map((output) => (
                <div key={output} className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-white/5">
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
            Built for ecommerce workflows
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Use one short brief across the revenue pages that need better copy.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {useCases.map((item) => (
            <article key={item.title} className="rounded-[1.5rem] border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-white/5">
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
