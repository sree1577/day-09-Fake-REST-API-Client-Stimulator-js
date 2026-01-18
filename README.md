🧪 Fake REST API Client Simulator

An interactive, beginner-friendly REST API simulator that visually demonstrates how HTTP-based APIs work using simulated requests and responses.

This project is part of **Day 9 – 30 Days 30 Projects Challenge** and is designed to help learners understand real-world API behavior without using a backend.

---

## 🎯 Objective

To understand and practice:
- REST architecture principles
- HTTP methods (GET, POST, PUT, DELETE)
- HTTP status codes
- Request–response lifecycle
- Client-side API simulation
- Error handling and validation

No real backend or database is used.

---

## 🚀 Features

- Simulated REST API behavior
- Supports HTTP methods:
  - GET
  - POST
  - PUT
  - DELETE
- Resource-based endpoints (`/users`, `/users/{id}`)
- Realistic HTTP status codes:
  - 200 OK
  - 201 Created
  - 204 No Content
  - 400 Bad Request
  - 404 Not Found
- JSON request & response handling
- Automatic request body enable/disable based on method
- Interactive endpoint helper buttons
- Request history with timestamps
- Copy response to clipboard
- Reset workspace functionality
- Clean, light, and user-friendly UI
- Beginner-friendly explanations of REST flow

---

## 🛠️ Tech Stack

- HTML
- CSS
- JavaScript (ES6)

---

## 🔗 Supported Endpoints

| Endpoint        | Method  | Description                  |
|-----------------|---------|------------------------------|
| `/users`        | GET     | Returns list of users        |
| `/users`        | POST    | Creates a new user           |
| `/users/{id}`   | PUT     | Updates an existing user     |
| `/users/{id}`   | DELETE  | Deletes a user               |
| Invalid endpoint| Any     | 404 Not Found                |

---

## 🔄 Request–Response Cycle

1. Client sends HTTP request
2. API validates method and endpoint
3. Business logic is executed
4. HTTP status code is generated
5. JSON response is returned
6. Client displays formatted response

This flow closely mimics real REST API behavior.

---

## 📂 Project Structure

fake-rest-client/
│
├── index.html
├── style.css
├── script.js
└── README.md

---

## ▶️ How to Run

1. Download or clone the repository
2. Open `index.html` in any modern browser
3. Select HTTP method and endpoint
4. (Optional) Enter JSON body for POST / PUT
5. Click **Send Request**

No server setup or installation is required.

---

## 🌱 Future Enhancements

- Request headers editor
- Authentication token simulation
- Save and replay requests
- Export response as JSON
- Dark / Light theme toggle
- Persist data using browser storage
- Convert to React-based UI

---

## 🎓 Learning Outcomes

- Clear understanding of REST APIs and HTTP methods
- Hands-on experience with status codes and API errors
- Improved grasp of request–response lifecycle
- Building interactive developer-focused tools
- Writing clean, modular, and readable JavaScript
- Designing user-friendly technical interfaces
