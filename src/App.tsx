import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext"; // Assurez-vous que le chemin est correct
import Home from "./pages/Home";
import ProductPage from "./pages/ProductDetailPage";
import ContactPage from "./pages/Contact";
import CartPage from "./pages/CartPage";
import Loader from "./components/Loader";
import { useEffect, useState } from "react";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <CartProvider>
      {isLoading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/panier" element={<CartPage />} />
        </Routes>
      )}
    </CartProvider>
  );
}
