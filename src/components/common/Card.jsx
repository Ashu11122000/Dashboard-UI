function Card({ children, className = "" }) {
  return (
    <div
      className={`
        bg-white
        dark:bg-slate-800
        rounded-2xl
        shadow-md
        p-6
        transition
        hover:shadow-lg
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Card;
