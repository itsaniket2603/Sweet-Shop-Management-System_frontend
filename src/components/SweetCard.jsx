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
  onClick={() => onPurchase(sweet._id)}
  disabled={sweet.quantity === 0}
  className={`px-4 py-2 rounded-lg text-white ${
    sweet.quantity === 0
      ? "bg-gray-400 cursor-not-allowed"
      : "bg-pink-600 hover:bg-pink-700"
  }`}
>
  {sweet.quantity === 0 ? "Out of Stock" : "Purchase"}
</button>

    </div>
  );
};

export default SweetCard;
