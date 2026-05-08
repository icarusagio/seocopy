import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pinterest Pin Description Generator",
  description:
    "Generate Pinterest pin descriptions, board SEO titles, product pin copy, idea pin hooks, keyword angles, and CTA variants from one campaign brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/pinterest-pin-description-generator",
  },
  keywords: [
    "Pinterest pin description generator",
    "AI Pinterest description generator",
    "Pinterest SEO generator",
    "product pin description generator",
    "Pinterest marketing copy generator",
    "Pinterest keyword description generator",
  ],
  openGraph: {
    title: "Pinterest Pin Description Generator | SEOCopy",
    description:
      "Turn a product, blog post, collection, or campaign brief into Pinterest pin descriptions, SEO keywords, board copy, and CTA variants.",
    url: "https://seocopy.vercel.app/pinterest-pin-description-generator",
    type: "website",
  },
};

const deliverables = [
  {
    label: "Pin descriptions",
    title: "Write pins that explain the click",
    body: "Generate benefit-led Pinterest descriptions, title ideas, keyword phrases, and CTA endings for products, blog posts, collections, and lead magnets.",
  },
  {
    label: "Pinterest SEO",
    title: "Match search intent without stuffing keywords",
    body: "Turn audience, offer, seasonal angle, and topic notes into natural keyword clusters for pins, boards, and saved-search discovery.",
  },
  {
    label: "Campaign reuse",
    title: "Connect pins to the rest of the funnel",
    body: "Reuse the same brief for landing page hooks, social preview copy, blog snippets, product-page blurbs, and CTA variants that make the click feel consistent.",
  },
];

const workflow = [
  "Describe the product, post, collection, service, or lead magnet you want Pinterest traffic to discover.",
  "Add target audience, primary keyword, seasonal angle, visual concept, proof point, and destination URL goal.",
  "Generate pin titles, descriptions, board SEO copy, keyword clusters, idea pin hooks, and CTA variations.",
  "Publish the strongest versions across fresh pins, boards, product pins, campaigns, and supporting landing page copy.",
];

const examples = [
  {
    brief: "Shopify store selling linen bedding",
    output: "Create a calmer bedroom with breathable linen bedding made for warm sleepers, easy layering, and everyday luxury.",
  },
  {
    brief: "Food blog post about high-protein lunches",
    output: "Save these high-protein lunch ideas for busy weekdays when you need quick prep, big flavor, and meals that keep you full.",
  },
  {
    brief: "Wedding photographer booking page",
    output: "Plan a wedding gallery that feels candid, warm, and timeless with photography built around real moments, not stiff poses.",
  },
];

const faqs = [
  {
    question: "What is a Pinterest pin description generator?",
    answer:
      "A Pinterest pin description generator turns a product, post, collection, or campaign brief into pin titles, descriptions, keyword angles, board copy, and CTAs designed for Pinterest discovery.",
  },
  {
    question: "Can SEOCopy help with Pinterest SEO?",
    answer:
      "Yes. SEOCopy can turn a topic, audience, offer, seasonal hook, and destination goal into natural Pinterest keyword phrases, board descriptions, and pin copy you can edit before publishing.",
  },
  {
    question: "Who should use this generator?",
    answer:
      "Ecommerce brands, Shopify merchants, bloggers, creators, agencies, service businesses, and affiliate publishers can use it to create pin copy that connects visual discovery to clicks and conversions.",
  },
  {
    question: "How many Pinterest pin descriptions can I generate for free?",
    answer:
      "You can run two free generations without creating an account. After that, buy one additional generation for $5 or use the $19/month plan for ongoing SEO and copy production.",
  },
];

export default function PinterestPinDescriptionGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-rose-700 dark:text-rose-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(255,247,237,1),rgba(255,241,242,0.92))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(136,19,55,0.55))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-rose-200 bg-rose-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-rose-800 dark:border-rose-400/20 dark:bg-rose-400/10 dark:text-rose-200">
              Pinterest Pin Description Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate Pinterest pin descriptions that turn saves into site visits.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy turns your product, blog post, collection, audience, seasonal angle, and visual concept into Pinterest descriptions, board SEO copy, keyword ideas, hooks, and CTAs.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=pinterest-pin-description-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-rose-300 dark:text-slate-950 dark:hover:bg-rose-200"
              >
                Generate Pinterest copy
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
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rose-700 dark:text-rose-300">
              From visual idea to traffic asset
            </p>
            <div className="mt-6 space-y-4">
              {workflow.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-2xl border border-slate-200 p-4 dark:border-white/10">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-rose-100 text-sm font-bold text-rose-800 dark:bg-rose-300 dark:text-slate-950">
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
            Pinterest deliverables
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            One brief, multiple pin-ready copy assets.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {deliverables.map((item) => (
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

      <section id="examples" className="mx-auto max-w-6xl px-6 pb-20 lg:px-10">
        <div className="rounded-[2rem] border border-black/10 bg-slate-950 p-8 text-white shadow-[0_24px_80px_rgba(15,23,42,0.14)] dark:border-white/10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-rose-200">
            Pinterest copy examples
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Turn a visual concept into a search-friendly reason to click.
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {examples.map((example) => (
              <article key={example.brief} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-200">Brief</p>
                <p className="mt-2 font-semibold">{example.brief}</p>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-rose-200">Pin angle</p>
                <p className="mt-2 leading-7 text-slate-300">{example.output}</p>
              </article>
            ))}
          </div>
          <Link
            href="/generate?source=pinterest-pin-description-generator"
            className="mt-8 inline-flex rounded-full bg-rose-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-rose-200"
          >
            Generate your Pinterest descriptions
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-6xl px-6 pb-24 lg:px-10">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-rose-700 dark:text-rose-300">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Pinterest pin description generator questions
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
