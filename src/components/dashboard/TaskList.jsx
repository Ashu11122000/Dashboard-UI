import tasksData from "../../data/taskData";

function TaskList() {
  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
        Tasks
      </h2>

      <div className="mt-6 space-y-4">
        {tasksData.map((task) => (
          <div
            key={task.id}
            className={`flex items-center gap-3 rounded-xl p-4 ${
              task.completed
                ? "bg-green-50 dark:bg-green-900/20"
                : "bg-gray-50 dark:bg-gray-800"
            }`}
          >
            <span
              className={`flex h-6 w-6 items-center justify-center rounded-full text-sm font-semibold ${
                task.completed
                  ? "bg-green-600 text-white"
                  : "bg-gray-300 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
              }`}
            >
              {task.completed ? "✓" : "○"}
            </span>

            <p
              className={`text-sm ${
                task.completed
                  ? "text-green-700 dark:text-green-300"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              {task.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TaskList;