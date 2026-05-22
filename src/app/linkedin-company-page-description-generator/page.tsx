import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LinkedIn Company Page Description Generator",
  description:
    "Generate LinkedIn company page descriptions, About sections, specialties, tagline options, proof bullets, SEO snippets, and follow CTAs from one B2B brand brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/linkedin-company-page-description-generator",
  },
  keywords: [
    "linkedin company page description generator",
    "linkedin company about section",
    "linkedin business page description",
    "company page copy generator",
    "b2b linkedin profile copy",
    "linkedin specialties examples",
    "linkedin company tagline",
    "brand page description generator",
    "linkedin page SEO",
  ],
  openGraph: {
    title: "LinkedIn Company Page Description Generator | SEOCopy",
    description:
      "Turn a B2B brand brief into LinkedIn company About copy, specialties, tagline options, proof bullets, SEO snippets, and follow CTAs.",
    url: "https://seocopy.vercel.app/linkedin-company-page-description-generator",
    type: "website",
  },
};

const companyMoments = [
  {
    label: "New company pages",
    body: "Launch a sharper LinkedIn presence with a concise About section, positioning tagline, specialties list, proof bullets, and a follow CTA that explains who should care.",
  },
  {
    label: "B2B profile refreshes",
    body: "Rework stale company descriptions around buyer pain, product category, proof points, target industries, and a stronger reason to visit the site or follow updates.",
  },
  {
    label: "Campaign-ready positioning",
    body: "Adapt the same brand brief into acquisition angles for product launches, hiring pushes, founder-led content, partner announcements, and paid-social landing snippets.",
  },
];

const outputs = [
  "LinkedIn company About sections for SaaS teams, agencies, ecommerce apps, local service brands, consultancies, B2B marketplaces, and creator-led products",
  "Company tagline and specialties variants that include category keywords, audience fit, proof points, and page-search language",
  "Proof-led description options with customer outcomes, industry focus, product differentiators, and a low-friction follow or website CTA",
  "SEO snippets, social previews, and campaign blurbs that keep the LinkedIn company page aligned with the homepage and sales narrative",
  "Tone variants for enterprise, founder-led, technical, polished, recruiting-friendly, investor-ready, and product-marketing company pages",
];

const faqs = [
  {
    question: "What is a LinkedIn company page description generator?",
    answer:
      "A LinkedIn company page description generator turns a B2B brand brief into company About copy, tagline options, specialties, proof bullets, SEO snippets, social previews, and follow CTAs for a LinkedIn business page.",
  },
  {
    question: "Can I use this for SaaS and agency LinkedIn pages?",
    answer:
      "Yes. SEOCopy can draft SaaS company descriptions, agency positioning blurbs, ecommerce app profiles, service-business About sections, and partner-ready LinkedIn page copy that explains the audience, offer, and proof quickly.",
  },
  {
    question: "How is this different from the LinkedIn summary generator?",
    answer:
      "The LinkedIn summary generator focuses on an individual profile About section. This company page description generator focuses on organization-level copy: company positioning, specialties, industry keywords, proof bullets, and follow CTAs.",
  },
  {
    question: "How many LinkedIn company page generations are free?",
    answer:
      "You can try two free generations with no signup. After that, buy one generation for $5 or use the $19/month plan for ongoing SEO, landing page, and campaign copy.",
  },
];

export default function LinkedInCompanyPageDescriptionGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-sky-700 dark:text-sky-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(239,246,255,0.92))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(37,99,235,0.32))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-sky-800 dark:border-sky-400/20 dark:bg-sky-400/10 dark:text-sky-200">
              LinkedIn Company Page Description Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Turn your B2B brand brief into a LinkedIn company page buyers understand.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Paste your product, audience, category, industries served, customer outcomes, proof points, and desired CTA. SEOCopy creates LinkedIn company About copy, tagline options, specialties, proof bullets, SEO snippets, and follow-ready positioning.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=linkedin-company-page-description-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-sky-300 dark:text-slate-950 dark:hover:bg-sky-200"
              >
                Generate LinkedIn Company Copy
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
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700 dark:text-sky-300">
              LinkedIn company page output checklist
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
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700 dark:text-sky-300">
            Make company profiles easier to trust
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Create LinkedIn company page copy for new launches, profile refreshes, product-led updates, recruiting campaigns, partner discovery, and paid-social traffic.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {companyMoments.map((item) => (
            <article key={item.label} className="rounded-[1.5rem] border border-black/10 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700 dark:text-sky-300">
                {item.label}
              </p>
              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-10">
        <div className="rounded-[2rem] border border-black/10 bg-slate-950 p-8 text-white shadow-[0_24px_80px_rgba(15,23,42,0.14)] dark:border-white/10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-200">
            B2B page positioning copy
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Package your category, proof, and next step so LinkedIn visitors know why to follow or click.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            SEOCopy helps founders, marketers, agencies, recruiters, and product teams turn rough brand notes into LinkedIn company page descriptions, specialties, proof-led positioning, campaign blurbs, and website CTAs without rewriting the profile from scratch.
          </p>
          <Link
            href="/generate?source=linkedin-company-page-description-generator-cta"
            className="mt-8 inline-flex rounded-full bg-sky-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-200"
          >
            Try Two Free Generations
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight">LinkedIn company page questions</h2>
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
