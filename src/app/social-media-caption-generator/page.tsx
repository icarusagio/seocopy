import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Social Media Caption Generator",
  description:
    "Generate social media captions, post hooks, SEO snippets, social previews, and CTA variants from a product URL or short campaign brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/social-media-caption-generator",
  },
  keywords: [
    "social media caption generator",
    "AI social media caption generator",
    "Instagram caption generator",
    "LinkedIn post generator",
    "social post generator",
    "AI copywriting tool",
  ],
  openGraph: {
    title: "Social Media Caption Generator | SEOCopy",
    description:
      "Turn a rough offer into social captions, post hooks, SEO snippets, landing page headlines, and CTA variants for faster content campaigns.",
    url: "https://seocopy.vercel.app/social-media-caption-generator",
    type: "website",
  },
};

const captionAssets = [
  {
    label: "Social hooks",
    title: "Scroll-stopping first lines",
    body: "Create concise opening lines that turn a product benefit, launch, or offer into platform-ready attention hooks.",
  },
  {
    label: "Campaign variants",
    title: "Angles for every channel",
    body: "Generate caption options for Instagram, LinkedIn, X, TikTok, launch posts, and founder-led updates from the same brief.",
  },
  {
    label: "Conversion copy",
    title: "Captions connected to the next click",
    body: "Pair captions with landing page headlines, SEO snippets, social previews, and CTAs so social traffic lands on a consistent promise.",
  },
];

const workflow = [
  "Paste a product URL, offer notes, content theme, or campaign brief.",
  "Choose the audience, tone, platform, and action you want readers to take.",
  "Generate social captions, post hooks, SEO metadata, social previews, and CTA variants.",
  "Copy the strongest caption into your scheduler, landing page draft, or content testing doc.",
];

const faqs = [
  {
    question: "What is a social media caption generator?",
    answer:
      "A social media caption generator turns a product, service, launch, or content idea into ready-to-edit captions, post hooks, social previews, and calls to action for channels like Instagram, LinkedIn, X, and TikTok.",
  },
  {
    question: "Can SEOCopy create captions and landing page copy together?",
    answer:
      "Yes. SEOCopy is built for campaign consistency, so you can generate social captions, SEO snippets, landing page headlines, and CTA variants from the same brief.",
  },
  {
    question: "Do I need a finished social calendar before generating captions?",
    answer:
      "No. You can paste a finished URL for context or describe the offer manually. SEOCopy can help draft caption angles before your content calendar or landing page is finalized.",
  },
  {
    question: "How many free social caption generations do I get?",
    answer:
      "You can run two free generations without creating an account. After that, buy one more generation for $5 or use the $19/month plan for ongoing campaign copy production.",
  },
];

export default function SocialMediaCaptionGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,254,255,0.88))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(8,47,73,0.68))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Social Media Caption Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate social media captions that match the next click.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy turns a rough campaign brief into social captions, post hooks, landing page copy, SEO snippets, social previews, and CTA ideas you can publish or test immediately.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=social-media-caption-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate Social Captions
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
            Caption assets included
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            One brief, multiple social-ready angles.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {captionAssets.map((item) => (
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
            Campaign-ready output
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Stop publishing isolated captions with no landing page follow-through.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            Use SEOCopy to align social posts, search snippets, landing page copy, and the next action you want prospects to take.
          </p>
          <Link
            href="/generate?source=social-media-caption-generator-cta"
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
