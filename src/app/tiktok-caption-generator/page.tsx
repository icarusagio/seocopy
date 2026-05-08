import type { Metadata } from "next";
import Link from "next/link";

const route = "/tiktok-caption-generator";
const canonical = `https://seocopy.vercel.app${route}`;

export const metadata: Metadata = {
  title: "TikTok Caption Generator",
  description:
    "Generate TikTok captions, short-video hooks, hashtag angles, SEO snippets, landing page tie-ins, and CTA variants from one campaign brief.",
  alternates: {
    canonical,
  },
  keywords: [
    "TikTok caption generator",
    "AI TikTok caption generator",
    "TikTok hook generator",
    "short video caption generator",
    "TikTok hashtag generator",
    "social media caption generator",
  ],
  openGraph: {
    title: "TikTok Caption Generator | SEOCopy",
    description:
      "Turn product notes, creator briefs, and launch angles into TikTok captions, hooks, hashtag clusters, social previews, and conversion CTAs.",
    url: canonical,
    type: "website",
  },
};

const outputBlocks = [
  {
    label: "Scroll-stopping hooks",
    title: "Open the video with a reason to keep watching",
    body: "Generate curiosity hooks, problem-led openers, benefit-first captions, and creator-style angles that fit short-form video feeds.",
  },
  {
    label: "Caption and hashtag sets",
    title: "Package the post for discovery and action",
    body: "Pair each hook with caption variants, keyword-aware hashtag clusters, social preview copy, SEO snippets, and the next click you want viewers to take.",
  },
  {
    label: "Campaign reuse",
    title: "Turn one brief into organic, paid, and landing-page copy",
    body: "Repurpose the winning TikTok angle into ad copy, landing page headlines, meta descriptions, FAQs, and CTA text for the full campaign.",
  },
];

const workflow = [
  "Paste the product, offer, video topic, creator concept, or campaign you want to promote.",
  "Add the audience, platform goal, tone, proof points, CTA, words to include, and any hashtags to avoid.",
  "Generate TikTok hooks, caption variants, hashtag angles, SEO snippets, social previews, and landing-page CTA copy.",
  "Use the strongest angle in the caption, video opener, paid social creative, product page, or launch landing page.",
];

const examples = [
  "TikTok captions for a Shopify product launch with limited inventory",
  "Short-video hooks for a SaaS founder announcing a new feature",
  "Caption variants for a local service business promotion",
  "Hashtag and CTA ideas for a creator affiliate campaign",
];

const faqs = [
  {
    question: "What is a TikTok caption generator?",
    answer:
      "A TikTok caption generator turns a product, audience, video idea, proof point, and campaign goal into short-form hooks, caption options, hashtag angles, and CTA copy for TikTok posts.",
  },
  {
    question: "Can SEOCopy include hashtags and SEO snippets?",
    answer:
      "Yes. SEOCopy can include hashtag clusters, keyword-aware captions, SEO titles, meta descriptions, social previews, landing page headlines, and CTA variants so the TikTok angle supports the full campaign.",
  },
  {
    question: "Who should use an AI TikTok caption generator?",
    answer:
      "Creators, Shopify merchants, founders, agencies, ecommerce teams, local businesses, and marketers can use it when they need fast caption ideas for short-form video launches, promotions, and content calendars.",
  },
  {
    question: "How many free TikTok caption generations are included?",
    answer:
      "You can run two free generations without creating an account. After that, buy one additional generation for $5 or use the $19/month plan for ongoing SEO and copy production.",
  },
];

export default function TikTokCaptionGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,254,255,0.88))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(22,78,99,0.58))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              TikTok Caption Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate TikTok captions, hooks, and hashtag angles that move viewers to act.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy turns product notes, creator briefs, launch offers, and campaign goals into TikTok caption options, short-video hooks, hashtag clusters, SEO snippets, and CTA variants.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=tiktok-caption-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate TikTok Captions
              </Link>
              <a
                href="#examples"
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950 dark:border-white/15 dark:text-slate-200 dark:hover:border-white dark:hover:text-white"
              >
                See Caption Briefs
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
            TikTok caption package included
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            One short-form brief, multiple caption angles for discovery, conversion, and reuse.
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
            Example TikTok caption briefs
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Draft caption sets for launches, product demos, creator posts, local promotions, and paid social tests.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {examples.map((example) => (
              <div key={example} className="rounded-2xl border border-white/10 bg-white/5 p-5 font-medium">
                {example}
              </div>
            ))}
          </div>
          <Link
            href="/generate?source=tiktok-caption-generator-cta"
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
