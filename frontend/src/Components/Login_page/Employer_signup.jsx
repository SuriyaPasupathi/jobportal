import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";



const Register = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');  // State for error
    const [successMessage, setSuccessMessage] = useState('');  // State for success message

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };
const navigate=useNavigate();
    const handleRegister = async (e) => {
        e.preventDefault();
        setError('');  // Reset previous error messages
        setSuccessMessage('');  // Reset success message
        try {
            const response = await axios.post(
                'http://127.0.0.1:8000/employer/register/',
                formData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            console.log(response); // Debug the response
            if (response.status === 201) {
                navigate("/Employer_Login");
                setSuccessMessage(response.data.message || 'Recruiter registered successfully!');
            }
        } catch (error) {
            console.error(error); // Debug error
            const errorMessage = error.response?.data?.error ||
                'Failed to register. Please check your input.';
            setError(errorMessage);
        }
        
    };


    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold mb-4">Create an account</h2>
                <form onSubmit={handleRegister}>
                    <label className="block mb-2">Email address</label>
                    <input
                        type="email"
                        name="email"
                        className="w-full p-2 border border-gray-300 rounded mb-4"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                    {error && <p className="text-red-500 mb-4">{error} <Link to="/Employer_Login" className="text-blue-500">Sign in</Link></p>}

                    <label className="block mb-2">Password</label>
                    <input
                        type="password"
                        name="password"
                        className="w-full p-2 border border-gray-300 rounded mb-4"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                    />
                    <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Continue</button>
                </form>
                <p className="mt-4">Already have an account? <Link to="/Employer_Login" className="text-blue-500">Sign in</Link></p>
            </div>
        </div>
    );
};

export default Register;
