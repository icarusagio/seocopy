import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shopify App Launch Copy Generator",
  description:
    "Generate Shopify app launch copy, Product Hunt blurbs, merchant emails, launch posts, FAQs, SEO snippets, and install CTAs from one app brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/shopify-app-launch-copy-generator",
  },
  keywords: [
    "Shopify app launch copy generator",
    "Shopify app marketing copy",
    "Shopify app launch announcement",
    "Shopify app Product Hunt copy",
    "Shopify app email launch copy",
    "Shopify app install CTA",
  ],
  openGraph: {
    title: "Shopify App Launch Copy Generator | SEOCopy",
    description:
      "Turn a Shopify app brief into launch emails, announcement posts, Product Hunt blurbs, merchant FAQs, SEO snippets, and install CTAs.",
    url: "https://seocopy.vercel.app/shopify-app-launch-copy-generator",
    type: "website",
  },
};

const launchAssets = [
  {
    label: "Merchant launch messaging",
    body: "Translate feature notes, setup steps, and proof points into launch copy that tells merchants what changed and why installing now matters.",
  },
  {
    label: "Channel-ready announcements",
    body: "Draft email, Product Hunt, LinkedIn, X, community, and partner blurbs from the same app positioning brief.",
  },
  {
    label: "Install confidence copy",
    body: "Create FAQs, objection reducers, pricing notes, screenshot captions, and CTA variants that move a merchant from curiosity to install intent.",
  },
];

const outputs = [
  "Launch email subject lines, preview text, body copy, and merchant-facing CTA variants",
  "Product Hunt tagline, short description, maker comment outline, and launch-day social posts",
  "Shopify App Store update notes, feature-benefit bullets, and screenshot caption ideas",
  "SEO title, meta description, Open Graph copy, and comparison-page launch angles",
  "FAQ answers for pricing, setup time, theme compatibility, support, and merchant outcomes",
];

const faqs = [
  {
    question: "What is a Shopify app launch copy generator?",
    answer:
      "A Shopify app launch copy generator turns an app brief into launch emails, announcement posts, Product Hunt copy, store listing update notes, FAQs, SEO snippets, and install CTA variants for merchants.",
  },
  {
    question: "Can this help with a new Shopify app or a relaunch?",
    answer:
      "Yes. Use it for a first launch, feature relaunch, category keyword refresh, Shopify App Store update, partner announcement, or Product Hunt-style campaign where the app needs clear merchant-facing value.",
  },
  {
    question: "What should I paste into the generator?",
    answer:
      "Paste the app name, target merchant, category, launch goal, core features, setup steps, pricing, proof points, screenshots, and any distribution channels you plan to use.",
  },
  {
    question: "How many Shopify app launch copy generations are free?",
    answer:
      "You can try two free generations without signing up. After that, buy one generation for $5 or use the $19/month plan for ongoing Shopify app, landing page, and SEO copy.",
  },
];

export default function ShopifyAppLaunchCopyGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(240,249,255,0.92))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(14,116,144,0.38))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Shopify App Launch Copy Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Launch your Shopify app with copy that gives merchants a reason to install.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Paste your Shopify app brief, launch channel, proof points, and pricing. SEOCopy turns it into announcement emails, Product Hunt blurbs, social posts, App Store update notes, FAQs, SEO snippets, and install CTAs.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=shopify-app-launch-copy-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate Shopify Launch Copy
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
              Launch asset checklist
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
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-300">
            Shopify app launch angles
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Package the launch around merchant outcomes, distribution channels, and install confidence.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {launchAssets.map((item) => (
            <article key={item.label} className="rounded-[1.5rem] border border-black/10 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-700 dark:text-cyan-300">
                {item.label}
              </p>
              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-10">
        <div className="rounded-[2rem] border border-black/10 bg-slate-950 p-8 text-white shadow-[0_24px_80px_rgba(15,23,42,0.14)] dark:border-white/10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
            From app brief to launch campaign
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Turn raw app notes into a launch page, email, and social story merchants can act on.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            SEOCopy helps Shopify app founders, agencies, and app teams reuse one positioning brief across launch channels without waiting on a full campaign cycle. Use it before App Store submission, a feature relaunch, partner announcement, or launch-week promotion.
          </p>
          <Link
            href="/generate?source=shopify-app-launch-copy-generator-cta"
            className="mt-8 inline-flex rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            Try Two Free Generations
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight">Shopify app launch copy generator questions</h2>
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
