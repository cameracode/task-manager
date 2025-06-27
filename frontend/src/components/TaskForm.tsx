"use client";
import { useState } from "react";
import { addTask } from "../api/tasks";
import { Task } from "../types/Task";

const STATUS_OPTIONS = ["Todo", "Done", "Canceled", "Backlog"];
const PRIORITY_OPTIONS = ["Low", "Medium", "High"];
const LABEL_OPTIONS = ["Feature", "Bug", "Documentation"];

/**
 * Form for creating a new task.
 */
export default function TaskForm({ onTaskAdded, onClose }: { onTaskAdded: () => void; onClose: () => void }) {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState(STATUS_OPTIONS[0]);
  const [priority, setPriority] = useState(PRIORITY_OPTIONS[1]);
  const [label, setLabel] = useState(LABEL_OPTIONS[0]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await addTask({ title, status, priority, label, completed: false, description: "" });
      setTitle("");
      setStatus(STATUS_OPTIONS[0]);
      setPriority(PRIORITY_OPTIONS[1]);
      setLabel(LABEL_OPTIONS[0]);
      onTaskAdded();
    } catch (err) {
      setError("Failed to add task.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Task Title</label>
          <input
            className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            placeholder="Task title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Task Status</label>
          <select
            className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={status}
            onChange={e => setStatus(e.target.value)}
          >
            {STATUS_OPTIONS.map(opt => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Task Priority</label>
          <select
            className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={priority}
            onChange={e => setPriority(e.target.value)}
          >
            {PRIORITY_OPTIONS.map(opt => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Task Label</label>
          <select
            className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={label}
            onChange={e => setLabel(e.target.value)}
          >
            {LABEL_OPTIONS.map(opt => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
      </div>
      {error && <div className="text-red-500 mb-2">{error}</div>}
      <div className="flex justify-end gap-2 mt-4">
        <button
          type="button"
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300"
          onClick={onClose}
        >
          Close
        </button>
        <button
          type="submit"
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 font-semibold disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Adding..." : "Add New Task"}
        </button>
      </div>
    </form>
  );
}
