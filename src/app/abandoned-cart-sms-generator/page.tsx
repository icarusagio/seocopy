import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Abandoned Cart SMS Generator",
  description:
    "Generate abandoned cart SMS, Shopify cart recovery texts, discount and urgency reminders, compliance-safe opt-out language, and conversion-focused follow-up copy from one checkout brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/abandoned-cart-sms-generator",
  },
  keywords: [
    "abandoned cart SMS generator",
    "abandoned cart SMS",
    "Shopify cart recovery texts",
    "cart recovery SMS copy",
    "discount and urgency reminders",
    "compliance-safe opt-out language",
    "ecommerce SMS recovery",
    "checkout recovery texts",
  ],
  openGraph: {
    title: "Abandoned Cart SMS Generator | SEOCopy",
    description:
      "Turn a checkout moment into short cart recovery texts, Shopify abandoned cart SMS sequences, discount reminders, urgency angles, opt-out language, and mobile CTAs.",
    url: "https://seocopy.vercel.app/abandoned-cart-sms-generator",
    type: "website",
  },
};

const smsMoments = [
  {
    label: "Shopify cart recovery texts",
    body: "Turn the product, cart value, shipping threshold, discount policy, and checkout link into concise SMS reminders that bring shoppers back without sounding pushy.",
  },
  {
    label: "Discount and urgency reminders",
    body: "Create timed first, second, and final-message angles for expiring coupons, low-stock warnings, free-shipping nudges, limited drops, and preorder deadlines.",
  },
  {
    label: "Compliance-safe opt-out language",
    body: "Add short opt-out reminders, consent-aware wording, brand-safe disclaimers, and character-conscious variants for SMS platforms and ecommerce automations.",
  },
];

const outputs = [
  "Abandoned cart SMS for Shopify stores, ecommerce brands, digital products, preorder launches, subscription boxes, and local delivery offers",
  "Shopify cart recovery texts with first reminder, discount nudge, urgency follow-up, checkout-link CTA, and optional free-shipping angle",
  "Discount and urgency reminders for expiring coupons, low inventory, order deadlines, limited bundles, cart value thresholds, and weekend promotions",
  "Compliance-safe opt-out language and compact variants that fit mobile inboxes while preserving brand tone and buyer trust",
  "Tone options for premium, playful, direct-response, founder-led, minimalist, urgent, local, and high-AOV ecommerce campaigns",
];

const faqs = [
  {
    question: "What is an abandoned cart SMS generator?",
    answer:
      "An abandoned cart SMS generator turns a checkout or product brief into abandoned cart SMS, Shopify cart recovery texts, discount and urgency reminders, compliance-safe opt-out language, and short mobile CTAs.",
  },
  {
    question: "How is this different from the abandoned cart email generator?",
    answer:
      "The abandoned cart email generator creates longer inbox recovery sequences. This abandoned cart SMS generator focuses on concise mobile messages, checkout-link CTAs, opt-out wording, and timing-friendly text variants for SMS automations.",
  },
  {
    question: "Can I use this for Shopify cart recovery?",
    answer:
      "Yes. Paste the Shopify product, cart incentive, shipping promise, discount rules, brand voice, and checkout link context to generate Shopify cart recovery texts for first reminders, coupon nudges, and final urgency messages.",
  },
  {
    question: "How many abandoned cart SMS generations are free?",
    answer:
      "You can try two free generations with no signup. After that, buy one generation for $5 or use the $19/month plan for ongoing SEO, ecommerce, SMS, email, landing page, and product copy.",
  },
];

export default function AbandonedCartSmsGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,253,245,0.92))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(5,150,105,0.32))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-800 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-200">
              Abandoned Cart SMS Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Write cart recovery texts that bring mobile shoppers back.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Paste the product, cart moment, incentive, shipping promise, timing, checkout link, compliance notes, and brand voice. SEOCopy creates abandoned cart SMS, Shopify cart recovery texts, discount and urgency reminders, compliance-safe opt-out language, and mobile CTAs.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=abandoned-cart-sms-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-emerald-300 dark:text-slate-950 dark:hover:bg-emerald-200"
              >
                Generate Abandoned Cart SMS
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
              SMS recovery output checklist
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
            Recover more checkout intent
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Create SMS copy for checkout reminders, coupon nudges, free-shipping prompts, expiring offers, low-stock alerts, and final recovery messages.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {smsMoments.map((item) => (
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
            Ecommerce SMS recovery copy
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Convert abandoned carts with short, clear messages built for mobile action.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            SEOCopy helps Shopify merchants, DTC teams, founders, and agencies package cart recovery texts around the reason to return: saved items, checkout links, delivery promises, discounts, urgency, and compliance-safe opt-out reminders.
          </p>
          <Link
            href="/generate?source=abandoned-cart-sms-generator-cta"
            className="mt-8 inline-flex rounded-full bg-emerald-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-200"
          >
            Try Two Free Generations
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight">Abandoned cart SMS questions</h2>
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
