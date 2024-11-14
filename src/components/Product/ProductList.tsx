import { useEffect } from "react";
import { Product } from "@/types/Product";
import MinimalistSkateProductCard from "./CardProducts";

interface ProductGridProps {
  products: Product[];
}

export default function MinimalistSkateProductGrid({
  products,
}: ProductGridProps) {
  useEffect(() => {
    if (window.location.hash === "#our-collection") {
      const productSection = document.getElementById("our-collection");
      if (productSection) {
        productSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <section
      id="our-collection"
      className="py-4 sm:py-5 md:py-6 lg:py-8 bg-white mt-0 sm:mt-2 md:mt-3 lg:mt-4"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4 sm:mb-6">
          Our Collection
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {products.map((product) => (
            <div key={product.id}>
              <MinimalistSkateProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
