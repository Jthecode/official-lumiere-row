import Hero from "@/components/home/Hero";
import FeatureCampaign from "@/components/home/FeatureCampaign";
import ProductRail from "@/components/home/ProductRail";
import Benefits from "@/components/home/Benefits";
import IngredientStory from "@/components/home/IngredientStory";
import RitualFinder from "@/components/home/RitualFinder";
import Testimonials from "@/components/home/Testimonials";
import FinalCta from "@/components/home/FinalCta";
import { getStripeProducts } from "@/lib/stripe-catalog";

export default async function HomePage() {
  const products = await getStripeProducts();

  const featuredProducts = products.slice(0, 4);
  const secondaryProducts = products.slice(4, 8);

  return (
    <>
      <div id="shop">
        <Hero />
      </div>

      <div id="technology">
        <FeatureCampaign
          eyebrow="Patented Technology"
          title="Advanced skincare for mature skin."
          description="Clean, elevated formulas powered by patented technology for smoother, firmer, more radiant skin."
        />
      </div>

      {featuredProducts.length > 0 ? (
        <ProductRail
          eyebrow="Signature Collection"
          title="Shop Lumière Row"
          description="Real products and live pricing."
          products={featuredProducts}
        />
      ) : null}

      <Benefits />

      <div id="ingredients">
        <IngredientStory />
      </div>

      {secondaryProducts.length > 0 ? (
        <ProductRail
          eyebrow="More to Discover"
          title="More from the collection"
          description="Advanced care for mature skin."
          products={secondaryProducts}
        />
      ) : null}

      <div id="ritual">
        <RitualFinder />
      </div>

      <div id="results">
        <Testimonials />
      </div>

      <div id="about">
        <FinalCta />
      </div>
    </>
  );
}