import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductDetailPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:id" element={<ProductPage />} />{" "}
      {/* Route dynamique pour afficher les détails d'un produit */}
    </Routes>
  );
}
