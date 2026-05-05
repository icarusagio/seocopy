import type { Metadata } from "next";
import Link from "next/link";

const route = "/proposal-generator";
const canonical = `https://seocopy.vercel.app${route}`;

export const metadata: Metadata = {
  title: "Proposal Generator",
  description:
    "Generate client proposals with offer positioning, scope, timeline, pricing rationale, proof, FAQs, SEO metadata, and CTA follow-up copy from one project brief.",
  alternates: {
    canonical,
  },
  keywords: [
    "proposal generator",
    "AI proposal generator",
    "client proposal generator",
    "business proposal generator",
    "service proposal generator",
    "freelance proposal generator",
  ],
  openGraph: {
    title: "Proposal Generator | SEOCopy",
    description:
      "Turn a rough client brief into a polished proposal with scope, deliverables, pricing rationale, proof, FAQs, and follow-up CTAs.",
    url: canonical,
    type: "website",
  },
};

const proposalBlocks = [
  {
    label: "Offer summary",
    title: "Position the project around the client outcome",
    body: "Generate a concise problem statement, proposed solution, success metrics, and value narrative so the proposal feels tied to revenue or operational impact.",
  },
  {
    label: "Scope and pricing",
    title: "Make deliverables, timeline, and investment easy to approve",
    body: "Draft package options, milestones, assumptions, exclusions, pricing rationale, and next-step language that reduces back-and-forth before signing.",
  },
  {
    label: "Proof and follow-up",
    title: "Add confidence builders for the buying committee",
    body: "Create proof snippets, objection answers, FAQ copy, email follow-ups, SEO metadata, and CTA variants that help prospects move from proposal to paid project.",
  },
];

const workflow = [
  "Paste the client, project goal, target audience, current problem, proposed service, timeline, budget, proof, and desired next step.",
  "Add constraints, must-have deliverables, optional add-ons, decision criteria, competitors, tone, and the client objections you expect.",
  "Generate the proposal summary, scope, milestones, pricing rationale, proof blocks, FAQs, SEO/social snippets, and follow-up CTAs.",
  "Send the strongest version, reuse the follow-up copy in email, and link the CTA to checkout, deposit invoice, or a booking page.",
];

const examples = [
  "Proposal for a Shopify SEO refresh before a seasonal campaign",
  "Agency proposal for a local service business website rebuild",
  "Freelance proposal for monthly landing page experiments",
  "Consulting proposal for a SaaS onboarding conversion audit",
];

const faqs = [
  {
    question: "What is a proposal generator?",
    answer:
      "A proposal generator turns a client brief, service offer, scope, timeline, proof, pricing, and next step into a structured proposal that helps a prospect approve the work faster.",
  },
  {
    question: "Can SEOCopy write client proposals for agencies and freelancers?",
    answer:
      "Yes. SEOCopy can draft proposals for agencies, consultants, freelancers, productized services, and local business vendors that need clear scope, pricing rationale, proof, FAQs, and follow-up CTAs.",
  },
  {
    question: "What inputs make the best proposal output?",
    answer:
      "Use the client goal, pain point, target buyer, deliverables, timeline, budget range, proof, constraints, differentiators, objections, and the conversion step you want after the prospect reads the proposal.",
  },
  {
    question: "Does this replace a formal contract?",
    answer:
      "No. Use the generated proposal copy as a persuasive sales document, then pair accepted work with your own contract, payment terms, and legal review when needed.",
  },
];

export default function ProposalGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(240,253,250,0.9))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(20,83,45,0.5))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Proposal Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate client proposals that make the next step obvious.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy turns a rough project brief into proposal copy with positioning, scope, pricing rationale, proof, FAQs, email follow-ups, and CTA variants so service teams can move prospects toward a paid start.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=proposal-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate a Proposal
              </Link>
              <a
                href="#examples"
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950 dark:border-white/15 dark:text-slate-200 dark:hover:border-white dark:hover:text-white"
              >
                See Proposal Examples
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
            Proposal copy included
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            One project brief, every section needed to move a qualified prospect toward a signed start.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {proposalBlocks.map((item) => (
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
            Example proposal briefs
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Draft a proposal from the prospect context, deliverables, proof, price, and next step you already have.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {examples.map((example) => (
              <div key={example} className="rounded-2xl border border-white/10 bg-white/5 p-5 font-medium">
                {example}
              </div>
            ))}
          </div>
          <Link
            href="/generate?source=proposal-generator-cta"
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
