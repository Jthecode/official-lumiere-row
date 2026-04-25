import Link from "next/link";

const shopLinks = [
  { href: "/shop", label: "Shop All" },
  { href: "/shop/serums", label: "Serums" },
  { href: "/shop/creams", label: "Creams" },
  { href: "/shop/treatments", label: "Treatments" },
];

const companyLinks = [
  { href: "/technology", label: "Technology" },
  { href: "/ingredients", label: "Ingredients" },
  { href: "/ritual", label: "Ritual" },
  { href: "/about", label: "About" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[color:var(--border)] bg-[rgba(7,17,13,0.72)] backdrop-blur-xl">
      <div className="container py-14">
        <div className="grid gap-10 md:grid-cols-[1.35fr_0.8fr_0.8fr_1fr]">
          <div className="space-y-5">
            <div className="leading-none">
              <span className="site-kicker">Luxury Skincare</span>
              <p className="mt-3 text-[clamp(2rem,3vw,3.2rem)] leading-none tracking-[-0.06em] text-[color:var(--foreground)] [font-family:var(--font-serif)]">
                Lumière Row
              </p>
              <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-[color:var(--muted-soft)]">
                Mature Skin • Patented Technology
              </p>
            </div>

            <p className="max-w-sm text-sm leading-7 text-[color:var(--muted)]">
              Bio-engineered skincare for maturing skin with stem cells, marine complexes,
              and peptides.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--gold-soft)]">
              Shop
            </h3>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[color:var(--muted)] transition hover:text-[color:var(--foreground)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--gold-soft)]">
              Discover
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[color:var(--muted)] transition hover:text-[color:var(--foreground)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--gold-soft)]">
              Stay Connected
            </h3>

            <p className="text-sm leading-7 text-[color:var(--muted)]">
              Join for launches, rituals, and ingredient updates.
            </p>

            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="input-luxury"
              />
              <button type="submit" className="button-primary w-full">
                Join the List
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-[color:var(--border)] pt-6 text-sm text-[color:var(--muted-soft)] md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Lumière Row. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/privacy"
              className="transition hover:text-[color:var(--foreground)]"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="transition hover:text-[color:var(--foreground)]"
            >
              Terms
            </Link>
            <Link
              href="/contact"
              className="transition hover:text-[color:var(--foreground)]"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}