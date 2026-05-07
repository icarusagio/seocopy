import type { Metadata } from "next";
import Link from "next/link";

const route = "copywriting-generator";
const canonical = `https://seocopy.vercel.app/${route}`;

export const metadata: Metadata = {
  title: "Copywriting Generator",
  description:
    "Generate conversion-focused copywriting, SEO snippets, landing page angles, social previews, and CTA variants from one product or campaign brief.",
  alternates: {
    canonical,
  },
  keywords: [
    "copywriting generator",
    "AI copywriting generator",
    "website copywriting generator",
    "marketing copywriting generator",
    "sales copy generator",
    "SEO copywriting generator",
  ],
  openGraph: {
    title: "Copywriting Generator | SEOCopy",
    description:
      "Turn a rough offer, audience, proof, and goal into sharper copywriting for pages, ads, email, search snippets, and CTAs.",
    url: canonical,
    type: "website",
  },
};

const deliverables = [
  {
    label: "Page copy",
    title: "Clarify the promise before visitors bounce",
    body: "Generate headlines, subheadlines, benefit sections, proof bullets, objection reducers, and CTA copy for homepages, landing pages, and sales pages.",
  },
  {
    label: "Search snippets",
    title: "Make the same angle visible in Google",
    body: "Draft SEO title tags, meta descriptions, FAQ ideas, Open Graph copy, and page summaries that keep the promise consistent from search to click.",
  },
  {
    label: "Campaign variants",
    title: "Repurpose the winning message across channels",
    body: "Create ad hooks, email subject lines, social captions, short promos, and CTA variants from the same campaign brief.",
  },
];

const workflow = [
  "Describe the product, audience, pain, outcome, differentiator, proof, and conversion goal.",
  "Add the page type, primary keyword, tone, objections, compliance limits, and any examples to emulate or avoid.",
  "Generate copywriting angles, page sections, SEO snippets, FAQ ideas, social previews, and CTA variants.",
  "Ship the strongest message across your website, search snippet, ads, emails, and launch assets.",
];

const examples = [
  {
    brief: "AI SEO copy tool for solo founders",
    output:
      "Launch search-ready pages in minutes, not after another week of staring at a blank doc.",
  },
  {
    brief: "Shopify back-in-stock alerts app",
    output:
      "Bring shoppers back the moment inventory returns and recover revenue that would otherwise disappear.",
  },
  {
    brief: "Consulting offer for onboarding teams",
    output:
      "Turn scattered onboarding notes into a repeatable customer system your team can run every week.",
  },
];

const faqs = [
  {
    question: "What is a copywriting generator?",
    answer:
      "A copywriting generator turns a product, audience, pain point, proof point, and conversion goal into draft marketing copy for pages, ads, emails, search snippets, and CTAs.",
  },
  {
    question: "Can SEOCopy generate SEO copywriting too?",
    answer:
      "Yes. SEOCopy can generate title tags, meta descriptions, FAQ ideas, Open Graph copy, landing page sections, social previews, and CTA variants from the same brief.",
  },
  {
    question: "Who should use an AI copywriting generator?",
    answer:
      "Founders, agencies, ecommerce teams, consultants, creators, and small businesses can use it to move from a rough offer brief to testable copy faster.",
  },
  {
    question: "How much does SEOCopy cost?",
    answer:
      "You can run two free generations without creating an account. After that, buy one additional generation for $5 or use the $19/month plan for ongoing SEO and copy production.",
  },
];

export default function CopywritingGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,253,245,0.9))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(22,78,99,0.6))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Copywriting Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate copywriting that gives every page a clearer reason to click.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy turns your offer, audience, proof, and campaign goal into conversion-focused copywriting, SEO snippets, FAQ ideas, social previews, and CTA variants ready for faster testing.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=copywriting-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate copywriting
              </Link>
              <a
                href="#examples"
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950 dark:border-white/15 dark:text-slate-200 dark:hover:border-white dark:hover:text-white"
              >
                See examples
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/10 bg-white/85 p-7 shadow-[0_24px_80px_rgba(15,23,42,0.1)] dark:border-white/10 dark:bg-white/5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-700 dark:text-cyan-300">
              From brief to reusable message
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
            Copywriting deliverables
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            One brief, many revenue surfaces.
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

      <section id="examples" className="mx-auto max-w-6xl px-6 pb-20 lg:px-10">
        <div className="rounded-[2rem] border border-black/10 bg-slate-950 p-8 text-white shadow-[0_24px_80px_rgba(15,23,42,0.14)] dark:border-white/10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
            Copywriting examples
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Move from a generic draft to a buyer-specific reason to act.
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {examples.map((example) => (
              <article key={example.brief} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">Brief</p>
                <p className="mt-2 font-semibold">{example.brief}</p>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">Copy angle</p>
                <p className="mt-2 leading-7 text-slate-300">{example.output}</p>
              </article>
            ))}
          </div>
          <Link
            href="/generate?source=copywriting-generator"
            className="mt-8 inline-flex rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            Generate your copy
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-6xl px-6 pb-24 lg:px-10">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-300">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Copywriting generator questions
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
