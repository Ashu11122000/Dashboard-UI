function Button({ children, variant = "primary", className = "", ...props }) {
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary:
      "bg-gray-200 hover:bg-gray-300 text-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white",
  };

  return (
    <button
      className={`
        px-5 py-2.5 rounded-lg font-medium transition duration-200
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
