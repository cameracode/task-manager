"use client";
import { useState } from "react";
import { addTask } from "../api/tasks";
import { Task } from "../types/Task";

/**
 * Form for creating a new task.
 */
export default function TaskForm({ onTaskAdded }: { onTaskAdded: () => void }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await addTask({ title, description, completed: false });
      setTitle("");
      setDescription("");
      onTaskAdded();
    } catch (err) {
      setError("Failed to add task.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-8 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 max-w-xl mx-auto"
    >
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Add a New Task</h2>
      <div className="mb-4 flex flex-col items-center">
        <input
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition max-w-md w-full mx-auto"
          type="text"
          placeholder="Task title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="mb-6 flex flex-col items-center">
        <textarea
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none transition max-w-md w-full mx-auto"
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          rows={3}
        />
      </div>
      {error && <div className="text-red-500 mb-2">{error}</div>}
      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50 w-full"
        disabled={loading}
      >
        {loading ? "Adding..." : "Add Task"}
      </button>
    </form>
  );
}
