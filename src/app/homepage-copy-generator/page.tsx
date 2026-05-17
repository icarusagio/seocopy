import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Homepage Copy Generator",
  description:
    "Generate homepage copy for hero section messaging, above-the-fold CTAs, proof sections, feature blocks, FAQs, and conversion-focused home page structure from one offer brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/homepage-copy-generator",
  },
  keywords: [
    "homepage copy generator",
    "homepage copy",
    "website homepage copy",
    "hero section messaging",
    "above the fold CTA copy",
    "homepage section copy",
  ],
  openGraph: {
    title: "Homepage Copy Generator | SEOCopy",
    description:
      "Turn one offer brief into homepage copy, hero section messaging, proof sections, feature blocks, FAQs, and above-the-fold CTAs.",
    url: "https://seocopy.vercel.app/homepage-copy-generator",
    type: "website",
  },
};

const homepageSections = [
  {
    label: "Hero section messaging",
    body: "Draft homepage headlines, subheadlines, proof chips, and above-the-fold CTAs that make the product promise obvious in the first screen.",
  },
  {
    label: "Homepage section copy",
    body: "Map benefits, features, use cases, testimonials, objection reducers, and conversion prompts into sections visitors can scan quickly.",
  },
  {
    label: "SEO and conversion support",
    body: "Generate metadata, social preview copy, FAQPage answers, internal-link angles, and CTA variants aligned to the homepage offer.",
  },
];

const outputs = [
  "Homepage headline, subheadline, and positioning options",
  "Hero section messaging with above-the-fold CTAs",
  "Homepage section copy for benefits, features, proof, and objections",
  "FAQPage answers, SEO snippets, and social preview copy",
  "Final conversion CTA variants for trials, demos, purchases, or waitlists",
];

const faqs = [
  {
    question: "What is a homepage copy generator?",
    answer:
      "A homepage copy generator turns a product, service, or offer brief into homepage copy: hero messaging, section copy, benefits, proof blocks, FAQs, metadata, and CTA variants for the main website page.",
  },
  {
    question: "Can SEOCopy write above-the-fold CTAs?",
    answer:
      "Yes. SEOCopy can draft above-the-fold CTAs, supporting microcopy, proof chips, risk reducers, and alternate button labels that match the visitor action you want.",
  },
  {
    question: "How is this different from a headline generator?",
    answer:
      "A headline generator focuses on isolated headline options. The homepage copy generator covers the broader home page: hero section messaging, homepage section copy, proof, objections, FAQs, SEO metadata, and conversion paths.",
  },
  {
    question: "How many homepage copy drafts can I generate for free?",
    answer:
      "You can try two free generations without creating an account. After that, buy a single generation for $5 or use the $19/month plan for ongoing SEO and conversion copy production.",
  },
];

export default function HomepageCopyGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,253,245,0.86))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(8,47,73,0.72))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Homepage Copy Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate homepage copy that explains your offer and moves visitors to act.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Paste a product, service, SaaS, Shopify store, or agency offer brief. SEOCopy returns homepage copy for hero section messaging, homepage section copy, proof blocks, FAQs, SEO snippets, and above-the-fold CTAs built for conversion.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=homepage-copy-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate Homepage Copy
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
            Homepage conversion copy
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Build a homepage message map for SaaS, ecommerce, service businesses, and launch pages.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {homepageSections.map((item) => (
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
            Clarify the main offer
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Turn scattered product notes into a homepage visitors can understand, trust, and act on.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            SEOCopy keeps homepage copy tied to the next revenue step: starting a trial, booking a demo, joining a waitlist, buying a product, or clicking into the generator flow.
          </p>
          <Link
            href="/generate?source=homepage-copy-generator-cta"
            className="mt-8 inline-flex rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            Try Two Free Generations
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight">Homepage copy generator questions</h2>
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
