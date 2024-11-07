import React, { useEffect, useState } from "react";
import { fetchProducts } from "../services/productService";
import ProductList from "../components/ProductList";
import { Product } from "../types/Product"; // Assure-toi d'importer le type Product
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Loader from "@/components/Loader";

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    getProducts();

    const handleScroll = () => {
      setScroll(window.scrollY > 0); // Si on scrolle, on change l'état
    };

    window.addEventListener("scroll", handleScroll); // Ajout de l'écouteur d'événements
    return () => {
      window.removeEventListener("scroll", handleScroll); // Nettoyage de l'écouteur
    };
  }, []);

  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <Navbar isProductDetailPage={false} scroll={scroll} />{" "}
      {/* On passe false ici car c'est la page d'accueil */}
      <Carousel />
      <ProductList products={products} />
    </div>
  );
};

export default Home;
