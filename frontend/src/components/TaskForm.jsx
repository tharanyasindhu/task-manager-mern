import { useState, useEffect } from "react";

const emptyTask = {
  title: "",
  description: "",
  status: "todo",
  priority: "medium",
  dueDate: "",
};

export default function TaskForm({ onSubmit, editingTask, onCancelEdit }) {
  const [form, setForm] = useState(emptyTask);

  useEffect(() => {
    if (editingTask) {
      setForm({
        title: editingTask.title || "",
        description: editingTask.description || "",
        status: editingTask.status || "todo",
        priority: editingTask.priority || "medium",
        dueDate: editingTask.dueDate ? editingTask.dueDate.slice(0, 10) : "",
      });
    } else {
      setForm(emptyTask);
    }
  }, [editingTask]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title.trim()) return;
    onSubmit(form);
    setForm(emptyTask);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl shadow-sm p-5 space-y-3 mb-6"
    >
      <h2 className="font-semibold text-gray-800">
        {editingTask ? "Edit Task" : "Add New Task"}
      </h2>
      <input
        type="text"
        name="title"
        placeholder="Task title"
        value={form.title}
        onChange={handleChange}
        required
        className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
      />
      <textarea
        name="description"
        placeholder="Description (optional)"
        value={form.description}
        onChange={handleChange}
        rows={2}
        className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
      />
      <div className="grid grid-cols-3 gap-3">
        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          className="border rounded-md px-2 py-2 text-sm"
        >
          <option value="todo">To Do</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
        <select
          name="priority"
          value={form.priority}
          onChange={handleChange}
          className="border rounded-md px-2 py-2 text-sm"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <input
          type="date"
          name="dueDate"
          value={form.dueDate}
          onChange={handleChange}
          className="border rounded-md px-2 py-2 text-sm"
        />
      </div>
      <div className="flex gap-2">
        <button
          type="submit"
          className="bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium px-4 py-2 rounded-md transition"
        >
          {editingTask ? "Update Task" : "Add Task"}
        </button>
        {editingTask && (
          <button
            type="button"
            onClick={onCancelEdit}
            className="bg-gray-100 hover:bg-gray-200 text-sm font-medium px-4 py-2 rounded-md transition"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
