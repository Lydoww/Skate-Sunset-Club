import React, { useEffect, useState } from "react";
import { fetchProducts } from "@/services/productService";
import ProductList from "@/components/Product/ProductList";
import { Product } from "@/types/Product"; // Assure-toi d'importer le type Product
import Navbar from "@/components/Bars/Navbar";
import Carousel from "@/components/Carousel/Carousel";
import Footer from "@/components/Bars/FootBar";
// import Loader from "@/ui/Loader/Loader"; // Import du Loader

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true); // Par défaut, on est en état de chargement
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
        setLoading(false); // Une fois le chargement terminé, on arrête d'afficher le loader
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

  return (
    <div>
      <header>
        <Navbar isProductDetailPage={false} scroll={scroll} />
      </header>

      <main>
        <Carousel />

        <section aria-labelledby="product-list">
          <h2 id="product-list" className="sr-only">
            List of products
          </h2>
          <ProductList products={products} />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
