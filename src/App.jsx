import React from "react";
import {Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import JobProfile from "./components/JobProfile";
import Courses from "./components/Courses";

const App = () => {
    return (      
      
    <>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/jobprofile" element={<JobProfile />} />
      <Route path="/courses" element={<Courses />} />
    </Routes>
    </>
    )
}

export default App;


