import { useEffect, useState } from "react";

export default function Loader() {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => (prevDots.length >= 3 ? "" : prevDots + "."));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="text-center">
        <div className="inline-block relative w-20 h-20">
          <div className="absolute top-0 left-0 w-full h-full border-4 border-white rounded-full animate-spin border-t-transparent"></div>
          <div className="absolute top-0 left-0 w-full h-full border-4 border-white rounded-full animate-ping opacity-75"></div>
        </div>
        <p className="mt-4 text-xl font-semibold text-white">
          Chargement<span className="inline-block w-6 text-left">{dots}</span>
        </p>
        <p className="sr-only">Chargement en cours, veuillez patienter.</p>
      </div>
    </div>
  );
}
