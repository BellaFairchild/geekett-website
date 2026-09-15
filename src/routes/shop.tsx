import { createFileRoute } from "@tanstack/react-router";
import { ShopPage } from "@/components/shop/shop-page";

export const Route = createFileRoute("/shop")({
  component: Shop,
  head: () => ({
    meta: [
      { title: "Shop — Geekett digital products" },
      {
        name: "description",
        content:
          "Grab-and-go Geekett guides and templates: App Launch Guide, offer clarity worksheets, and AI workflow packs.",
      },
    ],
  }),
});

function Shop() {
  return <ShopPage />;
}
