package com.example.taskmanager;
import org.springframework.stereotype.Service;
import java.util.*;

/**
 * Manages a list of tasks, providing methods to add, retrieve, update, and remove tasks.
 */
@Service
public class TaskManager {
    private List<Task> tasks = new ArrayList<>();
    private int nextId = 1;

    /**
     * Adds a new task to the list.
     * @param title The title of the task.
     * @param description The description of the task.
     */
    public void addTask(String title, String description) {
        tasks.add(new Task(nextId++, title, description, false));
    }

    /**
     * Retrieves the list of all tasks.
     * @return A list of all tasks.
     */
    public List<Task> getTasks() {
        return tasks;
    }

    /**
     * Retrieves a task by its unique ID.
     * @param id The ID of the task.
     * @return The Task object if found, otherwise null.
     */
    public Task getTaskById(int id) {
        for (Task t : tasks) {
            if (t.getId() == id) return t;
        }
        return null;
    }

    /**
     * Removes a task by its unique ID.
     * @param id The ID of the task to remove.
     * @return True if the task was removed, false if not found.
     */
    public boolean removeTask(int id) {
        return tasks.removeIf(t -> t.getId() == id);
    }

    /**
     * Marks a task as completed by its unique ID.
     * @param id The ID of the task to mark as completed.
     * @return True if the task was found and marked as completed, false otherwise.
     */
    public boolean markTaskCompleted(int id) {
        Task t = getTaskById(id);
        if (t != null) {
            t.setCompleted(true);
            return true;
        }
        return false;
    }
}
