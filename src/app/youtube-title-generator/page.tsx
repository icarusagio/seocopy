import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "YouTube Title Generator",
  description:
    "Generate YouTube titles, SEO keywords, thumbnail hooks, description openings, and CTA angles from one rough video brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/youtube-title-generator",
  },
  keywords: [
    "YouTube title generator",
    "AI YouTube title generator",
    "YouTube SEO title generator",
    "video title generator",
    "YouTube headline generator",
    "YouTube thumbnail hook generator",
  ],
  openGraph: {
    title: "YouTube Title Generator | SEOCopy",
    description:
      "Turn video topics, transcript notes, or product demo briefs into clickable YouTube titles, SEO angles, thumbnail hooks, and description starters.",
    url: "https://seocopy.vercel.app/youtube-title-generator",
    type: "website",
  },
};

const outputBlocks = [
  {
    label: "Search titles",
    title: "Draft titles around the queries viewers already use",
    body: "Generate keyword-aware YouTube title options for tutorials, product demos, comparison videos, launch explainers, podcasts, and creator-led education.",
  },
  {
    label: "Click hooks",
    title: "Package each title with a stronger viewing reason",
    body: "Get curiosity angles, thumbnail hook text, opening lines, and alternate headline framings so the title works with the full video packaging.",
  },
  {
    label: "Conversion context",
    title: "Connect viewers to the next business action",
    body: "Pair titles with description starters, pinned-comment CTAs, and social teaser copy that can point viewers toward a signup, shop, booking, or lead magnet.",
  },
];

const workflow = [
  "Paste the video topic, transcript notes, product demo brief, tutorial outline, or episode summary.",
  "Add the target keyword, audience, promise, offer, tone, and any words the title must include or avoid.",
  "Generate YouTube title variants with thumbnail hooks, description openings, social teasers, and CTA angles.",
  "Pick the strongest title package and reuse the supporting copy across YouTube Studio, shorts, newsletters, and social posts.",
];

const examples = [
  "Shopify app demo video that needs trial signups from merchants",
  "SaaS tutorial competing for a high-intent how-to keyword",
  "Local business case study video that should drive quote requests",
  "Ecommerce product comparison video with affiliate or collection CTAs",
];

const faqs = [
  {
    question: "What is a YouTube title generator?",
    answer:
      "A YouTube title generator turns a video topic, transcript summary, product demo, tutorial outline, or episode brief into title options built for search intent, clicks, and clear positioning.",
  },
  {
    question: "Can SEOCopy generate thumbnail hooks too?",
    answer:
      "Yes. SEOCopy can draft YouTube titles, thumbnail hook text, description openings, social previews, and CTA angles from the same video brief so the package feels consistent.",
  },
  {
    question: "Is this useful for businesses, not just creators?",
    answer:
      "Yes. Founders, Shopify merchants, agencies, local businesses, and content marketers can use it to package product demos, tutorials, case studies, webinars, and launch videos for discovery and conversion.",
  },
  {
    question: "How many free YouTube title generations are included?",
    answer:
      "You can run two free generations without an account. After that, buy a single paid generation for $5 or use the $19/month plan for ongoing SEO, launch, and video copy production.",
  },
];

export default function YouTubeTitleGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,254,255,0.88))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(22,78,99,0.58))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              YouTube Title Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate YouTube titles that earn clicks, match search intent, and sell the next step.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy turns video topics, transcript notes, product demos, tutorials, and podcast summaries into YouTube titles, SEO angles, thumbnail hooks, description openings, and CTA variants.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=youtube-title-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate YouTube Titles
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
            Title package included
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            One video brief, multiple title angles for search, clicks, and conversion.
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
            Draft YouTube title packages from scripts, transcripts, product demos, and campaign notes.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {examples.map((example) => (
              <div key={example} className="rounded-2xl border border-white/10 bg-white/5 p-5 font-medium">
                {example}
              </div>
            ))}
          </div>
          <Link
            href="/generate?source=youtube-title-generator-cta"
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
