import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Winback Email Generator",
  description:
    "Generate winback emails, customer reactivation campaigns, lapsed-customer offers, subscription renewal nudges, FAQs, and SEO snippets from one retention brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/winback-email-generator",
  },
  keywords: [
    "winback email generator",
    "winback emails",
    "customer reactivation campaigns",
    "lapsed-customer offers",
    "subscription renewal nudges",
    "retention email copy",
    "customer comeback email",
  ],
  openGraph: {
    title: "Winback Email Generator | SEOCopy",
    description:
      "Turn a churn risk, inactive buyer list, expired trial, or lapsed subscription into winback emails, reactivation offers, renewal nudges, subject lines, and FAQ-backed snippets.",
    url: "https://seocopy.vercel.app/winback-email-generator",
    type: "website",
  },
};

const winbackMoments = [
  {
    label: "Lapsed-customer offers",
    body: "Frame the reason to return, the right incentive, the deadline, and the proof that makes a past buyer feel safe coming back.",
  },
  {
    label: "Customer reactivation campaigns",
    body: "Create subject lines, opening hooks, segmentation angles, and follow-up CTAs for inactive subscribers, old leads, and dormant users.",
  },
  {
    label: "Subscription renewal nudges",
    body: "Remind churn-risk customers what they already got, what changed, and which plan, discount, or success path makes renewal easy.",
  },
];

const outputs = [
  "Winback emails for ecommerce customers, SaaS trials, subscription renewals, agencies, newsletters, memberships, and local service clients",
  "Customer reactivation campaigns with subject lines, preview text, comeback hooks, lapsed-customer offers, and one clear CTA",
  "Subscription renewal nudges that restate value, handle cancellation reasons, and give customers a low-friction next step",
  "Segmentation angles for inactive buyers, expired trials, churn-risk accounts, dormant leads, and past customers who need a new reason to return",
  "Tone variants for friendly, urgent, founder-led, premium, empathetic, incentive-driven, and proof-led retention campaigns",
];

const faqs = [
  {
    question: "What is a winback email generator?",
    answer:
      "A winback email generator turns a retention brief into winback emails, customer reactivation campaigns, lapsed-customer offers, subscription renewal nudges, subject lines, preview text, and SEO-friendly page snippets.",
  },
  {
    question: "Can I use this for customer reactivation campaigns?",
    answer:
      "Yes. SEOCopy can create customer reactivation campaigns for dormant subscribers, inactive buyers, expired trials, churn-risk accounts, and old leads with offer angles, proof points, and follow-up CTAs.",
  },
  {
    question: "How is this different from the abandoned cart email generator?",
    answer:
      "The abandoned cart email generator focuses on shoppers who recently left checkout. This winback email generator focuses on lapsed customers, inactive subscribers, churn-risk accounts, and subscription renewal moments after the relationship has gone quiet.",
  },
  {
    question: "How many winback email generations are free?",
    answer:
      "You can try two free generations with no signup. After that, buy one generation for $5 or use the $19/month plan for ongoing SEO, landing page, and revenue copy.",
  },
];

export default function WinbackEmailGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,253,245,0.92))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(5,150,105,0.32))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-800 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-200">
              Winback Email Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Bring lapsed customers back with timely winback emails.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Paste the audience, last purchase or signup moment, churn reason, offer, proof, and next step. SEOCopy creates winback emails, customer reactivation campaigns, lapsed-customer offers, subscription renewal nudges, FAQs, and SEO snippets.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=winback-email-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-emerald-300 dark:text-slate-950 dark:hover:bg-emerald-200"
              >
                Generate Winback Email
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
              Winback email output checklist
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
            Turn dormant lists into returning revenue
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Create retention copy for lapsed customers, inactive subscribers, expired trials, churn-risk accounts, and renewal windows.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {winbackMoments.map((item) => (
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
            Revenue-focused retention copy
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Recover more value from customers who already know your product.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            SEOCopy helps founders, Shopify merchants, subscription teams, and agencies turn dormant lists into clear comeback offers, renewal reminders, and reactivation CTAs without writing each campaign from scratch.
          </p>
          <Link
            href="/generate?source=winback-email-generator-cta"
            className="mt-8 inline-flex rounded-full bg-emerald-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-200"
          >
            Try Two Free Generations
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight">Winback email questions</h2>
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
