import { Routes, Route } from "react-router-dom";
import { CartContextProvider } from "@/contexts/CartContext";
import Home from "@/pages/Home";
import ProductPage from "@/pages/ProductDetailPage";
import ContactPage from "@/pages/Contact";
import CartPage from "@/pages/CartPage";
import FAQ from "@/pages/Faq";
import PrivacyPage from "@/pages/PrivacyPage";
import { ToastContainer } from "react-toastify";
import Company from "./pages/CompanyPage";

export default function App() {
  return (
    <CartContextProvider>
      
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/panier" element={<CartPage />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/company" element={<Company />} />
      </Routes>
      
      {/* Toast notifications */}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={true}
      />
    </CartContextProvider>
  );
}
