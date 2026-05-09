import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Schema Markup Generator",
  description:
    "Generate schema markup ideas, JSON-LD blocks, FAQ snippets, and search-ready metadata for product, local business, article, and SaaS pages.",
  alternates: {
    canonical: "https://seocopy.vercel.app/schema-markup-generator",
  },
  keywords: [
    "schema markup generator",
    "JSON-LD generator",
    "structured data generator",
    "FAQ schema generator",
    "product schema generator",
    "local business schema generator",
  ],
  openGraph: {
    title: "Schema Markup Generator | SEOCopy",
    description:
      "Turn a page brief into schema markup recommendations, JSON-LD snippets, FAQs, metadata, and internal-link copy for richer search results.",
    url: "https://seocopy.vercel.app/schema-markup-generator",
    type: "website",
  },
};

const schemaTypes = [
  {
    label: "Product and offer schema",
    body: "Draft Product, Offer, AggregateRating, and FAQ structured data guidance for ecommerce and Shopify pages that need clearer SERP context.",
  },
  {
    label: "Local business schema",
    body: "Create LocalBusiness, Service, areaServed, review-response, and FAQ copy prompts for service pages and Google Business Profile landing pages.",
  },
  {
    label: "Article and SaaS schema",
    body: "Plan Article, SoftwareApplication, HowTo, and FAQ JSON-LD blocks alongside metadata and CTA copy for content and product-led pages.",
  },
];

const outputs = [
  "Recommended schema types for the page, audience, and search intent",
  "JSON-LD starter block with fields to verify before publishing",
  "FAQ questions and answers that can support FAQPage markup",
  "Matching title tag, meta description, and Open Graph copy",
  "Implementation checklist for validation, required fields, and internal links",
];

const faqs = [
  {
    question: "What is a schema markup generator?",
    answer:
      "A schema markup generator turns a product, article, local service, SaaS, or landing-page brief into structured data recommendations and JSON-LD starter copy that search engines can understand.",
  },
  {
    question: "Can SEOCopy write JSON-LD schema markup?",
    answer:
      "Yes. SEOCopy can draft JSON-LD blocks, FAQ copy, metadata, and page snippets from a brief. You should still validate required fields and publish only accurate business, product, price, and review details.",
  },
  {
    question: "Which schema types should I use on revenue pages?",
    answer:
      "Common revenue-page schema types include Product, Offer, SoftwareApplication, LocalBusiness, Service, Article, HowTo, BreadcrumbList, and FAQPage. SEOCopy helps pick the set that fits the page intent.",
  },
  {
    question: "How many schema markup drafts can I generate for free?",
    answer:
      "You can try two free generations without creating an account. After that, buy a single generation for $5 or use the $19/month plan for ongoing SEO copy and structured data work.",
  },
];

export default function SchemaMarkupGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(240,253,244,0.86))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(6,78,59,0.62))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Schema Markup Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate schema markup drafts that make SEO pages easier to understand and validate.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Paste a product page, service page, blog post, SaaS landing page, or local business brief. SEOCopy returns schema type recommendations, JSON-LD starter copy, FAQ snippets, metadata, and implementation notes for richer search visibility.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=schema-markup-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate Schema Markup
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
              Structured data output checklist
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
            Schema playbooks
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Create structured data plans for ecommerce, local SEO, content, and SaaS pages.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {schemaTypes.map((item) => (
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
            Faster rich-result preparation
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Go from rough page brief to schema recommendations, FAQ copy, metadata, and validation notes in one pass.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            SEOCopy keeps structured data tied to revenue pages. Each generation helps you prepare accurate JSON-LD starter copy, richer search snippets, and conversion-focused supporting copy without opening a blank document.
          </p>
          <Link
            href="/generate?source=schema-markup-generator-cta"
            className="mt-8 inline-flex rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            Try Two Free Generations
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight">Schema markup generator questions</h2>
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
