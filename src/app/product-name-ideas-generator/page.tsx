import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Product Name Ideas Generator",
  description:
    "Generate product name ideas, naming angles, SEO listing titles, launch snippets, and brand positioning copy from one product brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/product-name-ideas-generator",
  },
  keywords: [
    "product name ideas generator",
    "AI product name ideas",
    "product naming ideas",
    "ecommerce product name ideas",
    "brand name ideas for products",
    "product launch naming ideas",
  ],
  openGraph: {
    title: "Product Name Ideas Generator | SEOCopy",
    description:
      "Turn rough product notes into product name ideas, naming territories, SEO-ready listing titles, social previews, and launch copy variants.",
    url: "https://seocopy.vercel.app/product-name-ideas-generator",
    type: "website",
  },
};

const ideaTerritories = [
  {
    label: "Benefit-led ideas",
    example: "GlowGuard Night Serum",
    body: "Generate name ideas that immediately signal the outcome, promise, or customer transformation behind the product.",
  },
  {
    label: "Category-clear ideas",
    example: "Foldable Travel Yoga Mat",
    body: "Create descriptive names and listing title variants that include product type, use case, material, audience, or buyer-intent keywords.",
  },
  {
    label: "Brandable ideas",
    example: "BrewNest Pour-Over Kit",
    body: "Explore memorable naming directions that feel ownable while still producing SEO snippets and launch copy that explain the offer.",
  },
];

const outputs = [
  "Product name idea shortlist grouped by naming territory",
  "SEO title tag and meta description for the product launch page",
  "Shopify, Amazon, Etsy, and DTC listing title variants",
  "Social preview copy, launch headline, and CTA options",
  "Positioning notes that explain which name ideas are strongest for buyers",
];

const faqs = [
  {
    question: "What is a product name ideas generator?",
    answer:
      "A product name ideas generator turns product details, audience notes, category keywords, benefits, and brand voice into naming options for ecommerce listings, launch pages, and marketing campaigns.",
  },
  {
    question: "How is this different from a basic name generator?",
    answer:
      "SEOCopy does not stop at random name ideas. Each generation can include naming territories, SEO listing titles, metadata, social previews, positioning notes, and CTA copy so the best idea can move directly into a revenue page.",
  },
  {
    question: "Can I use it for Shopify product names?",
    answer:
      "Yes. You can generate brandable product names plus Shopify-friendly title variants, product-page SEO snippets, benefit bullets, and collection or launch copy from the same brief.",
  },
  {
    question: "How many product name ideas can I generate for free?",
    answer:
      "You can try two free generations without creating an account. After that, buy a single generation for $5 or use the $19/month plan for ongoing product naming and SEO copy work.",
  },
];

export default function ProductNameIdeasGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,253,245,0.86))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(6,78,59,0.62))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Product Name Ideas Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Brainstorm product name ideas that are brandable, searchable, and ready to launch.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Paste product notes, audience details, differentiators, or category keywords. SEOCopy generates name ideas with matching SEO snippets, listing titles, social previews, and CTA variants so naming work turns into publishable launch copy.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=product-name-ideas-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate Product Name Ideas
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
              Product name idea output checklist
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
            Product naming idea playbook
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Generate name ideas for brand recall, marketplace clarity, and launch testing.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {ideaTerritories.map((item) => (
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
            Faster product naming workflow
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Go from product notes to name ideas, SEO metadata, listing titles, and launch CTAs in one pass.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            SEOCopy keeps naming brainstorming tied to acquisition. Each generation can pair the strongest name ideas with the search snippet, social preview, and landing-page copy needed to test demand.
          </p>
          <Link
            href="/generate?source=product-name-ideas-generator-cta"
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
