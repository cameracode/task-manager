import { Task } from '../types/Task';

/**
 * Renders a single task item with complete and delete buttons.
 * @param props - The props object containing a Task and action handlers.
 * @returns {JSX.Element} The rendered task item.
 */
export default function TaskItem({
  task,
  onComplete,
  onDelete,
}: {
  task: Task;
  onComplete?: (id: number) => void;
  onDelete?: (id: number) => void;
}) {
  return (
    <li className="flex items-center justify-between p-2 border-b">
      <span className={task.completed ? "line-through text-gray-400" : ""}>
        {task.title}
        <div className="text-xs text-gray-500">{task.description}</div>
      </span>
      <div className="flex gap-2">
        {!task.completed && onComplete && (
          <button
            className="text-green-600 hover:underline"
            onClick={() => onComplete(task.id)}
          >
            Complete
          </button>
        )}
        {onDelete && (
          <button
            className="text-red-600 hover:underline"
            onClick={() => onDelete(task.id)}
          >
            Delete
          </button>
        )}
      </div>
    </li>
  );
}