const testimonials = [
  {
    quote: "My skin feels firmer, smoother, and like the technololgy in the cream is working. Definitely repurchasing.",
    name: "Olivia R.",
    detail: "Anti-age Creme",
  },
  {
    quote: "The only brand I'm buying from and trusting with my skin. This is amazing, highly recommend.",
    name: "Danielle M.",
    detail: "Anti-age Creme",
  },
  {
    quote: "This feels a lot more elevated than creams I used to buy. My skin has been thanking me and the pump jar is perfection.",
    name: "Sabrina T.",
    detail: "Cellular Renewal Elixir",
  },
];

export default function Testimonials() {
  return (
    <section className="section pt-0">
      <div className="container">
        <div className="mb-10 max-w-2xl space-y-3">
          <span className="eyebrow">Results</span>
          <h2 className="section-title text-balance">
            Real feedback. Customer testimonials
          </h2>
          <p className="clean-copy">
            98% of customers agree they felt improvement
          </p>
        </div>

        <div className="grid-3">
          {testimonials.map((testimonial) => (
            <article
              key={`${testimonial.name}-${testimonial.detail}`}
              className="luxury-card h-full px-6 py-6 sm:px-7 sm:py-7"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-[color:var(--border-strong)] bg-[linear-gradient(180deg,rgba(83,168,110,0.24),rgba(14,28,22,0.92))] text-lg text-[color:var(--gold-soft)] shadow-[var(--shadow-soft)]">
                “
              </div>

              <p className="text-base leading-8 text-[color:var(--foreground)]">
                {testimonial.quote}
              </p>

              <div className="mt-6 border-t border-[color:var(--border)] pt-4">
                <p className="text-base text-[color:var(--foreground)] [font-family:var(--font-serif)]">
                  {testimonial.name}
                </p>
                <p className="mt-1 text-sm text-[color:var(--muted)]">
                  {testimonial.detail}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}