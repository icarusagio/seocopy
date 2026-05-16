import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shopify Email Marketing Generator",
  description:
    "Generate Shopify email marketing copy for product drops, promos, replenishment flows, abandoned browse moments, and Klaviyo-ready campaign blocks.",
  alternates: {
    canonical: "https://seocopy.vercel.app/shopify-email-marketing-generator",
  },
  keywords: [
    "Shopify email marketing generator",
    "Shopify email copy generator",
    "Klaviyo email copy",
    "product drop email campaign",
    "Shopify promo email copy",
    "ecommerce email marketing copy",
  ],
  openGraph: {
    title: "Shopify Email Marketing Generator | SEOCopy",
    description:
      "Turn a Shopify campaign brief into email subject lines, preview text, segmented promo angles, product-drop copy, FAQs, and CTAs.",
    url: "https://seocopy.vercel.app/shopify-email-marketing-generator",
    type: "website",
  },
};

const campaignTypes = [
  {
    label: "Product-drop email campaigns",
    body: "Draft launch, waitlist, early-access, and restock messages that turn Shopify inventory events into timely revenue campaigns.",
  },
  {
    label: "Segmented promo angles",
    body: "Create variants for VIP buyers, first-time shoppers, lapsed customers, category browsers, and discount-sensitive subscribers.",
  },
  {
    label: "Klaviyo-ready copy blocks",
    body: "Generate subject lines, preview text, hero copy, product modules, CTA options, and plain-text fallback snippets that are easy to paste into Klaviyo or Shopify Email.",
  },
];

const outputs = [
  "Subject-line and preview-text pairs for Shopify email marketing campaigns",
  "Product-drop, restock, promo, and replenishment message angles",
  "Segment-specific copy for loyal customers, browsers, and first-time buyers",
  "Landing-page snippets and CTA copy that match the email promise",
  "FAQ and objection-handling blocks for shipping, returns, discounts, and product fit",
];

const faqs = [
  {
    question: "What is a Shopify email marketing generator?",
    answer:
      "A Shopify email marketing generator turns a store, product, promo, or customer segment brief into ecommerce email copy: subject lines, preview text, campaign bodies, product modules, FAQs, and CTAs.",
  },
  {
    question: "Can SEOCopy write Klaviyo-ready Shopify emails?",
    answer:
      "Yes. SEOCopy can draft Klaviyo-ready copy blocks for product-drop email campaigns, restock notices, promos, replenishment flows, browse recovery, and customer segments so merchants are not starting from a blank campaign.",
  },
  {
    question: "How is this different from a general email marketing generator?",
    answer:
      "This page focuses on Shopify email marketing: ecommerce product modules, inventory moments, discount framing, SKU or collection launches, Shopify Email and Klaviyo workflows, and merchant-specific objections such as fit, shipping, returns, and stockouts.",
  },
  {
    question: "How many Shopify email marketing drafts can I generate for free?",
    answer:
      "You can try two free generations without creating an account. After that, buy one generation for $5 or use the $19/month plan for ongoing Shopify SEO and campaign copy.",
  },
];

export default function ShopifyEmailMarketingGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,254,255,0.86))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(14,116,144,0.58))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Shopify Email Marketing Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate Shopify email marketing copy for product drops, promos, and segmented campaigns.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Paste a Shopify product, collection, promo, or customer segment brief. SEOCopy returns subject lines, preview text, product-drop email campaigns, segmented promo angles, Klaviyo-ready copy blocks, FAQs, and CTAs in one pass.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=shopify-email-marketing-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate Shopify Email Copy
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
              Campaign output checklist
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
            Shopify email playbooks
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Turn inventory, product, and customer-segment moments into revenue emails.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {campaignTypes.map((item) => (
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
            Faster Shopify campaign production
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Go from rough promo brief to Shopify email copy, landing snippets, and segment variants in minutes.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            SEOCopy keeps email copy aligned with the product page, collection, discount, and buyer intent. Use it for launch campaigns, restocks, replenishment prompts, and merchant-specific objections without rewriting every block manually.
          </p>
          <Link
            href="/generate?source=shopify-email-marketing-generator-cta"
            className="mt-8 inline-flex rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            Try Two Free Generations
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight">Shopify email marketing generator questions</h2>
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
