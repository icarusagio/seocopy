import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Product Bullet Point Generator",
  description:
    "Generate ecommerce product bullet points, benefit-led feature bullets, SEO metadata, and Shopify or Amazon listing copy from rough product notes.",
  alternates: {
    canonical: "https://seocopy.vercel.app/product-bullet-point-generator",
  },
  keywords: [
    "product bullet point generator",
    "ecommerce bullet point generator",
    "Amazon product bullet generator",
    "Shopify product bullet generator",
    "AI product listing bullets",
    "feature benefit bullet generator",
  ],
  openGraph: {
    title: "Product Bullet Point Generator | SEOCopy",
    description:
      "Turn product specs into benefit-led product bullets, SEO snippets, social previews, and PDP copy that helps shoppers compare faster.",
    url: "https://seocopy.vercel.app/product-bullet-point-generator",
    type: "website",
  },
};

const bulletFrameworks = [
  {
    label: "Benefit-first bullets",
    example: "Stay cool through summer nights with breathable linen woven for airflow.",
    body: "Lead with the shopper outcome, then support it with the material, mechanism, or proof that makes the claim believable.",
  },
  {
    label: "Comparison bullets",
    example: "Holds 24 hours of ice without the bulk of a hard cooler.",
    body: "Position the product against the alternative shoppers already know, so the bullet answers the buying objection directly.",
  },
  {
    label: "Use-case bullets",
    example: "Pack it for daycare, hiking, gym bags, or leak-free commuting.",
    body: "Show the product in real buying situations to help customers picture ownership before they reach the CTA.",
  },
];

const outputs = [
  "Five benefit-led product bullets for Shopify, Amazon, or ecommerce PDPs",
  "Feature-to-benefit rewrites that avoid generic specification dumps",
  "Matching SEO title and meta description for product-page search snippets",
  "Open Graph copy for product launches, retargeting, and social previews",
  "FAQ and CTA ideas that answer objections after the bullet section",
];

const faqs = [
  {
    question: "What makes a good product bullet point?",
    answer:
      "A strong product bullet starts with a customer benefit, uses concrete product proof, and stays easy to scan. It should help shoppers compare the product quickly instead of repeating raw specs without context.",
  },
  {
    question: "Can I use these bullets for Shopify and Amazon listings?",
    answer:
      "Yes. SEOCopy can generate flexible product bullets for Shopify product pages, Amazon listings, marketplace descriptions, and landing pages. Always adapt length, claims, and formatting to the channel's rules before publishing.",
  },
  {
    question: "How is this different from a product description generator?",
    answer:
      "A product description generator writes paragraph-style merchandising copy. A product bullet point generator creates concise, scannable benefit bullets plus supporting SEO metadata, social previews, FAQs, and CTAs for the rest of the product page.",
  },
  {
    question: "How many product bullet sets can I generate for free?",
    answer:
      "You can try two free generations without creating an account. After that, buy a single generation for $5 or use the $19/month plan for ongoing ecommerce copy production.",
  },
];

export default function ProductBulletPointGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,253,245,0.86))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(6,78,59,0.62))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Product Bullet Point Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Turn raw specs into product bullets shoppers actually use to decide.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Paste product notes, features, reviews, or a URL. SEOCopy generates benefit-led product bullets, SEO metadata, social previews, FAQs, and CTA variants for product pages that need clearer buying reasons.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=product-bullet-point-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate Product Bullets
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
              Listing output checklist
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
            Product bullet playbook
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Generate bullet angles that connect features to buying intent.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {bulletFrameworks.map((item) => (
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
            Faster product-page optimization
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Rewrite product bullets, metadata, FAQs, and CTAs from the same source brief.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            SEOCopy keeps product bullets connected to the rest of the PDP so search snippets, marketplace listings, comparison copy, and on-page CTAs all reinforce the same purchase argument.
          </p>
          <Link
            href="/generate?source=product-bullet-point-generator-cta"
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
