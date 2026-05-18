import { NavLink } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Pricing", path: "/pricing" },
];

function NavLinks({ mobile = false, onClick }) {
  return (
    <nav
      className={
        mobile ? "flex flex-col gap-4" : "hidden md:flex items-center gap-6"
      }
    >
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          onClick={onClick}
          className={({ isActive }) =>
            `
            font-medium transition-colors duration-200
            ${
              isActive
                ? "text-blue-600 dark:text-blue-400"
                : "text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            }
          `
          }
        >
          {item.name}
        </NavLink>
      ))}
    </nav>
  );
}

export default NavLinks;
