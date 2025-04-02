import React, { useState } from "react";
import { Menu, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  return (
    <nav className="bg-white shadow-md px-6 md:px-12 py-4">
      <div className="max-w-7xl mx-auto flex items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src="./assets/logo.png" alt="Jacobi Robotics" className="h-8" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex ml-auto items-center space-x-8 text-gray-700 font-medium">
          {["Developers", "Solutions", "Company"].map((item) => (
            <div key={item} className="relative group">
              <button className="flex items-center cursor-pointer hover:text-blue-500">
                {item} <ChevronDown size={16} className="ml-1" />
              </button>
              <ul className="absolute left-0 mt-2 w-40 bg-white shadow-md rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200">
                <li className="px-4 py-2 hover:bg-gray-100">Option 1</li>
                <li className="px-4 py-2 hover:bg-gray-100">Option 2</li>
                <li className="px-4 py-2 hover:bg-gray-100">Option 3</li>
              </ul>
            </div>
          ))}
          <div className="cursor-pointer hover:text-blue-500">Blog</div>

          <button className="border border-gray-300 px-5 py-2 rounded-full hover:bg-gray-100 text-sm font-medium">
            Request a Demo
          </button>
        </div>

        {/* Mobile menu Buttons */}
        <button
          className="md:hidden ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 bg-white shadow-md p-4">
          <ul className="space-y-4 text-center">
            {["Developers", "Solutions", "Company"].map((item) => (
              <li key={item} className="relative">
                <button
                  className="w-full flex justify-center items-center hover:text-blue-500"
                  onClick={() =>
                    setDropdownOpen(dropdownOpen === item ? null : item)
                  }
                >
                  {item} <ChevronDown size={16} className="ml-1" />
                </button>
                {/* Mobile dropdown */}
                {dropdownOpen === item && (
                  <ul className="mt-2 bg-gray-100 rounded-md py-2">
                    <li className="py-2">Option 1</li>
                    <li className="py-2">Option 2</li>
                    <li className="py-2">Option 3</li>
                  </ul>
                )}
              </li>
            ))}
            <li className="hover:text-blue-500">Blog</li>
            <li>
              <button className="border border-gray-300 px-5 py-2 rounded-full w-full hover:bg-gray-100">
                Request a Demo
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
