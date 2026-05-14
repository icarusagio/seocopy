import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "B2B Landing Page Copy Generator",
  description:
    "Generate B2B landing page headlines, demo CTAs, proof sections, objection handling, SEO snippets, and sales-ready follow-up copy from one offer brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/b2b-landing-page-copy-generator",
  },
  keywords: [
    "B2B landing page copy generator",
    "B2B copy generator",
    "B2B landing page generator",
    "demo page copy generator",
    "AI B2B copywriter",
    "lead generation landing page copy",
  ],
  openGraph: {
    title: "B2B Landing Page Copy Generator | SEOCopy",
    description:
      "Turn a B2B offer, ICP, proof points, and objections into demo-focused landing page copy with SEO metadata, FAQs, and sales CTAs.",
    url: "https://seocopy.vercel.app/b2b-landing-page-copy-generator",
    type: "website",
  },
};

const b2bSections = [
  {
    label: "ICP-specific messaging",
    body: "Translate the target account, buyer role, pain, trigger, and use case into headlines that sound specific instead of generic.",
  },
  {
    label: "Proof-led conversion",
    body: "Shape outcome bullets, customer proof, risk reducers, and objection answers around the next action: book a demo, start a trial, or request pricing.",
  },
  {
    label: "Sales-ready follow-up",
    body: "Generate page copy plus email, LinkedIn, and retargeting snippets so the same positioning can support the entire pipeline motion.",
  },
];

const outputs = [
  "Hero headline, subheadline, and demo CTA variants for B2B buyers",
  "Problem, solution, proof, use-case, and objection-handling sections",
  "SEO title, meta description, Open Graph copy, and FAQ prompts",
  "Sales enablement snippets for follow-up emails and LinkedIn outreach",
  "Pricing, trial, or demo page CTAs matched to the buying motion",
];

const faqs = [
  {
    question: "What is a B2B landing page copy generator?",
    answer:
      "A B2B landing page copy generator turns an offer brief, buyer persona, proof points, and objections into page sections, SEO snippets, FAQs, and CTAs designed for demo, trial, or lead-generation pages.",
  },
  {
    question: "Can SEOCopy write copy for demo request pages?",
    answer:
      "Yes. SEOCopy can create demo-focused hero copy, benefit sections, proof bullets, objection reducers, FAQ answers, and follow-up snippets for sales-led or hybrid B2B funnels.",
  },
  {
    question: "What should I include in the B2B copy brief?",
    answer:
      "Include the target industry, buyer role, problem, product promise, differentiators, customer proof, pricing motion, and desired next step. Short rough notes are enough to start.",
  },
  {
    question: "How many B2B landing page copy generations are free?",
    answer:
      "You can try two free generations without signing up. After that, buy one generation for $5 or use the $19/month plan for ongoing landing page and campaign copy.",
  },
];

export default function B2BLandingPageCopyGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(239,246,255,0.9))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(30,64,175,0.5))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              B2B Landing Page Copy Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate B2B landing page copy built to turn qualified buyers into pipeline.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Paste a B2B offer, target account profile, proof points, and objections. SEOCopy turns the brief into demo-focused headlines, page sections, SEO metadata, FAQs, and sales-ready follow-up copy.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=b2b-landing-page-copy-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate B2B Landing Page Copy
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
              B2B output checklist
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
            B2B conversion angles
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Build a landing page around buyer specificity, proof, and the next sales action.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {b2bSections.map((item) => (
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
            From sales notes to page-ready pipeline copy
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Turn ICP notes, objections, and proof into a focused landing page brief in minutes.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            SEOCopy helps B2B teams ship sharper pages without waiting on a full copywriting cycle. Use it for demo pages, trial pages, webinar follow-up, paid search tests, and account-based campaign pages.
          </p>
          <Link
            href="/generate?source=b2b-landing-page-copy-generator-cta"
            className="mt-8 inline-flex rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            Try Two Free Generations
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight">B2B landing page copy generator questions</h2>
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
