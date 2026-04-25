const benefits = [
  {
    title: "Marine extracts",
    description: "Proven long term cell healing",
  },
  {
    title: "Minerals",
    description: "Penetrate pores to stimulate collagen production.",
  },
  {
    title: "Cellular renewal",
    description: "Thick barrier protection with a silky glow",
  },
];

export default function Benefits() {
  return (
    <section className="section pt-0">
      <div className="container">
        <div className="glass-shell px-6 py-7 sm:px-8 sm:py-9 lg:px-10 lg:py-10">
          <div className="mb-8 max-w-2xl space-y-3">
            <span className="eyebrow">Why Lumière Row</span>
            <h2 className="section-title text-balance">
              Clear benefits for aging skin.
            </h2>
            <p className="clean-copy">
              Patented technology with caffeine, stem cells, caviar extract, and salmon
              DNA.
            </p>
          </div>

          <div className="grid-3">
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="luxury-card px-6 py-6"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-[color:var(--border-strong)] bg-[linear-gradient(180deg,rgba(83,168,110,0.24),rgba(14,28,22,0.92))] text-sm font-semibold text-[color:var(--gold-soft)] shadow-[var(--shadow-soft)]">
                  ✦
                </div>

                <h3 className="text-2xl leading-tight text-[color:var(--foreground)] [font-family:var(--font-serif)]">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}