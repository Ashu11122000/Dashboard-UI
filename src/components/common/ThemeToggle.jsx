import useTheme from "../../hooks/useTheme";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="
        px-3
        py-2
        rounded-lg
        text-sm
        font-medium
        transition
        border
        border-gray-300
        text-gray-700
        hover:bg-gray-100
        dark:border-gray-300
        dark:text-white
        dark:hover:bg-gray-800
      " 
    >
      {theme === "light" ? "Dark" : "Light"}
    </button>
  );
}

export default ThemeToggle;
