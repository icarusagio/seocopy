import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Amazon A+ Content Generator",
  description:
    "Generate Amazon A+ content modules, comparison charts, brand story blocks, image-copy prompts, SEO snippets, FAQs, and listing CTAs from one product brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/amazon-a-plus-content-generator",
  },
  keywords: [
    "Amazon A+ content generator",
    "Amazon A+ content",
    "enhanced brand content",
    "Amazon listing copy",
    "Amazon comparison chart",
    "brand story modules",
    "marketplace SEO",
    "Amazon product page copy",
  ],
  openGraph: {
    title: "Amazon A+ Content Generator | SEOCopy",
    description:
      "Turn one Amazon product brief into A+ content modules, comparison charts, brand story blocks, image-copy prompts, SEO snippets, FAQs, and listing CTAs.",
    url: "https://seocopy.vercel.app/amazon-a-plus-content-generator",
    type: "website",
  },
};

const moduleAngles = [
  {
    label: "Enhanced brand content",
    body: "Turn product specs, proof points, differentiators, and brand voice into A+ content modules that explain why shoppers should choose the listing.",
  },
  {
    label: "Visual module prompts",
    body: "Generate image-copy notes, lifestyle callouts, feature captions, comparison chart rows, and brand story blocks that guide creative production.",
  },
  {
    label: "Marketplace conversion",
    body: "Add objection handling, trust language, keyword-aware snippets, FAQs, and cross-sell CTAs for Amazon shoppers comparing similar products.",
  },
];

const outputs = [
  "Amazon A+ content modules for product feature banners, lifestyle sections, brand story panels, comparison charts, and cross-sell blocks",
  "Enhanced Brand Content copy with image prompts, headline options, benefit captions, proof points, and product-detail callouts",
  "Comparison chart copy that clarifies variants, bundles, use cases, materials, guarantees, and who each product is for",
  "Marketplace SEO snippets, FAQ prompts, objection reducers, and purchase CTAs that fit Amazon listing constraints",
  "Creative production notes for designers or marketplace operators turning raw specs into A+ page sections",
];

const faqs = [
  {
    question: "What is an Amazon A+ content generator?",
    answer:
      "An Amazon A+ content generator turns a product brief into Enhanced Brand Content modules: feature banners, image-copy prompts, comparison chart copy, brand story sections, FAQs, and marketplace CTAs for an Amazon listing.",
  },
  {
    question: "Can this help with Enhanced Brand Content?",
    answer:
      "Yes. Paste the product category, differentiators, proof points, audience, competing alternatives, image assets, and desired conversion goal. SEOCopy will draft Enhanced Brand Content copy and A+ module ideas that a marketplace operator or designer can adapt.",
  },
  {
    question: "Does it replace Amazon compliance review?",
    answer:
      "No. Use the output as a structured A+ content draft, then review it against Amazon marketplace rules, brand registry requirements, claims substantiation, and any category-specific restrictions before publishing.",
  },
  {
    question: "How many Amazon A+ content generations are free?",
    answer:
      "You can try two free generations with no signup. After that, buy one generation for $5 or use the $19/month plan for ongoing Amazon listing, ecommerce SEO, email, and landing page copy.",
  },
];

export default function AmazonAPlusContentGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,253,245,0.92))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(5,150,105,0.32))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-800 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-200">
              Amazon A+ Content Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Draft Amazon A+ content that turns product proof into richer listings.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Paste the product category, buyer objections, differentiators, proof points, image assets, and brand voice. SEOCopy creates Amazon A+ content modules, comparison charts, brand story blocks, image-copy prompts, marketplace SEO snippets, FAQs, and listing CTAs from one product brief.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=amazon-a-plus-content-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-emerald-300 dark:text-slate-950 dark:hover:bg-emerald-200"
              >
                Generate Amazon A+ Content
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
              A+ content output checklist
            </p>
            <div className="mt-6 space-y-4">
              {outputs.map((output) => (
                <div key={output} className="rounded-2xl border border-slate-200 p-4 dark:border-white/10">
                  <p className="font-medium">{output}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-10">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700 dark:text-emerald-300">
            From listing specs to richer content modules
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Build A+ modules that make Amazon shoppers understand the offer faster.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {moduleAngles.map((item) => (
            <article key={item.label} className="rounded-[1.5rem] border border-black/10 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700 dark:text-emerald-300">
                {item.label}
              </p>
              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-10">
        <div className="rounded-[2rem] border border-black/10 bg-slate-950 p-8 text-white shadow-[0_24px_80px_rgba(15,23,42,0.14)] dark:border-white/10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-200">
            From comparison shopping to add-to-cart intent
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Give marketplace shoppers the proof they need before they leave the listing.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            SEOCopy helps Amazon sellers turn product details into structured A+ content: module headlines, feature captions, comparison tables, brand story copy, FAQ prompts, and CTAs that support product page conversion without starting from a blank doc.
          </p>
          <Link
            href="/generate?source=amazon-a-plus-content-generator-cta"
            className="mt-8 inline-flex rounded-full bg-emerald-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-200"
          >
            Try Two Free Generations
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight">Amazon A+ content questions</h2>
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
