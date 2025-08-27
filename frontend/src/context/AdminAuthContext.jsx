import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AdminAuthContext = createContext();

export const AdminAuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Restore admin from localStorage on reload
  useEffect(() => {
    const savedAdmin = localStorage.getItem("admin");

    if (savedAdmin) {
      setAdmin(JSON.parse(savedAdmin)); // parse stored object
    }
    setLoading(false);
  }, []);

  // ✅ Login function
  const login = async (email, password) => {
    try {
      const res = await axios.post("http://localhost:5000/api/admin/login", {
        email,
        password,
      });
      const { token } = res.data;
      const adminObj = { token }; // can add email or name if returned from backen
      // Save to localStorage (key name must match the one used in useEffect)
      localStorage.setItem("admin", JSON.stringify(adminObj));
      setAdmin(adminObj);
      return { success: true };
    } catch (err) {
      console.error("Login failed:", err.response?.data || err.message);
      return {
        success: false,
        message: err.response?.data?.message || "Login failed",
      };
    }
  };

  // ✅ Logout function
  const logout = () => {
    localStorage.removeItem("admin"); // must match key name
    setAdmin(null);
  };

  return (
    <AdminAuthContext.Provider value={{ admin, login, logout, loading }}>
      {children}
    </AdminAuthContext.Provider>
  );
};
