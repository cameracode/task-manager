package com.example.taskmanager;
import org.springframework.stereotype.Service;
import com.example.taskmanager.exception.TaskNotFoundException;
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
    public Task addTask(String title, String description) {
        Task newTask = new Task(nextId++, title, description, false);
        tasks.add(newTask);
        return newTask;
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
     * @return The Task object if found.
     * @throws TaskNotFoundException if the task is not found.
     */
    public Task getTaskById(int id) {
        for (Task t : tasks) {
            if (t.getId() == id) return t;
        }
        throw new TaskNotFoundException("Task with id " + id + " not found.");
    }

    /**
     * Removes a task by its unique ID.
     * @param id The ID of the task to remove.
     * @return True if the task was removed.
     * @throws TaskNotFoundException if the task is not found.
     */
    public boolean removeTask(int id) {
        boolean removed = tasks.removeIf(t -> t.getId() == id);
        if (!removed) {
            throw new TaskNotFoundException("Task with id " + id + " not found.");
        }
        return true;
    }

    /**
     * Marks a task as completed by its unique ID.
     * @param id The ID of the task to mark as completed.
     * @return True if the task was found and marked as completed.
     * @throws TaskNotFoundException if the task is not found.
     */
    public boolean markTaskCompleted(int id) {
        Task t = getTaskById(id);
        t.setCompleted(true);
        return true;
    }
}
