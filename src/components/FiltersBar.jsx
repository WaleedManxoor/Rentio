export default function FiltersBar({ search, setSearch, city, setCity, type, setType, price, setPrice }) {
    const cities = ["Islamabad", "Lahore", "Karachi"];
    const types = ["Apartment", "House", "Villa"];
  
    return (
      <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow flex flex-wrap gap-4">
        
        {/* Search */}
        <input
          type="text"
          placeholder="Search properties..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 border rounded w-full sm:w-1/3 dark:bg-gray-700 dark:text-white"
        />
  
        {/* City Dropdown */}
        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="p-2 border rounded dark:bg-gray-700 dark:text-white"
        >
          <option value="">All Cities</option>
          {cities.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
  
        {/* Type Buttons */}
        <div className="flex gap-2">
          {types.map((t) => (
            <button
              key={t}
              onClick={() => setType(t)}
              className={`px-4 py-2 rounded-full border ${
                type === t ? "bg-black text-white" : "bg-gray-200"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
  
        {/* Price Range */}
        <div className="flex flex-col">
          <label className="dark:text-white">Max Price: {price}</label>
          <input
            type="range"
            min="1000000"
            max="10000000"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
      </div>
    );
  }
  