import { useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { Bot, Check, Map, Rocket, Trash2 } from "lucide-react";
import { SiteFooter } from "@/components/chrome/site-footer";
import { SiteHeader } from "@/components/chrome/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Eyebrow,
  Section,
  SectionIntro,
  SectionTitle,
} from "@/components/section";
import { useCart } from "@/lib/geekett/cart";
import { shopItems } from "@/lib/geekett/content";

const icons = {
  rocket: Rocket,
  map: Map,
  bot: Bot,
} as const;

export function ShopPage() {
  const { items, count, total, add, remove, setQty, clear } = useCart();
  const [paid, setPaid] = useState(false);

  function onCheckout(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    try {
      const prev = JSON.parse(localStorage.getItem("geekett-orders") || "[]");
      localStorage.setItem(
        "geekett-orders",
        JSON.stringify([
          ...prev,
          {
            name: String(data.get("name") || ""),
            email: String(data.get("email") || ""),
            items,
            total,
            at: new Date().toISOString(),
          },
        ]),
      );
    } catch {
      /* demo */
    }
    clear();
    setPaid(true);
  }

  return (
    <div className="min-h-screen overflow-x-clip bg-paper text-ink">
      <SiteHeader current="/shop" />
      <main>
        <Section>
          <Eyebrow>Shop</Eyebrow>
          <SectionTitle>Digital products you can use today</SectionTitle>
          <SectionIntro>
            Three SKUs, not a catalogue. Instant access when you’re not ready for
            a full package — or you want a head start before the brief.
          </SectionIntro>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {shopItems.map((item) => {
              const Icon = icons[item.icon];
              return (
                <article
                  key={item.id}
                  className="flex flex-col rounded-xl border border-line bg-cream p-6"
                >
                  <span className="flex size-11 items-center justify-center rounded-md bg-sand text-ink">
                    <Icon className="size-5" />
                  </span>
                  <Badge variant="paper" className="mt-4 w-fit">
                    {item.category}
                  </Badge>
                  <h2 className="mt-3 font-display text-xl font-semibold">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {item.blurb}
                  </p>
                  <ul className="mt-4 flex-1 space-y-1.5">
                    {item.includes.map((line) => (
                      <li
                        key={line}
                        className="flex items-start gap-2 text-sm text-ink-soft"
                      >
                        <Check className="mt-0.5 size-4 shrink-0 text-bobby" />
                        {line}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 font-display text-2xl font-semibold">
                    {item.priceLabel}
                  </p>
                  <Button
                    className="mt-4 w-full"
                    onClick={() => {
                      add(item.id);
                      document.getElementById("bag")?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }}
                  >
                    Add to bag
                  </Button>
                </article>
              );
            })}
          </div>
        </Section>

        <Section id="bag" alt>
          <Eyebrow>Your bag</Eyebrow>
          <SectionTitle>Checkout</SectionTitle>
          {paid ? (
            <p
              className="mt-6 max-w-xl rounded-xl border border-line bg-cream p-6 text-sm leading-relaxed"
              role="status"
            >
              Order saved on this device. In production this would send files and
              a receipt. Keep building —{" "}
              <Link to="/project-brief" className="font-medium text-heart">
                start a Project Brief
              </Link>{" "}
              when you’re ready for a package.
            </p>
          ) : count === 0 ? (
            <p className="mt-6 text-sm text-ink-soft">
              Bag is empty. Add a guide above, or{" "}
              <Link to="/project-brief" className="font-medium text-heart">
                skip ahead to a brief
              </Link>
              .
            </p>
          ) : (
            <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <ul className="space-y-3">
                {items.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-center justify-between gap-3 rounded-xl border border-line bg-cream p-4"
                  >
                    <div>
                      <p className="font-display font-semibold">{item.title}</p>
                      <p className="text-sm text-muted">{item.priceLabel}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        className="grid size-10 place-items-center rounded-sm border border-line"
                        onClick={() => setQty(item.id, item.qty - 1)}
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span className="w-6 text-center tabular-nums">
                        {item.qty}
                      </span>
                      <button
                        type="button"
                        className="grid size-10 place-items-center rounded-sm border border-line"
                        onClick={() => setQty(item.id, item.qty + 1)}
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                      <button
                        type="button"
                        className="grid size-10 place-items-center rounded-sm border border-line"
                        onClick={() => remove(item.id)}
                        aria-label={`Remove ${item.title}`}
                      >
                        <Trash2 className="size-4" />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <form
                onSubmit={onCheckout}
                className="rounded-xl border border-line bg-cream p-6"
              >
                <p className="font-display text-lg font-semibold">
                  Total ${total} CAD
                </p>
                <p className="mt-1 text-xs text-muted">
                  Demo checkout — no real charge. Files would arrive by email.
                </p>
                <label className="mt-5 mb-1.5 block text-xs font-medium text-ink-soft" htmlFor="ck-name">
                  Name
                </label>
                <Input id="ck-name" name="name" required placeholder="First name" />
                <label className="mt-3 mb-1.5 block text-xs font-medium text-ink-soft" htmlFor="ck-email">
                  Email
                </label>
                <Input
                  id="ck-email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@studio.com"
                />
                <Button type="submit" className="mt-5 w-full">
                  Place demo order
                </Button>
              </form>
            </div>
          )}
        </Section>
      </main>
      <SiteFooter />
    </div>
  );
}
