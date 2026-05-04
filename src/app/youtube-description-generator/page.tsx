import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "YouTube Description Generator",
  description:
    "Generate YouTube video descriptions, SEO titles, chapter prompts, pinned comments, social previews, and CTA copy from one rough video brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/youtube-description-generator",
  },
  keywords: [
    "YouTube description generator",
    "AI YouTube description generator",
    "YouTube SEO description generator",
    "video description generator",
    "YouTube title and description generator",
    "YouTube CTA generator",
  ],
  openGraph: {
    title: "YouTube Description Generator | SEOCopy",
    description:
      "Turn a video topic, transcript notes, or product demo brief into YouTube descriptions, SEO metadata, chapters, pinned comments, and conversion CTAs.",
    url: "https://seocopy.vercel.app/youtube-description-generator",
    type: "website",
  },
};

const outputBlocks = [
  {
    label: "Video SEO",
    title: "Descriptions built for search and suggested videos",
    body: "Create keyword-aware titles, opening hooks, descriptions, tags, and chapter prompts that make each upload easier to understand and discover.",
  },
  {
    label: "Creator workflow",
    title: "Turn rough notes into publish-ready upload copy",
    body: "Paste a transcript summary, product demo notes, tutorial outline, podcast topic, or launch video brief and get structured copy ready for YouTube Studio.",
  },
  {
    label: "Conversion assets",
    title: "Drive viewers to the next action",
    body: "Generate pinned comments, social previews, link CTAs, newsletter blurbs, and end-screen prompts that move viewers toward a signup, trial, shop, or booking.",
  },
];

const workflow = [
  "Paste the video topic, transcript notes, product demo brief, tutorial outline, or podcast summary.",
  "Add the target keyword, audience, offer, link destination, tone, and must-include calls to action.",
  "Generate YouTube descriptions, SEO titles, chapter prompts, pinned comments, social captions, and CTA variants.",
  "Publish the strongest description in YouTube Studio and reuse the supporting copy across shorts, newsletters, and social posts.",
];

const examples = [
  "Product demo video for a Shopify app that needs trial signups",
  "Founder-led SaaS tutorial with a newsletter and free trial CTA",
  "Podcast episode summary that needs chapters, keywords, and social hooks",
  "Ecommerce how-to video that should drive viewers to a collection page",
];

const faqs = [
  {
    question: "What is a YouTube description generator?",
    answer:
      "A YouTube description generator turns a video brief, transcript summary, or topic into upload-ready copy, including a search-friendly title, description, chapters, pinned comment, social snippets, and CTAs.",
  },
  {
    question: "Can SEOCopy generate YouTube SEO titles too?",
    answer:
      "Yes. Add the target keyword, audience, video angle, and offer. SEOCopy can draft YouTube titles, description openings, keyword phrases, social previews, and calls to action from the same brief.",
  },
  {
    question: "Is this useful for product demo videos?",
    answer:
      "Yes. Product teams, founders, and ecommerce merchants can turn demo notes into YouTube descriptions that explain the value, answer viewer objections, and point viewers toward a trial, booking, signup, or product page.",
  },
  {
    question: "How many free YouTube description generations are included?",
    answer:
      "You can run two free generations without an account. After that, buy a single paid generation for $5 or use the $19/month plan for ongoing SEO, launch, and video copy production.",
  },
];

export default function YouTubeDescriptionGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,254,255,0.88))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(22,78,99,0.58))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              YouTube Description Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate YouTube descriptions that help videos rank, explain, and convert.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy turns video topics, transcript notes, product demos, tutorials, and podcast summaries into YouTube descriptions, SEO titles, chapters, pinned comments, social previews, and CTA variants.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=youtube-description-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate YouTube Copy
              </Link>
              <a
                href="#examples"
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950 dark:border-white/15 dark:text-slate-200 dark:hover:border-white dark:hover:text-white"
              >
                See Video Examples
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
            Upload copy included
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            One video brief, multiple assets for search, publishing, and conversion.
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
            Example video briefs
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Draft YouTube copy from the notes already sitting in scripts, transcripts, launch docs, and demo outlines.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {examples.map((example) => (
              <div key={example} className="rounded-2xl border border-white/10 bg-white/5 p-5 font-medium">
                {example}
              </div>
            ))}
          </div>
          <Link
            href="/generate?source=youtube-description-generator-cta"
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
