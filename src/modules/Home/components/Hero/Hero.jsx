import React from "react";
import backgroundImage from "../../../../assets/hero.jpg";
import HeroForm from "./HeroForm";
import HeroCounter from "./HeroCounter";

const Hero = () => {
  return (
    <div
      className="relative py-20 w-full min-h-[400px] md:min-h-[700px] overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-blue-400 opacity-50"></div>
      <div className="w-full h-full flex flex-col justify-center items-center relative text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-2">
          Find Your Dream Job
        </h1>
        <p className="text-center font-semibold text-lg md:text-2xl mx-auto rounded-md mb-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
        </p>
        <div className="bg-white p-5 py-3 mt-5 md:mt-10 rounded-md">
          <HeroForm />
        </div>
        <div className="mt-5 md:mt-10">
          <HeroCounter />
        </div>
      </div>
    </div>
  );
};

export default Hero;
