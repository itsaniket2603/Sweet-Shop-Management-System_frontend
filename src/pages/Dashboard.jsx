import { useEffect, useState } from "react";
import SweetCard from "../components/SweetCard";
import SearchBar from "../components/SearchBar";
import api from "../services/api";
import toast from "react-hot-toast";

const Dashboard = () => {
  const [sweets, setSweets] = useState([]);
  const [filtered, setFiltered] = useState("");
  const [loading, setLoading] = useState(true);

  // 🔥 FETCH FROM BACKEND
  const fetchSweets = async () => {
    try {
      const res = await api.get("/sweets");
      setSweets(res.data);
    } catch (err) {
      toast.error("Failed to load sweets");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSweets();
  }, []);

  // 🛒 PURCHASE SWEET
  const handlePurchase = async (id) => {
  try {
    await api.post(`/sweets/${id}/purchase`);

    // ✅ Optimistic UI update
    setSweets((prev) =>
      prev.map((s) =>
        s._id === id
          ? { ...s, quantity: s.quantity - 1 }
          : s
      )
    );

    toast.success("Sweet purchased 🍬");
  } catch (err) {
    const msg =
      err.response?.data?.message || "Purchase failed";
    toast.error(msg);
  }
};



  const visibleSweets = sweets.filter(
    (s) =>
      s.name.toLowerCase().includes(filtered) ||
      s.category.toLowerCase().includes(filtered)
  );

  if (loading) {
    return (
      <p className="text-center mt-20 text-gray-500">Loading sweets...</p>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-800">
            🍭 Sweet Shop
          </h1>
          <p className="text-gray-600 mt-1">
            Browse, search, and purchase your favorite sweets
          </p>
        </div>

        <button
          onClick={fetchSweets}
          className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700"
        >
          Refresh
        </button>
      </div>

      {/* Search */}
      <div className="max-w-7xl mx-auto mb-6">
        <SearchBar onSearch={(value) => setFiltered(value.toLowerCase())} />
      </div>

      {/* Empty State */}
      {visibleSweets.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No sweets found 🍬
        </p>
      )}

      {/* Sweet Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {visibleSweets.map((sweet) => (
          <SweetCard
            key={sweet._id}
            sweet={sweet}
            onPurchase={handlePurchase}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
