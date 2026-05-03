import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ Generator for SEO Pages",
  description:
    "Generate SEO FAQs, answer snippets, objection-handling questions, FAQ schema copy, and conversion CTAs for landing pages, product pages, and service pages.",
  alternates: {
    canonical: "https://seocopy.vercel.app/faq-generator",
  },
  keywords: [
    "FAQ generator",
    "SEO FAQ generator",
    "AI FAQ generator",
    "FAQ schema generator",
    "website FAQ generator",
    "landing page FAQ generator",
  ],
  openGraph: {
    title: "FAQ Generator for SEO Pages | SEOCopy",
    description:
      "Turn rough offer notes, customer objections, and target keywords into useful FAQs, concise answers, schema-ready copy, and conversion CTAs.",
    url: "https://seocopy.vercel.app/faq-generator",
    type: "website",
  },
};

const outputs = [
  {
    label: "Search intent",
    title: "Questions that match what buyers actually ask",
    body: "Generate FAQ questions around pricing, fit, timing, alternatives, proof, process, returns, shipping, booking, and other high-intent search concerns.",
  },
  {
    label: "Answer copy",
    title: "Concise answers built for snippets and trust",
    body: "Draft clear answers that explain the offer, handle objections, include relevant keywords naturally, and move readers toward the next step.",
  },
  {
    label: "Conversion",
    title: "FAQ sections that support the CTA",
    body: "Pair each answer with stronger page metadata, proof points, microcopy, and CTA variants so the FAQ section helps visitors buy, book, or request a quote.",
  },
];

const workflow = [
  "Paste your page topic, target keyword, offer, audience, objections, proof points, and main conversion goal.",
  "Choose whether the page is for SaaS, ecommerce, local services, a product page, a collection page, or a launch landing page.",
  "Review SEO FAQ questions, concise answers, metadata ideas, schema-ready copy, and CTA variants.",
  "Publish the best FAQs on the page, add the strongest answer snippets to nearby sections, and test the CTA wording.",
];

const faqs = [
  {
    question: "What is an FAQ generator?",
    answer:
      "An FAQ generator turns rough page notes, customer objections, and target keywords into frequently asked questions with concise answers that can support SEO, trust, and conversions.",
  },
  {
    question: "Can SEOCopy generate SEO-friendly FAQ answers?",
    answer:
      "Yes. SEOCopy can draft FAQ questions and answers around search intent, objections, proof points, and conversion goals so the section reads naturally while still supporting the page keyword.",
  },
  {
    question: "What pages should use generated FAQs?",
    answer:
      "Use generated FAQs on SaaS landing pages, ecommerce product pages, Shopify collection pages, local service pages, pricing pages, booking pages, and launch pages where visitors need confidence before taking action.",
  },
  {
    question: "How many free FAQ generations do I get?",
    answer:
      "You can run two free generations without creating an account. After that, buy one more generation for $5 or use the $19/month plan for ongoing SEO and website copy production.",
  },
];

export default function FaqGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(240,249,255,1),rgba(245,243,255,0.9))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.96),rgba(49,46,129,0.58))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-indigo-800 dark:border-indigo-400/20 dark:bg-indigo-400/10 dark:text-indigo-200">
              FAQ Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate SEO FAQs that answer buyer objections before they bounce.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy turns your offer, target keyword, audience, and proof points into FAQ questions, concise answers, schema-ready copy, and CTAs for pages that need more trust and search depth.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=faq-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate FAQs
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
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-700 dark:text-indigo-300">
              Four-step workflow
            </p>
            <div className="mt-6 space-y-4">
              {workflow.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-2xl border border-slate-200 p-4 dark:border-white/10">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-800 dark:bg-cyan-300 dark:text-slate-950">
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
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-indigo-700 dark:text-indigo-300">
            FAQ copy included
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Build FAQ sections around search intent, confidence, and the next action.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {outputs.map((item) => (
            <article key={item.label} className="rounded-[1.5rem] border border-black/10 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-700 dark:text-indigo-300">
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
            SEO trust layer
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Add useful answers where prospects are deciding whether to trust your page.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            Use SEOCopy to turn sales calls, support questions, product details, and customer objections into FAQ copy that supports organic discovery and makes the CTA feel safer.
          </p>
          <Link
            href="/generate?source=faq-generator-cta"
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
