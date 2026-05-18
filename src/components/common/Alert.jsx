import {
  CheckCircle,
  AlertCircle,
  AlertTriangle,
  Info,
  X,
} from "lucide-react";

const alertStyles = {
  success: {
    icon: CheckCircle,
    classes:
      "bg-green-50 border-green-200 text-green-800 dark:bg-green-900/30 dark:border-green-700 dark:text-green-300",
  },
  error: {
    icon: AlertCircle,
    classes:
      "bg-red-50 border-red-200 text-red-800 dark:bg-red-900/30 dark:border-red-700 dark:text-red-300",
  },
  warning: {
    icon: AlertTriangle,
    classes:
      "bg-yellow-50 border-yellow-200 text-yellow-800 dark:bg-yellow-900/30 dark:border-yellow-700 dark:text-yellow-300",
  },
  info: {
    icon: Info,
    classes:
      "bg-blue-50 border-blue-200 text-blue-800 dark:bg-blue-900/30 dark:border-blue-700 dark:text-blue-300",
  },
};

export default function Alert({
  type = "info",
  message,
  dismissible = false,
  onClose,
}) {
  const config = alertStyles[type] || alertStyles.info;
  const Icon = config.icon;

  return (
    <div
      className={`
        flex items-start gap-3
        rounded-xl border p-4
        ${config.classes}
      `}
    >
      <Icon className="mt-0.5 h-5 w-5 shrink-0" />

      <div className="flex-1">
        <p className="text-sm font-medium">{message}</p>
      </div>

      {dismissible && (
        <button
          onClick={onClose}
          className="transition-opacity hover:opacity-70"
          aria-label="Close alert"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}