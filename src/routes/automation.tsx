import { createFileRoute } from "@tanstack/react-router";
import { AutomationPage } from "@/components/automation/automation-page";

export const Route = createFileRoute("/automation")({
  component: Automation,
  head: () => ({
    meta: [
      { title: "AI Automation Strategies — Geekett" },
      {
        name: "description",
        content:
          "Six AI automation plays for independent businesses: follow-up, content, leads, onboarding, inbox, launch loops. Steal hours. Keep your voice.",
      },
    ],
  }),
});

function Automation() {
  return <AutomationPage />;
}
