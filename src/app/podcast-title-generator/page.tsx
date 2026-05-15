import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Podcast Title Generator",
  description:
    "Generate podcast titles, episode hooks, SEO episode titles, show description angles, social teasers, and newsletter-ready copy from one episode brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/podcast-title-generator",
  },
  keywords: [
    "podcast title generator",
    "podcast titles",
    "episode hooks",
    "SEO episode titles",
    "show description angles",
    "podcast episode titles",
    "podcast SEO copy",
    "episode title ideas",
  ],
  openGraph: {
    title: "Podcast Title Generator | SEOCopy",
    description:
      "Turn a podcast episode brief into searchable podcast titles, episode hooks, SEO episode titles, show description angles, social teasers, and CTA-ready copy.",
    url: "https://seocopy.vercel.app/podcast-title-generator",
    type: "website",
  },
};

const titleAngles = [
  {
    label: "Episode hooks",
    body: "Package the guest, promise, tension, audience, and takeaway into clickable episode hooks that still feel accurate to the conversation.",
  },
  {
    label: "SEO episode titles",
    body: "Blend searchable topics, guest names, outcomes, and clear language so the episode can surface in podcast apps, Google, and YouTube-style discovery.",
  },
  {
    label: "Show description angles",
    body: "Create supporting description openings, newsletter blurbs, and social post angles that match the title promise and drive listens.",
  },
];

const outputs = [
  "Podcast titles for interview shows, founder podcasts, creator series, B2B thought-leadership episodes, solo lessons, and product-led audio content",
  "Episode hooks that turn a topic, guest, controversy, framework, or customer story into clear listener intent",
  "SEO episode titles with searchable keywords, guest names, industry terms, and benefit-led phrasing",
  "Show description angles for podcast apps, YouTube descriptions, newsletters, LinkedIn posts, and landing-page embeds",
  "Tone variants for expert, curious, contrarian, tactical, narrative, founder-led, educational, and conversion-focused podcast positioning",
];

const faqs = [
  {
    question: "What is a podcast title generator?",
    answer:
      "A podcast title generator turns an episode brief into podcast titles, episode hooks, SEO episode titles, show description angles, social teasers, and CTA-ready copy for promoting a podcast episode.",
  },
  {
    question: "Can this help with podcast SEO?",
    answer:
      "Yes. Use it to include searchable episode topics, guest names, audience problems, outcomes, and category language while keeping the title readable for humans in podcast apps and search results.",
  },
  {
    question: "How is this different from the podcast show notes generator?",
    answer:
      "The podcast show notes generator focuses on summaries, timestamps, and full episode notes. This podcast title generator focuses on naming and packaging the episode: titles, hooks, SEO title variants, and short promotional angles.",
  },
  {
    question: "How many podcast title generations are free?",
    answer:
      "You can try two free generations with no signup. After that, buy one generation for $5 or use the $19/month plan for ongoing SEO, landing page, product, email, and podcast copy.",
  },
];

export default function PodcastTitleGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,253,245,0.92))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(5,150,105,0.32))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-800 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-200">
              Podcast Title Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Write podcast titles that make each episode easier to find and start.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Paste the episode topic, guest, audience, main promise, surprising tension, key takeaways, and brand voice. SEOCopy creates podcast titles, episode hooks, SEO episode titles, show description angles, and promotional copy from one brief.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=podcast-title-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-emerald-300 dark:text-slate-950 dark:hover:bg-emerald-200"
              >
                Generate Podcast Titles
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
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700 dark:text-emerald-300">
              Podcast title output checklist
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
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700 dark:text-emerald-300">
            Make episodes discoverable before launch
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Create title options for podcast apps, YouTube, newsletters, episode pages, social posts, and sponsor-ready promotion.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {titleAngles.map((item) => (
            <article key={item.label} className="rounded-[1.5rem] border border-black/10 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700 dark:text-emerald-300">
                {item.label}
              </p>
              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-10">
        <div className="rounded-[2rem] border border-black/10 bg-slate-950 p-8 text-white shadow-[0_24px_80px_rgba(15,23,42,0.14)] dark:border-white/10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-200">
            Listener-acquisition packaging
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Turn a strong conversation into a title listeners understand in seconds.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            SEOCopy helps founders, podcast producers, agencies, creators, and B2B teams package episodes with sharper titles, clearer search intent, stronger show description angles, and copy that can be reused across launch channels.
          </p>
          <Link
            href="/generate?source=podcast-title-generator-cta"
            className="mt-8 inline-flex rounded-full bg-emerald-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-200"
          >
            Try Two Free Generations
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight">Podcast title questions</h2>
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
