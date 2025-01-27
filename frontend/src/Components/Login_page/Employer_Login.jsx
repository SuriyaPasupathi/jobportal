import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState(""); // Track only the email
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation check for empty email
    if (!email) {
      alert("Please enter your email");
      return;
    }

    // Basic email validation (without API)
    if (/\S+@\S+\.\S+/.test(email)) {
      // If email is valid, navigate to the password page
      navigate("/Employer_password", { state: { email } }); // Pass email to the password page
    } else {
      alert("Please enter a valid email address");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        {/* Title */}
        <h2 className="text-2xl font-semibold text-center mb-4">Sign in</h2>
        <p className="text-center text-gray-600">
          <Link to="/Employer_signup" className="text-blue-500 hover:underline">
            Create an account
          </Link>
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-6">
          {/* Email Input */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update email state
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            Continue
          </button>
        </form>

        {/* Divider */}
        <p className="text-center text-gray-500 mt-4">Or</p>

        {/* Social Login Buttons */}
        <div className="flex flex-col gap-3 mt-4">
          <button className="w-full py-2 border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300">
            Continue with Google
          </button>
          <button className="w-full py-2 border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300">
            Continue with Apple
          </button>
        </div>

        {/* Help Link */}
        <p className="text-center text-gray-600 mt-6">
          <a href="#" className="text-blue-500 hover:underline">
            Get help signing in
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
