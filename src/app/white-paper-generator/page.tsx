import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "White Paper Generator",
  description:
    "Generate white paper outlines, executive summaries, research-backed sections, lead magnet CTAs, FAQs, and SEO snippets from one B2B topic brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/white-paper-generator",
  },
  keywords: [
    "white paper generator",
    "AI white paper generator",
    "B2B white paper outline",
    "white paper outline generator",
    "lead magnet white paper",
    "thought leadership content",
  ],
  openGraph: {
    title: "White Paper Generator | SEOCopy",
    description:
      "Turn one B2B topic brief into white paper outlines, executive summaries, research-backed sections, lead magnet CTAs, and SEO snippets.",
    url: "https://seocopy.vercel.app/white-paper-generator",
    type: "website",
  },
};

const whitePaperSections = [
  {
    label: "Executive summary",
    body: "Frame the market problem, buyer pain, stakes, and promised insight so busy executives understand why the white paper matters.",
  },
  {
    label: "Research-backed sections",
    body: "Convert rough notes into section angles, proof prompts, data callouts, expert quote placeholders, and narrative transitions.",
  },
  {
    label: "Lead magnet CTAs",
    body: "Pair the report with landing page snippets, download CTAs, nurture angles, and sales handoff prompts for the next revenue step.",
  },
];

const outputs = [
  "White paper thesis, audience, and executive summary angle",
  "B2B white paper outline with section-by-section talking points",
  "Research prompts, data callouts, and expert quote placeholders",
  "Landing page SEO title, meta description, and download CTA variants",
  "FAQ snippets, nurture-email hooks, and sales enablement follow-up notes",
];

const faqs = [
  {
    question: "What is a white paper generator?",
    answer:
      "A white paper generator turns a B2B topic, audience, proof points, and offer into a white paper outline with executive summary copy, research-backed sections, landing page snippets, FAQs, and CTAs.",
  },
  {
    question: "Can SEOCopy create a B2B white paper outline?",
    answer:
      "Yes. SEOCopy can draft B2B white paper outlines for SaaS, agencies, consultants, ecommerce platforms, fintech products, and other teams using thought leadership as a lead magnet.",
  },
  {
    question: "How does this help lead generation?",
    answer:
      "The output connects the report idea to lead magnet CTAs, SEO snippets, landing page copy, nurture-email angles, and sales handoff notes so the white paper can support acquisition and pipeline instead of staying as a static PDF.",
  },
  {
    question: "How many white paper generations can I try for free?",
    answer:
      "You can try two free generations without creating an account. After that, buy one generation for $5 or use the $19/month plan for ongoing SEO, landing page, and thought leadership copy.",
  },
];

export default function WhitePaperGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(239,246,255,0.9))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(30,41,59,0.76))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              White Paper Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate white papers that turn thought leadership into qualified leads.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Paste a B2B topic, audience, product angle, or rough research notes. SEOCopy returns a white paper outline with executive summary copy, research-backed sections, lead magnet CTAs, FAQs, and SEO snippets.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=white-paper-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate a White Paper
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
              White paper output checklist
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
            Turn expertise into pipeline
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Plan a white paper that earns search traffic, captures leads, and gives sales a stronger follow-up story.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {whitePaperSections.map((item) => (
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
            From topic brief to download campaign
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Build the report structure and the conversion path around it in one pass.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            SEOCopy keeps the white paper tied to revenue: sharper thesis, stronger proof prompts, clearer download positioning, nurture hooks, and CTAs that move readers toward demo, trial, or consultation.
          </p>
          <Link
            href="/generate?source=white-paper-generator-cta"
            className="mt-8 inline-flex rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            Try Two Free Generations
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight">White paper generator questions</h2>
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
