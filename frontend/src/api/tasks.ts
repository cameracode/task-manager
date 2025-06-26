"use client";
import { Task } from '../types/Task';

/**
 * The base URL for the Task API.
 * @constant
 */
const API_URL = 'http://localhost:8080/api/tasks'; // Adjust as needed

/**
 * Fetches all tasks from the backend API.
 * @returns {Promise<Task[]>} A promise that resolves to an array of Task objects.
 * @throws {Error} If the fetch fails or the response is not ok.
 */
export async function fetchTasks(): Promise<Task[]> {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error('Failed to fetch tasks');
  return res.json();
}

/**
 * Adds a new task to the backend API.
 * @param {Omit<Task, 'id'>} task - The task data to add (without an id).
 * @returns {Promise<Task>} A promise that resolves to the created Task object.
 * @throws {Error} If the fetch fails or the response is not ok.
 */
export async function addTask(task: Omit<Task, 'id'>): Promise<Task> {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task),
  });
  if (!res.ok) throw new Error('Failed to add task');
  return res.json();
}

/**
 * Marks a task as completed.
 * @param {number} id - The ID of the task to complete.
 */
export async function completeTask(id: number): Promise<void> {
  const res = await fetch(`${API_URL}/${id}/complete`, { method: 'PUT' });
  if (!res.ok) throw new Error('Failed to complete task');
}

/**
 * Deletes a task.
 * @param {number} id - The ID of the task to delete.
 */
export async function deleteTask(id: number): Promise<void> {
  const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  if (!res.ok) throw new Error('Failed to delete task');
}

// Add updateTask, deleteTask as needed

// Add updateTask, deleteTask as needed
