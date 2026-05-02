import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Etsy Product Description Generator",
  description:
    "Generate Etsy product descriptions, SEO titles, meta descriptions, tag ideas, benefit bullets, and shop-ready listing copy from rough product notes.",
  alternates: {
    canonical: "https://seocopy.vercel.app/etsy-product-description-generator",
  },
  keywords: [
    "Etsy product description generator",
    "AI Etsy listing description generator",
    "Etsy SEO copy generator",
    "Etsy listing title generator",
    "handmade product description generator",
  ],
  openGraph: {
    title: "Etsy Product Description Generator | SEOCopy",
    description:
      "Turn handmade product notes into Etsy-ready descriptions, SEO titles, tag angles, social previews, and CTA copy in seconds.",
    url: "https://seocopy.vercel.app/etsy-product-description-generator",
    type: "website",
  },
};

const benefits = [
  {
    title: "Write Etsy listings from maker notes",
    body: "Paste materials, dimensions, use cases, personalization details, or a rough supplier blurb and get a listing draft that sounds clear, trustworthy, and giftable.",
  },
  {
    title: "Pair marketplace SEO with buyer emotion",
    body: "Generate Etsy-focused titles, meta descriptions, tag angles, and benefit bullets while keeping the story, occasion, and handmade value visible.",
  },
  {
    title: "Refresh seasonal drops faster",
    body: "Create consistent listing copy for new collections, holiday gift pages, personalized products, and stale listings before campaign traffic arrives.",
  },
];

const outputs = [
  "Etsy-ready product descriptions for handmade, vintage, digital, or personalized items",
  "Marketplace SEO titles and meta descriptions built around buyer-intent keywords",
  "Tag and search-angle ideas for occasions, materials, styles, and recipients",
  "Benefit bullets that translate features into purchase reasons",
  "Social preview copy and CTA variants for shop updates and campaigns",
];

const faqs = [
  {
    question: "What does an Etsy product description generator create?",
    answer:
      "An Etsy product description generator turns rough item notes into shop-ready listing descriptions, SEO title ideas, meta descriptions, tag angles, benefit bullets, and calls to action for marketplace shoppers.",
  },
  {
    question: "Can SEOCopy help with Etsy SEO titles and tags?",
    answer:
      "Yes. SEOCopy can draft Etsy-style title tags, metadata, tag angles, social previews, and listing copy from the same product brief so sellers can improve search clarity and merchandising in one workflow.",
  },
  {
    question: "When should Etsy sellers use AI listing copy?",
    answer:
      "AI listing copy is useful when launching seasonal collections, rewriting thin listings, improving product discoverability, preparing gift guides, or standardizing descriptions across a growing shop catalog.",
  },
];

export default function EtsyProductDescriptionGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,253,245,0.86))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(20,83,45,0.62))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-800 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-200">
              Etsy Product Description Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate Etsy product descriptions that help handmade listings sell.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Turn maker notes, materials, personalization options, or rough item details into Etsy-ready descriptions, marketplace SEO titles, tag angles, social previews, and CTA variants.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=etsy-product-description-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-emerald-300 dark:text-slate-950 dark:hover:bg-emerald-200"
              >
                Generate Etsy Listing Copy
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
              Etsy listing output
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
            Why use the Etsy product description generator
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            A faster path from product details to search-ready Etsy listings.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {benefits.map((item) => (
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
