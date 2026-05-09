import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SEO Friendly URL Generator",
  description:
    "Generate SEO-friendly URLs, slug ideas, title tags, meta descriptions, and launch copy for product, blog, and landing pages.",
  alternates: {
    canonical: "https://seocopy.vercel.app/seo-friendly-url-generator",
  },
  keywords: [
    "SEO friendly URL generator",
    "URL slug generator",
    "SEO slug generator",
    "AI slug generator",
    "landing page URL ideas",
    "blog URL slug generator",
  ],
  openGraph: {
    title: "SEO Friendly URL Generator | SEOCopy",
    description:
      "Turn rough page topics, product notes, or campaign briefs into concise SEO-friendly URLs, metadata, social previews, and CTA variants.",
    url: "https://seocopy.vercel.app/seo-friendly-url-generator",
    type: "website",
  },
};

const slugPatterns = [
  {
    label: "Keyword-clear slugs",
    example: "/shopify-abandoned-cart-email-template",
    body: "Generate concise URLs that put the primary query, product type, or use case close to the front without keyword stuffing.",
  },
  {
    label: "Conversion page slugs",
    example: "/inventory-alerts-for-shopify",
    body: "Create landing-page URL options that communicate who the page is for and why buyers should click from search or ads.",
  },
  {
    label: "Content hub slugs",
    example: "/guides/product-page-seo-checklist",
    body: "Plan readable blog, guide, and resource URLs with matching title tags, meta descriptions, and internal-link anchor ideas.",
  },
];

const outputs = [
  "SEO-friendly URL slug shortlist with primary keyword rationale",
  "Matching SEO title tag and meta description for the chosen URL",
  "Open Graph title, social preview copy, and share snippet",
  "Landing-page headline, CTA, and internal-link anchor variants",
  "Cleanup notes for shortening, redirect planning, and avoiding duplicate slugs",
];

const faqs = [
  {
    question: "What is an SEO friendly URL generator?",
    answer:
      "An SEO friendly URL generator turns a page topic, keyword, product brief, or campaign idea into readable URL slug options that are short, descriptive, and aligned with the search intent of the page.",
  },
  {
    question: "Can SEOCopy generate metadata with the URL slug?",
    answer:
      "Yes. SEOCopy can pair each URL slug idea with SEO titles, meta descriptions, social preview copy, page headlines, CTAs, and internal-link anchors so the URL decision fits the whole page launch.",
  },
  {
    question: "Should URLs include exact-match keywords?",
    answer:
      "Use clear keywords when they help people understand the page, but keep slugs concise and natural. SEOCopy helps balance keyword clarity with readability and conversion context.",
  },
  {
    question: "How many SEO URL ideas can I generate for free?",
    answer:
      "You can try two free generations without creating an account. After that, buy a single generation for $5 or use the $19/month plan for ongoing SEO copy and page launch work.",
  },
];

export default function SeoFriendlyUrlGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,253,245,0.86))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(6,78,59,0.62))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              SEO Friendly URL Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate SEO-friendly URLs that are readable, keyword-clear, and launch-ready.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Paste a page topic, product brief, target keyword, or campaign angle. SEOCopy creates URL slug ideas with matching metadata, social previews, page headlines, and CTAs so your next page can ship with a clean search footprint.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=seo-friendly-url-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate SEO Friendly URLs
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
              URL launch output checklist
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
            SEO URL slug playbook
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Create URL options for product pages, landing pages, guides, and campaign tests.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {slugPatterns.map((item) => (
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
            Faster SEO page planning
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Go from rough topic to URL slug, metadata, social preview, and CTA in one pass.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            SEOCopy keeps URL planning tied to revenue pages. Each generation can produce slugs, snippets, and conversion copy that make new search pages easier to publish and promote.
          </p>
          <Link
            href="/generate?source=seo-friendly-url-generator-cta"
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
