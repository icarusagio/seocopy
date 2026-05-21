import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Coupon Email Generator",
  description:
    "Generate coupon emails, promo code announcements, redemption reminders, urgency angles, offer FAQs, SEO snippets, and click-ready CTAs from one discount campaign brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/coupon-email-generator",
  },
  keywords: [
    "coupon email generator",
    "coupon emails",
    "promo code email copy",
    "discount campaign email",
    "redemption reminder email",
    "ecommerce coupon copy",
    "offer email CTA",
    "limited-time coupon email",
    "promo code announcement",
  ],
  openGraph: {
    title: "Coupon Email Generator | SEOCopy",
    description:
      "Turn a promo code, offer deadline, customer segment, and product proof into coupon emails, redemption reminders, urgency angles, FAQs, and conversion CTAs.",
    url: "https://seocopy.vercel.app/coupon-email-generator",
    type: "website",
  },
};

const couponMoments = [
  {
    label: "Promo code launches",
    body: "Announce a new coupon with the offer value, eligibility rules, product reason-to-buy, and a CTA that makes redemption feel immediate.",
  },
  {
    label: "Deadline reminders",
    body: "Turn expiring codes, last-call sale windows, cart deadlines, and seasonal promos into urgency that stays helpful instead of spammy.",
  },
  {
    label: "Segmented incentives",
    body: "Adapt coupon angles for first-time buyers, VIP customers, cart abandoners, lapsed subscribers, wholesale prospects, and loyalty members.",
  },
];

const outputs = [
  "Coupon emails for ecommerce stores, Shopify merchants, SaaS promos, local service offers, course launches, memberships, and creator products",
  "Promo code announcement copy with subject lines, preview text, offer framing, discount rules, urgency notes, and a clear redemption CTA",
  "Redemption reminder emails for expiring coupons, cart incentives, replenishment offers, seasonal discounts, and limited-time bundles",
  "Offer FAQ snippets that explain eligibility, deadline, exclusions, product fit, shipping thresholds, and next steps before the click",
  "Tone variants for premium, playful, founder-led, urgent, helpful, concise, VIP-only, and value-led discount campaigns",
];

const faqs = [
  {
    question: "What is a coupon email generator?",
    answer:
      "A coupon email generator turns a discount campaign brief into coupon emails, promo code announcements, redemption reminders, subject lines, preview text, offer FAQs, SEO snippets, and conversion CTAs.",
  },
  {
    question: "Can I use this for ecommerce promo codes?",
    answer:
      "Yes. SEOCopy can draft Shopify coupon emails, product-drop discount campaigns, cart recovery code reminders, VIP-only promo copy, and seasonal offer emails that explain the code and push shoppers back to checkout.",
  },
  {
    question: "How is this different from the discount email generator?",
    answer:
      "The discount email generator covers broad sale messaging. This coupon email generator focuses specifically on code-based offers: promo code announcements, redemption rules, eligibility notes, deadline reminders, and coupon-specific CTAs.",
  },
  {
    question: "How many coupon email generations are free?",
    answer:
      "You can try two free generations with no signup. After that, buy one generation for $5 or use the $19/month plan for ongoing SEO, landing page, and campaign copy.",
  },
];

export default function CouponEmailGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,253,245,0.92))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(5,150,105,0.32))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-800 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-200">
              Coupon Email Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Turn every promo code into a clearer reason to buy now.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Paste the coupon value, promo code, product offer, audience segment, deadline, exclusions, and redemption link. SEOCopy creates coupon emails, promo code announcements, redemption reminders, urgency angles, offer FAQs, SEO snippets, and click-ready CTAs.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=coupon-email-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-emerald-300 dark:text-slate-950 dark:hover:bg-emerald-200"
              >
                Generate Coupon Email
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
              Coupon email output checklist
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
            Make promo codes easier to redeem
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Create coupon emails for launch announcements, cart incentives, VIP perks, deadline reminders, replenishment offers, seasonal promos, and winback discounts.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {couponMoments.map((item) => (
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
            Coupon-specific conversion copy
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Package the offer, rules, and deadline so shoppers know exactly why and how to redeem.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            SEOCopy helps founders, Shopify merchants, retention marketers, and agencies turn a promo code into subject lines, preview text, benefit-led offer framing, eligibility notes, urgency reminders, and checkout CTAs without rebuilding each campaign from scratch.
          </p>
          <Link
            href="/generate?source=coupon-email-generator-cta"
            className="mt-8 inline-flex rounded-full bg-emerald-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-200"
          >
            Try Two Free Generations
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight">Coupon email questions</h2>
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
