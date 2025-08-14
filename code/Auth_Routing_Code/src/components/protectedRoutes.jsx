import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/auth"; // Zustand auth store

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  if (!isLoggedIn) {
    // Redirect to login if not authenticated
    return <Navigate to="/" replace />;
  }

  // If authenticated, render the children (protected page)
  return children;
};

export default ProtectedRoute;