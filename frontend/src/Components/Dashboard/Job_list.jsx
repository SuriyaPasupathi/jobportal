import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { LiaEditSolid } from "react-icons/lia"; // Importing the edit icon
import { AiOutlinePlusCircle } from "react-icons/ai"; // Importing the add icon


const DashboardPage = () => {
  const [jobDetails, setJobDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch job details from the backend
  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/employer/jobpost/");
        setJobDetails(response.data); // Assuming the response data is an array
        setLoading(false);
      } catch (error) {
        console.error("Error fetching job details:", error);
        setLoading(false);
      }
    };

    fetchJobDetails();
  }, []);

  // Handle Edit Click
  const handleEditClick = (jobpost) => {
    navigate("/update", {
      state: { jobDetails: jobpost }, // Pass jobpost as state for editing
    });
  };

  // Handle Create Job Post Click
  const handleCreateJobClick = () => {
    navigate("/Job_post"); // Navigate to create job page
  };

  return (
    <div className="flex h-screen">
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between px-6 py-4 bg-gray-50 border-b">
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Filter and search jobs"
              className="border rounded px-4 py-2 w-96"
            />
          </div>
          <div className="flex items-center space-x-4">
            <AiOutlinePlusCircle
              className="text-blue-600 cursor-pointer text-3xl"
              onClick={handleCreateJobClick}
            />
            <a href="#" className="text-blue-600 hover:underline">
              Help
            </a>
            <a href="#" className="text-blue-600 hover:underline">
              Account Name
            </a>
            {/* Icon for Create Job Post */}
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-auto p-6 bg-white">
          <table className="w-full border-collapse border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th style={{ padding: "10px" }}>Select</th>
                <th style={{ padding: "10px" }}>Job Title</th>
                <th style={{ padding: "10px" }}>Location</th>
                <th style={{ padding: "10px" }}>Experience</th>
                <th style={{ padding: "10px" }}>Candidates</th>
                <th style={{ padding: "10px" }}>Date Posted</th>
                <th style={{ padding: "10px" }}>Email</th>
                <th style={{ padding: "10px" }}>Job Status</th>
                <th style={{ padding: "10px" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="12" className="text-center p-4">
                    Loading job details...
                  </td>
                </tr>
              ) : jobDetails.length === 0 ? (
                <tr>
                  <td colSpan="12" className="text-center p-4">
                    No job posts available.
                  </td>
                </tr>
              ) : (
                jobDetails.map((jobpost, index) => (
                  <tr key={index}>
                    <td style={{ padding: "10px" }}>
                      <input type="checkbox" />
                    </td>
                    <td style={{ padding: "10px" }}>{jobpost.job_title}</td>
                    <td style={{ padding: "10px" }}>{jobpost.location}</td>
                    <td style={{ padding: "10px" }}>{jobpost.experience} years</td>
                    <td style={{ padding: "10px" }}>{jobpost.no_of_vacancies}</td>
                    <td style={{ padding: "10px" }}>{jobpost.date_posted}</td>
                    <td style={{ padding: "10px" }}>{jobpost.email}</td>
                    <td style={{ padding: "10px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span>{jobpost.job_status}</span>
                      <LiaEditSolid
                        className="text-green-500 cursor-pointer text-xl hover:text-green-600"
                        onClick={() => handleEditClick(jobpost)}
                      />
               
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
