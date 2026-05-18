import ThemeToggle from "../common/ThemeToggle";

function TopBar({ setIsOpen }) {
  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-gray-200 bg-white px-6 dark:border-gray-800 dark:bg-gray-900">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 lg:hidden dark:text-gray-300 dark:hover:bg-gray-800"
        >
          ☰
        </button>

        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Dashboard
          </h1>
        </div>
      </div>

      {/* Center Search */}
      <div className="hidden w-full max-w-md px-6 md:block">
        <input
          type="text"
          placeholder="Search..."
          className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-2 text-sm outline-none transition focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
        />
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-4">
        <ThemeToggle />

        <button
          type="button"
          className="rounded-xl p-2 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
        >
          🔔
        </button>

        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
            AS
          </div>

          <div className="hidden md:block">
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              Ashish Sharma
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Admin
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default TopBar;