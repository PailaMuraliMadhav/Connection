# 👥 Connection App

A simple MERN (MongoDB-Express-React-Node) app that fetches and displays user data using a fake API. The frontend is deployed on **Vercel**, and the backend is deployed on **Render**.

---

## 🚀 Features

- Fetches user data from a Node.js + Express backend
- Styled React frontend using Tailwind CSS
- Environment variables for flexible API endpoints
- Deployed on free cloud platforms (Render + Vercel)
- CORS configured for secure cross-origin communication

---

## 🛠️ Tech Stack

**Frontend**:
- React (Vite)
- Tailwind CSS
- Axios

**Backend**:
- Node.js
- Express
- CORS
- dotenv

**Hosting**:
- Frontend: [Vercel](https://vercel.com/)
- Backend: [Render](https://render.com/)

---

## 📂 Folder Structure

```
connection-app/
├── Backend/
│   ├── index.js
│   ├── user.js
│   └── .env
└── Frontend/
    ├── src/
    │   └── App.jsx
    ├── .env
    └── vite.config.js
```

---

## 🌐 Live Demo

- 🔗 Frontend: [https://connection13.vercel.app](https://connection13.vercel.app)
- 🔗 Backend: [https://connection-pgqq.onrender.com/users](https://connection-pgqq.onrender.com/users)

---

## 📦 Backend Setup

```bash
cd Backend
npm init -y
npm install express cors dotenv
npm install -g nodemon
```

**index.js**:

```js
import express from "express";
import cors from "cors";
import "dotenv/config";
import { users } from "./user.js";

const app = express();

app.use(cors({ origin: "*" }));

app.get("/", (req, res) => res.send("PSPK"));
app.get("/users", (req, res) => res.send(users));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
```

**users.js**:

```js
export const users = [
  { id: 1, name: "Pawan Kalyan", email: "pk@powerstar.com" },
  { id: 2, name: "Ram Charan", email: "rc@mega.com" },
];
```

**.env**:

```env
PORT=8000
```

**package.json script**:

```json
"type": "module",
"scripts": {
  "start": "nodemon index.js"
}
```

---

## 💻 Frontend Setup

```bash
cd Frontend
npm create vite@latest .
npm install
npm install axios
```

**.env**:

```env
VITE_BACKEND_URL=https://connection-pgqq.onrender.com
```

**App.jsx**:

```jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/users`);
        setUsers(response.data);
      } catch (err) {
        console.error("Failed to fetch users", err);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-100 to-white p-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-red-700 mb-6">HAHAHAHAHAHHAHA</h1>
        <p className="text-lg text-gray-700">Total Users: {users.length}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {users.map((user) => (
            <div key={user.id} className="bg-white p-6 rounded-xl shadow border border-red-200">
              <h2 className="text-xl font-bold text-red-600">{user.name}</h2>
              <p className="text-gray-600">📧 {user.email}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
```

---

## 🔐 Environment Variables

| Variable           | Location    | Description                  |
|-------------------|-------------|------------------------------|
| `PORT`            | Backend     | Port number for Express      |
| `VITE_BACKEND_URL`| Frontend    | Backend URL for API requests |

---

## ☁️ Deployment Steps

### 🔸 Backend on Render
1. Push backend code to GitHub
2. Go to [Render](https://render.com)
3. Click **"New Web Service"**
4. Connect your repo, set:
   - Start command: `npm start`
   - Root directory: `Backend`
5. Deploy

### 🔸 Frontend on Vercel
1. Push frontend code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click **"New Project"**
4. Select the repo
5. Set environment variable:
   - `VITE_BACKEND_URL=https://your-backend.onrender.com`
6. Deploy

---

## 🙌 Acknowledgements

- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) — for fake user API inspiration
- Render & Vercel — Free hosting platforms

---

## 📬 Contact

Feel free to reach out if you need help deploying, adding features, or expanding this project!  
Made with ❤️ by Murali.