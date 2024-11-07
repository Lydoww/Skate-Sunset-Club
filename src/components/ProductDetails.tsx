import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../types/Product";
import { fetchProductById } from "../services/productService";
import { motion } from "framer-motion";
import { Star, ShoppingCart, ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";
import skate2 from "../assets/skate2.jpg";
import { useCart } from "@/contexts/CartContext";
import Loader from "../components/Loader"; // Import du loader

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true); // Ajout de l'état loading
  const [error, setError] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  const imageRef = useRef<HTMLImageElement>(null);

  // Charge le produit via l'ID
  useEffect(() => {
    const loadProduct = async () => {
      try {
        if (id) {
          const productData = await fetchProductById(id);
          setProduct(productData);
        }
      } catch (err) {
        setError("Failed to load product details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addItem({
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: quantity,
        image: product.image,
      });
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader /> {/* Affiche le loader pendant le chargement */}
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-500">No product found.</p>
      </div>
    );
  }

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url(${skate2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl w-full">
        {/* Navbar avec fond blanc et texte noir */}
        <Navbar isProductDetailPage={true} scroll={false} />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-xl rounded-lg overflow-hidden h-full"
        >
          <div className="md:flex">
            <div className="md:w-1/2 flex items-center justify-center">
              <img
                ref={imageRef}
                className="h-auto max-h-[400px] w-auto object-contain transition-transform duration-300"
                src={product.image}
                alt={product.title}
              />
            </div>
            <div className="p-8 md:w-1/2 flex flex-col justify-between h-full">
              <div>
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mb-1">
                  {product.category}
                </div>
                <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  {product.title}
                </h1>
                <div className="mt-4 flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.round(product.rating.rate)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">
                    ({product.rating.count} reviews)
                  </span>
                </div>
                <p className="mt-4 text-xl font-bold text-gray-900">
                  ${product.price.toFixed(2)}
                </p>
                <p className="mt-4 text-gray-500">{product.description}</p>
              </div>
              <div className="mt-6">
                <label
                  htmlFor="quantity"
                  className="block text-sm font-medium text-gray-700"
                >
                  Quantity
                </label>
                <select
                  id="quantity"
                  name="quantity"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mt-8 flex space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8"
        >
          <a href="/" className="text-white flex items-center">
            <ArrowLeft className="mr-2 h-5 w-5" />
            <span className="hover:underline">Back to products</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
