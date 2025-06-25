# TaskManager

A full-stack Task Manager application with a Java Spring Boot REST API backend and a React + Tailwind CSS frontend.

---

## Features
- Add, list, complete, and remove tasks
- RESTful API (Spring Boot)
- Modern React frontend with Tailwind CSS styling
- **Interactive API documentation with Swagger/OpenAPI**

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

## API Documentation: Swagger / OpenAPI

This project uses [Swagger UI](https://swagger.io/tools/swagger-ui/) via [springdoc-openapi](https://springdoc.org/) for interactive API documentation.

### Installation
Add the following dependency to your `pom.xml`:
```xml
<dependency>
  <groupId>org.springdoc</groupId>
  <artifactId>springdoc-openapi-starter-webmvc-ui</artifactId>
  <version>2.5.0</version>
</dependency>
```

### Usage
After starting the backend, access the Swagger UI at:
- [http://localhost:8080/swagger-ui.html](http://localhost:8080/swagger-ui.html)
- or [http://localhost:8080/swagger-ui/index.html](http://localhost:8080/swagger-ui/index.html)

You can view and test all API endpoints directly from the browser.

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
