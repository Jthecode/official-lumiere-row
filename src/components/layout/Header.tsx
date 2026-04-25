import Link from "next/link";

const navLinks = [
  { href: "/#shop", label: "Shop" },
  { href: "/#technology", label: "Technology" },
  { href: "/#ingredients", label: "Ingredients" },
  { href: "/#ritual", label: "Ritual" },
  { href: "/#results", label: "Results" },
  { href: "/#about", label: "About" },
];

const utilityLinks = [
  { href: "/bag", label: "Bag" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--border)] bg-[rgba(7,17,13,0.62)] backdrop-blur-2xl">
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
            {utilityLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)] transition hover:text-[color:var(--foreground)]"
              >
                {link.label}
              </Link>
            ))}

            <Link href="/#shop" scroll className="button-secondary min-h-[46px] px-5">
              Shop Now
            </Link>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="/bag"
              aria-label="Bag"
              className="inline-flex h-11 min-w-[62px] items-center justify-center rounded-full border border-[color:var(--border-strong)] bg-[rgba(14,28,22,0.72)] px-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--foreground)] transition hover:bg-[rgba(18,36,28,0.92)]"
            >
              Bag
            </Link>

            <button
              type="button"
              aria-label="Open menu"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--border-strong)] bg-[rgba(14,28,22,0.72)] text-[color:var(--foreground)] transition hover:bg-[rgba(18,36,28,0.92)]"
            >
              <span className="text-lg leading-none">☰</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}