import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SaaS Landing Page Copy Generator",
  description:
    "Generate SaaS landing page copy, SEO metadata, hero headlines, feature-benefit sections, objection handling, and CTA variants from a short product brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/saas-landing-page-copy-generator",
  },
  keywords: [
    "SaaS landing page copy generator",
    "AI SaaS copy generator",
    "SaaS homepage copy generator",
    "B2B landing page copy",
    "SaaS SEO copy",
    "startup landing page copy",
  ],
  openGraph: {
    title: "SaaS Landing Page Copy Generator | SEOCopy",
    description:
      "Turn a rough SaaS product brief into conversion-ready hero copy, feature messaging, SEO metadata, and CTA variants.",
    url: "https://seocopy.vercel.app/saas-landing-page-copy-generator",
    type: "website",
  },
};

const copyBlocks = [
  {
    label: "Above the fold",
    title: "Positioning-first hero copy",
    body: "Generate a crisp headline, subheadline, and primary CTA that explain the problem, buyer, and outcome without vague startup language.",
  },
  {
    label: "Search acquisition",
    title: "SEO title + meta description",
    body: "Pair your page promise with search snippets that target high-intent SaaS and B2B evaluation queries.",
  },
  {
    label: "Conversion proof",
    title: "Benefits, objections, and CTAs",
    body: "Create feature-benefit bullets, objection-handling copy, and CTA variants for demo, trial, and waitlist funnels.",
  },
];

const workflow = [
  "Describe the SaaS product, ICP, primary use case, and desired conversion action.",
  "Choose a tone that matches your market: founder-led, enterprise, technical, or product-led growth.",
  "Review hero copy, SEO metadata, benefit sections, social preview copy, and CTA options.",
  "Paste the strongest variants into your landing page builder, pitch deck, or launch checklist.",
];

const faqs = [
  {
    question: "What is a SaaS landing page copy generator?",
    answer:
      "A SaaS landing page copy generator turns a short software product brief into page-ready copy blocks: positioning, headlines, subheadlines, benefits, SEO metadata, Open Graph copy, and calls to action.",
  },
  {
    question: "Can SEOCopy help with B2B SaaS pages?",
    answer:
      "Yes. SEOCopy is useful for B2B SaaS homepages, feature pages, comparison pages, waitlists, and campaign landing pages that need clearer positioning and search snippets.",
  },
  {
    question: "Do I need an existing website URL?",
    answer:
      "No. You can paste an existing URL or start from a short product description, target customer, and conversion goal.",
  },
  {
    question: "How many free SaaS landing page generations do I get?",
    answer:
      "You can run two free generations without creating an account. After that, buy one more generation for $5 or use the $19/month plan for ongoing copy production.",
  },
];

export default function SaasLandingPageCopyGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,254,255,0.88))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(8,47,73,0.68))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              SaaS Landing Page Copy Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate SaaS landing page copy that explains the product and sells the next step.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy turns your SaaS positioning notes into hero copy, SEO metadata, feature-benefit sections, objection handling, and CTA variants for demos, trials, and waitlists.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=saas-landing-page-copy-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate SaaS Copy
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
              Launch workflow
            </p>
            <div className="mt-6 space-y-4">
              {workflow.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-2xl border border-slate-200 p-4 dark:border-white/10">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-sm font-bold text-cyan-800 dark:bg-cyan-300 dark:text-slate-950">
                    {index + 1}
                  </span>
                  <p className="font-medium">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-10">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-300">
            SaaS copy blocks included
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Build the page buyers read before they book a demo or start a trial.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {copyBlocks.map((item) => (
            <article key={item.label} className="rounded-[1.5rem] border border-black/10 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-700 dark:text-cyan-300">
                {item.label}
              </p>
              <h3 className="mt-4 text-2xl font-semibold">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-10">
        <div className="rounded-[2rem] border border-black/10 bg-slate-950 p-8 text-white shadow-[0_24px_80px_rgba(15,23,42,0.14)] dark:border-white/10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
            Built for acquisition pages
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Turn messy founder notes into a page that gives buyers enough clarity to convert.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            Use SEOCopy when your SaaS page needs a sharper promise, stronger search snippet, and CTA copy that matches the buying motion.
          </p>
          <Link
            href="/generate?source=saas-landing-page-copy-generator-cta"
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
