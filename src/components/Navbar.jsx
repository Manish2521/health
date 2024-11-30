import React, { useState } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = ({ toggleTheme, isDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={`p-4 ${isDarkMode ? "bg-gray-800 text-white" : "bg-blue-400 text-gray-900"}`}>
      <div className="flex justify-between items-center">
        <div className="text-lg font-semibold">HealthPlus</div>
        <div className="hidden md:flex space-x-4">
          <a href="#" className={`${isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-300"} px-3 py-2 rounded`}>Home</a>
          <a href="#" className={`${isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-300"} px-3 py-2 rounded`}>Messages</a>
        </div>
        <button onClick={toggleTheme} className={`p-2 rounded-full ${isDarkMode ? "bg-gray-600 text-white hover:bg-gray-500" : "bg-pink-300 text-gray-900 hover:bg-pink-400"}`}>
          {isDarkMode ? <MdOutlineLightMode size={24} /> : <MdOutlineDarkMode size={24} />}
        </button>
        <button className="md:hidden p-2 rounded-full focus:outline-none" onClick={() => setIsMenuOpen(prev => !prev)}>
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="mt-4 space-y-2 md:hidden">
          <a href="#" className={`${isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-300"} block px-3 py-2 rounded`}>Home</a>
          <a href="#" className={`${isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-300"} block px-3 py-2 rounded`}>Messages</a>

        </div>
      )}
    </div>
  );
};

export default Navbar;
