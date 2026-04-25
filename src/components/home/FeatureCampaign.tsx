import Image from "next/image";

const featurePoints = [
  {
    title: "Patented Tech",
    description: "Advanced support for mature skin.",
  },
  {
    title: "Caffeine",
    description: "Helps firm and energize the look of skin.",
  },
  {
    title: "Salmon DNA + Vitamins",
    description: "Supports glow, hydration, and renewal.",
  },
];

type FeatureCampaignProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function FeatureCampaign({
  eyebrow,
  title,
  description,
}: FeatureCampaignProps) {
  return (
    <section className="section pt-0">
      <div className="container">
        <div className="glass-shell px-6 py-7 sm:px-8 sm:py-9 lg:px-10 lg:py-10">
          <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-6">
              <span className="eyebrow">{eyebrow}</span>

              <div className="space-y-4">
                <h2 className="section-title max-w-2xl text-balance">
                  {title}
                </h2>

                <p className="clean-copy max-w-xl text-base sm:text-lg">
                  {description}
                </p>
              </div>

              <div className="grid gap-3 pt-1 sm:grid-cols-3">
                {featurePoints.map((item) => (
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
              <div className="absolute inset-0 -z-10 rounded-[2.2rem] bg-[radial-gradient(circle_at_center,rgba(83,168,110,0.16),transparent_60%)] blur-3xl" />

              <div className="grid gap-4">
                <div className="relative min-h-[420px] overflow-hidden rounded-[1.9rem] border border-[color:var(--border)] shadow-[var(--shadow-medium)]">
                  <Image
                    src="/images/feature-campaign/technology-shot.jpg"
                    alt="Lumière Row feature campaign image"
                    fill
                    priority
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,13,0.18),rgba(7,17,13,0.44))]" />
                </div>

                <div className="luxury-card px-5 py-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[color:var(--gold-soft)]">
                    Unique
                  </p>
                  <h3 className="mt-3 text-[clamp(1.45rem,2vw,2.1rem)] leading-tight text-[color:var(--foreground)] [font-family:var(--font-serif)]">
                    Clear care for aging skin.
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
                    Clean formulas. Patented skin cell restoration technology.
                    Eternal youth.
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