import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing Table Copy Generator",
  description:
    "Generate pricing table copy, plan names, feature-grid labels, upgrade nudges, risk reducers, FAQ prompts, and conversion CTAs from one pricing brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/pricing-table-copy-generator",
  },
  keywords: [
    "pricing table copy generator",
    "pricing table copy",
    "pricing table CTAs",
    "plan comparison copy",
    "SaaS pricing table",
    "feature grid copy",
    "upgrade nudges",
    "pricing conversion copy",
  ],
  openGraph: {
    title: "Pricing Table Copy Generator | SEOCopy",
    description:
      "Turn one pricing brief into pricing table copy, plan names, feature-grid labels, upgrade nudges, risk reducers, FAQ prompts, and conversion CTAs.",
    url: "https://seocopy.vercel.app/pricing-table-copy-generator",
    type: "website",
  },
};

const pricingAngles = [
  {
    label: "Plan comparison clarity",
    body: "Translate messy tiers into clear plan names, who-each-plan-is-for blurbs, feature-grid labels, and upgrade triggers that help buyers self-select faster.",
  },
  {
    label: "Revenue-focused CTAs",
    body: "Generate button copy, billing-toggle microcopy, trial-to-paid nudges, annual-plan prompts, and enterprise contact CTAs tied to the right pricing moment.",
  },
  {
    label: "Objection reducers",
    body: "Add reassurance around free trials, cancellation, usage limits, support, security, migration, and value proof so the pricing table lowers risk instead of creating it.",
  },
];

const outputs = [
  "Pricing table copy for SaaS tiers, ecommerce apps, agencies, creator tools, AI products, service packages, and subscription offers",
  "Plan names, plan blurbs, ideal-customer labels, feature-grid rows, usage-limit explanations, and billing-toggle helper text",
  "Upgrade nudges that explain when to move from free to paid, monthly to annual, or starter to growth tiers",
  "Risk-reversal microcopy for free trials, cancellation terms, support promises, security notes, migration help, and money-back policies",
  "Conversion CTAs and FAQ prompts that connect pricing decisions to signup, checkout, demo booking, install, or sales-contact actions",
];

const faqs = [
  {
    question: "What is a pricing table copy generator?",
    answer:
      "A pricing table copy generator turns a pricing brief into plan names, plan blurbs, feature-grid labels, upgrade nudges, risk reducers, FAQ prompts, and conversion CTAs for the pricing section where buyers compare options.",
  },
  {
    question: "How is this different from a pricing page copy generator?",
    answer:
      "A pricing page copy generator covers the full page: headline, proof, objections, FAQs, and surrounding sections. This tool focuses specifically on the pricing table itself: plan positioning, feature comparisons, billing microcopy, upgrade triggers, and table CTAs.",
  },
  {
    question: "Can I use this for SaaS or Shopify app pricing?",
    answer:
      "Yes. Paste the audience, tier names, feature limits, trial rules, billing cadence, objections, and conversion goal. SEOCopy will create pricing table copy that helps SaaS buyers, Shopify merchants, agencies, or creators choose the right plan.",
  },
  {
    question: "How many pricing table copy generations are free?",
    answer:
      "You can try two free generations with no signup. After that, buy one generation for $5 or use the $19/month plan for ongoing SEO, landing page, product, email, and conversion copy.",
  },
];

export default function PricingTableCopyGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,253,245,0.92))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(5,150,105,0.32))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-800 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-200">
              Pricing Table Copy Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Write pricing table copy that helps buyers pick a plan.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Paste the audience, plan tiers, feature limits, billing rules, objections, proof, and desired conversion. SEOCopy creates pricing table copy, plan names, feature-grid labels, upgrade nudges, risk reducers, FAQ prompts, and conversion CTAs from one pricing brief.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=pricing-table-copy-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-emerald-300 dark:text-slate-950 dark:hover:bg-emerald-200"
              >
                Generate Pricing Table Copy
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
              Pricing table output checklist
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
            From tier confusion to plan selection
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Turn a pricing grid into a guided purchase decision.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {pricingAngles.map((item) => (
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
            From plan rows to paid intent
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Make the pricing table explain which next step is worth paying for.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            SEOCopy helps teams turn pricing details into buyer-facing language: who each plan fits, why each feature matters, when to upgrade, and which CTA should move the visitor toward signup, checkout, demo booking, install, or sales contact.
          </p>
          <Link
            href="/generate?source=pricing-table-copy-generator-cta"
            className="mt-8 inline-flex rounded-full bg-emerald-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-200"
          >
            Try Two Free Generations
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight">Pricing table copy questions</h2>
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
