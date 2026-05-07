import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Product Comparison Generator",
  description:
    "Generate product comparison pages, alternative-page copy, competitor tables, SEO metadata, FAQs, and CTAs from rough positioning notes.",
  alternates: {
    canonical: "https://seocopy.vercel.app/product-comparison-generator",
  },
  keywords: [
    "product comparison generator",
    "product comparison page generator",
    "competitor comparison generator",
    "alternative page copy generator",
    "AI product comparison copy",
    "SaaS comparison page generator",
  ],
  openGraph: {
    title: "Product Comparison Generator | SEOCopy",
    description:
      "Turn competitor notes and customer objections into comparison-page copy, SEO snippets, FAQs, and CTAs that help buyers choose faster.",
    url: "https://seocopy.vercel.app/product-comparison-generator",
    type: "website",
  },
};

const comparisonBlocks = [
  {
    label: "Positioning angle",
    body: "Frame the comparison around the job buyers need done, not a generic feature checklist that makes every option look interchangeable.",
  },
  {
    label: "Proof-led table",
    body: "Turn claims, limits, integrations, pricing, support, and switching risks into a scan-friendly table with clear decision criteria.",
  },
  {
    label: "Objection handling",
    body: "Answer the objections prospects search before buying: migration effort, hidden costs, team fit, learning curve, and when the alternative is better.",
  },
];

const outputs = [
  "SEO title and meta description for product comparison or alternative pages",
  "Hero headline, subheadline, and CTA variants focused on switching intent",
  "Comparison table criteria with proof points and customer-friendly labels",
  "FAQ answers for competitor, alternative, pricing, migration, and fit questions",
  "Social preview copy and internal-link anchor text for distribution",
];

const faqs = [
  {
    question: "What is a product comparison page?",
    answer:
      "A product comparison page helps buyers evaluate two or more options by explaining fit, tradeoffs, features, pricing, proof, and switching considerations in one place. It is often used for alternative pages, versus pages, and category comparison content.",
  },
  {
    question: "Can this generate competitor alternative pages?",
    answer:
      "Yes. Add your product, the competitor, audience, differentiators, proof points, and objections. SEOCopy can draft comparison copy, alternative-page positioning, SEO metadata, FAQs, and CTAs that stay focused on buyer intent.",
  },
  {
    question: "How do I keep comparison copy credible?",
    answer:
      "Use verifiable facts, mention tradeoffs honestly, and avoid unsupported superiority claims. A credible comparison page explains who each option is best for and backs recommendations with product proof.",
  },
  {
    question: "How many comparison pages can I generate for free?",
    answer:
      "You can try two free generations without creating an account. After that, buy a single generation for $5 or use the $19/month plan for ongoing comparison-page and SEO copy production.",
  },
];

export default function ProductComparisonGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(239,246,255,0.9))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(30,64,175,0.54))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Product Comparison Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Build comparison pages that turn competitor research into confident buying decisions.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Paste positioning notes, competitor details, product proof, or customer objections. SEOCopy generates comparison-page copy, SEO metadata, tables, FAQs, and CTAs for prospects deciding between options.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=product-comparison-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate Product Comparisons
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
              Comparison output checklist
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
            Comparison page playbook
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Generate product comparison copy around the buying criteria that matter.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {comparisonBlocks.map((item) => (
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
            Faster comparison-page production
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Create SEO comparison copy, tables, FAQs, and CTAs from one competitor brief.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            SEOCopy helps founders and marketers turn messy competitor notes into structured pages for high-intent searches like product alternatives, versus pages, and category comparisons.
          </p>
          <Link
            href="/generate?source=product-comparison-generator-cta"
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
