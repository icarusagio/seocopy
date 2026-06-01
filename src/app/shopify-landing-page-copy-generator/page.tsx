import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shopify Landing Page Copy Generator",
  description:
    "Generate Shopify landing page copy, collection campaign sections, SEO metadata, offer proof, product modules, FAQs, and cart-driving CTAs from one store brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/shopify-landing-page-copy-generator",
  },
  keywords: [
    "Shopify landing page copy generator",
    "Shopify landing page copy",
    "Shopify campaign page copy",
    "ecommerce landing page generator",
    "Shopify sales page copy",
    "AI Shopify copy generator",
  ],
  openGraph: {
    title: "Shopify Landing Page Copy Generator | SEOCopy",
    description:
      "Turn a Shopify campaign, collection, or product-drop brief into landing page sections, SEO snippets, proof blocks, FAQs, and buy-now CTAs.",
    url: "https://seocopy.vercel.app/shopify-landing-page-copy-generator",
    type: "website",
  },
};

const copyBlocks = [
  {
    label: "Campaign hero",
    title: "Offer-led Shopify landing page copy",
    body: "Draft the headline, subheadline, promo framing, and above-the-fold CTA that tell shoppers why this product drop or collection matters now.",
  },
  {
    label: "Merchandising sections",
    title: "Product modules, proof, and objections",
    body: "Turn rough product notes into benefit rows, bundle angles, size or fit reassurance, shipping notes, social proof, and trust-building FAQs.",
  },
  {
    label: "Search + cart intent",
    title: "SEO metadata and buy-now CTAs",
    body: "Generate collection-friendly title tags, meta descriptions, Open Graph snippets, and CTA variants that move visitors toward add-to-cart.",
  },
];

const workflow = [
  "Paste the store niche, campaign theme, products or collection, offer, margin-friendly incentive, and target shopper.",
  "Choose the conversion goal: product drop, bundle push, seasonal collection, influencer traffic, or paid ad landing page.",
  "Generate Shopify landing page sections, SEO metadata, proof blocks, objection reducers, FAQs, and CTA variants.",
  "Publish the best copy in your Shopify page builder, collection template, ad landing page, or campaign brief.",
];

const examples = [
  "Seasonal collection page for a skincare store with bundle CTAs",
  "Paid social landing page for a Shopify apparel product drop",
  "Influencer campaign page for a home goods brand with proof blocks",
  "BFCM Shopify landing page with urgency, FAQs, and add-to-cart CTAs",
];

const faqs = [
  {
    question: "What is a Shopify landing page copy generator?",
    answer:
      "A Shopify landing page copy generator turns a store campaign brief into page-ready copy: hero headlines, product and collection sections, benefit bullets, proof blocks, SEO metadata, FAQs, and calls to action.",
  },
  {
    question: "Can SEOCopy write copy for Shopify product drops and collections?",
    answer:
      "Yes. SEOCopy can draft landing page copy for product drops, seasonal collections, bundle campaigns, influencer traffic, paid social campaigns, and BFCM promotions.",
  },
  {
    question: "How is this different from a Shopify product description generator?",
    answer:
      "A product description focuses on one item. A Shopify landing page needs campaign framing, collection context, proof, objections, FAQs, and CTA copy that connect multiple products or an offer to a buying moment.",
  },
  {
    question: "How many free Shopify landing page generations are included?",
    answer:
      "You can run two free generations without an account. After that, buy one more generation for $5 or use the $19/month plan for ongoing campaign and ecommerce copy production.",
  },
];

export default function ShopifyLandingPageCopyGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,253,245,0.9))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(6,78,59,0.62))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-800 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-200">
              Shopify Landing Page Copy Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate Shopify landing page copy that turns campaign traffic into carts.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy turns a Shopify product drop, collection, bundle, or promo brief into landing page sections, SEO metadata, proof blocks, FAQs, and add-to-cart CTAs for merchants who need a campaign page fast.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=shopify-landing-page-copy-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-emerald-300 dark:text-slate-950 dark:hover:bg-emerald-200"
              >
                Generate Shopify Landing Copy
              </Link>
              <a
                href="#examples"
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950 dark:border-white/15 dark:text-slate-200 dark:hover:border-white dark:hover:text-white"
              >
                See Shopify Examples
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/10 bg-white/85 p-7 shadow-[0_24px_80px_rgba(15,23,42,0.1)] dark:border-white/10 dark:bg-white/5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700 dark:text-emerald-300">
              Shopify campaign workflow
            </p>
            <div className="mt-6 space-y-4">
              {workflow.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-2xl border border-slate-200 p-4 dark:border-white/10">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-800 dark:bg-emerald-300 dark:text-slate-950">
                    {index + 1}
                  </span>
                  <p className="font-medium">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-10">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700 dark:text-emerald-300">
            Shopify copy blocks included
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            One store campaign brief, a landing page shoppers can understand before they buy.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {copyBlocks.map((item) => (
            <article key={item.label} className="rounded-[1.5rem] border border-black/10 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700 dark:text-emerald-300">
                {item.label}
              </p>
              <h3 className="mt-4 text-2xl font-semibold">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="examples" className="mx-auto max-w-6xl px-6 pb-20 lg:px-10">
        <div className="rounded-[2rem] border border-black/10 bg-slate-950 p-8 text-white shadow-[0_24px_80px_rgba(15,23,42,0.14)] dark:border-white/10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-200">
            Built for Shopify revenue moments
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Draft page copy for the campaigns that send shoppers somewhere more focused than your homepage.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {examples.map((example) => (
              <div key={example} className="rounded-2xl border border-white/10 bg-white/5 p-5 font-medium">
                {example}
              </div>
            ))}
          </div>
          <Link
            href="/generate?source=shopify-landing-page-copy-generator-cta"
            className="mt-8 inline-flex rounded-full bg-emerald-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-200"
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
