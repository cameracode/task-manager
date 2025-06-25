package com.example.taskmanager;

import com.example.taskmanager.exception.TaskNotFoundException;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;
import java.util.List;

/**
 * Unit tests for the TaskManager service.
 */
public class TaskManagerTest {
    private TaskManager manager;

    @BeforeEach
    void setUp() {
        manager = new TaskManager();
    }

    @Test
    void testAddAndGetTasks() {
        manager.addTask("Test Task", "Description");
        List<Task> tasks = manager.getTasks();
        assertEquals(1, tasks.size());
        assertEquals("Test Task", tasks.get(0).getTitle());
    }

    @Test
    void testGetTaskById() {
        manager.addTask("Task1", "Desc1");
        Task task = manager.getTaskById(1);
        assertEquals("Task1", task.getTitle());
    }

    @Test
    void testMarkTaskCompleted() {
        manager.addTask("Task1", "Desc1");
        manager.markTaskCompleted(1);
        assertTrue(manager.getTaskById(1).isCompleted());
    }

    @Test
    void testRemoveTask() {
        manager.addTask("Task1", "Desc1");
        assertEquals(1, manager.getTasks().size());
        manager.removeTask(1);
        assertEquals(0, manager.getTasks().size());
    }

    @Test
    void testGetTaskByIdThrowsException() {
        assertThrows(TaskNotFoundException.class, () -> manager.getTaskById(999));
    }

    @Test
    void testRemoveTaskThrowsException() {
        assertThrows(TaskNotFoundException.class, () -> manager.removeTask(999));
    }

    @Test
    void testMarkTaskCompletedThrowsException() {
        assertThrows(TaskNotFoundException.class, () -> manager.markTaskCompleted(999));
    }
} 