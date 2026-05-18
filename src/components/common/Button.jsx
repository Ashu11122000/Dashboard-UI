function Button({
  children,
  type = "button",
  variant = "primary",
  size = "md",
  onClick,
  disabled = false,
  fullWidth = false,
}) {
  const baseStyles =
    "font-medium rounded-lg transition duration-300 focus:outline-none";

  const variants = {
    primary:
      "bg-slate-900 text-white hover:bg-slate-700 dark:bg-white dark:text-black dark:hover:bg-slate-200",

    secondary:
      "bg-slate-200 text-black hover:bg-slate-300 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600",

    outline:
      "border border-slate-400 text-slate-900 hover:bg-slate-100 dark:border-slate-500 dark:text-white dark:hover:bg-slate-800",

    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? "w-full" : ""}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
      `}
    >
      {children}
    </button>
  );
}

export default Button;
