import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "App Store Description Generator",
  description:
    "Generate App Store and Google Play descriptions, keyword blurbs, feature bullets, update notes, screenshots captions, FAQs, and CTA copy from one app brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/app-store-description-generator",
  },
  keywords: [
    "app store description generator",
    "Google Play description generator",
    "mobile app copy generator",
    "app listing copy generator",
    "App Store SEO generator",
    "ASO copy generator",
  ],
  openGraph: {
    title: "App Store Description Generator | SEOCopy",
    description:
      "Turn a rough mobile app brief into App Store descriptions, Google Play copy, keyword angles, screenshot captions, FAQs, and CTA variants.",
    url: "https://seocopy.vercel.app/app-store-description-generator",
    type: "website",
  },
};

const deliverables = [
  {
    label: "Listing copy",
    title: "Explain the app before users bounce",
    body: "Generate App Store and Google Play short descriptions, long descriptions, subtitle options, and benefit-first openings that make the install decision easier.",
  },
  {
    label: "ASO angles",
    title: "Package features around search intent",
    body: "Turn features, audience, category, and competitor notes into keyword-informed positioning, feature bullets, proof snippets, and FAQ ideas.",
  },
  {
    label: "Launch assets",
    title: "Reuse the same brief across the funnel",
    body: "Draft screenshot captions, release notes, social previews, onboarding headlines, landing page snippets, and CTA copy from one app positioning brief.",
  },
];

const workflow = [
  "Describe the app, target user, category, primary use case, strongest feature, proof, and monetization model.",
  "Add App Store or Google Play keywords, competitor alternatives, tone, compliance constraints, and launch stage.",
  "Generate short descriptions, long descriptions, subtitles, feature bullets, screenshot captions, FAQs, and CTA variants.",
  "Ship the strongest copy into app listings, launch pages, ads, onboarding, and release-note workflows.",
];

const examples = [
  {
    brief: "Habit tracker for busy founders",
    output: "Build a daily operating rhythm you can keep, even when your calendar breaks the plan.",
  },
  {
    brief: "Shopify inventory alert app",
    output: "Recover lost sales with back-in-stock alerts that launch before customers forget the product.",
  },
  {
    brief: "AI meal planning app",
    output: "Plan a week of meals around your budget, schedule, allergies, and leftover ingredients.",
  },
];

const faqs = [
  {
    question: "What is an app store description generator?",
    answer:
      "An app store description generator turns a mobile app brief into App Store and Google Play copy, including short descriptions, long descriptions, subtitles, feature bullets, screenshot captions, FAQs, and CTAs.",
  },
  {
    question: "Can SEOCopy help with App Store Optimization?",
    answer:
      "Yes. SEOCopy can turn keywords, competitor notes, app category, target users, and feature lists into ASO-informed listing copy and launch assets you can edit before publishing.",
  },
  {
    question: "Who should use this generator?",
    answer:
      "Indie app developers, SaaS teams with mobile apps, Shopify app builders, agencies, and growth marketers can use it when an app listing needs clearer benefits and stronger search coverage.",
  },
  {
    question: "How many app store descriptions can I generate for free?",
    answer:
      "You can run two free generations without creating an account. After that, buy one additional generation for $5 or use the $19/month plan for ongoing SEO and copy production.",
  },
];

export default function AppStoreDescriptionGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,253,245,0.9))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(22,78,99,0.6))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              App Store Description Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate app store descriptions that turn browsers into installers.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy turns your app, audience, features, proof, and launch notes into App Store descriptions, Google Play copy, ASO keyword angles, screenshot captions, FAQs, and CTAs.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=app-store-description-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate app store copy
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
              From app brief to listing copy
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
            App listing deliverables
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            One brief, a full app launch copy kit.
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
            App store copy examples
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Move from feature lists to install-ready value.
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {examples.map((example) => (
              <article key={example.brief} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">Brief</p>
                <p className="mt-2 font-semibold">{example.brief}</p>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">Listing angle</p>
                <p className="mt-2 leading-7 text-slate-300">{example.output}</p>
              </article>
            ))}
          </div>
          <Link
            href="/generate?source=app-store-description-generator"
            className="mt-8 inline-flex rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            Generate your app listing
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-6xl px-6 pb-24 lg:px-10">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-300">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            App store description generator questions
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
