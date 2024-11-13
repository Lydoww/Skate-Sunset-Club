import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { ChevronDown } from "lucide-react";
import skate from "@/assets/skate.jpg";
import skate2 from "@/assets/skate2.jpg";
import skate3 from "@/assets/skate3.jpg";
import skate4 from "@/assets/skate4.jpg";

const images = [skate4, skate, skate2, skate3];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 7000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const scrollToProducts = () => {
    const productSection = document.getElementById("product-list");
    if (productSection) {
      productSection.scrollIntoView({ behavior: "smooth" });
    } else {
      console.log("Élément 'product-list' non trouvé !");
    }
  };

  return (
    <div className="relative lg:h-[100vh] overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            className="flex-shrink-0 w-full h-full flex justify-center items-start"
            key={index}
          >
            <img
              src={image}
              alt={`carousel slide ${index + 1}`}
              className="w-full h-full object-cover rounded-lg shadow-lg -mt-20"
            />
          </div>
        ))}
      </div>
      <button
        onClick={prevImage}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white p-2 z-10 hover:text-yellow-700 hover:scale-105 transition-colors duration-300 ease-in-out hidden custom-arrow-sides:block sm:left-6 sm:p-3 lg:left-4 lg:p-2"
      >
        <FaArrowLeft size={24} className="sm:text-xl lg:text-2xl" />
      </button>

      <button
        onClick={nextImage}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white p-2 z-10 hover:text-yellow-700 hover:scale-105 transition-colors duration-300 ease-in-out hidden custom-arrow-sides:block sm:right-6 sm:p-3 lg:right-4 lg:p-2"
      >
        <FaArrowRight size={24} className="sm:text-xl lg:text-2xl" />
      </button>

      <motion.button
        onClick={scrollToProducts}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white rounded-full p-3 z-20 hover:bg-opacity-75 transition-colors duration-300 ease-in-out hidden custom-arrow-bottom:block sm:bottom-10 sm:p-4 lg:bottom-8 lg:p-3"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <ChevronDown size={24} />
      </motion.button>
    </div>
  );
};

export default Carousel;
