"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { readBag } from "@/lib/bag";

const navLinks = [
  { href: "/#shop", label: "Shop" },
  { href: "/#technology", label: "Technology" },
  { href: "/#ingredients", label: "Ingredients" },
  { href: "/#ritual", label: "Ritual" },
  { href: "/#results", label: "Results" },
  { href: "/#about", label: "About" },
];

export default function Header() {
  const [bagCount, setBagCount] = useState(0);

  useEffect(() => {
    const syncBagCount = () => {
      const items = readBag();
      const total = items.reduce((sum, item) => sum + item.quantity, 0);
      setBagCount(total);
    };

    syncBagCount();

    const handleBagUpdated: EventListener = () => syncBagCount();
    const handleStorage = () => syncBagCount();
    const handleFocus = () => syncBagCount();

    window.addEventListener("bag:updated", handleBagUpdated);
    window.addEventListener("storage", handleStorage);
    window.addEventListener("focus", handleFocus);

    return () => {
      window.removeEventListener("bag:updated", handleBagUpdated);
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener("focus", handleFocus);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--border)] bg-[rgba(12,4,5,0.68)] backdrop-blur-2xl">
      <div className="container">
        <div className="flex min-h-[108px] items-center justify-between gap-6">
          <Link
            href="/"
            aria-label="Lumière Row Home"
            className="shrink-0 transition hover:opacity-90"
          >
            <div className="flex flex-col leading-none">
              <span className="site-kicker">Vampire Skincare</span>
              <span className="mt-2 text-[clamp(2rem,3vw,3.4rem)] leading-none tracking-[-0.06em] text-[color:var(--foreground)] [font-family:var(--font-serif)]">
                Lumière Row
              </span>
              <span className="mt-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-[color:var(--muted-soft)]">
                Eternal Youth • Patented Technology
              </span>
            </div>
          </Link>

          <nav className="hidden flex-1 items-center justify-center gap-8 xl:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                scroll
                className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[color:var(--muted)] transition hover:text-[color:var(--foreground)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <Link
              href="/bag"
              className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)] transition hover:text-[color:var(--foreground)]"
            >
              <span>Bag</span>
              <span className="inline-flex min-w-[1.5rem] items-center justify-center rounded-full border border-[color:var(--border-strong)] bg-[rgba(29,10,13,0.9)] px-2 py-1 text-[10px] leading-none text-[color:var(--gold-soft)]">
                {bagCount}
              </span>
            </Link>

            <Link
              href="/#shop"
              scroll
              className="button-secondary min-h-[46px] px-5"
            >
              Shop Now
            </Link>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="/bag"
              aria-label="Bag"
              className="inline-flex h-11 min-w-[74px] items-center justify-center gap-2 rounded-full border border-[color:var(--border-strong)] bg-[rgba(29,10,13,0.72)] px-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--foreground)] transition hover:bg-[rgba(37,12,16,0.92)]"
            >
              <span>Bag</span>
              <span className="inline-flex min-w-[1.2rem] items-center justify-center rounded-full bg-[color:var(--gold-deep)] px-1.5 py-0.5 text-[10px] leading-none text-[color:var(--ivory)]">
                {bagCount}
              </span>
            </Link>

            <button
              type="button"
              aria-label="Open menu"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--border-strong)] bg-[rgba(29,10,13,0.72)] text-[color:var(--foreground)] transition hover:bg-[rgba(37,12,16,0.92)]"
            >
              <span className="text-lg leading-none">☰</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}