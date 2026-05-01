import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Product SEO Title Generator",
  description:
    "Generate ecommerce product SEO titles, meta descriptions, social previews, and product-page headline variants from rough product notes or a URL.",
  alternates: {
    canonical: "https://seocopy.vercel.app/product-seo-title-generator",
  },
  keywords: [
    "product SEO title generator",
    "ecommerce SEO title generator",
    "Shopify product title generator",
    "product title tag generator",
    "AI product SEO generator",
    "product page title generator",
  ],
  openGraph: {
    title: "Product SEO Title Generator | SEOCopy",
    description:
      "Turn product notes into search-friendly title tags, meta descriptions, social previews, and conversion copy for ecommerce product pages.",
    url: "https://seocopy.vercel.app/product-seo-title-generator",
    type: "website",
  },
};

const titleAngles = [
  {
    label: "Category + differentiator",
    example: "Organic Linen Sheet Set | Cool, Breathable Bedding",
    body: "Lead with the product category shoppers search, then add a concrete benefit that separates the product from commodity listings.",
  },
  {
    label: "Problem-aware product",
    example: "Wide Toe Box Running Shoes for Pain-Free Miles",
    body: "Use the buyer's problem or desired outcome when the product solves a specific pain point better than generic alternatives.",
  },
  {
    label: "Gift or occasion intent",
    example: "Personalized Leather Wallet for Groomsmen Gifts",
    body: "Capture seasonal, gift, and occasion searches without rewriting the entire product page for every campaign.",
  },
];

const outputs = [
  "Primary product title tag with the main ecommerce keyword",
  "Three alternate title angles for category, benefit, and campaign intent",
  "Matching meta description that sells the click without sounding generic",
  "Open Graph title and description for social or paid traffic previews",
  "Product-page headline, subheadline, and CTA variants for the PDP hero",
];

const faqs = [
  {
    question: "What is a product SEO title?",
    answer:
      "A product SEO title is the title tag search engines can show for a product page. It should make the product category clear, include a natural buyer-intent keyword, and give shoppers a specific reason to click.",
  },
  {
    question: "How is this different from a product name generator?",
    answer:
      "A product name generator focuses on naming the item. A product SEO title generator writes the search-result title, meta description, social preview, and page copy around the way shoppers already search for that item.",
  },
  {
    question: "Can SEOCopy write Shopify product SEO titles?",
    answer:
      "Yes. Paste a Shopify product URL or describe the product, audience, differentiators, and target keyword. SEOCopy returns Shopify-friendly title tags, descriptions, OG copy, and conversion-focused PDP copy variants.",
  },
  {
    question: "How many free product SEO titles can I generate?",
    answer:
      "You can try two free generations without creating an account. After that, buy a single generation for $5 or use the $19/month plan for ongoing product SEO production.",
  },
];

export default function ProductSeoTitleGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,253,245,0.86))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(6,78,59,0.62))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Product SEO Title Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Write product title tags that match buyer intent before the click.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Paste a product URL or rough merchandising notes. SEOCopy generates product SEO titles, matching meta descriptions, social previews, and PDP copy variants so shoppers understand why this product is the right choice.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=product-seo-title-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate Product SEO Titles
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
              Ecommerce output checklist
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
            Product title playbook
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Generate product title angles for shoppers who are already comparing options.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {titleAngles.map((item) => (
            <article key={item.label} className="rounded-[1.5rem] border border-black/10 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-700 dark:text-cyan-300">
                {item.label}
              </p>
              <h3 className="mt-4 text-2xl font-semibold">{item.example}</h3>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-10">
        <div className="rounded-[2rem] border border-black/10 bg-slate-950 p-8 text-white shadow-[0_24px_80px_rgba(15,23,42,0.14)] dark:border-white/10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
            Faster merchandising workflow
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Go from product notes to SEO title, snippet, social preview, and product-page copy in one pass.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            SEOCopy keeps product title generation connected to the rest of the PDP, so your search result, social preview, and on-page copy all support the same buying argument.
          </p>
          <Link
            href="/generate?source=product-seo-title-generator-cta"
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
