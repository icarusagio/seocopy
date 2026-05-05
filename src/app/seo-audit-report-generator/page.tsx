import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SEO Audit Report Generator",
  description:
    "Generate a practical SEO audit report with prioritized fixes, metadata recommendations, page copy angles, FAQ opportunities, and conversion-focused next steps.",
  alternates: {
    canonical: "https://seocopy.vercel.app/seo-audit-report-generator",
  },
  keywords: [
    "SEO audit report generator",
    "AI SEO audit report",
    "website SEO audit generator",
    "SEO recommendations generator",
    "SEO report template",
    "content audit tool",
  ],
  openGraph: {
    title: "SEO Audit Report Generator | SEOCopy",
    description:
      "Turn a URL, keyword, or page brief into an SEO audit report with prioritized fixes, metadata rewrites, content gaps, FAQs, and conversion CTAs.",
    url: "https://seocopy.vercel.app/seo-audit-report-generator",
    type: "website",
  },
};

const auditSections = [
  {
    label: "Priority fixes",
    title: "Find the changes most likely to move traffic",
    body: "Draft a concise audit summary with title tag, meta description, headline, internal-link, content-depth, and intent-match recommendations ranked by impact.",
  },
  {
    label: "Rewrite queue",
    title: "Turn audit findings into publishable SEO copy",
    body: "Generate stronger metadata, section headlines, FAQ answers, social previews, and CTA variants from the same audit brief so fixes do not stall after discovery.",
  },
  {
    label: "Revenue path",
    title: "Connect search improvements to conversion actions",
    body: "Map each recommendation to the signup, demo, purchase, booking, quote, or inquiry action the page should support.",
  },
];

const workflow = [
  "Paste a URL, target keyword, current title and description, or notes from an SEO crawl.",
  "Add audience, page goal, conversion action, known competitors, and any constraints you need to preserve.",
  "Generate prioritized SEO audit findings, metadata rewrites, content gaps, FAQ ideas, and CTA improvements.",
  "Use the report to refresh the page, brief a teammate, or package a client-ready audit deliverable.",
];

const faqs = [
  {
    question: "What is an SEO audit report generator?",
    answer:
      "An SEO audit report generator turns a URL, keyword, page brief, or crawl notes into prioritized recommendations for metadata, content structure, search intent, internal links, FAQs, and conversion copy.",
  },
  {
    question: "Can SEOCopy create copy from audit recommendations?",
    answer:
      "Yes. SEOCopy is built to move from diagnosis to draft copy, including title tags, meta descriptions, headings, FAQ answers, social previews, and calls to action that match the audit findings.",
  },
  {
    question: "Who should use an AI SEO audit report generator?",
    answer:
      "Founders, marketers, agencies, consultants, ecommerce teams, and local businesses can use it to turn thin pages, stale metadata, or crawl findings into a practical page refresh plan.",
  },
  {
    question: "How many free SEO audit reports can I generate?",
    answer:
      "You can run two free generations without creating an account. After that, buy one more generation for $5 or use the $19/month plan for ongoing SEO audit and copy refresh work.",
  },
];

export default function SeoAuditReportGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,254,255,0.88))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(8,47,73,0.68))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              SEO Audit Report Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate SEO audit reports that turn findings into fixes.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy turns a URL, keyword, or rough crawl notes into a practical SEO audit report with prioritized recommendations, metadata rewrites, FAQ opportunities, and conversion-focused next steps.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=seo-audit-report-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate an SEO Audit Report
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
              Four-step audit workflow
            </p>
            <div className="mt-6 space-y-4">
              {workflow.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-2xl border border-slate-200 p-4 dark:border-white/10">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-sm font-bold text-cyan-800 dark:bg-cyan-300 dark:text-slate-950">
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
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-300">
            Audit-to-action deliverables
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            One SEO audit brief, a clearer page refresh plan.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {auditSections.map((item) => (
            <article key={item.label} className="rounded-[1.5rem] border border-black/10 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-700 dark:text-cyan-300">
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
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
            From audit notes to publishable improvements
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Stop ending SEO audits with a spreadsheet nobody ships.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            Use SEOCopy to package SEO findings with the actual metadata, copy sections, FAQs, and CTAs needed to update the page and measure the next revenue step.
          </p>
          <Link
            href="/generate?source=seo-audit-report-generator-cta"
            className="mt-8 inline-flex rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            Try Two Free Generations
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight">FAQ</h2>
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
