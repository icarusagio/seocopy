import type { Metadata } from "next";
import Link from "next/link";

const route = "/ai-product-listing-generator";
const canonical = `https://seocopy.vercel.app${route}`;

export const metadata: Metadata = {
  title: "AI Product Listing Generator",
  description:
    "Generate product listing titles, descriptions, marketplace SEO snippets, feature bullets, FAQs, social previews, and buy-now CTAs for Shopify, Amazon, Etsy, and ecommerce catalogs.",
  alternates: {
    canonical,
  },
  keywords: [
    "AI product listing generator",
    "product listing generator",
    "ecommerce listing generator",
    "marketplace listing generator",
    "Shopify product listing copy",
    "Amazon Etsy listing copy generator",
  ],
  openGraph: {
    title: "AI Product Listing Generator | SEOCopy",
    description:
      "Turn rough product specs into marketplace-ready titles, descriptions, bullets, SEO snippets, FAQs, social previews, and checkout CTAs.",
    url: canonical,
    type: "website",
  },
};

const listingOutputs = [
  {
    label: "Search-ready title",
    title: "Lead with the terms buyers already use",
    body: "Create title options that combine product type, core benefit, material or use case, audience, and marketplace intent without stuffing keywords.",
  },
  {
    label: "Conversion copy",
    title: "Turn specs into reasons to buy",
    body: "Draft benefit-led descriptions, scannable feature bullets, comparison notes, objection reducers, FAQs, and buy-now CTAs for product pages and marketplace listings.",
  },
  {
    label: "Launch variants",
    title: "Reuse one brief across sales channels",
    body: "Generate social previews, email hooks, ad snippets, merchandising blurbs, and alternate angles for Shopify, Amazon, Etsy, catalogs, and seasonal product drops.",
  },
];

const workflow = [
  "Paste the product name, specs, materials, features, audience, price point, and the marketplace or ecommerce channel you want to publish on.",
  "Add proof points, differentiators, compliance constraints, keywords, competitor examples, and the action you want shoppers to take.",
  "Generate listing titles, product descriptions, bullets, metadata, FAQs, social previews, and CTA variants from the same brief.",
  "Copy the best version into Shopify, Amazon, Etsy, a catalog page, a launch email, or an ad test, then generate another angle for the next channel.",
];

const examples = [
  "Shopify product listing for a restocked skincare bundle before a weekend promotion",
  "Amazon listing refresh for a kitchen accessory with stronger feature bullets and FAQs",
  "Etsy listing copy for a personalized gift with search terms, tags, and social preview copy",
  "DTC catalog page for a new apparel drop with product benefits, sizing reassurance, and checkout CTAs",
];

const faqs = [
  {
    question: "What is an AI product listing generator?",
    answer:
      "An AI product listing generator turns product specs, audience details, differentiators, keywords, proof, and offer context into ecommerce listing copy such as titles, descriptions, feature bullets, metadata, FAQs, and CTAs.",
  },
  {
    question: "Which sales channels can I use it for?",
    answer:
      "SEOCopy can draft product listing copy for Shopify stores, Amazon listings, Etsy listings, DTC product catalogs, marketplace pages, launch emails, social previews, and paid ad tests from one product brief.",
  },
  {
    question: "What should I include in the product listing brief?",
    answer:
      "Include the product type, audience, use case, materials, dimensions, benefits, differentiators, top keywords, price point, customer objections, required claims, prohibited claims, and the channel where the listing will be published.",
  },
  {
    question: "Can it create both SEO and conversion copy?",
    answer:
      "Yes. One SEOCopy generation can include search-friendly titles and metadata plus benefit-led descriptions, bullets, FAQs, social snippets, and CTAs that help shoppers understand why to buy now.",
  },
];

export default function AiProductListingGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,253,245,0.92))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(6,78,59,0.5))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-800 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-200">
              AI Product Listing Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate product listings that are ready for search, carts, and campaigns.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Paste rough product specs, audience notes, keyword ideas, and offer details. SEOCopy turns them into marketplace-ready titles, descriptions, feature bullets, SEO snippets, FAQs, social previews, and buy-now CTAs.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=ai-product-listing-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-emerald-300 dark:text-slate-950 dark:hover:bg-emerald-200"
              >
                Generate a Product Listing
              </Link>
              <a
                href="#examples"
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950 dark:border-white/15 dark:text-slate-200 dark:hover:border-white dark:hover:text-white"
              >
                See Listing Examples
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/10 bg-white/85 p-7 shadow-[0_24px_80px_rgba(15,23,42,0.1)] dark:border-white/10 dark:bg-white/5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700 dark:text-emerald-300">
              Four-step listing workflow
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
            Listing copy included
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            One product brief, every listing section needed to move shoppers from search to checkout.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {listingOutputs.map((item) => (
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
            Example product listing briefs
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Draft product copy for Shopify, Amazon, Etsy, DTC catalogs, launch emails, and ad tests from the details you already have.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {examples.map((example) => (
              <div key={example} className="rounded-2xl border border-white/10 bg-white/5 p-5 font-medium">
                {example}
              </div>
            ))}
          </div>
          <Link
            href="/generate?source=ai-product-listing-generator-cta"
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
