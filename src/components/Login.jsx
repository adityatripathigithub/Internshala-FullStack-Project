import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm(); // Use 'register' instead of 'userlogin'
  const [logindata, setlogindata] = useState(null);

  // Handle form submission
  const onSubmit = (data) => {
    setlogindata(data); // Store login data
    console.log(data); // Log form data to the console
  };

  return (
    <div className="container h-screen w-full flex items-center justify-center gap-10 bg-slate-300">
      <Link to='/' className='absolute top-5 left-5 text-2xl font-bold hover:text-[#1295C9] duration-200'> <i class="ri-arrow-left-line"></i>Home</Link>

      <img src="Internshala_company_logo.png" alt="Company Logo" />
      <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 flex flex-col gap-5">
        <h1 className="text-2xl font-bold">Login Page</h1>

        <input
          {...register("username")} // Corrected to 'register'
          className="w-full py-2 border-2 border-slate-800 rounded-md bg-slate-200 px-2"
          type="text"
          placeholder="Username"
        />

        <input
          {...register("password")} // Corrected to 'register'
          className="w-full py-2 border-2 border-slate-800 rounded-md bg-slate-200 px-2"
          type="password"
          placeholder="Password"
        />

        <button
          className="w-[20%] bg-slate-200 px-4 py-2 rounded-md border-2 border-black hover:bg-green-500 hover:text-white hover:border-green-500 duration-300"
          type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
