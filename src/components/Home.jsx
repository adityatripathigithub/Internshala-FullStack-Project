import React from "react";
import Nav from "./Nav";
import { linearGradient } from "framer-motion/client";

const Home = () => {
    return (
        <div className="w-screen h-screen bg-slate-200">
            <Nav />

            <img className="w-[13%] ml-10 pt-10" src="Internshala_company_logo.png" alt="" />

            <p className="w-[45%] text-xl text-left mt-[18%] pl-10 font-bold leading-[30px]">
                Internshala is a leading platform designed to help students and <br /> fresh graduates find internships and online training opportunities <br /> across various industries.
            </p>
           
            <div style={{ background:`linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.7),rgba(0,0,0,.9)`}}  
            className="w-[10%] h-[20%] bg-red-400 absolute left-[50%] top-[30%] z-10 "></div>
           
            <div style={{ background:`linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.7),rgba(0,0,0,.9)`}}
            className="w-[10%] h-[20%] bg-red-400 absolute left-[89%] top-[70%] "></div>
           
            <img className="absolute left-[57%] bottom-[18%]" src="study.png" alt="" />
        </div>
    );
};

export default Home;
