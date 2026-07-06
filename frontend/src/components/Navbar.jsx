import { useAuth } from "../context/AuthContext.jsx";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-primary-700">Task Manager</h1>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">Hi, {user?.name}</span>
          <button
            onClick={logout}
            className="text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-md transition"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
