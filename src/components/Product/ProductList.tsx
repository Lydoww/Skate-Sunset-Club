import { Product } from "../../types/Product";
import MinimalistSkateProductCard from "./CardProducts";

interface ProductGridProps {
  products: Product[];
}

export default function MinimalistSkateProductGrid({
  products,
}: ProductGridProps) {
  return (
    <section id="product-list" className="py-16 bg-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
          Our Collection
        </h2>
        <div className="flex flex-wrap justify-between gap-8 w-full">
          {products.map((product) => (
            <div className="w-full sm:w-1/2 lg:w-1/4" key={product.id}>
              <MinimalistSkateProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

