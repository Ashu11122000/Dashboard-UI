import EmptyState from "../common/EmptyState";

function getTypeStyles(type) {
  switch (type) {
    case "success":
      return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300";
    case "warning":
      return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300";
    case "info":
    default:
      return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300";
  }
}

export default function NotificationsPanel({ notifications = [] }) {
  if (!notifications.length) {
    return (
      <EmptyState
        title="No notifications"
        description="You're all caught up for now."
      />
    );
  }

  return (
    <div className="space-y-4">
      {notifications.map((item) => (
        <div
          key={item.id}
          className={`p-4 rounded-xl border transition-all duration-200 ${
            item.read
              ? "bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-700"
              : "bg-indigo-50 border-indigo-200 dark:bg-indigo-900/20 dark:border-indigo-700"
          }`}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </h4>

                <span
                  className={`px-2 py-1 text-xs font-medium rounded-full ${getTypeStyles(
                    item.type
                  )}`}
                >
                  {item.type}
                </span>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-300">
                {item.message}
              </p>
            </div>

            <span className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">
              {item.time}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}