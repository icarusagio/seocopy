import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Meta Description Generator",
  description:
    "Generate click-worthy SEO meta descriptions, SEO titles, Open Graph descriptions, and landing page copy variants from a URL or product brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/meta-description-generator",
  },
  keywords: [
    "meta description generator",
    "AI meta description generator",
    "SEO meta description generator",
    "meta title and description generator",
    "click worthy meta descriptions",
  ],
  openGraph: {
    title: "Meta Description Generator | SEOCopy",
    description:
      "Write SEO meta descriptions that match search intent, stay within ideal length, and give buyers a reason to click.",
    url: "https://seocopy.vercel.app/meta-description-generator",
    type: "website",
  },
};

const benefits = [
  {
    title: "Search-intent aligned",
    body: "Turn a target page, product brief, or positioning note into descriptions that promise the right outcome for the query.",
  },
  {
    title: "Built for snippets",
    body: "Generate concise, benefit-led copy that fits common meta description length constraints before you paste it into a CMS.",
  },
  {
    title: "Ready for testing",
    body: "Get multiple angles for product pages, service pages, landing pages, and content refreshes without opening a blank doc.",
  },
];

const outputs = [
  "Primary meta description",
  "Alternative meta description angles",
  "SEO title suggestion",
  "Open Graph title and description",
  "Hero headline and CTA variants",
];

const faqs = [
  {
    question: "What makes a good meta description?",
    answer:
      "A good meta description summarizes the page clearly, matches the searcher's intent, includes the core benefit or keyword naturally, and gives people a reason to click without overpromising.",
  },
  {
    question: "Can SEOCopy generate meta descriptions from a URL?",
    answer:
      "Yes. Paste a URL or add a short description of the page, audience, and offer. SEOCopy returns meta descriptions plus related SEO titles, OG copy, headlines, and CTAs.",
  },
  {
    question: "How many free meta descriptions can I generate?",
    answer:
      "You can try two free generations without creating an account. After that, buy a single generation for $5 or use the $19/month plan for ongoing copy production.",
  },
];

export default function MetaDescriptionGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(224,242,254,0.86))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(12,74,110,0.65))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Meta Description Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Write meta descriptions that give searchers a reason to click.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Paste a page URL or describe what the page sells. SEOCopy returns optimized meta descriptions, SEO title ideas, social preview copy, and landing page copy variants for faster publishing.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=meta-description-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate Meta Descriptions
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
              Output checklist
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
            SEO use cases
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Built for pages that need sharper snippets before they need another meeting.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {benefits.map((item) => (
            <article key={item.title} className="rounded-[1.5rem] border border-black/10 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{item.body}</p>
            </article>
          ))}
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
