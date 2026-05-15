import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Post-Purchase Email Generator",
  description:
    "Generate post-purchase emails, order confirmation follow-ups, cross-sell recommendations, second-purchase CTAs, FAQs, and SEO snippets from one customer moment.",
  alternates: {
    canonical: "https://seocopy.vercel.app/post-purchase-email-generator",
  },
  keywords: [
    "post-purchase email generator",
    "post-purchase emails",
    "order confirmation follow-ups",
    "cross-sell recommendations",
    "second-purchase CTAs",
    "customer onboarding emails",
    "repeat purchase email copy",
    "ecommerce retention emails",
  ],
  openGraph: {
    title: "Post-Purchase Email Generator | SEOCopy",
    description:
      "Turn a first order, delivery moment, onboarding milestone, or replenishment window into post-purchase emails, cross-sells, second-purchase CTAs, subject lines, and FAQ-backed snippets.",
    url: "https://seocopy.vercel.app/post-purchase-email-generator",
    type: "website",
  },
};

const purchaseMoments = [
  {
    label: "Order confirmation follow-ups",
    body: "Go beyond the receipt with expectation-setting, helpful next steps, care instructions, onboarding links, and a reason to stay engaged.",
  },
  {
    label: "Cross-sell recommendations",
    body: "Turn the original purchase into a relevant add-on, bundle, replenishment reminder, or service upgrade without sounding pushy.",
  },
  {
    label: "Second-purchase CTAs",
    body: "Build email copy around timing, product usage, social proof, and incentives that nudge new customers toward their next order.",
  },
];

const outputs = [
  "Post-purchase emails for ecommerce orders, SaaS onboarding, local services, subscriptions, agencies, courses, and productized offers",
  "Order confirmation follow-ups with subject lines, preview text, delivery expectations, care tips, onboarding links, and one next CTA",
  "Cross-sell recommendations that match the purchased product, customer use case, replenishment window, and proof points",
  "Second-purchase CTAs for welcome-back offers, bundles, loyalty nudges, referral asks, review paths, and replenishment reminders",
  "Tone variants for premium, friendly, founder-led, helpful, celebratory, educational, concise, and urgency-aware post-purchase flows",
];

const faqs = [
  {
    question: "What is a post-purchase email generator?",
    answer:
      "A post-purchase email generator turns a customer moment into post-purchase emails, order confirmation follow-ups, cross-sell recommendations, second-purchase CTAs, subject lines, preview text, and SEO-friendly page snippets.",
  },
  {
    question: "Can I use this for order confirmation follow-ups?",
    answer:
      "Yes. SEOCopy can draft order confirmation follow-ups that set expectations, explain next steps, recommend relevant products, invite reviews or referrals, and keep customers moving toward the next purchase.",
  },
  {
    question: "How is this different from the abandoned cart or winback email generators?",
    answer:
      "The abandoned cart email generator focuses on shoppers who left before buying, and the winback email generator focuses on lapsed customers after a quiet period. This post-purchase email generator focuses on customers immediately after an order, delivery, onboarding milestone, or replenishment window.",
  },
  {
    question: "How many post-purchase email generations are free?",
    answer:
      "You can try two free generations with no signup. After that, buy one generation for $5 or use the $19/month plan for ongoing SEO, landing page, and revenue copy.",
  },
];

export default function PostPurchaseEmailGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,253,245,0.92))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(5,150,105,0.32))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-800 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-200">
              Post-Purchase Email Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Turn fresh customers into repeat buyers with post-purchase emails.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Paste the order, customer segment, product benefits, delivery or onboarding timing, add-on offer, and next step. SEOCopy creates post-purchase emails, order confirmation follow-ups, cross-sell recommendations, second-purchase CTAs, FAQs, and SEO snippets.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=post-purchase-email-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-emerald-300 dark:text-slate-950 dark:hover:bg-emerald-200"
              >
                Generate Post-Purchase Email
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
              Post-purchase email output checklist
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
            Turn the first purchase into the next one
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Create retention copy for new buyers, delivery moments, onboarding steps, cross-sell windows, and replenishment reminders.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {purchaseMoments.map((item) => (
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
            Make the post-purchase window useful, trusted, and conversion-ready.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            SEOCopy helps founders, Shopify merchants, subscription teams, and agencies turn new customer momentum into helpful follow-ups, timely add-ons, review paths, replenishment nudges, and repeat-purchase CTAs without drafting each flow from scratch.
          </p>
          <Link
            href="/generate?source=post-purchase-email-generator-cta"
            className="mt-8 inline-flex rounded-full bg-emerald-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-200"
          >
            Try Two Free Generations
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight">Post-purchase email questions</h2>
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
