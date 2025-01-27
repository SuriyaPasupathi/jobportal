import React from "react";
import { useNavigate } from "react-router-dom";
import job from "../assets/job.png";
import job1 from "../assets/job1.png";
import job2 from "../assets/job2.png";
import job3 from "../assets/job3.png";
import job4 from "../assets/job4.png";
import job5 from "../assets/Trusted by.png";

function Home() {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/Employer_Login");
    };
    const handleLogin2 = () => {
        navigate("/Candidate_Login");
    };
    return (
        <div className="bg-[#171b30] ">
            <div className="body">
                <div className="container-header flex justify-between items-center px-8  bg-[#171b30] text-white">
                    <div className="logo">
                        <img
                            src="https://tse3.mm.bing.net/th?id=OIP.UuiREMxj9OM3cGtGdN1D5QHaFp&pid=Api&P=0&h=180"
                            alt="Logo"
                            className="w-28 h-24"
                        />
                    </div>
                    <div className="navbar flex-grow flex justify-center space-x-12 ml-44">
                        <button className="text-gray-300 hover:text-white hover:bg-blue-600 px-3 py-2 rounded-[18px]">Home</button>
                        <button className="text-gray-300 hover:text-white hover:bg-blue-600 px-3 py-2 rounded-[18px]">Find jobs</button>
                        <button className="text-gray-300 hover:text-white hover:bg-blue-600 px-3 py-2 rounded-[18px]">How it works</button>
                        <button className="text-gray-300 hover:text-white hover:bg-blue-600 px-3 py-2 rounded-[18px]">Articles</button>
                        <button className="text-gray-300 hover:text-white hover:bg-blue-600 px-3 py-2 rounded-[18px]">Contact</button>
                    </div>
                    <div className="login-button flex space-x-6">
                        <button
                            className="text-white px-3 py-2 rounded-[20px] border border-[white] bg-[#171b30] hover:bg-blue-600"
                            onClick={handleLogin}
                        >
                            Employer Login
                        </button>
                        <button
                            className="text-white px-3 py-2 rounded-[20px] border border-[white] bg-[#4287f5] hover:bg-whi-600"
                            onClick={handleLogin2}
                        >
                            Candidate Login
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center ">
                <div className="text-center text-white max-w-2xl mb-5 mt-2">
                    <h1 className="text-3xl font-bold mb-2 mr-5">
                        The #1 Job Site to Find Remote Jobs
                    </h1>
                    <p className="text-3xl font-bold mb-2 mr-5">No Ads, No Scams, No Junk</p>
                </div>
                <div className="flex flex-wrap justify-center items-center  space-x-8 mb-12">
                    <span className="text-xl font-medium text-gray-300">Popular Jobs:</span>
                    <button className="text-white px-3 py-2 rounded-[18px] shadow-md  hover:bg-blue-600">
                        Designer
                    </button>
                    <button className="text-white px-3 py-2 rounded-[18px] shadow-md  hover:bg-blue-600">
                        Web Developer
                    </button>
                    <button className="text-white px-3 py-2 rounded-[18px] shadow-md  hover:bg-blue-600">
                        Software Engineer
                    </button>
                </div>
                <div>
                    <img src={job} alt="Job Visual" className="max-w-full rounded-lg " />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-7 my-4 mb-18">
                    <img src={job1} alt="Company Logo 1" className="max-w-full  rounded-lg shadow-md" />
                    <img src={job2} alt="Company Logo 2" className="max-w-full  rounded-lg shadow-md" />
                    <img src={job3} alt="Company Logo 3" className="max-w-full  rounded-lg shadow-md" />
                    <img src={job4} alt="Company Logo 4" className="max-w-full  rounded-lg shadow-md" />
                    <img src={job5} alt="Trusted By Logo" className="max-w-full rounded-lg shadow-md ml-8 mt-2" />
                </div>
            </div>
        </div>
    );
}
export default Home;
