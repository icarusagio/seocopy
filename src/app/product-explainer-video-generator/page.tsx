import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Product Explainer Video Generator",
  description:
    "Generate product explainer video scripts, problem-solution storyboards, voiceover hooks, scene-by-scene outlines, FAQs, and launch CTAs from one product brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/product-explainer-video-generator",
  },
  keywords: [
    "product explainer video generator",
    "product explainer videos",
    "explainer video scripts",
    "problem-solution storyboard",
    "voiceover hooks",
    "product video script",
  ],
  openGraph: {
    title: "Product Explainer Video Generator | SEOCopy",
    description:
      "Turn one product brief into explainer video scripts, storyboards, voiceover hooks, launch CTAs, and FAQ-ready product video copy.",
    url: "https://seocopy.vercel.app/product-explainer-video-generator",
    type: "website",
  },
};

const explainerSections = [
  {
    label: "Problem-solution storyboard",
    body: "Map the viewer's pain point, stakes, product reveal, feature proof, and CTA into a simple explainer video arc that works for SaaS, ecommerce, apps, and services.",
  },
  {
    label: "Explainer video scripts",
    body: "Generate voiceover hooks, scene-by-scene narration, on-screen text, visual notes, and social cutdown angles from one product brief.",
  },
  {
    label: "Launch-ready conversion copy",
    body: "Create video titles, descriptions, FAQPage answers, landing snippets, and CTAs that point viewers toward a trial, demo, purchase, or waitlist.",
  },
];

const outputs = [
  "Product explainer video positioning and hook options",
  "Problem-solution storyboard with scene-by-scene beats",
  "Explainer video scripts with voiceover hooks and on-screen text",
  "Video description, launch post, and landing page CTA copy",
  "FAQPage answers for objections, features, pricing, and next steps",
];

const faqs = [
  {
    question: "What is a product explainer video generator?",
    answer:
      "A product explainer video generator turns a product or offer brief into a concise explainer video plan: hook, problem-solution storyboard, voiceover script, scene notes, on-screen text, FAQs, and conversion CTAs.",
  },
  {
    question: "Can SEOCopy write explainer video scripts for SaaS and ecommerce products?",
    answer:
      "Yes. SEOCopy can draft explainer video scripts for SaaS tools, Shopify products, mobile apps, services, agencies, and founder-led offers using the product details, audience, promise, and desired next step you provide.",
  },
  {
    question: "How is this different from a product demo script?",
    answer:
      "A product demo script guides a live or async walkthrough of the product. A product explainer video script is a short narrative video that introduces the problem, shows the solution, explains the value, and drives a launch or landing page CTA.",
  },
  {
    question: "How many product explainer video drafts can I generate for free?",
    answer:
      "You can try two free generations without creating an account. After that, buy a single generation for $5 or use the $19/month plan for ongoing SEO, video, and conversion copy production.",
  },
];

export default function ProductExplainerVideoGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,253,245,0.86))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(8,47,73,0.72))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Product Explainer Video Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate product explainer videos that clarify the problem, solution, and next step.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Paste a product, SaaS, Shopify item, app, or service brief. SEOCopy returns product explainer videos with explainer video scripts, voiceover hooks, a problem-solution storyboard, scene notes, FAQ copy, and launch CTAs built to move viewers into your funnel.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=product-explainer-video-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate Product Explainer Video Copy
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
              Explainer output checklist
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
            Video funnel copy
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Turn rough product notes into a launch video, homepage embed, ad creative, or onboarding explainer.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {explainerSections.map((item) => (
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
            Explain before you sell
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Give prospects a short video script that makes the product easy to understand and easy to try.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            SEOCopy keeps the explainer video tied to the revenue path: launch traffic, homepage conversion, paid social creative, product education, demo booking, or checkout.
          </p>
          <Link
            href="/generate?source=product-explainer-video-generator-cta"
            className="mt-8 inline-flex rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            Try Two Free Generations
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight">Product explainer video generator questions</h2>
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
