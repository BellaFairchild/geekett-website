import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/home/home-page";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Geekett — smart apps, bright ideas, built with heart" },
      {
        name: "description",
        content:
          "Geekett builds mobile-first WordPress sites for small businesses. Fixed CAD packages: Refresh $1,800, Starter $2,800, Business $5,500. Start with a simple project brief.",
      },
    ],
  }),
});

function Home() {
  return <HomePage />;
}
