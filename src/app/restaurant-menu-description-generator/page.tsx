import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Restaurant Menu Description Generator",
  description:
    "Generate appetite-building restaurant menu descriptions, SEO metadata, delivery app copy, specials blurbs, FAQs, and order-focused CTAs from rough dish notes.",
  alternates: {
    canonical: "https://seocopy.vercel.app/restaurant-menu-description-generator",
  },
  keywords: [
    "restaurant menu description generator",
    "AI menu description generator",
    "menu item description generator",
    "restaurant copy generator",
    "food description generator",
    "restaurant SEO copy generator",
  ],
  openGraph: {
    title: "Restaurant Menu Description Generator | SEOCopy",
    description:
      "Turn dish notes, ingredients, cuisine style, dietary details, and ordering goals into menu descriptions, SEO snippets, delivery app copy, specials, FAQs, and CTAs.",
    url: "https://seocopy.vercel.app/restaurant-menu-description-generator",
    type: "website",
  },
};

const sections = [
  {
    label: "Menu SEO",
    title: "Search-friendly titles and snippets for dish pages",
    body: "Draft title tags and meta descriptions for restaurant pages, menu sections, catering pages, and location pages without losing the flavor hook.",
  },
  {
    label: "Dish descriptions",
    title: "Menu copy from ingredients and prep notes",
    body: "Transform rough dish notes, sauces, sourcing details, preparation style, spice level, and dietary tags into polished descriptions customers can understand quickly.",
  },
  {
    label: "More orders",
    title: "Delivery app blurbs, specials, and ordering CTAs",
    body: "Create short copy for Toast, DoorDash, Uber Eats, Google Business Profile posts, seasonal specials, email promos, and in-store QR menu tests.",
  },
];

const workflow = [
  "Enter the dish name, cuisine style, ingredients, prep method, flavor profile, dietary notes, and target customer.",
  "Choose whether the copy should emphasize premium ingredients, comfort, speed, health, catering, takeout, or seasonal scarcity.",
  "Review menu descriptions, SEO metadata, delivery app blurbs, FAQ ideas, and order-focused CTA variants.",
  "Publish the strongest version to your website menu, ordering platform, Google profile, email campaign, or printed specials sheet.",
];

const faqs = [
  {
    question: "What is a restaurant menu description generator?",
    answer:
      "A restaurant menu description generator turns rough dish notes into polished menu copy, SEO titles, meta descriptions, delivery app blurbs, FAQs, and order-focused calls to action for restaurants, cafes, food trucks, ghost kitchens, and hospitality teams.",
  },
  {
    question: "Can SEOCopy write descriptions for delivery apps and online ordering pages?",
    answer:
      "Yes. Add dish details, ingredients, prep notes, dietary tags, cuisine style, and ordering goals. SEOCopy drafts concise descriptions and CTA variants you can adapt for online menus, delivery platforms, specials, and location pages.",
  },
  {
    question: "Does this work for cafes, bakeries, bars, and catering menus?",
    answer:
      "Yes. Use the generator for coffee drinks, bakery items, cocktails, tasting menus, catering trays, limited-time offers, and seasonal specials by giving it the format and buyer intent you want to emphasize.",
  },
  {
    question: "How many free restaurant menu generations do I get?",
    answer:
      "You can run two free generations without creating an account. After that, buy one more generation for $5 or use the $19/month plan for ongoing restaurant SEO and menu copy production.",
  },
];

export default function RestaurantMenuDescriptionGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(255,251,235,1),rgba(236,254,255,0.82))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(69,26,3,0.68))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-amber-800 dark:border-amber-400/20 dark:bg-amber-400/10 dark:text-amber-200">
              Restaurant Menu Description Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate restaurant menu descriptions that make dishes easier to choose and order.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy turns dish notes, ingredients, preparation style, dietary details, and ordering goals into menu descriptions, SEO snippets, delivery app blurbs, FAQs, and conversion-focused CTAs.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=restaurant-menu-description-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate Menu Copy
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
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-700 dark:text-amber-300">
              Four-step workflow
            </p>
            <div className="mt-6 space-y-4">
              {workflow.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-2xl border border-slate-200 p-4 dark:border-white/10">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-100 text-sm font-bold text-amber-800 dark:bg-cyan-300 dark:text-slate-950">
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
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-700 dark:text-amber-300">
            Copy blocks included
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Build menu copy around flavor, clarity, and the next order.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {sections.map((item) => (
            <article key={item.label} className="rounded-[1.5rem] border border-black/10 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-700 dark:text-amber-300">
                {item.label}
              </p>
              <h3 className="mt-4 text-2xl font-semibold">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-10">
        <div className="rounded-[2rem] border border-black/10 bg-slate-950 p-8 text-white shadow-[0_24px_80px_rgba(15,23,42,0.14)] dark:border-white/10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
            Better menu conversion
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Stop publishing menu descriptions that list ingredients but never help guests decide what to order.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            Use SEOCopy to align dish descriptions, search snippets, delivery app copy, specials, objection-handling FAQs, and CTAs around one clear ordering moment.
          </p>
          <Link
            href="/generate?source=restaurant-menu-description-generator-cta"
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
