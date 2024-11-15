import { useEffect, useState } from "react";

export default function Loader() {
  const [dots, setDots] = useState("");  // Gestion des points d'animation
  const [isLoading, setIsLoading] = useState(true);  // Contrôle de l'affichage du loader
  const [loadingTime, setLoadingTime] = useState(0);  // Temps écoulé pour le loader (en secondes)

  useEffect(() => {
    // Mettre à jour le temps d'affichage du loader toutes les 500ms
    const interval = setInterval(() => {
      setLoadingTime((prevTime) => prevTime + 0.5); // Incrémenter le temps de 0.5s
    }, 500);

    // Arrêter le loader après 5 secondes
    const hideLoader = setTimeout(() => {
      setIsLoading(false);  // Cacher le loader après 5 secondes
      clearInterval(interval);  // Nettoyer l'intervalle quand le loader disparaît
    }, 5000);

    return () => {
      clearInterval(interval);  // Nettoyer l'intervalle lors du démontage
      clearTimeout(hideLoader);  // Nettoyer le timeout du loader
    };
  }, []);

  useEffect(() => {
    if (loadingTime > 1) {  // Démarrer l'animation des points après 1 seconde
      const dotInterval = setInterval(() => {
        setDots((prevDots) => (prevDots.length >= 3 ? "" : prevDots + "."));
      }, 500);  // Ajouter un point toutes les 500ms

      return () => clearInterval(dotInterval);  // Nettoyer l'intervalle des points
    }
  }, [loadingTime]);  // Lancer l'animation après 1 seconde de chargement

  if (!isLoading) return null;  // Si le loader n'est plus visible, ne rien afficher

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
