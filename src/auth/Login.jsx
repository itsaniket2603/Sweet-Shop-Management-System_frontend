import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../services/api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const res = await api.post("/auth/login", { email, password });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);

      toast.success(
        res.data.role === "admin"
          ? "Logged in as Admin 👑"
          : "Logged in successfully 🎉"
      );

      navigate("/dashboard");
    } catch (err) {
      toast.error("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 to-orange-50">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow-lg w-80"
      >
        <h2 className="text-2xl font-bold text-center mb-6">
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="input mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="input mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          disabled={loading}
          className="btn-primary w-full"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {/* 👇 DEMO LOGIN OPTIONS */}
        <div className="mt-6 border-t pt-4 text-sm text-center space-y-2">
          <p className="text-gray-500">Demo login</p>

          <button
            type="button"
            onClick={() => {
              setEmail("user@test.com");
              setPassword("123456");
            }}
            className="w-full border rounded-lg py-2 hover:bg-gray-100"
          >
            Login as User
          </button>

          <button
            type="button"
            onClick={() => {
              setEmail("admin@test.com");
              setPassword("123456");
            }}
            className="w-full border rounded-lg py-2 text-pink-600 hover:bg-pink-50"
          >
            Login as Admin 👑
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
