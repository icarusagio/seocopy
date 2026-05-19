import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "YouTube Shorts Script Generator",
  description:
    "Generate YouTube Shorts scripts, hooks, retention beats, caption overlays, CTAs, SEO snippets, and repurposing angles from one short-form video brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/youtube-shorts-script-generator",
  },
  keywords: [
    "YouTube Shorts script generator",
    "Shorts script generator",
    "YouTube Shorts hook generator",
    "short form video script generator",
    "AI YouTube Shorts generator",
    "video hook generator",
    "YouTube Shorts captions",
    "creator script generator",
  ],
  openGraph: {
    title: "YouTube Shorts Script Generator | SEOCopy",
    description:
      "Turn one product, creator, or campaign brief into short-form video hooks, scene beats, caption overlays, retention prompts, and CTAs for YouTube Shorts.",
    url: "https://seocopy.vercel.app/youtube-shorts-script-generator",
    type: "website",
  },
};

const scriptAssets = [
  {
    label: "Hook options",
    title: "Open with a scroll-stopping first second",
    body: "Generate problem hooks, curiosity gaps, contrarian openings, proof-led claims, and fast context lines that fit Shorts pacing without burying the payoff.",
  },
  {
    label: "Retention beats",
    title: "Map the 15-60 second story before recording",
    body: "Turn one idea into scene-by-scene beats, caption overlays, pattern interrupts, visual notes, and payoff moments that keep viewers watching.",
  },
  {
    label: "Conversion CTAs",
    title: "Send viewers from the Short to the next click",
    body: "Create subscribe nudges, comment prompts, link-in-description CTAs, product page snippets, and SEO metadata so each video supports the funnel.",
  },
];

const workflow = [
  "Paste the product, offer, creator topic, audience, proof point, desired action, and target length for the Short.",
  "Add the tone, visual assets, objection, link destination, or creator voice notes that should shape the script.",
  "Generate YouTube Shorts hooks, script beats, caption overlays, retention prompts, CTA variants, and SEO snippets.",
  "Record the strongest angle and reuse the same promise across the title, description, pinned comment, and landing page.",
];

const faqs = [
  {
    question: "What is a YouTube Shorts script generator?",
    answer:
      "A YouTube Shorts script generator turns a rough creator, product, or campaign brief into short-form video hooks, scene beats, voiceover lines, caption overlays, retention prompts, and calls to action.",
  },
  {
    question: "Can SEOCopy write Shorts scripts for product demos?",
    answer:
      "Yes. SEOCopy can draft product demo Shorts, founder updates, tutorial clips, customer proof videos, objection reducers, and CTA variants that point viewers toward a landing page, product page, or subscribe action.",
  },
  {
    question: "How is this different from the YouTube script generator?",
    answer:
      "The YouTube script generator is built for longer videos with intros, sections, descriptions, and pinned comments. This YouTube Shorts script generator focuses on fast hooks, 15-60 second pacing, caption overlays, retention beats, and short-form conversion CTAs.",
  },
  {
    question: "How many YouTube Shorts script generations are free?",
    answer:
      "You can run two free generations with no signup. After that, buy one generation for $5 or use the $19/month plan for ongoing video, SEO, email, and landing page copy.",
  },
];

export default function YouTubeShortsScriptGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-red-700 dark:text-red-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(255,247,247,1),rgba(255,241,242,0.92))] p-8 shadow-[0_30px_110px_rgba(127,29,29,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(239,68,68,0.24))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-red-200 bg-red-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-red-800 dark:border-red-400/20 dark:bg-red-400/10 dark:text-red-200">
              YouTube Shorts Script Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate YouTube Shorts scripts built for retention and clicks.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy turns creator ideas, product demos, tutorials, and campaign briefs into YouTube Shorts hooks, scene beats, caption overlays, retention prompts, SEO snippets, and CTA angles you can record fast.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=youtube-shorts-script-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-red-300 dark:text-slate-950 dark:hover:bg-red-200"
              >
                Generate YouTube Shorts Scripts
              </Link>
              <a
                href="#faq"
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950 dark:border-white/15 dark:text-slate-200 dark:hover:border-white dark:hover:text-white"
              >
                Read FAQ
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/10 bg-white/85 p-7 shadow-[0_24px_80px_rgba(127,29,29,0.1)] dark:border-white/10 dark:bg-white/5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red-700 dark:text-red-300">
              Shorts workflow
            </p>
            <div className="mt-6 space-y-4">
              {workflow.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-2xl border border-slate-200 p-4 dark:border-white/10">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-800 dark:bg-red-300 dark:text-slate-950">
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
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-red-700 dark:text-red-300">
            Short-form video assets included
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            One creator brief, multiple script angles for Shorts that support the funnel.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {scriptAssets.map((item) => (
            <article key={item.label} className="rounded-[1.5rem] border border-black/10 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red-700 dark:text-red-300">
                {item.label}
              </p>
              <h3 className="mt-4 text-2xl font-semibold">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-10">
        <div className="rounded-[2rem] border border-black/10 bg-slate-950 p-8 text-white shadow-[0_24px_80px_rgba(15,23,42,0.14)] dark:border-white/10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-red-200">
            Shorts-to-site consistency
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Pair every Short with the landing page promise behind it.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            Use SEOCopy to align YouTube Shorts scripts, titles, descriptions, pinned comments, SEO snippets, and destination-page copy around the same viewer intent.
          </p>
          <Link
            href="/generate?source=youtube-shorts-script-generator-cta"
            className="mt-8 inline-flex rounded-full bg-red-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-red-200"
          >
            Try Two Free Generations
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight">YouTube Shorts script questions</h2>
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
