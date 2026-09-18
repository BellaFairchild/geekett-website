import { createFileRoute } from "@tanstack/react-router";
import { PrototypePage } from "@/components/prototype/prototype-page";

export const Route = createFileRoute("/geekettapp")({
  component: GeekettApp,
  head: () => ({
    meta: [
      { title: "App Studio — Geekett" },
      {
        name: "description",
        content:
          "Geekett App Studio: App Consulting and AI Automation Systems. Clear packages. Written process. No jargon fog.",
      },
    ],
  }),
});

function GeekettApp() {
  return <PrototypePage />;
}
