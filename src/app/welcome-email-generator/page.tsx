import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Welcome Email Generator",
  description:
    "Generate welcome emails, onboarding email sequences, first-purchase nurture copy, subscriber activation CTAs, FAQs, and SEO snippets from one brand or offer brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/welcome-email-generator",
  },
  keywords: [
    "welcome email generator",
    "welcome emails",
    "onboarding email sequences",
    "subscriber activation email",
    "first purchase nurture email",
    "customer onboarding copy",
  ],
  openGraph: {
    title: "Welcome Email Generator | SEOCopy",
    description:
      "Turn a signup, purchase, trial, or lead magnet into welcome emails, onboarding email sequences, first-purchase nurture copy, and subscriber activation CTAs.",
    url: "https://seocopy.vercel.app/welcome-email-generator",
    type: "website",
  },
};

const sequenceBlocks = [
  {
    label: "Welcome emails",
    body: "Draft the first hello, subject line, preview text, brand promise, next-step CTA, and expectation-setting copy from one signup or purchase moment.",
  },
  {
    label: "Onboarding email sequences",
    body: "Map day-one, education, proof, objection-handling, and activation nudges so new subscribers know exactly what to do next.",
  },
  {
    label: "First-purchase nurture copy",
    body: "Create customer-friendly follow-ups for first orders, trials, lead magnets, Shopify purchases, demos, and community joins.",
  },
];

const outputs = [
  "Welcome emails for newsletter signups, Shopify first purchases, SaaS trials, lead magnets, webinars, and product launches",
  "Onboarding email sequences with subject lines, preview text, education moments, proof blocks, and activation steps",
  "First-purchase nurture copy that thanks new customers, reinforces value, answers objections, and points to the next conversion",
  "Subscriber activation CTAs for booking a demo, using a feature, redeeming an offer, reading a guide, replying, or making a second purchase",
  "Tone variants for warm, premium, concise, founder-led, ecommerce, B2B, and community welcome campaigns",
];

const faqs = [
  {
    question: "What is a welcome email generator?",
    answer:
      "A welcome email generator turns a signup, first purchase, trial, lead magnet, or product launch brief into welcome emails, subject lines, preview text, onboarding email sequences, and subscriber activation CTAs.",
  },
  {
    question: "Can I use this for onboarding email sequences?",
    answer:
      "Yes. SEOCopy can create onboarding email sequences that introduce the brand, teach the next step, surface proof, handle objections, and drive activation without starting from a blank campaign builder.",
  },
  {
    question: "How is this different from the email sequence generator?",
    answer:
      "The email sequence generator covers broad campaign flows like launches, sales nurture, and abandoned-cart reminders. This welcome email generator focuses specifically on the first subscriber or customer moment, onboarding, first-purchase nurture copy, and activation CTAs.",
  },
  {
    question: "How many welcome email generations are free?",
    answer:
      "You can try two free generations with no signup. After that, buy one generation for $5 or use the $19/month plan for ongoing SEO, landing page, and lifecycle email copy.",
  },
];

export default function WelcomeEmailGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,253,245,0.92))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(5,150,105,0.32))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-800 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-200">
              Welcome Email Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Welcome subscribers with a clearer first message.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Paste the signup moment, offer, customer type, brand voice, and next action. SEOCopy creates welcome emails, onboarding email sequences, first-purchase nurture copy, subscriber activation CTAs, FAQs, and SEO snippets.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=welcome-email-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-emerald-300 dark:text-slate-950 dark:hover:bg-emerald-200"
              >
                Generate Welcome Email
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
              Welcome email output checklist
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
            Turn first impressions into activation
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Create welcome copy for subscribers, customers, leads, communities, trials, and launches.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {sequenceBlocks.map((item) => (
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
            Revenue-focused lifecycle copy
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Move new contacts from “nice to meet you” to the next revenue action.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            SEOCopy helps teams turn early intent into polished welcome messages, onboarding paths, proof-led follow-ups, offer reminders, and activation CTAs so subscriber and first-purchase momentum does not stall.
          </p>
          <Link
            href="/generate?source=welcome-email-generator-cta"
            className="mt-8 inline-flex rounded-full bg-emerald-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-200"
          >
            Try Two Free Generations
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight">Welcome email questions</h2>
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
