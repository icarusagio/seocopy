import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Black Friday Email Generator",
  description:
    "Generate Black Friday emails, Cyber Monday follow-ups, promo code reminders, holiday sale landing snippets, CTA variants, and FAQ copy from one seasonal offer brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/black-friday-email-generator",
  },
  keywords: [
    "Black Friday email generator",
    "AI Black Friday email generator",
    "Black Friday emails",
    "Cyber Monday follow-ups",
    "promo code reminders",
    "holiday sale landing snippets",
    "BFCM email copy",
    "Shopify Black Friday email copy",
  ],
  openGraph: {
    title: "Black Friday Email Generator | SEOCopy",
    description:
      "Turn one seasonal offer brief into Black Friday emails, Cyber Monday follow-ups, promo code reminders, holiday sale landing snippets, CTAs, and FAQs.",
    url: "https://seocopy.vercel.app/black-friday-email-generator",
    type: "website",
  },
};

const blackFridayAssets = [
  {
    label: "Black Friday emails",
    title: "Draft launch, last-chance, and VIP sale sends",
    body: "Generate Black Friday emails for early access, main sale launch, low-stock nudges, last-chance urgency, and customer-specific offer angles without starting from a blank doc.",
  },
  {
    label: "Cyber Monday follow-ups",
    title: "Extend the weekend into a clean Monday sequence",
    body: "Create Cyber Monday follow-ups, deadline reminders, cart recovery copy, and post-weekend offer refreshes that keep the promo clear after Black Friday fatigue sets in.",
  },
  {
    label: "Holiday sale landing snippets",
    title: "Match inbox promises to checkout-ready landing copy",
    body: "Pair each email angle with holiday sale landing snippets, promo code reminders, FAQ answers, trust copy, and CTA variants so shoppers see the same deal after the click.",
  },
];

const workflow = [
  "Paste the product, discount, promo code, sale window, inventory pressure, audience, and brand voice.",
  "Add shipping cutoffs, bundle details, exclusions, VIP access rules, objections, and the checkout action you want.",
  "Generate Black Friday emails, Cyber Monday follow-ups, promo code reminders, holiday sale landing snippets, CTAs, and FAQs.",
  "Sequence the strongest angles across launch, reminder, last-chance, and Cyber Monday sends before pushing shoppers to checkout.",
];

const faqs = [
  {
    question: "What is a Black Friday email generator?",
    answer:
      "A Black Friday email generator turns a seasonal sale brief into Black Friday emails, Cyber Monday follow-ups, promo code reminders, holiday sale landing snippets, CTA variants, and FAQ copy for ecommerce campaigns.",
  },
  {
    question: "How is this different from the discount email generator?",
    answer:
      "The discount email generator handles general coupon and sale announcements. This Black Friday email generator focuses on BFCM-specific sale windows, Cyber Monday follow-ups, promo code reminders, shipping cutoff reassurance, inventory urgency, and holiday sale landing snippets.",
  },
  {
    question: "Can SEOCopy write Black Friday emails for Shopify stores?",
    answer:
      "Yes. Add the Shopify product, discount, promo code, offer deadline, shipping notes, bundle details, and audience to generate Black Friday emails for product drops, storewide sales, VIP access, and cart recovery flows.",
  },
  {
    question: "How many Black Friday email generations are free?",
    answer:
      "You can run two free generations with no signup. After that, buy one generation for $5 or use the $19/month plan for ongoing SEO, landing page, email, SMS, and campaign copy.",
  },
];

export default function BlackFridayEmailGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-orange-700 dark:text-orange-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(255,247,237,1),rgba(254,242,242,0.92))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(194,65,12,0.38))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-orange-800 dark:border-orange-400/20 dark:bg-orange-400/10 dark:text-orange-200">
              Black Friday Email Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate Black Friday emails that move shoppers from inbox to checkout.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy turns one seasonal offer brief into Black Friday emails, Cyber Monday follow-ups, promo code reminders, holiday sale landing snippets, FAQ copy, and conversion-ready CTAs for BFCM campaigns.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=black-friday-email-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-orange-300 dark:text-slate-950 dark:hover:bg-orange-200"
              >
                Generate Black Friday Emails
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
              BFCM campaign workflow
            </p>
            <div className="mt-6 space-y-4">
              {workflow.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-2xl border border-slate-200 p-4 dark:border-white/10">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100 text-sm font-bold text-orange-800 dark:bg-orange-300 dark:text-slate-950">
                    {index + 1}
                  </span>
                  <p className="font-medium">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-10">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-700 dark:text-orange-300">
            Seasonal sale assets included
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            One offer brief, multiple BFCM email angles for promotion-heavy shoppers.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {blackFridayAssets.map((item) => (
            <article key={item.label} className="rounded-[1.5rem] border border-black/10 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-700 dark:text-orange-300">
                {item.label}
              </p>
              <h3 className="mt-4 text-2xl font-semibold">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-10">
        <div className="rounded-[2rem] border border-black/10 bg-slate-950 p-8 text-white shadow-[0_24px_80px_rgba(15,23,42,0.14)] dark:border-white/10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-200">
            Sale-to-checkout consistency
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Keep the promo code, urgency, and landing page promise aligned.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            Use SEOCopy to connect Black Friday emails, Cyber Monday follow-ups, promo code reminders, holiday sale landing snippets, shipping reassurance, and checkout CTAs around the same seasonal buyer intent.
          </p>
          <Link
            href="/generate?source=black-friday-email-generator-cta"
            className="mt-8 inline-flex rounded-full bg-orange-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-orange-200"
          >
            Try Two Free Generations
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight">Black Friday email questions</h2>
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
