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
          "Geekett App Studio: packages for AI apps, WordPress sites, and AI marketing, plus a starter shop.",
      },
    ],
  }),
});

function GeekettApp() {
  return <PrototypePage />;
}
