export default function Loader({
  size = "md",
  fullScreen = false,
  text = "Loading...",
}) {
  const sizeClasses = {
    sm: "h-5 w-5",
    md: "h-8 w-8",
    lg: "h-12 w-12",
  };

  const content = (
    <div className="flex flex-col items-center gap-3">
      <div
        className={`
          animate-spin rounded-full border-4
          border-blue-500 border-t-transparent
          ${sizeClasses[size]}
        `}
      />
      {text && (
        <p className="text-sm text-slate-600 dark:text-slate-300">
          {text}
        </p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
        {content}
      </div>
    );
  }

  return content;
}