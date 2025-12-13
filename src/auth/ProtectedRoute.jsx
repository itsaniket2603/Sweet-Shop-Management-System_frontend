import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, adminOnly = false }) => {
  const token = localStorage.getItem("token");
  const role = localStorage
    .getItem("role")
    ?.replace(/"/g, "")
    .trim();

  // ❌ Not logged in
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // ❌ Not admin but trying admin route
  if (adminOnly && role !== "admin") {
    return <Navigate to="/dashboard" replace />;
  }

  // ✅ Allowed
  return children;
};

export default ProtectedRoute;
