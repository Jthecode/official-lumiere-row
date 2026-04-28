"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  clearBagStorage,
  formatMoneyFromCents,
  readBag,
  writeBag,
  type BagItem,
} from "@/lib/bag";

export default function BagPage() {
  const [items, setItems] = useState<BagItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    const syncBag = () => {
      const storedItems = readBag();
      setItems(storedItems);
    };

    syncBag();
    setHasHydrated(true);

    const handleBagUpdated: EventListener = () => syncBag();
    const handleStorage = () => syncBag();
    const handleFocus = () => syncBag();

    window.addEventListener("bag:updated", handleBagUpdated);
    window.addEventListener("storage", handleStorage);
    window.addEventListener("focus", handleFocus);

    return () => {
      window.removeEventListener("bag:updated", handleBagUpdated);
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener("focus", handleFocus);
    };
  }, []);

  useEffect(() => {
    if (!hasHydrated) return;
    writeBag(items);
  }, [items, hasHydrated]);

  const itemCount = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  );

  const subtotal = useMemo(() => {
    return items.reduce((sum, item) => {
      if (item.amount === null) return sum;
      return sum + item.amount * item.quantity;
    }, 0);
  }, [items]);

  function updateQuantity(id: string, nextQuantity: number) {
    if (nextQuantity <= 0) {
      removeItem(id);
      return;
    }

    setItems((current) =>
      current.map((item) =>
        item.id === id ? { ...item, quantity: nextQuantity } : item
      )
    );

    window.dispatchEvent(new Event("bag:updated"));
  }

  function removeItem(id: string) {
    setItems((current) => current.filter((item) => item.id !== id));
    window.dispatchEvent(new Event("bag:updated"));
  }

  function clearBag() {
    setItems([]);
    clearBagStorage();
    window.dispatchEvent(new Event("bag:updated"));
  }

  async function handleCheckout() {
    if (items.length === 0) return;

    try {
      setLoading(true);

      const lineItems = items.map((item) => ({
        price: item.priceId,
        quantity: item.quantity,
      }));

      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ lineItems }),
      });

      const data = (await res.json()) as { url?: string; error?: string };

      if (!res.ok || !data.url) {
        throw new Error(data.error || "Checkout failed.");
      }

      window.location.href = data.url;
    } catch (error) {
      console.error("Bag checkout error:", error);
      alert("Unable to start checkout right now.");
    } finally {
      setLoading(false);
    }
  }

  if (!hasHydrated) {
    return (
      <section className="section">
        <div className="container">
          <div className="glass-shell px-6 py-14 text-center sm:px-10 sm:py-18">
            <span className="site-kicker">Lumière Row</span>
            <h2 className="mt-4 text-[clamp(2.25rem,5vw,4rem)] leading-[0.95] text-[color:var(--foreground)] [font-family:var(--font-serif)]">
              Loading your bag...
            </h2>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container">
        <div className="mb-10 space-y-3">
          <span className="eyebrow">Your Bag</span>
          <h1 className="section-title max-w-3xl text-balance">
            Review your collection.
          </h1>
          <p className="clean-copy max-w-2xl">
            Refined skincare, selected and ready for checkout.
          </p>
        </div>

        {items.length === 0 ? (
          <div className="glass-shell px-6 py-14 text-center sm:px-10 sm:py-18">
            <div className="mx-auto max-w-2xl">
              <span className="site-kicker">Lumière Row</span>
              <h2 className="mt-4 text-[clamp(2.25rem,5vw,4rem)] leading-[0.95] text-[color:var(--foreground)] [font-family:var(--font-serif)]">
                Your bag is empty.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[color:var(--muted)] sm:text-base">
                Add products from the collection to begin your ritual.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link href="/shop" className="button-primary">
                  Shop Now
                </Link>
                <Link href="/" className="button-secondary">
                  Back Home
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
            <div className="space-y-4">
              {items.map((item) => (
                <article
                  key={item.id}
                  className="luxury-card overflow-hidden p-4 sm:p-5"
                >
                  <div className="grid gap-4 sm:grid-cols-[160px_1fr]">
                    <div className="relative h-[190px] overflow-hidden rounded-[1.35rem] border border-[color:var(--border)] bg-[rgba(24,8,11,0.55)]">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center">
                          <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[color:var(--gold-soft)]">
                            LR
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col justify-between gap-4">
                      <div>
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                          <div className="max-w-2xl">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[color:var(--gold-soft)]">
                              Signature Care
                            </p>

                            <h2 className="mt-2 text-[clamp(1.6rem,2vw,2.25rem)] leading-tight text-[color:var(--foreground)] [font-family:var(--font-serif)]">
                              {item.name}
                            </h2>

                            <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
                              {item.description || "Advanced care for mature skin."}
                            </p>
                          </div>

                          <div className="text-left sm:text-right">
                            <p className="text-sm text-[color:var(--muted)]">
                              Item total
                            </p>
                            <p className="mt-1 text-base font-semibold text-[color:var(--foreground)]">
                              {item.amount !== null
                                ? formatMoneyFromCents(item.amount * item.quantity)
                                : item.formattedPrice}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border-strong)] bg-[rgba(29,10,13,0.68)] text-[color:var(--foreground)] transition hover:opacity-90"
                            aria-label={`Decrease quantity of ${item.name}`}
                          >
                            −
                          </button>

                          <span className="min-w-[2rem] text-center text-sm font-semibold text-[color:var(--foreground)]">
                            {item.quantity}
                          </span>

                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border-strong)] bg-[rgba(29,10,13,0.68)] text-[color:var(--foreground)] transition hover:opacity-90"
                            aria-label={`Increase quantity of ${item.name}`}
                          >
                            +
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="text-sm font-semibold text-[color:var(--gold-soft)] transition hover:opacity-80"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <aside className="luxury-card h-fit p-6 sm:p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[color:var(--gold-soft)]">
                Order Summary
              </p>

              <h2 className="mt-3 text-3xl leading-tight text-[color:var(--foreground)] [font-family:var(--font-serif)]">
                Ready to checkout
              </h2>

              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between text-sm text-[color:var(--muted)]">
                  <span>Items</span>
                  <span>{itemCount}</span>
                </div>

                <div className="flex items-center justify-between text-sm text-[color:var(--muted)]">
                  <span>Subtotal</span>
                  <span>{formatMoneyFromCents(subtotal)}</span>
                </div>

                <div className="flex items-center justify-between text-sm text-[color:var(--muted)]">
                  <span>Shipping</span>
                  <span>Calculated at checkout</span>
                </div>

                <div className="luxury-divider" />

                <div className="flex items-center justify-between text-base font-semibold text-[color:var(--foreground)]">
                  <span>Total</span>
                  <span>{formatMoneyFromCents(subtotal)}</span>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <button
                  type="button"
                  onClick={handleCheckout}
                  disabled={loading}
                  className="button-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Loading..." : "Checkout"}
                </button>

                <button
                  type="button"
                  onClick={clearBag}
                  className="button-secondary w-full"
                >
                  Clear Bag
                </button>
              </div>

              <p className="mt-4 text-xs leading-6 text-[color:var(--muted)]">
                Secure checkout powered by Stripe.
              </p>
            </aside>
          </div>
        )}
      </div>
    </section>
  );
}