import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/skatelogo.png";
import { useCart } from "@/hooks/useCart";

interface NavbarProps {
  isProductDetailPage: boolean;
  scroll: boolean;
  className?: string;
}

const Navbar = ({ isProductDetailPage, scroll }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { itemCount } = useCart(); 

  return (
    <header
      className={`fixed top-0 w-full h-24 flex items-center px-4 md:px-10 transition-all duration-200 ${
        isProductDetailPage
          ? "bg-transparent text-black"
          : scroll
          ? "bg-white text-black shadow-md"
          : "bg-transparent text-white"
      }`}
      style={{ zIndex: 999 }}
    >
      <div className="flex items-center justify-between w-full">
        {/* Hamburger menu pour mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <div className={`space-y-1.5 transition-all duration-300`}>
            <div
              className={`w-6 h-0.5 bg-current transition-all duration-300 ${
                menuOpen ? "transform rotate-45 translate-y-1.5" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-current transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-current transition-all duration-300 ${
                menuOpen ? "transform -rotate-45 -translate-y-1.5" : ""
              }`}
            ></div>
          </div>
        </button>

        {/* Navigation pour desktop */}
        <nav className="hidden md:flex flex-1">
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

        {/* Logo */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 flex justify-center">
          <Link to="/">
            <img src={logo} alt="logo" className="h-full object-contain" />
          </Link>
        </div>

        {/* Icône de panier */}
        <div className="flex justify-end relative">
          <Link to="/panier" className="relative">
            <svg
              className="w-6 h-6 navbar-link cursor-pointer"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="absolute top-24 left-0 w-full bg-black bg-opacity-90 text-white py-4 md:hidden">
          <nav className="flex flex-col items-center">
            <Link
              to="/"
              className="py-2 text-lg navbar-link"
              onClick={() => setMenuOpen(false)}
            >
              HOME
            </Link>
            <Link
              to="/company"
              className="py-2 text-lg navbar-link"
              onClick={() => setMenuOpen(false)}
            >
              COMPANY
            </Link>
            <Link
              to="/contact"
              className="py-2 text-lg navbar-link"
              onClick={() => setMenuOpen(false)}
            >
              CONTACT
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
