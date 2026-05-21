import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Churn Reduction Email Generator",
  description:
    "Generate churn reduction emails, cancellation-save messages, renewal-risk nudges, retention CTAs, FAQ snippets, and landing page copy from one customer-risk brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/churn-reduction-email-generator",
  },
  keywords: [
    "churn reduction email generator",
    "customer retention email generator",
    "cancellation save email copy",
    "renewal risk email generator",
    "SaaS retention email copy",
    "winback and churn prevention emails",
  ],
  openGraph: {
    title: "Churn Reduction Email Generator | SEOCopy",
    description:
      "Turn churn signals into retention emails, cancellation-save offers, renewal-risk nudges, CTA variants, FAQs, and landing page snippets.",
    url: "https://seocopy.vercel.app/churn-reduction-email-generator",
    type: "website",
  },
};

const churnMoments = [
  {
    label: "Cancellation-save replies",
    body: "Respond to downgrade or cancel intent with empathy, value reminders, targeted offers, and a next-step CTA that keeps the conversation open.",
  },
  {
    label: "Renewal-risk nudges",
    body: "Draft proactive emails for low usage, missing stakeholders, unresolved objections, and accounts that need proof before renewal.",
  },
  {
    label: "Retention campaign follow-up",
    body: "Turn churn reasons into segmented lifecycle emails, feature prompts, proof snippets, and upgrade or save-offer variants.",
  },
];

const outputs = [
  "Churn reduction emails for cancellation-save, renewal-risk, low-usage, downgrade, and reactivation moments",
  "Subject lines, preview text, empathy-led body copy, retention offers, objection reducers, and CTA variants",
  "Segment-aware message angles for SaaS trials, subscriptions, ecommerce replenishment, and service renewals",
  "Landing page snippets and SEO metadata for retention resources, cancellation alternatives, and customer success campaigns",
  "FAQ copy that explains plan value, pause options, support paths, and what customers keep when they stay",
];

const faqs = [
  {
    question: "What is a churn reduction email generator?",
    answer:
      "A churn reduction email generator turns customer-risk signals into retention emails, cancellation-save messages, renewal nudges, and CTA variants that help customers understand the value of staying.",
  },
  {
    question: "Can this help with cancellation-save campaigns?",
    answer:
      "Yes. SEOCopy can draft empathetic save emails with proof points, alternate plans, pause options, offer framing, FAQs, and next-step CTAs for customers who are close to cancelling.",
  },
  {
    question: "How is this different from a winback email generator?",
    answer:
      "Winback emails focus on customers who have already gone inactive or left. This page is tuned for churn prevention before cancellation: renewal risk, low product usage, downgrade objections, and save-offer conversations.",
  },
  {
    question: "How many churn reduction emails can I generate for free?",
    answer:
      "You can try two free generations with no signup. After that, buy one generation for $5 or use the $19/month plan for ongoing retention, SEO, landing page, and lifecycle email copy.",
  },
];

export default function ChurnReductionEmailGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,254,255,0.92))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(14,116,144,0.34))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Churn Reduction Email Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Turn churn signals into retention emails customers actually read.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Paste the customer segment, churn reason, product value, save offer, proof, and next best action. SEOCopy creates churn reduction emails, cancellation-save copy, renewal-risk nudges, retention CTAs, FAQs, and landing page snippets.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=churn-reduction-email-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate Churn Emails
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
              Retention output checklist
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
            From churn risk to save motion
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Write retention messages for the moments that decide whether customers stay.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {churnMoments.map((item) => (
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
            Keep revenue before it leaks
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Give every at-risk customer a useful reason to stay.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            SEOCopy helps SaaS founders, ecommerce operators, subscription brands, customer success teams, and agencies turn churn reasons into retention email copy, save-offer framing, renewal CTAs, and FAQ content tied to a real customer outcome.
          </p>
          <Link
            href="/generate?source=churn-reduction-email-generator-cta"
            className="mt-8 inline-flex rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            Try Two Free Generations
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight">Churn reduction email questions</h2>
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
