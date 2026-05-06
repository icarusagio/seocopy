import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hero Headline Generator",
  description:
    "Generate conversion-focused hero headlines, subheadlines, CTA copy, proof bullets, and SEO snippets for landing pages, homepages, and product launches.",
  alternates: {
    canonical: "https://seocopy.vercel.app/hero-headline-generator",
  },
  keywords: [
    "hero headline generator",
    "AI headline generator",
    "landing page headline generator",
    "website hero copy generator",
    "homepage headline generator",
    "conversion headline generator",
  ],
  openGraph: {
    title: "Hero Headline Generator | SEOCopy",
    description:
      "Turn a rough offer, product description, or audience brief into hero headlines, subheadlines, CTA variants, proof bullets, and SEO-ready page snippets.",
    url: "https://seocopy.vercel.app/hero-headline-generator",
    type: "website",
  },
};

const deliverables = [
  {
    label: "Hero angles",
    title: "Find the promise buyers understand fastest",
    body: "Generate benefit-led, pain-led, outcome-led, and proof-led headline options so your page opens with the strongest conversion angle.",
  },
  {
    label: "Above-the-fold copy",
    title: "Pair every headline with the next line and CTA",
    body: "Get subheadlines, primary CTAs, secondary CTAs, and trust-building microcopy that make the hero section easier to publish.",
  },
  {
    label: "SEO alignment",
    title: "Keep search intent connected to the pitch",
    body: "Translate the winning hero into title tags, meta descriptions, OG copy, FAQ ideas, and page-section prompts for consistent acquisition copy.",
  },
];

const workflow = [
  "Paste your product, service, offer, landing page URL, or rough positioning notes.",
  "Add the audience, desired action, proof points, objections, and any keywords the page needs to rank for.",
  "Generate headline angles, subheadlines, CTAs, proof bullets, SEO snippets, and FAQ prompts in one pass.",
  "Choose the strongest angle and use SEOCopy to expand it into a full landing page or homepage refresh.",
];

const faqs = [
  {
    question: "What is a hero headline generator?",
    answer:
      "A hero headline generator turns product positioning, audience notes, and conversion goals into above-the-fold headline options for landing pages, homepages, product pages, and campaigns.",
  },
  {
    question: "Can SEOCopy write subheadlines and CTAs too?",
    answer:
      "Yes. SEOCopy generates supporting subheadlines, CTA variants, proof bullets, metadata, social previews, and FAQ ideas so the hero copy connects to the rest of the page.",
  },
  {
    question: "Is this useful for SaaS and ecommerce pages?",
    answer:
      "Yes. The hero headline workflow works for SaaS landing pages, Shopify stores, service businesses, product launches, comparison pages, and lead-generation campaigns.",
  },
  {
    question: "How many hero headline briefs can I generate for free?",
    answer:
      "You can run two free generations without an account. After that, buy one additional generation for $5 or use the $19/month plan for ongoing headline, SEO, and copy work.",
  },
];

export default function HeroHeadlineGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(240,253,250,0.88))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(20,83,45,0.58))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Hero Headline Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate hero headlines that make the offer click fast.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy turns your product, audience, proof, and conversion goal into hero headlines, subheadlines, CTA variants, and SEO-ready snippets for pages that need sharper first impressions.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=hero-headline-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate Hero Headlines
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
              From rough pitch to hero section
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
            Headline-to-page deliverables
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            One offer brief, a stronger above-the-fold pitch.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {deliverables.map((item) => (
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
            Publishable first-impression copy
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Stop shipping hero sections that bury the reason to buy.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            Use SEOCopy to test clearer promises, connect the headline to the CTA, and turn the winning message into SEO metadata, social previews, and page copy your team can publish faster.
          </p>
          <Link
            href="/generate?source=hero-headline-generator"
            className="mt-6 inline-flex rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            Generate a hero headline brief
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-6xl px-6 pb-24 lg:px-10">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-300">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Hero headline generator questions
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <article key={faq.question} className="rounded-[1.5rem] border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-white/5">
              <h3 className="text-xl font-semibold">{faq.question}</h3>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <script
        type="application/ld+json"
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
