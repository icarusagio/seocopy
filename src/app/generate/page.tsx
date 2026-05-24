import { buildUsageState, getUsageState } from "@/lib/access";
import GeneratorClient from "@/components/generator-client";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

function sanitizeInitialPrompt(prompt: string | string[] | undefined) {
  if (typeof prompt !== "string") {
    return undefined;
  }

  const normalized = prompt.trim().replace(/\s+/g, " ");

  if (normalized.length < 20 || normalized.length > 500) {
    return undefined;
  }

  return normalized;
}

export default async function GeneratePage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const raw = await getUsageState();
  const usage = buildUsageState(raw);

  const paid = params.paid === "true";
  const canceled = params.canceled === "true";
  const requestedPlan = params.plan;
  const requestedSource = params.source;
  const initialPrompt = sanitizeInitialPrompt(params.prompt);
  const initialCheckoutPlan =
    requestedPlan === "subscription"
      ? "subscription"
      : requestedPlan === "one-time"
        ? "single"
        : undefined;
  const initialCheckoutSource =
    typeof requestedSource === "string" &&
    /^[a-z0-9-]{1,48}$/.test(requestedSource)
      ? requestedSource
      : undefined;
  const sessionId =
    typeof params.session_id === "string" ? params.session_id : undefined;

  return (
    <GeneratorClient
      initialUsage={usage}
      initialPrompt={initialPrompt}
      initialCheckoutPlan={initialCheckoutPlan}
      initialCheckoutSource={initialCheckoutSource}
      checkoutState={{ paid, canceled, sessionId }}
    />
  );
}
