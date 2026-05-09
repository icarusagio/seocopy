import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Advertorial Copy Generator",
  description:
    "Generate advertorial hooks, story-led product angles, SEO metadata, proof sections, FAQs, and CTA variants from one offer brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/advertorial-copy-generator",
  },
  keywords: [
    "advertorial copy generator",
    "AI advertorial copy",
    "native ad copy generator",
    "product story copy",
    "SEO advertorial copy",
  ],
  openGraph: {
    title: "Advertorial Copy Generator | SEOCopy",
    description:
      "Turn product notes into story-led advertorial copy, SEO snippets, proof blocks, FAQs, and CTAs for native ad tests.",
    url: "https://seocopy.vercel.app/advertorial-copy-generator",
    type: "website",
  },
};

const sections = [
  {
    title: "Native ad pre-sell pages",
    body: "Draft curiosity-led openings, problem agitation, proof blocks, and transition CTAs before buying paid traffic.",
  },
  {
    title: "Founder and product stories",
    body: "Turn raw launch notes, customer pains, and product proof into a narrative that still points visitors toward action.",
  },
  {
    title: "SEO-supported advertorials",
    body: "Pair story copy with search titles, meta descriptions, social previews, FAQ answers, and internal-link hooks.",
  },
];

const outputs = [
  "Curiosity hooks and advertorial headlines",
  "Problem-story-proof section outlines",
  "SEO titles, meta descriptions, and social previews",
  "Objection-handling FAQ answers and CTA variants",
];

const faqs = [
  {
    question: "What is an advertorial copy generator?",
    answer:
      "An advertorial copy generator turns a product, service, or campaign brief into story-led pre-sell copy: hooks, problem framing, proof sections, SEO metadata, FAQs, and calls to action.",
  },
  {
    question: "Can SEOCopy help with native ad landing pages?",
    answer:
      "Yes. Use it to create advertorial angles for native ads, paid social pre-sell pages, product story pages, newsletter sponsorship landers, and campaign tests that need more than a short ad headline.",
  },
  {
    question: "Does it replace legal or compliance review?",
    answer:
      "No. SEOCopy helps draft copy quickly, but claims, testimonials, health or financial promises, and comparison language should be reviewed before publication.",
  },
];

export default function AdvertorialCopyGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,254,255,0.75))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(8,47,73,0.7))] md:p-12">
          <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
            Advertorial Copy Generator
          </p>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
            Generate advertorial copy that turns product notes into a story visitors keep reading.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Paste a product brief, customer pain, offer, or campaign angle. SEOCopy drafts
            advertorial hooks, story beats, proof sections, SEO metadata, FAQs, and CTA
            variants for pre-sell pages and native ad tests.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/generate?source=advertorial-copy-generator"
              className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
            >
              Generate Advertorial Copy
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
            High-intent use cases
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Built for teams testing story-led acquisition pages.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {sections.map((section) => (
            <article key={section.title} className="rounded-[1.5rem] border border-black/10 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
              <h3 className="text-2xl font-semibold">{section.title}</h3>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{section.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-10">
        <div className="rounded-[2rem] border border-black/10 bg-slate-950 p-8 text-white shadow-[0_30px_110px_rgba(15,23,42,0.18)] dark:border-white/10 md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
            Output checklist
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Everything needed for a first advertorial draft.
          </h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {outputs.map((output) => (
              <li key={output} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-100">
                {output}
              </li>
            ))}
          </ul>
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
