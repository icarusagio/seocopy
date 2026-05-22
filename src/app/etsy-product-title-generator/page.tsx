import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Etsy Product Title Generator",
  description:
    "Generate Etsy product titles, marketplace SEO snippets, tag angles, giftable benefit hooks, and listing CTAs from one handmade or vintage product brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/etsy-product-title-generator",
  },
  keywords: [
    "Etsy product title generator",
    "Etsy listing title generator",
    "AI Etsy title generator",
    "Etsy SEO title ideas",
    "handmade product title generator",
    "Etsy listing SEO copy",
  ],
  openGraph: {
    title: "Etsy Product Title Generator | SEOCopy",
    description:
      "Turn handmade, vintage, personalized, or digital product notes into Etsy-ready title options, tag angles, SEO snippets, and CTA copy.",
    url: "https://seocopy.vercel.app/etsy-product-title-generator",
    type: "website",
  },
};

const titleAngles = [
  {
    label: "Marketplace search fit",
    example: "Personalized Birth Flower Necklace, Custom Gold Name Jewelry",
    body: "Lead with the item type, personalization hook, material, style, and recipient or occasion so Etsy shoppers can understand the listing at a glance.",
  },
  {
    label: "Gift-ready positioning",
    example: "Printable Nursery Wall Art Set, Neutral Woodland Baby Shower Gift",
    body: "Create titles that connect the product to gifting moments, room styles, holidays, wedding details, seasonal drops, and buyer-use cases without keyword stuffing.",
  },
  {
    label: "Shop refresh variants",
    example: "Vintage Linen Table Runner, Rustic Farmhouse Dining Decor",
    body: "Generate multiple title directions for stale listings, new collections, promoted pins, shop updates, and SEO tests before paid or seasonal traffic arrives.",
  },
];

const outputs = [
  "Etsy product title options with product type, material, style, occasion, and recipient angles",
  "Marketplace SEO snippets and meta descriptions that match the listing title direction",
  "Tag and search-angle ideas for handmade, vintage, digital, and personalized products",
  "Benefit bullets that turn dimensions, materials, and customization into reasons to buy",
  "Social preview copy and CTA variants for shop updates, pins, emails, and ads",
];

const faqs = [
  {
    question: "What is an Etsy product title generator?",
    answer:
      "An Etsy product title generator turns product notes, materials, audience details, occasions, style keywords, and differentiators into Etsy listing title options designed for marketplace search and shopper scanning.",
  },
  {
    question: "Can SEOCopy help with Etsy SEO titles and tags?",
    answer:
      "Yes. SEOCopy can draft Etsy SEO title ideas, tag angles, meta descriptions, benefit bullets, social previews, and CTA variants from the same product brief so sellers can refresh listings faster.",
  },
  {
    question: "What should I include in the Etsy title brief?",
    answer:
      "Include the product type, material, dimensions, color or style, personalization options, recipient, occasion, top keywords, shop voice, and any claims or phrases that must be avoided.",
  },
  {
    question: "Does this only create listing titles?",
    answer:
      "No. One SEOCopy generation can include Etsy title variants, marketplace SEO snippets, tag ideas, product bullets, social captions, and campaign CTAs for the listing launch or refresh.",
  },
];

export default function EtsyProductTitleGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(253,242,248,1),rgba(236,253,245,0.88))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(6,95,70,0.58))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-800 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-200">
              Etsy Product Title Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate Etsy product titles that match search intent and gift-ready buying moments.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Paste handmade product notes, vintage item details, personalization options, or digital download specs. SEOCopy creates Etsy-ready title variants with matching marketplace SEO snippets, tag angles, benefit bullets, and campaign CTAs.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=etsy-product-title-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-emerald-300 dark:text-slate-950 dark:hover:bg-emerald-200"
              >
                Generate Etsy Titles
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
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700 dark:text-emerald-300">
              Etsy title output checklist
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
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700 dark:text-emerald-300">
            Marketplace title playbook
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Draft Etsy titles for search keywords, gifting context, and listing tests in one workflow.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {titleAngles.map((item) => (
            <article key={item.label} className="rounded-[1.5rem] border border-black/10 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700 dark:text-emerald-300">
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
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-200">
            Faster Etsy listing workflow
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Move from item notes to Etsy title options, tags, listing bullets, SEO snippets, and launch CTAs in one pass.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            SEOCopy keeps marketplace SEO connected to the rest of the revenue path, so a listing title refresh can also produce the product copy, social preview, and campaign CTA needed to promote it.
          </p>
          <Link
            href="/generate?source=etsy-product-title-generator-cta"
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
