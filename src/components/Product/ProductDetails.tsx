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
import { useCart } from "@/contexts/CartContext";
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
  const [loading, setLoading] = useState(true); // Ajout de l'état loading
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
        {isOpen && <div className="pb-4 text-gray-600">{children}</div>}
      </div>
    );
  };

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
        setLoading(false); // Définir le loading à false une fois la requête terminée
      }
    };

    loadProduct();
  }, [id]);

  // Affichage du loader si 'loading' est vrai
  if (loading) {
    return <Loader />;
  }

  // Affichage d'un message d'erreur ou de produit introuvable
  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  // Si le produit n'est pas trouvé
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
        quantity: quantity, // Utilisation de la quantité choisie
        image: product.image,
      });

      toast.success(`Produit ajouté dans le panier ! Quantité : ${quantity}`);
    }
  };

  const backButton = () => {
    navigate("/"); // Utilisez navigate ici
  };

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isProductDetailPage={false} scroll={true} />

      <main className="flex-grow mt-16">
        {loading ? (
          <div className="flex items-center justify-center h-screen">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        ) : error ? (
          <div className="flex items-center justify-center h-screen">
            <p className="text-red-500">{error}</p>
          </div>
        ) : !product ? (
          <div className="flex items-center justify-center h-screen">
            <p className="text-gray-500">No product found.</p>
          </div>
        ) : (
          <div className="container mx-auto px-4 py-8 mt-8">
            <div className="flex flex-col md:flex-row gap-8">
              <motion.div
                className="md:w-2/3"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  ref={imageRef}
                  className="w-full max-w-md ms h-auto object-contain rounded-lg shadow-lg"
                />
                <button
              className="mb-4 flex items-center hover:underline mt-8"
              onClick={backButton}
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back
            </button>
              </motion.div>
              
              <motion.div
                className="md:w-1/3"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">(4.5/5)</span>
                </div>
                <p className="text-gray-600 mb-4">{product.description}</p>
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
                  onClick={() => handleAddToCart()} // S'assurer que handleAddToCart est appelé au clic
                  className="w-full bg-yellow-700 text-black py-2 px-4 rounded-md hover:bg-yellow-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center justify-center mb-8"
                >
                  <ShoppingCart className="mr-2 h-4 w-4" /> Add to cart
                </button>
                

                {/* Accordion sections */}
                <div>
                  <AccordionItem
                    title="Livraison"
                    icon={<Truck className="h-5 w-5" />}
                    isOpen={openSection === "delivery"}
                    onToggle={() => toggleSection("delivery")}
                  >
                    <ul className="space-y-2">
                      <li>Livraison sous 2 à 7 jours ouvrés</li>
                      <li>
                        Livraison en France métropolitaine à domicile (4,99€) ou
                        via Mondial Relais (3,99€)
                      </li>
                      <li>Livraison gratuite à partir de 70€ d'achat</li>
                    </ul>
                  </AccordionItem>

                  <AccordionItem
                    title="Echanges & retours"
                    icon={<RefreshCcw className="h-5 w-5" />}
                    isOpen={openSection === "returns"}
                    onToggle={() => toggleSection("returns")}
                  >
                    <div className="space-y-4">
                      <p>
                        Vous avez 30 jours à compter de la date de réception de
                        votre colis pour nous renvoyer le produit et effectuer
                        un échange (selon la disponibilité du stock), recevoir
                        un avoir ou un remboursement.
                      </p>
                      <p>
                        <strong>
                          Les frais de retour et de réexpédition sont à votre
                          charge
                        </strong>
                        , sauf si le retour ou l'échange est nécessaire en
                        raison de notre faute.
                      </p>
                      <p>
                        Pour effectuer un échange ou un remboursement, contactez
                        nous avec votre numéro de commande à{" "}
                        <a
                          href="mailto:contact@homonoia-paris.com"
                          className="text-blue-600 hover:underline"
                        >
                          FakeStoreAPI@gmail.com
                        </a>
                      </p>
                    </div>
                  </AccordionItem>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
