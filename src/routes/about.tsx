import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/about/about-page";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About Geekett — Bella & Builder Bot Bobby" },
      {
        name: "description",
        content:
          "Geekett is Bella’s one-woman studio + Builder Bot Bobby. Written process. Real handoff. Slightly allergic to boring.",
      },
    ],
  }),
});

function About() {
  return <AboutPage />;
}
