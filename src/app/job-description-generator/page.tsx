import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Job Description Generator",
  description:
    "Generate job descriptions, role summaries, responsibilities, qualifications, interview scorecard prompts, FAQs, and hiring CTAs from one role brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/job-description-generator",
  },
  keywords: [
    "job description generator",
    "AI job description generator",
    "role description generator",
    "hiring copy generator",
    "job posting copy",
  ],
  openGraph: {
    title: "Job Description Generator | SEOCopy",
    description:
      "Turn a role brief into clear job descriptions, responsibility bullets, qualification tiers, screening prompts, FAQs, and hiring CTAs.",
    url: "https://seocopy.vercel.app/job-description-generator",
    type: "website",
  },
};

const benefits = [
  {
    title: "Clarify the role fast",
    body: "Translate scattered hiring notes into a candidate-friendly role summary, impact statement, team context, and success criteria for the first 90 days.",
  },
  {
    title: "Separate must-haves from nice-to-haves",
    body: "Draft responsibilities, required qualifications, preferred skills, and compensation-context copy that helps qualified candidates self-select.",
  },
  {
    title: "Improve the hiring funnel",
    body: "Generate interview scorecard prompts, candidate FAQs, posting metadata, and application CTAs so recruiting pages move candidates toward applying.",
  },
];

const outputs = [
  "Job description and role positioning angles",
  "Responsibilities and first-90-days success bullets",
  "Required and preferred qualification sections",
  "Candidate FAQ answers and interview scorecard prompts",
  "Hiring CTA variants and SEO snippets",
];

const faqs = [
  {
    question: "What is a job description generator?",
    answer:
      "A job description generator turns a role brief, hiring notes, or team need into a structured job posting with a role summary, responsibilities, qualifications, candidate FAQs, SEO snippets, and application CTAs.",
  },
  {
    question: "Can SEOCopy write job postings for startups and small teams?",
    answer:
      "Yes. SEOCopy can draft startup-friendly job descriptions, impact bullets, qualification tiers, screening questions, interview scorecard prompts, and recruiting landing page copy from a short hiring brief.",
  },
  {
    question: "What should a strong job description include?",
    answer:
      "A strong job description should explain the role mission, team context, core responsibilities, required qualifications, preferred skills, compensation or benefits context when available, an inclusive candidate FAQ, and a clear application CTA.",
  },
];

export default function JobDescriptionGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(224,242,254,0.86))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(12,74,110,0.65))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Job Description Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate job descriptions that attract qualified candidates.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Turn a role brief, hiring notes, or team need into job descriptions, responsibilities, qualifications, candidate FAQs, SEO snippets, and application CTAs.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=job-description-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate Job Copy
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
              Hiring copy output
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
            Why use the job description generator
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            A faster way to turn hiring notes into candidate-ready copy.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {benefits.map((item) => (
            <article key={item.title} className="rounded-[1.5rem] border border-black/10 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{item.body}</p>
            </article>
          ))}
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
