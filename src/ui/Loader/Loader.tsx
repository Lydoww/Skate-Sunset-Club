import { useEffect, useState } from "react";

export default function Loader() {
  const [dots, setDots] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [loadingTime, setLoadingTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingTime((prevTime) => prevTime + 0.5);
    }, 500);

    const hideLoader = setTimeout(() => {
      setIsLoading(false);
      clearInterval(interval);
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(hideLoader);
    };
  }, []);

  useEffect(() => {
    if (loadingTime > 1) {
      const dotInterval = setInterval(() => {
        setDots((prevDots) => (prevDots.length >= 3 ? "" : prevDots + "."));
      }, 500);

      return () => clearInterval(dotInterval);
    }
  }, [loadingTime]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 z-50">
      <div className="text-center">
        <div className="inline-block relative w-32 h-32">
          {/* Loader avec animation */}
          <div className="absolute top-0 left-0 w-full h-full border-8 border-white rounded-full animate-spin border-t-transparent"></div>
          <div className="absolute top-0 left-0 w-full h-full border-8 border-white rounded-full animate-ping opacity-75"></div>
        </div>
        <p className="mt-4 text-2xl font-semibold text-white">
          Loading <span className="inline-block w-6 text-left">{dots}</span>
        </p>
      </div>
    </div>
  );
}
