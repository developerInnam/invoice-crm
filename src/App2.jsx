import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar"; // Adjust path as needed
import { HiBars3 } from "react-icons/hi2"; // Hamburger icon
import Dashboard from "./pages/Dashboard";
import AddCustomers from "./pages/AddCustomers";
import ManageCustomer from "./pages/ManageCustomer";
import CreateProforma from "./pages/CreateProforma";
import ManageProforma from "./pages/ManageProforma";
import CreateInvoice from "./pages/CreateInvoice";
import ManageInvoice from "./pages/ManageInvoice";
import AddProducts from "./pages/AddProducts";
import ManageProducts from "./pages/ManageProducts";
import AddUser from "./pages/AddUser";
import ManageUsers from "./pages/ManageUsers";
import PublicRoute from "./utils/PublicRoute";
import ProtectedRoute from "./utils/ProtectedRoute";
import Login from "./pages/Login";
import DashboardLayout from "./Layouts/DashboardLayout";

function App({
  sidebarExpanded,
  setSidebarExpanded,
  hoveringSidebar,
  setHoveringSidebar,
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false); 

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Mobile Hamburger Button - visible only on small screens */}
      {isMobileView && (
        <button
          onClick={toggleSidebar}
          className="fixed top-4 left-4 z-40 p-2 rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 shadow-md"
        >
          <HiBars3 className="w-6 h-6" />
        </button>
      )}
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        sidebarExpanded={sidebarExpanded}
        setSidebarExpanded={setSidebarExpanded}
        hoveringSidebar={hoveringSidebar}
        setHoveringSidebar={setHoveringSidebar}
      />
      <main
        className={`flex-1 p-4 transition-all duration-300
            ${
              isSidebarOpen && !isMobileView
                ? "ml-72"
                : !isSidebarOpen && !isMobileView
                ? "ml-16"
                : ""
            }`}
      >
        {isMobileView && <div className="h-16"></div>}
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <Dashboard />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/add-customer"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <AddCustomers />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/customer-list"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <ManageCustomer />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/create-proforma"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <CreateProforma />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/proforma-list"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <ManageProforma />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/create-invoice"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <CreateInvoice />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/invoice-list"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <ManageInvoice />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/add-product"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <AddProducts />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/product-list"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <ManageProducts />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/add-user"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <AddUser />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/user-list"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <ManageUsers />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
