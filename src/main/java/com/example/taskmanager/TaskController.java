package com.example.taskmanager;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import java.util.List;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {
    private final TaskManager manager;

    public TaskController(TaskManager manager) {
        this.manager = manager;
    }

    @GetMapping
    public List<Task> getTasks() {
        return manager.getTasks();
    }

    @PostMapping
    public void addTask(@RequestBody Task task) {
        manager.addTask(task.getTitle(), task.getDescription());
    }

    @PutMapping("/{id}/complete")
    public void completeTask(@PathVariable int id) {
        manager.markTaskCompleted(id);
    }

    @DeleteMapping("/{id}")
    public void removeTask(@PathVariable int id) {
        manager.removeTask(id);
    }

    /**
     * Handles TaskNotFoundException and returns a 404 response.
     */
    @ExceptionHandler(TaskManager.TaskNotFoundException.class)
    public ResponseEntity<String> handleTaskNotFound(TaskManager.TaskNotFoundException ex) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());
    }
}
