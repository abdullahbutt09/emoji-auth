# 🔐 Emoji-Based Password Authentication System (MERN Stack)

## 📌 Project Overview

The **Emoji-Based Password Authentication System** is a web application developed using the **MERN stack** that introduces an alternative authentication mechanism using emojis instead of traditional text-based passwords.

The system focuses on improving **usability, memorability, and user satisfaction** by allowing users to create and authenticate using **emoji sequences**, with special emphasis on **culturally familiar emojis**.

This project is inspired by Human–Computer Interaction (HCI) research and aims to demonstrate how culturally relevant visual elements can enhance the overall user authentication experience.

---

## 🎯 Objectives

* Replace traditional text-based passwords with **emoji-based passwords**
* Improve **login success rate** and **task completion time**
* Reduce **authentication errors**
* Enhance **user satisfaction and usability**
* Provide a **secure and user-friendly authentication system**
* Implement a **research-backed usability-focused design**

---

## 🧠 Key Features

* 👤 User registration and login using emoji-based passwords
* 😀 Emoji selection grid for password creation
* 🔁 Emoji sequence-based authentication
* 🌍 Support for culturally familiar emoji sets
* 📊 Usability metrics tracking (login time, errors)
* 🔐 Secure password handling on the backend
* 📱 Responsive UI design

---

## 🛠️ Tech Stack (MERN)

### Frontend

* **React.js** – User interface development
* **HTML5** – Structure
* **CSS3** – Styling and layout
* **JavaScript (ES6+)** – Client-side logic

### Backend

* **Node.js** – Server-side runtime
* **Express.js** – Backend framework
* **REST API** – Communication between frontend and backend

### Database

* **MongoDB** – NoSQL database
* **Mongoose** – Object Data Modeling (ODM)

### Authentication & Security

* Emoji sequence hashing
* Environment variables using `.env`
* Input validation and error handling

### Development Tools

* **VS Code**
* **Postman**
* **Git & GitHub**
* **MongoDB Compass**

---

## 🧩 System Architecture

```
Client (React)
   ↓
REST API (Express + Node.js)
   ↓
Database (MongoDB)
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/abdullahbutt09/emoji-auth
cd emoji-auth
```

---

### 2️⃣ Backend Setup

```bash
cd server
npm install
```

Create a `.env` file in the backend folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Run the backend server:

```bash
npm run dev
```

---

### 3️⃣ Frontend Setup

```bash
cd client
npm install
npm run dev
```

The application will run on:

```
http://localhost:3000
```

---

## 🧪 How It Works

1. **User Registration**

   * User selects a sequence of emojis as a password
   * Emoji sequence is securely stored in the database

2. **User Login**

   * User re-enters the same emoji sequence
   * System validates the emoji order and sequence

3. **Authentication Result**

   * Successful login if emojis match
   * Error message if incorrect sequence is entered

---

## 📊 Usability Focus

This application is designed based on **HCI usability principles**, including:

* Reduced cognitive load
* Visual recognition over text recall
* Cultural familiarity for better memorability
* Faster authentication with fewer errors

The system can be extended to measure:

* Login success rate
* Task completion time
* Error rate
* User satisfaction (SUS)

---

## 🚀 Future Enhancements

* 🔐 Multi-factor authentication (Emoji + OTP)
* 🎨 Custom emoji sets per user
* 📱 Mobile app version (React Native)
* 🧠 AI-based emoji recommendations
* 🕒 Long-term memorability analysis
* 🌐 Multi-language & cultural support

---

## 📚 Academic Relevance

This project supports research in:

* Human–Computer Interaction (HCI)
* Usability Engineering
* Authentication Systems
* Visual & Graphical Passwords
* Cultural Computing

---

## 👨‍💻 Developers Team Managing

**Muhammad Ahmad Pasha**
**Muhammad Abdullah Butt**
**Muhammad Usman**
**Muhammad Abu Sufyan**

---

## 📜 License

This project is developed for **educational and research purposes**.
You are free to use and modify it with proper attribution.