"use client";

import { useState } from "react";
import Link from "next/link";

type ProductRailItem = {
  id: string;
  name: string;
  description: string | null;
  image: string | null;
  priceId: string;
  formattedPrice: string;
  category?: string;
};

type ProductRailProps = {
  eyebrow: string;
  title: string;
  description: string;
  products: ProductRailItem[];
};

export default function ProductRail({
  eyebrow,
  title,
  description,
  products,
}: ProductRailProps) {
  const [loadingPriceId, setLoadingPriceId] = useState<string | null>(null);

  async function handleCheckout(priceId: string) {
    try {
      setLoadingPriceId(priceId);

      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ priceId }),
      });

      const data = (await res.json()) as { url?: string; error?: string };

      if (!res.ok || !data.url) {
        throw new Error(data.error || "Checkout failed.");
      }

      window.location.href = data.url;
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Unable to start checkout right now.");
    } finally {
      setLoadingPriceId(null);
    }
  }

  return (
    <section className="section pt-0">
      <div className="container">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <span className="eyebrow">{eyebrow}</span>
            <h2 className="section-title max-w-3xl text-balance">{title}</h2>
            <p className="clean-copy max-w-2xl">{description}</p>
          </div>

          <Link href="/shop" className="button-secondary">
            Shop Collection
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <article
              key={product.id}
              className="luxury-card overflow-hidden p-4 transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-luxury)]"
            >
              <div className="rounded-[1.6rem] border border-[color:var(--border)] bg-[linear-gradient(180deg,rgba(14,28,22,0.82),rgba(10,20,16,0.96))] p-4">
                <div className="flex h-[260px] items-center justify-center overflow-hidden rounded-[1.45rem] border border-[color:var(--border)] bg-[radial-gradient(circle_at_top,rgba(83,168,110,0.12),rgba(10,20,16,0.96))] shadow-[var(--shadow-soft)]">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-40 w-28 items-center justify-center rounded-[1.75rem] border border-[color:var(--border)] bg-[linear-gradient(180deg,rgba(83,168,110,0.28),rgba(14,28,22,0.94))] shadow-[var(--shadow-soft)]">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[color:var(--ivory)]">
                        LR
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div className="px-2 pb-2 pt-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[color:var(--gold-soft)]">
                  {product.category || "Signature Care"}
                </p>

                <div className="mt-3 flex items-start justify-between gap-4">
                  <h3 className="text-[1.7rem] leading-tight text-[color:var(--foreground)] [font-family:var(--font-serif)]">
                    {product.name}
                  </h3>
                  <span className="whitespace-nowrap text-sm font-semibold text-[color:var(--foreground)]">
                    {product.formattedPrice}
                  </span>
                </div>

                <p className="mt-3 line-clamp-3 text-sm leading-7 text-[color:var(--muted)]">
                  {product.description || "Advanced care for maturing skin."}
                </p>

                <div className="mt-5 flex items-center justify-between gap-3">
                  <Link
                    href="/shop"
                    className="text-sm font-semibold text-[color:var(--gold-soft)] transition hover:opacity-80"
                  >
                    View Product →
                  </Link>

                  <button
                    type="button"
                    onClick={() => handleCheckout(product.priceId)}
                    disabled={loadingPriceId === product.priceId}
                    className="button-primary min-h-[44px] px-5 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loadingPriceId === product.priceId ? "Loading..." : "Buy Now"}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}