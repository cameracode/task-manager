/**
 * Represents a task with an id, title, description, and completion status.
 */
public class Task {
    /** The unique identifier for the task. */
    private int id;
    /** The title of the task. */
    private String title;
    /** The description of the task. */
    private String description;
    /** Indicates whether the task is completed. */
    private boolean completed;

    /**
     * Constructs a new Task.
     * @param id The unique identifier for the task.
     * @param title The title of the task.
     * @param description The description of the task.
     * @param completed The completion status of the task.
     */
    public Task(int id, String title, String description, boolean completed) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.completed = completed;
    }

    /**
     * Gets the unique identifier for the task.
     * @return The task's id.
     */
    public int getId() { return id; }

    /**
     * Gets the title of the task.
     * @return The task's title.
     */
    public String getTitle() { return title; }

    /**
     * Gets the description of the task.
     * @return The task's description.
     */
    public String getDescription() { return description; }

    /**
     * Checks if the task is completed.
     * @return True if the task is completed, false otherwise.
     */
    public boolean isCompleted() { return completed; }

    /**
     * Sets the title of the task.
     * @param title The new title of the task.
     */
    public void setTitle(String title) { this.title = title; }

    /**
     * Sets the description of the task.
     * @param description The new description of the task.
     */
    public void setDescription(String description) { this.description = description; }

    /**
     * Sets the completion status of the task.
     * @param completed The new completion status.
     */
    public void setCompleted(boolean completed) { this.completed = completed; }
}