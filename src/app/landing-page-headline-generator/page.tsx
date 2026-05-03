import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Landing Page Headline Generator",
  description:
    "Generate landing page headlines, subheadlines, SEO metadata, hero CTAs, and message-match variants from one product URL or offer brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/landing-page-headline-generator",
  },
  keywords: [
    "landing page headline generator",
    "AI headline generator",
    "landing page copy generator",
    "hero headline generator",
    "website headline generator",
    "conversion copy generator",
  ],
  openGraph: {
    title: "Landing Page Headline Generator | SEOCopy",
    description:
      "Turn a rough offer into clear hero headlines, subheadlines, SEO snippets, and CTA variants for a landing page that is easier to test.",
    url: "https://seocopy.vercel.app/landing-page-headline-generator",
    type: "website",
  },
};

const headlineAssets = [
  {
    label: "Hero section",
    title: "A clearer first impression",
    body: "Generate headline and subheadline options that explain who the page is for, what changes, and why visitors should keep reading.",
  },
  {
    label: "SEO + social",
    title: "Search snippets that match the page",
    body: "Pair the hero promise with SEO titles, meta descriptions, and Open Graph copy so visitors see the same value before and after the click.",
  },
  {
    label: "CTA testing",
    title: "Action language for the next step",
    body: "Create CTA variants for free trials, demos, bookings, waitlists, and paid checkout flows without rewriting the whole page.",
  },
];

const workflow = [
  "Paste a landing page URL, offer notes, or a rough product description.",
  "Add the audience, pain point, and desired conversion action.",
  "Generate hero headlines, subheadlines, SEO metadata, social previews, and CTA variants.",
  "Ship the strongest angle, then test alternatives against traffic, signups, or checkout starts.",
];

const faqs = [
  {
    question: "What is a landing page headline generator?",
    answer:
      "A landing page headline generator turns an offer, URL, or campaign brief into hero headline options, supporting subheadlines, SEO snippets, social previews, and calls to action for a conversion-focused page.",
  },
  {
    question: "Can SEOCopy generate headlines and SEO metadata together?",
    answer:
      "Yes. SEOCopy is built to keep the search result, social preview, hero headline, and CTA aligned so visitors get a consistent promise from click to conversion.",
  },
  {
    question: "Do I need a finished landing page before using the generator?",
    answer:
      "No. You can paste an existing URL for context or describe the offer manually. SEOCopy can help draft the first headline set before design or development is finished.",
  },
  {
    question: "How many free headline generations do I get?",
    answer:
      "You can run two free generations without creating an account. After that, buy one more generation for $5 or use the $19/month plan for ongoing landing page copy production.",
  },
];

export default function LandingPageHeadlineGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,254,255,0.88))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(8,47,73,0.68))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Landing Page Headline Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate landing page headlines that make the offer obvious.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy turns a product URL or rough offer into hero headlines, subheadlines, SEO metadata, social previews, and CTA variants you can test on the next page refresh.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=landing-page-headline-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate Landing Page Headlines
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
            Headline assets included
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            One brief, multiple page-ready angles.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {headlineAssets.map((item) => (
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
            Conversion-ready output
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Stop letting a vague hero line waste the traffic you already earned.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            Use SEOCopy to align the landing page headline, SEO title, meta description, social preview, and CTA around the same conversion promise.
          </p>
          <Link
            href="/generate?source=landing-page-headline-generator-cta"
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
