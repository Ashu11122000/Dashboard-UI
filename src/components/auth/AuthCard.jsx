function AuthCard({
  title,
  subtitle,
  children,
}) {
  return (
    <div className="w-full max-w-md bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-2xl p-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          {title}
        </h1>

        <p className="mt-3 text-gray-600 dark:text-gray-400">
          {subtitle}
        </p>
      </div>

      <div className="mt-8">
        {children}
      </div>
    </div>
  );
}

export default AuthCard;