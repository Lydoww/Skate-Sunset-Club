import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Product } from "../../types/Product";

interface ProductCardProps {
  product: Product;
}

export default function MinimalistSkateProductCard({
  product,
}: ProductCardProps) {
  return (
    <Link
      to={`/products/${product.id}`}
      className="group block m-4 min-w-[200px] "
    >
      <motion.div
        className="relative overflow-hidden rounded-lg aspect-square"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={product.image}
          alt={product.title}
          className="object-contain w-full h-full transition-opacity group-hover:opacity-75"
        />
        <div className="absolute">
          <h3 className="text-sm font-medium text-white">{product.title}</h3>
        </div>
      </motion.div>
      <div className="mt-2">
        <p>{product.title}</p>
        <p className="text-sm text-gray-700">${product.price.toFixed(2)}</p>
      </div>
    </Link>
  );
}
