import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Unique Selling Proposition Generator",
  description:
    "Generate a clear unique selling proposition, differentiation angles, proof points, SEO snippets, and CTA copy from one product or service brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/unique-selling-proposition-generator",
  },
  keywords: [
    "unique selling proposition generator",
    "USP generator",
    "unique value proposition generator",
    "differentiation statement generator",
    "positioning statement generator",
    "AI USP generator",
  ],
  openGraph: {
    title: "Unique Selling Proposition Generator | SEOCopy",
    description:
      "Turn a product brief into a sharper USP, differentiation angles, proof points, SEO metadata, FAQ ideas, and CTA copy that explains why buyers should choose you.",
    url: "https://seocopy.vercel.app/unique-selling-proposition-generator",
    type: "website",
  },
};

const deliverables = [
  {
    label: "USP statement",
    title: "Say why buyers should choose you",
    body: "Transform rough positioning notes into a concise promise that names the audience, outcome, differentiation, and reason to believe.",
  },
  {
    label: "Differentiation angles",
    title: "Clarify what competitors cannot claim",
    body: "Generate contrast bullets, category alternatives, proof prompts, and objection reducers that make your offer easier to compare.",
  },
  {
    label: "SEO and CTA copy",
    title: "Carry the USP into search and conversion",
    body: "Create title tags, meta descriptions, OG copy, FAQ ideas, hero headlines, and CTA variants that repeat the strongest reason to act.",
  },
];

const workflow = [
  "Describe the product, service, audience, category alternatives, strongest outcome, and available proof.",
  "Add the buyer pain, switching trigger, differentiator, tone, and any keyword the page should support.",
  "Generate USP statements, positioning angles, comparison bullets, SEO snippets, FAQs, and CTA options.",
  "Use the clearest USP across your homepage hero, sales page, product page, pitch deck, or ad landing page.",
];

const examples = [
  {
    brief: "Back-in-stock alerts for Shopify stores",
    usp: "Recover out-of-stock demand automatically with branded alerts that bring shoppers back while purchase intent is still high.",
  },
  {
    brief: "AI copy tool for small teams",
    usp: "Launch search-ready pages faster with SEO copy variants that founders can ship without waiting on a full growth team.",
  },
  {
    brief: "Consulting offer for B2B SaaS onboarding",
    usp: "Cut time-to-value by turning scattered onboarding knowledge into a repeatable first-30-days customer success system.",
  },
];

const faqs = [
  {
    question: "What is a unique selling proposition generator?",
    answer:
      "A unique selling proposition generator turns product, audience, competitor, and proof inputs into concise positioning statements that explain why buyers should choose your offer over alternatives.",
  },
  {
    question: "Can SEOCopy generate USP copy for landing pages?",
    answer:
      "Yes. SEOCopy can create USP statements, hero headlines, proof bullets, comparison angles, FAQ ideas, SEO titles, meta descriptions, and CTA variants from the same brief.",
  },
  {
    question: "Who should use a USP generator?",
    answer:
      "Founders, marketers, agencies, consultants, SaaS teams, Shopify merchants, and small businesses can use a USP generator when the offer feels generic or competitors sound too similar.",
  },
  {
    question: "How many USP briefs can I generate for free?",
    answer:
      "You can run two free generations without creating an account. After that, buy one additional generation for $5 or use the $19/month plan for ongoing SEO and copy production.",
  },
];

export default function UniqueSellingPropositionGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,253,245,0.9))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(22,78,99,0.6))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Unique Selling Proposition Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate a unique selling proposition buyers remember.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy turns your audience, offer, competitors, proof, and product notes into a sharper USP, differentiation angles, SEO snippets, FAQs, and CTA copy that make the reason to choose you obvious.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=unique-selling-proposition-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate a USP
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
              From generic offer to clear USP
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
            Differentiation deliverables
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            One brief, a sharper reason to buy.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {deliverables.map((item) => (
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
            USP examples
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Move from what you sell to why buyers should choose it now.
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {examples.map((example) => (
              <article key={example.brief} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">Brief</p>
                <p className="mt-2 font-semibold">{example.brief}</p>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">USP</p>
                <p className="mt-2 leading-7 text-slate-300">{example.usp}</p>
              </article>
            ))}
          </div>
          <Link
            href="/generate?source=unique-selling-proposition-generator"
            className="mt-8 inline-flex rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            Generate your USP
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-6xl px-6 pb-24 lg:px-10">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-300">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Unique selling proposition generator questions
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
