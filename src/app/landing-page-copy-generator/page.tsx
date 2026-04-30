import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Landing Page Copy Generator",
  description:
    "Generate landing page headlines, subheadlines, CTAs, SEO titles, meta descriptions, and OG copy from a URL or product description.",
  alternates: {
    canonical: "https://seocopy.vercel.app/landing-page-copy-generator",
  },
  keywords: [
    "landing page copy generator",
    "AI landing page copy",
    "headline generator",
    "CTA generator",
    "SEO landing page copy",
  ],
  openGraph: {
    title: "Landing Page Copy Generator | SEOCopy",
    description:
      "Generate conversion-ready landing page copy and SEO metadata from a short product description.",
    url: "https://seocopy.vercel.app/landing-page-copy-generator",
    type: "website",
  },
};

const useCases = [
  {
    title: "New product launches",
    body: "Move from rough positioning notes to usable hero copy, SEO metadata, and CTA options.",
  },
  {
    title: "Paid traffic tests",
    body: "Create multiple message angles quickly before sending traffic to a new campaign.",
  },
  {
    title: "Website refreshes",
    body: "Rewrite stale above-the-fold copy and metadata without starting from a blank page.",
  },
];

const faqs = [
  {
    question: "What landing page copy does SEOCopy generate?",
    answer:
      "SEOCopy generates SEO titles, meta descriptions, OG tags, headline variants, subheadlines, and CTA button text from a URL or product description.",
  },
  {
    question: "Can I use the output directly?",
    answer:
      "Yes. The output is structured to copy into a CMS, landing page builder, ad draft, or website repo. You should still review claims for accuracy before publishing.",
  },
  {
    question: "How much does it cost?",
    answer:
      "You get two free generations. After that, you can buy a single generation for $5 or use the $19/month plan for ongoing copy production.",
  },
];

export default function LandingPageCopyGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,254,255,0.75))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(8,47,73,0.7))] md:p-12">
          <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
            Landing Page Copy Generator
          </p>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
            Turn rough product notes into landing page copy you can ship today.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Paste a URL or describe the offer. SEOCopy returns SEO metadata,
            social preview copy, hero headlines, subheadlines, and CTA ideas so
            you can publish faster and test sharper angles.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/generate?source=landing-page-copy-generator"
              className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
            >
              Generate Landing Copy
            </Link>
            <a
              href="#faq"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950 dark:border-white/15 dark:text-slate-200 dark:hover:border-white dark:hover:text-white"
            >
              See FAQ
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-10">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-300">
            Use cases
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Built for teams that need more copy angles, not more blank docs.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {useCases.map((item) => (
            <article key={item.title} className="rounded-[1.5rem] border border-black/10 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{item.body}</p>
            </article>
          ))}
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
