import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Customer Retention Email Generator",
  description:
    "Generate customer retention emails, lifecycle winback sequences, renewal reminders, loyalty offers, FAQs, and repeat-purchase CTAs from one customer segment brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/customer-retention-email-generator",
  },
  keywords: [
    "customer retention email generator",
    "customer retention emails",
    "lifecycle email copy",
    "repeat purchase email",
    "renewal reminder email",
    "loyalty email campaign",
  ],
  openGraph: {
    title: "Customer Retention Email Generator | SEOCopy",
    description:
      "Turn one customer segment brief into retention emails, renewal reminders, loyalty offers, lifecycle winback copy, FAQs, and repeat-purchase CTAs.",
    url: "https://seocopy.vercel.app/customer-retention-email-generator",
    type: "website",
  },
};

const retentionSections = [
  {
    label: "Lifecycle email copy",
    body: "Create segment-aware retention emails for onboarding, adoption nudges, replenishment reminders, renewal saves, and post-purchase education.",
  },
  {
    label: "Repeat-purchase CTAs",
    body: "Generate purchase prompts, loyalty offers, product recommendations, and objection-reducing microcopy tied to the customer's last action.",
  },
  {
    label: "Winback and save flows",
    body: "Draft lifecycle winback sequences, churn-risk messaging, cancellation save copy, and retention FAQs that keep relationships warm without sounding desperate.",
  },
];

const outputs = [
  "Customer retention email objective and segment framing",
  "Lifecycle email copy for onboarding, adoption, renewal, or repeat purchase",
  "Subject lines, preview text, and CTA variants for each retention moment",
  "Loyalty offer copy, product recommendation angles, and objection reducers",
  "Retention FAQs, support deflection snippets, and follow-up sequence ideas",
];

const faqs = [
  {
    question: "What is a customer retention email generator?",
    answer:
      "A customer retention email generator turns a customer segment, purchase history, lifecycle moment, and offer into customer retention emails with lifecycle email copy, repeat-purchase CTAs, loyalty offers, and follow-up sequences.",
  },
  {
    question: "Can SEOCopy write lifecycle email copy?",
    answer:
      "Yes. SEOCopy can draft lifecycle email copy for onboarding, replenishment, renewal reminders, loyalty campaigns, product adoption nudges, winback flows, and post-purchase education campaigns.",
  },
  {
    question: "How is this different from a winback email generator?",
    answer:
      "A winback email generator focuses on inactive customers. A customer retention email generator covers the broader lifecycle: new buyer education, repeat purchase prompts, loyalty offers, renewal reminders, save flows, and proactive churn prevention.",
  },
  {
    question: "How many retention emails can I generate for free?",
    answer:
      "You can try two free generations without creating an account. After that, buy a single generation for $5 or use the $19/month plan for ongoing retention, SEO, and conversion copy production.",
  },
];

export default function CustomerRetentionEmailGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,253,245,0.86))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(8,47,73,0.72))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Customer Retention Email Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate customer retention emails that bring buyers back before churn wins.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Paste a customer segment, product, lifecycle moment, or retention offer. SEOCopy returns customer retention emails with lifecycle email copy, repeat-purchase CTAs, loyalty offer angles, renewal reminders, and save-flow FAQs.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=customer-retention-email-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate Customer Retention Email Copy
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
            Lifecycle retention copy
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Turn customer moments into retention campaigns that protect repeat revenue.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {retentionSections.map((item) => (
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
            Retain before reacquiring
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Build lifecycle emails that make the next purchase, renewal, or save conversation easier.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            SEOCopy keeps retention copy tied to revenue: clearer value reminders, better repeat-purchase prompts, stronger loyalty offers, and proactive answers before customers drift away.
          </p>
          <Link
            href="/generate?source=customer-retention-email-generator-cta"
            className="mt-8 inline-flex rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            Try Two Free Generations
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight">Customer retention email generator questions</h2>
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
