import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaHome, FaUser, FaCog, FaBars, FaTimes } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { MdWork } from "react-icons/md";
import JobPage from "../Dashboard/Job_list";  
import ProfilePage from "../Dashboard/Employer_profile";
import SettingsPage from "../Dashboard/Setting";

function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const [activePage, setActivePage] = useState("home");
  const [error, setError] = useState(null); // Add state for handling errors
  const navigate = useNavigate();

  const toggleSidenav = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (page) => {
    setActivePage(page); // Update activePage to render corresponding content
  };

  // Logout function with API call
  const handleLogout = async () => {
    try {
      // Send POST request to the logout API
      const response = await axios.post('http://localhost:8000/employer/logout/'); // Change URL to match your API

      if (response.status === 200) {
        // If logout is successful, navigate to the login page
        navigate('/');
      } else {
        setError('Logout failed, please try again.'); // Set error if logout fails
      }
    } catch (error) {
      setError('An error occurred while logging out. Please try again later.'); // Display error message
    }
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-blue-900 text-white transition-all duration-300 ${isOpen ? "w-64" : "w-16"} z-20`}
      >
        <div className="flex justify-between items-center p-4">
          <h1 className={`text-lg font-bold transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}>
            Menu
          </h1>
          <button className="text-white text-2xl" onClick={toggleSidenav}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div className="flex flex-col items-start p-2 space-y-4 mt-4">
          {/* Navigation Buttons */}
          <button
            className="flex items-center space-x-3 text-lg hover:bg-blue-700 px-4 py-2 rounded-md w-full"
            onClick={() => handleNavigation("home")}
          >
            <FaHome />
            <span className={`transition-all duration-300 ${isOpen ? "block" : "hidden"}`}>Home</span>
          </button>
          <button
            className="flex items-center space-x-3 text-lg hover:bg-blue-700 px-4 py-2 rounded-md w-full"
            onClick={() => handleNavigation("job")}
          >
            <MdWork />
            <span className={`transition-all duration-300 ${isOpen ? "block" : "hidden"}`}>Job</span>
          </button>
          <button
            className="flex items-center space-x-3 text-lg hover:bg-blue-700 px-4 py-2 rounded-md w-full"
            onClick={() => handleNavigation("Employer_profile")}
          >
            <FaUser />
            <span className={`transition-all duration-300 ${isOpen ? "block" : "hidden"}`}>Profile</span>
          </button>
          <button
            className="flex items-center space-x-3 text-lg hover:bg-blue-700 px-4 py-2 rounded-md w-full"
            onClick={() => handleNavigation("settings")}
          >
            <FaCog />
            <span className={`transition-all duration-300 ${isOpen ? "block" : "hidden"}`}>Settings</span>
          </button>
          <button
            className="flex items-center space-x-3 text-lg hover:bg-blue-700 px-4 py-2 rounded-md w-full"
            onClick={() => handleNavigation("notification")}
          >
            <IoIosNotifications />
            <span className={`transition-all duration-300 ${isOpen ? "block" : "hidden"}`}>Notifications</span>
          </button>
          <button
            className="flex items-center space-x-3 text-lg hover:bg-blue-700 px-4 py-2 rounded-md w-full"
            onClick={handleLogout}
          >
            <FaTimes />
            <span className={`transition-all duration-300 ${isOpen ? "block" : "hidden"}`}>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <div className="w-full bg-blue-900 text-white p-4 flex items-center justify-between">
          <button className="text-white text-2xl" onClick={toggleSidenav}>
            <FaBars />
          </button>
          <h1 className="text-lg font-bold">Job Portal</h1>
        </div>
        <div className="p-6 ml-28">
          {activePage === "home" && (
            <div>
              <h2 className="text-2xl font-bold">Welcome to Home</h2>
              <p>Here is your homepage content.</p>
            </div>
          )}
          {activePage === "job" && <JobPage />}
          {activePage === "Employer_profile" && <ProfilePage />}
          {activePage === "settings" && <SettingsPage />}
          {activePage === "notification" && (
            <div>
              <h2 className="text-2xl font-bold">Notifications</h2>
              <p>Here is the notifications content.</p>
            </div>
          )}
        </div>
      </div>

      {/* Display error message if any */}
      {error && (
        <div className="fixed bottom-0 left-0 w-full bg-red-500 text-white text-center p-2">
          {error}
        </div>
      )}
    </div>
  );
}

export default HomePage;
