import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Brand Voice Generator",
  description:
    "Generate brand voice guidelines, tone examples, SEO metadata, messaging angles, and conversion-ready copy from one positioning brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/brand-voice-generator",
  },
  keywords: [
    "brand voice generator",
    "AI brand voice generator",
    "brand tone generator",
    "brand messaging generator",
    "copywriting voice generator",
    "SEO brand voice copy generator",
  ],
  openGraph: {
    title: "Brand Voice Generator | SEOCopy",
    description:
      "Turn rough positioning, audience notes, and examples into a reusable brand voice, tone guide, SEO snippets, and CTA variants.",
    url: "https://seocopy.vercel.app/brand-voice-generator",
    type: "website",
  },
};

const outputBlocks = [
  {
    label: "Voice system",
    title: "Define how your product should sound before drafting more pages",
    body: "Create a practical brand voice with tone pillars, words to use, words to avoid, audience cues, and example rewrites your team can reuse.",
  },
  {
    label: "Search snippets",
    title: "Keep SEO metadata on-brand across every channel",
    body: "Generate title tags, meta descriptions, Open Graph copy, and SERP-safe messaging that stays consistent with your positioning.",
  },
  {
    label: "Conversion copy",
    title: "Translate voice guidelines into headlines and CTAs",
    body: "Turn the voice brief into landing-page headlines, subheads, proof bullets, objection handlers, and CTAs built for signups, demos, or checkout starts.",
  },
];

const workflow = [
  "Paste your product, audience, current copy examples, competitors, proof points, and the tone you want buyers to feel.",
  "Add guardrails: banned phrases, compliance notes, claims to avoid, preferred vocabulary, and channels where the voice will be used.",
  "Generate voice pillars, do/don't examples, SEO metadata, landing-page copy variants, and CTA options in one pass.",
  "Share the voice guide with founders, marketers, agencies, or freelancers before publishing new pages and campaigns.",
];

const examples = [
  "Founder-led SaaS voice guide for a product moving from technical copy to benefit-led messaging",
  "Shopify brand tone system for product pages, collections, ads, and email campaigns",
  "Agency client voice brief that keeps landing pages, SEO snippets, and social copy consistent",
  "Local service business messaging guide for clearer website copy, quote requests, and Google Business Profile posts",
];

const faqs = [
  {
    question: "What is a brand voice generator?",
    answer:
      "A brand voice generator turns positioning notes, audience details, sample copy, and tone preferences into reusable voice guidelines plus on-brand examples for websites, SEO metadata, ads, emails, and social content.",
  },
  {
    question: "Can SEOCopy create brand voice guidelines and marketing copy together?",
    answer:
      "Yes. SEOCopy can draft tone pillars, vocabulary guidance, do/don't examples, SEO titles, meta descriptions, landing-page headlines, proof bullets, and CTA variants from the same brand brief.",
  },
  {
    question: "What should I include in a brand voice brief?",
    answer:
      "Include your product, target buyer, category, current copy examples, competitors, proof points, desired tone, claims to avoid, preferred vocabulary, and the conversion action you want the copy to support.",
  },
  {
    question: "Who should use an AI brand voice generator?",
    answer:
      "Founders, marketers, ecommerce teams, agencies, and freelancers can use it to create a consistent voice before shipping landing pages, product pages, SEO snippets, campaign copy, and customer-facing messages.",
  },
];

export default function BrandVoiceGenerator() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,254,255,0.88))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(22,78,99,0.58))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Brand Voice Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate a brand voice that keeps every page and campaign consistent.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy turns rough positioning into brand voice guidelines, tone examples, SEO metadata, landing-page copy, and CTA variants your team can reuse across every growth channel.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=brand-voice-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate Brand Voice Copy
              </Link>
              <a
                href="#examples"
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950 dark:border-white/15 dark:text-slate-200 dark:hover:border-white dark:hover:text-white"
              >
                See Voice Examples
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
            Brand voice assets included
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            One positioning brief, clearer copy for SEO, campaigns, and conversion.
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
            Example brand voice briefs
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Give every new page, product launch, and campaign a shared messaging foundation.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {examples.map((example) => (
              <div key={example} className="rounded-2xl border border-white/10 bg-white/5 p-5 font-medium">
                {example}
              </div>
            ))}
          </div>
          <Link
            href="/generate?source=brand-voice-generator-cta"
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
