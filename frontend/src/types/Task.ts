/**
 * Represents a task in the Task Manager application.
 */
export interface Task {
  /** Unique identifier for the task. */
  id: number;
  /** Title or name of the task. */
  title: string;
  /** Detailed description of the task. */
  description: string;
  /** Whether the task is completed. */
  completed: boolean;
  /** Status of the task. */
  status: string;
  /** Priority of the task. */
  priority: string;
  /** Label of the task. */
  label: string;
}
