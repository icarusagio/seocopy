import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Amazon Bullet Point Generator",
  description:
    "Generate Amazon bullet points, feature bullets, benefit-led listing bullets, marketplace SEO snippets, FAQs, and conversion CTAs from one product brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/amazon-bullet-point-generator",
  },
  keywords: [
    "Amazon bullet point generator",
    "Amazon listing bullet generator",
    "Amazon feature bullets",
    "marketplace SEO copy",
    "benefit-led listing bullets",
    "Amazon product copy generator",
  ],
  openGraph: {
    title: "Amazon Bullet Point Generator | SEOCopy",
    description:
      "Turn raw product specs into Amazon bullet points, marketplace SEO angles, benefit-led listing bullets, FAQs, and conversion copy.",
    url: "https://seocopy.vercel.app/amazon-bullet-point-generator",
    type: "website",
  },
};

const bulletAngles = [
  {
    label: "Search-led first bullet",
    body: "Open with the core keyword, buyer use case, and strongest outcome so Amazon shoppers and marketplace search both understand the product fast.",
  },
  {
    label: "Feature-to-benefit rewrite",
    body: "Translate specs, materials, dimensions, ingredients, or compatibility notes into benefit-led listing bullets that answer purchase objections.",
  },
  {
    label: "Conversion support copy",
    body: "Draft marketplace SEO snippets, FAQ answers, comparison angles, and CTA lines that can support A+ content, ads, or product-page tests.",
  },
];

const outputs = [
  "Amazon bullet points organized around search intent, benefits, proof, and use cases",
  "Feature bullets rewritten as benefit-led listing bullets for marketplace shoppers",
  "Marketplace SEO title and keyword angles to support Amazon listing discoverability",
  "Objection-handling FAQ answers for sizing, compatibility, materials, setup, or shipping",
  "CTA variants, A+ content section prompts, and ad copy hooks for product launches",
];

const faqs = [
  {
    question: "What is an Amazon bullet point generator?",
    answer:
      "An Amazon bullet point generator turns product specs, target keywords, proof points, and buyer objections into Amazon bullet points, feature bullets, marketplace SEO snippets, FAQs, and benefit-led listing bullets.",
  },
  {
    question: "How is this different from a general product bullet generator?",
    answer:
      "This page is focused on Amazon listing structure: keyword-aware bullets, shopper objections, marketplace SEO language, A+ content prompts, and launch copy that fits Amazon-style product detail pages.",
  },
  {
    question: "What should I paste into SEOCopy?",
    answer:
      "Paste the product name, category, target shopper, primary keywords, top features, proof points, dimensions or compatibility notes, objections, and any tone requirements for the listing.",
  },
  {
    question: "Can I try it before paying?",
    answer:
      "Yes. SEOCopy includes two free generations. After that, buy one generation for $5 or use the $19/month plan for ongoing Amazon, Shopify, ecommerce, landing page, and SEO copy.",
  },
];

export default function AmazonBulletPointGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(240,249,255,0.92))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(14,116,144,0.38))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Amazon Bullet Point Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Write Amazon bullet points that make product benefits obvious before shoppers scroll away.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Paste your product specs, target keywords, objections, and proof points. SEOCopy turns them into feature bullets, benefit-led listing bullets, marketplace SEO snippets, FAQs, A+ content prompts, and conversion CTAs.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=amazon-bullet-point-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate Amazon Bullet Points
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
              Marketplace listing output
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
            Amazon listing angles
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Package specs into keyword-aware bullets, shopper benefits, and objection reducers.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {bulletAngles.map((item) => (
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
            From specs to shopper-ready bullets
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Turn raw product details into Amazon-ready copy without starting from a blank listing.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            Use SEOCopy to prepare Amazon launch bullets, refresh stale product detail pages, test benefit order, or create supporting snippets for A+ content and marketplace ads.
          </p>
          <Link
            href="/generate?source=amazon-bullet-point-generator-cta"
            className="mt-8 inline-flex rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            Try Two Free Generations
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight">Amazon bullet point generator questions</h2>
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
