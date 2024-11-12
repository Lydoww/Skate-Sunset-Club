import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext"; // Assurez-vous que le chemin est correct
import Home from "./pages/Home";
import ProductPage from "./pages/ProductDetailPage";
import ContactPage from "./pages/Contact";
import CartPage from "./pages/CartPage";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/panier" element={<CartPage />} />
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={true}
      />
    </CartProvider>
  );
}
