import React from 'react';

// Assuming you pass down props: 
// search, setSearch, city, setCity, type, setType, price, setPrice

export default function FiltersBar({
  search, setSearch,
  city, setCity,
  type, setType,
  price, setPrice
}) {
  
  // Example data for dropdowns/buttons (you should dynamically generate these in a real app)
  const cities = ['All', 'New York', 'Los Angeles', 'Chicago', 'Miami'];
  const propertyTypes = ['All', 'Apartment', 'House', 'Condo', 'Townhouse'];

  return (
    // Outer container for the filters bar with dynamic background based on theme
    <div 
      id="filters-bar-container" // Anchor for HeroSection CTA
      className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg transition-colors duration-300"
    >
      
      {/* The Filter Grid:
        1. Default (mobile): Stack items vertically (gap-4)
        2. Medium (md): Arrange items into two columns (grid-cols-2)
        3. Large (lg): Arrange items into four columns (grid-cols-4)
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* --- 1. Search Bar (Takes full width on all screens) --- */}
        <div className="lg:col-span-4"> 
          <label htmlFor="search" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Search by Property Title
          </label>
          <input
            id="search"
            type="text"
            placeholder="Search by title, e.g., 'Luxury Penthouse'"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg 
                       bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white 
                       focus:ring-red-500 focus:border-red-500 transition duration-150"
          />
        </div>

        {/* --- 2. City Dropdown --- */}
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            City
          </label>
          <select
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg 
                       bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white 
                       focus:ring-red-500 focus:border-red-500 transition duration-150"
          >
            {cities.map(c => (
              <option key={c} value={c === 'All' ? '' : c}>{c}</option>
            ))}
          </select>
        </div>

        {/* --- 3. Property Type Dropdown --- */}
        <div>
          <label htmlFor="type" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Property Type
          </label>
          <select
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg 
                       bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white 
                       focus:ring-red-500 focus:border-red-500 transition duration-150"
          >
            {propertyTypes.map(t => (
              <option key={t} value={t === 'All' ? '' : t}>{t}</option>
            ))}
          </select>
        </div>

        {/* --- 4. Price Range Slider (Takes 2 columns on medium screens) --- */}
        <div className="md:col-span-2 lg:col-span-1">
          <label htmlFor="price" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Max Price: ${price.toLocaleString()}
          </label>
          <input
            id="price"
            type="range"
            min="0"
            max="1000000" // Set a suitable max value for your data
            step="10000"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            // Custom styling for the slider track/thumb is often required here
            // Note: Tailwind utility classes for range inputs are limited; custom CSS may be needed
            className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer range-lg transition duration-150"
          />
        </div>

        {/* --- 5. Reset Button (Optional but recommended for UX) --- */}
        <div className="lg:col-span-1 flex items-end"> 
          <button
            onClick={() => {
              setSearch('');
              setCity('');
              setType('');
              setPrice(100000); // Reset to initial price
            }}
            className="w-full p-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 
                       font-semibold rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 
                       transition duration-150"
          >
            Reset Filters
          </button>
        </div>

      </div>
    </div>
  );
}