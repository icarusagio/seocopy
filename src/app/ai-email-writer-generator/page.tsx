import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Email Writer Generator",
  description:
    "Generate AI email writer drafts for sales emails, launch announcements, lifecycle nurture copy, follow-ups, FAQs, and conversion CTAs from one campaign brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/ai-email-writer-generator",
  },
  keywords: [
    "AI email writer generator",
    "AI email writer",
    "sales email generator",
    "launch announcement email",
    "lifecycle nurture copy",
    "email copywriting AI",
  ],
  openGraph: {
    title: "AI Email Writer Generator | SEOCopy",
    description:
      "Turn one audience, offer, and campaign goal into sales emails, launch announcements, lifecycle nurture copy, follow-up angles, FAQs, and CTAs.",
    url: "https://seocopy.vercel.app/ai-email-writer-generator",
    type: "website",
  },
};

const emailAngles = [
  {
    label: "Sales emails",
    body: "Convert audience pains, proof points, objections, and offers into concise outbound, follow-up, and sales-assist emails that point readers to the next step.",
  },
  {
    label: "Launch announcements",
    body: "Package product updates, waitlists, feature drops, and seasonal campaigns into announcement copy with subject lines, preview text, and CTA options.",
  },
  {
    label: "Lifecycle nurture copy",
    body: "Generate onboarding, activation, re-engagement, and education emails that keep prospects moving from first interest to paid conversion.",
  },
];

const outputs = [
  "AI email writer drafts for sales emails, launch announcements, lifecycle nurture copy, and follow-up sequences",
  "Subject lines, preview text, opening hooks, objection reducers, proof snippets, and CTA variants",
  "Short-form email options for founders, Shopify merchants, SaaS teams, agencies, and local businesses",
  "Landing-page snippets and SEO metadata so email campaigns stay aligned with the destination page",
  "FAQ answers that clarify usage, pricing, free generations, and campaign-fit before visitors start writing",
];

const faqs = [
  {
    question: "What is an AI email writer generator?",
    answer:
      "An AI email writer generator turns a campaign brief into sales emails, launch announcements, lifecycle nurture copy, follow-up angles, subject lines, preview text, and CTA variants for marketing and sales workflows.",
  },
  {
    question: "Can I use this for sales emails and follow-ups?",
    answer:
      "Yes. SEOCopy can draft sales emails, follow-up notes, objection-handling paragraphs, proof snippets, and CTA paths from one audience, pain point, offer, and desired next action.",
  },
  {
    question: "How is this different from the email marketing copy generator?",
    answer:
      "This page focuses on the broader AI email writer workflow: sales emails, launch announcements, lifecycle nurture copy, and follow-up sequences. The email marketing copy page is more campaign-promo specific.",
  },
  {
    question: "How many AI email generations are free?",
    answer:
      "You can try two free generations with no signup. After that, buy one generation for $5 or use the $19/month plan for ongoing SEO, landing page, and campaign copy.",
  },
];

export default function AiEmailWriterGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(240,253,250,0.92))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(20,83,45,0.4))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              AI Email Writer Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Write sales emails, launch announcements, and nurture sequences from one brief.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Paste the audience, offer, proof, campaign goal, and next step. SEOCopy acts as an AI email writer for sales emails, launch announcements, lifecycle nurture copy, follow-ups, FAQs, and conversion CTAs.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=ai-email-writer-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate Email Copy
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
              Email output checklist
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
            From offer brief to inbox-ready copy
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Turn one campaign idea into email variants for acquisition, launch, and lifecycle moments.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {emailAngles.map((item) => (
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
            Ship campaigns faster
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Keep every email aligned with the landing-page promise and next action.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            SEOCopy helps founders, merchants, marketers, agencies, and sales teams move from scattered campaign notes to usable email drafts, CTA copy, page snippets, and FAQ content without starting from a blank page.
          </p>
          <Link
            href="/generate?source=ai-email-writer-generator-cta"
            className="mt-8 inline-flex rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            Try Two Free Generations
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight">AI email writer questions</h2>
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
