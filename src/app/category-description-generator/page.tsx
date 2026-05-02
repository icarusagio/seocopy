import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Category Description Generator",
  description:
    "Generate ecommerce category descriptions, SEO titles, meta descriptions, collection intros, merchandising angles, and CTA copy from rough product-category notes.",
  alternates: {
    canonical: "https://seocopy.vercel.app/category-description-generator",
  },
  keywords: [
    "category description generator",
    "AI category description generator",
    "ecommerce category copy generator",
    "SEO category description generator",
    "collection description generator",
  ],
  openGraph: {
    title: "Category Description Generator | SEOCopy",
    description:
      "Turn rough category notes into search-ready category descriptions, title tags, meta descriptions, merchandising copy, and CTA variants for ecommerce pages.",
    url: "https://seocopy.vercel.app/category-description-generator",
    type: "website",
  },
};

const benefits = [
  {
    title: "Write category copy without keyword stuffing",
    body: "Turn product groups, buyer needs, and merchandising priorities into useful category-page copy that helps shoppers choose what to explore next.",
  },
  {
    title: "Ship search-ready collection refreshes faster",
    body: "Generate SEO titles, meta descriptions, intro copy, and CTA variants before launching a new collection, seasonal category, or campaign page.",
  },
  {
    title: "Give thin ecommerce pages a conversion angle",
    body: "Replace empty category templates with benefit-led explanations, buying criteria, internal-link prompts, and social preview copy for acquisition campaigns.",
  },
];

const outputs = [
  "SEO category descriptions for ecommerce collections, category pages, and marketplace landing pages",
  "Title tag and meta description options focused on buyer intent and click-through clarity",
  "Intro copy, merchandising blurbs, buying-guide angles, and CTA variants for category refreshes",
  "Internal-link and FAQ prompts that help shoppers compare product groups faster",
  "Social preview copy and campaign snippets for seasonal category launches",
];

const faqs = [
  {
    question: "What is a category description generator?",
    answer:
      "A category description generator turns rough notes about a product group into ecommerce category copy, SEO title tags, meta descriptions, collection intros, merchandising angles, and CTA variants for shoppers browsing related products.",
  },
  {
    question: "Can SEOCopy write descriptions for Shopify collections?",
    answer:
      "Yes. SEOCopy can draft Shopify collection descriptions, SEO metadata, social previews, buying-guide angles, and CTA copy from a short category brief or product list.",
  },
  {
    question: "When should ecommerce teams refresh category descriptions?",
    answer:
      "Refresh category descriptions before seasonal campaigns, new collection launches, paid traffic pushes, SEO content updates, or whenever analytics show category pages get impressions but weak clicks or conversions.",
  },
];

export default function CategoryDescriptionGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,253,245,0.9))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(6,95,70,0.48))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-800 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-200">
              Category Description Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate category descriptions that help shoppers compare and click.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Turn product groups, keyword targets, buying criteria, and campaign notes into SEO category descriptions, metadata, collection intros, merchandising blurbs, and CTA variants.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=category-description-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-emerald-300 dark:text-slate-950 dark:hover:bg-emerald-200"
              >
                Generate Category Copy
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
              Category-page output
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
            Why use the category description generator
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            A faster path from blank category pages to search-ready merchandising copy.
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
