# 🔐 Emoji-Based Password Authentication System (MERN + Appwrite)

## 📌 Project Overview

The **Emoji-Based Password Authentication System** is a web application built using a modern **MERN-based frontend** with **Appwrite as the Backend-as-a-Service (BaaS)**.
The application introduces an alternative authentication mechanism where users create and log in using **emoji-based passwords** instead of traditional text-based passwords.

The system focuses on improving **usability, memorability, and user satisfaction** by leveraging **visual recognition** and **culturally familiar emojis**.
This project is inspired by **Human–Computer Interaction (HCI)** research and demonstrates how culturally relevant visual elements can enhance authentication experiences.

---

## 🎯 Objectives

* Replace traditional text-based passwords with **emoji-based authentication**
* Improve **login success rate** and **task completion time**
* Reduce **authentication errors**
* Enhance **user satisfaction and usability**
* Utilize **Appwrite** for secure and scalable backend services
* Implement a **research-backed, usability-focused design**

---

## 🧠 Key Features

* 👤 User registration and login using emoji-based passwords
* 😀 Emoji selection grid for password creation
* 🔁 Emoji sequence-based authentication
* 🌍 Support for culturally familiar emoji sets
* 📊 Usability metrics tracking (login time, errors – optional extension)
* 🔐 Secure authentication using Appwrite services
* 📱 Fully responsive UI

---

## 🛠️ Tech Stack

### Frontend (MERN – Frontend Only)

* **React.js** – User interface development
* **HTML5** – Structure
* **CSS3** – Styling and layout
* **JavaScript (ES6+)** – Client-side logic

### Backend (Appwrite – BaaS)

* **Appwrite Authentication** – User management & login
* **Appwrite Database** – Emoji password storage
* **Appwrite Functions** – Server-side logic (if required)
* **Appwrite Security Rules** – Data access control

### Database

* **Appwrite Database** (NoSQL-style collections & documents)

### Authentication & Security

* Emoji sequence hashing / transformation
* Secure session-based authentication
* Environment variables using `.env`
* Input validation and error handling

### Development Tools

* **VS Code**
* **Appwrite Console**
* **Git & GitHub**
* **Postman (optional for testing APIs)**

---

## 🧩 System Architecture

```
Client (React)
   ↓
Appwrite SDK
   ↓
Appwrite Services
(Authentication + Database)
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/abdullahbutt09/emoji-auth
cd emoji-auth
```

---

### 2️⃣ Appwrite Setup

1. Install and run **Appwrite** (cloud or self-hosted)
2. Create a new **Project** in Appwrite
3. Enable:

   * Authentication
   * Database
4. Create:

   * A **Database**
   * A **Collection** for emoji passwords
5. Configure permissions for authenticated users

---

### 3️⃣ Frontend Setup

```bash
cd client
npm install
```

Create a `.env` file in the client folder:

```env
VITE_APPWRITE_URL=your_appwrite_endpoint
VITE_APPWRITE_PROJECT_ID=your_project_id
```

Run the frontend:

```bash
npm run dev
```

The application will run on:

```
http://localhost:3000
```

---

## 🧪 How It Works

### 1️⃣ User Registration

* User selects a sequence of emojis as a password
* Emoji sequence is processed and stored securely in Appwrite Database
* Appwrite Authentication manages the user account

### 2️⃣ User Login

* User re-enters the same emoji sequence
* The system validates the emoji order and sequence
* Appwrite verifies the session and grants access

### 3️⃣ Authentication Result

* ✅ Successful login if emojis match
* ❌ Error message if incorrect sequence is entered

---

## 📊 Usability Focus

This application is designed based on **HCI usability principles**, including:

* Reduced cognitive load
* Visual recognition instead of text recall
* Cultural familiarity for better memorability
* Faster authentication with fewer errors

The system can be extended to measure:

* Login success rate
* Task completion time
* Error rate
* User satisfaction (System Usability Scale – SUS)

---

## 🚀 Future Enhancements

* 🔐 Multi-factor authentication (Emoji + OTP)
* 🎨 User-customizable emoji sets
* 📱 Mobile application (React Native)
* 🧠 AI-based emoji recommendations
* 🕒 Long-term memorability analysis
* 🌐 Multi-language & cultural adaptation
* 📊 Admin dashboard for usability analytics

---

## 📚 Academic Relevance

This project contributes to research in:

* Human–Computer Interaction (HCI)
* Usability Engineering
* Secure Authentication Systems
* Visual & Graphical Passwords
* Cultural Computing

---

## 👨‍💻 Development Team

* **Muhammad Ahmad Pasha**
* **Muhammad Abdullah Butt**
* **Muhammad Usman**
* **Muhammad Abu Sufyan**

---

## 📜 License

This project is developed for **educational and research purposes**.
You are free to use, modify, and extend it with proper attribution.