import type { Metadata } from "next";
import Link from "next/link";

const route = "/content-brief-generator";
const canonical = `https://seocopy.vercel.app${route}`;

export const metadata: Metadata = {
  title: "Content Brief Generator",
  description:
    "Generate SEO content briefs with search intent, outlines, metadata, FAQ ideas, internal link angles, and conversion CTAs from one topic or keyword.",
  alternates: {
    canonical,
  },
  keywords: [
    "content brief generator",
    "SEO content brief generator",
    "AI content brief generator",
    "blog content brief generator",
    "content outline brief generator",
    "content marketing brief generator",
  ],
  openGraph: {
    title: "Content Brief Generator | SEOCopy",
    description:
      "Turn a keyword, URL, or rough topic into a structured SEO content brief with outline, metadata, FAQs, internal-link ideas, and CTAs.",
    url: canonical,
    type: "website",
  },
};

const outputBlocks = [
  {
    label: "Search intent",
    title: "Clarify the job every article needs to satisfy",
    body: "Translate a rough keyword into the likely reader intent, angle, promise, objections, and conversion action before anyone drafts the page.",
  },
  {
    label: "Brief-ready structure",
    title: "Outline sections, FAQs, and proof points in one pass",
    body: "Create H2s, supporting bullets, expert-note prompts, FAQ ideas, and metadata so writers can move from assignment to draft faster.",
  },
  {
    label: "SEO and funnel fit",
    title: "Connect content to internal links and next-step CTAs",
    body: "Pair the content brief with title tags, meta descriptions, internal-link suggestions, social previews, and CTA variants that support acquisition and signup.",
  },
];

const workflow = [
  "Enter the keyword, topic, target audience, product angle, competitors, and conversion goal for the content asset.",
  "Add must-cover points, internal pages to mention, proof sources, and tone constraints for the writer or founder.",
  "Generate a content brief with search intent, H2 outline, FAQs, metadata, social preview copy, and CTA variants.",
  "Hand the brief to a writer, use it as a first draft scaffold, or reuse the snippets for landing pages and campaigns.",
];

const examples = [
  "SEO content brief for a Shopify back-in-stock alerts guide",
  "Content brief for a SaaS comparison page targeting switchers",
  "Blog assignment brief for a local service business pricing guide",
  "Founder-led content outline for an AI SEO workflow tutorial",
];

const faqs = [
  {
    question: "What is a content brief generator?",
    answer:
      "A content brief generator turns a keyword, topic, audience, and business goal into a structured assignment with search intent, outline sections, talking points, metadata, FAQs, internal-link ideas, and CTAs.",
  },
  {
    question: "Can SEOCopy create SEO content briefs for blog posts?",
    answer:
      "Yes. SEOCopy can generate blog content briefs with SEO titles, meta descriptions, H2 outlines, FAQ ideas, social previews, proof prompts, and conversion-focused CTA variants.",
  },
  {
    question: "What inputs make the best content brief?",
    answer:
      "Use the target keyword, reader persona, business offer, desired next step, competitor examples, must-cover points, internal links, and proof sources you want the writer to include.",
  },
  {
    question: "How many free content brief generations are included?",
    answer:
      "You can run two free generations without an account. After that, buy a single paid generation for $5 or use the $19/month plan for ongoing SEO briefs, metadata, and landing page copy.",
  },
];

export default function ContentBriefGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,254,255,0.88))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(22,78,99,0.58))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Content Brief Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate SEO content briefs that writers can turn into publishable pages.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy turns a keyword, topic, or URL into search intent, outline sections, metadata, FAQ ideas, internal-link angles, and CTA variants so every assignment has a revenue-focused plan.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=content-brief-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate a Content Brief
              </Link>
              <a
                href="#examples"
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950 dark:border-white/15 dark:text-slate-200 dark:hover:border-white dark:hover:text-white"
              >
                See Brief Examples
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
            Content brief assets included
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            One topic brief, a complete SEO assignment for acquisition content.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {outputBlocks.map((item) => (
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
            Example content assignments
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Turn scattered topic notes into briefs with clear search intent, structure, proof, and conversion goals.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {examples.map((example) => (
              <div key={example} className="rounded-2xl border border-white/10 bg-white/5 p-5 font-medium">
                {example}
              </div>
            ))}
          </div>
          <Link
            href="/generate?source=content-brief-generator-cta"
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
