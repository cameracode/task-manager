# TaskManager

A full-stack Task Manager application with a Java Spring Boot REST API backend and a React + Tailwind CSS frontend.

---

## Features
- Add, list, complete, and remove tasks
- RESTful API (Spring Boot)
- Modern React frontend with Tailwind CSS styling

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
| DELETE | `/api/tasks/{id}`               | Delete a task              |

#### Example POST Body
```json
{
  "title": "My Task",
  "description": "Details"
}
```

---

## Frontend: React + Tailwind CSS

### Setup & Run
```sh
# In a separate terminal, from the project root
cd taskmanager-frontend
npm install
npm start
```
The frontend will be available at: `http://localhost:3000`

### Tailwind CSS
Tailwind is already configured in `taskmanager-frontend`. Use utility classes in your React components for styling.

---

## Development
- Backend code: `src/main/java/com/example/taskmanager/`
- Frontend code: `taskmanager-frontend/src/`

---

## Postman Collection
A sample Postman collection is available (see `taskManager-postman.json`, if not in .gitignore).

---

## License
MIT
