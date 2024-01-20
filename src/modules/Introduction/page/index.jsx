import React from "react";
import logo from "../../../assets/job_logo.png";
import { PiShootingStarThin } from "react-icons/pi";
import image from "../../../assets/bg-form.png";
import "./animation.css";
import { useNavigate } from "react-router-dom";

const IntroductionPage = () => {
  const navigate = useNavigate();

  return (
    <div className="mx-auto h-screen bg-rough_black pt-16 flex justify-center items-center">
      <div className="p-10">
        <div className="flex justify-start items-center space-x-5">
          <div className="text-9xl text-white font-bold ">Your Career</div>
          <div
            className="h-24 w-96 bg-transparent border-4 rounded-full border-blue-700 text-transparent hover:text-white flex justify-center items-center text-5xl cursor-pointer hover:bg-blue-700"
            onClick={() => navigate("/auth/sign_up")}
          >
            Get Started
          </div>
        </div>
        <div className="flex justify-start items-center space-x-5">
          <p className="text-9xl text-white font-bold">
            <span className=" text-blue-600">Success</span> is Just
          </p>
          <PiShootingStarThin className=" text-cyan-500" size={200} />
        </div>
        <p className="text-9xl text-white font-bold">Around the Corner </p>
      </div>
      <div className="animate-fadeIn">
        <img src={image} alt="Background" className="w-full" />
      </div>
    </div>
  );
};

export default IntroductionPage;
