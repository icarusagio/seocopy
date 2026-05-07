import type { Metadata } from "next";
import Link from "next/link";

const route = "/shopify-image-alt-text-generator";
const canonical = `https://seocopy.vercel.app${route}`;

export const metadata: Metadata = {
  title: "Shopify Image Alt Text Generator",
  description:
    "Generate Shopify product image alt text, collection image descriptions, SEO captions, filename ideas, and accessibility-friendly variants from one product brief.",
  alternates: {
    canonical,
  },
  keywords: [
    "Shopify image alt text generator",
    "Shopify alt text generator",
    "product image alt text generator",
    "ecommerce image alt text",
    "Shopify product SEO",
    "accessible product image descriptions",
  ],
  openGraph: {
    title: "Shopify Image Alt Text Generator | SEOCopy",
    description:
      "Turn Shopify product and collection image notes into accessible alt text, SEO captions, filename ideas, and product-page metadata.",
    url: canonical,
    type: "website",
  },
};

const outputBlocks = [
  {
    label: "Product gallery SEO",
    title: "Write clear alt text for every product image",
    body: "Generate concise product photo descriptions for hero shots, variants, detail images, lifestyle images, size charts, bundles, and before-after galleries.",
  },
  {
    label: "Collection merchandising",
    title: "Support category pages and visual merchandising",
    body: "Create collection image descriptions, SEO captions, filename ideas, and page-context variants for Shopify category pages, gift guides, and seasonal drops.",
  },
  {
    label: "Accessibility first",
    title: "Improve screen-reader context without keyword stuffing",
    body: "Balance product keywords with useful visual context so alt text stays accurate, accessible, and safe for search engines and customers.",
  },
];

const workflow = [
  "Paste the product name, collection, target keyword, page URL, and a short description of each Shopify image.",
  "Add variant details such as color, material, size, model, angle, setting, or visible product benefits.",
  "Generate primary alt text, shorter variants, SEO captions, filename ideas, and QA notes for the upload queue.",
  "Review for accuracy, skip decorative images, and paste the best variants into Shopify media alt text fields.",
];

const examples = [
  "Alt text for a new apparel drop with variant colors and lifestyle photos",
  "Collection hero image descriptions for a seasonal Shopify landing page",
  "Product detail image alt text for supplements, skincare, or CPG bundles",
  "SEO captions and filename ideas before uploading a large product gallery",
];

const faqs = [
  {
    question: "What is a Shopify image alt text generator?",
    answer:
      "A Shopify image alt text generator turns product image notes, collection context, keywords, and visible details into concise alternative text for Shopify media fields.",
  },
  {
    question: "Can SEOCopy generate alt text for Shopify product variants?",
    answer:
      "Yes. Include the variant color, material, size, angle, and page context, and SEOCopy can draft separate alt text variants for each product image.",
  },
  {
    question: "Should Shopify image alt text include product keywords?",
    answer:
      "Use product keywords only when they naturally describe the image. Strong Shopify alt text should be accurate and helpful for accessibility first, with SEO context added only when it improves clarity.",
  },
  {
    question: "How do I add generated alt text in Shopify?",
    answer:
      "Open the product or collection media in Shopify admin, edit the image alt text field, paste the best reviewed variant, and save. Avoid adding alt text to purely decorative graphics.",
  },
];

export default function ShopifyImageAltTextGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,254,255,0.9))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(8,47,73,0.55))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Shopify Image Alt Text Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate Shopify image alt text that helps shoppers and search engines.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy turns product image notes into accurate Shopify alt text, SEO captions, filename ideas, and collection image descriptions so merchants can update product galleries faster without sacrificing accessibility.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=shopify-image-alt-text-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate Shopify Alt Text
              </Link>
              <a
                href="#examples"
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950 dark:border-white/15 dark:text-slate-200 dark:hover:border-white dark:hover:text-white"
              >
                See Shopify Examples
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
            Shopify image copy included
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            One product brief, every alt text asset needed for accessible, search-aware Shopify image updates.
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
            Example Shopify briefs
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Draft alt text from product context, visible details, collection intent, and the search outcome you want to support.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {examples.map((example) => (
              <div key={example} className="rounded-2xl border border-white/10 bg-white/5 p-5 font-medium">
                {example}
              </div>
            ))}
          </div>
          <Link
            href="/generate?source=shopify-image-alt-text-generator-cta"
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
