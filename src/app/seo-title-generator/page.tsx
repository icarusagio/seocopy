import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SEO Title Generator",
  description:
    "Generate search-friendly SEO title tags, meta descriptions, Open Graph copy, and landing page headline variants from a URL or short product brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/seo-title-generator",
  },
  keywords: [
    "SEO title generator",
    "AI SEO title generator",
    "title tag generator",
    "meta title generator",
    "SEO headline generator",
    "page title generator",
  ],
  openGraph: {
    title: "SEO Title Generator | SEOCopy",
    description:
      "Write title tags that communicate intent, include the right keyword, and earn more qualified clicks from search results.",
    url: "https://seocopy.vercel.app/seo-title-generator",
    type: "website",
  },
};

const titlePatterns = [
  {
    label: "Commercial intent",
    example: "Organic Cotton Baby Pajamas | Soft, Safe Sleepwear",
    body: "Lead with the exact product category, then add a buyer-ready differentiator that makes the result worth opening.",
  },
  {
    label: "Comparison pages",
    example: "Best Inventory Apps for Shopify Stores in 2026",
    body: "Frame listicles, comparison pages, and alternative pages around the phrase buyers already search before choosing.",
  },
  {
    label: "Landing pages",
    example: "Launch Faster With AI Landing Page Copy | SEOCopy",
    body: "Pair the outcome with the product name so searchers understand both the promise and the source before clicking.",
  },
];

const outputs = [
  "Primary SEO title tag under common pixel-length constraints",
  "Three alternate title angles for testing search intent",
  "Matching meta description for the selected title",
  "Open Graph title and description for social previews",
  "Hero headline, subheadline, and CTA variants",
];

const faqs = [
  {
    question: "What is an SEO title tag?",
    answer:
      "An SEO title tag is the page title search engines can show in search results. Strong title tags make the page topic obvious, include a natural keyword, and give the searcher a reason to click.",
  },
  {
    question: "How long should an SEO title be?",
    answer:
      "A practical target is often around 50 to 60 characters, but Google may rewrite titles based on query intent and available space. SEOCopy keeps title ideas concise and benefit-led so they are easier to use in real snippets.",
  },
  {
    question: "Can SEOCopy generate SEO titles from a URL?",
    answer:
      "Yes. Paste a URL or describe the page, product, audience, and keyword. SEOCopy returns SEO title options plus matching descriptions, OG copy, and landing page copy variants.",
  },
  {
    question: "How many free SEO titles can I generate?",
    answer:
      "You can try two free generations without creating an account. After that, buy a single generation for $5 or use the $19/month plan for ongoing SEO copy production.",
  },
];

export default function SeoTitleGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(224,242,254,0.86))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(12,74,110,0.65))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              SEO Title Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Write title tags that match intent and earn the click.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Paste a page URL or product brief. SEOCopy generates concise SEO titles, matching meta descriptions, Open Graph copy, and landing page headline variants so you can publish faster.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=seo-title-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate SEO Titles
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
              Output checklist
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
            Title tag playbook
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Generate title angles for the pages most likely to turn searchers into buyers.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {titlePatterns.map((item) => (
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
            Faster publishing workflow
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Go from keyword idea to title, snippet, social preview, and hero copy in one pass.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            SEOCopy keeps title generation connected to the rest of the page. That means fewer mismatched snippets, fewer blank-page rewrites, and a clearer path from search result to conversion.
          </p>
          <Link
            href="/generate?source=seo-title-generator-cta"
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
