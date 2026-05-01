import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Meta Tag Generator",
  description:
    "Generate SEO title tags, meta descriptions, Open Graph tags, and social preview copy from a URL or short product brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/meta-tag-generator",
  },
  keywords: [
    "meta tag generator",
    "AI meta tag generator",
    "SEO meta tag generator",
    "Open Graph tag generator",
    "meta title and description generator",
    "social preview generator",
  ],
  openGraph: {
    title: "Meta Tag Generator | SEOCopy",
    description:
      "Create search and social metadata that is ready to paste into your CMS, ecommerce platform, or launch page.",
    url: "https://seocopy.vercel.app/meta-tag-generator",
    type: "website",
  },
};

const outputs = [
  {
    title: "Search metadata",
    body: "SEO title and meta description options tuned for clear intent, benefits, and snippet-ready length.",
  },
  {
    title: "Social preview tags",
    body: "Open Graph title and description ideas so shared links communicate the offer before someone clicks.",
  },
  {
    title: "Landing page angles",
    body: "Headline, subheadline, and CTA variants that keep the page promise aligned with the search snippet.",
  },
];

const workflow = [
  "Paste a live URL, draft page copy, or rough product description.",
  "Add the target audience, keyword, and conversion goal when you have them.",
  "Review the generated title, description, OG copy, and page copy variants.",
  "Publish the best version in your CMS, storefront, or landing page builder.",
];

const faqs = [
  {
    question: "What meta tags can SEOCopy generate?",
    answer:
      "SEOCopy generates SEO title tags, meta descriptions, Open Graph titles, Open Graph descriptions, and matching landing page headline and CTA ideas.",
  },
  {
    question: "Can I generate meta tags from an existing URL?",
    answer:
      "Yes. Paste a URL or describe the page and offer. SEOCopy uses the context you provide to draft metadata that matches the page intent.",
  },
  {
    question: "Is this only for developers?",
    answer:
      "No. Founders, marketers, ecommerce operators, and content teams can use the output directly in CMS fields, Shopify product pages, landing page builders, or website repos.",
  },
  {
    question: "How many meta tag generations are free?",
    answer:
      "You can run two free generations without creating an account. After that, buy a single generation for $5 or use the $19/month plan for ongoing copy production.",
  },
];

const faqJsonLd = {
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
};

export default function MetaTagGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(219,234,254,0.82))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(30,64,175,0.55))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Meta Tag Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate SEO and social meta tags that make the click obvious.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Turn a URL, product description, or rough page brief into SEO title
              tags, meta descriptions, Open Graph copy, and matching landing page
              angles you can publish without starting from a blank field.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=meta-tag-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate Meta Tags
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
              Output set
            </p>
            <div className="mt-6 space-y-4">
              {outputs.map((output) => (
                <article key={output.title} className="rounded-2xl border border-slate-200 p-4 dark:border-white/10">
                  <h2 className="text-xl font-semibold">{output.title}</h2>
                  <p className="mt-2 leading-7 text-slate-600 dark:text-slate-300">{output.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-10">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-300">
            Workflow
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            From blank metadata fields to publishable search and social copy.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {workflow.map((step, index) => (
            <div key={step} className="rounded-[1.5rem] border border-black/10 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-300">
                Step {index + 1}
              </p>
              <p className="mt-3 text-lg leading-7 text-slate-700 dark:text-slate-200">{step}</p>
            </div>
          ))}
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
    </main>
  );
}
