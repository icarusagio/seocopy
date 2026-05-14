import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Email Sequence Generator",
  description:
    "Generate email sequence copy for welcome flows, product launches, sales nurture, abandoned-cart reminders, follow-ups, FAQs, and conversion CTAs from one campaign brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/email-sequence-generator",
  },
  keywords: [
    "email sequence generator",
    "email nurture sequence",
    "welcome email sequence",
    "sales email sequence",
    "product launch email sequence",
    "email automation copy",
  ],
  openGraph: {
    title: "Email Sequence Generator | SEOCopy",
    description:
      "Turn one campaign goal into a multi-email welcome, launch, nurture, follow-up, or retention sequence with subject lines, preview text, FAQs, and CTAs.",
    url: "https://seocopy.vercel.app/email-sequence-generator",
    type: "website",
  },
};

const sequenceTypes = [
  {
    label: "Welcome flows",
    body: "Introduce the promise, segment the audience, explain the value, and move new subscribers toward the first conversion with clear next steps.",
  },
  {
    label: "Launch sequences",
    body: "Package teaser, announcement, proof, objection-handling, and last-call emails so product updates and offers get a complete campaign arc.",
  },
  {
    label: "Nurture and follow-up",
    body: "Create sales nurture, trial activation, webinar follow-up, abandoned-cart, and winback messages that keep prospects moving after the first touch.",
  },
];

const outputs = [
  "Email sequence copy for welcome flows, product launches, sales nurture, abandoned-cart reminders, and follow-up campaigns",
  "Subject lines, preview text, body copy, proof snippets, objection reducers, and CTA variants for every email in the sequence",
  "Sequence strategy notes that clarify timing, audience intent, offer fit, and conversion goals before copy is drafted",
  "Landing-page snippets and SEO metadata so each email sequence stays aligned with the destination page",
  "FAQ answers that explain free generations, pricing, sequence length, and campaign-fit before visitors start writing",
];

const faqs = [
  {
    question: "What is an email sequence generator?",
    answer:
      "An email sequence generator turns a campaign brief into a connected set of emails for welcome flows, launches, nurture, follow-ups, abandoned-cart recovery, or retention campaigns, including subject lines, preview text, body copy, and CTAs.",
  },
  {
    question: "Can I use this for welcome and nurture sequences?",
    answer:
      "Yes. SEOCopy can draft welcome sequences, lifecycle nurture campaigns, trial activation emails, webinar follow-ups, product launch sequences, and sales-assist follow-up flows from one audience, offer, and goal.",
  },
  {
    question: "How is this different from the AI email writer generator?",
    answer:
      "The AI email writer page covers individual sales, launch, nurture, and follow-up email drafts. This email sequence generator focuses on connected multi-email flows with timing, message progression, and CTA consistency across the full campaign.",
  },
  {
    question: "How many email sequence generations are free?",
    answer:
      "You can try two free generations with no signup. After that, buy one generation for $5 or use the $19/month plan for ongoing SEO, landing page, and campaign copy.",
  },
];

export default function EmailSequenceGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,254,255,0.92))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(14,116,144,0.34))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Email Sequence Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Turn one campaign brief into a complete email sequence.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Paste the audience, offer, proof, lifecycle moment, and desired next step. SEOCopy creates email sequence copy for welcome flows, product launches, sales nurture, abandoned-cart reminders, follow-ups, FAQs, and conversion CTAs.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=email-sequence-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate Email Sequence
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
              Sequence output checklist
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
            From one-off email to full campaign flow
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Build connected emails for acquisition, activation, retention, and follow-up moments.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {sequenceTypes.map((item) => (
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
            Ship lifecycle campaigns faster
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Keep every email pointed at the same offer, proof, and conversion goal.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            SEOCopy helps founders, Shopify merchants, SaaS teams, agencies, and marketers move from scattered campaign notes to a clear sequence plan, usable email drafts, CTA copy, landing snippets, and FAQ content without starting from a blank page.
          </p>
          <Link
            href="/generate?source=email-sequence-generator-cta"
            className="mt-8 inline-flex rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            Try Two Free Generations
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight">Email sequence questions</h2>
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
