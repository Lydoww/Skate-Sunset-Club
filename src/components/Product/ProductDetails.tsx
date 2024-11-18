import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Star,
  ShoppingCart,
  ArrowLeft,
  ChevronDown,
  Truck,
  RefreshCcw,
} from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { fetchProductById } from "@/services/productService";
import { Product } from "@/types/Product";
import { Accordion } from "@/types/Accordion";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "@/ui/Loader/Loader";
import Navbar from "../Bars/Navbar";
import Footer from "../Bars/FootBar";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  const imageRef = useRef<HTMLImageElement>(null);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const navigate = useNavigate();

  const AccordionItem = ({
    title,
    icon,
    isOpen,
    onToggle,
    children,
  }: Accordion) => {
    return (
      <div className="border-t border-gray-400">
        <button
          onClick={onToggle}
          className="flex w-full items-center justify-between py-4 text-left"
        >
          <div className="flex items-center gap-2">
            {icon}
            <span className="font-medium">{title}</span>
          </div>
          <ChevronDown
            className={`h-5 w-5 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        {isOpen && <div className="pb-4 text-gray-900">{children}</div>}
      </div>
    );
  };

  const getStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;
    return { fullStars, halfStars, emptyStars };
  };

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

  if (loading) {
    return <Loader />;
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

  const handleAddToCart = () => {
    if (product) {
      addItem({
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: quantity,
        image: product.image,
      });

      toast.success(`Product added to cart! Quantity: ${quantity}`);
    }
  };

  const backButton = () => {
    navigate("/");
  };

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isProductDetailPage={false} scroll={true} />

      <main className="flex-grow mt-16">
        <div className="container mx-auto px-4 py-14 mt-8 max-w-6xl">
          <div className="flex flex-col md:flex-row md:gap-20 items-start justify-center h-full">
            <motion.div
              className="md:w-1/2 flex flex-col items-center"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <img
                src={product.image}
                alt={product.title}
                ref={imageRef}
                className="w-full max-w-md h-auto object-contain"
              />
              <button
                className="mb-4 flex items-center hover:underline mt-8"
                onClick={backButton}
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back
              </button>
            </motion.div>

            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
              <div className="flex items-center mb-4">
                {(() => {
                  const { fullStars, halfStars, emptyStars } = getStars(
                    product.rating.rate || 0
                  );

                  return (
                    <>
                      {[...Array(fullStars)].map((_, i) => (
                        <Star
                          key={`full-${i}`}
                          className="h-5 w-5 text-yellow-400 fill-current"
                          stroke="black" // Bordure fine
                          strokeWidth="0.5" // Épaisseur de la bordure
                        />
                      ))}
                      {[...Array(halfStars)].map((_, i) => (
                        <Star
                          key={`half-${i}`}
                          className="h-5 w-5 text-yellow-400"
                          style={{
                            clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)",
                            fill: "currentColor",
                          }}
                          stroke="black"
                          strokeWidth="0.5"
                        />
                      ))}
                      {[...Array(emptyStars)].map((_, i) => (
                        <Star
                          key={`empty-${i}`}
                          className="h-5 w-5 text-gray-300"
                        />
                      ))}
                    </>
                  );
                })()}
                <span className="ml-2 text-sm text-gray-600">
                  ({product.rating.rate}/5)
                </span>
              </div>
              <p className="text-gray-900 mb-4">{product.description}</p>
              <p className="text-2xl font-bold mb-4">
                ${product.price.toFixed(2)}
              </p>
              <div className="flex items-center mb-4">
                <label htmlFor="quantity" className="mr-2">
                  Quantity:
                </label>
                <input
                  type="number"
                  id="quantity"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                  className="w-20 p-2 border border-gray-300 rounded-md"
                />
              </div>
              <button
                onClick={handleAddToCart}
                className="w-full bg-yellow-700 text-black py-2 px-4 rounded-md hover:bg-yellow-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center justify-center mb-8"
              >
                <ShoppingCart className="mr-2 h-4 w-4" /> Add to cart
              </button>

              <div>
                <AccordionItem
                  title="Delivery"
                  icon={<Truck className="h-5 w-5" />}
                  isOpen={openSection === "delivery"}
                  onToggle={() => toggleSection("delivery")}
                >
                  <ul className="space-y-2">
                    <li>Delivery within 2 to 7 business days</li>
                    <li>
                      Delivery in mainland France to your home (4.99€) or via
                      Mondial Relay (3.99€)
                    </li>
                    <li>Free delivery on orders over 70€</li>
                  </ul>
                </AccordionItem>

                <AccordionItem
                  title="Exchanges & Returns"
                  icon={<RefreshCcw className="h-5 w-5" />}
                  isOpen={openSection === "returns"}
                  onToggle={() => toggleSection("returns")}
                >
                  <div className="space-y-4">
                    <p>
                      You have 30 days from the receipt of your package to
                      return the product and request an exchange (subject to
                      stock availability), receive a store credit, or a refund.
                    </p>
                    <p>
                      <strong>
                        Return and re-shipping costs are at your expense
                      </strong>
                      , unless the return or exchange is due to our mistake.
                    </p>
                    <p>
                      To process an exchange or refund, contact us with your
                      order number at{" "}
                      <a
                        href="mailto:FakeStoreAPI@gmail.com"
                        className="text-blue-600 hover:underline"
                      >
                        FakeStoreAPI@gmail.com
                      </a>
                      .
                    </p>
                  </div>
                </AccordionItem>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
