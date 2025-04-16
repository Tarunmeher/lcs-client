import React, { useState, useRef, useEffect } from "react";
import profileImage from '../../../assets/images/bijuu.jpg'
import {
  FaEnvelope,
  FaBell,
  FaSearch,
  FaChevronDown,
  FaUser,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const AdminNavbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full bg-white shadow-md px-6 py-3 flex items-center justify-between">
      {/* Left: Mail & Notification */}
      <div className="flex items-center gap-6">
        {/* Mail */}
        <div className="relative flex items-center gap-1">
          <FaEnvelope className="text-green-500 text-xl" />
          <span className="absolute -top-2 -right-3 bg-green-500 text-white text-xs w-6 h-6 flex items-center justify-center rounded-full border border-white">
            84
          </span>
          <FaChevronDown className="ml-2 text-xs text-gray-500" />
        </div>

        {/* Notification */}
        <div className="relative flex items-center gap-1">
          <FaBell className="text-blue-500 text-xl" />
          <span className="absolute -top-2 -right-3 bg-blue-500 text-white text-xs w-6 h-6 flex items-center justify-center rounded-full border border-white">
            45
          </span>
          <FaChevronDown className="ml-2 text-xs text-gray-500" />
        </div>

        {/* Search Box */}
        <div className="flex items-center bg-gray-100 px-3 py-1 rounded-md">
          <FaSearch className="text-gray-500 text-sm" />
          <input
            type="text"
            placeholder="search"
            className="ml-2 bg-transparent focus:outline-none text-sm"
          />
        </div>
      </div>

      {/* Right: User Info */}
      <div className="relative" ref={dropdownRef}>
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <img
            src={profileImage}
            alt="user"
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="text-sm font-medium text-gray-700">Hi, Dusmant Meher</span>
          <FaChevronDown className="text-xs text-gray-500" />
        </div>

        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden z-10">
            <div className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <FaUser className="text-gray-600" />
              <span className="text-sm">Profile</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <FaCog className="text-gray-600" />
              <span className="text-sm">Account</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500">
              <FaSignOutAlt />
              <span className="text-sm">Logout</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminNavbar;
