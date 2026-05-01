import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Homepage Title Generator",
  description:
    "Generate homepage SEO titles, meta descriptions, social previews, hero headlines, and CTA copy for founder-led websites and ecommerce storefronts.",
  alternates: {
    canonical: "https://seocopy.vercel.app/homepage-title-generator",
  },
  keywords: [
    "homepage title generator",
    "homepage SEO title generator",
    "website homepage title generator",
    "AI homepage headline generator",
    "homepage meta title generator",
    "homepage copy generator",
  ],
  openGraph: {
    title: "Homepage Title Generator | SEOCopy",
    description:
      "Turn a rough offer into homepage title tags, meta descriptions, hero headline options, social previews, and CTA copy that fit buyer intent.",
    url: "https://seocopy.vercel.app/homepage-title-generator",
    type: "website",
  },
};

const titleFrameworks = [
  {
    label: "Outcome-led homepage",
    example: "AI SEO Copy That Turns Product Notes Into Publishable Pages",
    body: "Lead with the measurable result your audience wants, then make the category clear enough for searchers and first-time visitors.",
  },
  {
    label: "Audience + use case",
    example: "SEO Copy Generator for Shopify Merchants and Founder-Led Teams",
    body: "Name the buyer segment when your homepage needs to qualify visitors quickly and rank for a specific use-case query.",
  },
  {
    label: "Problem-aware title",
    example: "Stop Rewriting Homepage Copy From Scratch",
    body: "Use the frustration that sends buyers searching, then connect it to a concrete workflow, product category, or promise.",
  },
];

const outputs = [
  "Primary homepage title tag tuned for search snippets and brand clarity",
  "Three alternate homepage title angles for outcome, audience, and problem-aware positioning",
  "Meta description that sells the click without stuffing keywords",
  "Open Graph title and description for social sharing and launch posts",
  "Hero headline, subheadline, and CTA variants that match the SEO promise",
];

const faqs = [
  {
    question: "What is a homepage title generator?",
    answer:
      "A homepage title generator creates SEO title tags and page-title angles for your main website landing page. SEOCopy also generates the matching meta description, social preview, hero headline, subheadline, and CTA copy so the whole homepage tells one clear story.",
  },
  {
    question: "How long should a homepage SEO title be?",
    answer:
      "Most homepage SEO titles work best when they stay concise enough for search results, usually around 50 to 60 characters before the brand suffix. SEOCopy gives you title options that prioritize clarity, buyer intent, and click appeal over mechanical keyword stuffing.",
  },
  {
    question: "Can I use this for a SaaS homepage or Shopify storefront?",
    answer:
      "Yes. Paste a homepage URL or describe the product, target audience, differentiator, and primary keyword. SEOCopy returns homepage title options and connected conversion copy for SaaS sites, ecommerce stores, service businesses, and founder-led launches.",
  },
  {
    question: "Does SEOCopy only generate titles?",
    answer:
      "No. The homepage title generator also writes meta descriptions, Open Graph copy, hero headline variants, subheadlines, and CTAs so the snippet and on-page message stay aligned.",
  },
];

export default function HomepageTitleGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(224,242,254,0.88))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(14,116,144,0.54))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Homepage Title Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate homepage SEO titles that make your offer obvious fast.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Describe your product, audience, and differentiator. SEOCopy turns that brief into homepage title tags, meta descriptions, social previews, and hero copy that connect search intent to conversion.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=homepage-title-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate Homepage Titles
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
              Homepage output checklist
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
            Homepage title playbook
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Choose the title angle that matches how buyers discover your homepage.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {titleFrameworks.map((item) => (
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
            From snippet to hero section
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Keep your homepage SEO title, meta description, and hero copy pointed at the same promise.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            SEOCopy helps you avoid the common mismatch where the search result promises one thing and the homepage hero says another. Generate the title, snippet, social preview, and CTA system together.
          </p>
          <Link
            href="/generate?source=homepage-title-generator-cta"
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
