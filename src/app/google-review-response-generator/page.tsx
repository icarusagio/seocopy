import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Google Review Response Generator",
  description:
    "Generate professional Google review responses, local SEO snippets, service recovery replies, thank-you notes, FAQs, and CTAs from raw customer feedback.",
  alternates: {
    canonical: "https://seocopy.vercel.app/google-review-response-generator",
  },
  keywords: [
    "google review response generator",
    "review response generator",
    "AI review reply generator",
    "Google Business Profile review response",
    "local SEO review responses",
    "customer review reply generator",
  ],
  openGraph: {
    title: "Google Review Response Generator | SEOCopy",
    description:
      "Turn positive, neutral, and negative Google reviews into polished replies that protect trust, support local SEO, and move customers toward the next action.",
    url: "https://seocopy.vercel.app/google-review-response-generator",
    type: "website",
  },
};

const responseAngles = [
  {
    label: "Positive reviews",
    body: "Thank happy customers by name, reinforce the service or product they mentioned, and invite repeat visits without sounding templated.",
  },
  {
    label: "Negative reviews",
    body: "Acknowledge the issue, show ownership, keep the tone calm, and move sensitive follow-up to a private channel with a clear next step.",
  },
  {
    label: "Local SEO signals",
    body: "Naturally reference the service, location, product category, or team detail when it is relevant so replies stay useful for future local searchers.",
  },
];

const outputs = [
  "Google review reply options for positive, neutral, and negative feedback",
  "Tone-adjusted service recovery replies for public review platforms",
  "Local SEO-friendly response snippets for Google Business Profile managers",
  "Follow-up CTAs for bookings, support, store visits, referrals, or repeat orders",
  "FAQ and website copy ideas based on repeated customer feedback themes",
];

const faqs = [
  {
    question: "What is a Google review response generator?",
    answer:
      "A Google review response generator turns customer feedback into polished public replies for Google Business Profile and other review platforms. It helps teams answer faster while keeping tone, service details, and next steps consistent.",
  },
  {
    question: "Can SEOCopy help with negative review responses?",
    answer:
      "Yes. Add the review, business context, location, service details, and the outcome you want. SEOCopy can draft calm, professional responses that acknowledge the concern, avoid defensiveness, and move resolution to the right private channel.",
  },
  {
    question: "Should review responses include keywords?",
    answer:
      "Only when they are natural and helpful. Mentioning a service, product, or location can clarify context for future customers, but review replies should always prioritize authenticity, customer care, and accurate details over keyword stuffing.",
  },
  {
    question: "How many review responses can I generate for free?",
    answer:
      "You can try two free generations without creating an account. After that, buy a single generation for $5 or use the $19/month plan for ongoing review, local SEO, and website copy production.",
  },
];

export default function GoogleReviewResponseGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(240,253,250,0.92))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(20,83,45,0.5))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Google Review Response Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Reply to Google reviews with trust-building copy in seconds.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Paste a customer review, business details, service area, and preferred tone. SEOCopy generates public review responses, recovery language, local SEO snippets, FAQs, and CTAs for local teams that need faster reputation management.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=google-review-response-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate Review Responses
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
              Review reply output checklist
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
            Reputation response playbook
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Generate review replies that sound human, helpful, and on-brand.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {responseAngles.map((item) => (
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
            Faster local reputation workflows
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Turn one customer review into a polished response and reusable copy assets.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            SEOCopy helps local businesses, agencies, restaurants, clinics, salons, home-service teams, and retailers respond to reviews quickly while collecting themes for service pages, FAQs, and customer support copy.
          </p>
          <Link
            href="/generate?source=google-review-response-generator-cta"
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
