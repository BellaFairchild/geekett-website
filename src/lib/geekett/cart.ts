import { useSyncExternalStore } from "react";
import { shopItems } from "./content";

export type CartLine = { id: string; qty: number };

const KEY = "geekett-cart";
const EMPTY: CartLine[] = [];
const listeners = new Set<() => void>();

let cached: CartLine[] = EMPTY;
let cachedRaw: string | null = null;

function read(): CartLine[] {
  if (typeof window === "undefined") return EMPTY;
  const raw = localStorage.getItem(KEY);
  if (raw === cachedRaw) return cached;
  cachedRaw = raw;
  try {
    const parsed = raw ? (JSON.parse(raw) as CartLine[]) : EMPTY;
    cached = Array.isArray(parsed) ? parsed : EMPTY;
  } catch {
    cached = EMPTY;
  }
  return cached;
}

function write(next: CartLine[]) {
  cached = next.length ? next : EMPTY;
  cachedRaw = JSON.stringify(cached);
  localStorage.setItem(KEY, cachedRaw);
  listeners.forEach((fn) => fn());
}

function subscribe(fn: () => void) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

function getServerSnapshot() {
  return EMPTY;
}

export function useCart() {
  const lines = useSyncExternalStore(subscribe, read, getServerSnapshot);

  const items = lines
    .map((line) => {
      const product = shopItems.find((p) => p.id === line.id);
      if (!product) return null;
      return { ...product, qty: line.qty, lineTotal: product.price * line.qty };
    })
    .filter((x): x is NonNullable<typeof x> => Boolean(x));

  const count = items.reduce((n, i) => n + i.qty, 0);
  const total = items.reduce((n, i) => n + i.lineTotal, 0);

  function add(id: string) {
    const current = read();
    const found = current.find((l) => l.id === id);
    write(
      found
        ? current.map((l) => (l.id === id ? { ...l, qty: l.qty + 1 } : l))
        : [...current, { id, qty: 1 }],
    );
  }

  function remove(id: string) {
    write(read().filter((l) => l.id !== id));
  }

  function setQty(id: string, qty: number) {
    if (qty <= 0) return remove(id);
    write(read().map((l) => (l.id === id ? { ...l, qty } : l)));
  }

  function clear() {
    write([]);
  }

  return { items, count, total, add, remove, setQty, clear };
}
