import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cold Email Generator",
  description:
    "Generate concise cold emails, follow-up sequences, subject lines, personalization angles, CTAs, and SEO-friendly campaign snippets from one prospect or offer brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/cold-email-generator",
  },
  keywords: [
    "cold email generator",
    "AI cold email generator",
    "sales email generator",
    "cold outreach email generator",
    "B2B cold email copy",
    "follow up email generator",
  ],
  openGraph: {
    title: "Cold Email Generator | SEOCopy",
    description:
      "Turn a prospect, offer, or campaign brief into cold email subject lines, openers, follow-ups, CTA copy, and SEO snippets.",
    url: "https://seocopy.vercel.app/cold-email-generator",
    type: "website",
  },
};

const emailAssets = [
  {
    label: "First touch",
    title: "Cold emails that earn the reply",
    body: "Generate short, specific first-touch emails with a clear reason for reaching out, a relevant pain point, and a low-friction ask.",
  },
  {
    label: "Follow-up",
    title: "Sequences without sounding automated",
    body: "Create polite follow-ups, bump emails, proof-led reminders, and breakup notes that keep the conversation moving without spammy pressure.",
  },
  {
    label: "Campaign support",
    title: "Subject lines, CTAs, and landing snippets",
    body: "Pair outreach copy with subject line variants, call-to-action options, SEO titles, meta descriptions, and landing page angles for the offer.",
  },
];

const workflow = [
  "Paste the target buyer, offer, product, or service you want to introduce.",
  "Add the prospect segment, pain point, proof point, and desired next step.",
  "Generate cold email drafts, subject lines, follow-ups, CTAs, and supporting SEO snippets.",
  "Personalize the strongest draft before sending and track replies by segment.",
];

const faqs = [
  {
    question: "What is a cold email generator?",
    answer:
      "A cold email generator creates outbound email drafts, subject lines, follow-up notes, and call-to-action copy for prospects who have not spoken with you yet.",
  },
  {
    question: "Can SEOCopy write B2B cold emails?",
    answer:
      "Yes. SEOCopy can generate B2B cold emails for SaaS demos, agency outreach, founder-led sales, ecommerce partnerships, service offers, and launch announcements from one campaign brief.",
  },
  {
    question: "Does this replace personalization?",
    answer:
      "No. Use the generated copy as a strong starting point, then add account-specific context, relevant proof, and a human reason for contacting that prospect.",
  },
  {
    question: "How many free cold email generations do I get?",
    answer:
      "You can run two free generations without creating an account. After that, buy one more generation for $5 or use the $19/month plan for ongoing SEO and conversion copy production.",
  },
];

export default function ColdEmailGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,254,255,0.88))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(8,47,73,0.68))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Cold Email Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate cold emails prospects actually want to answer.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy turns one offer or prospect brief into concise cold emails, subject lines, follow-up sequences, CTA options, and landing-page snippets for founder-led sales.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=cold-email-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate Cold Email Copy
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
              Four-step outreach workflow
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
            Outreach copy included
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            One brief, reply-focused copy for every step of the sequence.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {emailAssets.map((item) => (
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
            Founder-led sales support
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Stop sending generic “quick question” emails that sound like every other inbox pitch.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            Use SEOCopy to connect your offer to the prospect’s likely job-to-be-done, then generate concise copy that makes the next step specific, relevant, and easy to decline or accept.
          </p>
          <Link
            href="/generate?source=cold-email-generator-cta"
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
