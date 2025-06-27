import { useEffect, useRef } from "react";
import TaskForm from "./TaskForm";

export default function TaskFormModal({ showModal, setShowModal, onTaskAdded }: { showModal: boolean; setShowModal: (show: boolean) => void; onTaskAdded: () => void }) {
  const modalRef = useRef<HTMLDivElement>(null);

  // ESC key closes modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowModal(false);
    };
    if (showModal) document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [showModal, setShowModal]);

  // Click outside closes modal
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setShowModal(false);
      }
    };
    if (showModal) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showModal, setShowModal]);

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[9999] bg-black bg-opacity-60 backdrop-blur-sm">
      <div
        ref={modalRef}
        className="relative bg-white rounded-xl shadow-2xl max-w-lg w-full p-8 border-4 border-blue-500"
      >
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold"
          aria-label="Close modal"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold text-blue-900 mb-1">Add Task</h2>
        <div className="text-gray-500 mb-6">Fill in the form to add a task</div>
        <TaskForm onTaskAdded={onTaskAdded} onClose={() => setShowModal(false)} />
      </div>
    </div>
  );
}
