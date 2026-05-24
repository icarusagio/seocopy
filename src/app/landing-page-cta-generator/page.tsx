import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Landing Page CTA Generator",
  description:
    "Generate landing page CTAs, button copy, section-specific calls to action, objection reducers, FAQ prompts, and conversion microcopy from one offer brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/landing-page-cta-generator",
  },
  keywords: [
    "landing page CTA generator",
    "landing page CTAs",
    "button copy generator",
    "call to action copy",
    "conversion microcopy",
    "CTA variants",
    "landing page conversion copy",
    "offer CTA generator",
  ],
  openGraph: {
    title: "Landing Page CTA Generator | SEOCopy",
    description:
      "Turn one offer brief into landing page CTAs, button copy, section-specific calls to action, objection reducers, FAQ prompts, and conversion microcopy.",
    url: "https://seocopy.vercel.app/landing-page-cta-generator",
    type: "website",
  },
};

const ctaAngles = [
  {
    label: "Section-specific CTAs",
    body: "Match the hero, proof, pricing, FAQ, comparison, and final conversion panels with CTAs that fit the visitor's intent at each point.",
  },
  {
    label: "Button copy and microcopy",
    body: "Generate action labels, supporting reassurance, opt-in helper text, and click-risk reducers that make the next step feel clear and safe.",
  },
  {
    label: "Conversion intent mapping",
    body: "Tie each CTA to the business outcome that matters: trial starts, demo bookings, checkout starts, installs, lead captures, or repeat purchases.",
  },
];

const outputs = [
  "Landing page CTAs for SaaS trials, Shopify apps, ecommerce product pages, paid campaigns, webinars, lead magnets, and service bookings",
  "Button copy variants for primary, secondary, sticky, pricing, FAQ, and final-page conversion moments",
  "Section-specific calls to action that connect hero promises, proof blocks, objections, pricing, and checkout or signup intent",
  "Conversion microcopy for risk reversal, free-trial framing, low-commitment next steps, and form reassurance",
  "CTA testing prompts that explain which click, signup, checkout, booking, install, or lead signal each variation should improve",
];

const faqs = [
  {
    question: "What is a landing page CTA generator?",
    answer:
      "A landing page CTA generator turns an offer brief into landing page CTAs, button copy, section-specific calls to action, objection reducers, FAQ prompts, and conversion microcopy for the moments where visitors decide whether to act.",
  },
  {
    question: "How is this different from a call-to-action generator?",
    answer:
      "A broad call-to-action generator creates standalone CTA ideas. This tool focuses on the landing page journey: hero CTAs, proof-section CTAs, pricing microcopy, FAQ reassurance, final panels, and the conversion goal each prompt should support.",
  },
  {
    question: "Can I use this for paid traffic landing pages?",
    answer:
      "Yes. Paste the audience, traffic source, offer, proof, objections, and conversion goal. SEOCopy will generate CTAs and microcopy that keep the ad promise, landing page message, and checkout or signup action aligned.",
  },
  {
    question: "How many landing page CTA generations are free?",
    answer:
      "You can try two free generations with no signup. After that, buy one generation for $5 or use the $19/month plan for ongoing SEO, landing page, product, email, and conversion copy.",
  },
];

export default function LandingPageCtaGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,253,245,0.92))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(5,150,105,0.32))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-800 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-200">
              Landing Page CTA Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Write landing page CTAs that make the next revenue step obvious.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Paste the offer, audience, traffic source, page sections, proof, objections, pricing, and conversion goal. SEOCopy creates landing page CTAs, button copy, section-specific calls to action, objection reducers, FAQ prompts, and conversion microcopy from one brief.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=landing-page-cta-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-emerald-300 dark:text-slate-950 dark:hover:bg-emerald-200"
              >
                Generate Landing Page CTAs
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
              CTA output checklist
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
            From page intent to click intent
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Give every section a CTA that matches what the visitor is ready to do next.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {ctaAngles.map((item) => (
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
            From CTA guesswork to conversion path
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Stop ending every section with the same generic button.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            SEOCopy helps teams map CTAs to the real buying journey: what action belongs above the fold, what reassurance belongs beside pricing, what microcopy reduces form friction, and which final prompt should move visitors toward signup, checkout, booking, install, or lead capture.
          </p>
          <Link
            href="/generate?source=landing-page-cta-generator-cta"
            className="mt-8 inline-flex rounded-full bg-emerald-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-200"
          >
            Try Two Free Generations
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight">Landing page CTA questions</h2>
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
