import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Microcopy Generator",
  description:
    "Generate UX microcopy, form helper text, empty states, confirmation messages, error copy, CTA labels, and SEO snippets from one product or workflow brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/microcopy-generator",
  },
  keywords: [
    "microcopy generator",
    "UX microcopy generator",
    "AI microcopy generator",
    "form helper text generator",
    "error message copy generator",
    "empty state copy generator",
  ],
  openGraph: {
    title: "Microcopy Generator | SEOCopy",
    description:
      "Turn rough product context into clear UX microcopy for forms, empty states, confirmations, errors, CTA labels, onboarding steps, and SEO snippets.",
    url: "https://seocopy.vercel.app/microcopy-generator",
    type: "website",
  },
};

const outputs = [
  {
    label: "Forms and onboarding",
    title: "Reduce hesitation before the click",
    body: "Generate field labels, helper text, onboarding prompts, tooltip copy, and privacy reassurances that make product flows feel easier to complete.",
  },
  {
    label: "States and alerts",
    title: "Make every system message useful",
    body: "Create empty states, success messages, warnings, error copy, and recovery prompts that tell users what happened and what to do next.",
  },
  {
    label: "Conversion moments",
    title: "Clarify CTAs without sounding generic",
    body: "Draft button labels, upgrade nudges, checkout reassurance, feature callouts, SEO titles, meta descriptions, and FAQ angles from the same workflow brief.",
  },
];

const workflow = [
  "Describe the product flow, page, form, checkout, or feature experience that needs clearer in-product copy.",
  "Add the audience, desired action, current friction, brand tone, and any terms the copy must avoid.",
  "Generate UX microcopy, CTA labels, helper text, empty states, errors, confirmations, SEO snippets, and FAQ ideas.",
  "Paste the strongest lines into your product UI, onboarding checklist, pricing flow, or support documentation.",
];

const examples = [
  {
    moment: "Empty cart after an item sells out",
    copy: "This item moved fast. Join the restock list and we will email you the moment it is back.",
  },
  {
    moment: "Newsletter signup helper text",
    copy: "Get one practical growth teardown each week. No daily blasts, no sponsor-only emails.",
  },
  {
    moment: "Checkout error recovery",
    copy: "Your card was not charged. Check the details below or try another payment method.",
  },
];

const faqs = [
  {
    question: "What is a microcopy generator?",
    answer:
      "A microcopy generator creates short product copy for interface moments such as buttons, forms, empty states, tooltips, error messages, confirmations, onboarding prompts, and checkout reassurance.",
  },
  {
    question: "Can SEOCopy write UX microcopy and SEO copy together?",
    answer:
      "Yes. SEOCopy can generate UX microcopy alongside SEO titles, meta descriptions, social previews, FAQ ideas, and CTA variants so the page and product flow use the same message.",
  },
  {
    question: "Who should use AI-generated microcopy?",
    answer:
      "Founders, product marketers, SaaS teams, Shopify merchants, agencies, and UX writers can use it to quickly improve forms, onboarding flows, checkout pages, dashboards, and support states.",
  },
  {
    question: "How many microcopy briefs can I generate for free?",
    answer:
      "You can run two free generations without an account. After that, buy one additional generation for $5 or use the $19/month plan for ongoing SEO and product copy production.",
  },
];

export default function MicrocopyGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,253,245,0.9))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(22,78,99,0.6))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Microcopy Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate product microcopy that helps users take the next step.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy turns rough product context into concise UX microcopy for forms, empty states, errors, confirmations, CTA labels, onboarding, checkout reassurance, SEO snippets, and FAQ ideas.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=microcopy-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate Microcopy
              </Link>
              <a
                href="#examples"
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950 dark:border-white/15 dark:text-slate-200 dark:hover:border-white dark:hover:text-white"
              >
                See examples
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/10 bg-white/85 p-7 shadow-[0_24px_80px_rgba(15,23,42,0.1)] dark:border-white/10 dark:bg-white/5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-700 dark:text-cyan-300">
              From rough flow to product-ready copy
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
            UX microcopy deliverables
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            One workflow brief, clearer product moments.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {outputs.map((item) => (
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
            Microcopy examples
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Replace vague interface text with clear next-step guidance.
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {examples.map((example) => (
              <article key={example.moment} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">Moment</p>
                <p className="mt-2 font-semibold">{example.moment}</p>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">Copy</p>
                <p className="mt-2 leading-7 text-slate-300">{example.copy}</p>
              </article>
            ))}
          </div>
          <Link
            href="/generate?source=microcopy-generator"
            className="mt-8 inline-flex rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            Generate UX microcopy
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-6xl px-6 pb-24 lg:px-10">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-300">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Microcopy generator questions
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <article key={faq.question} className="rounded-[1.5rem] border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-white/5">
              <h3 className="text-xl font-semibold">{faq.question}</h3>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <script
        type="application/ld+json"
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
