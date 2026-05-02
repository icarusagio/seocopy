import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Local SEO Copy Generator",
  description:
    "Generate local SEO titles, meta descriptions, city service page copy, proof bullets, FAQs, and CTA variants for local businesses and agencies.",
  alternates: {
    canonical: "https://seocopy.vercel.app/local-seo-copy-generator",
  },
  keywords: [
    "local SEO copy generator",
    "AI local SEO copy generator",
    "city service page copy",
    "local business SEO copy",
    "service area page copy",
    "local landing page copy generator",
  ],
  openGraph: {
    title: "Local SEO Copy Generator | SEOCopy",
    description:
      "Turn a local offer, city, service area, and customer proof into SEO metadata, service page copy, FAQs, and calls to action.",
    url: "https://seocopy.vercel.app/local-seo-copy-generator",
    type: "website",
  },
};

const sections = [
  {
    label: "Local search intent",
    title: "City-aware title tags and snippets",
    body: "Draft SEO titles and meta descriptions that mention your service area naturally while staying focused on the buyer's problem.",
  },
  {
    label: "Service-area pages",
    title: "Neighborhood and city copy blocks",
    body: "Generate hero copy, service proof, differentiators, and section ideas for local landing pages without duplicate doorway-page filler.",
  },
  {
    label: "Lead conversion",
    title: "FAQs and booking CTAs",
    body: "Answer price, timing, coverage, emergency, and trust questions so visitors can call, book, or request a quote faster.",
  },
];

const workflow = [
  "Enter the service, city or service area, ideal customer, and strongest proof point.",
  "Choose whether the page should drive calls, quote requests, bookings, or consults.",
  "Review local SEO metadata, hero copy, proof bullets, FAQs, and CTA variants.",
  "Publish the strongest copy in your CMS, Google Business Profile landing page, or agency client draft.",
];

const faqs = [
  {
    question: "What is a local SEO copy generator?",
    answer:
      "A local SEO copy generator turns a short business brief into search-focused copy for a city, neighborhood, or service-area page: title tags, meta descriptions, hero copy, proof points, FAQs, and calls to action.",
  },
  {
    question: "Who should use SEOCopy for local pages?",
    answer:
      "It is useful for local service businesses, franchise marketers, consultants, and agencies creating pages for contractors, clinics, home services, legal practices, real estate teams, and other location-based offers.",
  },
  {
    question: "Can it create service-area pages without keyword stuffing?",
    answer:
      "Yes. Add the city, nearby neighborhoods, customer type, offer, and proof. SEOCopy drafts copy around local relevance and buyer needs instead of repeating a city keyword unnaturally.",
  },
  {
    question: "How many free local SEO generations do I get?",
    answer:
      "You can run two free generations without creating an account. After that, buy one more generation for $5 or use the $19/month plan for ongoing local SEO copy production.",
  },
];

export default function LocalSeoCopyGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,254,255,0.88))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(8,47,73,0.68))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Local SEO Copy Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate local SEO copy that helps nearby buyers choose you.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy turns a local offer, city, service area, and proof point into search snippets, service page copy, FAQs, and booking-focused CTAs.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=local-seo-copy-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate Local SEO Copy
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
              Four-step workflow
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
            Copy blocks included
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Build local pages around the searcher, the service area, and the next action.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {sections.map((item) => (
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
            Local lead capture
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Stop publishing city pages that repeat keywords but never explain why a local buyer should contact you.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            Use SEOCopy to align the search snippet, first-screen promise, local proof, and CTA around one clear service-area offer.
          </p>
          <Link
            href="/generate?source=local-seo-copy-generator-cta"
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
