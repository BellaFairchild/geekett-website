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
          "Geekett is Bella’s one-woman studio + Builder Bot Bobby. AI automation, app consulting, and mobile-first WordPress — written process, no meeting marathon.",
      },
    ],
  }),
});

function Home() {
  return <HomePage />;
}
