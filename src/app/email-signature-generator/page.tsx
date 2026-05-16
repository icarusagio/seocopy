import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Email Signature Generator",
  description:
    "Generate email signatures, professional signature copy, founder and sales CTAs, disclaimer snippets, and brand-safe signoffs from one profile brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/email-signature-generator",
  },
  keywords: [
    "email signature generator",
    "AI email signature generator",
    "email signatures",
    "professional signature copy",
    "founder email signature",
    "sales email signature CTA",
    "disclaimer snippets",
    "professional signoff generator",
  ],
  openGraph: {
    title: "Email Signature Generator | SEOCopy",
    description:
      "Turn a short profile brief into email signatures, professional signature copy, founder and sales CTAs, disclaimer snippets, and polished signoffs.",
    url: "https://seocopy.vercel.app/email-signature-generator",
    type: "website",
  },
};

const signatureAssets = [
  {
    label: "Professional signature copy",
    title: "Package your title, proof, and contact details clearly",
    body: "Draft concise email signatures for founders, consultants, sales reps, support teams, recruiters, and creators with role clarity, brand tone, and readable contact fields.",
  },
  {
    label: "Founder and sales CTAs",
    title: "Turn every outbound email into a soft conversion path",
    body: "Add tasteful CTAs for booking demos, joining waitlists, reading case studies, visiting a pricing page, claiming an offer, or replying with the next step.",
  },
  {
    label: "Disclaimer snippets",
    title: "Create optional legal, confidentiality, and compliance copy",
    body: "Generate plain-language disclaimer snippets, confidentiality notes, unsubscribe language, and footer variants your team can review before adding them to email clients.",
  },
];

const workflow = [
  "Paste your name, role, company, website, contact details, preferred tone, compliance needs, and the action you want recipients to take.",
  "Choose whether the signature should feel founder-led, sales-focused, support-friendly, recruiting-oriented, or agency/professional services polished.",
  "Generate email signatures, professional signature copy, founder and sales CTAs, signoffs, disclaimer snippets, and compact mobile-friendly variants.",
  "Copy the strongest version into Gmail, Outlook, Apple Mail, sales sequences, support inboxes, or onboarding docs after reviewing required legal language.",
];

const faqs = [
  {
    question: "What is an email signature generator?",
    answer:
      "An email signature generator turns a short professional profile into email signatures, professional signature copy, CTAs, signoffs, and optional disclaimer snippets for outbound or customer-facing email.",
  },
  {
    question: "Can SEOCopy write sales and founder email signature CTAs?",
    answer:
      "Yes. SEOCopy can draft founder and sales CTAs for demos, waitlists, pricing pages, case studies, calendar links, product launches, and reply-based next steps without making the signature feel cluttered.",
  },
  {
    question: "Can it include disclaimer snippets?",
    answer:
      "Yes. SEOCopy can draft disclaimer snippets, confidentiality notes, unsubscribe language, and compliance-aware footer copy. Review final legal language with your own counsel or policy owner before publishing.",
  },
  {
    question: "How many email signature generations are free?",
    answer:
      "You can run two free generations with no signup. After that, buy one generation for $5 or use the $19/month plan for ongoing SEO, landing page, email, SMS, sales, and marketing copy.",
  },
];

export default function EmailSignatureGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-sky-700 dark:text-sky-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(240,249,255,0.92))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(14,165,233,0.32))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-sky-800 dark:border-sky-400/20 dark:bg-sky-400/10 dark:text-sky-200">
              Email Signature Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate professional email signatures with CTAs that earn the next click.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy turns one profile brief into email signatures, professional signature copy, founder and sales CTAs, disclaimer snippets, and polished signoffs for customer-facing inboxes.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=email-signature-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-sky-300 dark:text-slate-950 dark:hover:bg-sky-200"
              >
                Generate Email Signatures
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
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700 dark:text-sky-300">
              Signature workflow
            </p>
            <div className="mt-6 space-y-4">
              {workflow.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-2xl border border-slate-200 p-4 dark:border-white/10">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-800 dark:bg-sky-300 dark:text-slate-950">
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
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700 dark:text-sky-300">
            Email signature assets included
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Move from generic contact blocks to signatures that support trust and conversion.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {signatureAssets.map((item) => (
            <article key={item.label} className="rounded-[1.5rem] border border-black/10 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700 dark:text-sky-300">
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
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-200">
            Every email can carry a next step
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Align your signoff with the same offer, proof, and CTA you use on your landing page.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            Use SEOCopy to create email signatures that match your positioning, connect to useful resources, and keep legal or compliance notes readable instead of overwhelming.
          </p>
          <Link
            href="/generate?source=email-signature-generator-cta"
            className="mt-8 inline-flex rounded-full bg-sky-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-200"
          >
            Try Two Free Generations
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight">Email signature generator questions</h2>
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
