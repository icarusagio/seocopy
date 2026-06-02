import type { Metadata } from "next";
import Link from "next/link";

const route = "/seo-proposal-generator";
const canonical = `https://seocopy.vercel.app${route}`;

export const metadata: Metadata = {
  title: "SEO Proposal Generator",
  description:
    "Generate SEO proposals with audit findings, keyword opportunities, content roadmap, pricing rationale, proof, FAQs, and close-the-deal follow-up copy from one client brief.",
  alternates: {
    canonical,
  },
  keywords: [
    "SEO proposal generator",
    "AI SEO proposal generator",
    "SEO service proposal generator",
    "SEO audit proposal generator",
    "SEO agency proposal generator",
    "client SEO proposal template",
  ],
  openGraph: {
    title: "SEO Proposal Generator | SEOCopy",
    description:
      "Turn a rough SEO opportunity into a proposal with audit priorities, keyword wins, content roadmap, pricing rationale, proof, FAQs, and follow-up CTAs.",
    url: canonical,
    type: "website",
  },
};

const proposalSections = [
  {
    label: "Audit narrative",
    title: "Translate SEO gaps into business risk",
    body: "Summarize crawl issues, weak metadata, missing pages, keyword gaps, and competitor pressure in plain-language copy a founder or marketing lead can approve.",
  },
  {
    label: "Roadmap and pricing",
    title: "Package the first 30 days of SEO work",
    body: "Draft deliverables, milestone language, content priorities, reporting cadence, investment rationale, and optional add-ons without starting from a blank proposal doc.",
  },
  {
    label: "Proof and next step",
    title: "Help the buyer move from audit to paid work",
    body: "Generate case-study snippets, FAQ answers, objection reducers, booking CTAs, and follow-up email copy that make the SEO proposal easier to sign.",
  },
];

const workflow = [
  "Paste the client site, target market, SEO problems, current rankings, competitor examples, and the revenue goal behind the project.",
  "Add the audit findings, keyword opportunities, service package, timeline, pricing range, proof points, and objections you expect.",
  "Generate the SEO proposal summary, opportunity narrative, roadmap, pricing rationale, FAQs, metadata, and follow-up CTAs.",
  "Send the proposal, reuse the follow-up email, and route the buyer to a booking link, deposit checkout, or kickoff call.",
];

const examples = [
  "SEO proposal for a Shopify merchant with thin product pages before a seasonal sale",
  "Local SEO proposal for a service business losing map-pack visibility",
  "Content roadmap proposal for a SaaS founder targeting comparison keywords",
  "Technical SEO proposal for an ecommerce site with crawl and metadata gaps",
];

const faqs = [
  {
    question: "What is an SEO proposal generator?",
    answer:
      "An SEO proposal generator turns audit findings, keyword opportunities, client goals, scope, pricing, proof, and next steps into persuasive proposal copy for selling SEO work.",
  },
  {
    question: "Who should use the SEOCopy SEO Proposal Generator?",
    answer:
      "Agencies, consultants, freelancers, and operators can use it when they need to convert SEO audits, content opportunities, or technical findings into a clear paid project proposal.",
  },
  {
    question: "What should I include in the brief?",
    answer:
      "Include the client website, target audience, SEO symptoms, keyword or competitor examples, recommended deliverables, timeline, budget, proof, reporting plan, and the decision step you want after the buyer reads the proposal.",
  },
  {
    question: "Can it write follow-up copy after the proposal is sent?",
    answer:
      "Yes. SEOCopy can generate follow-up emails, booking CTAs, objection replies, FAQ snippets, and summary language that helps move the buyer from an SEO proposal to a kickoff call or paid deposit.",
  },
];

export default function SeoProposalGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,253,245,0.9))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(6,78,59,0.5))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-800 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-200">
              SEO Proposal Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate SEO proposals that turn audits into paid projects.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy turns a rough SEO client brief into proposal copy with audit findings, keyword opportunities, roadmap sections, pricing rationale, proof, FAQs, and close-the-deal follow-up CTAs.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=seo-proposal-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-emerald-300 dark:text-slate-950 dark:hover:bg-emerald-200"
              >
                Generate an SEO Proposal
              </Link>
              <a
                href="#examples"
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950 dark:border-white/15 dark:text-slate-200 dark:hover:border-white dark:hover:text-white"
              >
                See SEO Proposal Examples
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/10 bg-white/85 p-7 shadow-[0_24px_80px_rgba(15,23,42,0.1)] dark:border-white/10 dark:bg-white/5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700 dark:text-emerald-300">
              Four-step workflow
            </p>
            <div className="mt-6 space-y-4">
              {workflow.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-2xl border border-slate-200 p-4 dark:border-white/10">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-800 dark:bg-emerald-300 dark:text-slate-950">
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
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700 dark:text-emerald-300">
            SEO proposal copy included
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            One client brief, every section needed to sell an SEO roadmap with confidence.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {proposalSections.map((item) => (
            <article key={item.label} className="rounded-[1.5rem] border border-black/10 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700 dark:text-emerald-300">
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
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-200">
            Example SEO proposal briefs
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Draft a proposal from the audit, keywords, roadmap, proof, price, and next step you already have.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {examples.map((example) => (
              <div key={example} className="rounded-2xl border border-white/10 bg-white/5 p-5 font-medium">
                {example}
              </div>
            ))}
          </div>
          <Link
            href="/generate?source=seo-proposal-generator-cta"
            className="mt-8 inline-flex rounded-full bg-emerald-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-200"
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
