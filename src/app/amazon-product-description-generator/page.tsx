import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Amazon Product Description Generator",
  description:
    "Generate Amazon product descriptions, SEO titles, bullet points, backend keyword angles, A+ content ideas, and marketplace-ready listing copy from rough product notes.",
  alternates: {
    canonical: "https://seocopy.vercel.app/amazon-product-description-generator",
  },
  keywords: [
    "Amazon product description generator",
    "AI Amazon listing generator",
    "Amazon SEO copy generator",
    "Amazon bullet point generator",
    "marketplace product description generator",
  ],
  openGraph: {
    title: "Amazon Product Description Generator | SEOCopy",
    description:
      "Turn product specs, supplier blurbs, and customer benefits into Amazon-ready descriptions, bullets, SEO titles, and listing copy in seconds.",
    url: "https://seocopy.vercel.app/amazon-product-description-generator",
    type: "website",
  },
};

const benefits = [
  {
    title: "Convert supplier specs into shopper language",
    body: "Paste dimensions, materials, feature lists, warranty notes, or a rough supplier blurb and get Amazon listing copy that makes benefits obvious fast.",
  },
  {
    title: "Build a complete marketplace listing draft",
    body: "Generate title angles, feature bullets, product descriptions, backend keyword ideas, and A+ content prompts from the same product brief.",
  },
  {
    title: "Refresh listings before paid traffic",
    body: "Rewrite thin or generic Amazon copy before launching ads, coupon campaigns, seasonal pushes, or new product variations.",
  },
];

const outputs = [
  "Amazon-ready product descriptions for private label, DTC, and reseller listings",
  "SEO title ideas that balance keyword clarity with marketplace readability",
  "Benefit-led bullet points for features, use cases, materials, and objections",
  "Backend keyword and search-angle prompts for marketplace research",
  "A+ content section ideas, social preview copy, and CTA variants for campaigns",
];

const faqs = [
  {
    question: "What does an Amazon product description generator create?",
    answer:
      "An Amazon product description generator turns rough product notes into marketplace listing descriptions, title ideas, feature bullets, keyword angles, A+ content prompts, and conversion copy for shoppers comparing options.",
  },
  {
    question: "Can SEOCopy write Amazon bullets and SEO titles?",
    answer:
      "Yes. SEOCopy can draft Amazon-style bullet points, SEO title ideas, product descriptions, social previews, and CTA variants from a single product brief so sellers can improve listing clarity faster.",
  },
  {
    question: "When should Amazon sellers refresh listing copy?",
    answer:
      "Refresh Amazon listing copy before paid campaigns, seasonal promotions, new variation launches, coupon pushes, or anytime reviews and search terms reveal benefits that are missing from the current description.",
  },
];

export default function AmazonProductDescriptionGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(255,247,237,0.9))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(124,45,18,0.56))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-orange-800 dark:border-orange-400/20 dark:bg-orange-400/10 dark:text-orange-200">
              Amazon Product Description Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate Amazon product descriptions that turn specs into sales copy.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Turn product specs, supplier blurbs, use cases, warranty details, or competitor notes into Amazon-ready descriptions, SEO titles, feature bullets, backend keyword angles, and campaign copy.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=amazon-product-description-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-orange-300 dark:text-slate-950 dark:hover:bg-orange-200"
              >
                Generate Amazon Listing Copy
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
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-700 dark:text-orange-300">
              Amazon listing output
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
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-700 dark:text-orange-300">
            Why use the Amazon product description generator
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            A faster path from product specs to marketplace-ready Amazon listings.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {benefits.map((item) => (
            <article key={item.title} className="rounded-[1.5rem] border border-black/10 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{item.body}</p>
            </article>
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
