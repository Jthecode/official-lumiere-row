import Link from "next/link";

export default function FinalCta() {
  return (
    <section className="section pt-0">
      <div className="container">
        <div className="glass-shell px-6 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
          <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-5">
              <span className="eyebrow">Start Here</span>

              <div className="space-y-4">
                <h2 className="section-title max-w-3xl text-balance">
                  Advanced skincare for maturing skin.
                </h2>

                <p className="clean-copy max-w-2xl text-base sm:text-lg">
                  MIracle Crème 
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/shop" className="button-primary">
                  Shop Now
                </Link>

              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-[2.2rem] bg-[radial-gradient(circle_at_center,rgba(83,168,110,0.16),transparent_60%)] blur-3xl" />

              <div className="luxury-card px-6 py-6 sm:px-7 sm:py-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[color:var(--gold-soft)]">
                  A vampire&apos;s secret
                </p>

                <h3 className="mt-3 text-2xl leading-tight text-[color:var(--foreground)] [font-family:var(--font-serif)]">
                  Preserve beauty 
                </h3>

                <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">
                  Brighten and heal dull skin from the cells
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[1.25rem] border border-[color:var(--border)] bg-[rgba(14,28,22,0.62)] p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--gold-soft)]">
                      Dark undereyes
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[color:var(--muted)]">
                      Targeted brightening and awakening with the marine extract absorbtion
                    </p>
                  </div>

                  <div className="rounded-[1.25rem] border border-[color:var(--border)] bg-[rgba(14,28,22,0.62)] p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--gold-soft)]">
                      Wrinkles
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[color:var(--muted)]">
                     Deep cell restoration that smoothens lines and texture 
                    </p>
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