import type { Metadata } from "next";
import Link from "next/link";

const route = "/tagline-generator";
const canonical = `https://seocopy.vercel.app${route}`;

export const metadata: Metadata = {
  title: "Tagline Generator",
  description:
    "Generate brand taglines, homepage one-liners, slogan options, SEO snippets, and CTA variants from one positioning brief.",
  alternates: {
    canonical,
  },
  keywords: [
    "tagline generator",
    "AI tagline generator",
    "slogan generator",
    "brand tagline generator",
    "business tagline generator",
    "startup tagline generator",
  ],
  openGraph: {
    title: "Tagline Generator | SEOCopy",
    description:
      "Turn a rough product, audience, promise, and differentiator into taglines, slogans, homepage one-liners, SEO snippets, and CTA angles.",
    url: canonical,
    type: "website",
  },
};

const outputBlocks = [
  {
    label: "Positioning lines",
    title: "Turn a messy offer into crisp one-liners",
    body: "Generate taglines, slogans, homepage one-liners, and short positioning statements that explain who the product is for and why it matters.",
  },
  {
    label: "Channel variants",
    title: "Adapt the tagline for search, social, and landing pages",
    body: "Package the winning angle with SEO titles, meta descriptions, social preview copy, hero subheads, and CTA options for launch assets.",
  },
  {
    label: "Buyer context",
    title: "Keep each option tied to a real conversion goal",
    body: "Prompt around the audience, promise, proof, tone, and next action so the tagline can support signups, purchases, bookings, or waitlist joins.",
  },
];

const workflow = [
  "Paste the product, service, app, campaign, or brand idea you need to explain.",
  "Add the audience, core promise, differentiators, tone, proof points, and words to include or avoid.",
  "Generate tagline families with slogans, homepage one-liners, SEO snippets, social previews, and CTA variants.",
  "Test the clearest line in your hero, product launch, ad creative, pitch deck, or checkout-adjacent copy.",
];

const examples = [
  "Shopify app tagline for merchants who need more back-in-stock revenue",
  "SaaS homepage one-liner for a startup launch page",
  "Local service business slogan that should drive quote requests",
  "AI tool positioning line for a product hunt or social launch",
];

const faqs = [
  {
    question: "What is a tagline generator?",
    answer:
      "A tagline generator turns a product, audience, value proposition, differentiator, and tone brief into short slogans, brand lines, homepage one-liners, and campaign copy options.",
  },
  {
    question: "Can SEOCopy generate SEO copy around the tagline too?",
    answer:
      "Yes. SEOCopy can pair tagline options with SEO titles, meta descriptions, social previews, hero subheads, proof bullets, and CTA variants so the line is ready to test on a page.",
  },
  {
    question: "Who should use an AI tagline generator?",
    answer:
      "Founders, Shopify merchants, agencies, creators, local businesses, and marketers can use it when they need clearer brand positioning, campaign slogans, launch copy, or homepage messaging.",
  },
  {
    question: "How many free tagline generations are included?",
    answer:
      "You can run two free generations without creating an account. After that, buy one additional generation for $5 or use the $19/month plan for ongoing SEO and copy production.",
  },
];

export default function TaglineGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,254,255,0.88))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(22,78,99,0.58))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Tagline Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate taglines, slogans, and homepage one-liners that make the offer click.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy turns product notes, audience context, proof points, and differentiators into tagline options, SEO snippets, social previews, hero subheads, and CTA variants.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=tagline-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate Taglines
              </Link>
              <a
                href="#examples"
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950 dark:border-white/15 dark:text-slate-200 dark:hover:border-white dark:hover:text-white"
              >
                See Tagline Briefs
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
            Tagline package included
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            One positioning brief, multiple slogan angles for launch, search, and conversion.
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
            Example tagline briefs
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Draft tagline options for launches, homepages, ads, pitch decks, and product pages.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {examples.map((example) => (
              <div key={example} className="rounded-2xl border border-white/10 bg-white/5 p-5 font-medium">
                {example}
              </div>
            ))}
          </div>
          <Link
            href="/generate?source=tagline-generator-cta"
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
