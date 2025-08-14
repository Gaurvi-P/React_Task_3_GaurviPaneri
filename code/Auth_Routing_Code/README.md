# (Task-3) Auth Routing in React (with zustand and Vite)

## Description
This project demonstrates how to create protected routes in a React application using React Router v6, Zustand for authentication state management, and Vite for fast development.
Protected routes ensure that only authenticated users can access certain pages, like a dashboard.

## Features
- Login & Logout functionality
- State management with Zustand
- Protected dashboard (only accessible after login)
- Redirects unauthenticated users to login page
- Built with React + Vite for fast development

## Tech Stack
- React 18
- Vite
- React Router v6
- Zustand
- styled-components(for styling)

## Folder Structure
src/
│── main.jsx               # App entry point
│── App.jsx                # Routes setup
│── store/
│   └── auth.jsx           # Zustand store for authentication
│── components
|   └── protectedRoutes.jsx   # Logic for route protection
│── pages/
│   ├── Login.jsx          # Login page
│   ├── Dashboard.jsx      # Protected dashboard


## Installation and Set-Up 
Open the terminal in VS Code and follow the steps:
1. Clone repository
    git clone https://github.com/GaurviP/Auth_Routing.git
    cd Auth_Routing
2. Install Dependencies
    npm install
3. Run the development Server
    npm run dev

The app will run at: http://localhost:5173


## Working 
Login Flow:
1. User tries to access /dashboard.
2. ProtectedRoute checks authentication status from Zustand store.
3. If not logged in, user is redirected to login (which is home page is this scenario '/').
4. If logged in, dashboard is displayed.

