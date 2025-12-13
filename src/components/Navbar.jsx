import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // 🔥 IMPORTANT
  const [token, setToken] = useState(null);
  const [role, setRole] = useState(null);

  // 🔁 Update navbar on route change
  useEffect(() => {
    setToken(localStorage.getItem("token"));
    setRole(
      localStorage.getItem("role")?.replace(/"/g, "").trim()
    );
  }, [location.pathname]);

  const logout = () => {
    localStorage.clear();
    setToken(null);
    setRole(null);
    toast.success("Logged out successfully 👋");
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl">🍬</span>
          <span className="text-xl font-bold text-pink-600">
            SweetShop
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-6">
          {token && (
            <Link to="/dashboard" className="hover:text-pink-600">
              Dashboard
            </Link>
          )}

          {role === "admin" && (
            <Link
              to="/admin"
              className="hover:text-pink-600 font-semibold"
            >
              Admin Panel
            </Link>
          )}

          {!token ? (
            <>
              <Link to="/login">Login</Link>
              <Link
                to="/register"
                className="bg-pink-600 text-white px-4 py-2 rounded-lg"
              >
                Register
              </Link>
            </>
          ) : (
            <button
              onClick={logout}
              className="bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
