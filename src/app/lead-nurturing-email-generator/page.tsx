import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lead Nurturing Email Generator",
  description:
    "Generate lead nurturing emails, drip campaign copy, segment-aware follow-ups, objection reducers, FAQs, and conversion CTAs from one prospect brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/lead-nurturing-email-generator",
  },
  keywords: [
    "lead nurturing email generator",
    "lead nurturing emails",
    "drip campaign copy",
    "sales nurture email",
    "lead follow up email",
    "B2B nurture sequence",
  ],
  openGraph: {
    title: "Lead Nurturing Email Generator | SEOCopy",
    description:
      "Turn one prospect brief into lead nurturing emails, drip campaign copy, segment-aware follow-ups, objection reducers, FAQs, and conversion CTAs.",
    url: "https://seocopy.vercel.app/lead-nurturing-email-generator",
    type: "website",
  },
};

const nurtureSections = [
  {
    label: "Drip campaign copy",
    body: "Create awareness, consideration, proof, objection-handling, and conversion emails that move leads from first opt-in to booked call or purchase.",
  },
  {
    label: "Segment-aware follow-ups",
    body: "Generate nurture angles for cold leads, content subscribers, demo no-shows, trial users, webinar attendees, and ecommerce prospects.",
  },
  {
    label: "Conversion CTAs",
    body: "Turn education and proof into clear next steps with CTA variants for demos, trials, product pages, consultations, and limited offers.",
  },
];

const outputs = [
  "Lead nurture objective and buyer-stage framing",
  "Drip campaign copy for awareness, proof, objection handling, and conversion",
  "Subject lines, preview text, and CTA variants for each nurture email",
  "Segment-specific follow-up angles for subscribers, trial users, and warm leads",
  "Lead nurturing FAQs, sales handoff notes, and landing page snippets",
];

const faqs = [
  {
    question: "What is a lead nurturing email generator?",
    answer:
      "A lead nurturing email generator turns a prospect segment, offer, buyer stage, and proof points into lead nurturing emails with drip campaign copy, follow-up angles, objection reducers, and conversion CTAs.",
  },
  {
    question: "Can SEOCopy write drip campaign copy?",
    answer:
      "Yes. SEOCopy can draft drip campaign copy for awareness sequences, webinar follow-ups, trial activation, demo reminders, content downloads, consultation funnels, and sales nurture emails.",
  },
  {
    question: "How is this different from an email sequence generator?",
    answer:
      "An email sequence generator can cover any sequence. A lead nurturing email generator is focused on moving prospects through buyer stages with education, proof, objection handling, sales handoff notes, and conversion CTAs.",
  },
  {
    question: "How many lead nurturing emails can I generate for free?",
    answer:
      "You can try two free generations without creating an account. After that, buy a single generation for $5 or use the $19/month plan for ongoing SEO, landing page, and nurture copy production.",
  },
];

export default function LeadNurturingEmailGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(239,246,255,0.9))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(30,41,59,0.76))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Lead Nurturing Email Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate lead nurturing emails that turn quiet prospects into warmer buyers.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Paste a prospect segment, offer, funnel stage, or sales goal. SEOCopy returns lead nurturing emails with drip campaign copy, segment-aware follow-ups, objection reducers, sales handoff notes, and conversion CTAs.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=lead-nurturing-email-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate Lead Nurturing Emails
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
              Nurture output checklist
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
            Nurture leads into revenue
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Turn opt-ins, trials, and warm prospects into a sequenced conversion path.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {nurtureSections.map((item) => (
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
            Follow up with a reason to act
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Build nurture campaigns that educate, prove value, handle objections, and ask for the next step.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            SEOCopy keeps every nurture email tied to buyer movement: sharper segmentation, clearer proof, better handoffs to sales, and CTAs that make the next action obvious.
          </p>
          <Link
            href="/generate?source=lead-nurturing-email-generator-cta"
            className="mt-8 inline-flex rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            Try Two Free Generations
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight">Lead nurturing email generator questions</h2>
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
