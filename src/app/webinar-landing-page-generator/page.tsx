import type { Metadata } from "next";
import Link from "next/link";

const route = "/webinar-landing-page-generator";
const canonical = `https://seocopy.vercel.app${route}`;

export const metadata: Metadata = {
  title: "Webinar Landing Page Generator",
  description:
    "Generate webinar landing page headlines, registration copy, agendas, speaker proof, reminder snippets, SEO metadata, and CTA variants from one event brief.",
  alternates: {
    canonical,
  },
  keywords: [
    "webinar landing page generator",
    "AI webinar landing page generator",
    "webinar registration page copy",
    "webinar headline generator",
    "webinar description generator",
    "webinar CTA copy generator",
  ],
  openGraph: {
    title: "Webinar Landing Page Generator | SEOCopy",
    description:
      "Turn a webinar topic into a registration page, agenda, speaker proof, SEO snippets, reminder copy, and high-intent CTA variants.",
    url: canonical,
    type: "website",
  },
};

const outputBlocks = [
  {
    label: "Registration page copy",
    title: "Write the page that turns topic interest into signups",
    body: "Generate a webinar headline, subheadline, benefit bullets, audience fit, registration CTA, and above-the-fold copy that makes the promised outcome obvious.",
  },
  {
    label: "Agenda and speaker proof",
    title: "Package the why-attend story with credibility",
    body: "Create a timed agenda, learning outcomes, speaker bios, proof points, and objection-handling copy for visitors deciding whether the webinar is worth their calendar.",
  },
  {
    label: "SEO and promotion snippets",
    title: "Reuse the same brief across search, email, and social",
    body: "Get SEO titles, meta descriptions, social preview copy, reminder email snippets, and follow-up CTAs from the same webinar positioning brief.",
  },
];

const workflow = [
  "Paste the webinar topic, target attendee, pain point, promised outcome, speaker details, date, and registration goal.",
  "Add proof, objections, industry keywords, tone, and whether the webinar is live, evergreen, demo-led, or partner-hosted.",
  "Generate the landing page copy, agenda, speaker section, FAQ, SEO metadata, social preview, and reminder snippets.",
  "Publish the strongest version, link it from campaigns, and use the same outputs in email and social promotion.",
];

const examples = [
  "Demo webinar landing page for a Shopify retention app",
  "Partner webinar page for an agency and SaaS co-marketing campaign",
  "Evergreen training page for a founder-led AI SEO workflow",
  "Live workshop registration page for ecommerce operators",
];

const faqs = [
  {
    question: "What is a webinar landing page generator?",
    answer:
      "A webinar landing page generator turns an event topic, audience, speaker, proof, agenda, and registration goal into copy for a page designed to convert interested visitors into attendees.",
  },
  {
    question: "Can SEOCopy generate webinar registration page copy?",
    answer:
      "Yes. SEOCopy can generate webinar headlines, subheadlines, benefit bullets, agenda sections, speaker proof, FAQs, SEO metadata, social previews, email snippets, and CTA variants from one event brief.",
  },
  {
    question: "What inputs make the best webinar page copy?",
    answer:
      "Use the target attendee, painful problem, promised outcome, event format, speaker credibility, date or evergreen status, proof points, objections, keywords, and the action you want visitors to take.",
  },
  {
    question: "Can I use this for evergreen webinars and live workshops?",
    answer:
      "Yes. The generator works for live webinars, evergreen webinars, product demos, workshops, partner events, and training sessions that need landing page copy plus promotion snippets.",
  },
];

export default function WebinarLandingPageGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,254,255,0.88))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(22,78,99,0.58))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Webinar Landing Page Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate webinar landing page copy that turns intent into registrations.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy turns a webinar brief into registration page headlines, benefit bullets, agenda copy, speaker proof, SEO metadata, reminder snippets, and CTA variants so campaigns launch faster.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=webinar-landing-page-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate Webinar Copy
              </Link>
              <a
                href="#examples"
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950 dark:border-white/15 dark:text-slate-200 dark:hover:border-white dark:hover:text-white"
              >
                See Webinar Examples
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/10 bg-white/85 p-7 shadow-[0_24px_80px_rgba(15,23,42,0.1)] dark:border-white/10 dark:bg-white/5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-700 dark:text-cyan-300">
              Four-step workflow
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
            Webinar copy included
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            One event brief, every section needed to drive registrations.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {outputBlocks.map((item) => (
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

      <section id="examples" className="mx-auto max-w-6xl px-6 pb-20 lg:px-10">
        <div className="rounded-[2rem] border border-black/10 bg-slate-950 p-8 text-white shadow-[0_24px_80px_rgba(15,23,42,0.14)] dark:border-white/10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
            Example webinar briefs
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Draft a stronger registration page from the audience, promise, agenda, proof, and CTA you already have.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {examples.map((example) => (
              <div key={example} className="rounded-2xl border border-white/10 bg-white/5 p-5 font-medium">
                {example}
              </div>
            ))}
          </div>
          <Link
            href="/generate?source=webinar-landing-page-generator-cta"
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
