import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Klaviyo Email Generator",
  description:
    "Generate Klaviyo-ready email copy for ecommerce campaigns, flows, segments, subject lines, preview text, product blocks, and revenue-focused CTAs.",
  alternates: {
    canonical: "https://seocopy.vercel.app/klaviyo-email-generator",
  },
  keywords: [
    "Klaviyo email generator",
    "Klaviyo email copy generator",
    "Klaviyo flow copy",
    "ecommerce email generator",
    "Shopify Klaviyo email copy",
    "Klaviyo subject line generator",
  ],
  openGraph: {
    title: "Klaviyo Email Generator | SEOCopy",
    description:
      "Turn a store promo, segment, or lifecycle moment into Klaviyo-ready subject lines, preview text, campaign blocks, flow copy, FAQs, and CTAs.",
    url: "https://seocopy.vercel.app/klaviyo-email-generator",
    type: "website",
  },
};

const campaignTypes = [
  {
    label: "Klaviyo campaign launches",
    body: "Draft product-drop, sale, back-in-stock, and seasonal campaign copy with subject lines, preview text, hero copy, product modules, and CTAs that match the offer.",
  },
  {
    label: "Lifecycle flow copy",
    body: "Create welcome, abandoned-cart, browse-abandonment, post-purchase, review request, replenishment, and winback email angles from one customer moment.",
  },
  {
    label: "Segment-aware variants",
    body: "Generate copy for VIP buyers, first-time subscribers, price-sensitive shoppers, category browsers, lapsed customers, and high-intent cart abandoners.",
  },
];

const outputs = [
  "Klaviyo subject-line and preview-text pairs for campaigns and flows",
  "Email body blocks for hero sections, product modules, benefits, proof, and FAQs",
  "Segment-specific variants for VIPs, new subscribers, browsers, and lapsed buyers",
  "Abandoned-cart, browse-abandonment, welcome, post-purchase, and winback angles",
  "Landing-page snippets and CTA copy that keep email clicks aligned with the offer",
];

const faqs = [
  {
    question: "What is a Klaviyo email generator?",
    answer:
      "A Klaviyo email generator turns an ecommerce campaign, customer segment, product, or lifecycle moment into Klaviyo-ready copy: subject lines, preview text, email sections, product modules, FAQs, and CTAs.",
  },
  {
    question: "Can SEOCopy write copy for Klaviyo flows?",
    answer:
      "Yes. SEOCopy can draft copy for welcome flows, abandoned-cart flows, browse-abandonment flows, post-purchase emails, review requests, replenishment reminders, and winback campaigns.",
  },
  {
    question: "How is this different from a general email copy generator?",
    answer:
      "This page focuses on Klaviyo and ecommerce use cases: segment-aware variants, Shopify product modules, inventory and promo moments, customer lifecycle triggers, and conversion-focused CTAs.",
  },
  {
    question: "How many Klaviyo email drafts can I generate for free?",
    answer:
      "You can try two free generations without creating an account. After that, buy one generation for $5 or use the $19/month plan for ongoing ecommerce SEO and email copy.",
  },
];

export default function KlaviyoEmailGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,254,255,0.86))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(14,116,144,0.58))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Klaviyo Email Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate Klaviyo-ready email copy for ecommerce campaigns and lifecycle flows.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Paste a store promo, product drop, customer segment, or lifecycle trigger. SEOCopy returns Klaviyo subject lines, preview text, campaign blocks, flow copy, FAQs, and CTAs in one pass.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=klaviyo-email-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate Klaviyo Email Copy
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
              Klaviyo output checklist
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
            Ecommerce email playbooks
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Turn lifecycle moments and customer segments into Klaviyo emails that can drive repeat purchases.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {campaignTypes.map((item) => (
            <article key={item.label} className="rounded-[1.5rem] border border-black/10 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-700 dark:text-cyan-300">
                {item.label}
              </p>
              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-10">
        <div className="rounded-[2rem] border border-black/10 bg-slate-950 p-8 text-white shadow-[0_24px_80px_rgba(15,23,42,0.14)] dark:border-white/10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
            Faster Klaviyo production
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Go from rough ecommerce brief to Klaviyo subject lines, flow copy, segment variants, and CTAs in minutes.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            SEOCopy keeps Klaviyo email copy aligned with the product page, customer moment, discount logic, and buyer intent. Use it for campaigns, flows, and merchant-specific objections without rewriting every block manually.
          </p>
          <Link
            href="/generate?source=klaviyo-email-generator-cta"
            className="mt-8 inline-flex rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            Try Two Free Generations
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight">Klaviyo email generator questions</h2>
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
