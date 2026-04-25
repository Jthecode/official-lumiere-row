import Image from "next/image";
import Link from "next/link";

const ingredients = [
  {
    name: "Caffeine",
    benefit: "Firming support",
    description: "Tightens texture to blur the look of mature skin.",
  },
  {
    name: "Marine extracts",
    benefit: "Deep barrier healing",
    description: "Secures skin cell hydration for smoother looking skin.",
  },
  {
    name: "Salmon DNA",
    benefit: "Advanced renewal",
    description: "Natural complex for long - lasting hydration effects.",
  },
];

export default function IngredientStory() {
  return (
    <section className="section pt-0">
      <div className="container">
        <div className="glass-shell px-6 py-7 sm:px-8 sm:py-9 lg:px-10 lg:py-10">
          <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-[2.2rem] bg-[radial-gradient(circle_at_center,rgba(83,168,110,0.16),transparent_60%)] blur-3xl" />

              <div className="glass-panel overflow-hidden p-4 sm:p-5">
                <div className="relative min-h-[520px] overflow-hidden rounded-[1.8rem] border border-[color:var(--border)] shadow-[var(--shadow-medium)]">
                  <Image
                    src="/images/ingredients/ingredient-story.jpg"
                    alt="Lumière Row ingredient story"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,13,0.24),rgba(7,17,13,0.48))]" />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <span className="eyebrow">Ingredients</span>

              <div className="space-y-4">
                <h2 className="section-title max-w-3xl text-balance">
                  Rare minerals to hydrate aging skin
                </h2>

                <p className="clean-copy max-w-2xl text-base sm:text-lg">
                  Patented technology powered by caffeine, stem cells, deep sea complex, caviar extract and
                  salmon DNA.
                </p>
              </div>

              <div className="grid gap-4">
                {ingredients.map((ingredient) => (
                  <article
                    key={ingredient.name}
                    className="luxury-card px-5 py-5 sm:px-6 sm:py-6"
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[color:var(--gold-soft)]">
                          {ingredient.benefit}
                        </p>
                        <h3 className="mt-2 text-2xl leading-tight text-[color:var(--foreground)] [font-family:var(--font-serif)]">
                          {ingredient.name}
                        </h3>
                      </div>

                      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--border-strong)] bg-[linear-gradient(180deg,rgba(83,168,110,0.24),rgba(14,28,22,0.92))] text-sm font-semibold text-[color:var(--gold-soft)] shadow-[var(--shadow-soft)]">
                        ✦
                      </div>
                    </div>

                    <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">
                      {ingredient.description}
                    </p>
                  </article>
                ))}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/shop" className="button-secondary">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}