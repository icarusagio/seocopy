import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Amazon Product Title Generator",
  description:
    "Generate Amazon product titles, marketplace SEO snippets, feature-led listing angles, and CTA copy from one product brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/amazon-product-title-generator",
  },
  keywords: [
    "Amazon product title generator",
    "Amazon listing title generator",
    "AI Amazon title generator",
    "marketplace SEO title generator",
    "Amazon SEO copy generator",
    "Amazon product listing copy",
  ],
  openGraph: {
    title: "Amazon Product Title Generator | SEOCopy",
    description:
      "Turn product specs into Amazon-ready title options, keyword angles, SEO metadata, bullets, and campaign copy variants.",
    url: "https://seocopy.vercel.app/amazon-product-title-generator",
    type: "website",
  },
};

const titleAngles = [
  {
    label: "Marketplace search intent",
    example: "Insulated Stainless Steel Water Bottle, 32 oz, Leakproof Lid",
    body: "Lead with the product category, core material, size, use case, and high-intent modifiers buyers already scan for in marketplace results.",
  },
  {
    label: "Benefit-led differentiation",
    example: "Ergonomic Laptop Stand for Desk, Foldable Aluminum Riser",
    body: "Balance keyword coverage with the reason to choose the product: ergonomic setup, travel-friendly design, giftability, durability, or compatibility.",
  },
  {
    label: "Listing test variants",
    example: "Pet Hair Remover Roller for Couch, Carpet, Bedding, and Car Seats",
    body: "Create multiple title directions for new SKUs, listing refreshes, seasonal campaigns, and marketplace experiments without rewriting the whole page from scratch.",
  },
];

const outputs = [
  "Amazon product title options with category, feature, material, and buyer-use-case angles",
  "SEO title tag and meta description for the product page or external landing page",
  "Marketplace listing bullets, benefit hooks, and A+ content section ideas",
  "Search and social preview copy for launch emails, ads, and retargeting pages",
  "FAQ and positioning notes that keep claims accurate before publishing",
];

const faqs = [
  {
    question: "What is an Amazon product title generator?",
    answer:
      "An Amazon product title generator turns product specs, keywords, audience notes, benefits, and constraints into marketplace title options designed for clarity, search intent, and shopper scanning.",
  },
  {
    question: "Can SEOCopy write compliant Amazon listing titles?",
    answer:
      "SEOCopy can draft Amazon-ready title options and listing copy, but sellers should review the output against the latest Amazon category rules, brand guidelines, and claim requirements before publishing.",
  },
  {
    question: "What should I include in the brief?",
    answer:
      "Include the product category, brand, target buyer, top keywords, size or quantity, material, compatibility, key benefits, differentiators, and any claims or words that must be avoided.",
  },
  {
    question: "Does it only create titles?",
    answer:
      "No. The same SEOCopy generation can include Amazon title variants, SEO snippets, bullets, social previews, landing-page copy, FAQ ideas, and CTA options for campaigns around the product.",
  },
];

export default function AmazonProductTitleGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(239,246,255,0.88))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(30,64,175,0.58))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Amazon Product Title Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate Amazon product titles that match search intent and shopper scanning.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Paste product specs, keywords, positioning notes, or a draft listing. SEOCopy creates Amazon-ready title variants with supporting marketplace SEO snippets, benefit bullets, social previews, and CTA copy for the campaign around the product.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=amazon-product-title-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate Amazon Titles
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
              Amazon listing output checklist
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
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-300">
            Marketplace title playbook
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Draft marketplace titles for keywords, benefits, and listing tests in one workflow.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {titleAngles.map((item) => (
            <article key={item.label} className="rounded-[1.5rem] border border-black/10 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-700 dark:text-cyan-300">
                {item.label}
              </p>
              <h3 className="mt-4 text-2xl font-semibold">{item.example}</h3>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-10">
        <div className="rounded-[2rem] border border-black/10 bg-slate-950 p-8 text-white shadow-[0_24px_80px_rgba(15,23,42,0.14)] dark:border-white/10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
            Faster marketplace copy workflow
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Move from product specs to Amazon title options, listing bullets, SEO snippets, and launch CTAs in one pass.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            SEOCopy keeps marketplace optimization connected to the rest of the revenue path, so a listing title refresh can also produce the landing copy, social preview, and campaign CTA needed to promote it.
          </p>
          <Link
            href="/generate?source=amazon-product-title-generator-cta"
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
