import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../common/Button";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "../common/ThemeToggle";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-gray-900/90 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-bold text-gray-900 dark:text-white"
        >
          SaaSify
        </Link>

        <NavLinks />

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />

          <Link to="/login">
            <Button variant="secondary">Login</Button>
          </Link>

          <Link to="/signup">
            <Button>Get Started</Button>
          </Link>
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-800 dark:text-white text-2xl"
          aria-label="Toggle Menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      <MobileMenu isOpen={isOpen} onClose={closeMenu} />
    </header>
  );
}

export default Navbar;
