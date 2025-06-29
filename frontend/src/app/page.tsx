"use client";

import NavBar from "@/components/nav-bar";
import StatsCards from "@/components/stats-cards";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Home() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent SSR mismatch by not rendering the time-dependent code until mounted
  if (!mounted) {
    return null;
  } 

  const bgColor = theme === "dark" ? "bg-black" : "bg-slate-50";
  return ( 
    <div className={`geist-sans min-h-screen ${bgColor}`}>
      <NavBar />
      <StatsCards />
    </div>
  );
}

// "use client";
// import TaskList from '../components/TaskList';
// import TaskFormModal from '../components/TaskFormModal';
// import { useState, useRef } from 'react';

// export default function Home() {
//   const [showModal, setShowModal] = useState(false);
//   const [refresh, setRefresh] = useState(0);
//   const buttonRef = useRef<HTMLButtonElement>(null);
//   const [anchorRect, setAnchorRect] = useState<{top: number, left: number, height: number} | null>(null);

//   const handleOpenModal = () => {
//     if (buttonRef.current) {
//       const rect = buttonRef.current.getBoundingClientRect();
//       setAnchorRect({ top: rect.bottom, left: rect.left, height: rect.height });
//     }
//     setShowModal(true);
//   };

//   return (
//     <>
//       <header className="w-full bg-gradient-to-r from-blue-50 to-blue-100 border-b border-blue-200 shadow flex items-center justify-between px-8 py-5 mb-10">
//         <div className="flex items-center gap-4">
//           <span className="text-3xl font-extrabold tracking-tight text-blue-900">Task Manager</span>
//         </div>
//         <button
//           ref={buttonRef}
//           onClick={handleOpenModal}
//           className="!bg-gradient-to-r !from-blue-600 !to-blue-500 !text-white !font-bold !px-7 !py-3 !rounded-full !shadow-lg !text-lg transition-all duration-200 transform hover:scale-105 hover:-translate-y-1 hover:from-blue-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           aria-label="Add New Task"
//         >
//           Add New Task
//         </button>
//       </header>
//       <TaskFormModal showModal={showModal} setShowModal={setShowModal} onTaskAdded={() => { setShowModal(false); setRefresh(r => r + 1); }} />
//       <main className="max-w-xl mx-auto mt-10 bg-white">
//         <TaskList refresh={refresh} />
//       </main>
//     </>
//   );
// }

// // export default function Home() {
// //   return <div>Hello, world!</div>;
// // }