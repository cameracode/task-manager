package com.example.taskmanager;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import java.util.List;
import com.example.taskmanager.exception.TaskNotFoundException;

/**
 * REST controller for managing tasks via HTTP endpoints.
 */
@RestController
@RequestMapping("/api/tasks")
public class TaskController {
    private final TaskManager manager;

    /**
     * Constructs a TaskController with the given TaskManager.
     * @param manager The TaskManager service to use for task operations.
     */
    public TaskController(TaskManager manager) {
        this.manager = manager;
    }

    /**
     * Retrieves the list of all tasks.
     * @return List of Task objects.
     */
    @GetMapping
    public List<Task> getTasks() {
        return manager.getTasks();
    }

    /**
     * Adds a new task.
     * @param task The Task object to add (title and description required).
     */
    @PostMapping
    public Task addTask(@RequestBody Task task) {
        return manager.addTask(task.getTitle(), task.getDescription()); // This should return a Task
    }

    /**
     * Marks a task as completed by its ID.
     * @param id The ID of the task to mark as completed.
     */
    @PutMapping("/{id}/complete")
    public void completeTask(@PathVariable int id) {
        manager.markTaskCompleted(id);
    }

    /**
     * Removes a task by its ID.
     * @param id The ID of the task to remove.
     */
    @DeleteMapping("/{id}")
    public void removeTask(@PathVariable int id) {
        manager.removeTask(id);
    }

    /**
     * Handles TaskNotFoundException and returns a 404 response.
     * @param ex The exception thrown when a task is not found.
     * @return A ResponseEntity with a 404 status and error message.
     */
    @ExceptionHandler(TaskNotFoundException.class)
    public ResponseEntity<String> handleTaskNotFound(TaskNotFoundException ex) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());
    }
}
