import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Small Business SEO Copy Generator",
  description:
    "Generate small business SEO copy, title tags, meta descriptions, local landing page sections, service blurbs, and CTA variants from a rough offer or website notes.",
  alternates: {
    canonical: "https://seocopy.vercel.app/small-business-seo-copy-generator",
  },
  keywords: [
    "small business SEO copy generator",
    "AI copy generator for small business",
    "small business meta description generator",
    "small business website copy generator",
    "local business SEO copy generator",
  ],
  openGraph: {
    title: "Small Business SEO Copy Generator | SEOCopy",
    description:
      "Turn small business offers, services, proof points, and customer notes into search-ready website copy, metadata, FAQs, and CTA variants.",
    url: "https://seocopy.vercel.app/small-business-seo-copy-generator",
    type: "website",
  },
};

const benefits = [
  {
    title: "Turn owner notes into publishable website copy",
    body: "Convert rough service details, target customers, locations, and proof points into clear page sections that explain what the business does and why visitors should act.",
  },
  {
    title: "Refresh local pages before campaigns",
    body: "Generate SEO titles, meta descriptions, social previews, and CTA variants before launching ads, directory updates, referral campaigns, or seasonal promotions.",
  },
  {
    title: "Make small business pages easier to trust",
    body: "Create FAQ ideas, benefit bullets, objection-handling copy, and conversion prompts that help prospects compare providers and take the next step.",
  },
];

const outputs = [
  "SEO title tags and meta descriptions for small business home, service, and location pages",
  "Hero headlines, subheadlines, proof bullets, and CTA variants tuned for customer action",
  "Service blurbs, about-page angles, and local relevance copy from rough business notes",
  "FAQ prompts that answer common buyer objections before visitors call, book, or request a quote",
  "Social preview copy and campaign snippets for launches, promotions, and directory listings",
];

const faqs = [
  {
    question: "What is a small business SEO copy generator?",
    answer:
      "A small business SEO copy generator turns rough notes about an offer, service area, audience, and proof points into search-ready website copy, title tags, meta descriptions, FAQs, and call-to-action variants.",
  },
  {
    question: "Can SEOCopy write copy for service businesses and local companies?",
    answer:
      "Yes. SEOCopy can draft small business home page copy, service page sections, local SEO metadata, FAQ ideas, social previews, and CTA copy from a short business brief.",
  },
  {
    question: "When should a small business refresh SEO copy?",
    answer:
      "Refresh SEO copy before launching a new service, updating a website, running ads, changing offers, improving directory listings, or when search impressions are not turning into enough calls, bookings, or quote requests.",
  },
];

export default function SmallBusinessSeoCopyGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(224,242,254,0.9))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(14,116,144,0.48))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Small Business SEO Copy Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate small business SEO copy that turns local interest into action.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Turn service notes, customer pain points, proof, locations, and offers into SEO metadata, website sections, FAQs, social previews, and CTA variants for small business pages.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=small-business-seo-copy-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate Small Business Copy
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
              Small business output
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
            Why use the small business SEO copy generator
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            A faster path from a rough offer to search-ready small business pages.
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
