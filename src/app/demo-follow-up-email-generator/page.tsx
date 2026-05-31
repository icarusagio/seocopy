import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Demo Follow-Up Email Generator",
  description:
    "Generate demo follow-up emails, recap notes, stakeholder next steps, objection replies, proof snippets, and booking CTAs from one sales call brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/demo-follow-up-email-generator",
  },
  keywords: [
    "demo follow-up email generator",
    "demo follow-up emails",
    "sales demo recap email",
    "post-demo email template",
    "B2B demo follow up",
    "SaaS sales follow-up email",
    "sales call recap email",
  ],
  openGraph: {
    title: "Demo Follow-Up Email Generator | SEOCopy",
    description:
      "Turn one product demo or sales call into follow-up emails, recap bullets, stakeholder proof, objection replies, and next-step CTAs.",
    url: "https://seocopy.vercel.app/demo-follow-up-email-generator",
    type: "website",
  },
};

const demoMoments = [
  {
    label: "Post-demo recap emails",
    body: "Summarize the buyer pain, promised outcome, features shown, success criteria, proof, and owner for the next decision step.",
  },
  {
    label: "Stakeholder forwarding copy",
    body: "Create concise internal-forward notes buyers can send to finance, operations, founders, clients, or technical reviewers after the call.",
  },
  {
    label: "Objection and no-show recovery",
    body: "Answer timing, budget, implementation, migration, and competing-priority objections while keeping the next meeting or trial CTA clear.",
  },
];

const outputs = [
  "Demo follow-up emails with subject lines, preview text, recap bullets, proof snippets, and one clear CTA",
  "Sales demo recap email copy for SaaS teams, agencies, consultants, ecommerce tools, and founder-led sales motions",
  "Stakeholder forwarding notes that make the buyer's internal approval path easier after a product demo",
  "Objection reply variants for budget, timing, implementation, migration, security, and stakeholder approval concerns",
  "Next-step CTA options for booking the next call, starting a trial, approving a proposal, or sharing a technical checklist",
];

const faqs = [
  {
    question: "What is a demo follow-up email generator?",
    answer:
      "A demo follow-up email generator turns a product demo, sales call, or discovery recap into post-demo emails with subject lines, recap bullets, proof, stakeholder notes, objection replies, and next-step CTAs.",
  },
  {
    question: "Can SEOCopy write a sales demo recap email?",
    answer:
      "Yes. Paste the buyer's pain, product fit, proof points, open questions, pricing or implementation notes, and next step. SEOCopy can draft a concise sales demo recap email for the champion and any internal stakeholders.",
  },
  {
    question: "How is this different from the sales email generator?",
    answer:
      "The broader sales email generator covers many warm-pipeline moments. The demo follow-up email generator focuses specifically on the post-demo conversion window: recap, stakeholder forwarding, objection handling, and next meeting or trial CTAs.",
  },
  {
    question: "How many demo follow-up emails can I generate for free?",
    answer:
      "You can try two free generations with no signup. After that, buy one generation for $5 or use the $19/month plan for ongoing SEO, landing page, and revenue copy.",
  },
];

export default function DemoFollowUpEmailGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,253,245,0.92))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(5,150,105,0.32))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-800 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-200">
              Demo Follow-Up Email Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Send demo follow-ups that keep qualified buyers moving.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Paste the sales call notes, buyer pain, features shown, proof points, objections, and next step. SEOCopy creates demo follow-up emails, sales demo recap email copy, stakeholder notes, objection replies, and booking CTAs.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=demo-follow-up-email-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-emerald-300 dark:text-slate-950 dark:hover:bg-emerald-200"
              >
                Generate Demo Follow-Up Email
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
              Demo follow-up output checklist
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
            Convert the post-demo window
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Turn product demos, discovery calls, and proposal reviews into follow-up emails buyers can act on.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {demoMoments.map((item) => (
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
            Revenue-focused demo follow-up
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Keep the buyer&apos;s momentum from cooling off after the call.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            SEOCopy helps sales-led teams turn a live conversation into proof-led follow-ups, stakeholder-friendly recap notes, objection responses, and next-step CTAs while the demo is still fresh.
          </p>
          <Link
            href="/generate?source=demo-follow-up-email-generator-cta"
            className="mt-8 inline-flex rounded-full bg-emerald-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-200"
          >
            Try Two Free Generations
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight">Demo follow-up email questions</h2>
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
