import Image from "next/image";

const ritualSteps = [
  {
    step: "01",
    title: "Cleanse",
    description: "Prep mature skin with a clean, balanced start.",
  },
  {
    step: "02",
    title: "Treat",
    description: "Apply targeted care with patented technology.",
  },
  {
    step: "03",
    title: "Seal",
    description: "Lock in hydration, firmness, and glow.",
  },
];

export default function RitualFinder() {
  return (
    <section className="section pt-0">
      <div className="container">
        <div className="glass-shell px-6 py-7 sm:px-8 sm:py-9 lg:px-10 lg:py-10">
          <div className="grid items-start gap-8 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="space-y-6">
              <span className="eyebrow">Miracle Ritual</span>

              <div className="space-y-4">
                <h2 className="section-title max-w-3xl text-balance">
                  Natural resources to preserve skin youth
                </h2>

                <p className="clean-copy max-w-2xl text-base sm:text-lg">
                  Vampire youth. Elevated formula. Visible results.
                </p>
              </div>

              <div className="grid gap-4">
                {ritualSteps.map((item) => (
                  <article
                    key={item.step}
                    className="luxury-card px-5 py-5 sm:px-6 sm:py-6"
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[color:var(--border-strong)] bg-[linear-gradient(180deg,rgba(83,168,110,0.24),rgba(14,28,22,0.92))] text-sm font-semibold text-[color:var(--gold-soft)] shadow-[var(--shadow-soft)]">
                        {item.step}
                      </div>

                      <div>
                        <h3 className="text-2xl leading-tight text-[color:var(--foreground)] [font-family:var(--font-serif)]">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-[2.2rem] bg-[radial-gradient(circle_at_center,rgba(83,168,110,0.16),transparent_60%)] blur-3xl" />

              <div className="grid gap-4">
                <div className="glass-panel overflow-hidden p-4 sm:p-5">
                  <div className="relative min-h-[520px] overflow-hidden rounded-[1.7rem] border border-[color:var(--border)] shadow-[var(--shadow-medium)] lg:min-h-[620px]">
                    <Image
                      src="/images/ritual/ritual-story.jpg"
                      alt="Lumière Row ritual image"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,13,0.18),rgba(7,17,13,0.42))]" />
                  </div>
                </div>

                <div className="luxury-card px-5 py-5 sm:px-6 sm:py-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[color:var(--gold-soft)]">
                    Signature System
                  </p>
                  <h3 className="mt-3 text-2xl leading-tight text-[color:var(--foreground)] [font-family:var(--font-serif)]">
                    Bioactive care with caffeine, rare marine minerals, collagen, peptides and salmon DNA.
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
                    Awaken &amp; revive skin cells
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}