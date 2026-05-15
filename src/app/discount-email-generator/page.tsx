import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Discount Email Generator",
  description:
    "Generate discount emails, promo code announcements, limited-time offer angles, coupon redemption CTAs, FAQs, and SEO snippets from one offer brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/discount-email-generator",
  },
  keywords: [
    "discount email generator",
    "discount emails",
    "promo code announcements",
    "limited-time offer angles",
    "coupon redemption CTAs",
    "sale email copy",
    "ecommerce promotion emails",
    "offer announcement email",
  ],
  openGraph: {
    title: "Discount Email Generator | SEOCopy",
    description:
      "Turn a sale, promo code, seasonal campaign, or subscriber offer into discount emails, urgency angles, subject lines, FAQs, and coupon redemption CTAs.",
    url: "https://seocopy.vercel.app/discount-email-generator",
    type: "website",
  },
};

const offerMoments = [
  {
    label: "Promo code announcements",
    body: "Introduce a coupon code with the right audience, product hook, value framing, eligibility notes, and a direct redemption path.",
  },
  {
    label: "Limited-time offer angles",
    body: "Create urgency without sounding spammy by pairing deadlines with inventory context, seasonal timing, bonuses, or buyer outcomes.",
  },
  {
    label: "Coupon redemption CTAs",
    body: "Give shoppers a clear next step with CTA variants for product pages, cart recovery, bundles, VIP lists, and subscriber-only sales.",
  },
];

const outputs = [
  "Discount emails for ecommerce sales, SaaS promos, service offers, course launches, VIP lists, seasonal campaigns, and subscriber incentives",
  "Promo code announcements with subject lines, preview text, offer framing, eligibility notes, urgency, and one coupon redemption CTA",
  "Limited-time offer angles for percentage discounts, dollar-off codes, free shipping, bundles, bonuses, flash sales, and early-access drops",
  "Coupon redemption CTAs that match the product, audience, deadline, proof point, and checkout path",
  "Tone variants for premium, playful, direct, founder-led, urgent, helpful, VIP, and brand-safe promotional email campaigns",
];

const faqs = [
  {
    question: "What is a discount email generator?",
    answer:
      "A discount email generator turns an offer brief into discount emails, promo code announcements, limited-time offer angles, subject lines, preview text, coupon redemption CTAs, and SEO-friendly snippets.",
  },
  {
    question: "Can I use this for promo code announcements?",
    answer:
      "Yes. SEOCopy can draft promo code announcements that explain the offer, frame the value, clarify eligibility, add urgency, and point shoppers to the correct redemption CTA.",
  },
  {
    question: "How is this different from the abandoned cart email generator?",
    answer:
      "The abandoned cart email generator focuses on recovering checkout intent after a shopper leaves. This discount email generator focuses on proactive offers, coupon launches, VIP promos, flash sales, and limited-time campaign announcements.",
  },
  {
    question: "How many discount email generations are free?",
    answer:
      "You can try two free generations with no signup. After that, buy one generation for $5 or use the $19/month plan for ongoing SEO, landing page, and revenue copy.",
  },
];

export default function DiscountEmailGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,253,245,0.92))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(5,150,105,0.32))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-800 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-200">
              Discount Email Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Turn a discount code into emails that drive redemptions.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Paste the offer, coupon code, audience, deadline, product benefits, exclusions, and desired checkout path. SEOCopy creates discount emails, promo code announcements, limited-time offer angles, coupon redemption CTAs, FAQs, and SEO snippets.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=discount-email-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-emerald-300 dark:text-slate-950 dark:hover:bg-emerald-200"
              >
                Generate Discount Email
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
              Discount email output checklist
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
            Make every offer easier to redeem
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Create promotional copy for sale launches, coupon drops, VIP offers, flash deals, seasonal campaigns, and subscriber incentives.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {offerMoments.map((item) => (
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
            Revenue-focused promotional copy
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Package discounts with urgency, proof, and a checkout-ready CTA.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            SEOCopy helps founders, Shopify merchants, subscription teams, and agencies turn rough promo details into clear offers, deadline-aware copy, subject lines, redemption steps, and repeatable campaign angles without starting from a blank page.
          </p>
          <Link
            href="/generate?source=discount-email-generator-cta"
            className="mt-8 inline-flex rounded-full bg-emerald-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-200"
          >
            Try Two Free Generations
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight">Discount email questions</h2>
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
