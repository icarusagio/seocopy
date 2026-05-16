import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Product FAQ Generator",
  description:
    "Generate product FAQs, buyer objection answers, PDP FAQ schema snippets, Shopify product questions, and conversion-ready answers from one product brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/product-faq-generator",
  },
  keywords: [
    "product FAQ generator",
    "AI product FAQ generator",
    "product FAQs",
    "buyer objection answers",
    "PDP FAQ schema snippets",
    "Shopify product questions",
    "ecommerce FAQ generator",
    "product page FAQ copy",
  ],
  openGraph: {
    title: "Product FAQ Generator | SEOCopy",
    description:
      "Turn one product brief into product FAQs, buyer objection answers, PDP FAQ schema snippets, Shopify product questions, and purchase-ready support copy.",
    url: "https://seocopy.vercel.app/product-faq-generator",
    type: "website",
  },
};

const faqAssets = [
  {
    label: "Buyer objection answers",
    title: "Answer the questions that stop shoppers from buying",
    body: "Draft clear responses around sizing, compatibility, materials, delivery, returns, guarantees, care instructions, and product fit before buyers bounce or contact support.",
  },
  {
    label: "PDP FAQ schema snippets",
    title: "Package answers for product pages and richer search results",
    body: "Create concise FAQ copy that can support PDP sections, Shopify collapsible tabs, FAQPage JSON-LD drafts, help-center snippets, and paid landing page proof blocks.",
  },
  {
    label: "Shopify product questions",
    title: "Turn merchant knowledge into useful storefront copy",
    body: "Generate Shopify product questions from product specs, reviews, support tickets, shipping policies, use cases, and customer objections so every PDP feels more complete.",
  },
];

const workflow = [
  "Paste the product description, target buyer, materials or specs, shipping and returns policy, guarantee, reviews, and known objections.",
  "Add Shopify product questions from support tickets, review language, sales calls, or competitor PDPs that shoppers already ask.",
  "Generate product FAQs, buyer objection answers, PDP FAQ schema snippets, short storefront answers, and support-ready variants.",
  "Reuse the best answers on product pages, collection landing pages, checkout reassurance blocks, help docs, and lifecycle email follow-ups.",
];

const faqs = [
  {
    question: "What is a product FAQ generator?",
    answer:
      "A product FAQ generator turns a product brief into product FAQs, buyer objection answers, Shopify product questions, and concise page-ready answers for ecommerce product detail pages.",
  },
  {
    question: "How is this different from the general FAQ generator?",
    answer:
      "The general FAQ generator helps with broad landing page questions. This product FAQ generator focuses on product-page concerns like fit, compatibility, materials, shipping, returns, guarantees, care, objections, and purchase confidence.",
  },
  {
    question: "Can SEOCopy create PDP FAQ schema snippets?",
    answer:
      "Yes. SEOCopy can draft PDP FAQ schema snippets and FAQPage-ready question and answer copy that your developer or Shopify theme can adapt for structured data and on-page FAQ sections.",
  },
  {
    question: "How many product FAQ generations are free?",
    answer:
      "You can run two free generations with no signup. After that, buy one generation for $5 or use the $19/month plan for ongoing SEO, product page, landing page, email, SMS, and social copy.",
  },
];

export default function ProductFaqGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-sky-700 dark:text-sky-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(239,246,255,0.92))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(14,165,233,0.32))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-sky-800 dark:border-sky-400/20 dark:bg-sky-400/10 dark:text-sky-200">
              Product FAQ Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate product FAQs that remove purchase objections from your PDP.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy turns one product brief into product FAQs, buyer objection answers, PDP FAQ schema snippets, Shopify product questions, and conversion-ready copy for product pages and support flows.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=product-faq-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-sky-300 dark:text-slate-950 dark:hover:bg-sky-200"
              >
                Generate Product FAQs
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
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700 dark:text-sky-300">
              Product page workflow
            </p>
            <div className="mt-6 space-y-4">
              {workflow.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-2xl border border-slate-200 p-4 dark:border-white/10">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-800 dark:bg-sky-300 dark:text-slate-950">
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
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700 dark:text-sky-300">
            Product FAQ assets included
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Move from scattered product notes to purchase-ready FAQ blocks.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {faqAssets.map((item) => (
            <article key={item.label} className="rounded-[1.5rem] border border-black/10 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700 dark:text-sky-300">
                {item.label}
              </p>
              <h3 className="mt-4 text-2xl font-semibold">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-10">
        <div className="rounded-[2rem] border border-black/10 bg-slate-950 p-8 text-white shadow-[0_24px_80px_rgba(15,23,42,0.14)] dark:border-white/10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-200">
            More confident product pages
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Pair each answer with product proof, policy reassurance, and a stronger buy CTA.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            Use SEOCopy to align product FAQs, buyer objection answers, SEO snippets, structured-data-ready FAQ copy, and product page CTAs around the same purchase intent.
          </p>
          <Link
            href="/generate?source=product-faq-generator-cta"
            className="mt-8 inline-flex rounded-full bg-sky-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-200"
          >
            Try Two Free Generations
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight">Product FAQ generator questions</h2>
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
