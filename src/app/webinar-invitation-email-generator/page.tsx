import type { Metadata } from "next";
import Link from "next/link";

const route = "/webinar-invitation-email-generator";
const canonical = `https://seocopy.vercel.app${route}`;

export const metadata: Metadata = {
  title: "Webinar Invitation Email Generator",
  description:
    "Generate webinar invitation emails, registration nudges, reminder sequences, agenda teasers, speaker proof, replay follow-ups, and CTA variants from one webinar brief.",
  alternates: {
    canonical,
  },
  keywords: [
    "webinar invitation email generator",
    "webinar invitation email",
    "webinar invite email template",
    "webinar reminder email",
    "webinar registration email",
    "webinar follow up email",
  ],
  openGraph: {
    title: "Webinar Invitation Email Generator | SEOCopy",
    description:
      "Turn a webinar topic into invite emails, registration nudges, reminder sequences, agenda teasers, speaker proof, replay follow-ups, and CTA variants.",
    url: canonical,
    type: "website",
  },
};

const workflow = [
  "Paste the webinar topic, target attendee, pain point, promised outcome, speaker proof, date, format, and registration goal.",
  "Add audience objections, urgency, whether it is live or evergreen, replay availability, partner details, and the offer or next step.",
  "Generate invite emails, subject lines, preview text, reminder nudges, agenda teasers, replay follow-ups, FAQs, and CTA variants.",
  "Send the strongest invite, reuse the reminder sequence, and route registrants toward the trial, demo, checkout, or follow-up offer.",
];

const outputBlocks = [
  {
    label: "Invitation sequence",
    title: "Write inbox copy that turns webinar intent into registrations",
    body: "Generate announcement emails, reminder nudges, last-call messages, calendar-save copy, subject lines, preview text, and RSVP CTAs from one webinar brief.",
  },
  {
    label: "Agenda and proof",
    title: "Show why the session is worth attending live",
    body: "Package speaker credibility, learning outcomes, agenda bullets, examples, audience fit, objections, and FAQ snippets so the invitation feels specific instead of generic.",
  },
  {
    label: "Post-webinar revenue",
    title: "Connect attendance and replays to the next conversion step",
    body: "Draft replay emails, demo CTAs, trial nudges, consultation offers, product education follow-ups, and sales handoff copy from the same webinar positioning.",
  },
];

const examples = [
  "SaaS product demo webinar invitation with trial CTA follow-up",
  "Shopify retention workshop invite with reminder and replay sequence",
  "Agency co-marketing webinar invite with partner proof and booking CTA",
  "Evergreen training webinar email flow for a founder-led AI workflow",
];

const faqs = [
  {
    question: "What is a webinar invitation email generator?",
    answer:
      "A webinar invitation email generator turns a webinar topic, target attendee, speaker proof, date, promise, and registration goal into email copy that gets people to open, understand the value, register, attend, and take the next step.",
  },
  {
    question: "Can SEOCopy write webinar reminder emails too?",
    answer:
      "Yes. SEOCopy can draft the first invitation, reminder emails, last-call nudges, calendar-save copy, replay follow-ups, subject lines, preview text, FAQ snippets, and CTA variants from one webinar brief.",
  },
  {
    question: "How is this different from a webinar landing page generator?",
    answer:
      "A webinar landing page generator focuses on the registration page. A webinar invitation email generator focuses on the inbox sequence that drives registrations, attendance, replay views, demos, trials, or purchases.",
  },
  {
    question: "How many webinar invitation emails can I generate for free?",
    answer:
      "You can try two free generations without creating an account. After that, buy a single generation for $5 or use the $19/month plan for ongoing SEO, landing page, email, and webinar campaign copy.",
  },
];

export default function WebinarInvitationEmailGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(236,254,255,0.88))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(22,78,99,0.58))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Webinar Invitation Email Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate webinar invitation emails that turn interest into registrations.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SEOCopy turns one webinar brief into invite emails, reminder sequences, agenda teasers, speaker proof, replay follow-ups, and CTA variants so more prospects register, attend, and convert.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=webinar-invitation-email-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate Webinar Invitations
              </Link>
              <a
                href="#examples"
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950 dark:border-white/15 dark:text-slate-200 dark:hover:border-white dark:hover:text-white"
              >
                See Webinar Email Examples
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/10 bg-white/85 p-7 shadow-[0_24px_80px_rgba(15,23,42,0.1)] dark:border-white/10 dark:bg-white/5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-700 dark:text-cyan-300">
              Webinar email workflow
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
            Webinar invite copy included
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            One webinar brief, every email needed to drive registrations and next-step revenue.
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
            Example webinar invitation briefs
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Draft the email sequence around the promise, proof, date, and CTA you already have.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {examples.map((example) => (
              <div key={example} className="rounded-2xl border border-white/10 bg-white/5 p-5 font-medium">
                {example}
              </div>
            ))}
          </div>
          <Link
            href="/generate?source=webinar-invitation-email-generator-cta"
            className="mt-8 inline-flex rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            Try Two Free Generations
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight">Webinar invitation email generator questions</h2>
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
