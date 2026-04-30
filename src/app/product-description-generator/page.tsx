import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Product Description Generator",
  description:
    "Generate ecommerce product descriptions, SEO titles, meta descriptions, OG copy, and CTA variants from product details in seconds.",
  alternates: {
    canonical: "https://seocopy.vercel.app/product-description-generator",
  },
  keywords: [
    "product description generator",
    "AI product description generator",
    "ecommerce product copy generator",
    "Shopify product description generator",
    "SEO product description",
  ],
  openGraph: {
    title: "Product Description Generator | SEOCopy",
    description:
      "Turn product details into benefit-led ecommerce descriptions, metadata, and CTA variants ready for product pages.",
    url: "https://seocopy.vercel.app/product-description-generator",
    type: "website",
  },
};

const sections = [
  {
    title: "For new SKUs",
    body: "Move from supplier notes or rough specs to customer-facing copy that highlights benefits, use cases, and buying triggers.",
  },
  {
    title: "For catalog refreshes",
    body: "Rewrite thin or duplicate product pages with clearer positioning, SEO metadata, and stronger call-to-action language.",
  },
  {
    title: "For seasonal campaigns",
    body: "Generate fresh angles for launches, promotions, bundles, and gift guides without rebuilding your copy workflow.",
  },
];

const outputs = [
  "Benefit-led product description",
  "SEO title and meta description",
  "Open Graph title and description",
  "Headline, subheadline, and CTA variants",
];

const faqs = [
  {
    question: "What does the product description generator create?",
    answer:
      "SEOCopy creates a product description, SEO title, meta description, social preview copy, headline variants, subheadlines, and CTA options from a URL or short product brief.",
  },
  {
    question: "Can I use it for Shopify products?",
    answer:
      "Yes. The workflow is built for ecommerce teams and works well for Shopify product pages, collection pages, and landing pages.",
  },
  {
    question: "Do I need an account to try it?",
    answer:
      "No. You can run two free generations without signup. After that, buy a single generation for $5 or use the $19/month plan for ongoing copy production.",
  },
];

export default function ProductDescriptionGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(240,253,250,0.82))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(20,83,45,0.55))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Product Description Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Write ecommerce product descriptions that are easier to find and easier to buy.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Paste a product URL or describe the item, audience, and positioning. SEOCopy returns benefit-led product copy, SEO metadata, social preview text, and CTA ideas you can paste into a store page.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=product-description-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate Product Copy
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
              Output checklist
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
            Ecommerce use cases
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Built for merchants who need product copy at catalog speed.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {sections.map((item) => (
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
