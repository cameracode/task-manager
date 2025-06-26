"use client";
import { useEffect, useState } from 'react';
import { fetchTasks, completeTask, deleteTask } from '../api/tasks';
import TaskItem from './TaskItem';
import { Task } from '../types/Task';

/**
 * Client component that fetches and displays a list of tasks.
 * Uses React hooks to manage loading state and data fetching from the backend API.
 * @returns {JSX.Element} The rendered list of tasks or a loading indicator.
 */
export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadTasks = async () => {
    setLoading(true);
    setError(null);
    try {
      setTasks(await fetchTasks());
    } catch {
      setError("Failed to load tasks.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleComplete = async (id: number) => {
    try {
      await completeTask(id);
      loadTasks();
    } catch {
      setError("Failed to complete task.");
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteTask(id);
      loadTasks();
    } catch {
      setError("Failed to delete task.");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <ul className="bg-white rounded shadow p-4">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onComplete={handleComplete}
          onDelete={handleDelete}
        />
      ))}
    </ul>
  );
}
