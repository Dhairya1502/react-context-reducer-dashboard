# 🚀 React Experiment 4 – State Management Dashboard

## 👨‍💻 Student Details
**Name:** Dhairya Sharma  
**UID:** 23BAI70388  
**Experiment:** 4  
**Subject:** React.js  

---

## 📌 Project Overview

This project extends the previous experiment and demonstrates advanced React concepts such as:

- Context API (Global State Management)
- useReducer (Structured State Handling)
- useMemo (Performance Optimization)
- React Router (Multi-Page Navigation)

The application is designed as a modern Task Analytics Dashboard with a clean UI, responsive layout, and smooth user experience.

---

## 🎯 Objectives Achieved

✔ Implement global state using Context API  
✔ Manage complex state updates using useReducer  
✔ Optimize derived values using useMemo  
✔ Create multi-page navigation using React Router  
✔ Maintain clean and responsive UI structure  

---

## 🧠 Features Implemented

### 🌍 1. Global State Management (Context API)
- Centralized AppContext
- Global theme (Light/Dark mode)
- Shared task data across components

### ⚙ 2. Structured State Updates (useReducer)
Reducer handles:
- ADD_TASK
- TOGGLE_TASK
- DELETE_TASK

Provides clean and scalable state management.

### 🚀 3. Performance Optimization (useMemo)
- Memoized completed task count
- Memoized completion percentage
- Prevents unnecessary re-renders

### 🧭 4. Multi-Page Navigation (React Router)
Pages included:
- Home
- Projects
- Analytics (Experiment 4 implementation)

---

## 📊 Analytics Dashboard

The Analytics page allows users to:

- Add new tasks
- Mark tasks as completed
- Delete tasks
- View total completed tasks
- View real-time completion percentage
- See progress bar updates dynamically

All updates happen instantly using reducer logic and optimized memoization.

---

## 🎨 UI & Design Highlights

- Clean and modern layout
- Soft gradient background
- Card-based structure
- Proper spacing and alignment
- Responsive for mobile and desktop
- Smooth hover effects
- Light/Dark theme support

---

## 📁 Project Structure

```

src/
│
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── ThemeToggle.jsx
│
├── context/
│   └── AppContext.jsx
│
├── reducer/
│   └── appReducer.js
│
├── pages/
│   ├── Home.jsx
│   ├── Projects.jsx
│   └── Analytics.jsx
│
├── App.jsx
├── main.jsx
└── index.css

```

---

## 🛠 Technologies Used

- React.js
- React Router DOM
- Context API
- useReducer
- useMemo
- CSS3

---

## ✅ Conclusion

This project successfully demonstrates advanced React Hooks and structured state management while maintaining a clean, responsive, and user-friendly interface.

All Experiment 4 requirements have been properly implemented and tested.
```
