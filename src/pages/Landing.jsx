import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-orange-50 to-yellow-50 overflow-hidden">
      
      {/* 🌈 BACKGROUND DECOR */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-pink-200 rounded-full blur-3xl opacity-40 animate-pulse" />
      <div className="absolute top-40 -right-20 w-72 h-72 bg-orange-200 rounded-full blur-3xl opacity-40 animate-pulse" />

      {/* HERO */}
      <section className="relative flex flex-col items-center text-center px-6 py-28 animate-fadeIn">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight">
          🍬 Sweet Shop <br />
          <span className="text-pink-600">Management System</span>
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl animate-slideUp">
          A modern, role-based platform to manage sweets, inventory,
          and purchases with a delightful user experience.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4 animate-slideUp delay-200">
          <Link
            to="/login"
            className="bg-pink-600 text-white px-8 py-3 rounded-xl shadow-lg hover:scale-105 hover:bg-pink-700 transition-all duration-300"
          >
            Get Started
          </Link>

          <Link
            to="/register"
            className="border-2 border-pink-600 text-pink-600 px-8 py-3 rounded-xl hover:bg-pink-100 hover:scale-105 transition-all duration-300"
          >
            Create Account
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          ✨ Why Choose This Platform?
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition">
                {f.icon}
              </div>
              <h3 className="font-bold text-xl mb-2">
                {f.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ROLES */}
      <section className="bg-white py-20 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          👥 Built for Users & Admins
        </h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <RoleCard
            gradient="from-blue-500 to-indigo-500"
            title="👤 User"
            items={[
              "Browse sweets",
              "Search & filter products",
              "Purchase sweets",
              "Stock-aware buying",
            ]}
          />

          <RoleCard
            gradient="from-pink-500 to-orange-500"
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
      <section className="text-center py-24 px-6 bg-gradient-to-r from-pink-600 to-orange-500 text-white">
        <h2 className="text-4xl font-extrabold mb-4">
          Ready to manage sweets smarter?
        </h2>
        <p className="text-white/90 mb-10 text-lg">
          Clean architecture • Secure auth • Modern UI
        </p>

        <Link
          to="/register"
          className="bg-white text-pink-600 px-10 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 transition-all"
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

/* DATA */
const features = [
  { icon: "🔐", title: "Secure Authentication", desc: "JWT-based login with role-based access control." },
  { icon: "🔍", title: "Search & Filter", desc: "Find sweets instantly by name or category." },
  { icon: "📦", title: "Inventory Aware", desc: "Purchase automatically disabled when stock is zero." },
  { icon: "⚡", title: "Fast UI", desc: "Powered by React, Vite & Tailwind CSS." },
  { icon: "🧪", title: "TDD Friendly", desc: "Clean architecture suitable for testing." },
  { icon: "🤖", title: "AI Assisted", desc: "Built responsibly with AI guidance." },
];

/* ROLE CARD */
const RoleCard = ({ title, items, gradient }) => (
  <div className="relative rounded-2xl p-8 shadow-lg overflow-hidden hover:scale-[1.02] transition">
    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-10`} />
    <h3 className="relative text-2xl font-bold mb-6">{title}</h3>
    <ul className="relative space-y-3 text-gray-700">
      {items.map((i, idx) => (
        <li key={idx} className="flex items-center gap-2">
          <span className="text-green-500">✔</span> {i}
        </li>
      ))}
    </ul>
  </div>
);

export default Landing;
