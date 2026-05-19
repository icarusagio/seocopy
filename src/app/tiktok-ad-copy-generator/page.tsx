import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TikTok Ad Copy Generator",
  description:
    "Generate TikTok ad hooks, primary text, Spark Ads angles, creator-style CTAs, landing page snippets, and paid social copy from one campaign brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/tiktok-ad-copy-generator",
  },
  keywords: [
    "TikTok ad copy generator",
    "AI TikTok ad copy generator",
    "TikTok ads hook generator",
    "Spark Ads copy generator",
    "TikTok ad text generator",
    "paid social ad copy",
  ],
  openGraph: {
    title: "TikTok Ad Copy Generator | SEOCopy",
    description:
      "Turn one offer brief into TikTok ad hooks, creator-style primary text, Spark Ads angles, CTAs, and matching landing page snippets.",
    url: "https://seocopy.vercel.app/tiktok-ad-copy-generator",
    type: "website",
  },
};

const adAssets = [
  {
    label: "Hooks",
    title: "Pattern-interrupt openers for the first three seconds",
    body: "Generate TikTok ad hooks, curiosity loops, pain-point openers, founder POVs, and creator-style first lines that can be tested against short-form video concepts.",
  },
  {
    label: "Spark Ads",
    title: "Creator-style copy that still sells the offer",
    body: "Draft native paid social copy with proof, objections, product benefits, and clear CTA variants for Spark Ads, whitelisted creator posts, and direct-response campaigns.",
  },
  {
    label: "Landing match",
    title: "Carry the TikTok promise through the click",
    body: "Pair each TikTok ad angle with landing page headlines, SEO snippets, social previews, and CTA copy so the post-click page reinforces the same promise.",
  },
];

const workflow = [
  "Paste the product, offer, audience, video concept, and campaign goal.",
  "Add creator POV, proof points, objections, promotion details, and the landing page action you want.",
  "Generate TikTok ad hooks, primary text, Spark Ads angles, CTA variants, and landing page snippets.",
  "Match the winning ad angle to a landing page headline, SEO title, meta description, and next-step CTA.",
];

const faqs = [
  {
    question: "What is a TikTok ad copy generator?",
    answer:
      "A TikTok ad copy generator turns a campaign brief into short-form ad hooks, creator-style primary text, Spark Ads angles, CTAs, and post-click landing page copy.",
  },
  {
    question: "How is this different from a TikTok caption generator?",
    answer:
      "TikTok caption generators focus on organic captions and hashtags. This TikTok ad copy workflow is built for paid social tests, Spark Ads, direct-response hooks, offer framing, and landing page message match.",
  },
  {
    question: "Can SEOCopy help with TikTok hooks and landing page snippets together?",
    answer:
      "Yes. SEOCopy can generate TikTok ad hooks, paid social CTAs, SEO titles, meta descriptions, landing page headlines, and FAQ snippets from the same brief so the campaign stays consistent.",
  },
  {
    question: "How many free TikTok ad copy generations do I get?",
    answer:
      "You can run two free generations without creating an account. After that, buy one more generation for $5 or use the $19/month plan for ongoing SEO, landing page, and paid social copy production.",
  },
];

export default function TikTokAdCopyGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,253,245,0.9))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(6,78,59,0.52))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-800 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-200">
              TikTok Ad Copy Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate TikTok ad copy for creator-style paid social tests.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy turns one offer brief into TikTok ad hooks, primary text, Spark Ads angles, CTA variants, and matching landing page snippets for short-form campaigns.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=tiktok-ad-copy-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate TikTok Ad Copy
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
              Four-step paid social workflow
            </p>
            <div className="mt-6 space-y-4">
              {workflow.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-2xl border border-slate-200 p-4 dark:border-white/10">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-800 dark:bg-cyan-300 dark:text-slate-950">
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
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700 dark:text-emerald-300">
            TikTok ad copy included
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            One campaign brief, multiple short-form paid social angles.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {adAssets.map((item) => (
            <article key={item.label} className="rounded-[1.5rem] border border-black/10 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700 dark:text-emerald-300">
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
            Ad-to-page message match
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Turn the winning TikTok hook into the landing page promise.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            Use SEOCopy to generate paid social copy and post-click landing snippets together, so every TikTok ad test has a consistent headline, SEO snippet, CTA, and conversion path.
          </p>
          <Link
            href="/generate?source=tiktok-ad-copy-generator-cta"
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
