function Searchbar() {
    return (
      <div className="bg-gray-800 rounded-lg shadow-md flex items-center justify-between">
        <input
          type="text"
          placeholder="Search..."
          className="bg-gray-700 text-white rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    );
  }
  
  export default Searchbar;
  