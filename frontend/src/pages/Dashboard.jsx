import { useState, useEffect, useCallback } from "react";
import api from "../api/axios.js";
import Navbar from "../components/Navbar.jsx";
import TaskForm from "../components/TaskForm.jsx";
import TaskList from "../components/TaskList.jsx";

const StatCard = ({ label, value, color }) => (
  <div className="bg-white rounded-xl shadow-sm p-4 text-center">
    <p className={`text-2xl font-bold ${color}`}>{value}</p>
    <p className="text-xs text-gray-500 mt-1">{label}</p>
  </div>
);

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [stats, setStats] = useState({ total: 0, todo: 0, inProgress: 0, completed: 0 });
  const [filter, setFilter] = useState("all");
  const [editingTask, setEditingTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchTasks = useCallback(async () => {
    setLoading(true);
    try {
      const params = filter !== "all" ? { status: filter } : {};
      const { data } = await api.get("/tasks", { params });
      setTasks(data);
    } catch (err) {
      setError("Failed to load tasks");
    } finally {
      setLoading(false);
    }
  }, [filter]);

  const fetchStats = useCallback(async () => {
    try {
      const { data } = await api.get("/tasks/stats");
      setStats(data);
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    fetchTasks();
    fetchStats();
  }, [fetchTasks, fetchStats]);

  const handleAddOrUpdate = async (form) => {
    try {
      if (editingTask) {
        await api.put(`/tasks/${editingTask._id}`, form);
        setEditingTask(null);
      } else {
        await api.post("/tasks", form);
      }
      fetchTasks();
      fetchStats();
    } catch (err) {
      setError("Failed to save task");
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this task?")) return;
    try {
      await api.delete(`/tasks/${id}`);
      fetchTasks();
      fetchStats();
    } catch (err) {
      setError("Failed to delete task");
    }
  };

  const handleStatusChange = async (id, status) => {
    try {
      await api.put(`/tasks/${id}`, { status });
      fetchTasks();
      fetchStats();
    } catch (err) {
      setError("Failed to update status");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          <StatCard label="Total" value={stats.total} color="text-gray-800" />
          <StatCard label="To Do" value={stats.todo} color="text-gray-600" />
          <StatCard label="In Progress" value={stats.inProgress} color="text-yellow-600" />
          <StatCard label="Completed" value={stats.completed} color="text-green-600" />
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 text-sm rounded-md p-3 mb-4">
            {error}
          </div>
        )}

        <TaskForm
          onSubmit={handleAddOrUpdate}
          editingTask={editingTask}
          onCancelEdit={() => setEditingTask(null)}
        />

        <div className="flex gap-2 mb-4">
          {["all", "todo", "in-progress", "completed"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`text-xs px-3 py-1.5 rounded-full transition ${
                filter === f
                  ? "bg-primary-600 text-white"
                  : "bg-white text-gray-600 border"
              }`}
            >
              {f === "all" ? "All" : f}
            </button>
          ))}
        </div>

        {loading ? (
          <p className="text-center text-gray-400 text-sm py-8">Loading tasks...</p>
        ) : (
          <TaskList
            tasks={tasks}
            onEdit={setEditingTask}
            onDelete={handleDelete}
            onStatusChange={handleStatusChange}
          />
        )}
      </main>
    </div>
  );
}
