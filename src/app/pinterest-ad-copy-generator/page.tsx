import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pinterest Ad Copy Generator",
  description:
    "Generate Pinterest ad copy, promoted pin headlines, shopping campaign descriptions, creative angles, FAQs, and save-to-cart CTAs for visual commerce campaigns.",
  alternates: {
    canonical: "https://seocopy.vercel.app/pinterest-ad-copy-generator",
  },
  keywords: [
    "Pinterest ad copy generator",
    "Pinterest ads generator",
    "promoted pin copy generator",
    "Pinterest shopping ads copy",
    "Pinterest campaign copy",
    "promoted pin headline ideas",
  ],
  openGraph: {
    title: "Pinterest Ad Copy Generator | SEOCopy",
    description:
      "Turn product launches, seasonal offers, catalogs, and landing pages into promoted pin headlines, descriptions, creative angles, FAQs, and conversion CTAs.",
    url: "https://seocopy.vercel.app/pinterest-ad-copy-generator",
    type: "website",
  },
};

const outputs = [
  {
    label: "Promoted pins",
    title: "Ad headlines and descriptions that match visual buying intent",
    body: "Draft promoted pin headlines, descriptions, overlay copy, and keyword-aligned variants for people planning purchases, gifts, outfits, recipes, rooms, and projects.",
  },
  {
    label: "Shopping campaigns",
    title: "Catalog-ready copy for product and collection ads",
    body: "Turn one offer brief into product angles, collection hooks, seasonal sale variants, landing page snippets, and objection reducers for Pinterest shoppers.",
  },
  {
    label: "Creative testing",
    title: "Fresh concepts for saves, clicks, and checkout intent",
    body: "Generate creative themes, pin text overlays, audience-specific hooks, FAQ angles, and CTA options for testing promoted pins without rewriting from scratch.",
  },
];

const workflow = [
  "Enter your product, collection, audience, offer, visual concept, landing page, and the conversion action you want Pinterest shoppers to take.",
  "Choose a tone such as aspirational, practical, seasonal, giftable, premium, DIY-friendly, or trend-led.",
  "Review promoted pin headlines, descriptions, text overlay ideas, shopping ad angles, FAQ snippets, and CTA variants.",
  "Launch the strongest variants in Pinterest Ads and reuse matching copy on collection pages, product pages, emails, and social posts.",
];

const faqs = [
  {
    question: "What is a Pinterest ad copy generator?",
    answer:
      "A Pinterest ad copy generator turns a product, collection, offer, or campaign brief into promoted pin headlines, descriptions, overlay text ideas, shopping ad angles, FAQs, and calls to action built for visual discovery and purchase intent.",
  },
  {
    question: "How is this different from a Pinterest pin description generator?",
    answer:
      "Pinterest pin descriptions usually support organic discoverability and saves. Pinterest ad copy focuses on paid promoted pins, shopping campaigns, offer clarity, creative testing, landing page message match, and conversion CTAs for shoppers who may click or buy.",
  },
  {
    question: "What should Pinterest ads say?",
    answer:
      "Strong Pinterest ads connect the visual to a clear outcome: the product use case, who it is for, the seasonal or style angle, the benefit, the offer, and the next action such as shop the collection, save the idea, build the look, or claim the deal.",
  },
  {
    question: "How many free Pinterest ad copy generations do I get?",
    answer:
      "You can run two free generations without creating an account. After that, buy one more generation for $5 or use the $19/month plan for ongoing ad copy, landing page, email, product, and SEO copy production.",
  },
];

export default function PinterestAdCopyGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(253,242,248,1),rgba(255,247,237,0.92))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.96),rgba(136,19,55,0.5))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-rose-200 bg-rose-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-rose-800 dark:border-rose-400/20 dark:bg-rose-400/10 dark:text-rose-200">
              Pinterest Ad Copy Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate Pinterest ad copy that turns visual discovery into shopping intent.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy turns product briefs, seasonal offers, and landing pages into promoted pin headlines, descriptions, creative angles, FAQs, and save-to-cart CTAs.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=pinterest-ad-copy-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate Pinterest Ads
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
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rose-700 dark:text-rose-300">
              Four-step workflow
            </p>
            <div className="mt-6 space-y-4">
              {workflow.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-2xl border border-slate-200 p-4 dark:border-white/10">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-rose-100 text-sm font-bold text-rose-800 dark:bg-cyan-300 dark:text-slate-950">
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
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-rose-700 dark:text-rose-300">
            Copy blocks included
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Build promoted pins around the moment shoppers start planning what to buy next.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {outputs.map((item) => (
            <article key={item.label} className="rounded-[1.5rem] border border-black/10 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rose-700 dark:text-rose-300">
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
            Visual commerce conversion
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Match the pin promise, landing page, and checkout CTA before the campaign spends.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            Use SEOCopy to align promoted pin copy, shopping campaign angles, collection page snippets, FAQs, and CTAs around the same visual buying intent.
          </p>
          <Link
            href="/generate?source=pinterest-ad-copy-generator-cta"
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
