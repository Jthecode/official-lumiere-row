import ProductRail from "@/components/home/ProductRail";
import { getStripeProducts } from "@/lib/stripe-catalog";

export default async function ShopPage() {
  const products = await getStripeProducts();

  return (
    <ProductRail
      eyebrow="Shop"
      title="All Products"
      description="Live catalog and real pricing powered by Stripe."
      products={products}
    />
  );
}