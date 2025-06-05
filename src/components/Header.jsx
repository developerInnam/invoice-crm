import React from "react";
import { FaBars } from "react-icons/fa"; // Example: using react-icons for a hamburger menu

const Header = ({
  sidebarExpanded,
  setSidebarExpanded,
  hoveringSidebar,
  toggleMobileSidebar, // Receive the new toggle function
}) => {
  return (
    <header className="bg-white shadow-md p-4 flex items-center justify-between">
      {/* Mobile-only toggle button */}
      <button
        onClick={toggleMobileSidebar}
        className="text-gray-600 md:hidden text-2xl"
      >
        <FaBars /> {/* Hamburger icon */}
      </button>

      {/* Desktop sidebar toggle (if applicable, keep your existing logic) */}
      <button
        onClick={() => setSidebarExpanded(!sidebarExpanded)}
        className="text-gray-600 hidden md:block text-2xl"
      >
        {/* Your desktop sidebar toggle icon, e.g., an arrow or different bars */}
        <FaBars />
      </button>

      <h1 className="text-xl font-semibold">Admin Panel</h1>
      {/* Other header content */}
      <div>User Profile | Settings</div>
    </header>
  );
};

export default Header;