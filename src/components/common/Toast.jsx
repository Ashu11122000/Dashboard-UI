import { X, CheckCircle, AlertCircle, AlertTriangle, Info } from "lucide-react";
import { useToastContext } from "../../context/ToastContext";

const toastStyles = {
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

export default function Toast() {
  const { toasts, removeToast } = useToastContext();

  if (!toasts.length) return null;

  return (
    <div className="fixed top-5 right-5 z-50 flex flex-col gap-3">
      {toasts.map((toast) => {
        const config = toastStyles[toast.type] || toastStyles.info;
        const Icon = config.icon;

        return (
          <div
            key={toast.id}
            className={`
              flex items-start gap-3
              min-w-[320px] max-w-sm
              rounded-xl border p-4 shadow-lg
              backdrop-blur-sm
              animate-in slide-in-from-right-5 fade-in
              duration-300
              ${config.classes}
            `}
          >
            <Icon className="mt-0.5 h-5 w-5 shrink-0" />

            <div className="flex-1">
              <p className="text-sm font-medium">{toast.message}</p>
            </div>

            <button
              onClick={() => removeToast(toast.id)}
              className="transition-opacity hover:opacity-70"
              aria-label="Close notification"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        );
      })}
    </div>
  );
}