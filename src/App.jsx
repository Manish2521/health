import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Login from "/src/components/Login";
import Home from "/src/components/Home";
import Registration from "/src/components/Registration";
import Sidebar from "/src/components/Sidebar";
import Navbar from "/src/components/Navbar";
import Dashboard from "/src/components/Dashboard";
import Appointment from "/src/components/Appointment";

const App = () => {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
};

const MainLayout = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();
  const noSidebarNavbarRoutes = ["/", "/login"]; 

  const shouldShowSidebarNavbar = !noSidebarNavbarRoutes.includes(location.pathname);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div
      className={`flex h-screen overflow-hidden ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {shouldShowSidebarNavbar && (
        <>
          <Sidebar isDarkMode={isDarkMode} />
          <div className="flex-1 flex flex-col overflow-hidden">
            <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
            <div className="flex-1 p-4 overflow-y-auto">
              <Routes>
                <Route path="/home" element={<Home isDarkMode={isDarkMode} />} />
                <Route path="/registration" element={<Registration isDarkMode={isDarkMode} />} />
                <Route path="/dashboard" element={<Dashboard isDarkMode={isDarkMode} />} />
                <Route path="/Appointment" element={<Appointment isDarkMode={isDarkMode} />} />
              </Routes>
            </div>
          </div>
        </>
      )}

      {!shouldShowSidebarNavbar && (
        <div className="flex-1 flex items-center justify-center overflow-hidden">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      )}
    </div>
  );
};

export default App;
