import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Event Invitation Email Generator",
  description:
    "Generate event invitation emails, RSVP follow-ups, agenda teasers, reminder copy, FAQs, and attendance CTAs from one event brief.",
  alternates: {
    canonical: "https://seocopy.vercel.app/event-invitation-email-generator",
  },
  keywords: [
    "event invitation email generator",
    "event invitation emails",
    "RSVP email copy",
    "webinar invitation email",
    "workshop invite email",
    "event reminder email",
  ],
  openGraph: {
    title: "Event Invitation Email Generator | SEOCopy",
    description:
      "Turn one event brief into invitation emails, RSVP follow-ups, agenda teasers, reminder copy, FAQs, and attendance CTAs.",
    url: "https://seocopy.vercel.app/event-invitation-email-generator",
    type: "website",
  },
};

const inviteSections = [
  {
    label: "RSVP-ready invitations",
    body: "Create event invitation emails with a clear hook, audience fit, date and format details, value promise, and frictionless registration CTA.",
  },
  {
    label: "Reminder and follow-up copy",
    body: "Generate reminder emails, last-call nudges, agenda previews, calendar-save snippets, and attendance-confirmation copy from the same brief.",
  },
  {
    label: "Event-to-revenue CTAs",
    body: "Tie workshops, webinars, demos, launches, meetups, and partner events to next steps like booking a call, starting a trial, joining a waitlist, or buying.",
  },
];

const outputs = [
  "Event invitation angle and audience-fit framing",
  "RSVP email copy with subject lines, preview text, and CTA variants",
  "Reminder, last-call, and calendar-save email snippets",
  "Agenda teasers, speaker proof, and value bullets for event promotion",
  "Event invitation FAQs, landing snippets, and post-event next-step copy",
];

const faqs = [
  {
    question: "What is an event invitation email generator?",
    answer:
      "An event invitation email generator turns an event topic, audience, date, format, speaker proof, and registration goal into invite emails with RSVP CTAs, reminder copy, agenda teasers, and follow-up snippets.",
  },
  {
    question: "Can SEOCopy write RSVP email copy?",
    answer:
      "Yes. SEOCopy can draft RSVP email copy for webinars, workshops, product demos, community events, local events, partner launches, and customer education sessions.",
  },
  {
    question: "How is this different from a webinar landing page generator?",
    answer:
      "A webinar landing page generator focuses on the registration page. An event invitation email generator focuses on the inbox sequence that gets people to open, understand the value, RSVP, remember the event, and take the next step afterward.",
  },
  {
    question: "How many event invitation emails can I generate for free?",
    answer:
      "You can try two free generations without creating an account. After that, buy a single generation for $5 or use the $19/month plan for ongoing SEO, landing page, and event campaign copy production.",
  },
];

export default function EventInvitationEmailGeneratorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <Link href="/" className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          ← SEOCopy
        </Link>
        <div className="mt-12 grid gap-12 rounded-[2.25rem] border border-black/10 bg-[linear-gradient(155deg,rgba(248,250,252,1),rgba(239,246,255,0.9))] p-8 shadow-[0_30px_110px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(15,23,42,0.95),rgba(30,41,59,0.76))] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              Event Invitation Email Generator
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Generate event invitation emails that turn interest into RSVPs.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Paste an event, webinar, workshop, demo, or launch brief. SEOCopy returns event invitation emails with RSVP copy, agenda teasers, reminder nudges, speaker proof, FAQs, and attendance CTAs.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/generate?source=event-invitation-email-generator"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Generate Event Invitation Emails
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
              Event invitation output checklist
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
            Fill the room from the inbox
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Turn events, workshops, and demos into email sequences people act on.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {inviteSections.map((item) => (
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
            Promote the event and the next step
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            Build invitation campaigns that explain why to attend, when to act, and what happens next.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            SEOCopy keeps each event email connected to a business outcome: clearer RSVP reasons, stronger reminder copy, better attendance, and cleaner post-event conversion paths.
          </p>
          <Link
            href="/generate?source=event-invitation-email-generator-cta"
            className="mt-8 inline-flex rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            Try Two Free Generations
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight">Event invitation email generator questions</h2>
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
