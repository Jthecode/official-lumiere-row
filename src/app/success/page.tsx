import Link from "next/link";

export default function SuccessPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="glass-shell px-8 py-12 text-center sm:px-10 sm:py-14">
          <span className="eyebrow">Order Confirmed</span>

          <h1 className="section-title mx-auto mt-4 text-balance">
            Thank you for your order.
          </h1>

          <p className="clean-copy mx-auto max-w-2xl">
            Your payment was completed successfully and your Lumière Row order is now being processed.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/shop" className="button-primary">
              Continue Shopping
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