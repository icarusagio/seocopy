import type { Metadata } from "next";
import Link from "next/link";

const route = "/twitter-bio-generator";
const canonical = `https://seocopy.vercel.app${route}`;

export const metadata: Metadata = {
  title: "Twitter Bio Generator",
  description:
    "Generate Twitter bios, X profile taglines, creator positioning, SEO snippets, pinned-post hooks, and CTA variants from one profile brief.",
  alternates: {
    canonical,
  },
  keywords: [
    "Twitter bio generator",
    "X bio generator",
    "AI Twitter bio generator",
    "creator bio generator",
    "social media bio generator",
    "personal brand bio generator",
  ],
  openGraph: {
    title: "Twitter Bio Generator | SEOCopy",
    description:
      "Turn rough positioning notes into Twitter/X bios, profile taglines, pinned-post hooks, social previews, and conversion CTAs.",
    url: canonical,
    type: "website",
  },
};

const outputBlocks = [
  {
    label: "Profile positioning",
    title: "Make the first line explain why people should follow or click",
    body: "Generate concise Twitter/X bios that combine audience, promise, proof, personality, and a clear next action without sounding generic.",
  },
  {
    label: "Founder and creator angles",
    title: "Package a personal brand into bio-ready variants",
    body: "Create options for founders, creators, agencies, consultants, local businesses, and ecommerce operators who need sharper profile positioning.",
  },
  {
    label: "Campaign reuse",
    title: "Turn the bio angle into supporting conversion copy",
    body: "Reuse the strongest positioning line as a pinned-post hook, landing page headline, SEO snippet, social preview, and CTA direction.",
  },
];

const workflow = [
  "Paste your offer, audience, niche, proof points, tone, and the action you want profile visitors to take.",
  "Add constraints such as character limits, words to avoid, credibility signals, links, or current bio copy you want rewritten.",
  "Generate Twitter/X bio variants, profile taglines, pinned-post hooks, SEO snippets, social previews, and CTA options.",
  "Use the strongest variant on your profile, launch page, newsletter signup, sales deck, or social campaign.",
];

const examples = [
  "Twitter bios for a SaaS founder launching an AI workflow product",
  "X profile taglines for a Shopify consultant selling conversion audits",
  "Creator bios for a newsletter operator growing paid subscribers",
  "Personal brand bios for an agency founder with proof and a booking CTA",
];

const faqs = [
  {
    question: "What is a Twitter bio generator?",
    answer:
      "A Twitter bio generator turns your audience, offer, proof points, personality, and CTA into concise profile bio variants for Twitter/X, personal brands, founders, creators, and service businesses.",
  },
  {
    question: "Can SEOCopy write X bios and pinned-post hooks together?",
    answer:
      "Yes. SEOCopy can generate X bio options alongside profile taglines, pinned-post hooks, SEO snippets, social previews, landing page headlines, and CTA variants so your profile and funnel use the same positioning.",
  },
  {
    question: "Who should use an AI Twitter bio generator?",
    answer:
      "Founders, Shopify merchants, consultants, agencies, creators, newsletter operators, local businesses, and marketers can use it when a profile needs to communicate value and drive clicks quickly.",
  },
  {
    question: "How many free Twitter bio generations are included?",
    answer:
      "You can run two free generations without creating an account. After that, buy one additional generation for $5 or use the $19/month plan for ongoing SEO and copy production.",
  },
];

export default function TwitterBioGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,254,255,0.88))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(22,78,99,0.58))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Twitter Bio Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate Twitter bios and X profile taglines that turn attention into clicks.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy turns rough positioning notes, offers, proof points, and audience details into Twitter/X bio variants, pinned-post hooks, SEO snippets, social previews, and CTA copy.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=twitter-bio-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate Twitter Bios
              </Link>
              <a
                href="#examples"
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950 dark:border-white/15 dark:text-slate-200 dark:hover:border-white dark:hover:text-white"
              >
                See Bio Briefs
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
            Twitter/X profile package included
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            One positioning brief, multiple bio angles for discovery, credibility, and conversion.
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
            Example Twitter bio briefs
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Draft profile bios for launches, creator offers, consulting funnels, newsletters, and founder-led products.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {examples.map((example) => (
              <div key={example} className="rounded-2xl border border-white/10 bg-white/5 p-5 font-medium">
                {example}
              </div>
            ))}
          </div>
          <Link
            href="/generate?source=twitter-bio-generator-cta"
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
