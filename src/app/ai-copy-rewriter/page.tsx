import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Copy Rewriter",
  description:
    "Rewrite rough website, product, ad, and landing page copy into clearer SEO snippets, headlines, social previews, and CTA variants.",
  alternates: {
    canonical: "https://seocopy.vercel.app/ai-copy-rewriter",
  },
  keywords: [
    "AI copy rewriter",
    "copy rewriter",
    "rewrite website copy",
    "marketing copy rewriter",
    "landing page copy rewriter",
    "SEO copy rewriter",
    "AI copywriting tool",
  ],
  openGraph: {
    title: "AI Copy Rewriter | SEOCopy",
    description:
      "Turn weak drafts into clearer SEO metadata, landing page headlines, social previews, and CTA options without starting over.",
    url: "https://seocopy.vercel.app/ai-copy-rewriter",
    type: "website",
  },
};

const rewriteTargets = [
  {
    label: "Website copy",
    title: "Rewrite vague pages into clear positioning",
    body: "Paste an old homepage section, service page, or product note and generate sharper headlines, subheadlines, and benefit-led copy.",
  },
  {
    label: "SEO snippets",
    title: "Improve titles, descriptions, and previews",
    body: "Transform rough copy into search snippets and Open Graph copy that explain the offer before people click.",
  },
  {
    label: "Conversion CTAs",
    title: "Find stronger next-step language",
    body: "Rewrite soft calls to action into specific CTA variants, objection reducers, and short supporting microcopy.",
  },
];

const workflow = [
  "Paste the copy you want to improve, or summarize the page that needs a rewrite.",
  "Add the audience, offer, industry, and tone so the rewrite keeps the right context.",
  "Generate SEO metadata, headline options, social previews, and CTA variants in one pass.",
  "Copy the strongest version into the page, ad, email, or launch doc you are updating.",
];

const faqs = [
  {
    question: "What is an AI copy rewriter?",
    answer:
      "An AI copy rewriter turns existing draft copy into clearer, more specific messaging. SEOCopy focuses the rewrite on SEO titles, meta descriptions, landing page headlines, social previews, and calls to action.",
  },
  {
    question: "Can I rewrite website copy without a URL?",
    answer:
      "Yes. You can paste rough copy, a product description, or a short business brief. A URL is optional when you want SEOCopy to use an existing page for context.",
  },
  {
    question: "What types of copy can SEOCopy rewrite?",
    answer:
      "SEOCopy can help rewrite homepage hero copy, product descriptions, service pages, ad angles, SEO snippets, social previews, and CTA language for founders, marketers, agencies, and ecommerce teams.",
  },
  {
    question: "How many free copy rewrites do I get?",
    answer:
      "You can run two free generations without creating an account. After that, buy one more generation for $5 or use the $19/month plan for ongoing copy rewrites.",
  },
];

export default function AiCopyRewriterPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,254,255,0.88))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(8,47,73,0.68))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              AI Copy Rewriter
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Rewrite rough copy into clearer SEO and conversion assets.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy helps founders, agencies, marketers, and ecommerce teams turn weak drafts into search snippets, landing page headlines, social previews, and CTA language that is easier to ship.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=ai-copy-rewriter"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Rewrite Copy Free
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
            Rewrite outputs included
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            One draft becomes multiple clearer copy options.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {rewriteTargets.map((item) => (
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
            Better copy without a blank page
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Keep the useful context from your draft, then make the message easier to understand.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            Use SEOCopy when a page, product listing, ad, or campaign doc already exists but needs sharper search positioning and more specific conversion language.
          </p>
          <Link
            href="/generate?source=ai-copy-rewriter-cta"
            className="mt-8 inline-flex rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            Try Two Free Rewrites
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
