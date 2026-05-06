import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Feature Benefit Generator",
  description:
    "Turn product features into buyer-focused benefits, proof bullets, objection reducers, CTA angles, and SEO snippets for landing pages, product pages, and campaigns.",
  alternates: {
    canonical: "https://seocopy.vercel.app/feature-benefit-generator",
  },
  keywords: [
    "feature benefit generator",
    "features to benefits generator",
    "benefit statement generator",
    "product benefit generator",
    "marketing benefit copy generator",
    "AI benefit bullet generator",
  ],
  openGraph: {
    title: "Feature Benefit Generator | SEOCopy",
    description:
      "Convert raw product features into customer benefits, proof-led bullets, landing page sections, SEO snippets, and CTA angles that explain why buyers should care.",
    url: "https://seocopy.vercel.app/feature-benefit-generator",
    type: "website",
  },
};

const outputs = [
  {
    label: "Feature translation",
    title: "Turn specs into buyer outcomes",
    body: "Paste a product feature, service detail, or technical capability and get benefit statements that connect the detail to time saved, revenue gained, risk reduced, or effort removed.",
  },
  {
    label: "Conversion bullets",
    title: "Explain why the feature matters",
    body: "Generate benefit bullets, proof prompts, objection reducers, and supporting microcopy that make landing pages and product pages easier to scan.",
  },
  {
    label: "SEO-ready angles",
    title: "Package the benefit for search and social",
    body: "Create title tags, meta descriptions, OG copy, FAQ ideas, and CTA variants that keep the buyer benefit visible from snippet to page.",
  },
];

const workflow = [
  "List the features, specs, services, integrations, or capabilities buyers currently skim past.",
  "Add the audience, job-to-be-done, pain points, proof, and any keyword the page should support.",
  "Generate benefit statements, conversion bullets, objection reducers, SEO snippets, and CTA options.",
  "Use the strongest benefit angle on your homepage, product page, pricing page, sales page, or campaign landing page.",
];

const examples = [
  {
    feature: "Automated inventory alerts",
    benefit: "Recover sales while shoppers are still ready to buy, without manually checking stock or sending one-off emails.",
  },
  {
    feature: "Shared team dashboard",
    benefit: "Keep marketing, sales, and support aligned on the same customer story before campaigns go live.",
  },
  {
    feature: "One-click export",
    benefit: "Move approved copy into your CMS faster and reduce the handoff friction that delays launches.",
  },
];

const faqs = [
  {
    question: "What is a feature benefit generator?",
    answer:
      "A feature benefit generator rewrites product features, service details, or technical specs into customer-facing benefits that explain the outcome buyers get from each capability.",
  },
  {
    question: "Can SEOCopy create benefit bullets for landing pages?",
    answer:
      "Yes. SEOCopy generates benefit bullets, proof prompts, objection reducers, CTA variants, SEO titles, meta descriptions, and FAQ ideas from the same feature brief.",
  },
  {
    question: "Who should use a features to benefits workflow?",
    answer:
      "Founders, marketers, agencies, SaaS teams, Shopify merchants, and sales teams can use it when product pages, launch pages, and pitch decks feel too feature-heavy.",
  },
  {
    question: "How many feature benefit briefs can I generate for free?",
    answer:
      "You can run two free generations without an account. After that, buy one additional generation for $5 or use the $19/month plan for ongoing SEO and copy production.",
  },
];

export default function FeatureBenefitGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,253,245,0.9))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(22,78,99,0.6))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Feature Benefit Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Turn product features into benefits buyers understand.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy converts raw features, specs, integrations, and service details into buyer-focused benefits, proof bullets, objection reducers, SEO snippets, and CTA angles for copy that sells the outcome.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=feature-benefit-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate Feature Benefits
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
              From feature list to benefit-led copy
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
            Benefit-led deliverables
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            One feature brief, clearer reasons to buy.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {outputs.map((item) => (
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
            Feature-to-benefit examples
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Move from what it does to why the buyer should care.
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {examples.map((example) => (
              <article key={example.feature} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">Feature</p>
                <p className="mt-2 font-semibold">{example.feature}</p>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">Benefit</p>
                <p className="mt-2 leading-7 text-slate-300">{example.benefit}</p>
              </article>
            ))}
          </div>
          <Link
            href="/generate?source=feature-benefit-generator"
            className="mt-8 inline-flex rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            Generate benefit-focused copy
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-6xl px-6 pb-24 lg:px-10">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-300">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Feature benefit generator questions
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
