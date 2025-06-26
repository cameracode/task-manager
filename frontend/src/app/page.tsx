"use client";
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import { useState } from 'react';

export default function Home() {
  const [refresh, setRefresh] = useState(0);

  return (
    <main className="max-w-xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-4">Task Manager</h1>
      <TaskForm onTaskAdded={() => setRefresh(r => r + 1)} />
      {/* Key prop forces TaskList to reload when refresh changes */}
      <TaskList key={refresh} />
    </main>
  );
}

// export default function Home() {
//   return <div>Hello, world!</div>;
// }