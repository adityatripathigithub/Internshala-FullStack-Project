import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = () => {
    // Initialize React Hook Form
    const { register, handleSubmit } = useForm();
    const [registerdata, setregisterdata] = useState(null);
    console.log(registerdata);
    

    // Handle form submission
    const onSubmit = (data) => {
        setregisterdata(data) 
        console.log(registerdata);
        // Log form data to the console
    };

    return (
        <div className="container h-screen w-full flex items-center justify-center gap-10 bg-slate-300">
      <Link to='/' className='absolute top-5 left-5 text-2xl font-bold hover:text-[#1295C9] duration-200'> <i class="ri-arrow-left-line"></i>Home</Link>

            <img src="Internshala_company_logo.png" alt="" />

            {/* Form submission */}
            <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 flex flex-col gap-5">
                <h1 className="text-2xl font-bold">Register Page</h1>
                
                {/* Register inputs with React Hook Form */}
                <input
                    {...register("username")}
                    className="w-full py-2 border-2 border-slate-800 rounded-md bg-slate-200 px-2"
                    type="text"
                    name="username"
                    placeholder="Username"
                />
                <input
                    {...register("fullname")}
                    className="w-full py-2 border-2 border-slate-800 rounded-md bg-slate-200 px-2"
                    type="text"
                    name="fullname"
                    placeholder="Full Name"
                />
                <input
                    {...register("email")}
                    className="w-full py-2 border-2 border-slate-800 rounded-md bg-slate-200 px-2"
                    type="email"
                    name="email"
                    placeholder="Email"
                />
                <input
                    {...register("password")}
                    className="w-full py-2 border-2 border-slate-800 rounded-md bg-slate-200 px-2"
                    type="password"
                    name="password"
                    placeholder="Password"
                />

                <button
                    className="w-[20%] bg-zinc-300 px-4 py-2 rounded-md border-2 border-black hover:bg-green-500 hover:text-white hover:border-green-500 duration-300"
                    type="submit"
                >
                    Register
                </button>
            </form>
        </div>
    );
};

export default Register;
