"use client";

import { useMemo, useState } from "react";

type QueryResult = {
  columns?: string[];
  results?: unknown[][];
  error?: string;
};

type AnalyticsPayload = {
  days: number;
  generatedAt: string;
  daily: QueryResult;
  topPages: QueryResult;
  actions: QueryResult;
  referrers: QueryResult;
  generationBreakdown: QueryResult;
  conversionFunnel: QueryResult;
  error?: string;
};

function Table({ title, data }: { title: string; data?: QueryResult }) {
  if (!data) return null;

  return (
    <section className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
      <h2 className="mb-4 text-xl font-semibold text-slate-950 dark:text-white">{title}</h2>
      {data.error ? (
        <p className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700 dark:border-red-400/20 dark:bg-red-500/10 dark:text-red-200">
          {data.error}
        </p>
      ) : data.columns?.length && data.results?.length ? (
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="text-xs uppercase tracking-[0.16em] text-slate-500 dark:text-slate-300">
              <tr>
                {data.columns.map((column) => (
                  <th key={column} className="border-b border-slate-200 px-3 py-2 dark:border-white/10">
                    {column.replaceAll("_", " ")}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-slate-700 dark:text-slate-100">
              {data.results.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((value, valueIndex) => (
                    <td key={valueIndex} className="border-b border-slate-100 px-3 py-2 align-top dark:border-white/5">
                      {String(value ?? "")}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-sm text-slate-500 dark:text-slate-300">No data yet.</p>
      )}
    </section>
  );
}

export default function AnalyticsDashboardClient() {
  const [token, setToken] = useState("");
  const [days, setDays] = useState(30);
  const [data, setData] = useState<AnalyticsPayload | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const totals = useMemo(() => {
    const rows = data?.daily.results ?? [];
    const pageviews = rows.reduce((sum, row) => sum + Number(row[2] ?? 0), 0);
    const generations = rows.reduce((sum, row) => sum + Number(row[3] ?? 0), 0);
    const checkoutStarts = rows.reduce((sum, row) => sum + Number(row[4] ?? 0), 0);
    const visitors = Math.max(...rows.map((row) => Number(row[1] ?? 0)), 0);
    const funnel = data?.conversionFunnel.results?.[0] ?? [];
    const uniqueVisitors = Number(funnel[0] ?? 0);
    const uniqueGenerators = Number(funnel[1] ?? 0);
    const uniqueCheckoutStarters = Number(funnel[2] ?? 0);
    const visitorToGenerationRate = Number(funnel[3] ?? 0);
    const generationToCheckoutRate = Number(funnel[4] ?? 0);
    const visitorToCheckoutRate = Number(funnel[5] ?? 0);

    return {
      pageviews,
      generations,
      checkoutStarts,
      visitorsPeakDay: visitors,
      uniqueVisitors,
      uniqueGenerators,
      uniqueCheckoutStarters,
      visitorToGenerationRate,
      generationToCheckoutRate,
      visitorToCheckoutRate,
    };
  }, [data]);

  async function loadAnalytics(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/admin/analytics?days=${days}`, {
        headers: { "x-analytics-token": token },
      });
      const payload = (await response.json()) as AnalyticsPayload;

      if (!response.ok) {
        throw new Error(payload.error ?? "Unable to load analytics.");
      }

      setData(payload);
    } catch (loadError) {
      setError(loadError instanceof Error ? loadError.message : "Unable to load analytics.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10 text-slate-950 dark:bg-slate-950 dark:text-white lg:px-10">
      <div className="mx-auto max-w-7xl space-y-8">
        <header className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-300">
            Private analytics
          </p>
          <h1 className="text-4xl font-semibold tracking-tight">SEOCopy usage stats</h1>
          <p className="mt-3 max-w-3xl text-slate-600 dark:text-slate-300">
            Page views, visitor trends, conversion-event rates, top pages, referrers, and generator usage from PostHog. This dashboard is protected by ANALYTICS_ADMIN_TOKEN.
          </p>
          <form onSubmit={loadAnalytics} className="mt-6 flex flex-col gap-3 sm:flex-row">
            <input
              type="password"
              value={token}
              onChange={(event) => setToken(event.target.value)}
              placeholder="Analytics admin token"
              className="min-w-0 flex-1 rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none focus:border-slate-950 dark:border-white/10 dark:bg-slate-950/60 dark:text-white dark:focus:border-cyan-300"
            />
            <select
              value={days}
              onChange={(event) => setDays(Number(event.target.value))}
              className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none focus:border-slate-950 dark:border-white/10 dark:bg-slate-950/60 dark:text-white dark:focus:border-cyan-300"
            >
              <option value={7}>7 days</option>
              <option value={30}>30 days</option>
              <option value={90}>90 days</option>
            </select>
            <button
              type="submit"
              disabled={loading || !token}
              className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-400 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
            >
              {loading ? "Loading..." : "Load stats"}
            </button>
          </form>
          {error ? <p className="mt-4 text-sm text-red-600 dark:text-red-300">{error}</p> : null}
        </header>

        {data ? (
          <>
            <section className="grid gap-4 sm:grid-cols-4">
              {[
                ["Pageviews", totals.pageviews],
                ["Peak daily visitors", totals.visitorsPeakDay],
                ["Generations", totals.generations],
                ["Checkout starts", totals.checkoutStarts],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/5">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-300">{label}</p>
                  <p className="mt-2 text-3xl font-semibold">{value}</p>
                </div>
              ))}
            </section>

            <section className="grid gap-4 lg:grid-cols-3">
              {[
                ["Visitor → generation", `${totals.visitorToGenerationRate}%`, `${totals.uniqueGenerators} of ${totals.uniqueVisitors} visitors generated copy`],
                ["Generation → checkout", `${totals.generationToCheckoutRate}%`, `${totals.uniqueCheckoutStarters} generator users started checkout`],
                ["Visitor → checkout", `${totals.visitorToCheckoutRate}%`, `${totals.uniqueCheckoutStarters} of ${totals.uniqueVisitors} visitors reached paid intent`],
              ].map(([label, value, detail]) => (
                <div key={label} className="rounded-2xl border border-cyan-200 bg-cyan-50 p-5 dark:border-cyan-300/20 dark:bg-cyan-300/10">
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-200">{label}</p>
                  <p className="mt-2 text-3xl font-semibold">{value}</p>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{detail}</p>
                </div>
              ))}
            </section>

            <Table title="Daily trend" data={data.daily} />
            <Table title="Top pages" data={data.topPages} />
            <Table title="Actions and funnel events" data={data.actions} />
            <Table title="Referrers" data={data.referrers} />
            <Table title="Generation breakdown" data={data.generationBreakdown} />
          </>
        ) : null}
      </div>
    </main>
  );
}
