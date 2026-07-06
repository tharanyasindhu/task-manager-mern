# Task Management Dashboard (MERN Stacks)

## Project Overview

Task Management Dashboard is a full-stack web application developed using the MERN stack (MongoDB, Express.js, React.js, and Node.js).

The purpose of this project is to create a simple and efficient platform where users can create an account, log in securely, and manage their daily tasks from a personalized dashboard.

The application allows users to add, update, delete, and track tasks based on their progress. A dashboard view provides a quick overview of task statistics, helping users monitor completed and pending tasks easily.

This project was developed as part of my internship task to understand and implement full-stack application development using modern web technologies.

---

# Features

## User Authentication

* User registration and login functionality
* Secure password encryption using bcryptjs
* JWT-based authentication for protected routes
* User-specific task management

## Task Management

* Create new tasks
* View all created tasks
* Update task details
* Delete tasks
* Change task status:

  * To Do
  * In Progress
  * Completed

## Dashboard

* Displays task summary statistics:

  * Total tasks
  * Pending tasks
  * Tasks in progress
  * Completed tasks
* Real-time updates when tasks are modified

## User Interface

* Responsive design for different screen sizes
* Clean and simple dashboard layout
* Built using Tailwind CSS for styling

---

# Technologies Used

## Frontend

* React.js
* Vite
* React Router
* Axios
* Tailwind CSS

## Backend

* Node.js
* Express.js
* JWT Authentication
* bcryptjs

## Database

* MongoDB
* Mongoose

## Development Tools

* IntelliJ IDEA Community Edition
* Git & GitHub
* MongoDB Atlas / Local MongoDB

---

# Project Structure

```
task-manager-mern/

│
├── backend/
│   ├── config/
│   │   └── db.js
│   │
│   ├── middleware/
│   │   └── auth.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   └── Task.js
│   │
│   ├── routes/
│   │   ├── auth.js
│   │   └── tasks.js
│   │
│   ├── server.js
│   ├── .env.example
│   └── package.json
│
└── frontend/

    ├── src/
    │   ├── api/
    │   ├── components/
    │   ├── context/
    │   ├── pages/
    │   ├── App.jsx
    │   └── main.jsx
    │
    ├── .env.example
    └── package.json
```

---

# How I Developed This Project

## 1. Backend Development

I started by creating the backend using Node.js and Express.js.

The backend handles:

* User authentication
* Task APIs
* Database operations

I connected the application with MongoDB using Mongoose and created database models for:

### User Model

Stores:

* Username
* Email
* Encrypted password

### Task Model

Stores:

* Task title
* Description
* Status
* Priority
* Due date
* User reference

JWT authentication was implemented to protect task-related routes and ensure users can access only their own tasks.

---

## 2. Frontend Development

The frontend was developed using React.js with Vite.

I created different pages and components:

### Pages

* Login Page
* Register Page
* Dashboard Page

### Components

* Navigation Bar
* Task Form
* Task List
* Task Item

Axios was used to communicate between the React frontend and Express backend APIs.

React Router was implemented for page navigation, and Tailwind CSS was used to build a responsive user interface.

---

# Running the Project Locally

## Prerequisites

Make sure you have:

* Node.js installed
* npm installed
* MongoDB installed or MongoDB Atlas account
* Git installed

---

# Backend Setup

Navigate to the backend folder:

```
cd backend
```

Install dependencies:

```
npm install
```

Create a `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
JWT_EXPIRE=7d
```

Start the backend server:

```
npm run dev
```

The backend will run on:

```
http://localhost:5000
```

---

# Frontend Setup

Open another terminal and navigate to frontend:

```
cd frontend
```

Install dependencies:

```
npm install
```

Create a `.env` file:

```
VITE_API_URL=http://localhost:5000
```

Start the React application:

```
npm run dev
```

The frontend will run on:

```
http://localhost:5173
```

---

# Application Workflow

1. User creates an account through the registration page.
2. User logs in using their credentials.
3. JWT authentication verifies the user.
4. User is redirected to the dashboard.
5. User can:

   * Add tasks
   * Update task status
   * Edit task details
   * Delete completed or unwanted tasks
6. Dashboard statistics update automatically based on task changes.

---

# GitHub Upload

The project was uploaded to GitHub using Git version control.

Steps followed:

```
git init

git add .

git commit -m "Initial commit: MERN task management dashboard"

git branch -M main

git remote add origin <repository-url>

git push -u origin main
```

Sensitive files such as `.env` and `node_modules` are excluded using `.gitignore`.

---

# Future Improvements

Some features that can be added in future:

* Task search functionality
* Sorting tasks based on due date
* Dark mode support
* Task notifications
* Deploying frontend and backend online

---

# Project Outcome

Through this project, I gained practical experience in:

* Building a complete MERN stack application
* Creating REST APIs
* Implementing authentication
* Connecting frontend and backend
* Working with MongoDB databases
* Managing projects using Git and GitHub

This project helped me understand the complete workflow of developing and deploying a full-stack web application.
