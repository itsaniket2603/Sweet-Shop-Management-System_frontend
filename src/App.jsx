import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Dashboard from "./pages/Dashboard";
import AdminPanel from "./pages/AdminPanel";
import Landing from "./pages/Landing";
import ProtectedRoute from "./auth/ProtectedRoute";
import Navbar from "./components/Navbar";

const App = () => {
  const location = useLocation();
  const token = localStorage.getItem("token");

  // Landing page pe navbar hide
  const hideNavbar = location.pathname === "/";

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        {/* ✅ LANDING PAGE (ALWAYS) */}
        <Route path="/" element={<Landing />} />

        {/* 🔐 AUTH ROUTES */}
        <Route
          path="/login"
          element={token ? <Navigate to="/dashboard" /> : <Login />}
        />
        <Route
          path="/register"
          element={token ? <Navigate to="/dashboard" /> : <Register />}
        />

        {/* 📊 DASHBOARD */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* 👑 ADMIN PANEL */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute adminOnly>
              <AdminPanel />
            </ProtectedRoute>
          }
        />

        {/* ❓ FALLBACK */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
