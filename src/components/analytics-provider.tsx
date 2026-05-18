"use client";

import posthog from "posthog-js";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";

const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com";

function AnalyticsTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!posthogKey) {
      return;
    }

    posthog.init(posthogKey, {
      api_host: posthogHost,
      defaults: "2025-05-24",
      capture_pageview: false,
      capture_pageleave: true,
      autocapture: true,
      loaded: (client) => {
        if (process.env.NODE_ENV === "development") {
          client.debug(false);
        }
      },
    });
  }, []);

  useEffect(() => {
    if (!posthogKey) {
      return;
    }

    const queryString = searchParams.toString();
    const url = queryString ? `${pathname}?${queryString}` : pathname;

    posthog.capture("$pageview", {
      $current_url: window.location.href,
      $pathname: pathname,
      $search: queryString,
      seocopy_path: pathname,
      seocopy_url: url,
    });
  }, [pathname, searchParams]);

  return null;
}

export default function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Suspense fallback={null}>
        <AnalyticsTracker />
      </Suspense>
    </>
  );
}
