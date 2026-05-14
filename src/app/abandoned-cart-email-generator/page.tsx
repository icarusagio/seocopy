import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Abandoned Cart Email Generator",
  description:
    "Generate abandoned cart emails, cart recovery sequences, discount and urgency angles, Shopify recovery copy, FAQs, and SEO snippets from one product or checkout moment.",
  alternates: {
    canonical: "https://seocopy.vercel.app/abandoned-cart-email-generator",
  },
  keywords: [
    "abandoned cart email generator",
    "abandoned cart emails",
    "cart recovery sequences",
    "Shopify abandoned cart email",
    "cart recovery copy",
    "discount urgency email",
  ],
  openGraph: {
    title: "Abandoned Cart Email Generator | SEOCopy",
    description:
      "Turn a dropped checkout, product, offer, and incentive into abandoned cart emails, cart recovery sequences, Shopify recovery copy, and conversion CTAs.",
    url: "https://seocopy.vercel.app/abandoned-cart-email-generator",
    type: "website",
  },
};

const sequenceBlocks = [
  {
    label: "Cart recovery sequences",
    body: "Draft the first reminder, urgency follow-up, final nudge, subject lines, preview text, and CTA variants from one checkout context.",
  },
  {
    label: "Discount and urgency angles",
    body: "Compare free-shipping, limited-time, inventory, social-proof, and value-reminder angles without making the message feel spammy.",
  },
  {
    label: "Shopify recovery copy",
    body: "Create Shopify recovery copy for merchants who need product-specific cart emails, SMS handoff snippets, FAQ answers, and landing-page CTAs.",
  },
];

const outputs = [
  "Abandoned cart emails for ecommerce stores, Shopify merchants, SaaS trials, service deposits, and product launches",
  "Cart recovery sequences with subject lines, preview text, first reminders, urgency nudges, final calls, and CTA variants",
  "Discount and urgency angles that balance offer clarity, scarcity, free shipping, social proof, and customer objections",
  "Shopify recovery copy for checkout reminders, product-benefit recaps, SMS handoffs, FAQ snippets, and paid retargeting hooks",
  "Tone variants for helpful, premium, playful, concise, merchant-friendly, and last-chance cart recovery campaigns",
];

const faqs = [
  {
    question: "What is an abandoned cart email generator?",
    answer:
      "An abandoned cart email generator turns a dropped checkout, product details, offer, incentive, and brand voice into abandoned cart emails, subject lines, preview text, cart recovery sequences, and conversion CTAs.",
  },
  {
    question: "Can I use this for Shopify recovery copy?",
    answer:
      "Yes. SEOCopy can create Shopify recovery copy for product reminders, discount offers, free-shipping nudges, inventory urgency, SMS handoff snippets, and post-click FAQ content.",
  },
  {
    question: "How is this different from the email sequence generator?",
    answer:
      "The email sequence generator covers broad welcome, launch, nurture, and sales flows. This abandoned cart email generator focuses specifically on checkout recovery, cart objections, product reminders, and urgency or discount angles.",
  },
  {
    question: "How many abandoned cart email generations are free?",
    answer:
      "You can try two free generations with no signup. After that, buy one generation for $5 or use the $19/month plan for ongoing SEO, landing page, and campaign copy.",
  },
];

export default function AbandonedCartEmailGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,253,245,0.92))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(5,150,105,0.32))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-800 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-200">
              Abandoned Cart Email Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Recover more carts with sharper checkout follow-ups.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Paste the product, checkout drop-off moment, offer, objection, and brand voice. SEOCopy creates abandoned cart emails, cart recovery sequences, discount and urgency angles, Shopify recovery copy, FAQs, and SEO snippets.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=abandoned-cart-email-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-emerald-300 dark:text-slate-950 dark:hover:bg-emerald-200"
              >
                Generate Abandoned Cart Email
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
              Cart recovery output checklist
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
            Turn checkout intent into revenue
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Create cart recovery copy for ecommerce, Shopify, subscriptions, services, and product launches.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {sequenceBlocks.map((item) => (
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
            Revenue-focused lifecycle copy
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Give merchants and founders a faster path from abandoned checkout to recovered order.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            SEOCopy helps teams turn cart context into polished reminders, incentive tests, objection-aware body copy, retargeting snippets, and CTA variants so checkout recovery does not get stuck in a blank campaign builder.
          </p>
          <Link
            href="/generate?source=abandoned-cart-email-generator-cta"
            className="mt-8 inline-flex rounded-full bg-emerald-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-200"
          >
            Try Two Free Generations
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight">Abandoned cart email questions</h2>
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
