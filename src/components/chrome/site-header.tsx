import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, ShoppingBag, X } from "lucide-react";
import { Brand } from "@/components/brand";
import { Button } from "@/components/ui/button";
import { siteNav } from "@/lib/geekett/content";
import { useCart } from "@/lib/geekett/cart";
import { cn } from "@/lib/utils";

export function SiteHeader({ current }: { current?: string }) {
  const [open, setOpen] = useState(false);
  const { count } = useCart();

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <Brand to="/" subtitle="Studio" />
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {siteNav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "text-sm hover:text-ink",
                current === item.to ? "font-semibold text-ink" : "text-ink-soft",
              )}
              aria-current={current === item.to ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <Link
            to="/shop"
            className="relative grid size-11 place-items-center rounded-sm border border-line bg-cream"
            aria-label={`Shop cart, ${count} items`}
          >
            <ShoppingBag className="size-4" />
            {count > 0 ? (
              <span className="absolute -right-1 -top-1 grid min-w-5 place-items-center rounded-full bg-heart px-1 text-[0.65rem] font-semibold text-heart-fg">
                {count}
              </span>
            ) : null}
          </Link>
          <Button size="sm" asChild>
            <Link to="/project-brief">Start a brief</Link>
          </Button>
        </div>
        <button
          type="button"
          className="grid size-11 place-items-center rounded-sm border border-line bg-cream lg:hidden"
          aria-expanded={open}
          aria-controls="site-mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
          <span className="sr-only">Menu</span>
        </button>
      </div>
      {open ? (
        <nav
          id="site-mobile-nav"
          className="border-t border-line bg-cream px-5 py-4 lg:hidden"
          aria-label="Mobile"
        >
          <div className="flex flex-col gap-1">
            {siteNav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-sm px-2 py-3 text-sm font-medium"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="mt-3 flex gap-2">
            <Button variant="ghost" className="flex-1" asChild>
              <Link to="/shop" onClick={() => setOpen(false)}>
                Shop {count > 0 ? `(${count})` : ""}
              </Link>
            </Button>
            <Button className="flex-1" asChild>
              <Link to="/project-brief" onClick={() => setOpen(false)}>
                Start a brief
              </Link>
            </Button>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
