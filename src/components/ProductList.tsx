import { Product } from "../types/Product";
import MinimalistSkateProductCard from "./CardProducts";

interface ProductGridProps {
  products: Product[];
}

export default function MinimalistSkateProductGrid({
  products,
}: ProductGridProps) {
  return (
    <section id="product-list" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Augmentez la largeur max */}
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
          Our Collection
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* gap large pour espacer */}
          {products.map((product) => (
            <MinimalistSkateProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
