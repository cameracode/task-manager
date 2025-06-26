# TaskManager

A full-stack Task Manager application with a Java Spring Boot REST API backend and a **Next.js + TypeScript + Tailwind CSS v4** frontend.

---

## Features
- Add, list, complete, and remove tasks
- RESTful API (Spring Boot)
- Modern **Next.js** frontend with **TypeScript** and **Tailwind CSS v4** styling
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

## Frontend: Next.js + TypeScript + Tailwind CSS v4

### Requirements
- Node.js 18+
- npm (or yarn)

### Setup & Run
```sh
# In the frontend directory
npm install
npm run dev
```
The frontend will be available at: `http://localhost:3000`

### Project Structure
- Uses the Next.js **App Router** (`src/app/`)
- TypeScript for type safety
- Tailwind CSS v4 for utility-first styling
- Place static assets in `frontend/public/`
- Place global styles in `src/styles/globals.css`

### Tailwind CSS
Tailwind is already configured. Use utility classes in your React components for styling. The config files are:
- `tailwind.config.js`
- `postcss.config.js`

### Development Notes
- Use the `src/api/` folder for API utilities to connect to the backend.
- Use the `src/components/` folder for React components.
- Use the `src/types/` folder for TypeScript types (e.g., `Task`).
- Environment variables can be set in `.env.local`.

---

## Postman Collection
A sample Postman collection is available (see `taskManager-postman.json`, if not in .gitignore).

---

## License
MIT
