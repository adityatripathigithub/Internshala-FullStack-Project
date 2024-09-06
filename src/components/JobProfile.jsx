import React from "react";
import { Link } from "react-router-dom";

const JobProfile = () => {
    return (
        <div className="w-screen h-screen bg-slate-300 flex justify-center items-center overflow-x-auto">
            <Link to="/" className="absolute top-5 left-5 text-2xl font-bold hover:text-[#1295C9] duration-200">
                <i class="ri-arrow-left-line"></i>Home
            </Link>

            <h1 className="absolute text-5xl font-bold top-[15%] left-20 ">Jobs Details</h1>
            <div className=" h-[50%] flex justify-center items-center gap-[2%]  ">
                <div className="w-[20vw] h-full bg-slate-500"></div>
                <div className="w-[20vw] h-full bg-slate-500"></div>
                <div className="w-[20vw] h-full bg-slate-500"></div>
                <div className="w-[20vw] h-full bg-slate-500"></div>
                <div className="w-[20vw] h-full bg-slate-500"></div>
                <div className="w-[20vw] h-full bg-slate-500"></div>
                <div className="w-[20vw] h-full bg-slate-500"></div>
                <div className="w-[20vw] h-full bg-slate-500"></div>
                <div className="w-[20vw] h-full bg-slate-500"></div>
            </div>
        </div>
    );
};

export default JobProfile;
