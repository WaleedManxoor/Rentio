import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaMoon, FaSun, FaHeart } from "react-icons/fa";

export default function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <nav className="flex justify-between items-center p-4 bg-white dark:bg-gray-900 shadow-md transition-all">
      
      {/* --- LOGO / NAME --- */}
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
        Rentio
      </h1>

      {/* --- NAV ICONS --- */}
      <div className="flex items-center gap-4">

        {/* Favorites Icon */}
        <a href="/favorites" className="text-red-500 hover:scale-110 transition">
          <FaHeart size={22} />
        </a>

        {/* Theme Toggle */}
        {theme === "light" ? (
          <FaMoon
            size={22}
            onClick={() => setTheme("dark")}
            className="cursor-pointer text-gray-800 hover:scale-110 transition"
          />
        ) : (
          <FaSun
            size={22}
            onClick={() => setTheme("light")}
            className="cursor-pointer text-yellow-400 hover:scale-110 transition"
          />
        )}
      </div>
    </nav>
  );
}
