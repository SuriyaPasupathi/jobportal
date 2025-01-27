import React, { useState } from "react";

function ProfilePage() {
  const [profileInfo, setProfileInfo] = useState({
    name: "Tony Stark",
    companyName: "Stark Industries",
    location: "New York City, NY, 8090",
    logo: "", // Placeholder for the company logo
  });

  const [editMode, setEditMode] = useState({
    name: false,
    companyName: false,
    location: false,
    logo: false,
  });

  const handleInputChange = (e, field) => {
    setProfileInfo({ ...profileInfo, [field]: e.target.value });
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileInfo({ ...profileInfo, logo: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleEditMode = (field) => {
    setEditMode({ ...editMode, [field]: !editMode[field] });
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
     

      {/* Main Content */}
      <main className="flex-grow p-8 bg-white">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-4 mb-8">
          <h2 className="text-2xl font-semibold">Employer Profile</h2>
          <div className="space-x-6">
            <button className="text-blue-600">Help</button>
            <button className="text-blue-600">Account name</button>
          </div>
        </div>

        {/* Profile Information */}
        <section className="space-y-8">
          {/* Company Logo */}
          <div className="space-y-4">
            <h3 className="font-semibold">Company Logo</h3>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 border rounded bg-gray-100 flex items-center justify-center overflow-hidden">
                {profileInfo.logo ? (
                  <img
                    src={profileInfo.logo}
                    alt="Company Logo"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-gray-400">Logo</span>
                )}
              </div>
              {editMode.logo ? (
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleLogoUpload}
                  className="text-gray-600"
                />
              ) : null}
              <button
                onClick={() => toggleEditMode("logo")}
                className="text-blue-500"
              >
                {editMode.logo ? "✔️ Save" : "✏️ Edit"}
              </button>
            </div>
          </div>

          {/* Profile Details */}
          <div className="space-y-4">
            <h3 className="font-semibold">Profile Information</h3>
            <div className="space-y-4">
              {/* Name */}
              <div className="flex items-center justify-between">
                <span>Name:</span>
                {editMode.name ? (
                  <input
                    type="text"
                    value={profileInfo.name}
                    onChange={(e) => handleInputChange(e, "name")}
                    className="flex-grow ml-2 border px-2 py-1 rounded"
                  />
                ) : (
                  <span className="flex-grow text-gray-600 ml-2">
                    {profileInfo.name}
                  </span>
                )}
                <button
                  onClick={() => toggleEditMode("name")}
                  className="text-blue-500"
                >
                  {editMode.name ? "✔️ Save" : "✏️ Edit"}
                </button>
              </div>

              {/* Company Name */}
              <div className="flex items-center justify-between">
                <span>Company name:</span>
                {editMode.companyName ? (
                  <input
                    type="text"
                    value={profileInfo.companyName}
                    onChange={(e) => handleInputChange(e, "companyName")}
                    className="flex-grow ml-2 border px-2 py-1 rounded"
                  />
                ) : (
                  <span className="flex-grow text-gray-600 ml-2">
                    {profileInfo.companyName}
                  </span>
                )}
                <button
                  onClick={() => toggleEditMode("companyName")}
                  className="text-blue-500"
                >
                  {editMode.companyName ? "✔️ Save" : "✏️ Edit"}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-center justify-between">
                <span>Location:</span>
                {editMode.location ? (
                  <input
                    type="text"
                    value={profileInfo.location}
                    onChange={(e) => handleInputChange(e, "location")}
                    className="flex-grow ml-2 border px-2 py-1 rounded"
                  />
                ) : (
                  <span className="flex-grow text-gray-600 ml-2">
                    {profileInfo.location}
                  </span>
                )}
                <button
                  onClick={() => toggleEditMode("location")}
                  className="text-blue-500"
                >
                  {editMode.location ? "✔️ Save" : "✏️ Edit"}
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ProfilePage;
