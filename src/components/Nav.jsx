import React from "react";
// import login from './Login'
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <nav className="w-[50%] h-[8%] bg-slate-300 rounded flex justify-center items-center gap-10 ml-[27%] absolute top-10 ">
                <Link className="hover:scale-125 duration-300" to="/jobprofile">job Profile</Link>
                <Link className="hover:scale-125 duration-300" to="/courses">Courses</Link>
                <Link className="hover:scale-125 duration-300" to="/login" >Login</Link>
                <Link className="hover:scale-125 duration-300" to="register">Register</Link>

            </nav>
        </div>
    );
};

export default Nav;
