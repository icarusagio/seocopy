import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SEO Content Generator",
  description:
    "Generate SEO content briefs, page titles, meta descriptions, outlines, FAQs, social previews, and CTA variants from one keyword, URL, or offer brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/seo-content-generator",
  },
  keywords: [
    "SEO content generator",
    "AI SEO content generator",
    "SEO copy generator",
    "content brief generator",
    "SEO outline generator",
    "AI content writing tool",
  ],
  openGraph: {
    title: "SEO Content Generator | SEOCopy",
    description:
      "Turn one keyword, URL, or offer brief into SEO content angles, metadata, outlines, FAQs, social previews, and conversion CTAs.",
    url: "https://seocopy.vercel.app/seo-content-generator",
    type: "website",
  },
};

const contentAssets = [
  {
    label: "Search snippets",
    title: "Titles and meta descriptions built for clicks",
    body: "Draft keyword-aware title tags, meta descriptions, Open Graph copy, and social previews that make each page easier to publish and share.",
  },
  {
    label: "Content structure",
    title: "Briefs, outlines, and FAQ angles",
    body: "Move from a rough topic to H2 ideas, search-intent notes, FAQ questions, objection-handling sections, and internal-link prompts faster.",
  },
  {
    label: "Conversion copy",
    title: "CTAs that connect the content to revenue",
    body: "Generate benefit-led headlines, closing sections, and calls to action so SEO pages have a clear path from search traffic to signup, demo, purchase, or inquiry.",
  },
];

const workflow = [
  "Paste a target keyword, page URL, product offer, or rough content brief.",
  "Add audience, search intent, differentiators, proof, and the conversion action you want.",
  "Generate SEO titles, meta descriptions, outlines, FAQ ideas, social previews, and CTA variants.",
  "Use the strongest output to publish a new page, refresh thin content, or brief a writer.",
];

const faqs = [
  {
    question: "What is an SEO content generator?",
    answer:
      "An SEO content generator turns a keyword, URL, topic, or offer brief into search-ready assets such as title tags, meta descriptions, outlines, FAQ ideas, social previews, and calls to action.",
  },
  {
    question: "Can SEOCopy generate both SEO metadata and content outlines?",
    answer:
      "Yes. SEOCopy can produce metadata, content angles, outline sections, FAQ ideas, headline variants, social preview copy, and CTA options from the same brief so the page stays aligned.",
  },
  {
    question: "Who should use an AI SEO content generator?",
    answer:
      "Founders, marketers, agencies, Shopify merchants, and small teams can use it when they need publishable SEO copy, page refresh ideas, or writer briefs without starting from a blank page.",
  },
  {
    question: "How many free SEO content generations do I get?",
    answer:
      "You can run two free generations without creating an account. After that, buy one more generation for $5 or use the $19/month plan for ongoing SEO content production.",
  },
];

export default function SeoContentGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,254,255,0.88))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(8,47,73,0.68))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              SEO Content Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate SEO content that is easier to rank, brief, and convert.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy turns a keyword, URL, or rough offer into search snippets, content outlines, FAQ ideas, social previews, and CTA variants you can publish or hand to a writer.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=seo-content-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate SEO Content
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
            Search-ready assets included
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            One content brief, multiple publish-ready SEO angles.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {contentAssets.map((item) => (
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
            From keyword to conversion path
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Stop publishing SEO content with no next step.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            Use SEOCopy to connect search intent, metadata, page structure, and conversion CTAs before you brief the piece or ship the page.
          </p>
          <Link
            href="/generate?source=seo-content-generator-cta"
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
