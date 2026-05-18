import TaskItem from "./TaskItem";
import EmptyState from "../common/EmptyState";

function TaskList({
  tasks,
  onToggleTask,
  onDeleteTask,
}) {
  if (!tasks.length) {
    return (
      <EmptyState
        title="No pending tasks"
        description="Everything has been completed."
      />
    );
  }

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleTask={onToggleTask}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </div>
  );
}

export default TaskList;