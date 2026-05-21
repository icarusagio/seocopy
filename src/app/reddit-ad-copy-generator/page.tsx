import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reddit Ad Copy Generator",
  description:
    "Generate Reddit ad copy, promoted post headlines, community-aware angles, comment-safe proof, FAQs, and conversion CTAs for high-intent subreddit campaigns.",
  alternates: {
    canonical: "https://seocopy.vercel.app/reddit-ad-copy-generator",
  },
  keywords: [
    "Reddit ad copy generator",
    "Reddit ads generator",
    "promoted post copy generator",
    "subreddit ad copy",
    "Reddit campaign copy",
    "Reddit promoted post headline ideas",
  ],
  openGraph: {
    title: "Reddit Ad Copy Generator | SEOCopy",
    description:
      "Turn offers, product launches, demos, and landing pages into Reddit promoted post headlines, body copy, community angles, FAQs, and conversion CTAs.",
    url: "https://seocopy.vercel.app/reddit-ad-copy-generator",
    type: "website",
  },
};

const outputs = [
  {
    label: "Promoted posts",
    title: "Headlines and body copy that respect community context",
    body: "Draft Reddit promoted post headlines, body variants, proof-led hooks, and transparent CTAs for subreddit audiences that punish generic ad language.",
  },
  {
    label: "Intent-led angles",
    title: "Campaign copy for research, comparison, and purchase moments",
    body: "Turn one offer brief into problem-aware angles, competitor comparison hooks, founder notes, demo invites, and landing page snippets for high-intent communities.",
  },
  {
    label: "Comment-aware proof",
    title: "Prepare answers before the campaign goes live",
    body: "Generate FAQ responses, objection reducers, credibility notes, and next-step CTAs that help teams handle comment scrutiny without rewriting the campaign.",
  },
];

const workflow = [
  "Enter your product, audience, subreddit context, offer, proof, landing page, and the conversion action you want Reddit visitors to take.",
  "Choose a tone such as transparent, founder-led, technical, practical, skeptical-audience friendly, comparison-led, or community-native.",
  "Review promoted post headlines, body copy, comment-response FAQs, landing page snippets, and CTA variants.",
  "Launch the strongest variants in Reddit Ads and reuse matching proof on landing pages, demo emails, product pages, and sales follow-ups.",
];

const faqs = [
  {
    question: "What is a Reddit ad copy generator?",
    answer:
      "A Reddit ad copy generator turns an offer, product, landing page, or campaign brief into promoted post headlines, body copy, community-aware angles, FAQ responses, and calls to action built for subreddit audiences.",
  },
  {
    question: "How is Reddit ad copy different from other paid social copy?",
    answer:
      "Reddit ad copy usually needs more transparency, proof, and context than generic paid social ads. Strong Reddit ads explain who the product is for, why the offer belongs in the community, what proof supports the claim, and what next step is worth taking.",
  },
  {
    question: "What should a Reddit promoted post say?",
    answer:
      "A strong Reddit promoted post should lead with the audience problem, show the practical outcome, acknowledge skepticism, include specific proof, and point to a clear next action such as try the tool, compare options, book a demo, or read the landing page.",
  },
  {
    question: "How many free Reddit ad copy generations do I get?",
    answer:
      "You can run two free generations without creating an account. After that, buy one more generation for $5 or use the $19/month plan for ongoing ad copy, landing page, email, product, and SEO copy production.",
  },
];

export default function RedditAdCopyGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(239,246,255,1),rgba(236,253,245,0.92))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.96),rgba(20,83,45,0.48))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-800 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-200">
              Reddit Ad Copy Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate Reddit ad copy that sounds specific enough for skeptical communities.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy turns campaign briefs, product proof, and landing pages into Reddit promoted post headlines, body copy, community angles, FAQs, and conversion CTAs.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=reddit-ad-copy-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate Reddit Ads
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
              Four-step workflow
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
            Copy blocks included
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Build promoted posts around the proof and context Reddit audiences expect.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {outputs.map((item) => (
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
            Community-aware conversion
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Align the promoted post, landing page, and comment answers before Reddit spend starts.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            Use SEOCopy to connect Reddit ad copy, proof points, objection handling, landing page snippets, and CTAs around one campaign promise.
          </p>
          <Link
            href="/generate?source=reddit-ad-copy-generator-cta"
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
