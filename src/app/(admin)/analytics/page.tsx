import type { Metadata } from "next";

import AnalyticsDashboardClient from "@/components/analytics-dashboard-client";

export const metadata: Metadata = {
  title: "Analytics Dashboard",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AnalyticsPage() {
  return <AnalyticsDashboardClient />;
}
