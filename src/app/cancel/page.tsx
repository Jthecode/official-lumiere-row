import Link from "next/link";

export default function CancelPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="glass-shell px-8 py-12 text-center sm:px-10 sm:py-14">
          <span className="eyebrow">Checkout Cancelled</span>

          <h1 className="section-title mx-auto mt-4 text-balance">
            Your checkout was not completed.
          </h1>

          <p className="clean-copy mx-auto max-w-2xl">
            No charge was made. You can return to the collection and complete your purchase anytime.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/shop" className="button-primary">
              Return to Shop
            </Link>

            <Link href="/" className="button-secondary">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}