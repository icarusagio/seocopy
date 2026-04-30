import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shopify SEO Copy Generator",
  description:
    "Generate Shopify product titles, meta descriptions, OG tags, and landing page copy from a product URL or description.",
  alternates: {
    canonical: "https://seocopy.vercel.app/shopify-seo-copy-generator",
  },
  keywords: [
    "Shopify SEO copy generator",
    "Shopify product description generator",
    "Shopify meta description generator",
    "AI Shopify SEO",
  ],
  openGraph: {
    title: "Shopify SEO Copy Generator | SEOCopy",
    description:
      "Turn product details into Shopify-ready SEO metadata and conversion copy in seconds.",
    url: "https://seocopy.vercel.app/shopify-seo-copy-generator",
    type: "website",
  },
};

const outputs = [
  "SEO title written for product and collection pages",
  "Meta description tuned for click-through and length",
  "Open Graph title and description for social previews",
  "Landing page headline, subheadline, and CTA variants",
];

const faqs = [
  {
    question: "Can SEOCopy write Shopify product meta descriptions?",
    answer:
      "Yes. Paste a Shopify product URL or describe the product, audience, and positioning. SEOCopy returns a title, meta description, OG tags, and conversion copy variants.",
  },
  {
    question: "Do I need to create an account?",
    answer:
      "No. You can run two free generations without signup, then buy a one-off generation or monthly access if the output is useful.",
  },
  {
    question: "Is this only for Shopify stores?",
    answer:
      "No. This page is tuned for Shopify merchants, but the generator works for SaaS, services, marketplaces, and any landing page that needs SEO metadata.",
  },
];

export default function ShopifySeoCopyGeneratorPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Shopify SEO Copy Generator
            </p>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight sm:text-6xl">
              Write Shopify product SEO copy that is ready to paste into your store.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy turns product details into SEO titles, meta descriptions,
              social previews, and landing page copy variants for merchants who
              need better product pages without hiring a copywriter for every SKU.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=shopify-seo-copy-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate Shopify Copy
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
          {[
            ["For product pages", "Refresh product metadata before a launch, sale, or seasonal campaign."],
            ["For collections", "Create sharper copy angles for category and collection pages."],
            ["For ads and social", "Reuse OG tags, headlines, and CTAs in paid and organic campaigns."],
          ].map(([title, body]) => (
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
