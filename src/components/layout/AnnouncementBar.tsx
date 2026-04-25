import Link from "next/link";

export default function AnnouncementBar() {
  return (
    <div className="border-b border-[color:var(--border)] bg-[linear-gradient(90deg,rgba(20,36,29,0.9),rgba(11,23,18,0.96),rgba(20,36,29,0.9))]">
      <div className="container">
        <div className="flex min-h-[42px] flex-col items-center justify-center gap-1 py-2 text-center sm:min-h-[48px] sm:flex-row sm:gap-3 sm:py-0">
          <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[color:var(--gold-soft)]">
            Lumière Row
          </span>

          <p className="text-sm text-[color:var(--foreground)]">
            Advanced skincare for mature skin.
            <span className="hidden sm:inline"> </span>
            <span className="text-[color:var(--muted)]">
              Patented technology. Caffeine. Natural vitamins. Salmon DNA.
            </span>
          </p>

          <Link
            href="/shop"
            className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--gold-soft)] transition hover:opacity-80"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
}