import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sales Email Generator",
  description:
    "Generate sales emails, demo follow-up emails, proposal follow-up copy, objection-handling CTAs, FAQs, and SEO snippets from one offer or pipeline brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/sales-email-generator",
  },
  keywords: [
    "sales email generator",
    "sales emails",
    "demo follow-up emails",
    "proposal follow-up copy",
    "objection handling email",
    "sales follow-up email",
    "B2B sales email copy",
  ],
  openGraph: {
    title: "Sales Email Generator | SEOCopy",
    description:
      "Turn a lead, demo, proposal, or renewal moment into sales emails, follow-up copy, objection-handling CTAs, subject lines, and FAQ-backed snippets.",
    url: "https://seocopy.vercel.app/sales-email-generator",
    type: "website",
  },
};

const salesMoments = [
  {
    label: "Demo follow-up emails",
    body: "Recap the pain, promised outcome, proof points, next step, and reply-worthy subject line after a sales call or product demo.",
  },
  {
    label: "Proposal follow-up copy",
    body: "Turn pricing, scope, timeline, and decision criteria into concise follow-ups that keep a deal moving without sounding pushy.",
  },
  {
    label: "Objection-handling CTAs",
    body: "Answer budget, timing, trust, feature, migration, and approval concerns with clear call-to-action options for the next conversion step.",
  },
];

const outputs = [
  "Sales emails for warm leads, demo requests, proposals, trials, renewals, agencies, SaaS teams, consultants, and ecommerce services",
  "Demo follow-up emails with subject lines, summary bullets, proof, unanswered questions, and a single next-step CTA",
  "Proposal follow-up copy that reinforces value, handles silence, restates scope, and asks for a decision or meeting",
  "Objection-handling CTAs for budget, timing, stakeholder approval, implementation, migration, and trust barriers",
  "Tone variants for consultative, concise, founder-led, enterprise, friendly, premium, and urgency-aware sales follow-up campaigns",
];

const faqs = [
  {
    question: "What is a sales email generator?",
    answer:
      "A sales email generator turns a lead, demo, proposal, trial, or renewal brief into sales emails, subject lines, demo follow-up emails, proposal follow-up copy, objection-handling CTAs, and SEO-friendly page snippets.",
  },
  {
    question: "Can I use this for demo follow-up emails?",
    answer:
      "Yes. SEOCopy can create demo follow-up emails that recap the buyer's pain, summarize the product fit, include proof points, answer open questions, and point to one clear next step.",
  },
  {
    question: "How is this different from the cold email generator?",
    answer:
      "The cold email generator focuses on outbound prospecting to people who may not know you yet. This sales email generator focuses on warm pipeline moments like demo follow-ups, proposal follow-ups, trials, renewals, and objection-handling CTAs after there is already buyer intent.",
  },
  {
    question: "How many sales email generations are free?",
    answer:
      "You can try two free generations with no signup. After that, buy one generation for $5 or use the $19/month plan for ongoing SEO, landing page, and revenue copy.",
  },
];

export default function SalesEmailGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,253,245,0.92))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(5,150,105,0.32))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-800 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-200">
              Sales Email Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Send sales follow-ups that move warm leads forward.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Paste the lead source, offer, buyer pain, deal stage, proof, and next step. SEOCopy creates sales emails, demo follow-up emails, proposal follow-up copy, objection-handling CTAs, FAQs, and SEO snippets.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=sales-email-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-emerald-300 dark:text-slate-950 dark:hover:bg-emerald-200"
              >
                Generate Sales Email
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
              Sales email output checklist
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
            Turn pipeline intent into replies
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Create sales copy for demo requests, proposal reviews, trial nudges, renewals, and stalled deals.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {salesMoments.map((item) => (
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
            Revenue-focused follow-up copy
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Keep qualified buyers from going quiet after the first conversation.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            SEOCopy helps founders, agencies, and sales-led teams turn warm intent into concise follow-ups, proof-led replies, objection reducers, and next-step CTAs so active opportunities do not stall in the inbox.
          </p>
          <Link
            href="/generate?source=sales-email-generator-cta"
            className="mt-8 inline-flex rounded-full bg-emerald-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-200"
          >
            Try Two Free Generations
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight">Sales email questions</h2>
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
