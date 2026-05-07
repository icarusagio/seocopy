import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Product Positioning Generator",
  description:
    "Generate product positioning statements, audience angles, differentiators, messaging pillars, SEO snippets, FAQs, and CTA copy from one product brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/product-positioning-generator",
  },
  keywords: [
    "product positioning generator",
    "AI positioning generator",
    "positioning statement generator",
    "brand positioning generator",
    "product messaging generator",
    "startup positioning generator",
  ],
  openGraph: {
    title: "Product Positioning Generator | SEOCopy",
    description:
      "Turn a rough product brief into sharper positioning statements, differentiators, messaging pillars, SEO metadata, FAQs, and CTA variants.",
    url: "https://seocopy.vercel.app/product-positioning-generator",
    type: "website",
  },
};

const outputs = [
  {
    label: "Positioning statement",
    title: "Name the buyer, category, promise, and proof",
    body: "Create clear positioning statements that explain who the product is for, what category it belongs in, why it matters, and why buyers should believe it.",
  },
  {
    label: "Differentiation angles",
    title: "Move beyond generic benefit claims",
    body: "Generate competitor-aware angles, unique mechanisms, proof points, objection reducers, and wedge messages that make the offer easier to remember.",
  },
  {
    label: "Go-to-market copy",
    title: "Turn positioning into assets you can ship",
    body: "Draft hero copy, messaging pillars, SEO titles, meta descriptions, FAQ answers, social previews, and CTA variants from the same product brief.",
  },
];

const workflow = [
  "Describe the product, audience, current alternatives, strongest proof, business model, and the conversion action you want.",
  "Add category context, competitors, customer pains, objections, keywords, and any claims or regulated language to avoid.",
  "Generate positioning statements, differentiation angles, messaging pillars, SEO snippets, FAQs, and CTA copy.",
  "Use the strongest angle across your homepage hero, launch page, sales deck, ads, outbound, and social profile copy.",
];

const examples = [
  {
    brief: "AI SEO copy generator for founders",
    positioning:
      "For founders shipping new pages every week, SEOCopy is the AI SEO copy workspace that turns rough product notes into search-ready metadata and launch copy without waiting on a growth team.",
  },
  {
    brief: "Shopify back-in-stock alerts app",
    positioning:
      "For Shopify merchants losing sales to stockouts, RestockSignal is the lightweight back-in-stock alert app that captures demand and emails shoppers as soon as products return.",
  },
  {
    brief: "Agency reporting automation tool",
    positioning:
      "For small agencies buried in manual client updates, the platform turns scattered campaign data into polished weekly reports before account managers start their day.",
  },
];

const faqs = [
  {
    question: "What is a product positioning generator?",
    answer:
      "A product positioning generator turns product, audience, category, competitor, proof, and objection inputs into concise positioning statements and supporting messaging angles.",
  },
  {
    question: "Can SEOCopy generate messaging pillars too?",
    answer:
      "Yes. SEOCopy can generate positioning statements, differentiators, messaging pillars, hero copy, SEO titles, meta descriptions, FAQ answers, social previews, and CTA variants from one brief.",
  },
  {
    question: "Who should use a positioning generator?",
    answer:
      "Founders, marketers, consultants, agencies, Shopify merchants, and small business teams can use it when a product needs clearer website, launch, sales, or outbound messaging.",
  },
  {
    question: "How many positioning briefs can I generate for free?",
    answer:
      "You can run two free generations without creating an account. After that, buy one additional generation for $5 or use the $19/month plan for ongoing SEO and copy production.",
  },
];

export default function ProductPositioningGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,253,245,0.9))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(22,78,99,0.6))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Product Positioning Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate product positioning that tells buyers why you matter.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy turns your product, market, audience, proof, and competitors into positioning statements, differentiation angles, messaging pillars, SEO snippets, and CTA copy you can ship.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=product-positioning-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate positioning
              </Link>
              <a
                href="#examples"
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950 dark:border-white/15 dark:text-slate-200 dark:hover:border-white dark:hover:text-white"
              >
                See examples
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/10 bg-white/85 p-7 shadow-[0_24px_80px_rgba(15,23,42,0.1)] dark:border-white/10 dark:bg-white/5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-700 dark:text-cyan-300">
              From vague notes to market-ready message
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
            Positioning outputs
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            One brief, a sharper market message.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {outputs.map((item) => (
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
            Product positioning examples
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Turn a product description into a buyer-specific reason to choose you.
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {examples.map((example) => (
              <article key={example.brief} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">Brief</p>
                <p className="mt-2 font-semibold">{example.brief}</p>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">Positioning</p>
                <p className="mt-2 leading-7 text-slate-300">{example.positioning}</p>
              </article>
            ))}
          </div>
          <Link
            href="/generate?source=product-positioning-generator"
            className="mt-8 inline-flex rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            Generate your positioning
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-6xl px-6 pb-24 lg:px-10">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-300">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Product positioning generator questions
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <article key={faq.question} className="rounded-[1.5rem] border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-white/5">
              <h3 className="text-xl font-semibold">{faq.question}</h3>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <script
        type="application/ld+json"
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
