import React, { useState, useEffect } from "react";
import axios from "axios"; // Importing axios

function EmployerAccountForm({ onValidation }) {
  const [companyName, setCompanyName] = useState("");
  const [companyLogo, setCompanyLogo] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("+1");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    const isValid =
      companyName &&
      companyLogo &&
      firstName &&
      lastName &&
      phoneNumber.length >= 10;
    onValidation(isValid);
  }, [companyName, companyLogo, firstName, lastName, phoneNumber, onValidation]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Check for required fields and validation
    if (!companyName || !companyLogo || !firstName || !lastName || !phoneNumber) {
      setError("All fields are required.");
      setSuccessMessage(null); // Clear success message if there's an error
    } else if (phoneNumber.length < 10) {
      setError("Phone number must be at least 10 digits.");
      setSuccessMessage(null); // Clear success message if there's an error
    } else {
      setError(null); // Clear any previous errors
  
      // Prepare form data to be sent to the backend
      const formData = new FormData();
      formData.append("companyName", companyName);
      formData.append("companyLogo", companyLogo);
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("phoneNumber", phoneNumber);
      formData.append("countryCode", countryCode);
  
      try {
        const response = await axios.post("http://127.0.0.1:8000/employer/employer_profile/", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log("Form submitted successfully:", response.data);
        setSuccessMessage("Your profile has been successfully submitted!");
        setError(null); // Clear error if submission is successful
      } catch (error) {
        console.error("Error submitting the form:", error);
        if (error.response) {
          console.error("Server Response:", error.response.data);
        }
        setSuccessMessage(null); // Clear success message if there's an error
        setError("Error submitting the form. Please try again.");
      }
    }
  };
  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {/* Company Name Input */}
      <div>
        <label className="block text-sm font-semibold text-gray-700">
          Company Name
        </label>
        <input
          type="text"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Company Logo Input */}
      <div>
        <label className="block text-sm font-semibold text-gray-700">
          Company Logo
        </label>
        <input
          type="file"
          onChange={(e) => setCompanyLogo(e.target.files[0])}
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {companyLogo && (
          <p className="text-green-500 text-sm">Uploaded: {companyLogo.name}</p>
        )}
      </div>

      {/* First Name Input */}
      <div>
        <label className="block text-sm font-semibold text-gray-700">
          First Name
        </label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Last Name Input */}
      <div>
        <label className="block text-sm font-semibold text-gray-700">
          Last Name
        </label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Country Code and Phone Number */}
      <div className="flex space-x-2">
        <div className="w-1/3">
          <label className="block text-sm font-semibold text-gray-700">
            Country Code
          </label>
          <select
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            className="p-2 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="+1">+1</option>
            <option value="+44">+44</option>
            <option value="+91">+91</option>
          </select>
        </div>
        <div className="w-2/3">
          <label className="block text-sm font-semibold text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Error or Success Message */}
      {error && <p className="text-red-500 text-sm">{error}</p>}
      {successMessage && <p className="text-green-500 text-sm">{successMessage}</p>}

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
}

export default EmployerAccountForm;
