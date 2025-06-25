package com.example.taskmanager;

import com.example.taskmanager.exception.TaskNotFoundException;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import java.util.Arrays;

/**
 * Web layer tests for TaskController.
 */
@WebMvcTest(TaskController.class)
public class TaskControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private TaskManager manager;

    @Test
    void testGetTasks() throws Exception {
        when(manager.getTasks()).thenReturn(Arrays.asList(new Task(1, "A", "B", false)));
        mockMvc.perform(get("/api/tasks"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].title").value("A"));
    }

    @Test
    void testAddTask() throws Exception {
        mockMvc.perform(post("/api/tasks")
                .contentType(MediaType.APPLICATION_JSON)
                .content("{\"title\":\"A\",\"description\":\"B\"}"))
                .andExpect(status().isOk());
        verify(manager).addTask("A", "B");
    }

    @Test
    void testCompleteTaskNotFound() throws Exception {
        doThrow(new TaskNotFoundException("not found")).when(manager).markTaskCompleted(99);
        mockMvc.perform(put("/api/tasks/99/complete"))
                .andExpect(status().isNotFound())
                .andExpect(content().string("not found"));
    }

    @Test
    void testRemoveTaskNotFound() throws Exception {
        doThrow(new TaskNotFoundException("not found")).when(manager).removeTask(99);
        mockMvc.perform(delete("/api/tasks/99"))
                .andExpect(status().isNotFound())
                .andExpect(content().string("not found"));
    }
} 