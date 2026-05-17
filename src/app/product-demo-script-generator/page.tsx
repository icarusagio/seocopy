import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Product Demo Script Generator",
  description:
    "Generate product demo scripts, discovery-to-demo flow, feature proof moments, objection-handling talk tracks, follow-up CTAs, and demo FAQs from one product or sales brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/product-demo-script-generator",
  },
  keywords: [
    "product demo script generator",
    "demo script generator",
    "sales demo script",
    "SaaS demo script",
    "product walkthrough script",
    "demo flow generator",
  ],
  openGraph: {
    title: "Product Demo Script Generator | SEOCopy",
    description:
      "Turn a product, ICP, pain point, and proof into a demo script with opening hooks, feature moments, objection handling, follow-up copy, and CTAs.",
    url: "https://seocopy.vercel.app/product-demo-script-generator",
    type: "website",
  },
};

const demoMoments = [
  {
    label: "SaaS sales demos",
    body: "Connect discovery notes, user pain, product workflows, and proof points into a talk track that keeps prospects moving toward trial, pilot, or purchase.",
  },
  {
    label: "Founder-led walkthroughs",
    body: "Shape a concise demo narrative for launches, onboarding calls, webinars, and async Loom videos without sounding like a feature checklist.",
  },
  {
    label: "Agency and service pitches",
    body: "Translate a service offer or client portal into a proof-led demo flow with objections, handoff notes, and proposal-ready next steps.",
  },
];

const outputs = [
  "Opening hook and agenda aligned to the prospect's pain",
  "Demo flow with feature proof moments and benefit framing",
  "Objection-handling talk tracks for pricing, timing, switching, and trust",
  "Follow-up CTAs for trial, pilot, checkout, proposal, or next call",
  "Demo recap, FAQ prompts, and post-demo email snippets",
];

const faqs = [
  {
    question: "What is a product demo script generator?",
    answer:
      "A product demo script generator turns a product, audience, pain point, and proof brief into a structured sales demo: opening hook, agenda, feature walkthrough, objection handling, recap, and next-step CTAs.",
  },
  {
    question: "Can SEOCopy write demo flow and objection-handling talk tracks?",
    answer:
      "Yes. SEOCopy can draft demo flow, discovery-to-demo transitions, feature proof moments, objection-handling talk tracks, FAQ prompts, and follow-up CTAs from one rough product or sales brief.",
  },
  {
    question: "Who should use a product demo script generator?",
    answer:
      "Founders, SaaS teams, agencies, Shopify app builders, sales teams, and marketers can use it to make live demos, async walkthroughs, onboarding calls, and sales webinars more persuasive.",
  },
  {
    question: "How many product demo scripts can I generate for free?",
    answer:
      "You can try two free generations without creating an account. After that, buy a single generation for $5 or use the $19/month plan for ongoing demo, sales, and SEO copy production.",
  },
];

export default function ProductDemoScriptGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,253,245,0.86))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(8,47,73,0.72))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Product Demo Script Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate product demo scripts that turn feature walkthroughs into revenue-focused sales conversations.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Paste a product, target buyer, pain point, proof, and call goal. SEOCopy returns product demo scripts with a demo flow, benefit-led feature moments, objection-handling talk tracks, follow-up CTAs, FAQs, and post-demo copy.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=product-demo-script-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate a Product Demo Script
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
              Demo output checklist
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
            Demo-ready talk tracks
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Build product demos for SaaS calls, founder walkthroughs, async videos, and sales-led offers.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {demoMoments.map((item) => (
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
            Faster demo prep
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Move from product notes to a clear demo narrative, buyer objections, and next-step copy.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            SEOCopy keeps demos anchored to buyer outcomes. Each generation helps you introduce the pain, show the right proof, handle concerns, and ask for the next revenue-producing step without rebuilding the talk track from scratch.
          </p>
          <Link
            href="/generate?source=product-demo-script-generator-cta"
            className="mt-8 inline-flex rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            Try Two Free Generations
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight">Product demo script generator questions</h2>
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
