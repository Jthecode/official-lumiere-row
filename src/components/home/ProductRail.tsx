"use client";

import { useState } from "react";
import Link from "next/link";
import { readBag, writeBag, type BagItem } from "@/lib/bag";

type ProductRailItem = {
  id: string;
  name: string;
  description: string | null;
  image: string | null;
  priceId: string;
  formattedPrice: string;
  amount: number | null;
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
  const [addingProductId, setAddingProductId] = useState<string | null>(null);
  const [addedProductId, setAddedProductId] = useState<string | null>(null);

  function handleAddToBag(product: ProductRailItem) {
    try {
      setAddingProductId(product.id);

      const currentBag = readBag();
      const existingItem = currentBag.find((item) => item.id === product.id);

      let nextBag: BagItem[];

      if (existingItem) {
        nextBag = currentBag.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        nextBag = [
          ...currentBag,
          {
            id: product.id,
            name: product.name,
            description: product.description,
            image: product.image,
            priceId: product.priceId,
            formattedPrice: product.formattedPrice,
            amount: product.amount,
            quantity: 1,
          },
        ];
      }

      writeBag(nextBag);
      window.dispatchEvent(new Event("bag:updated"));

      setAddedProductId(product.id);

      setTimeout(() => {
        setAddedProductId((current) =>
          current === product.id ? null : current
        );
      }, 1800);
    } catch (error) {
      console.error("Add to bag error:", error);
      alert("Unable to add this product to your bag right now.");
    } finally {
      setAddingProductId(null);
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
              <div className="rounded-[1.6rem] border border-[color:var(--border)] bg-[linear-gradient(180deg,rgba(29,10,13,0.82),rgba(14,5,7,0.96))] p-4">
                <div className="flex h-[260px] items-center justify-center overflow-hidden rounded-[1.45rem] border border-[color:var(--border)] bg-[radial-gradient(circle_at_top,rgba(208,74,96,0.12),rgba(14,5,7,0.96))] shadow-[var(--shadow-soft)]">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-40 w-28 items-center justify-center rounded-[1.75rem] border border-[color:var(--border)] bg-[linear-gradient(180deg,rgba(208,74,96,0.28),rgba(20,8,10,0.94))] shadow-[var(--shadow-soft)]">
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
                  {product.description || "Advanced care for mature skin."}
                </p>

                <div className="mt-5 flex items-center justify-between gap-3">
                  <Link
                    href="/bag"
                    className="text-sm font-semibold text-[color:var(--gold-soft)] transition hover:opacity-80"
                  >
                    View Bag →
                  </Link>

                  <button
                    type="button"
                    onClick={() => handleAddToBag(product)}
                    disabled={addingProductId === product.id}
                    className="button-primary min-h-[44px] px-5 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {addingProductId === product.id
                      ? "Adding..."
                      : addedProductId === product.id
                        ? "Added"
                        : "Add to Bag"}
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