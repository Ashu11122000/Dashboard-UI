function Input({
  label,
  type = "text",
  placeholder = "",
  value,
  onChange,
  name,
  error,
}) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="font-medium text-slate-700 dark:text-slate-200">
          {label}
        </label>
      )}

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        className={`
          px-4 py-3 rounded-lg border outline-none transition
          bg-white text-black
          dark:bg-slate-800 dark:text-white dark:border-slate-600
          focus:ring-2 focus:ring-slate-500
          ${error ? "border-red-500" : "border-slate-300"}
        `}
      />

      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}

export default Input;
