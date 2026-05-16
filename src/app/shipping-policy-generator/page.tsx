import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shipping Policy Generator",
  description:
    "Generate shipping policy copy, delivery timelines, carrier cutoff notes, support-reducing shipping FAQs, and trust-building ecommerce delivery snippets from one fulfillment brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/shipping-policy-generator",
  },
  keywords: [
    "shipping policy generator",
    "AI shipping policy generator",
    "shipping policy copy",
    "delivery timelines",
    "carrier cutoff notes",
    "support-reducing shipping FAQs",
    "Shopify shipping policy copy",
    "ecommerce delivery policy",
  ],
  openGraph: {
    title: "Shipping Policy Generator | SEOCopy",
    description:
      "Turn fulfillment rules into shipping policy copy, delivery timelines, carrier cutoff notes, support-reducing shipping FAQs, and buyer-trust snippets.",
    url: "https://seocopy.vercel.app/shipping-policy-generator",
    type: "website",
  },
};

const shippingAssets = [
  {
    label: "Delivery timelines",
    title: "Translate fulfillment rules into buyer-friendly delivery copy",
    body: "Draft processing windows, domestic and international delivery estimates, preorder timing, pickup notes, and promise-safe arrival language shoppers can understand before they buy.",
  },
  {
    label: "Carrier cutoff notes",
    title: "Set expectations around shipping methods and order deadlines",
    body: "Create carrier cutoff notes, holiday shipping caveats, weekend processing explanations, expedited shipping disclaimers, and tracking-update copy that reduces uncertainty.",
  },
  {
    label: "Support-reducing shipping FAQs",
    title: "Answer delivery objections before they become tickets",
    body: "Generate FAQ answers for tracking delays, split shipments, lost packages, wrong addresses, international duties, local pickup, delivery exceptions, and shipping-cost questions.",
  },
];

const workflow = [
  "Paste your processing windows, shipping methods, cutoff times, carrier rules, delivery regions, pickup options, and tracking support path.",
  "Add constraints such as Shopify policy tone, international markets, holiday caveats, expedited shipping claims, and compliance or operations notes.",
  "Generate shipping policy copy, delivery timelines, carrier cutoff notes, support-reducing shipping FAQs, PDP reassurance snippets, and help-center summaries.",
  "Reuse the clearest sections across your shipping policy page, product pages, checkout reassurance copy, order confirmation emails, and support macros.",
];

const faqs = [
  {
    question: "What is a shipping policy generator?",
    answer:
      "A shipping policy generator turns fulfillment rules into shipping policy copy, delivery timelines, carrier cutoff notes, support-reducing shipping FAQs, and buyer-trust snippets for ecommerce pages.",
  },
  {
    question: "How is this different from a return policy generator?",
    answer:
      "The return policy generator focuses on refunds, exchanges, and post-purchase return rules. This shipping policy generator focuses on delivery expectations, processing windows, carrier cutoffs, tracking, and shipping-cost questions before and after purchase.",
  },
  {
    question: "Can SEOCopy replace legal or operations review for shipping policies?",
    answer:
      "No. SEOCopy helps draft clearer policy and FAQ copy from the shipping rules you provide, but merchants should review shipping policy copy with their operations, compliance, and support teams before publishing.",
  },
  {
    question: "How many shipping policy generations are free?",
    answer:
      "You can run two free generations with no signup. After that, buy one generation for $5 or use the $19/month plan for ongoing product page, SEO, email, SMS, social, and policy-support copy.",
  },
];

export default function ShippingPolicyGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-sky-700 dark:text-sky-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(240,253,250,0.92))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(20,184,166,0.26))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-teal-800 dark:border-teal-400/20 dark:bg-teal-400/10 dark:text-teal-200">
              Shipping Policy Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate shipping policy copy that sets delivery expectations and reduces support tickets.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy turns fulfillment notes into shipping policy copy, delivery timelines, carrier cutoff notes, support-reducing shipping FAQs, and trust-building delivery snippets for ecommerce pages.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=shipping-policy-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-teal-300 dark:text-slate-950 dark:hover:bg-teal-200"
              >
                Generate Shipping Policy Copy
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
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-700 dark:text-teal-300">
              Fulfillment-to-support workflow
            </p>
            <div className="mt-6 space-y-4">
              {workflow.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-2xl border border-slate-200 p-4 dark:border-white/10">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-100 text-sm font-bold text-teal-800 dark:bg-teal-300 dark:text-slate-950">
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
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal-700 dark:text-teal-300">
            Delivery assets included
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Turn messy shipping rules into a clearer purchase-confidence system.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {shippingAssets.map((item) => (
            <article key={item.label} className="rounded-[1.5rem] border border-black/10 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-700 dark:text-teal-300">
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
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal-200">
            Clearer shipping, fewer tickets
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Pair shipping policy copy with checkout reassurance, product-page delivery notes, and support macros.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            Use SEOCopy to explain delivery timelines, carrier cutoff notes, shipping costs, tracking delays, international duties, and support-reducing shipping FAQs before uncertainty becomes a pre-sale or post-purchase ticket.
          </p>
          <Link
            href="/generate?source=shipping-policy-generator-cta"
            className="mt-8 inline-flex rounded-full bg-teal-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-teal-200"
          >
            Try Two Free Generations
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight">Shipping policy generator questions</h2>
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
