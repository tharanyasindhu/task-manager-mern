const statusColors = {
  todo: "bg-gray-100 text-gray-700",
  "in-progress": "bg-yellow-100 text-yellow-700",
  completed: "bg-green-100 text-green-700",
};

const priorityColors = {
  low: "bg-blue-50 text-blue-600",
  medium: "bg-orange-50 text-orange-600",
  high: "bg-red-50 text-red-600",
};

export default function TaskItem({ task, onEdit, onDelete, onStatusChange }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 flex items-start justify-between gap-4">
      <div className="flex-1">
        <div className="flex items-center gap-2 flex-wrap">
          <h3 className="font-medium text-gray-800">{task.title}</h3>
          <span
            className={`text-xs px-2 py-0.5 rounded-full ${statusColors[task.status]}`}
          >
            {task.status}
          </span>
          <span
            className={`text-xs px-2 py-0.5 rounded-full ${priorityColors[task.priority]}`}
          >
            {task.priority}
          </span>
        </div>
        {task.description && (
          <p className="text-sm text-gray-500 mt-1">{task.description}</p>
        )}
        {task.dueDate && (
          <p className="text-xs text-gray-400 mt-1">
            Due: {new Date(task.dueDate).toLocaleDateString()}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-1 items-end">
        <select
          value={task.status}
          onChange={(e) => onStatusChange(task._id, e.target.value)}
          className="text-xs border rounded-md px-2 py-1"
        >
          <option value="todo">To Do</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
        <div className="flex gap-2 mt-1">
          <button
            onClick={() => onEdit(task)}
            className="text-xs text-primary-600 hover:underline"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(task._id)}
            className="text-xs text-red-500 hover:underline"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
