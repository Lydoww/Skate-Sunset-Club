import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import skate from "../assets/skate.jpg";
import skate2 from "../assets/skate2.jpg";
import skate3 from "../assets/skate3.jpg";

const images = [skate, skate2, skate3];

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

  return (
    <div className="relative h-[920px] overflow-hidden">
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
              className="w-full h-[calc(100%+60px)] object-cover rounded-lg shadow-lg -mt-20" // Montée de 20px
            />
          </div>
        ))}
      </div>
      <button
        onClick={prevImage}
        className="absolute top-1/2 left-0 transform -translate-y-1/2  bg-opacity-50 text-white p-2 rounded-full z-10 hover:text-yellow-500 transition-colors duration-300 ease-in-out"
      >
        <FaArrowLeft size={30} />
      </button>
      <button
        onClick={nextImage}
        className="absolute top-1/2 right-0 transform -translate-y-1/2  bg-opacity-50 text-white p-2 rounded-full z-10 hover:text-yellow-500 transition-colors duration-300 ease-in-out"
      >
        <FaArrowRight size={30} />
      </button>
    </div>
  );
};

export default Carousel;
