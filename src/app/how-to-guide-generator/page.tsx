import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How-To Guide Generator",
  description:
    "Generate how-to guides, step-by-step tutorial sections, instructional SEO outlines, FAQ schema prompts, and conversion CTAs from one product or process brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/how-to-guide-generator",
  },
  keywords: [
    "how-to guide generator",
    "how to article generator",
    "tutorial outline generator",
    "step by step guide generator",
    "instructional content generator",
    "how-to SEO copy generator",
  ],
  openGraph: {
    title: "How-To Guide Generator | SEOCopy",
    description:
      "Turn a product workflow, service process, or tutorial idea into a search-ready how-to guide outline, steps, FAQs, metadata, and CTAs.",
    url: "https://seocopy.vercel.app/how-to-guide-generator",
    type: "website",
  },
};

const guideTypes = [
  {
    label: "Product tutorials",
    body: "Map product setup, feature walkthroughs, onboarding steps, and troubleshooting tips into tutorial sections that can rank and convert.",
  },
  {
    label: "Service process guides",
    body: "Explain consulting, local-service, or agency processes with step-by-step sections, decision points, proof snippets, and lead-generation CTAs.",
  },
  {
    label: "Educational SEO articles",
    body: "Create instructional SEO outline blocks with search-intent intros, H2s, FAQs, schema prompts, and internal-link suggestions.",
  },
];

const outputs = [
  "Search-intent introduction and instructional SEO outline",
  "Step-by-step tutorial sections with task-focused headings",
  "Required materials, prerequisites, and common mistake callouts",
  "FAQ schema prompts for questions readers ask before taking action",
  "Metadata, social preview copy, and conversion CTAs for the next step",
];

const faqs = [
  {
    question: "What is a how-to guide generator?",
    answer:
      "A how-to guide generator turns a product, service, or process brief into structured tutorial copy: an intro, prerequisites, numbered steps, FAQs, metadata, and next-step CTAs.",
  },
  {
    question: "Can SEOCopy create step-by-step tutorial sections?",
    answer:
      "Yes. SEOCopy can draft step-by-step tutorial sections, instructional SEO outline ideas, common mistake notes, FAQ schema prompts, and conversion copy from one rough workflow brief.",
  },
  {
    question: "Who should use a how-to guide generator?",
    answer:
      "Founders, Shopify merchants, SaaS teams, agencies, local businesses, and content marketers can use it to publish practical guides that answer search intent and point readers toward a product, demo, quote, or signup.",
  },
  {
    question: "How many how-to guide drafts can I generate for free?",
    answer:
      "You can try two free generations without creating an account. After that, buy a single generation for $5 or use the $19/month plan for ongoing SEO copy and tutorial production.",
  },
];

export default function HowToGuideGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,253,245,0.86))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(8,47,73,0.72))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              How-To Guide Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate how-to guides that turn expertise into searchable, actionable tutorial pages.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Paste a product workflow, service process, onboarding task, or educational topic. SEOCopy returns how-to guides with step-by-step tutorial sections, an instructional SEO outline, FAQ schema prompts, metadata, and CTAs that move readers to the next action.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=how-to-guide-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate a How-To Guide
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
              Tutorial output checklist
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
            How-to playbooks
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Create practical tutorials for product education, service pages, and search-driven content.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {guideTypes.map((item) => (
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
            Faster educational content
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Go from rough expertise to a publishable guide structure, FAQs, metadata, and next-step copy.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            SEOCopy keeps instructional content tied to business goals. Each generation helps you answer a specific search query, reduce support friction, and guide readers toward signup, checkout, demo, quote, or contact actions.
          </p>
          <Link
            href="/generate?source=how-to-guide-generator-cta"
            className="mt-8 inline-flex rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            Try Two Free Generations
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight">How-to guide generator questions</h2>
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
