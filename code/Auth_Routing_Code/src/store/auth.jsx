import { create } from "zustand";

export const useAuthStore = create((set) => ({
  isLoggedIn: false,
  user: null,
  token: null,

  login: (userData, token) => {
    set({ isLoggedIn: true, user: userData, token: token });
    localStorage.setItem("token", token);
  },

  logout: () => {
    set({ isLoggedIn: false, user: null, token: null });
    localStorage.removeItem("token");
  }
}));