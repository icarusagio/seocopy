import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Landing Page A/B Test Generator",
  description:
    "Generate landing page A/B tests, variant hypotheses, experiment-ready copy blocks, conversion test ideas, FAQs, and CTA directions from one offer brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/landing-page-ab-test-generator",
  },
  keywords: [
    "landing page A/B test generator",
    "landing page A/B tests",
    "A/B test ideas",
    "variant hypotheses",
    "experiment-ready copy blocks",
    "conversion test ideas",
    "landing page optimization",
    "copy test generator",
  ],
  openGraph: {
    title: "Landing Page A/B Test Generator | SEOCopy",
    description:
      "Turn one landing page brief into A/B test hypotheses, variant copy blocks, CTA experiments, proof-section tests, and FAQ-backed conversion ideas.",
    url: "https://seocopy.vercel.app/landing-page-ab-test-generator",
    type: "website",
  },
};

const testAngles = [
  {
    label: "Variant hypotheses",
    body: "Turn the current offer, audience, objection, and traffic source into testable hypotheses for headlines, CTAs, proof placement, and section order.",
  },
  {
    label: "Experiment-ready copy blocks",
    body: "Generate challenger hero copy, benefit stacks, trust snippets, FAQ answers, social proof framing, and CTA microcopy that can be pasted into a page builder.",
  },
  {
    label: "Conversion test ideas",
    body: "Prioritize tests that can move trials, installs, demos, checkout starts, lead magnets, bookings, or purchases instead of vague cosmetic changes.",
  },
];

const outputs = [
  "Landing page A/B tests for SaaS trials, Shopify apps, ecommerce PDPs, agency lead pages, creator launches, and waitlists",
  "Variant hypotheses that explain what each test changes, which objection it targets, and what conversion signal to watch",
  "Experiment-ready copy blocks for hero sections, CTAs, proof modules, pricing nudges, FAQ answers, and final conversion panels",
  "Conversion test ideas for above-the-fold clarity, offer framing, urgency, guarantee language, proof order, and form friction",
  "CTA and measurement prompts that connect each variation to signups, purchases, demo bookings, installs, or qualified leads",
];

const faqs = [
  {
    question: "What is a landing page A/B test generator?",
    answer:
      "A landing page A/B test generator turns an offer brief into landing page A/B tests, variant hypotheses, experiment-ready copy blocks, conversion test ideas, and CTA directions so teams can improve a page with focused experiments.",
  },
  {
    question: "How is this different from a landing page copy generator?",
    answer:
      "A landing page copy generator creates the baseline page copy. This tool focuses on challenger variations: what to test, why the variation could win, which page block to change, and what conversion outcome to measure.",
  },
  {
    question: "Can I use these ideas without an analytics team?",
    answer:
      "Yes. The generated copy blocks and hypotheses are written for founders, marketers, and no-code builders who need practical tests for headline clarity, CTA intent, proof strength, FAQ coverage, and checkout or signup friction.",
  },
  {
    question: "How many landing page A/B test generations are free?",
    answer:
      "You can try two free generations with no signup. After that, buy one generation for $5 or use the $19/month plan for ongoing SEO, landing page, product, email, and conversion copy.",
  },
];

export default function LandingPageAbTestGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,253,245,0.92))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(5,150,105,0.32))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-800 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-200">
              Landing Page A/B Test Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Create landing page A/B tests that target the copy, proof, and CTA choices most likely to move revenue.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Paste your offer, audience, page goal, current messaging, traffic source, objections, and proof. SEOCopy turns it into landing page A/B tests, variant hypotheses, experiment-ready copy blocks, conversion test ideas, and CTA directions from one brief.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=landing-page-ab-test-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-emerald-300 dark:text-slate-950 dark:hover:bg-emerald-200"
              >
                Generate Landing Page A/B Tests
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
              A/B test output checklist
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
            Conversion experiment planning
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Give founders, marketers, and CRO teams a practical test queue before another page refresh becomes guesswork.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testAngles.map((item) => (
            <article key={item.label} className="rounded-[1.5rem] border border-black/10 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700 dark:text-emerald-300">
                {item.label}
              </p>
              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-10">
        <div className="rounded-[2rem] border border-black/10 bg-slate-950 p-8 text-white shadow-[0_24px_80px_rgba(15,23,42,0.14)] dark:border-white/10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-200">
            From copy brief to test backlog
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Stop shipping random tweaks. Ship challenger copy with a reason to win.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            SEOCopy helps teams turn messy page feedback into a focused A/B testing plan: which message to challenge, what proof to move, which objection to answer sooner, and how each CTA variation should affect revenue-driving actions.
          </p>
          <Link
            href="/generate?source=landing-page-ab-test-generator-cta"
            className="mt-8 inline-flex rounded-full bg-emerald-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-200"
          >
            Try Two Free Generations
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight">Landing page A/B test questions</h2>
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
