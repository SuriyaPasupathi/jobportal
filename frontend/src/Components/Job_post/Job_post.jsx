import React, { useState } from "react";
import { Stepper, Step, StepLabel, Button, TextField, MenuItem, Select, InputLabel, FormControl } from "@mui/material";
import axios from "axios";

const JobPostStepper = () => {
  const steps = ["Company Info", "Job Details", "Additional Information"];
  const [activeStep, setActiveStep] = useState(0);
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

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, company_logo: file });
  };

  const handleCreateJobPost = async () => {
    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === "company_logo" && formData[key]) {
        formDataToSend.append(key, formData[key]);
      } else if (key !== "company_logo") {
        formDataToSend.append(key, formData[key]);
      }
    });

    try {
      const response = await axios.post("http://127.0.0.1:8000/employer/jobpost/", formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log("Job posted successfully:", response.data);
      alert("Job posted successfully!");
    } catch (error) {
      console.error("Error creating job post:", error);
      alert("Error occurred while posting the job.");
    }
  };

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
        {steps.map((label, index) => (
          <Step key={index}>
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
          <Button onClick={handleCreateJobPost}>Submit</Button>
        ) : (
          <Button onClick={handleNext}>Next</Button>
        )}
      </div>
    </div>
  );
};

export default JobPostStepper;




