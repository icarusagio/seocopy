import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mailchimp Email Generator",
  description:
    "Generate Mailchimp-ready email campaign copy, subject lines, preview text, audience variants, product blocks, landing snippets, and revenue-focused CTAs.",
  alternates: {
    canonical: "https://seocopy.vercel.app/mailchimp-email-generator",
  },
  keywords: [
    "Mailchimp email generator",
    "Mailchimp email copy generator",
    "Mailchimp campaign copy",
    "email newsletter generator",
    "ecommerce email campaign generator",
    "Mailchimp subject line generator",
  ],
  openGraph: {
    title: "Mailchimp Email Generator | SEOCopy",
    description:
      "Turn a campaign brief, audience segment, or product promo into Mailchimp-ready subject lines, preview text, email sections, landing snippets, FAQs, and CTAs.",
    url: "https://seocopy.vercel.app/mailchimp-email-generator",
    type: "website",
  },
};

const campaignTypes = [
  {
    label: "Newsletter campaigns",
    body: "Draft weekly updates, founder notes, product announcements, curated roundups, and newsletter CTAs that fit a Mailchimp campaign layout.",
  },
  {
    label: "Promo and launch emails",
    body: "Create sale, product-drop, event, waitlist, and limited-time offer copy with subject lines, preview text, hero blocks, product modules, and urgency-safe CTAs.",
  },
  {
    label: "Audience segment variants",
    body: "Generate tailored angles for new subscribers, repeat customers, VIP buyers, local leads, inactive readers, and high-intent clickers without rewriting the campaign from scratch.",
  },
];

const outputs = [
  "Mailchimp subject-line and preview-text pairs for campaigns and newsletters",
  "Email body sections for hero copy, offer framing, product blocks, proof, and FAQs",
  "Audience-specific variants for subscribers, customers, VIPs, and inactive readers",
  "Landing-page snippets and CTA copy to keep email clicks aligned with the offer",
  "SEO metadata and social preview copy for the campaign landing page",
];

const faqs = [
  {
    question: "What is a Mailchimp email generator?",
    answer:
      "A Mailchimp email generator turns a campaign brief, audience segment, product promo, or newsletter topic into ready-to-edit email copy: subject lines, preview text, hero sections, product blocks, FAQs, landing snippets, and CTAs.",
  },
  {
    question: "Can SEOCopy write Mailchimp newsletter copy?",
    answer:
      "Yes. SEOCopy can draft newsletter intros, section blurbs, founder notes, product announcements, roundup copy, sponsor-style blocks, and calls to action for Mailchimp campaigns.",
  },
  {
    question: "How is this different from a general email marketing generator?",
    answer:
      "This page focuses on Mailchimp campaign production: audience segments, newsletter sections, promo modules, landing-page alignment, and subject-line variants that fit common Mailchimp workflows.",
  },
  {
    question: "How many Mailchimp email drafts can I generate for free?",
    answer:
      "You can try two free generations without creating an account. After that, buy one generation for $5 or use the $19/month plan for ongoing email, landing page, and SEO copy.",
  },
];

export default function MailchimpEmailGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,254,255,0.86))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(14,116,144,0.58))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Mailchimp Email Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate Mailchimp-ready email campaigns, newsletters, and audience variants.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Paste a campaign brief, newsletter topic, product promo, or audience segment. SEOCopy returns Mailchimp subject lines, preview text, email body blocks, landing snippets, FAQs, and CTAs in one pass.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=mailchimp-email-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate Mailchimp Email Copy
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
              Mailchimp output checklist
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
            Mailchimp campaign playbooks
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Turn newsletter topics, promos, and audience segments into Mailchimp emails that can drive clicks and purchases.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {campaignTypes.map((item) => (
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
            Faster Mailchimp production
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Go from rough campaign idea to Mailchimp subject lines, body copy, segment variants, and CTAs in minutes.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            SEOCopy keeps Mailchimp campaigns aligned with the offer, audience, landing page, and buyer intent. Use it for newsletters, promos, launch emails, and list reactivation without starting from a blank template.
          </p>
          <Link
            href="/generate?source=mailchimp-email-generator-cta"
            className="mt-8 inline-flex rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            Try Two Free Generations
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight">Mailchimp email generator questions</h2>
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
