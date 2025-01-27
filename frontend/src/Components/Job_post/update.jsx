import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import axios from "axios";

const UpdateJobPost = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Fetch jobDetails from location state for edit mode
  const jobDetails = location.state?.jobDetails;

  // Form data state
  const [formData, setFormData] = useState({
    company_name: "",
    company_logo: "",
    first_name: "",
    last_name: "",
    country_code: "",
    phone_no: "",
    job_title: "",
    no_of_vacancies: "",
    job_location_type: "",
    location: "",
    job_type: "",
    experience: "",
    pay_and_benefits: "",
    benefits: "",
    job_description: "",
    date_posted: "",
    email: "",
    job_status: "",
  });

  // Step state
  const [activeStep, setActiveStep] = useState(0);
  const steps = ["Company Info", "Job Details", "Additional Information"];

  // Populate form data when editing an existing job post
  useEffect(() => {
    if (jobDetails) {
      setFormData(jobDetails);
    }
  }, [jobDetails]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({ ...prevData, company_logo: file }));
  };

  // Step navigation handlers
  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);

  // Submit the updated job post
  const handleUpdateJobPost = async () => {
    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === "company_logo" && formData[key]) {
        formDataToSend.append(key, formData[key]);
      } else if (key !== "company_logo") {
        formDataToSend.append(key, formData[key]);
      }
    });

    try {
      const response = await axios.put(
        `http://127.0.0.1:8000/employer/job/${jobDetails?.id}/`,
        formDataToSend,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      alert("Job updated successfully!");
      console.log("Updated job:", response.data);
      navigate("/job-post-list");
    } catch (error) {
      console.error("Error updating job:", error);
      alert("Failed to update the job post.");
    }
  };

  // Render step content
  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <div className="space-y-4">
            <TextField
              name="company_name"
              label="Company Name"
              value={formData.company_name}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <Button variant="contained" component="label">
              Upload Company Logo
              <input type="file" hidden onChange={handleFileChange} />
            </Button>
            <TextField
              name="first_name"
              label="First Name"
              value={formData.first_name}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="last_name"
              label="Last Name"
              value={formData.last_name}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="country_code"
              label="Country Code"
              value={formData.country_code}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="phone_no"
              label="Phone Number"
              value={formData.phone_no}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </div>
        );
      case 1:
        return (
          <div className="space-y-4">
            <TextField
              name="job_title"
              label="Job Title"
              value={formData.job_title}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="no_of_vacancies"
              label="No of Vacancies"
              value={formData.no_of_vacancies}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <FormControl fullWidth margin="normal">
              <InputLabel>Job Location Type</InputLabel>
              <Select
                name="job_location_type"
                value={formData.job_location_type}
                onChange={handleChange}
              >
                <MenuItem value="Remote">Remote</MenuItem>
                <MenuItem value="On-site">On-site</MenuItem>
                <MenuItem value="Hybrid">Hybrid</MenuItem>
              </Select>
            </FormControl>
            <TextField
              name="location"
              label="Location"
              value={formData.location}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <FormControl fullWidth margin="normal">
              <InputLabel>Job Type</InputLabel>
              <Select
                name="job_type"
                value={formData.job_type}
                onChange={handleChange}
              >
                <MenuItem value="Full-time">Full-time</MenuItem>
                <MenuItem value="Part-time">Part-time</MenuItem>
                <MenuItem value="Contract">Contract</MenuItem>
              </Select>
            </FormControl>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <TextField
              name="experience"
              label="Experience"
              value={formData.experience}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="pay_and_benefits"
              label="Pay & Benefits"
              value={formData.pay_and_benefits}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="benefits"
              label="Benefits"
              value={formData.benefits}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="job_description"
              label="Job Description"
              value={formData.job_description}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="date_posted"
              label="Date Posted"
              type="date" // Date input type
              value={formData.date_posted}
              onChange={handleChange}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true, // Makes sure the label remains above the input
              }}
            />
            <TextField
              name="email"
              label="Email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="job_status"
              label="Job Status"
              value={formData.job_status}
              onChange={handleChange}
              fullWidth
              margin="normal"
              select
            >
              <MenuItem value="Open">Open</MenuItem>
              <MenuItem value="Closed">Closed</MenuItem>
              <MenuItem value="Paused">Paused</MenuItem>
              <MenuItem value="Filled">Filled</MenuItem>
            </TextField>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <div className="p-6">{renderStepContent(activeStep)}</div>

      <div className="flex justify-between mt-4">
        <Button disabled={activeStep === 0} onClick={handleBack}>
          Back
        </Button>
        {activeStep === steps.length - 1 ? (
          <Button variant="contained" color="primary" onClick={handleUpdateJobPost}>
            Update Job
          </Button>
        ) : (
          <Button variant="contained" color="primary" onClick={handleNext}>
            Next
          </Button>
        )}
      </div>
    </div>
  );
};

export default UpdateJobPost;
