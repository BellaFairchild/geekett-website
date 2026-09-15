import { createFileRoute } from "@tanstack/react-router";
import { PlanPage } from "@/components/plan/plan-page";

export const Route = createFileRoute("/plan")({
  component: Plan,
  head: () => ({
    meta: [
      { title: "Geekett.com — design plan" },
      {
        name: "description",
        content:
          "Updated website design plan for geekett.com. Audit, decisions, IA, visual system, and the live site.",
      },
    ],
  }),
});

function Plan() {
  return <PlanPage />;
}
