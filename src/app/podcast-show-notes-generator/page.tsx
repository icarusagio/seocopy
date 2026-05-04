import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Podcast Show Notes Generator",
  description:
    "Generate podcast show notes, episode summaries, SEO titles, guest bios, timestamps, newsletter blurbs, and listener CTAs from one rough episode brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/podcast-show-notes-generator",
  },
  keywords: [
    "podcast show notes generator",
    "AI podcast show notes generator",
    "podcast episode summary generator",
    "podcast description generator",
    "podcast SEO title generator",
    "podcast newsletter generator",
  ],
  openGraph: {
    title: "Podcast Show Notes Generator | SEOCopy",
    description:
      "Turn episode transcripts, guest notes, and talking points into SEO-friendly show notes, summaries, timestamps, newsletter blurbs, and conversion CTAs.",
    url: "https://seocopy.vercel.app/podcast-show-notes-generator",
    type: "website",
  },
};

const outputBlocks = [
  {
    label: "Episode SEO",
    title: "Show notes built for search and podcast apps",
    body: "Draft keyword-aware episode titles, summaries, descriptions, and metadata that make each interview, solo episode, or product-led conversation easier to find.",
  },
  {
    label: "Repurposing",
    title: "Turn transcripts into publish-ready assets",
    body: "Generate timestamps, key takeaways, guest bios, newsletter blurbs, LinkedIn hooks, and blog-intro copy from the same episode notes.",
  },
  {
    label: "Listener conversion",
    title: "Move listeners toward the next step",
    body: "Create sponsor mentions, lead magnet CTAs, demo links, community invites, and subscription prompts that fit naturally into episode pages.",
  },
];

const workflow = [
  "Paste the transcript excerpt, episode outline, guest notes, topic, or rough recording brief.",
  "Add the target keyword, guest name, audience, offer, sponsor, links, tone, and must-include calls to action.",
  "Generate show notes, SEO titles, episode descriptions, timestamps, newsletter blurbs, social hooks, and CTA variants.",
  "Publish the strongest show notes on your podcast page and reuse the supporting copy in email, social, and show description fields.",
];

const examples = [
  "Founder interview that needs show notes, guest bio, and a trial signup CTA",
  "SaaS customer story episode with timestamps and a demo booking link",
  "Ecommerce operator podcast that should drive listeners to a collection page",
  "Solo thought-leadership episode repurposed into newsletter and LinkedIn copy",
];

const faqs = [
  {
    question: "What is a podcast show notes generator?",
    answer:
      "A podcast show notes generator turns an episode transcript, outline, or guest brief into publish-ready episode copy, including summaries, timestamps, SEO titles, descriptions, key takeaways, newsletter blurbs, social hooks, and CTAs.",
  },
  {
    question: "Can SEOCopy generate podcast episode titles too?",
    answer:
      "Yes. Add the target keyword, guest, audience, and episode angle. SEOCopy can draft podcast titles, search snippets, social previews, and calls to action from the same brief.",
  },
  {
    question: "Is this useful without a full transcript?",
    answer:
      "Yes. You can start from bullet notes, a rough outline, guest prep notes, or a short topic summary. More detail improves specificity, but a complete transcript is not required.",
  },
  {
    question: "How many free podcast show notes generations are included?",
    answer:
      "You can run two free generations without an account. After that, buy a single paid generation for $5 or use the $19/month plan for ongoing SEO, launch, and content copy production.",
  },
];

export default function PodcastShowNotesGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,254,255,0.88))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(22,78,99,0.58))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Podcast Show Notes Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate podcast show notes that summarize, rank, and convert.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy turns transcripts, guest notes, episode outlines, and topic briefs into podcast show notes, SEO titles, timestamps, newsletter blurbs, social hooks, and CTA variants.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=podcast-show-notes-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate Podcast Notes
              </Link>
              <a
                href="#examples"
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950 dark:border-white/15 dark:text-slate-200 dark:hover:border-white dark:hover:text-white"
              >
                See Episode Examples
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
            Episode copy included
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            One episode brief, multiple assets for publishing, search, and listener action.
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
            Example episode briefs
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Draft podcast copy from the notes already sitting in transcripts, guest prep docs, and recording outlines.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {examples.map((example) => (
              <div key={example} className="rounded-2xl border border-white/10 bg-white/5 p-5 font-medium">
                {example}
              </div>
            ))}
          </div>
          <Link
            href="/generate?source=podcast-show-notes-generator-cta"
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
