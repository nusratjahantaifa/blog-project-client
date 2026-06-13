# 📝 BlogSphere - Full Stack Blog Website

🔗 Live Site: 
🔗 Client Repo:
🔗 Server Repo:

---

## 🚀 Project Overview

BlogSphere is a full-stack blog platform where users can create, read, update, and interact with blogs. It includes authentication, wishlist functionality, comments, and advanced filtering features.

---

## ✨ Key Features

* 🔐 Firebase Authentication (Email/Password + Google Login)
* 📝 Add, Update, and View Blogs
* ❤️ Wishlist System (User-specific)
* 💬 Comment System (with user restriction)
* 🔎 Search Blogs using MongoDB Text Search
* 📊 Featured Blogs (Top 10 by word count)
* 🔄 Protected Routes with JWT Authentication
* ⚡ Data Fetching with TanStack Query
* 📱 Fully Responsive Design (Mobile, Tablet, Desktop)

---

## 🏗️ Technologies Used

### Frontend:

* React.js
* React Router
* TanStack Query
* Material UI / Tailwind CSS
* Firebase Authentication
* React Hot Toast

### Backend:

* Node.js
* Express.js
* MongoDB
* JWT Authentication
* CORS & dotenv

---

## 🔐 Authentication System

* Email & Password login
* Google Login
* JWT token generation
* Protected routes (wishlist, update blog)

---

## 📂 API Endpoints

### Blogs

* GET /blogs
* POST /blogs
* GET /blogs/:id
* PUT /blogs/:id

### Wishlist

* POST /wishlist
* GET /wishlist/:email
* DELETE /wishlist/:id

### Comments

* POST /comments
* GET /comments/:blogId

### Auth

* POST /jwt

---

## ⚙️ Environment Variables

### Client (.env)

VITE_API_URL=http://localhost:5000

### Server (.env)

MONGO_URI=
JWT_SECRET=

---

## 📦 Installation

### Clone the repositories

```bash
git clone https://github.com/your-username/blog-project-client.git
git clone https://github.com/your-username/blog-project-server.git
```

### Install dependencies

```bash
npm install
```

### Run client

```bash
npm run dev
```

### Run server

```bash
nodemon index.js
```

---

## 📌 Important Notes

* Do not expose Firebase config or MongoDB URI
* Use environment variables
* Use JWT for protected routes
* Use TanStack Query instead of useEffect

---

## 👩‍💻 Author

* Name: Nusrat Jahan Taifa
* GitHub: https://github.com/nusratjahantaifa

---

## ⭐ Final Words

This project demonstrates full-stack development skills including authentication,
 database management, API integration, and responsive UI design.

✨ Thank you for visiting!
