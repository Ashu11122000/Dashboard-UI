function Badge({
  children,
  variant = "default",
}) {
  const variants = {
    default:
      "bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-white",

    success:
      "bg-green-100 text-green-700",

    warning:
      "bg-yellow-100 text-yellow-700",

    danger:
      "bg-red-100 text-red-700",

    primary:
      "bg-blue-100 text-blue-700",
  };

  return (
    <span
      className={`
        inline-block
        px-3
        py-1
        rounded-full
        text-sm
        font-medium
        ${variants[variant]}
      `}
    >
      {children}
    </span>
  );
}

export default Badge;