# TaskManager

A full-stack Task Manager application with a Java Spring Boot REST API backend and a React + Tailwind CSS frontend.

---

## Features
- Add, list, complete, and remove tasks
- RESTful API (Spring Boot)
- Modern React frontend with Tailwind CSS styling
- **Interactive API documentation with Swagger/OpenAPI**
- **Comprehensive unit and web layer tests with JUnit and Spring Boot Test**

---

## Backend: Java Spring Boot

### Requirements
- Java 17+
- Maven

### Setup & Run
```sh
# In the project root
mvn spring-boot:run
```
The API will be available at: `http://localhost:8080/api/tasks`

### API Endpoints
| Method | Endpoint                        | Description                |
|--------|----------------------------------|----------------------------|
| GET    | `/api/tasks`                    | List all tasks             |
| POST   | `/api/tasks`                    | Add a new task             |
| PUT    | `/api/tasks/{id}/complete`      | Mark a task as complete    |
| DELETE | `/api/tasks/{id}`               | Remove a task              |

#### Example POST Body
```json
{
  "title": "My Task",
  "description": "Details"
}
```

---

## Testing

### Test File Location
- All test files should be placed in `src/test/java/com/example/taskmanager/`.
- Example test files:
  - `src/test/java/com/example/taskmanager/TaskManagerTest.java`
  - `src/test/java/com/example/taskmanager/TaskControllerTest.java`

### Running Tests
To run all tests:
```sh
mvn clean test
```
Maven will automatically find and run all tests in the `src/test/java` directory.

### Testing Best Practices
- Use JUnit 5 for unit and integration tests.
- Use Spring Boot's `@WebMvcTest` for controller (web layer) tests.
- Keep test files out of `src/main/java` to avoid build errors and ensure proper test discovery.

---

## Swagger/OpenAPI Documentation

- Interactive API docs available at: `http://localhost:8080/swagger-ui.html`
- To enable, ensure the following dependency is in your `pom.xml`:
  ```xml
  <dependency>
    <groupId>org.springdoc</groupId>
    <artifactId>springdoc-openapi-starter-webmvc-ui</artifactId>
    <version>2.5.0</version>
  </dependency>
  ```

---

## Frontend: React + Tailwind CSS

### Setup & Run
```sh
# In the frontend directory
npm install
npm start
```
The frontend will be available at: `http://localhost:3000`

### Tailwind CSS
Tailwind is already configured in `taskmanager-frontend`. Use utility classes in your React components for styling.

---

## Development Notes
- Follow standard Maven project structure for best compatibility.
- Use environment variables and `.env` files for configuration when needed.
- PRs and issues are welcome!

---

## Postman Collection
A sample Postman collection is available (see `taskManager-postman.json`, if not in .gitignore).

---

## License
MIT
