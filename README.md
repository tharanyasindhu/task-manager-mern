# Task Management Dashboard (MERN Stack)

A full-stack task management dashboard built with **MongoDB, Express, React, and Node.js (MERN)**. Users can register, log in, and manage tasks with status, priority, and due dates, all tracked on a dashboard with live stats.

## Features
- JWT-based authentication (register/login)
- Create, read, update, delete tasks
- Filter tasks by status (To Do / In Progress / Completed)
- Dashboard stat cards (total, todo, in-progress, completed)
- Responsive UI built with Tailwind CSS

## Tech Stack
| Layer | Tech |
|---|---|
| Frontend | React 18, Vite, React Router, Tailwind CSS, Axios |
| Backend | Node.js, Express, JWT, bcryptjs |
| Database | MongoDB with Mongoose |

## Project Structure
```
task-manager-mern/
├── backend/
│   ├── config/db.js
│   ├── middleware/auth.js
│   ├── models/User.js
│   ├── models/Task.js
│   ├── routes/auth.js
│   ├── routes/tasks.js
│   ├── server.js
│   ├── .env.example
│   └── package.json
└── frontend/
    ├── src/
    │   ├── api/axios.js
    │   ├── context/AuthContext.jsx
    │   ├── components/ (Navbar, TaskForm, TaskList, TaskItem)
    │   ├── pages/ (Login, Register, Dashboard)
    │   ├── App.jsx
    │   └── main.jsx
    ├── index.html
    ├── .env.example
    └── package.json
```

---

## 1. Prerequisites

- [Node.js](https://nodejs.org/) (v18+) and npm installed
- [MongoDB](https://www.mongodb.com/try/download/community) installed locally, OR a free [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) cluster
- [IntelliJ IDEA Community Edition](https://www.jetbrains.com/idea/download/) installed
- A GitHub account
- [Git](https://git-scm.com/downloads) installed

---

## 2. Set Up the Project in IntelliJ IDEA CE

IntelliJ IDEA CE doesn't have built-in Node.js run configurations like the Ultimate edition, but it's a great editor for this project — you'll run npm commands via IntelliJ's integrated **Terminal**.

1. **Open IntelliJ IDEA CE** → `File > Open` → select the `task-manager-mern` folder (once you've downloaded/extracted it).
2. IntelliJ will index the project. If prompted to install the Node.js plugin, accept it (`Settings > Plugins > Marketplace > search "Node.js"` if it doesn't prompt automatically) — this gives you syntax highlighting and npm integration.
3. Open the integrated terminal: `View > Tool Windows > Terminal` (or `Alt+F12`).

### Backend setup (in the Terminal)
```bash
cd backend
npm install
cp .env.example .env
```
Open `.env` and set your values:
```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/taskmanager
JWT_SECRET=<put a long random string here>
JWT_EXPIRE=7d
```
> If using MongoDB Atlas instead of a local install, paste your Atlas connection string as `MONGO_URI`.

Start the backend:
```bash
npm run dev
```
You should see `MongoDB connected` and `Server running on port 5000`.

### Frontend setup (open a **second** terminal tab in IntelliJ)
```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```
Vite will start the frontend at `http://localhost:5173`. Open that URL in your browser — you should see the Login page.

### Try it out
1. Go to `http://localhost:5173/register` and create an account.
2. You'll be redirected to the dashboard.
3. Add a few tasks, change their status, edit, and delete them — watch the stat cards update.

---

## 3. Push the Project to GitHub

### Option A: Create the repo on GitHub first, then clone it
1. On [github.com](https://github.com), click **New repository**, name it e.g. `task-manager-mern`, keep it empty (no README/gitignore), and click **Create repository**.
2. In IntelliJ's terminal, clone it into a separate folder and copy your project files in, OR (simpler) just initialize git directly inside your existing project folder — see Option B.

### Option B: Initialize git inside your existing project (recommended)
In the IntelliJ terminal, at the root of `task-manager-mern`:
```bash
git init
git add .
git commit -m "Initial commit: MERN task management dashboard"
git branch -M main
git remote add origin https://github.com/<your-username>/task-manager-mern.git
git push -u origin main
```
Replace `<your-username>` with your actual GitHub username, and make sure you've created the empty repo on GitHub first (Option A, step 1).

### Using IntelliJ's built-in Git UI instead of the terminal
1. `VCS > Enable Version Control Integration` → choose **Git**.
2. Right-click the project root → `Git > Add` to stage all files.
3. `Commit` (Ctrl+K) → write a message → Commit.
4. `Git > Push` (Ctrl+Shift+K) → IntelliJ will ask you to define a remote the first time — paste your GitHub repo URL.

### Important: don't commit your `.env` files
The included `.gitignore` already excludes `.env`, `node_modules/`, and build folders, so your JWT secret and DB credentials stay out of GitHub. Only `.env.example` (with placeholder values) gets committed — this is exactly what you want for a project submission.

---

## 4. What to Submit to ScholarX

Typically for a project submission like this, include:
- The **GitHub repo link** (make sure it's public, or invite the reviewer as a collaborator)
- A short **README** (this file already covers setup — you can trim it down)
- Optionally, a few **screenshots** of the login page and dashboard
- If required, a short **demo video** walking through register → add task → update status → delete

---

## 5. Next Steps / Ideas to Extend (optional, for extra credit)
- Add task search/sort by due date
- Add pagination for large task lists
- Add a "dark mode" toggle
- Deploy backend to Render/Railway and frontend to Vercel/Netlify, then use the live URL in your submission
