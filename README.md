# 🧾 Ticketing & Journaling App Backend

This is the backend server for a productivity application that provides ticketing, journaling, and note-taking capabilities. Built with **Node.js**, **Express**, and **MongoDB**, it supports full **CRUD operations** and is designed to integrate seamlessly with a frontend powered by **React**, **Redux**, and **Redux Thunk**.

---

## ⚙️ Features

- RESTful API for:
  - Creating, reading, updating, and deleting tickets/notes
- MongoDB database for persistent storage
- Express middleware for request handling and error management
- CORS-enabled and API-ready for frontend consumption
- Clean separation of concerns: routes, controllers, models

---

## 🧰 Tech Stack

- **Backend Framework:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **State Management (Frontend):** Redux, Redux Thunk
- **Dev Tools:** Nodemon, dotenv, Postman

---

## 🚀 Getting Started

### 1. Clone the Repository
git clone https://github.com/Louisa-Otoo/backend-redux-thunk.git
cd backend-redux-thunk

### 2. Install Dependencies
npm install

### 3. Set Up Environment Variables
Create a .env file in the root directory and add:

PORT=5000
MONGO_URI=your_mongo_connection_string

### 4. Start the Server
npm run dev
Server should run on: http://localhost:5000

## 🔐 API Endpoints
Method	Endpoint	Description	Auth Required
GET	/api/tickets	Get all tickets	No
POST	/api/ticket	Create a new ticket	No
PUT	/api/tickets/:id	Update a ticket	No
DELETE	/api/ticket/:id	Delete a ticket	No

🔄 Frontend Integration
This backend is built to connect with a React frontend that uses Redux and Redux Thunk for state management. The frontend handles state persistence, and secure API calls.

📌 Notes
Easily adaptable for journaling apps, ticketing systems, or note-taking tools.
