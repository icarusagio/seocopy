import type { Metadata } from "next";
import Link from "next/link";

const route = "/value-proposition-generator";
const canonical = `https://seocopy.vercel.app${route}`;

export const metadata: Metadata = {
  title: "Value Proposition Generator",
  description:
    "Generate clear value propositions, homepage hero copy, SEO snippets, proof bullets, and CTA variants from one product or offer brief.",
  alternates: {
    canonical,
  },
  keywords: [
    "value proposition generator",
    "AI value proposition generator",
    "unique value proposition generator",
    "homepage value proposition generator",
    "startup value proposition generator",
    "SaaS value proposition generator",
  ],
  openGraph: {
    title: "Value Proposition Generator | SEOCopy",
    description:
      "Turn a rough offer into crisp positioning, homepage hero copy, SEO metadata, proof bullets, and conversion-ready CTA variants.",
    url: canonical,
    type: "website",
  },
};

const outputBlocks = [
  {
    label: "Positioning clarity",
    title: "Say who it is for, what it does, and why it matters",
    body: "Convert messy product notes into a concise value proposition that names the buyer, the painful job, the outcome, and the reason to believe.",
  },
  {
    label: "Homepage-ready copy",
    title: "Create hero headlines, subheads, and proof bullets",
    body: "Generate copy blocks that can be pasted into a homepage, landing page, pitch deck, or sales one-pager without starting from a blank page.",
  },
  {
    label: "SEO and conversion support",
    title: "Pair positioning with snippets and CTA angles",
    body: "Package every value proposition with SEO titles, meta descriptions, social previews, objections, and CTAs that move buyers toward signup or checkout.",
  },
];

const workflow = [
  "Describe the product, buyer, painful job, current alternative, proof points, and desired conversion action.",
  "Add tone, differentiation, category, and any must-use keywords for homepage or search positioning.",
  "Generate value proposition options plus hero copy, metadata, social previews, proof bullets, and CTAs.",
  "Pick the strongest angle, test it on the page, and reuse the snippets across ads, listings, and outbound.",
];

const examples = [
  "Value proposition for a Shopify app that recovers out-of-stock demand",
  "Homepage positioning for a founder-led AI SEO tool",
  "SaaS hero copy for a B2B workflow automation product",
  "Agency offer statement for a local service landing page",
];

const faqs = [
  {
    question: "What is a value proposition generator?",
    answer:
      "A value proposition generator turns product, audience, differentiation, proof, and outcome notes into concise positioning statements that explain why a buyer should care and what action to take next.",
  },
  {
    question: "Can SEOCopy generate value propositions for landing pages?",
    answer:
      "Yes. SEOCopy can generate value proposition options along with homepage hero headlines, subheadlines, proof bullets, SEO titles, meta descriptions, social preview copy, and CTA variants.",
  },
  {
    question: "What inputs make the best value proposition?",
    answer:
      "Use the target customer, painful problem, desired outcome, product category, current alternative, differentiation, proof points, and the action you want visitors to take.",
  },
  {
    question: "How many free value proposition generations are included?",
    answer:
      "You can run two free generations without an account. After that, buy a single paid generation for $5 or use the $19/month plan for ongoing positioning, SEO, and landing page copy production.",
  },
];

export default function ValuePropositionGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,254,255,0.88))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(22,78,99,0.58))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Value Proposition Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate value propositions that make your offer obvious and compelling.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy turns a product brief into crisp positioning, homepage hero copy, SEO metadata, social preview text, proof bullets, and CTA variants so buyers understand why to act now.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=value-proposition-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate a Value Proposition
              </Link>
              <a
                href="#examples"
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950 dark:border-white/15 dark:text-slate-200 dark:hover:border-white dark:hover:text-white"
              >
                See Positioning Examples
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
            Positioning copy included
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            One offer brief, multiple ways to explain the value fast.
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
            Example positioning briefs
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Draft clearer positioning from the audience, problem, outcome, proof, and CTA you already have.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {examples.map((example) => (
              <div key={example} className="rounded-2xl border border-white/10 bg-white/5 p-5 font-medium">
                {example}
              </div>
            ))}
          </div>
          <Link
            href="/generate?source=value-proposition-generator-cta"
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
