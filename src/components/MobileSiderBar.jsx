import React from "react";
import { Link } from "react-router-dom"; // Assuming your sidebar links use react-router-dom

const MobileSiderBar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {/* Overlay/backdrop for when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" // z-index lower than sidebar, higher than content
          onClick={toggleSidebar} // Close sidebar when clicking outside
        ></div>
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white w-64 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 md:hidden`} // z-index higher than overlay
      >
        <div className="p-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold">Dashboard</h2>
          <button onClick={toggleSidebar} className="text-white text-2xl">
            &times; {/* Close icon */}
          </button>
        </div>
        <nav className="mt-5">
          <ul>
            <li>
              <Link
                to="/dashboard"
                className="block py-2 px-4 hover:bg-gray-700"
                onClick={toggleSidebar} // Close sidebar on link click
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/customer-list"
                className="block py-2 px-4 hover:bg-gray-700"
                onClick={toggleSidebar}
              >
                Manage Customers
              </Link>
            </li>
            <li>
              <Link
                to="/add-customer"
                className="block py-2 px-4 hover:bg-gray-700"
                onClick={toggleSidebar}
              >
                Add Customer
              </Link>
            </li>
            <li>
              <Link
                to="/product-list"
                className="block py-2 px-4 hover:bg-gray-700"
                onClick={toggleSidebar}
              >
                Manage Products
              </Link>
            </li>
            <li>
              <Link
                to="/add-product"
                className="block py-2 px-4 hover:bg-gray-700"
                onClick={toggleSidebar}
              >
                Add Product
              </Link>
            </li>
            <li>
              <Link
                to="/user-list"
                className="block py-2 px-4 hover:bg-gray-700"
                onClick={toggleSidebar}
              >
                Manage Users
              </Link>
            </li>
            <li>
              <Link
                to="/add-user"
                className="block py-2 px-4 hover:bg-gray-700"
                onClick={toggleSidebar}
              >
                Add User
              </Link>
            </li>
            <li>
              <Link
                to="/create-proforma"
                className="block py-2 px-4 hover:bg-gray-700"
                onClick={toggleSidebar}
              >
                Create Proforma
              </Link>
            </li>
            <li>
              <Link
                to="/proforma-list"
                className="block py-2 px-4 hover:bg-gray-700"
                onClick={toggleSidebar}
              >
                Manage Proforma
              </Link>
            </li>
            <li>
              <Link
                to="/create-invoice"
                className="block py-2 px-4 hover:bg-gray-700"
                onClick={toggleSidebar}
              >
                Create Invoice
              </Link>
            </li>
            <li>
              <Link
                to="/invoice-list"
                className="block py-2 px-4 hover:bg-gray-700"
                onClick={toggleSidebar}
              >
                Manage Invoice
              </Link>
            </li>
            {/* Add other navigation links here */}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default MobileSiderBar;