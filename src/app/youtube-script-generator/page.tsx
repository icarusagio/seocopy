import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "YouTube Script Generator",
  description:
    "Generate YouTube scripts, hooks, intros, outlines, descriptions, titles, pinned comments, and CTAs from one video idea or content brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/youtube-script-generator",
  },
  keywords: [
    "YouTube script generator",
    "AI YouTube script generator",
    "video script generator",
    "YouTube intro generator",
    "YouTube hook generator",
    "creator script generator",
    "YouTube SEO copy generator",
  ],
  openGraph: {
    title: "YouTube Script Generator | SEOCopy",
    description:
      "Turn a video idea into a structured YouTube script with hooks, intros, SEO titles, descriptions, pinned comments, and CTA variants.",
    url: "https://seocopy.vercel.app/youtube-script-generator",
    type: "website",
  },
};

const scriptAssets = [
  {
    label: "Video hooks",
    title: "Open with a clear reason to keep watching",
    body: "Generate curiosity hooks, problem-led openings, and promise statements that match the topic, audience, and offer behind the video.",
  },
  {
    label: "Script outline",
    title: "Move from idea to publishable structure",
    body: "Turn one rough topic into intro beats, section arcs, proof points, transitions, recap lines, and creator-friendly talking points.",
  },
  {
    label: "YouTube SEO copy",
    title: "Package the video for search and clicks",
    body: "Create title options, description openings, chapter angles, pinned comments, social teasers, and CTA copy alongside the script.",
  },
];

const workflow = [
  "Paste the video idea, target viewer, channel niche, product, or rough talking points.",
  "Add the goal: tutorial, product demo, thought leadership, launch video, review, or listicle.",
  "Generate hooks, script sections, title ideas, descriptions, pinned comments, and CTA variants in one pass.",
  "Use the strongest script as a recording outline, then copy the SEO assets into YouTube when publishing.",
];

const faqs = [
  {
    question: "What does the YouTube script generator create?",
    answer:
      "It creates video hooks, intros, section outlines, talking points, transitions, summaries, SEO titles, descriptions, pinned comments, social teasers, and CTA variants from one video idea or brief.",
  },
  {
    question: "Can I use it for product demos and founder videos?",
    answer:
      "Yes. SEOCopy can turn a product, startup, Shopify store, service, or content idea into a structured script with proof points, objection handling, and a clear next-step CTA.",
  },
  {
    question: "Does it replace the YouTube title and description generators?",
    answer:
      "No. Use this page when you need the script and the publishing assets together. Use the title or description pages when you only need packaging copy for an existing video.",
  },
  {
    question: "How many free YouTube scripts can I generate?",
    answer:
      "You can run two free generations without signup. After that, buy one more generation for $5 or use the $19/month plan for ongoing creator and SEO copy.",
  },
];

export default function YoutubeScriptGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,254,255,0.88))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(8,47,73,0.68))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              YouTube Script Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate YouTube scripts with SEO titles, descriptions, and CTAs.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy helps creators, founders, agencies, and product marketers turn one video idea into a script outline, clickable packaging copy, and clear next-step calls to action.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=youtube-script-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate a YouTube Script
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
            Script assets included
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            One video brief becomes a script and publishing pack.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {scriptAssets.map((item) => (
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

      <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-10">
        <div className="rounded-[2rem] border border-black/10 bg-slate-950 p-8 text-white shadow-[0_24px_80px_rgba(15,23,42,0.14)] dark:border-white/10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
            Creator content without the blank page
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Plan the story, then publish with stronger search and conversion copy.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            Use SEOCopy when a video needs more than a quick title: generate the core script, the search packaging, and the CTA language that connects viewers to the next step.
          </p>
          <Link
            href="/generate?source=youtube-script-generator-cta"
            className="mt-8 inline-flex rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            Try Two Free Script Generations
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
