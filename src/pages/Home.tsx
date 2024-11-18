import { useEffect, useState } from "react";
import { fetchProducts } from "@/services/productService";
import ProductList from "@/components/Product/ProductList";
import { Product } from "@/types/Product";
import Navbar from "@/components/Bars/Navbar";
import Carousel from "@/components/Carousel/Carousel";
import Footer from "@/components/Bars/FootBar";
import LoadingWrapper from "@/components/LoadingWrapper/LoadingWrapper"; // Assure-toi que le chemin est correct

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();

    const handleScroll = () => {
      setScroll(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <header>
        <Navbar isProductDetailPage={false} scroll={scroll} />
      </header>

      <main>
        <LoadingWrapper isLoading={loading}>
          <Carousel />
          <section aria-labelledby="product-list">
            <h2 id="product-list" className="sr-only">
              List of products
            </h2>
            <ProductList products={products} />
          </section>
        </LoadingWrapper>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
