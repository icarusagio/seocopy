import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shopify Abandoned Cart Email Generator",
  description:
    "Generate Shopify abandoned cart emails with subject lines, preview text, cart recovery offers, urgency angles, product reminders, and checkout CTAs from one store brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/shopify-abandoned-cart-email-generator",
  },
  keywords: [
    "Shopify abandoned cart email generator",
    "Shopify cart recovery email",
    "abandoned checkout email copy",
    "AI Shopify email marketing",
    "Klaviyo abandoned cart copy",
    "cart recovery subject lines",
  ],
  openGraph: {
    title: "Shopify Abandoned Cart Email Generator | SEOCopy",
    description:
      "Turn one Shopify cart-recovery brief into abandoned cart emails, subject lines, preview text, urgency angles, product reminders, and checkout CTAs.",
    url: "https://seocopy.vercel.app/shopify-abandoned-cart-email-generator",
    type: "website",
  },
};

const recoveryMoments = [
  {
    label: "First reminder",
    body: "Bring shoppers back while intent is fresh with product-aware copy, helpful objection handling, and a direct checkout CTA.",
  },
  {
    label: "Offer nudge",
    body: "Add discount, free-shipping, bundle, or limited-stock framing without making every cart email feel like a race to the bottom.",
  },
  {
    label: "Last-call save",
    body: "Close the loop with urgency, reassurance, support links, and alternate product angles for shoppers who still have hesitation.",
  },
];

const outputs = [
  "Shopify abandoned cart emails for reminder, incentive, and last-call recovery moments",
  "Subject lines, preview text, opening hooks, product reminders, and checkout CTAs",
  "Klaviyo-ready copy blocks for new visitors, repeat buyers, VIPs, discount seekers, and high-AOV carts",
  "Objection reducers for shipping cost, sizing, returns, stock urgency, trust, and payment friction",
  "SMS handoff snippets and product-page copy ideas that reinforce the recovery sequence",
];

const faqs = [
  {
    question: "What is a Shopify abandoned cart email generator?",
    answer:
      "A Shopify abandoned cart email generator turns a store, product category, cart value, offer, buyer objection, and brand voice into cart recovery emails with subject lines, preview text, product reminders, urgency angles, and checkout CTAs.",
  },
  {
    question: "Can SEOCopy write emails for Klaviyo or Shopify Email?",
    answer:
      "Yes. SEOCopy drafts Shopify abandoned cart email copy that can be pasted into Klaviyo, Shopify Email, Omnisend, Mailchimp, or another ecommerce lifecycle email tool.",
  },
  {
    question: "What should I include in the cart recovery brief?",
    answer:
      "Include the product category, cart value, audience segment, top hesitation, offer or shipping threshold, return policy, urgency reason, brand voice, and primary checkout CTA.",
  },
  {
    question: "How many Shopify abandoned cart emails can I generate for free?",
    answer:
      "You can try two free generations without signup. After that, buy one generation for $5 or use the $19/month plan for ongoing Shopify SEO, landing page, and lifecycle email copy.",
  },
];

export default function ShopifyAbandonedCartEmailGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(240,253,244,0.92))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(20,83,45,0.34))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-800 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-200">
              Shopify Abandoned Cart Email Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate Shopify abandoned cart emails that recover ready-to-buy shoppers.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Paste the product category, cart value, offer, buyer objection, brand voice, and checkout CTA. SEOCopy creates Shopify abandoned cart emails with subject lines, preview text, product reminders, urgency angles, and conversion CTAs.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=shopify-abandoned-cart-email-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-emerald-300 dark:text-slate-950 dark:hover:bg-emerald-200"
              >
                Generate Shopify Cart Emails
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
              Shopify abandoned cart output checklist
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
            From abandoned checkout to recovery sequence
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Build emails that match the shopper&rsquo;s cart stage, hesitation, and next reason to complete checkout.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {recoveryMoments.map((item) => (
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
            Recover qualified purchase intent
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Give Shopify shoppers a clearer reason to finish the order before the cart goes cold.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            SEOCopy helps Shopify merchants, ecommerce operators, and retention marketers turn one abandoned checkout brief into cart recovery emails, Klaviyo-ready copy blocks, offer tests, and CTAs tied to checkout revenue.
          </p>
          <Link
            href="/generate?source=shopify-abandoned-cart-email-generator-cta"
            className="mt-8 inline-flex rounded-full bg-emerald-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-200"
          >
            Try Two Free Generations
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight">Shopify abandoned cart email questions</h2>
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
