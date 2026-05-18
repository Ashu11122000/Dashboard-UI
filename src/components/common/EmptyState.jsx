import { Inbox } from "lucide-react";

export default function EmptyState({
  title = "No data found",
  description = "There is nothing to display here yet.",
  action,
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm dark:border-slate-700 dark:bg-slate-800">
      <Inbox className="mb-4 h-12 w-12 text-slate-400" />

      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
        {title}
      </h3>

      <p className="mt-2 max-w-md text-sm text-slate-600 dark:text-slate-300">
        {description}
      </p>

      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}