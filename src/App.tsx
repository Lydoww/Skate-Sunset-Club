import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductDetailPage";
import ContactPage from "./pages/Contact";

export default function App() {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/products/:id" element={<ProductPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}
