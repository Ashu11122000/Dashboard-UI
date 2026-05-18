import { Link } from "react-router-dom";
import Button from "../components/common/Button";

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-6">
      <div className="text-center max-w-lg">
        <h1 className="text-7xl md:text-8xl font-bold text-indigo-600 dark:text-indigo-400">
          404
        </h1>

        <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">
          Page Not Found
        </h2>

        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Sorry, the page you’re looking for doesn’t exist or may have been moved.
        </p>

        <Link to="/" className="inline-block mt-8">
          <Button>
            Go Back Home
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;