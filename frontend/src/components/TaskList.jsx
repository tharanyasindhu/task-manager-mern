import TaskItem from "./TaskItem.jsx";

export default function TaskList({ tasks, onEdit, onDelete, onStatusChange }) {
  if (!tasks.length) {
    return (
      <p className="text-center text-gray-400 text-sm py-8">
        No tasks yet. Add one above to get started.
      </p>
    );
  }

  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <TaskItem
          key={task._id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
          onStatusChange={onStatusChange}
        />
      ))}
    </div>
  );
}
