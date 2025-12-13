import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import api from "../services/api";

const AdminPanel = () => {
  const [sweets, setSweets] = useState([]);
  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    quantity: "",
  });
  const [editingId, setEditingId] = useState(null);

  // Fetch all sweets
  const fetchSweets = async () => {
    try {
      const res = await api.get("/sweets");
      setSweets(res.data);
    } catch {
      toast.error("Failed to load sweets");
    }
  };

  useEffect(() => {
    fetchSweets();
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add or Update sweet
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingId) {
        await api.put(`/sweets/${editingId}`, form);
        toast.success("Sweet updated");
      } else {
        await api.post("/sweets", form);
        toast.success("Sweet added");
      }

      setForm({ name: "", category: "", price: "", quantity: "" });
      setEditingId(null);
      fetchSweets();
    } catch {
      toast.error("Action failed");
    }
  };

  // Edit sweet
  const handleEdit = (sweet) => {
    setEditingId(sweet._id);
    setForm({
      name: sweet.name,
      category: sweet.category,
      price: sweet.price,
      quantity: sweet.quantity,
    });
  };

  // Delete sweet
  const handleDelete = async (id) => {
    if (!confirm("Delete this sweet?")) return;

    try {
      await api.delete(`/sweets/${id}`);
      toast.success("Sweet deleted");
      fetchSweets();
    } catch {
      toast.error("Delete failed");
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">👑 Admin Panel</h1>

      {/* ADD / UPDATE FORM */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow mb-10 grid gap-4 md:grid-cols-4"
      >
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Sweet Name"
          className="input"
          required
        />
        <input
          name="category"
          value={form.category}
          onChange={handleChange}
          placeholder="Category"
          className="input"
          required
        />
        <input
          name="price"
          type="number"
          value={form.price}
          onChange={handleChange}
          placeholder="Price"
          className="input"
          required
        />
        <input
          name="quantity"
          type="number"
          value={form.quantity}
          onChange={handleChange}
          placeholder="Quantity"
          className="input"
          required
        />

        <button className="btn-primary md:col-span-4">
          {editingId ? "Update Sweet" : "Add Sweet"}
        </button>
      </form>

      {/* SWEET LIST */}
      <div className="grid gap-4">
        {sweets.map((sweet) => (
          <div
            key={sweet._id}
            className="bg-white p-4 rounded-xl shadow flex justify-between items-center"
          >
            <div>
              <h3 className="font-bold">{sweet.name}</h3>
              <p className="text-sm text-gray-600">
                {sweet.category} | ₹{sweet.price} | Qty: {sweet.quantity}
              </p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(sweet)}
                className="px-3 py-1 text-sm bg-blue-500 text-white rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(sweet._id)}
                className="px-3 py-1 text-sm bg-red-500 text-white rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
