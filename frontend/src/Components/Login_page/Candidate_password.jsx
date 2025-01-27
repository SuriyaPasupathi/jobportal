import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const Candidatepassword = () => {
  const [password, setPassword] = useState("");
  const [staySignedIn, setStaySignedIn] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email; // Retrieve email passed from the previous page

  // Handle password submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Email or password is missing.");
      return;
    }

    try {
      // Make API call to validate the email and password
      const response = await axios.post("http://127.0.0.1:8000/employee/candidatelogin/", {
        email,
        password,
      });

      if (response.status === 200) {
        alert("Login successful");
        navigate("/Subscription"); // Navigate to the dashboard or subscription page
      }
    } catch (error) {
      alert("Login failed. Please check your credentials.");
      console.error("Error:", error.response?.data || error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        {/* Title */}
        <h2 className="text-xl font-semibold text-center mb-6">
          Enter your password
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Password Field */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Stay Signed In */}
          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              id="staySignedIn"
              name="staySignedIn"
              checked={staySignedIn}
              onChange={(e) => setStaySignedIn(e.target.checked)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="staySignedIn" className="ml-2 text-sm text-gray-700">
              Stay signed in
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            Continue
          </button>
        </form>

        {/* Links */}
        <div className="mt-6 text-sm text-center">
          <a href="#" className="text-blue-500 hover:underline">
            Reset your password
          </a>
          <br />
          <a href="#" className="text-blue-500 hover:underline">
            Sign in to a different account
          </a>
        </div>
      </div>
    </div>
  );
};

export default Candidatepassword;
