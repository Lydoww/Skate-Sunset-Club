import { useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/skatelogo.png";

interface NavbarProps {
  isProductDetailPage: boolean;  // Ajoute cette prop pour savoir si on est sur la page produit
  scroll: boolean;  // Récupère l'état du scroll pour appliquer le changement de couleur
}

const Navbar: React.FC<NavbarProps> = ({ isProductDetailPage, scroll }) => {
  return (
    <div
      className={`fixed top-0 w-full h-24 flex items-center px-10 transition ease-linear duration-200 ${
        isProductDetailPage
          ? "bg-transparent text-black" // Pour la page produit, on garde le fond transparent et le texte noir
          : scroll
          ? "bg-white text-black shadow-md" // Si on scrolle sur la home, fond blanc et texte noir
          : "bg-transparent text-white" // Si on n'a pas scrollé sur la home, fond transparent et texte blanc
      }`}
      style={{ zIndex: 999 }}
    >
      {/* Navigation à gauche */}
      <nav className={`flex-1`}>
        <ul className="flex space-x-12">
          <li>
            <Link to="/" className="navbar-link">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/company" className="navbar-link">
              COMPANY
            </Link>
          </li>
          <li>
            <Link to="/contact" className="navbar-link">
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>

      {/* Logo centré */}
      <div className="w-32 flex justify-center">
        <Link to="/">
          <img src={logo} alt="logo" className="h-full object-contain" />
        </Link>
      </div>

      {/* Icône de panier à droite */}
      <div className={`flex-1 flex justify-end`}>
        <AiOutlineShoppingCart size={28} className="navbar-link" />
      </div>
    </div>
  );
};

export default Navbar;
