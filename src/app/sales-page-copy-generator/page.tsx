import type { Metadata } from "next";
import Link from "next/link";

const route = "/sales-page-copy-generator";
const canonical = `https://seocopy.vercel.app${route}`;

export const metadata: Metadata = {
  title: "Sales Page Copy Generator",
  description:
    "Generate long-form sales page headlines, offer sections, proof blocks, objection handling, FAQ copy, SEO metadata, and CTA variants from one product brief.",
  alternates: {
    canonical,
  },
  keywords: [
    "sales page copy generator",
    "AI sales page copy generator",
    "long form sales page generator",
    "sales page headline generator",
    "offer page copy generator",
    "sales page CTA generator",
  ],
  openGraph: {
    title: "Sales Page Copy Generator | SEOCopy",
    description:
      "Turn an offer brief into a conversion-focused sales page with headlines, proof, objection handling, FAQs, SEO snippets, and CTAs.",
    url: canonical,
    type: "website",
  },
};

const outputBlocks = [
  {
    label: "Offer positioning",
    title: "Clarify the promise before writing the page",
    body: "Generate a high-intent headline, subheadline, audience fit, problem framing, transformation promise, and offer summary from one rough product or service brief.",
  },
  {
    label: "Conversion sections",
    title: "Build the page body with proof and momentum",
    body: "Create benefit sections, feature-to-outcome copy, social proof blocks, guarantee language, pricing rationale, and CTA transitions for visitors comparing whether to buy.",
  },
  {
    label: "SEO and objections",
    title: "Answer search intent and purchase friction",
    body: "Get SEO titles, meta descriptions, FAQ answers, objection-handling snippets, and social preview copy so the sales page can rank, persuade, and be shared.",
  },
];

const workflow = [
  "Paste the offer, target buyer, pain point, promised outcome, price, proof, guarantee, and primary conversion goal.",
  "Add objections, differentiators, competitors, testimonials, keywords, tone, and whether the offer is SaaS, service, course, template, or ecommerce.",
  "Generate the sales page structure, headline stack, proof sections, objection handling, FAQ, SEO metadata, and CTA variants.",
  "Publish the strongest page, wire the CTA to checkout or demo booking, and reuse the same snippets in ads, email, and social posts.",
];

const examples = [
  "Sales page for a $19/month AI SEO copy tool",
  "Offer page for a Shopify retention app with a free tier",
  "Service sales page for a local SEO agency package",
  "Course sales page for a founder-led growth workshop",
];

const faqs = [
  {
    question: "What is a sales page copy generator?",
    answer:
      "A sales page copy generator turns an offer brief, buyer pain, proof, pricing, objections, and desired CTA into copy for a page designed to convert qualified visitors into customers or booked calls.",
  },
  {
    question: "Can SEOCopy write long-form sales page copy?",
    answer:
      "Yes. SEOCopy can generate sales page headlines, subheadlines, problem sections, benefit blocks, proof snippets, pricing rationale, FAQs, SEO metadata, social previews, and CTA variants from one offer brief.",
  },
  {
    question: "What inputs create the best sales page output?",
    answer:
      "Use the target buyer, painful problem, promised outcome, product or service details, price, guarantee, proof, objections, competitors, keywords, tone, and the conversion action you want the page to drive.",
  },
  {
    question: "Can I use this for SaaS, services, courses, and ecommerce offers?",
    answer:
      "Yes. The generator works for SaaS plans, productized services, coaching or course offers, templates, ecommerce bundles, and other offers that need a persuasive page plus SEO snippets.",
  },
];

export default function SalesPageCopyGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,254,255,0.88))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(22,78,99,0.58))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Sales Page Copy Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate sales page copy that turns offer interest into revenue.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy turns an offer brief into sales page headlines, proof sections, objection handling, FAQ copy, SEO metadata, social previews, and CTA variants so you can launch paid offers faster.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=sales-page-copy-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate Sales Page Copy
              </Link>
              <a
                href="#examples"
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950 dark:border-white/15 dark:text-slate-200 dark:hover:border-white dark:hover:text-white"
              >
                See Sales Page Examples
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
            Sales page copy included
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            One offer brief, every section needed to move buyers toward checkout.
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
            Example sales page briefs
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Draft a stronger revenue page from the buyer, promise, proof, offer, and CTA you already have.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {examples.map((example) => (
              <div key={example} className="rounded-2xl border border-white/10 bg-white/5 p-5 font-medium">
                {example}
              </div>
            ))}
          </div>
          <Link
            href="/generate?source=sales-page-copy-generator-cta"
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
