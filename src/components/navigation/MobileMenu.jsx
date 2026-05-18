import Button from "../common/Button";
import NavLinks from "./NavLinks";
import ThemeToggle from "../common/ThemeToggle";
import { Link } from "react-router-dom";

function MobileMenu({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-6 py-6">
      <div className="flex flex-col gap-6">
        <NavLinks mobile onClick={onClose} />

        <ThemeToggle />

        <div className="flex flex-col gap-3">
          <Link to="/login" onClick={onClose}>
            <Button variant="secondary" className="w-full">
              Login
            </Button>
          </Link>

          <Link to="/signup" onClick={onClose}>
            <Button className="w-full">Get Started</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
