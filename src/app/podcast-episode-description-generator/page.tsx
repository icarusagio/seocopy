import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Podcast Episode Description Generator",
  description:
    "Generate podcast episode descriptions, SEO summaries, guest blurbs, app-store snippets, show notes hooks, and listener CTAs from one episode brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/podcast-episode-description-generator",
  },
  keywords: [
    "podcast episode description generator",
    "podcast description generator",
    "podcast episode summary generator",
    "podcast SEO description",
    "AI podcast description writer",
    "podcast app description copy",
  ],
  openGraph: {
    title: "Podcast Episode Description Generator | SEOCopy",
    description:
      "Turn transcripts, guest notes, and topic briefs into podcast episode descriptions, app snippets, SEO summaries, and listener conversion CTAs.",
    url: "https://seocopy.vercel.app/podcast-episode-description-generator",
    type: "website",
  },
};

const descriptionBlocks = [
  {
    label: "Podcast app snippets",
    title: "Write concise descriptions listeners understand before they press play",
    body: "Generate episode descriptions that highlight the guest, problem, promise, and takeaways in a format ready for Apple Podcasts, Spotify, YouTube, and embedded players.",
  },
  {
    label: "SEO episode summaries",
    title: "Turn each episode into a searchable content asset",
    body: "Create keyword-aware summaries, page titles, meta descriptions, H2 angles, and intro copy that help interviews, customer stories, and expert episodes rank beyond podcast apps.",
  },
  {
    label: "Listener-to-lead CTAs",
    title: "Connect episode interest to demos, downloads, and sales pages",
    body: "Add natural calls to action for sponsor links, free resources, trial signups, consultations, communities, products, or newsletter subscriptions without burying the episode value.",
  },
];

const workflow = [
  "Paste the episode transcript excerpt, guest notes, topic outline, recording brief, or rough talking points.",
  "Add the audience, target keyword, guest proof, key links, sponsor notes, tone, and desired next-step CTA.",
  "Generate podcast episode descriptions, SEO summaries, app snippets, guest blurbs, show notes hooks, and CTA variants.",
  "Publish the clearest description in your podcast host and reuse the supporting copy on episode pages, newsletters, and social posts.",
];

const examples = [
  "B2B founder interview that needs an episode description and demo-booking CTA",
  "Customer story episode that should summarize outcomes and link to a case study",
  "Ecommerce operator episode driving listeners to a seasonal collection or guide",
  "Solo expert episode repurposed into a search-friendly blog intro and newsletter blurb",
];

const faqs = [
  {
    question: "What is a podcast episode description generator?",
    answer:
      "A podcast episode description generator turns a transcript, outline, guest brief, or topic summary into listener-ready episode descriptions, SEO summaries, app snippets, guest blurbs, and calls to action.",
  },
  {
    question: "Can SEOCopy write descriptions for Spotify and Apple Podcasts?",
    answer:
      "Yes. SEOCopy can draft concise podcast app descriptions plus longer SEO-friendly episode page copy, newsletter blurbs, social hooks, and metadata from the same brief.",
  },
  {
    question: "How is this different from show notes?",
    answer:
      "Show notes often include timestamps, links, and detailed takeaways. A podcast episode description focuses on the concise summary listeners see before pressing play, plus SEO copy and CTAs that support discovery and conversion.",
  },
  {
    question: "How many podcast episode descriptions can I generate for free?",
    answer:
      "You can run two free generations without an account. After that, buy a single generation for $5 or use the $19/month plan for ongoing podcast, SEO, landing page, and campaign copy production.",
  },
];

export default function PodcastEpisodeDescriptionGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,254,255,0.88))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(22,78,99,0.58))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Podcast Episode Description Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate podcast episode descriptions that earn plays and clicks.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy turns transcripts, guest notes, recording outlines, and topic briefs into podcast episode descriptions, SEO summaries, app snippets, guest blurbs, show notes hooks, and listener CTAs.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=podcast-episode-description-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate Podcast Descriptions
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
              Podcast episode description workflow
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
            Episode description copy included
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            One episode brief, multiple description formats for discovery and conversion.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {descriptionBlocks.map((item) => (
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
            Draft podcast descriptions from the same transcript notes, guest prep docs, and topic outlines you already have.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {examples.map((example) => (
              <div key={example} className="rounded-2xl border border-white/10 bg-white/5 p-5 font-medium">
                {example}
              </div>
            ))}
          </div>
          <Link
            href="/generate?source=podcast-episode-description-generator-cta"
            className="mt-8 inline-flex rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            Try Two Free Generations
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight">Podcast episode description generator questions</h2>
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
