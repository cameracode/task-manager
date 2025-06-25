package main.java.com.example.taskmanager;
import java.util.Scanner;

/**
 * Entry point for the Task Manager application.
 * Provides a console-based user interface to manage tasks.
 */
public class TaskManagerApp {
    /**
     * The main method that runs the Task Manager application.
     * Displays a menu and processes user input to manage tasks.
     *
     * @param args Command-line arguments (not used).
     */
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        TaskManager manager = new TaskManager();

        while (true) {
            System.out.println("1. Add Task");
            System.out.println("2. List Tasks");
            System.out.println("3. Complete Task");
            System.out.println("4. Remove Task");
            System.out.println("5. Exit");
            System.out.print("Choose an option: ");
            int choice = Integer.parseInt(scanner.nextLine());

            switch (choice) {
                case 1:
                    // Add Task
                    System.out.print("Enter task title: ");
                    String title = scanner.nextLine();
                    System.out.print("Enter task description: ");
                    String description = scanner.nextLine();
                    manager.addTask(title, description);
                    System.out.println("Task added.");
                    break;
                case 2:
                    // List Tasks
                    System.out.println("Tasks:");
                    for (Task task : manager.getTasks()) {
                        System.out.printf("ID: %d | Title: %s | Description: %s | Completed: %s%n",
                            task.getId(), task.getTitle(), task.getDescription(), task.isCompleted() ? "Yes" : "No");
                    }
                    break;
                case 3:
                    // Complete Task
                    System.out.print("Enter task ID to mark as completed: ");
                    int completeId = Integer.parseInt(scanner.nextLine());
                    if (manager.markTaskCompleted(completeId)) {
                        System.out.println("Task marked as completed.");
                    } else {
                        System.out.println("Task not found.");
                    }
                    break;
                case 4:
                    // Remove Task
                    System.out.print("Enter task ID to remove: ");
                    int removeId = Integer.parseInt(scanner.nextLine());
                    if (manager.removeTask(removeId)) {
                        System.out.println("Task removed.");
                    } else {
                        System.out.println("Task not found.");
                    }
                    break;
                case 5:
                    scanner.close();
                    System.exit(0);
            }
        }
    }
}
