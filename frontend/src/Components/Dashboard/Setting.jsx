import React, { useState } from "react";

function SettingsPage() {
  const [profileInfo, setProfileInfo] = useState({
    email: "tony.stark@starkindustries.com",
    phoneNumber: "123-456-7890",
    verification: "Verified",
    recoveryEmail: "recovery.stark@starkindustries.com",
  });

  const [editMode, setEditMode] = useState({
    email: false,
    phoneNumber: false,
    verification: false,
    recoveryEmail: false,
  });

  const [twoStepVerification, setTwoStepVerification] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");

  const handleInputChange = (e, field) => {
    setProfileInfo({ ...profileInfo, [field]: e.target.value });
  };

  const toggleEditMode = (field) => {
    setEditMode({ ...editMode, [field]: !editMode[field] });
  };

  const toggleTwoStepVerification = () => {
    setTwoStepVerification(!twoStepVerification);
  };

  const handleVerificationCodeChange = (e) => {
    setVerificationCode(e.target.value);
  };

  const verifyCode = () => {
    // Simulate code verification
    if (verificationCode === "123456") {
      alert("Verification successful!");
    } else {
      alert("Invalid verification code.");
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Main Content */}
      <main className="flex-grow p-8 bg-white shadow-md rounded-lg mx-auto max-w-3xl">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-4 mb-8">
          <h2 className="text-2xl font-semibold text-gray-700">
            Sign In & Security
          </h2>
          <div className="space-x-6">
            <button className="text-blue-600 hover:underline">Help</button>
            <button className="text-blue-600 hover:underline">Account Name</button>
          </div>
        </div>

        {/* Profile Information */}
        <section className="space-y-8">
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-gray-800">
              Profile Information
            </h3>
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center justify-between">
                <span className="font-medium">Email ID:</span>
                {editMode.email ? (
                  <input
                    type="email"
                    value={profileInfo.email}
                    onChange={(e) => handleInputChange(e, "email")}
                    className="flex-grow ml-4 border px-3 py-2 rounded-md shadow-sm"
                  />
                ) : (
                  <span className="flex-grow text-gray-600 ml-4">
                    {profileInfo.email}
                  </span>
                )}
                <button
                  onClick={() => toggleEditMode("email")}
                  className="text-blue-500 hover:underline"
                >
                  {editMode.email ? "✔️ Save" : "✏️ Edit"}
                </button>
              </div>

              {/* Phone Number */}
              <div className="flex items-center justify-between">
                <span className="font-medium">Phone Number:</span>
                {editMode.phoneNumber ? (
                  <input
                    type="tel"
                    value={profileInfo.phoneNumber}
                    onChange={(e) => handleInputChange(e, "phoneNumber")}
                    className="flex-grow ml-4 border px-3 py-2 rounded-md shadow-sm"
                  />
                ) : (
                  <span className="flex-grow text-gray-600 ml-4">
                    {profileInfo.phoneNumber}
                  </span>
                )}
                <button
                  onClick={() => toggleEditMode("phoneNumber")}
                  className="text-blue-500 hover:underline"
                >
                  {editMode.phoneNumber ? "✔️ Save" : "✏️ Edit"}
                </button>
              </div>

              {/* Verification */}
              <div className="flex items-center justify-between">
                <span className="font-medium">Verification:</span>
                {editMode.verification ? (
                  <input
                    type="text"
                    value={profileInfo.verification}
                    onChange={(e) => handleInputChange(e, "verification")}
                    className="flex-grow ml-4 border px-3 py-2 rounded-md shadow-sm"
                  />
                ) : (
                  <span className="flex-grow text-gray-600 ml-4">
                    {profileInfo.verification}
                  </span>
                )}
                <button
                  onClick={() => toggleEditMode("verification")}
                  className="text-blue-500 hover:underline"
                >
                  {editMode.verification ? "✔️ Save" : "✏️ Edit"}
                </button>
              </div>
            </div>

            {/* Security Section */}
            <div className="mt-8 border-t pt-8">
              <h3 className="font-semibold text-lg text-gray-800">Security</h3>

              {/* Two-Step Verification */}
              <div className="flex items-center justify-between">
                <span className="font-medium">Two-Step Verification:</span>
                <button
                  onClick={toggleTwoStepVerification}
                  className={`px-4 py-2 rounded-md ${twoStepVerification ? 'bg-green-500 text-white' : 'bg-gray-300'}`}
                >
                  {twoStepVerification ? "Disable" : "Enable"}
                </button>
              </div>

              {/* Two-Step Verification Code Input */}
              {twoStepVerification && (
                <div className="mt-4">
                  <label className="font-medium text-gray-700">Enter Verification Code:</label>
                  <div className="flex items-center space-x-4 mt-2">
                    <input
                      type="text"
                      value={verificationCode}
                      onChange={handleVerificationCodeChange}
                      className="flex-grow border px-3 py-2 rounded-md shadow-sm"
                      placeholder="Enter 6-digit code"
                    />
                    <button
                      onClick={verifyCode}
                      className="bg-blue-500 text-white px-4 py-2 rounded-md"
                    >
                      Verify
                    </button>
                  </div>
                </div>
              )}

              {/* Recovery Email */}
              <div className="flex items-center justify-between">
                <span className="font-medium">Recovery Email:</span>
                {editMode.recoveryEmail ? (
                  <input
                    type="email"
                    value={profileInfo.recoveryEmail}
                    onChange={(e) => handleInputChange(e, "recoveryEmail")}
                    className="flex-grow ml-4 border px-3 py-2 rounded-md shadow-sm"
                  />
                ) : (
                  <span className="flex-grow text-gray-600 ml-4">
                    {profileInfo.recoveryEmail}
                  </span>
                )}
                <button
                  onClick={() => toggleEditMode("recoveryEmail")}
                  className="text-blue-500 hover:underline"
                >
                  {editMode.recoveryEmail ? "✔️ Save" : "✏️ Edit"}
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default SettingsPage;
