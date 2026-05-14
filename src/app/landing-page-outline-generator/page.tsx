import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Landing Page Outline Generator",
  description:
    "Generate a landing page outline, section-by-section page plan, conversion flow, wireframe-ready copy brief, SEO snippets, FAQs, and CTAs from one offer brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/landing-page-outline-generator",
  },
  keywords: [
    "landing page outline generator",
    "AI landing page outline generator",
    "landing page wireframe copy brief",
    "landing page structure generator",
    "conversion flow generator",
    "landing page content plan",
  ],
  openGraph: {
    title: "Landing Page Outline Generator | SEOCopy",
    description:
      "Turn an offer, audience, and goal into a section-by-section landing page outline, conversion flow, SEO metadata, FAQ prompts, and CTA direction.",
    url: "https://seocopy.vercel.app/landing-page-outline-generator",
    type: "website",
  },
};

const outlineAngles = [
  {
    label: "Section-by-section page plan",
    body: "Map your hero, proof, problem, solution, feature-benefit, offer, FAQ, and close sections before writing final copy.",
  },
  {
    label: "Conversion flow",
    body: "Sequence objections, proof, and CTAs around the action you want: demo requests, trial starts, downloads, purchases, or waitlist joins.",
  },
  {
    label: "Wireframe-ready copy brief",
    body: "Give designers, founders, and copywriters a clear outline with notes for headlines, supporting bullets, modules, and CTA placement.",
  },
];

const outputs = [
  "Landing page outline with hero, proof, problem, solution, offer, FAQ, and final CTA sections",
  "Section-by-section page plan that explains each module's conversion job",
  "Wireframe-ready copy brief for founders, designers, marketers, and agencies",
  "SEO title, meta description, Open Graph copy, and search-intent notes",
  "FAQ prompts, objection-handling ideas, and CTA variants for the page flow",
];

const faqs = [
  {
    question: "What is a landing page outline generator?",
    answer:
      "A landing page outline generator turns an offer brief, audience, page goal, and proof points into a section-by-section page plan with conversion flow notes, SEO snippets, FAQs, and CTA direction.",
  },
  {
    question: "How is this different from a landing page copy generator?",
    answer:
      "The outline generator focuses on page structure before final copy. It helps you decide what sections the page needs, how the message should flow, what proof to include, and where CTAs should appear.",
  },
  {
    question: "Can I use the outline for a wireframe?",
    answer:
      "Yes. The output is designed as a wireframe-ready copy brief so a founder, designer, or agency can translate the plan into a Figma layout, no-code page, or production build.",
  },
  {
    question: "How many landing page outline generations are free?",
    answer:
      "You can try two free generations without signing up. After that, buy one generation for $5 or use the $19/month plan for ongoing SEO, landing page, and campaign copy.",
  },
];

export default function LandingPageOutlineGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,254,255,0.9))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(8,47,73,0.55))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Landing Page Outline Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate a landing page outline before you write, design, or build the page.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Paste your offer, audience, proof points, and page goal. SEOCopy turns the brief into a landing page outline, section-by-section page plan, conversion flow, wireframe-ready copy brief, SEO snippets, FAQs, and CTAs.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=landing-page-outline-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate Landing Page Outline
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
              Outline output checklist
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
            Plan the page before polishing copy
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Shape the message architecture, proof order, and CTA path before production starts.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {outlineAngles.map((item) => (
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
            From brief to build-ready plan
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Give every landing page project a stronger starting structure.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            SEOCopy helps founders, Shopify merchants, SaaS teams, and agencies move faster from rough offer notes to a buildable page plan. Use it for launch pages, paid-campaign pages, waitlists, lead magnets, and service pages.
          </p>
          <Link
            href="/generate?source=landing-page-outline-generator-cta"
            className="mt-8 inline-flex rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            Try Two Free Generations
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight">Landing page outline generator questions</h2>
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
