import React from 'react';

// Use a static variable for the image URL
const HERO_IMAGE_URL = "https://images.unsplash.com/photo-1560518883-2070e17c10b7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export default function HeroSection() {
  return (
    <div 
      // 1. CRITICAL: h-[450px] or h-screen gives the div height. Without height, the image has nowhere to display.
      // 2. CRITICAL: bg-cover ensures the image fills the container.
      // 3. CRITICAL: bg-center centers the image.
      className="relative h-[450px] md:h-[550px] w-full bg-cover bg-center mb-10 dark:bg-blue-900"
      
      // The inline style applies the image URL.
      style={{ backgroundImage: `url('${HERO_IMAGE_URL}')` }}
    >
      
      {/* --- Image Overlay for Readability (Optional, but recommended) --- */}
      <div className="absolute inset-0 bg-black opacity-40 dark:opacity-60"></div>
      
      {/* --- Content Container (Text and CTA) --- */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-6">
        
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
          Find Your Perfect Rental Property
        </h1>
        
        {/* ... rest of the content ... */}
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl drop-shadow-md">
          Explore thousands of premium rental listings, filtered just for you. Your new home awaits.
        </p>
        
        {/* CTA Button */}
        <button 
          className="px-8 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-xl 
                     hover:bg-red-700 transition-transform transform hover:scale-[1.02] 
                     focus:outline-none focus:ring-4 focus:ring-red-300"
          onClick={() => { 
             document.getElementById('filters-bar-container')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Start Exploring Now
        </button>

      </div>
    </div>
  );
}