import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Product Description Generator",
  description:
    "Generate AI product descriptions, feature-to-benefit product copy, ecommerce SEO snippets, Shopify and Amazon listing angles, FAQs, and CTAs from one product brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/ai-product-description-generator",
  },
  keywords: [
    "AI product description generator",
    "product description generator",
    "ecommerce product copy generator",
    "Shopify product description AI",
    "Amazon listing copy generator",
    "feature to benefit product copy",
  ],
  openGraph: {
    title: "AI Product Description Generator | SEOCopy",
    description:
      "Turn product specs, audience notes, and proof points into benefit-led descriptions, ecommerce SEO snippets, marketplace angles, FAQs, and CTAs.",
    url: "https://seocopy.vercel.app/ai-product-description-generator",
    type: "website",
  },
};

const productCopyAngles = [
  {
    label: "Feature-to-benefit product copy",
    body: "Translate specs, materials, ingredients, dimensions, and features into shopper-facing benefits that explain why the product matters.",
  },
  {
    label: "Ecommerce SEO snippets",
    body: "Get search-friendly product titles, meta descriptions, Open Graph copy, FAQ prompts, and keyword angles for product pages.",
  },
  {
    label: "Shopify and Amazon listing angles",
    body: "Shape product descriptions, bullet ideas, comparison hooks, and campaign CTAs for Shopify stores, Amazon listings, and marketplace launches.",
  },
];

const outputs = [
  "AI product descriptions for product pages, collection promos, and marketplace listings",
  "Feature-to-benefit product copy that turns raw specs into buying reasons",
  "Ecommerce SEO snippets with title ideas, meta descriptions, and social previews",
  "Shopify and Amazon listing angles for bullets, A+ content prompts, and launch campaigns",
  "FAQs, objection reducers, and CTA variants that help shoppers decide faster",
];

const faqs = [
  {
    question: "What is an AI product description generator?",
    answer:
      "An AI product description generator turns a product brief, features, audience notes, and positioning into product descriptions, benefit bullets, ecommerce SEO snippets, FAQs, and CTAs for product pages and listings.",
  },
  {
    question: "Can I use it for Shopify and Amazon listings?",
    answer:
      "Yes. SEOCopy can create Shopify-ready product descriptions, Amazon listing angles, feature bullets, marketplace SEO snippets, and campaign copy from the same product details.",
  },
  {
    question: "How is this different from a generic product description page?",
    answer:
      "This page targets AI-assisted product copy workflows specifically: feature-to-benefit rewrites, ecommerce SEO snippets, marketplace angles, FAQs, and CTAs generated from one structured product brief.",
  },
  {
    question: "How many AI product description generations are free?",
    answer:
      "You can try two free generations with no signup. After that, buy one generation for $5 or use the $19/month plan for ongoing SEO, product, and campaign copy.",
  },
];

export default function AiProductDescriptionGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,254,255,0.9))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(8,47,73,0.55))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              AI Product Description Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate AI product descriptions that sell the benefit, not just the spec.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Paste a product brief, raw features, audience notes, and proof points. SEOCopy creates AI product descriptions, feature-to-benefit product copy, ecommerce SEO snippets, Shopify and Amazon listing angles, FAQs, and CTAs.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=ai-product-description-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate Product Descriptions
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
              Product copy output checklist
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
            From raw specs to shopper-ready copy
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Turn one product brief into product page copy, marketplace angles, and search snippets.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {productCopyAngles.map((item) => (
            <article key={item.label} className="rounded-[1.5rem] border border-black/10 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-700 dark:text-cyan-300">
                {item.label}
              </p>
              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-10">
        <div className="rounded-[2rem] border border-black/10 bg-slate-950 p-8 text-white shadow-[0_24px_80px_rgba(15,23,42,0.14)] dark:border-white/10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
            Write product copy faster
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Give every SKU a clearer reason to buy.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            SEOCopy helps founders, Shopify merchants, Amazon sellers, and ecommerce marketers move from rough product notes to publish-ready descriptions, metadata, FAQ content, and campaign snippets without starting from a blank page.
          </p>
          <Link
            href="/generate?source=ai-product-description-generator-cta"
            className="mt-8 inline-flex rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            Try Two Free Generations
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight">AI product description generator questions</h2>
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
