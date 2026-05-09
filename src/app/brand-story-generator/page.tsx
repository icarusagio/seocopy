import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Brand Story Generator",
  description:
    "Generate a compelling brand story, founder narrative, About page sections, SEO metadata, social previews, and CTA variants from one positioning brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/brand-story-generator",
  },
  keywords: [
    "brand story generator",
    "AI brand story generator",
    "founder story generator",
    "About page story generator",
    "brand narrative generator",
    "startup story generator",
  ],
  openGraph: {
    title: "Brand Story Generator | SEOCopy",
    description:
      "Turn a rough origin story, product brief, or positioning note into a polished brand narrative with SEO snippets, proof points, and conversion CTAs.",
    url: "https://seocopy.vercel.app/brand-story-generator",
    type: "website",
  },
};

const storyBlocks = [
  {
    label: "Founder origin story",
    body: "Convert messy notes about why the company exists into a clear, human narrative for About pages, pitch decks, and launch posts.",
  },
  {
    label: "Customer-centered narrative",
    body: "Frame the brand around the buyer's problem, the old way that stopped working, and the new promise your product makes credible.",
  },
  {
    label: "Proof-led positioning",
    body: "Blend milestones, customer signals, product advantages, and values into story sections that support conversion instead of sounding generic.",
  },
];

const outputs = [
  "Brand story headline, subheadline, and short positioning intro",
  "Founder story, mission, problem, and why-now narrative sections",
  "SEO title, meta description, Open Graph copy, and social teaser",
  "Proof bullets, values language, and trust-building microcopy",
  "CTA variants for About pages, homepages, launch posts, and pitch follow-up",
];

const faqs = [
  {
    question: "What is a brand story generator?",
    answer:
      "A brand story generator turns rough notes about your origin, audience, mission, product, and proof into a clear narrative that can be used on About pages, homepages, pitch decks, launch posts, and sales collateral.",
  },
  {
    question: "Can SEOCopy write founder stories and About page copy?",
    answer:
      "Yes. SEOCopy can produce founder story sections, About page intros, mission statements, proof bullets, SEO metadata, social previews, and CTA variants from a short positioning brief.",
  },
  {
    question: "How do I make a brand story sound less generic?",
    answer:
      "Include concrete details: who you serve, the moment that made the problem obvious, what changed in the market, proof that your approach works, and the action you want readers to take next.",
  },
  {
    question: "How many brand stories can I generate for free?",
    answer:
      "You can try two free generations without creating an account. After that, buy a single generation for $5 or use the $19/month plan for ongoing SEO copy, brand messaging, and landing page work.",
  },
];

export default function BrandStoryGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,253,245,0.86))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(6,78,59,0.62))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Brand Story Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate a brand story that explains why you exist and why buyers should care.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Paste your origin story, positioning notes, audience, product promise, or founder bio. SEOCopy turns it into brand narrative sections, SEO snippets, social previews, proof bullets, and CTAs for pages that need more trust.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=brand-story-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate a Brand Story
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
              Brand narrative output checklist
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
            Brand storytelling playbook
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Shape origin notes, customer context, and product proof into conversion-ready story sections.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {storyBlocks.map((item) => (
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
            Trust-building copy faster
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Move from scattered brand notes to a story that works across About pages, homepages, decks, and launch copy.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            SEOCopy keeps the story practical: every generation can include narrative sections, SEO metadata, proof points, social previews, and CTAs so the page has a clear next step.
          </p>
          <Link
            href="/generate?source=brand-story-generator-cta"
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
