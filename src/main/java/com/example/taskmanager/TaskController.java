package com.example.taskmanager;

import org.springframework.web.bind.annotation.*;
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
    public boolean completeTask(@PathVariable int id) {
        return manager.markTaskCompleted(id);
    }

    @DeleteMapping("/{id}")
    public boolean removeTask(@PathVariable int id) {
        return manager.removeTask(id);
    }
}
