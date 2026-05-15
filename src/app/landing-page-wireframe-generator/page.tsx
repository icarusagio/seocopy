import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Landing Page Wireframe Generator",
  description:
    "Generate landing page wireframes, section layout blocks, above-the-fold structure, conversion-ready wireframe notes, FAQs, and CTA direction from one offer brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/landing-page-wireframe-generator",
  },
  keywords: [
    "landing page wireframe generator",
    "landing page wireframes",
    "section layout blocks",
    "above the fold structure",
    "conversion-ready wireframe notes",
    "landing page layout generator",
    "wireframe copy generator",
    "landing page structure",
  ],
  openGraph: {
    title: "Landing Page Wireframe Generator | SEOCopy",
    description:
      "Turn an offer brief into landing page wireframes, section layout blocks, above-the-fold structure, conversion-ready wireframe notes, and CTA-ready page direction.",
    url: "https://seocopy.vercel.app/landing-page-wireframe-generator",
    type: "website",
  },
};

const wireframeBlocks = [
  {
    label: "Above-the-fold structure",
    body: "Map the hero headline, proof cue, primary CTA, supporting visual, and first objection reducer before the visitor scrolls.",
  },
  {
    label: "Section layout blocks",
    body: "Turn a rough offer into ordered sections for pain, outcome, features, proof, FAQ, comparison, pricing, and conversion CTAs.",
  },
  {
    label: "Conversion-ready wireframe notes",
    body: "Add notes for what each block must prove, which CTA belongs there, and what copy angle should move the buyer to the next step.",
  },
];

const outputs = [
  "Landing page wireframes for SaaS launches, Shopify apps, creator products, agencies, lead magnets, and service offers",
  "Section layout blocks that show the order of hero, proof, problem, solution, features, outcomes, FAQs, and CTA zones",
  "Above-the-fold structure with headline angle, subheadline promise, proof cue, primary action, and visual direction",
  "Conversion-ready wireframe notes for designer handoff, copy briefs, A/B tests, and no-code page builds",
  "CTA and internal-link prompts that connect each section to the next conversion step instead of leaving the page as a static outline",
];

const faqs = [
  {
    question: "What is a landing page wireframe generator?",
    answer:
      "A landing page wireframe generator turns an offer brief into landing page wireframes, section layout blocks, above-the-fold structure, conversion-ready wireframe notes, FAQ direction, and CTA placement for a page build.",
  },
  {
    question: "How is this different from a landing page outline generator?",
    answer:
      "A landing page outline focuses on the written page plan and section topics. This landing page wireframe generator adds layout thinking: hero composition, block order, proof placement, visual notes, and CTA locations for designers and no-code builders.",
  },
  {
    question: "Can I use this before writing final landing page copy?",
    answer:
      "Yes. Use the wireframe first to decide what the page must prove, where each CTA belongs, and what information each section needs. Then use SEOCopy to generate final headlines, SEO snippets, FAQ answers, and conversion copy from the same brief.",
  },
  {
    question: "How many landing page wireframe generations are free?",
    answer:
      "You can try two free generations with no signup. After that, buy one generation for $5 or use the $19/month plan for ongoing SEO, landing page, product, email, and conversion copy.",
  },
];

export default function LandingPageWireframeGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,253,245,0.92))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(5,150,105,0.32))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-800 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-200">
              Landing Page Wireframe Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Plan a landing page wireframe before designers or builders start guessing.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Paste the offer, audience, proof, objections, pricing, and conversion goal. SEOCopy creates landing page wireframes, section layout blocks, above-the-fold structure, conversion-ready wireframe notes, and CTA direction from one brief.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=landing-page-wireframe-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-emerald-300 dark:text-slate-950 dark:hover:bg-emerald-200"
              >
                Generate a Landing Page Wireframe
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
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700 dark:text-emerald-300">
              Wireframe output checklist
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
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700 dark:text-emerald-300">
            Build-ready page planning
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Give founders, marketers, designers, and no-code builders a page map that explains what every section must do.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {wireframeBlocks.map((item) => (
            <article key={item.label} className="rounded-[1.5rem] border border-black/10 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700 dark:text-emerald-300">
                {item.label}
              </p>
              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-10">
        <div className="rounded-[2rem] border border-black/10 bg-slate-950 p-8 text-white shadow-[0_24px_80px_rgba(15,23,42,0.14)] dark:border-white/10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-200">
            From brief to build plan
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Ship stronger landing pages by clarifying structure before writing every final word.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            SEOCopy helps teams turn messy offer notes into a practical wireframe: what appears first, which proof goes where, what objections need answers, and how each CTA moves visitors toward signup, checkout, booking, or demo.
          </p>
          <Link
            href="/generate?source=landing-page-wireframe-generator-cta"
            className="mt-8 inline-flex rounded-full bg-emerald-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-200"
          >
            Try Two Free Generations
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight">Landing page wireframe questions</h2>
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
