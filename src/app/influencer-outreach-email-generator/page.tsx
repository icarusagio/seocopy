import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Influencer Outreach Email Generator",
  description:
    "Generate influencer outreach emails, creator collaboration pitches, affiliate partnership asks, gifted-collab follow-ups, and campaign CTAs from one partnership brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/influencer-outreach-email-generator",
  },
  keywords: [
    "influencer outreach email generator",
    "influencer outreach emails",
    "creator collaboration pitches",
    "affiliate partnership emails",
    "gifted collaboration follow ups",
    "creator campaign outreach",
    "brand ambassador email copy",
    "influencer marketing email",
  ],
  openGraph: {
    title: "Influencer Outreach Email Generator | SEOCopy",
    description:
      "Turn a creator brief, product angle, commission offer, or gifted-collab ask into influencer outreach emails, follow-ups, and conversion-ready campaign CTAs.",
    url: "https://seocopy.vercel.app/influencer-outreach-email-generator",
    type: "website",
  },
};

const outreachMoments = [
  {
    label: "Creator collaboration pitches",
    body: "Frame the brand, product fit, audience overlap, campaign idea, deliverables, and reply CTA so creators can quickly judge the opportunity.",
  },
  {
    label: "Affiliate partnership asks",
    body: "Explain commission terms, sample hooks, proof points, tracking links, and payout expectations without making the pitch feel generic.",
  },
  {
    label: "Gifted-collab follow-ups",
    body: "Nudge creators after a sample, event, launch, or seed list send with polite next steps, content prompts, and deadline-aware reminders.",
  },
];

const outputs = [
  "Influencer outreach emails for Shopify merchants, SaaS tools, agencies, creator programs, local brands, and product launches",
  "Creator collaboration pitches with subject lines, preview text, product fit, audience overlap, deliverables, compensation notes, and a clear reply CTA",
  "Affiliate partnership emails for commission offers, ambassador programs, UGC campaigns, seasonal launches, and evergreen creator recruitment",
  "Gifted-collab follow-ups that include sample status, content ideas, post timing, usage rights reminders, and friendly next steps",
  "Tone variants for founder-led, premium, playful, direct, warm, concise, agency-managed, and creator-first partnership outreach",
];

const faqs = [
  {
    question: "What is an influencer outreach email generator?",
    answer:
      "An influencer outreach email generator turns a partnership brief into creator collaboration pitches, affiliate partnership asks, gifted-collab follow-ups, subject lines, preview text, and reply-focused CTAs.",
  },
  {
    question: "Can I use this for affiliate and ambassador programs?",
    answer:
      "Yes. SEOCopy can draft affiliate partnership emails, brand ambassador invitations, creator recruitment follow-ups, usage-rights reminders, and campaign CTAs that explain the incentive clearly.",
  },
  {
    question: "How is this different from the cold email generator?",
    answer:
      "The cold email generator is broad sales outreach. This influencer outreach email generator focuses on creator fit, product seeding, collaboration deliverables, affiliate terms, campaign timing, and partnership-friendly reply CTAs.",
  },
  {
    question: "How many influencer outreach email generations are free?",
    answer:
      "You can try two free generations with no signup. After that, buy one generation for $5 or use the $19/month plan for ongoing SEO, landing page, and campaign copy.",
  },
];

export default function InfluencerOutreachEmailGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,253,245,0.92))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(5,150,105,0.32))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-800 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-200">
              Influencer Outreach Email Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Turn creator lists into collaboration replies with sharper outreach.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Paste the product, creator niche, audience fit, offer, deliverables, timing, usage rights, and reply goal. SEOCopy creates influencer outreach emails, creator collaboration pitches, affiliate partnership asks, gifted-collab follow-ups, FAQs, and campaign CTAs.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=influencer-outreach-email-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-emerald-300 dark:text-slate-950 dark:hover:bg-emerald-200"
              >
                Generate Influencer Outreach Email
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
              Influencer outreach output checklist
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
            Make every creator pitch easier to answer
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Create influencer outreach copy for product seeding, affiliate launches, UGC briefs, ambassador programs, event invites, and seasonal creator campaigns.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {outreachMoments.map((item) => (
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
            Revenue-focused creator outreach
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Package creator offers with product fit, incentive clarity, and a reply-ready CTA.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            SEOCopy helps founders, Shopify merchants, creator managers, and agencies turn partnership details into clear outreach, affiliate invitations, seeded-product follow-ups, collaboration proof points, and repeatable campaign angles without starting from a blank page.
          </p>
          <Link
            href="/generate?source=influencer-outreach-email-generator-cta"
            className="mt-8 inline-flex rounded-full bg-emerald-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-200"
          >
            Try Two Free Generations
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight">Influencer outreach email questions</h2>
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
