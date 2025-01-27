import React, { useState, useEffect } from "react";

function EmployerProfile({ onValidation }) {
  const [jobPostTitle, setJobPostTitle] = useState("");
  const [postType, setPostType] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const isValid = jobPostTitle && postType;
    onValidation(isValid);
  }, [jobPostTitle, postType, onValidation]);

  const handleNextValidation = (e) => {
    e.preventDefault();
    if (!jobPostTitle || !postType) {
      setError("All fields are required.");
    } else {
      setError(null);
      onValidation(true);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleNextValidation}>
      <div>
        <label className="block text-sm font-semibold text-gray-700">
          Job Post Title
        </label>
        <input
          type="text"
          value={jobPostTitle}
          onChange={(e) => setJobPostTitle(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700">
          Post Type
        </label>
        <div className="space-y-2">
          <div className="flex items-center">
            <input
              type="radio"
              name="postType"
              value="template"
              onChange={(e) => setPostType(e.target.value)}
              className="mr-2"
            />
            <span>Use a previous job as a template</span>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              name="postType"
              value="new"
              onChange={(e) => setPostType(e.target.value)}
              className="mr-2"
            />
            <span>Create a brand new post</span>
          </div>
        </div>
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Next
      </button>
    </form>
  );
}

export default EmployerProfile;
