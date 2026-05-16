import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "UGC Ad Script Generator",
  description:
    "Generate UGC ad scripts, creator hook ideas, testimonial-style product proof, short-form video CTAs, and landing page snippets from one campaign brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/ugc-ad-script-generator",
  },
  keywords: [
    "UGC ad script generator",
    "AI UGC script generator",
    "UGC ad scripts",
    "creator hook ideas",
    "testimonial ad script",
    "TikTok UGC script",
    "short-form video CTAs",
    "paid social video script",
  ],
  openGraph: {
    title: "UGC Ad Script Generator | SEOCopy",
    description:
      "Turn one product brief into UGC ad scripts, creator hooks, testimonial-style product proof, objections, CTAs, and landing page snippets.",
    url: "https://seocopy.vercel.app/ugc-ad-script-generator",
    type: "website",
  },
};

const scriptAssets = [
  {
    label: "Creator hook ideas",
    title: "Start with a native-feeling first three seconds",
    body: "Generate problem hooks, pattern interrupts, creator POV openings, and curiosity angles that fit TikTok, Reels, Shorts, and paid social tests.",
  },
  {
    label: "Testimonial-style product proof",
    title: "Make the script sound like a customer discovery moment",
    body: "Turn product benefits, objections, before-and-after moments, reviews, and social proof into testimonial-style talking points creators can record naturally.",
  },
  {
    label: "Short-form video CTAs",
    title: "End every UGC concept with a clear next step",
    body: "Draft swipe-up lines, shop-now prompts, trial CTAs, promo reminders, and landing page snippets that keep the ad promise consistent after the click.",
  },
];

const workflow = [
  "Paste the product, audience, offer, proof points, objections, creator style, and platform you want to test.",
  "Add review language, before-and-after moments, promotion details, compliance notes, and the landing page action.",
  "Generate UGC ad scripts, creator hook ideas, testimonial-style product proof, B-roll prompts, and short-form video CTAs.",
  "Match each script angle to a landing page headline or product page promise so paid traffic sees the same story after the click.",
];

const faqs = [
  {
    question: "What is a UGC ad script generator?",
    answer:
      "A UGC ad script generator turns a product or campaign brief into creator-style UGC ad scripts, hook ideas, testimonial-style product proof, objection handling, and short-form video CTAs.",
  },
  {
    question: "How is this different from the Instagram ad copy generator?",
    answer:
      "The Instagram ad copy generator focuses on placement-ready ad text for Reels, Stories, and carousel captions. This UGC ad script generator focuses on spoken short-form video scripts, creator POV hooks, B-roll prompts, proof moments, and natural testimonial-style delivery.",
  },
  {
    question: "Can SEOCopy write UGC scripts for Shopify products, SaaS, and services?",
    answer:
      "Yes. Paste the offer, audience, proof, reviews, objections, and tone to generate UGC ad scripts for Shopify products, SaaS trials, local services, creator offers, launches, and paid social campaigns.",
  },
  {
    question: "How many UGC ad script generations are free?",
    answer:
      "You can run two free generations with no signup. After that, buy one generation for $5 or use the $19/month plan for ongoing SEO, landing page, email, SMS, and paid social copy.",
  },
];

export default function UgcAdScriptGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-fuchsia-700 dark:text-fuchsia-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(250,245,255,0.92))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(134,25,143,0.38))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-fuchsia-200 bg-fuchsia-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-fuchsia-800 dark:border-fuchsia-400/20 dark:bg-fuchsia-400/10 dark:text-fuchsia-200">
              UGC Ad Script Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate UGC ad scripts for creator-style paid social videos.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy turns one product or campaign brief into UGC ad scripts, creator hook ideas, testimonial-style product proof, B-roll prompts, short-form video CTAs, and landing snippets that match the ad promise.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=ugc-ad-script-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-fuchsia-300 dark:text-slate-950 dark:hover:bg-fuchsia-200"
              >
                Generate UGC Ad Scripts
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
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-fuchsia-700 dark:text-fuchsia-300">
              Short-form script workflow
            </p>
            <div className="mt-6 space-y-4">
              {workflow.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-2xl border border-slate-200 p-4 dark:border-white/10">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-fuchsia-100 text-sm font-bold text-fuchsia-800 dark:bg-fuchsia-300 dark:text-slate-950">
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
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-fuchsia-700 dark:text-fuchsia-300">
            UGC ad assets included
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            One campaign brief, multiple creator-ready script angles for paid social tests.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {scriptAssets.map((item) => (
            <article key={item.label} className="rounded-[1.5rem] border border-black/10 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-fuchsia-700 dark:text-fuchsia-300">
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
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-fuchsia-200">
            Ad script-to-landing consistency
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Write the creator hook, proof moment, and landing page promise together.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            Use SEOCopy to align UGC ad scripts, creator hook ideas, product proof, objection reducers, SEO snippets, and destination-page copy around the same buyer intent and next step.
          </p>
          <Link
            href="/generate?source=ugc-ad-script-generator-cta"
            className="mt-8 inline-flex rounded-full bg-fuchsia-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-fuchsia-200"
          >
            Try Two Free Generations
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight">UGC ad script questions</h2>
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
