import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-orange-50">
      
      {/* HERO SECTION */}
      <section className="flex flex-col items-center text-center px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
          🍬 Sweet Shop Management System
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl">
          A modern platform to manage sweets, inventory, and purchases with
          role-based access for users and admins.
        </p>

        <div className="mt-8 flex gap-4">
          <Link
            to="/login"
            className="bg-pink-600 text-white px-6 py-3 rounded-lg shadow hover:bg-pink-700 transition"
          >
            Get Started
          </Link>

          <Link
            to="/register"
            className="border border-pink-600 text-pink-600 px-6 py-3 rounded-lg hover:bg-pink-100 transition"
          >
            Create Account
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          ✨ Key Features
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition"
            >
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-gray-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ROLES */}
      <section className="bg-white py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          👥 User & Admin Roles
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <RoleCard
            title="👤 User"
            items={[
              "Browse sweets",
              "Search & filter products",
              "Purchase sweets",
              "Stock-aware buying",
            ]}
          />

          <RoleCard
            title="🛠 Admin"
            items={[
              "Add new sweets",
              "Update price & quantity",
              "Delete sweets",
              "Inventory management",
            ]}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 px-6">
        <h2 className="text-3xl font-bold mb-4">
          Ready to manage sweets smarter?
        </h2>
        <p className="text-gray-600 mb-8">
          Built with React, Tailwind CSS, and modern best practices.
        </p>

        <Link
          to="/register"
          className="bg-green-500 text-white px-8 py-3 rounded-lg shadow hover:bg-green-600 transition"
        >
          Start Now 🚀
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Sweet Shop Management System
      </footer>
    </div>
  );
};

const features = [
  {
    icon: "🔐",
    title: "Secure Authentication",
    desc: "JWT-based login and role-based access control.",
  },
  {
    icon: "🔍",
    title: "Search & Filter",
    desc: "Quickly find sweets by name or category.",
  },
  {
    icon: "📦",
    title: "Inventory Aware",
    desc: "Purchase disabled automatically when stock is zero.",
  },
  {
    icon: "⚡",
    title: "Fast & Modern UI",
    desc: "Built with React + Vite + Tailwind CSS.",
  },
  {
    icon: "🧪",
    title: "TDD Friendly",
    desc: "Designed to support test-driven development.",
  },
  {
    icon: "🤖",
    title: "AI-Assisted",
    desc: "Built responsibly with AI-assisted development.",
  },
];

const RoleCard = ({ title, items }) => (
  <div className="border rounded-xl p-6 shadow-sm">
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <ul className="space-y-2 text-gray-600">
      {items.map((i, idx) => (
        <li key={idx}>✔ {i}</li>
      ))}
    </ul>
  </div>
);

export default Landing;
