const SearchBar = ({ onSearch }) => {
  return (
    <input
      className="w-full p-2 mb-4 border rounded"
      placeholder="Search by name or category..."
      onChange={(e) => onSearch(e.target.value.toLowerCase())}
    />
  );
};

export default SearchBar;
