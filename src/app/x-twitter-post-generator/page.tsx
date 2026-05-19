import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "X Twitter Post Generator",
  description:
    "Generate X/Twitter posts, hooks, threads, launch updates, engagement prompts, SEO snippets, and CTA variants from one campaign or product brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/x-twitter-post-generator",
  },
  keywords: [
    "X post generator",
    "Twitter post generator",
    "AI Twitter post generator",
    "X Twitter content generator",
    "tweet generator",
    "Twitter thread generator",
    "startup launch tweet generator",
    "social media post generator",
  ],
  openGraph: {
    title: "X Twitter Post Generator | SEOCopy",
    description:
      "Turn launches, product updates, founder notes, and campaign briefs into X/Twitter hooks, posts, threads, proof points, and conversion CTAs.",
    url: "https://seocopy.vercel.app/x-twitter-post-generator",
    type: "website",
  },
};

const postAssets = [
  {
    label: "Hook-first posts",
    title: "Open with the tension buyers already feel",
    body: "Generate concise hooks, contrarian angles, before/after claims, and product proof lines that can stop the scroll without sounding like generic AI copy.",
  },
  {
    label: "Threads + launch updates",
    title: "Turn one product moment into a full X content sequence",
    body: "Draft launch tweets, founder updates, mini-threads, customer proof posts, roadmap teasers, and reply prompts from the same campaign brief.",
  },
  {
    label: "Conversion CTAs",
    title: "Connect social attention to the next click",
    body: "Create soft CTAs, demo nudges, waitlist prompts, newsletter asks, landing page snippets, and metadata so every post points to a consistent offer.",
  },
];

const workflow = [
  "Paste the product update, launch note, offer, proof point, audience, tone, and action you want readers to take.",
  "Add any founder voice notes, customer language, objection, feature detail, or link destination that should shape the post.",
  "Generate X/Twitter posts, hook options, thread outlines, engagement prompts, SEO snippets, and CTA variants.",
  "Publish the strongest post and reuse the winning angle across the landing page, email, and metadata.",
];

const faqs = [
  {
    question: "What is an X/Twitter post generator?",
    answer:
      "An X/Twitter post generator turns a rough product, launch, or campaign brief into short-form social posts with hooks, tweet drafts, thread structures, proof points, and calls to action.",
  },
  {
    question: "Can SEOCopy write Twitter threads for product launches?",
    answer:
      "Yes. SEOCopy can draft launch posts, founder-led threads, customer proof updates, objection reducers, and reply prompts that point readers toward a landing page, waitlist, or checkout.",
  },
  {
    question: "How is this different from the social media post generator?",
    answer:
      "The social media post generator adapts a campaign across multiple channels. This X/Twitter post generator focuses on concise X/Twitter hooks, tweet pacing, thread structure, reply prompts, and conversion CTAs for that platform.",
  },
  {
    question: "How many X/Twitter post generations are free?",
    answer:
      "You can run two free generations with no signup. After that, buy one generation for $5 or use the $19/month plan for ongoing social, SEO, email, and landing page copy.",
  },
];

export default function XTwitterPostGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-sky-700 dark:text-sky-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(239,246,255,0.92))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(14,165,233,0.32))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-sky-800 dark:border-sky-400/20 dark:bg-sky-400/10 dark:text-sky-200">
              X Twitter Post Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate X/Twitter posts that turn product updates into clicks.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy turns launch notes, founder insights, customer proof, and campaign briefs into X/Twitter hooks, post drafts, thread outlines, engagement prompts, SEO snippets, and CTA angles you can ship fast.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=x-twitter-post-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-sky-300 dark:text-slate-950 dark:hover:bg-sky-200"
              >
                Generate X/Twitter Posts
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
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700 dark:text-sky-300">
              X/Twitter workflow
            </p>
            <div className="mt-6 space-y-4">
              {workflow.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-2xl border border-slate-200 p-4 dark:border-white/10">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-800 dark:bg-sky-300 dark:text-slate-950">
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
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700 dark:text-sky-300">
            X content assets included
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            One campaign brief, multiple post angles for product-led social distribution.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {postAssets.map((item) => (
            <article key={item.label} className="rounded-[1.5rem] border border-black/10 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700 dark:text-sky-300">
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
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-200">
            Social-to-site consistency
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Pair every tweet with the landing page promise behind it.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            Use SEOCopy to align X/Twitter hooks, proof posts, engagement CTAs, SEO snippets, and destination-page copy around the same buyer intent.
          </p>
          <Link
            href="/generate?source=x-twitter-post-generator-cta"
            className="mt-8 inline-flex rounded-full bg-sky-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-200"
          >
            Try Two Free Generations
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight">X/Twitter post questions</h2>
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
