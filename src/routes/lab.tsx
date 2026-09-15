import { createFileRoute } from "@tanstack/react-router";
import { LabPage } from "@/components/lab/lab-page";

export const Route = createFileRoute("/lab")({
  component: Lab,
  head: () => ({
    meta: [
      { title: "App Lab — Geekett ventures" },
      {
        name: "description",
        content:
          "SubDeck, LaunchDeckAI, Soul Kindred, and five more Geekett lab projects with honest status.",
      },
    ],
  }),
});

function Lab() {
  return <LabPage />;
}
