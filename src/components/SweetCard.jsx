const SweetCard = ({ sweet, onPurchase }) => {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-5 flex flex-col">
      
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-bold">{sweet.name}</h3>
        <span className="text-xs bg-pink-100 text-pink-600 px-2 py-1 rounded">
          {sweet.category}
        </span>
      </div>

      <p className="text-gray-600 mb-2">₹{sweet.price}</p>

      <p className="text-sm text-gray-500 mb-4">
        Stock: {sweet.quantity}
      </p>

      <button
        disabled={sweet.quantity === 0}
        onClick={() => onPurchase(sweet.id)}
        className={`mt-auto py-2 rounded-lg text-sm font-semibold ${
          sweet.quantity === 0
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-green-500 text-white hover:bg-green-600"
        }`}
      >
        {sweet.quantity === 0 ? "Out of Stock" : "Purchase"}
      </button>
    </div>
  );
};

export default SweetCard;
