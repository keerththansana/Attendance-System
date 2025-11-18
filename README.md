# Attendance System – Server

This directory contains the **backend server** for the Attendance System project.  
It provides APIs for user management, classes, attendance tracking, and reporting.

---

## 📌 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the Server](#running-the-server)
- [API Endpoints](#api-endpoints)
- [Database Models](#database-models)
- [Contributing](#contributing)
- [License](#license)

---

## 📖 Overview

The **Attendance System Server** handles backend operations such as:

- Authentication  
- Class & user management  
- Attendance creation and retrieval  
- Secure API communication for the frontend  

---

## ⭐ Features

- 🔐 JWT-based Authentication  
- 👨‍🏫 Teacher & Student Roles  
- 🏫 Class & Section Management  
- 🗒 Attendance Recording  
- 📊 Attendance Report Retrieval  
- 📡 RESTful API Architecture  

---

## 💻 Tech Stack

| Layer | Technology |
|-------|------------|
| Runtime | Node.js |
| Backend Framework | Express.js |
| Database | (MongoDB / MySQL / PostgreSQL – update accordingly) |
| Authentication | JSON Web Tokens (JWT) |
| Additional Tools | Middleware, CORS, dotenv, etc. |

---

## 📁 Project Structure

server/
│── controllers/ # Request handlers
│── models/ # Database models
│── routes/ # API route definitions
│── middleware/ # Auth, validation, etc.
│── config/ # Database and environment config
│── utils/ # Helper functions
│── index.js # Server entry point
│── package.json
│── .env.example


---

## 🚀 Getting Started

### ✅ Prerequisites

Make sure the following are installed:

- Node.js (v14+ recommended)
- npm or yarn
- A running database service (MongoDB/MySQL/etc.)

---

## 📦 Installation

```bash
cd server
npm install
```

## Or|

```bash
yarn install
```


🔐 Environment Variables

Create a .env file by copying:

```bash
cp .env.example .env
```

Add and configure the required variables:

```ini
PORT=5000
DB_HOST=your_host
DB_NAME=your_db_name
DB_USER=your_username
DB_PASS=your_password
JWT_SECRET=your_secret_key
```

## ▶ Running the Server

Development Mode:
```bash
npm run dev
```

Production Mode:
```bash
npm start
```

The server will start on:
```bash
http://localhost:PORT/
```

## 🛠 API Endpoints

| Method | Endpoint                    | Description             |
| ------ | --------------------------- | ----------------------- |
| POST   | `/api/auth/register`        | Register new user       |
| POST   | `/api/auth/login`           | Login and receive token |
| GET    | `/api/users/me`             | Get logged-in user info |
| POST   | `/api/classes`              | Create a class/section  |
| GET    | `/api/classes/:id`          | Get class details       |
| POST   | `/api/attendance/mark`      | Mark attendance         |
| GET    | `/api/attendance/class/:id` | View class attendance   |

Update this list based on your actual routes.

## 🗂 Database Models
User
id
name
email
passwordHash
role (teacher/student)

## Class
id
title
teacherId
studentIds
AttendanceSession
id
classId
date
sessionName

## AttendanceRecord
sessionId
studentId
status (present/absent)

## 🤝 Contributing
Contributions are welcome!
1. Fork the project
2. Create a new branch
3. Commit your changes
4. Submit a pull request

## 📜 License
This project is licensed under the MIT License.
See the main project LICENSE file for details.

## 👤 Author
keerththansana
GitHub: https://github.com/keerththansana
