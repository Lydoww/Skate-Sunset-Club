import { Product } from "../../types/Product";
import MinimalistSkateProductCard from "./CardProducts";

interface ProductGridProps {
  products: Product[];
}

export default function MinimalistSkateProductGrid({
  products,
}: ProductGridProps) {
  return (
    <section
      id="product-list"
      className="py-4 sm:py-6 md:py-8 lg:py-10 bg-white mt-2 sm:mt-3 md:mt-4 lg:mt-5 custom-product-spacing:mt-0"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4 sm:mb-6">
          Our Collection
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 custom-product-spacing:gap-4">
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
