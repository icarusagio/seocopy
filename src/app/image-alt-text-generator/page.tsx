import type { Metadata } from "next";
import Link from "next/link";

const route = "/image-alt-text-generator";
const canonical = `https://seocopy.vercel.app${route}`;

export const metadata: Metadata = {
  title: "Image Alt Text Generator",
  description:
    "Generate descriptive image alt text, accessibility-friendly variants, SEO captions, product image metadata, and CTA-ready copy from one image brief.",
  alternates: {
    canonical,
  },
  keywords: [
    "image alt text generator",
    "AI alt text generator",
    "SEO alt text generator",
    "product image alt text generator",
    "accessibility alt text generator",
    "ecommerce image alt text",
  ],
  openGraph: {
    title: "Image Alt Text Generator | SEOCopy",
    description:
      "Turn image notes into accessible alt text, SEO captions, product image snippets, social previews, and metadata-ready copy.",
    url: canonical,
    type: "website",
  },
};

const outputBlocks = [
  {
    label: "Accessible descriptions",
    title: "Write useful alt text without keyword stuffing",
    body: "Create concise, screen-reader-friendly descriptions that explain the image context, visible subject, and page relevance while avoiding spammy repetition.",
  },
  {
    label: "SEO and merchandising",
    title: "Match image copy to the page intent",
    body: "Generate product image alt text, category image descriptions, caption variants, and metadata snippets that support ecommerce, SaaS, and local landing pages.",
  },
  {
    label: "Publishing workflow",
    title: "Turn one brief into CMS-ready variants",
    body: "Produce primary alt text, short variants, filename ideas, caption copy, Open Graph notes, and QA checks so teams can update image-heavy pages faster.",
  },
];

const workflow = [
  "Paste the image subject, page URL or keyword, product/service context, audience, and any accessibility constraints.",
  "Add visual details that matter for the reader, including product attributes, setting, action, emotion, or local/service relevance.",
  "Generate primary alt text, concise variants, SEO captions, filename ideas, and metadata snippets for the publishing queue.",
  "Review for accuracy, remove decorative-image copy where needed, and paste the best variant into Shopify, Webflow, WordPress, or your CMS.",
];

const examples = [
  "Alt text for Shopify product photos before a collection launch",
  "Image descriptions for a SaaS feature screenshot library",
  "Local service gallery captions for city landing pages",
  "Accessible blog image alt text for a content refresh sprint",
];

const faqs = [
  {
    question: "What is an image alt text generator?",
    answer:
      "An image alt text generator turns image notes, page context, keywords, and audience details into concise alternative text that helps screen-reader users understand the image and gives search engines clearer context.",
  },
  {
    question: "Can SEOCopy write ecommerce product image alt text?",
    answer:
      "Yes. SEOCopy can create product image alt text, collection image descriptions, filename ideas, captions, and metadata snippets for Shopify merchants and ecommerce teams updating product detail pages or category pages.",
  },
  {
    question: "Should alt text include SEO keywords?",
    answer:
      "Use keywords only when they naturally describe the image and page context. The best alt text is accurate, concise, and useful for accessibility first, with SEO context added only when it improves clarity.",
  },
  {
    question: "What inputs make better alt text output?",
    answer:
      "Include the image subject, product or service name, visible details, page purpose, target keyword, audience, and whether the image is informative, decorative, instructional, or part of a product gallery.",
  },
];

export default function ImageAltTextGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,254,255,0.9))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(8,47,73,0.55))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Image Alt Text Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate accessible image alt text that also supports SEO.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy turns rough image notes into accurate alt text, SEO captions, filename ideas, social snippets, and product image metadata so teams can refresh image-heavy pages faster without sacrificing accessibility.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=image-alt-text-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate Alt Text
              </Link>
              <a
                href="#examples"
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950 dark:border-white/15 dark:text-slate-200 dark:hover:border-white dark:hover:text-white"
              >
                See Alt Text Examples
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
            Alt text copy included
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            One image brief, every publishing asset needed for accessible, search-aware image updates.
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
            Example image briefs
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Draft alt text from image context, page intent, visible details, and the SEO outcome you want to support.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {examples.map((example) => (
              <div key={example} className="rounded-2xl border border-white/10 bg-white/5 p-5 font-medium">
                {example}
              </div>
            ))}
          </div>
          <Link
            href="/generate?source=image-alt-text-generator-cta"
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
