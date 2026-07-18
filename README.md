Intern ID: CITS1711
# 🏥 GG Hospitals - Hospital Management System

A modern Full Stack Hospital Management System built using the MERN Stack.

The project helps hospitals manage patients, appointments, doctors, billing, inventory, and more through a clean and responsive admin dashboard.

---

## ✨ Features

### ✅ Completed

- Modern Dashboard UI
- Patient Management (CRUD)
- Add Patient
- Update Patient
- Delete Patient
- Search Patients
- Toast Notifications
- Dark & Light Theme
- Responsive Sidebar
- Professional Navbar
- Confidential Module Protection
- MongoDB Atlas Integration
- REST API using Express.js

### 🚧 Coming Soon

- Doctors Management
- Appointments Management
- Billing System
- Pharmacy Management
- Laboratory Management
- Inventory Management
- Analytics Dashboard
- Reports
- Authentication & Authorization
- Role-Based Access Control
- Notifications
- Bed Management

---

# 🛠 Tech Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- React Router
- Axios
- Framer Motion
- Lucide React
- React Hot Toast

## Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

---

# 📂 Project Structure

```
GG-Hospitals/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── services/
│   │   └── main.jsx
│   │
│   ├── public/
│   └── package.json
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── seedPatients.js
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# 🚀 Installation

## 1 Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/gg-hospitals.git
```

## 2 Navigate

```bash
cd gg-hospitals
```

---

# Install Dependencies

## Backend

```bash
cd server
npm install
```

## Frontend

```bash
cd client
npm install
```

---

# Configure Environment Variables

Create a `.env` file inside the `server` folder.

```env
PORT=5000

MONGO_URI=YOUR_MONGODB_CONNECTION_STRING
```

---

# Run Backend

```bash
cd server
npm run dev
```

---

# Run Frontend

```bash
cd client
npm run dev
```

---

# API Endpoints

## Patients

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/patients` | Get All Patients |
| GET | `/api/patients/:id` | Get Single Patient |
| POST | `/api/patients` | Create Patient |
| PUT | `/api/patients/:id` | Update Patient |
| DELETE | `/api/patients/:id` | Delete Patient |
---

# Future Roadmap

- Doctors Module
- Appointments Module
- Billing
- Pharmacy
- Inventory
- Laboratory
- Analytics
- Reports
- Authentication
- Role-Based Access
- Email Notifications
- SMS Notifications
- PDF Reports

---

# Author

**Anshu**

---

# License

This project is licensed under the MIT License.

---

⭐ If you like this project, don't forget to star the repository.
