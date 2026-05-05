import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Call to Action Generator",
  description:
    "Generate conversion-focused CTA copy, button text, offer prompts, microcopy, and SEO-friendly page snippets from one product or campaign brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/call-to-action-generator",
  },
  keywords: [
    "call to action generator",
    "CTA generator",
    "AI call to action generator",
    "button copy generator",
    "website CTA generator",
    "landing page CTA copy",
  ],
  openGraph: {
    title: "Call to Action Generator | SEOCopy",
    description:
      "Turn a product, offer, or landing page brief into CTA buttons, supporting microcopy, objection-aware prompts, and SEO snippets.",
    url: "https://seocopy.vercel.app/call-to-action-generator",
    type: "website",
  },
};

const ctaAssets = [
  {
    label: "Primary action",
    title: "Button copy that matches intent",
    body: "Generate concise CTA options for trials, checkouts, bookings, demos, downloads, waitlists, and product page add-to-cart flows.",
  },
  {
    label: "Conversion support",
    title: "Microcopy that reduces hesitation",
    body: "Create reassurance text, urgency cues, low-risk promises, and benefit-led prompts that sit beside the button without sounding pushy.",
  },
  {
    label: "Page context",
    title: "SEO snippets and headline angles",
    body: "Align CTA copy with the page title, meta description, social preview, hero headline, and offer framing so search visitors see one clear next step.",
  },
];

const workflow = [
  "Paste a product, service, landing page, or campaign brief.",
  "Describe the target visitor, desired action, and strongest proof point.",
  "Generate CTA buttons, supporting microcopy, headline angles, and SEO snippets.",
  "Test the clearest CTA in your hero, pricing card, checkout prompt, or product page.",
];

const faqs = [
  {
    question: "What is a call to action generator?",
    answer:
      "A call to action generator creates short action prompts such as button text, link copy, hero CTAs, checkout prompts, and supporting microcopy that tells visitors what to do next.",
  },
  {
    question: "Can SEOCopy generate CTAs for landing pages and product pages?",
    answer:
      "Yes. SEOCopy can generate CTA copy for landing pages, SaaS trials, ecommerce product pages, lead magnets, booking pages, pricing cards, waitlists, and launch pages from one brief.",
  },
  {
    question: "Does this only generate button labels?",
    answer:
      "No. It also creates CTA-adjacent copy such as benefit reminders, risk reducers, urgency lines, proof snippets, SEO titles, meta descriptions, and headline variants that support the click.",
  },
  {
    question: "How many free CTA generations do I get?",
    answer:
      "You can run two free generations without creating an account. After that, buy one more generation for $5 or use the $19/month plan for ongoing SEO and conversion copy production.",
  },
];

export default function CallToActionGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,254,255,0.88))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(8,47,73,0.68))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Call to Action Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate calls to action that make the next step obvious.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy turns one product or campaign brief into CTA buttons, supporting microcopy, SEO snippets, headline angles, and action-focused prompts for pages that need more clicks.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=call-to-action-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate CTA Copy
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
              Four-step CTA workflow
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
            CTA copy included
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            One brief, conversion copy for every click moment.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {ctaAssets.map((item) => (
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
            Click-focused output
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Stop ending pages with vague buttons like “Submit” or “Learn more.”
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            Use SEOCopy to match CTA language to the visitor’s intent, the offer’s proof, and the risk level of the action so the next step feels specific and worth taking.
          </p>
          <Link
            href="/generate?source=call-to-action-generator-cta"
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
