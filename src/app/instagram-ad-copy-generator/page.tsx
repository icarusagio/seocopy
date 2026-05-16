import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Instagram Ad Copy Generator",
  description:
    "Generate Instagram ad copy, Reels hooks, Story ad variants, carousel captions, CTA options, and paid social landing snippets from one campaign brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/instagram-ad-copy-generator",
  },
  keywords: [
    "Instagram ad copy generator",
    "AI Instagram ad copy generator",
    "Instagram ads headline generator",
    "Reels hooks",
    "Story ad variants",
    "Instagram paid social copy",
    "paid social landing snippets",
    "Meta ads copy generator",
  ],
  openGraph: {
    title: "Instagram Ad Copy Generator | SEOCopy",
    description:
      "Turn one offer brief into Instagram ad copy, Reels hooks, Story ad variants, carousel captions, CTAs, and paid social landing snippets.",
    url: "https://seocopy.vercel.app/instagram-ad-copy-generator",
    type: "website",
  },
};

const instagramAssets = [
  {
    label: "Reels hooks",
    title: "Open with a scroll-stopping first line",
    body: "Generate short Reels hooks, creator-style openings, product benefit angles, and pattern interrupts that match the visual concept you want to test.",
  },
  {
    label: "Story ad variants",
    title: "Create tap-friendly copy for vertical placements",
    body: "Draft Story ad frames, sticker-style CTAs, offer reminders, DM prompts, and urgency variants that are concise enough for mobile creative.",
  },
  {
    label: "Paid social landing snippets",
    title: "Keep the ad promise consistent after the swipe",
    body: "Pair Instagram ad copy with landing page headlines, SEO snippets, product proof, CTA variants, and campaign angles so visitors see the same promise after they click.",
  },
];

const workflow = [
  "Paste the product, offer, audience, creative format, proof points, and campaign objective.",
  "Add creator angle, promotion details, brand voice, objections, and the landing page action you want.",
  "Generate Instagram ad copy, Reels hooks, Story ad variants, carousel captions, CTAs, and paid social landing snippets.",
  "Match each ad angle to the visual concept, then keep the winning promise consistent on the landing page.",
];

const faqs = [
  {
    question: "What is an Instagram ad copy generator?",
    answer:
      "An Instagram ad copy generator turns an offer or campaign brief into Instagram ad copy, Reels hooks, Story ad variants, carousel captions, CTA options, and paid social landing snippets.",
  },
  {
    question: "How is this different from the Facebook ad copy generator?",
    answer:
      "The Facebook ad copy generator focuses on broader Meta feed and Facebook placements. This Instagram ad copy generator emphasizes Reels hooks, Story ad variants, carousel captions, creator-style language, and mobile-first paid social landing snippets.",
  },
  {
    question: "Can SEOCopy write Instagram ads for Shopify, SaaS, and services?",
    answer:
      "Yes. Paste the offer, audience, product proof, promotion, and tone to generate Instagram ad copy for Shopify products, SaaS trials, local services, lead magnets, launches, and creator-style campaigns.",
  },
  {
    question: "How many Instagram ad copy generations are free?",
    answer:
      "You can run two free generations with no signup. After that, buy one generation for $5 or use the $19/month plan for ongoing SEO, landing page, email, SMS, and paid social copy.",
  },
];

export default function InstagramAdCopyGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-pink-700 dark:text-pink-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(253,242,248,0.92))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(190,24,93,0.38))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-pink-200 bg-pink-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-pink-800 dark:border-pink-400/20 dark:bg-pink-400/10 dark:text-pink-200">
              Instagram Ad Copy Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate Instagram ad copy for Reels, Stories, and carousels.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy turns one product or campaign brief into Instagram ad copy, Reels hooks, Story ad variants, carousel captions, CTA options, and paid social landing snippets for mobile-first campaigns.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=instagram-ad-copy-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-pink-300 dark:text-slate-950 dark:hover:bg-pink-200"
              >
                Generate Instagram Ad Copy
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
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-pink-700 dark:text-pink-300">
              Instagram campaign workflow
            </p>
            <div className="mt-6 space-y-4">
              {workflow.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-2xl border border-slate-200 p-4 dark:border-white/10">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-pink-100 text-sm font-bold text-pink-800 dark:bg-pink-300 dark:text-slate-950">
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
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-pink-700 dark:text-pink-300">
            Instagram ad assets included
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            One campaign brief, multiple mobile-first ad angles for Instagram placements.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {instagramAssets.map((item) => (
            <article key={item.label} className="rounded-[1.5rem] border border-black/10 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-pink-700 dark:text-pink-300">
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
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-pink-200">
            Creative-to-landing consistency
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Write the hook, CTA, and landing page promise together.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            Use SEOCopy to keep Instagram creative, Reels hooks, Story ad variants, product proof, SEO snippets, and the destination page aligned around the same buyer intent and next step.
          </p>
          <Link
            href="/generate?source=instagram-ad-copy-generator-cta"
            className="mt-8 inline-flex rounded-full bg-pink-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-pink-200"
          >
            Try Two Free Generations
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight">Instagram ad copy questions</h2>
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
