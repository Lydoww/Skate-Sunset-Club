// MobileNav.tsx
import { Link } from "react-router-dom";

interface MobileNavProps {
  isOpen: boolean;
  closeMenu: () => void;
}

const MobileNav = ({ isOpen, closeMenu }: MobileNavProps) => {
  return (
    <div
      className={`absolute top-24 left-0 w-full bg-black text-white py-4 transition-transform duration-300 ${
        isOpen ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <ul className="space-y-4 text-center">
        <li>
          <Link to="/" className="block navbar-link" onClick={closeMenu}>
            HOME
          </Link>
        </li>
        <li>
          <Link to="/company" className="block navbar-link" onClick={closeMenu}>
            COMPANY
          </Link>
        </li>
        <li>
          <Link to="/contact" className="block navbar-link" onClick={closeMenu}>
            CONTACT
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;
