import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Trial Activation Email Generator",
  description:
    "Generate trial activation emails, onboarding nudges, usage prompts, upgrade CTAs, FAQ snippets, and landing page copy from one SaaS trial brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/trial-activation-email-generator",
  },
  keywords: [
    "trial activation email generator",
    "SaaS trial email generator",
    "free trial onboarding emails",
    "trial conversion emails",
    "product activation email copy",
    "upgrade email CTA generator",
  ],
  openGraph: {
    title: "Trial Activation Email Generator | SEOCopy",
    description:
      "Turn a SaaS trial brief into onboarding emails, activation nudges, feature prompts, upgrade CTAs, FAQs, and landing page snippets.",
    url: "https://seocopy.vercel.app/trial-activation-email-generator",
    type: "website",
  },
};

const activationMoments = [
  {
    label: "First-session activation",
    body: "Welcome new trial users, point them at the first value-producing action, and explain what success looks like before they drift.",
  },
  {
    label: "Feature discovery nudges",
    body: "Create short emails that connect unused features to outcomes, templates, proof points, and the next in-product click.",
  },
  {
    label: "Upgrade conversion",
    body: "Frame plan limits, remaining trial time, ROI proof, and low-friction upgrade CTAs without sounding like a generic sales blast.",
  },
];

const outputs = [
  "Trial activation email copy for onboarding, feature discovery, milestone reminders, and upgrade moments",
  "Subject lines, preview text, body copy, proof snippets, FAQ answers, and CTA variants for each trial stage",
  "Usage-based message angles that tie product actions to measurable outcomes and faster time-to-value",
  "Landing page snippets and SEO metadata for trial conversion resources, onboarding guides, and lifecycle campaign pages",
  "Pricing and upgrade reassurance that clarifies free trial value, paid-plan timing, and what users keep after upgrading",
];

const faqs = [
  {
    question: "What is a trial activation email generator?",
    answer:
      "A trial activation email generator turns a SaaS trial brief into onboarding, feature-discovery, usage-reminder, and upgrade emails that move new users toward a first valuable outcome and a paid plan.",
  },
  {
    question: "Can this help improve free trial conversion?",
    answer:
      "Yes. SEOCopy can draft emails that highlight the activation action, proof of value, plan limits, and upgrade CTAs so trial users understand why to return and when to buy.",
  },
  {
    question: "How is this different from the email sequence generator?",
    answer:
      "The email sequence generator covers broad welcome, launch, nurture, and retention campaigns. This page is tuned for SaaS trial lifecycle moments: first session, feature adoption, milestone reminders, and upgrade conversion.",
  },
  {
    question: "How many trial email generations are free?",
    answer:
      "You can try two free generations with no signup. After that, buy one generation for $5 or use the $19/month plan for ongoing SEO, landing page, and lifecycle email copy.",
  },
];

export default function TrialActivationEmailGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,254,255,0.92))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(14,116,144,0.34))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Trial Activation Email Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Turn trial signups into activated users and upgrade-ready buyers.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Paste your audience, activation event, product promise, proof, trial limit, and upgrade offer. SEOCopy creates trial activation emails, onboarding nudges, feature prompts, FAQ snippets, and conversion CTAs.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=trial-activation-email-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate Trial Emails
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
              Trial lifecycle output checklist
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
            From signup to paid intent
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Build lifecycle emails for the moments that decide whether a trial user returns.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {activationMoments.map((item) => (
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
            Convert trial interest into product usage
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Give every trial email a reason to click back into the product.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            SEOCopy helps SaaS founders, product marketers, lifecycle teams, agencies, and growth operators move from blank-message planning to trial activation email copy, upgrade prompts, landing snippets, and FAQ content tied to a real product outcome.
          </p>
          <Link
            href="/generate?source=trial-activation-email-generator-cta"
            className="mt-8 inline-flex rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            Try Two Free Generations
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight">Trial activation email questions</h2>
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
