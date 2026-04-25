import Image from "next/image";
import Link from "next/link";

const highlights = [
  { title: "Patented Technology", description: "Advanced care for maturing skin." },
  { title: "Caffeine", description: "Microcirculation boosting." },
  { title: "Salmon DNA + Stem cells & Caviar extract", description: "Rare bioactive potent ingredients." },
];

export default function Hero() {
  return (
    <section className="section overflow-hidden pt-8 sm:pt-12">
      <div className="container">
        <div className="glass-shell px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
          <div className="grid items-center gap-8 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="space-y-7">
              <div className="space-y-4">
                <span className="site-kicker">Revive Youth</span>

                <div className="space-y-3">
                  <h1 className="feature-wordmark">Lumière Row</h1>
                  <span className="feature-wordmark-sub">
                    Reverse years of age
                  </span>
                </div>

                <p className="clean-copy max-w-xl text-base sm:text-lg">
                  Advanced formulas for mature skin powered by the rarest minerals
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/shop" className="button-primary">
                  Shop Now
                </Link>

                <Link href="#ingredients" className="button-secondary">
                  View Ingredients
                </Link>
              </div>

              <div className="grid gap-3 pt-2 sm:grid-cols-3">
                {highlights.map((item) => (
                  <div key={item.title} className="luxury-card px-4 py-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[color:var(--gold-soft)]">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-[2.25rem] bg-[radial-gradient(circle_at_center,rgba(83,168,110,0.18),transparent_62%)] blur-3xl" />

              <div className="glass-panel p-4 sm:p-5">
                <div className="grid gap-4 sm:grid-cols-[1.08fr_0.92fr]">
                  <div className="relative min-h-[420px] overflow-hidden rounded-[1.8rem] border border-[color:var(--border)] shadow-[var(--shadow-medium)]">
                    <Image
                      src="/images/hero/lumiere-row-hero.jpg"
                      alt="Lumière Row luxury skincare model"
                      fill
                      priority
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,13,0.18),rgba(7,17,13,0.42))]" />
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="luxury-card flex-1 px-5 py-5">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[color:var(--gold-soft)]">
                        Signature Formula
                      </p>
                      <h2 className="mt-3 text-[clamp(1.6rem,2vw,2.25rem)] leading-tight text-[color:var(--foreground)] [font-family:var(--font-serif)]">
                        Vampire Creme.
                        <br />
                        Eternal Youth
                      </h2>
                      <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
                        Scientifically backed technology to restore hydration in skin cells by using the most exclusive resources
                      </p>
                    </div>

                    <div className="luxury-card px-5 py-5">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[color:var(--gold-soft)]">
                        Best Seller
                      </p>

                      <div className="mt-3 flex items-center gap-4">
                        <div className="flex h-20 w-16 items-center justify-center rounded-[1rem] border border-[color:var(--border)] bg-[linear-gradient(180deg,rgba(83,168,110,0.28),rgba(14,28,22,0.92))] shadow-[var(--shadow-soft)]">
                          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[color:var(--ivory)]">
                            LR
                          </span>
                        </div>

                        <div>
                          <p className="text-lg text-[color:var(--foreground)] [font-family:var(--font-serif)]">
                            Anti - age Crème
                          </p>
                          <p className="mt-1 text-sm text-[color:var(--muted)]">
                            Engineered youth restoration
                          </p>
                        </div>
                      </div>

                      <Link
                        href="/shop"
                        className="mt-4 inline-flex text-sm font-semibold text-[color:var(--gold-soft)] transition hover:opacity-80"
                      >
                        Shop the Crème →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}