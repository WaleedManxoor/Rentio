import React from 'react';

export default function FiltersBar({ search, setSearch, city, setCity, type, setType, price, setPrice }) {
    const cities = ["Islamabad", "Lahore", "Karachi"];
    const types = ["Apartment", "House", "Villa"];
 
    return (
      <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow">
        
        {/* --- Responsive Filter Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
          
          {/* 1. Search Bar */}
          <input
            type="text"
            placeholder="Search properties..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            // w-full on mobile, and takes 2 columns from sm up to lg
            className="p-3 border rounded w-full sm:col-span-2 lg:col-span-1 dark:bg-gray-700 dark:text-white 
                       focus:ring-blue-500 focus:border-blue-500"
          />
  
          {/* 2. City Dropdown */}
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="p-3 border rounded dark:bg-gray-700 dark:text-white focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">All Cities</option>
            {cities.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
  
          {/* 3. Type Buttons (CRITICAL FIX: Hidden until MD breakpoint) */}
          <div className="flex gap-2 sm:col-span-2 lg:col-span-1 **hidden md:flex**"> 
            
            <button
              onClick={() => setType('')} 
              className={`px-4 py-2 rounded-full border ${
                type === '' ? "bg-black text-white" : "bg-gray-200 dark:bg-gray-700 dark:text-white"
              } transition-colors duration-200 text-sm`}
            >
              All Types
            </button>
            {types.map((t) => (
              <button
                key={t}
                onClick={() => setType(t)}
                className={`px-4 py-2 rounded-full border ${
                  type === t ? "bg-red-500 text-white" : "bg-gray-200 dark:bg-gray-700 dark:text-white"
                } transition-colors duration-200 text-sm`}
              >
                {t}
              </button>
            ))}
          </div>
  
          {/* 4. Price Range */}
          <div className="flex flex-col sm:col-span-2 lg:col-span-1">
            <label className="dark:text-white text-sm mb-1">
                Max Price: **PKR {Number(price).toLocaleString()}**
            </label>
            <input
              type="range"
              min="1000000"
              max="10000000"
              step="100000"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
            />
          </div>

        </div>
      </div>
    );
  }