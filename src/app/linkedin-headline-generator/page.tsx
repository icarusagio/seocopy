import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LinkedIn Headline Generator",
  description:
    "Generate LinkedIn headlines, profile taglines, founder positioning, recruiter keywords, proof-led hooks, and CTA variants from one professional profile brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/linkedin-headline-generator",
  },
  keywords: [
    "LinkedIn headline generator",
    "AI LinkedIn headline generator",
    "LinkedIn profile headline ideas",
    "professional headline generator",
    "founder LinkedIn headline generator",
    "recruiter keyword headline generator",
  ],
  openGraph: {
    title: "LinkedIn Headline Generator | SEOCopy",
    description:
      "Turn a role, offer, audience, proof point, and career goal into LinkedIn headline variants, profile positioning, keyword angles, and CTA copy.",
    url: "https://seocopy.vercel.app/linkedin-headline-generator",
    type: "website",
  },
};

const deliverables = [
  {
    label: "Profile headlines",
    title: "Explain what you do before visitors scroll",
    body: "Generate clear LinkedIn headline options for founders, consultants, job seekers, creators, marketers, operators, and agency owners that combine role, audience, and value.",
  },
  {
    label: "Keyword angles",
    title: "Balance search terms with human positioning",
    body: "Turn skills, industries, services, locations, tools, and outcomes into headline variants that support LinkedIn discovery without reading like a keyword dump.",
  },
  {
    label: "Proof and CTA variants",
    title: "Connect profile views to the next step",
    body: "Draft proof-led hooks, featured-section blurbs, intro line options, and soft calls to action for booking calls, hiring conversations, newsletter signups, or product demos.",
  },
];

const workflow = [
  "Describe the profile: role, offer, audience, industry, career goal, and the visitor you want to convert.",
  "Add proof points, tools, credentials, location, tone, and whether the headline should optimize for hiring, sales, partnerships, or audience growth.",
  "Generate headline variants, keyword angles, profile-intro hooks, proof snippets, and CTA endings.",
  "Publish the strongest headline on LinkedIn and reuse the supporting copy in your About section, featured links, pitch deck, or landing page.",
];

const examples = [
  {
    brief: "B2B SaaS founder selling analytics to product teams",
    output: "Founder building clearer product analytics for lean SaaS teams | Helping PMs find revenue leaks before churn starts",
  },
  {
    brief: "Freelance conversion copywriter for ecommerce brands",
    output: "Conversion copywriter for ecommerce brands | Product pages, emails, and landing pages that turn more shoppers into customers",
  },
  {
    brief: "Marketing manager looking for growth roles",
    output: "Growth marketing manager | Paid acquisition, lifecycle campaigns, and conversion experiments for early-stage startups",
  },
];

const faqs = [
  {
    question: "What is a LinkedIn headline generator?",
    answer:
      "A LinkedIn headline generator turns your role, target audience, offer, proof points, keywords, and career goal into profile headline variants and supporting copy you can edit before publishing.",
  },
  {
    question: "Can SEOCopy write headlines for founders, freelancers, and job seekers?",
    answer:
      "Yes. SEOCopy can generate LinkedIn headlines for founders, consultants, freelancers, job seekers, creators, agency owners, executives, marketers, operators, and product teams.",
  },
  {
    question: "Will the headline include LinkedIn search keywords?",
    answer:
      "Yes. Add your services, skills, industry, audience, location, tools, and outcomes so the generated headlines include relevant keywords while still sounding credible to profile visitors.",
  },
  {
    question: "How many LinkedIn headline ideas can I generate for free?",
    answer:
      "You can run two free generations without creating an account. After that, buy one additional generation for $5 or use the $19/month plan for ongoing profile, SEO, and copy production.",
  },
];

export default function LinkedInHeadlineGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-sky-700 dark:text-sky-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(239,246,255,1),rgba(240,253,250,0.92))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(14,116,144,0.55))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-sky-800 dark:border-sky-400/20 dark:bg-sky-400/10 dark:text-sky-200">
              LinkedIn Headline Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate LinkedIn headlines that turn profile views into opportunities.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy turns your role, audience, offer, proof, keywords, and goal into professional LinkedIn headlines, profile hooks, search-friendly positioning, and CTA variants.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=linkedin-headline-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-sky-300 dark:text-slate-950 dark:hover:bg-sky-200"
              >
                Generate LinkedIn headlines
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
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700 dark:text-sky-300">
              From profile brief to opportunity-ready headline
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
            LinkedIn profile deliverables
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            One professional brief, multiple profile-ready copy assets.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {deliverables.map((item) => (
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

      <section id="examples" className="mx-auto max-w-6xl px-6 pb-20 lg:px-10">
        <div className="rounded-[2rem] border border-black/10 bg-slate-950 p-8 text-white shadow-[0_24px_80px_rgba(15,23,42,0.14)] dark:border-white/10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-200">
            LinkedIn headline examples
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Turn a short profile brief into a clear reason to connect.
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {examples.map((example) => (
              <article key={example.brief} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">Brief</p>
                <p className="mt-2 font-semibold">{example.brief}</p>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">Headline angle</p>
                <p className="mt-2 leading-7 text-slate-300">{example.output}</p>
              </article>
            ))}
          </div>
          <Link
            href="/generate?source=linkedin-headline-generator"
            className="mt-8 inline-flex rounded-full bg-sky-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-200"
          >
            Generate your LinkedIn headline
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-6xl px-6 pb-24 lg:px-10">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700 dark:text-sky-300">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            LinkedIn headline generator questions
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
