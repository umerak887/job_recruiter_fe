import React from "react";
import backgroundImage from "../../../../assets/hero.jpg";
import HeroForm from "./HeroForm";
import HeroCounter from "./HeroCounter";

const Hero = () => {
  return (
    <div
      className="relative w-full h-[700px] min-h-96"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-blue-400 opacity-50"></div>
      <div className="w-full h-[700px] flex flex-col justify-center items-center relative">
        <h1 className="text-6xl font-bold text-white z-10 ">
          Find Your Dream Job
        </h1>
        <p className="text-center  font-semibold mx-auto text-2xl rounded-md z-10">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
        </p>
        <div className="bg-white z-10 p-5 py-3 mt-10 rounded-md">
          <HeroForm />
        </div>
        <div className="z-10 p-5 py-3 mt-10 rounded-md">
          <HeroCounter />
        </div>
      </div>
    </div>
  );
};

export default Hero;
