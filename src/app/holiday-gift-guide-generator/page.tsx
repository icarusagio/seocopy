import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Holiday Gift Guide Generator",
  description:
    "Generate holiday gift guide copy, curated product picks, seasonal SEO snippets, email angles, FAQ copy, and shop-now CTAs from one ecommerce campaign brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/holiday-gift-guide-generator",
  },
  keywords: [
    "holiday gift guide generator",
    "AI holiday gift guide generator",
    "gift guide copy",
    "holiday gift guide SEO",
    "ecommerce gift guide copy",
    "Shopify gift guide generator",
    "holiday shopping guide copy",
  ],
  openGraph: {
    title: "Holiday Gift Guide Generator | SEOCopy",
    description:
      "Turn one seasonal merchandising brief into holiday gift guide sections, product picks, SEO snippets, email angles, FAQs, and shop-now CTAs.",
    url: "https://seocopy.vercel.app/holiday-gift-guide-generator",
    type: "website",
  },
};

const giftGuideAssets = [
  {
    label: "Gift guide sections",
    title: "Organize products by shopper intent",
    body: "Turn a catalog, price range, audience, and seasonal theme into gift guide sections for recipients, budgets, occasions, bundles, and last-minute shopping paths.",
  },
  {
    label: "Seasonal SEO snippets",
    title: "Capture holiday search demand before campaigns peak",
    body: "Draft SEO titles, meta descriptions, social previews, and intro copy around gift guide keywords, collection names, recipient types, and shipping deadlines.",
  },
  {
    label: "Email and CTA angles",
    title: "Move shoppers from inspiration to checkout",
    body: "Generate email hooks, product blurbs, FAQ reassurance, bundle prompts, and shop-now CTAs that connect gift discovery to the product or collection page.",
  },
];

const workflow = [
  "Paste the products, collection URL, recipient type, price bands, margin priorities, shipping cutoffs, and seasonal theme.",
  "Add audience notes, gifting occasions, bundle ideas, inventory constraints, proof points, and brand voice.",
  "Generate holiday gift guide copy, curated product picks, seasonal SEO snippets, email angles, FAQs, and shop-now CTAs.",
  "Publish the strongest sections as a Shopify collection, landing page, email feature, or social shopping guide before peak holiday traffic.",
];

const faqs = [
  {
    question: "What is a holiday gift guide generator?",
    answer:
      "A holiday gift guide generator turns a seasonal ecommerce brief into gift guide sections, curated product picks, SEO snippets, email angles, FAQ copy, and shop-now CTAs for holiday shopping campaigns.",
  },
  {
    question: "Can SEOCopy write gift guide copy for Shopify stores?",
    answer:
      "Yes. Add the Shopify collection, products, recipient type, budget ranges, shipping deadlines, bundles, and brand voice to generate holiday gift guide copy for collection pages, emails, social posts, and product discovery campaigns.",
  },
  {
    question: "How is this different from a Black Friday email generator?",
    answer:
      "The Black Friday email generator focuses on sale windows, promo code reminders, and BFCM urgency. This holiday gift guide generator focuses on gift discovery, curated product picks, seasonal SEO snippets, recipient-based sections, shipping reassurance, and shop-now CTAs.",
  },
  {
    question: "How many holiday gift guide generations are free?",
    answer:
      "You can run two free generations with no signup. After that, buy one generation for $5 or use the $19/month plan for ongoing SEO, landing page, email, and ecommerce campaign copy.",
  },
];

export default function HolidayGiftGuideGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(236,253,245,1),rgba(255,247,237,0.92))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(4,120,87,0.38))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-800 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-200">
              Holiday Gift Guide Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate holiday gift guide copy that turns browsers into buyers.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy turns one ecommerce campaign brief into holiday gift guide sections, curated product picks, seasonal SEO snippets, email angles, FAQ copy, and shop-now CTAs for peak shopping season.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=holiday-gift-guide-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-emerald-300 dark:text-slate-950 dark:hover:bg-emerald-200"
              >
                Generate Gift Guide Copy
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
              Holiday merchandising workflow
            </p>
            <div className="mt-6 space-y-4">
              {workflow.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-2xl border border-slate-200 p-4 dark:border-white/10">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-800 dark:bg-emerald-300 dark:text-slate-950">
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
            Gift guide assets included
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            One seasonal brief, multiple ways to guide holiday shoppers toward checkout.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {giftGuideAssets.map((item) => (
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
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-200">
            Discovery-to-checkout consistency
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Keep gift discovery, collection SEO, and product CTAs aligned.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            Use SEOCopy to connect holiday gift guide copy, curated product picks, seasonal SEO snippets, email angles, shipping reassurance, and shop-now CTAs around the same buyer intent.
          </p>
          <Link
            href="/generate?source=holiday-gift-guide-generator-cta"
            className="mt-8 inline-flex rounded-full bg-emerald-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-200"
          >
            Try Two Free Generations
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight">Holiday gift guide questions</h2>
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
