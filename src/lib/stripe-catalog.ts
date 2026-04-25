import { stripe } from "@/lib/stripe";

export type StoreProduct = {
  id: string;
  name: string;
  description: string | null;
  image: string | null;
  priceId: string;
  currency: string;
  amount: number | null;
  formattedPrice: string;
};

function formatPrice(amount: number | null, currency: string): string {
  if (amount === null) return "Price unavailable";

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency.toUpperCase(),
  }).format(amount / 100);
}

export async function getStripeProducts(): Promise<StoreProduct[]> {
  const products = await stripe.products.list({
    active: true,
    limit: 24,
    expand: ["data.default_price"],
  });

  const mappedProducts = products.data.map(
    (product): StoreProduct | null => {
      const defaultPrice = product.default_price;

      if (!defaultPrice || typeof defaultPrice === "string") {
        return null;
      }

      const image = product.images.length > 0 ? product.images[0] : null;

      return {
        id: product.id,
        name: product.name,
        description: product.description ?? null,
        image,
        priceId: defaultPrice.id,
        currency: defaultPrice.currency,
        amount: defaultPrice.unit_amount ?? null,
        formattedPrice: formatPrice(
          defaultPrice.unit_amount ?? null,
          defaultPrice.currency
        ),
      };
    }
  );

  return mappedProducts.filter(
    (item): item is StoreProduct => item !== null
  );
}