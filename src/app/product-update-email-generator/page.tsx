import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Product Update Email Generator",
  description:
    "Generate product update emails, feature announcement copy, release-note summaries, upgrade CTAs, FAQ snippets, and landing page copy from one launch brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/product-update-email-generator",
  },
  keywords: [
    "product update email generator",
    "feature announcement email generator",
    "release notes email copy",
    "SaaS product update email",
    "product launch email copy",
    "customer update email generator",
  ],
  openGraph: {
    title: "Product Update Email Generator | SEOCopy",
    description:
      "Turn a shipped feature or release note into product update emails, upgrade CTAs, FAQ snippets, and lifecycle landing page copy.",
    url: "https://seocopy.vercel.app/product-update-email-generator",
    type: "website",
  },
};

const updateMoments = [
  {
    label: "Feature announcement emails",
    body: "Explain what changed, who should care, why it saves time or money, and which CTA gets users into the new workflow.",
  },
  {
    label: "Release-note campaigns",
    body: "Turn technical changelogs into segmented launch emails, customer-facing benefits, social snippets, and support-ready FAQs.",
  },
  {
    label: "Expansion and upgrade nudges",
    body: "Frame premium features, plan limits, add-ons, and usage milestones with proof-led CTAs for accounts ready to expand.",
  },
];

const outputs = [
  "Product update emails for feature launches, release notes, bug-fix bundles, integrations, and premium upgrades",
  "Subject lines, preview text, benefit-led body copy, release summaries, objection reducers, and CTA variants",
  "Segment-aware angles for free users, active customers, admins, champions, dormant accounts, and paid teams",
  "Landing page snippets and SEO metadata for changelog pages, feature pages, help docs, and launch posts",
  "FAQ copy that explains who gets the update, what changed, how to try it, and why it matters now",
];

const faqs = [
  {
    question: "What is a product update email generator?",
    answer:
      "A product update email generator turns a new feature, release note, integration, or product improvement into customer-facing announcement copy, subject lines, upgrade CTAs, and FAQ snippets.",
  },
  {
    question: "Can this write feature announcement emails for SaaS products?",
    answer:
      "Yes. SEOCopy can draft SaaS feature announcement emails with user-segment angles, benefit framing, screenshots-to-mention, release-note summaries, and CTAs that drive activation or expansion.",
  },
  {
    question: "How is this different from a product launch copy generator?",
    answer:
      "Product launch copy is broad launch messaging for a new product. This page focuses on updates after launch: feature releases, changelog emails, integration announcements, upgrade nudges, and customer education around what changed.",
  },
  {
    question: "How many product update emails can I generate for free?",
    answer:
      "You can try two free generations with no signup. After that, buy one generation for $5 or use the $19/month plan for ongoing product marketing, SEO, landing page, and lifecycle email copy.",
  },
];

export default function ProductUpdateEmailGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,254,255,0.92))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(14,116,144,0.34))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Product Update Email Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Turn every shipped feature into an email that drives adoption.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Paste the feature, audience, release note, customer pain, proof, and desired action. SEOCopy creates product update emails, feature announcement copy, release-note summaries, upgrade CTAs, FAQs, and landing page snippets.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=product-update-email-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate Product Update Emails
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
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-700 dark:text-cyan-300">
              Product update output checklist
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
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-300">
            From release note to customer action
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Write update emails for the moments that turn shipping into revenue.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {updateMoments.map((item) => (
            <article key={item.label} className="rounded-[1.5rem] border border-black/10 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-700 dark:text-cyan-300">
                {item.label}
              </p>
              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-10">
        <div className="rounded-[2rem] border border-black/10 bg-slate-950 p-8 text-white shadow-[0_24px_80px_rgba(15,23,42,0.14)] dark:border-white/10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
            Ship adoption, not just updates
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Give customers a clear reason to try the feature before the launch window closes.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            SEOCopy helps founders, product marketers, customer success teams, and agencies turn release notes into product update email copy, feature-benefit framing, expansion CTAs, and FAQ content tied to adoption or upgrade outcomes.
          </p>
          <Link
            href="/generate?source=product-update-email-generator-cta"
            className="mt-8 inline-flex rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            Try Two Free Generations
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight">Product update email questions</h2>
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
