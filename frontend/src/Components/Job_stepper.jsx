import React, { useState } from "react";
import EmployerAccountForm from "../Components/Login_page/Employer_profile";
import EmployerProfile from "../Components/Login_page/Employer_profile2";
import AddJobDetails from "../Components/Job_post/Job_post";
import AddJobPost2 from "../Components/Job_post/Job_post2";
import CreateDescription from "../Components/Job_post/Job_description"; // Import Job Description page

function JobStepper() {
  const [currentStep, setCurrentStep] = useState(1);
  const [employerAccountValid, setEmployerAccountValid] = useState(false);
  const [employerProfileValid, setEmployerProfileValid] = useState(false);
  const [jobDetailsValid, setJobDetailsValid] = useState(false);
  const [jobPost2Valid, setJobPost2Valid] = useState(false);
  const [jobDescriptionValid, setJobDescriptionValid] = useState(false);

  const handleNext = () => {
    if (currentStep === 1 && employerAccountValid) {
      setCurrentStep((prev) => prev + 1);
    } else if (currentStep === 2 && employerProfileValid) {
      setCurrentStep((prev) => prev + 1);
    } else if (currentStep === 3 && jobDetailsValid) {
      setCurrentStep((prev) => prev + 1);
    } else if (currentStep === 4 && jobPost2Valid) {
      setCurrentStep((prev) => prev + 1);
    } else if (currentStep === 5 && jobDescriptionValid) {
      alert("Job posting process completed!");
    }
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <EmployerAccountForm onValidation={setEmployerAccountValid} />;
      case 2:
        return <EmployerProfile onValidation={setEmployerProfileValid} />;
      case 3:
        return <AddJobDetails onValidation={setJobDetailsValid} />;
      case 4:
        return <AddJobPost2 onValidation={setJobPost2Valid} />;
      case 5:
        return <CreateDescription onValidation={setJobDescriptionValid} />;
      default:
        return <div>Unknown Step</div>;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <h1 className="text-3xl font-bold mb-8 text-black">Employer Profile</h1>
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6">
        {renderStepContent()}
        <div className="flex justify-between mt-6">
          <button
            type="button"
            className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400"
            onClick={handlePrevious}
            disabled={currentStep === 1}
          >
            Back
          </button>
          <button
            type="button"
            className={`py-2 px-4 rounded ${
              currentStep === 1
                ? employerAccountValid
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
                : currentStep === 2
                ? employerProfileValid
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
                : currentStep === 3
                ? jobDetailsValid
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
                : currentStep === 4
                ? jobPost2Valid
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
                : currentStep === 5
                ? jobDescriptionValid
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
            onClick={handleNext}
            disabled={
              currentStep === 1
                ? !employerAccountValid
                : currentStep === 2
                ? !employerProfileValid
                : currentStep === 3
                ? !jobDetailsValid
                : currentStep === 4
                ? !jobPost2Valid
                : currentStep === 5
                ? !jobDescriptionValid
                : false
            }
          >
            {currentStep === 5 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default JobStepper;











// import React, { useState } from "react";
// import EmployerAccountForm from "../Components/Login_page/Employer_profile";
// import EmployerProfile from "../Components/Login_page/Employer_profile2";
// import AddJobDetails from "../Components/Job_post/Job_post";
// import AddDetails from "../Components/Job_post/Job_post2";

// function JobStepper() {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [formData, setFormData] = useState({
//     companyName: "",
//     logo: null,
//     firstName: "",
//     lastName: "",
//     phoneNumber: "",
//     jobPostTitle: "",
//     postType: "",
//     jobTitle: "",
//     numberOfPeople: "",
//     jobLocationType: "",
//     location: "",
//     jobType: "",
//     experience: "",
//     payAndBenefits: "",
//     benefits: "",
//   });
//   const [errors, setErrors] = useState({});

//   // Validation function for all steps
//   const validateFields = () => {
//     const newErrors = {};
//     switch (currentStep) {
//       case 1:
//         if (!formData.companyName) newErrors.companyName = "Company name is required.";
//         if (!formData.firstName) newErrors.firstName = "First name is required.";
//         if (!formData.lastName) newErrors.lastName = "Last name is required.";
//         if (!formData.phoneNumber) newErrors.phoneNumber = "Phone number is required.";
//         break;
//       case 2:
//         if (!formData.logo) newErrors.logo = "Company logo is required.";
//         break;
//       case 3:
//         if (!formData.jobPostTitle) newErrors.jobPostTitle = "Job post title is required.";
//         if (!formData.jobTitle) newErrors.jobTitle = "Job title is required.";
//         if (!formData.jobType) newErrors.jobType = "Job type is required.";
//         break;
//       case 4:
//         if (!formData.experience) newErrors.experience = "Experience is required.";
//         if (!formData.payAndBenefits) newErrors.payAndBenefits = "Pay and benefits are required.";
//         break;
//       default:
//         break;
//     }
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0; // Returns true if no errors
//   };

//   const handleNext = () => {
//     if (validateFields()) {
//       setCurrentStep((prev) => prev + 1);
//     }
//   };

//   const handlePrevious = () => {
//     setCurrentStep((prev) => prev - 1);
//   };

//   const handleDataChange = (updatedData) => {
//     setFormData(updatedData);
//     setErrors({}); // Clear errors when the user updates data
//   };

//   const renderStepContent = () => {
//     switch (currentStep) {
//       case 1:
//         return (
//           <EmployerAccountForm
//             data={formData}
//             errors={errors}
//             onChange={handleDataChange}
//           />
//         );
//       case 2:
//         return (
//           <EmployerProfile
//             data={formData}
//             errors={errors}
//             onChange={handleDataChange}
//           />
//         );
//       case 3:
//         return (
//           <AddJobDetails
//             data={formData}
//             errors={errors}
//             onChange={handleDataChange}
//           />
//         );
//       case 4:
//         return (
//           <AddDetails
//             data={formData}
//             errors={errors}
//             onChange={handleDataChange}
//           />
//         );
//       default:
//         return <div>Unknown step</div>;
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
//       <h1 className="text-3xl font-bold mb-8">Employer Onboarding</h1>
//       <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6">
//         {renderStepContent()}
//         <div className="flex justify-between mt-6">
//           <button
//             type="button"
//             className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400"
//             onClick={handlePrevious}
//             disabled={currentStep === 1}
//           >
//             Back
//           </button>
//           {currentStep < 4 ? (
//             <button
//               type="button"
//               className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
//               onClick={handleNext}
//             >
//               Next
//             </button>
//           ) : (
//             <button
//               type="button"
//               className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
//               onClick={() => alert("All steps completed!")}
//             >
//               Finish
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default JobStepper;



















































































































































































// // import React, { useState } from "react";
// // import {
// //   Stepper,
// //   Step,
// //   StepLabel,
// //   Button,
// //   Typography,
// //   TextField,
// // } from "@mui/material";
// // import axios from "axios";

// // function JobStepper() {
// //   const [activeStep, setActiveStep] = useState(0);
// //   const [errors, setErrors] = useState({});
// //   const [formData, setFormData] = useState({
// //     companyName: "",
// //     logo: null,
// //     firstName: "",
// //     lastName: "",
// //     phoneNumber: "",
// //     jobTitle: "",
// //     jobLocation: "",
// //     salary: "",
// //     benefits: "",
// //     jobDescription: "",
// //   });

// //   const steps = [
// //     "Employer Account Form",
// //     "Add Job Details",
// //     "Add More Details",
// //     "Create Job Description",
// //   ];

// //   const validateStep = (step) => {
// //     let currentErrors = {};
// //     switch (step) {
// //       case 0:
// //         if (!formData.companyName.trim()) {
// //           currentErrors.companyName = "Company name is required.";
// //         }
// //         if (!formData.logo) {
// //           currentErrors.logo = "Company logo is required.";
// //         }
// //         if (!formData.firstName.trim()) {
// //           currentErrors.firstName = "First name is required.";
// //         }
// //         if (!formData.lastName.trim()) {
// //           currentErrors.lastName = "Last name is required.";
// //         }
// //         if (!formData.phoneNumber.trim()) {
// //           currentErrors.phoneNumber = "Phone number is required.";
// //         } else if (!/^\d+$/.test(formData.phoneNumber)) {
// //           currentErrors.phoneNumber = "Phone number must contain only digits.";
// //         }
// //         break;
// //       case 1:
// //         if (!formData.jobTitle.trim()) {
// //           currentErrors.jobTitle = "Job title is required.";
// //         }
// //         if (!formData.jobLocation.trim()) {
// //           currentErrors.jobLocation = "Job location is required.";
// //         }
// //         break;
// //       case 2:
// //         if (!formData.salary.trim()) {
// //           currentErrors.salary = "Salary is required.";
// //         }
// //         if (!formData.benefits.trim()) {
// //           currentErrors.benefits = "Benefits are required.";
// //         }
// //         break;
// //       case 3:
// //         if (!formData.jobDescription.trim()) {
// //           currentErrors.jobDescription = "Job description is required.";
// //         }
// //         break;
// //       default:
// //         break;
// //     }
// //     setErrors(currentErrors);
// //     return Object.keys(currentErrors).length === 0;
// //   };

// //   const handleNext = async () => {
// //     if (validateStep(activeStep)) {
// //       if (activeStep === 0) {
// //         const stepFormData = new FormData();
// //         stepFormData.append("companyName", formData.companyName);
// //         stepFormData.append("logo", formData.logo);
// //         stepFormData.append("firstName", formData.firstName);
// //         stepFormData.append("lastName", formData.lastName);
// //         stepFormData.append("phoneNumber", formData.phoneNumber);

// //         try {
// //           const response = await axios.post(
// //             "http://127.0.0.1:8000/employer/employer_profile/",
// //             stepFormData,
// //             { headers: { "Content-Type": "multipart/form-data" } }
// //           );
// //           console.log(response);
// //           alert(response.data.message || "Step 1 data submitted successfully!");
// //         } catch (error) {
// //           console.error("Error while submitting step 1 data:", error);
// //           alert("Failed to submit step 1 data.");
// //           return;
// //         }
// //       }
// //       setActiveStep((prevStep) => prevStep + 1);
// //     }
// //   };

// //   const handleBack = () => {
// //     setActiveStep((prevStep) => prevStep - 1);
// //   };

// //   const renderStepContent = (step) => {
// //     switch (step) {
// //       case 0:
// //         return (
// //           <div className="space-y-6">
// //             <Typography variant="body1" gutterBottom>
// //               Company Name
// //             </Typography>
// //             <TextField
// //               variant="outlined"
// //               fullWidth
// //               value={formData.companyName}
// //               onChange={(e) =>
// //                 setFormData({ ...formData, companyName: e.target.value })
// //               }
// //               error={!!errors.companyName}
// //               helperText={errors.companyName}
// //             />
// //             <Typography variant="body1" gutterBottom>
// //               Upload Company Logo
// //             </Typography>
// //             <input
// //               type="file"
// //               accept="image/*"
// //               onChange={(e) =>
// //                 setFormData({ ...formData, logo: e.target.files[0] })
// //               }
// //             />
// //             {errors.logo && (
// //               <Typography color="error" variant="caption">
// //                 {errors.logo}
// //               </Typography>
// //             )}
// //             <TextField
// //               label="First Name"
// //               variant="outlined"
// //               fullWidth
// //               value={formData.firstName}
// //               onChange={(e) =>
// //                 setFormData({ ...formData, firstName: e.target.value })
// //               }
// //               error={!!errors.firstName}
// //               helperText={errors.firstName}
// //             />
// //             <TextField
// //               label="Last Name"
// //               variant="outlined"
// //               fullWidth
// //               value={formData.lastName}
// //               onChange={(e) =>
// //                 setFormData({ ...formData, lastName: e.target.value })
// //               }
// //               error={!!errors.lastName}
// //               helperText={errors.lastName}
// //             />
// //             <TextField
// //               label="Phone Number"
// //               variant="outlined"
// //               fullWidth
// //               value={formData.phoneNumber}
// //               onChange={(e) =>
// //                 setFormData({ ...formData, phoneNumber: e.target.value })
// //               }
// //               error={!!errors.phoneNumber}
// //               helperText={errors.phoneNumber}
// //             />
// //           </div>
// //         );
// //       case 1:
// //         return (
// //           <div className="space-y-6">
// //             <TextField
// //               label="Job Title"
// //               variant="outlined"
// //               fullWidth
// //               value={formData.jobTitle}
// //               onChange={(e) =>
// //                 setFormData({ ...formData, jobTitle: e.target.value })
// //               }
// //               error={!!errors.jobTitle}
// //               helperText={errors.jobTitle}
// //             />
// //             <TextField
// //               label="Job Location"
// //               variant="outlined"
// //               fullWidth
// //               value={formData.jobLocation}
// //               onChange={(e) =>
// //                 setFormData({ ...formData, jobLocation: e.target.value })
// //               }
// //               error={!!errors.jobLocation}
// //               helperText={errors.jobLocation}
// //             />
// //           </div>
// //         );
// //       case 2:
// //         return (
// //           <div className="space-y-6">
// //             <TextField
// //               label="Salary"
// //               variant="outlined"
// //               fullWidth
// //               value={formData.salary}
// //               onChange={(e) =>
// //                 setFormData({ ...formData, salary: e.target.value })
// //               }
// //               error={!!errors.salary}
// //               helperText={errors.salary}
// //             />
// //             <TextField
// //               label="Benefits"
// //               variant="outlined"
// //               fullWidth
// //               value={formData.benefits}
// //               onChange={(e) =>
// //                 setFormData({ ...formData, benefits: e.target.value })
// //               }
// //               error={!!errors.benefits}
// //               helperText={errors.benefits}
// //             />
// //           </div>
// //         );
// //       case 3:
// //         return (
// //           <TextField
// //             label="Job Description"
// //             variant="outlined"
// //             fullWidth
// //             multiline
// //             rows={4}
// //             value={formData.jobDescription}
// //             onChange={(e) =>
// //               setFormData({ ...formData, jobDescription: e.target.value })
// //             }
// //             error={!!errors.jobDescription}
// //             helperText={errors.jobDescription}
// //           />
// //         );
// //       default:
// //         return <div>Unknown step</div>;
// //     }
// //   };

// //   return (
// //     <div className="flex items-center justify-center min-h-screen bg-gray-100">
// //       <div className="bg-white shadow-md rounded-lg p-8 mt-5 w-full max-w-4xl">
// //         <Stepper activeStep={activeStep} alternativeLabel>
// //           {steps.map((label) => (
// //             <Step key={label}>
// //               <StepLabel>{label}</StepLabel>
// //             </Step>
// //           ))}
// //         </Stepper>
// //         <div className="mt-8">{renderStepContent(activeStep)}</div>
// //         <div className="mt-8 flex justify-between">
// //           <Button
// //             disabled={activeStep === 0}
// //             onClick={handleBack}
// //             variant="contained"
// //             color="secondary"
// //           >
// //             Back
// //           </Button>
// //           {activeStep < steps.length - 1 ? (
// //             <Button onClick={handleNext} variant="contained" color="primary">
// //               Next
// //             </Button>
// //           ) : (
// //             <Button
// //               onClick={() => alert("All steps completed!")}
// //               variant="contained"
// //               color="success"
// //             >
// //               Finish
// //             </Button>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default JobStepper;
