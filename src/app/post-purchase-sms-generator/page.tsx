import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Post-Purchase SMS Generator",
  description:
    "Generate post-purchase SMS flows with delivery updates, product-care tips, review asks, cross-sell nudges, replenishment reminders, opt-out language, and mobile CTAs from one customer moment.",
  alternates: {
    canonical: "https://seocopy.vercel.app/post-purchase-sms-generator",
  },
  keywords: [
    "post-purchase SMS generator",
    "post purchase text message copy",
    "Shopify SMS marketing copy",
    "replenishment reminder text",
    "review request SMS copy",
    "ecommerce SMS copy generator",
  ],
  openGraph: {
    title: "Post-Purchase SMS Generator | SEOCopy",
    description:
      "Turn one customer moment into post-purchase text messages, delivery updates, review asks, replenishment reminders, cross-sell nudges, and compliant mobile CTAs.",
    url: "https://seocopy.vercel.app/post-purchase-sms-generator",
    type: "website",
  },
};

const smsMoments = [
  {
    label: "Delivery confidence",
    body: "Send useful shipping, setup, product-care, or order-status texts that reduce support load while keeping the shopper excited about the purchase.",
  },
  {
    label: "Review and UGC ask",
    body: "Ask for reviews, photos, testimonials, or referrals after the customer has enough time to experience the product.",
  },
  {
    label: "Second-purchase nudge",
    body: "Create replenishment, accessory, bundle, and cross-sell texts tied to the product category, buying cycle, and mobile checkout CTA.",
  },
];

const outputs = [
  "Post-purchase SMS copy for delivery updates, product-care tips, review asks, replenishment reminders, and cross-sell nudges",
  "Short mobile CTAs for order tracking, usage help, product education, subscription starts, and second purchases",
  "Compliance-safe opt-out language and quiet-hour friendly wording for SMS programs",
  "Segment variants for first-time buyers, repeat buyers, VIP customers, gift purchasers, and replenishment audiences",
  "Email handoff snippets and landing-page copy ideas that keep the post-purchase sequence aligned across channels",
];

const faqs = [
  {
    question: "What is a post-purchase SMS generator?",
    answer:
      "A post-purchase SMS generator turns a customer moment, product category, delivery timing, next-best offer, support note, and brand voice into short text messages for order confidence, reviews, replenishment, cross-sells, and second purchases.",
  },
  {
    question: "Can SEOCopy write Shopify post-purchase texts?",
    answer:
      "Yes. SEOCopy drafts post-purchase SMS copy that Shopify merchants can adapt for SMS tools such as Klaviyo, Postscript, Attentive, Omnisend, or Shopify-friendly lifecycle flows.",
  },
  {
    question: "What should I include in the SMS brief?",
    answer:
      "Include the product category, order or delivery milestone, customer segment, timing, offer or helpful next step, support constraint, compliance requirement, brand voice, and the mobile CTA destination.",
  },
  {
    question: "Does this replace SMS compliance review?",
    answer:
      "No. SEOCopy helps draft concise SMS marketing copy and opt-out wording, but you should still confirm consent, quiet-hour rules, carrier requirements, and legal compliance with your SMS platform or advisor before sending.",
  },
];

export default function PostPurchaseSmsGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(239,246,255,0.92))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(30,64,175,0.34))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-blue-800 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-200">
              Post-Purchase SMS Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate post-purchase SMS copy that turns delivered orders into repeat revenue.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Paste the product, purchase milestone, customer segment, timing, helpful next step, offer, opt-out needs, and mobile CTA. SEOCopy creates post-purchase SMS flows for delivery confidence, review asks, replenishment reminders, cross-sells, and second-purchase nudges.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=post-purchase-sms-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-blue-300 dark:text-slate-950 dark:hover:bg-blue-200"
              >
                Generate Post-Purchase Texts
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
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-700 dark:text-blue-300">
              Post-purchase SMS output checklist
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
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-700 dark:text-blue-300">
            From order confirmation to second purchase
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Build texts that match the customer&rsquo;s delivery stage, product experience, and next reason to buy.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {smsMoments.map((item) => (
            <article key={item.label} className="rounded-[1.5rem] border border-black/10 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-700 dark:text-blue-300">
                {item.label}
              </p>
              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-10">
        <div className="rounded-[2rem] border border-black/10 bg-slate-950 p-8 text-white shadow-[0_24px_80px_rgba(15,23,42,0.14)] dark:border-white/10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-200">
            Turn fulfilled orders into the next conversion
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Keep mobile buyers moving from delivery confidence to repeat purchase without writing every text from scratch.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            SEOCopy helps ecommerce teams, retention marketers, and Shopify merchants convert one post-purchase brief into SMS copy, review asks, support-reducing updates, replenishment reminders, and mobile CTAs tied to repeat revenue.
          </p>
          <Link
            href="/generate?source=post-purchase-sms-generator-cta"
            className="mt-8 inline-flex rounded-full bg-blue-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-blue-200"
          >
            Try Two Free Generations
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight">Post-purchase SMS questions</h2>
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
