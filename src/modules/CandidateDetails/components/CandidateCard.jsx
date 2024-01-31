import React, { useEffect, useState } from "react";
import avatar from "../../../assets/company_avatar.webp";
import Info from "./Info";
import { IoEarthOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { FiDollarSign } from "react-icons/fi";

const CandidateCard = ({
  name,
  category,
  skills,
  region,
  location,
  hourly_rate,
  status,
  image,
}) => {
  const infoArray = [
    {
      title: "Region",
      name: region,
      icon: (
        <IoEarthOutline
          size={40}
          className="p-2 bg-blue-200 text-gray-500 rounded-md"
        />
      ),
    },
    {
      title: "Location",
      name: location,
      icon: (
        <CiLocationOn
          size={40}
          className="p-2 bg-blue-200 text-gray-500 rounded-md"
        />
      ),
    },
    {
      title: "Hourly Rate",
      name: hourly_rate,
      icon: (
        <FiDollarSign
          size={40}
          className="p-2 bg-blue-200 text-gray-500 rounded-md"
        />
      ),
    },
  ];

  return (
    <div className="bg-white shadow-md rounded-md p-5 overflow-hidden">
      <div className="flex justify-start items-center">
        <h1
          className={`bg-green-300 p-2 rounded-sm text-sm text-gray-600 font-semibold ${
            status ? "" : "sr-only"
          }`}
        >
          Open To Work
        </h1>
      </div>
      <div className="flex-col justify-center items-center mt-5 text-center">
        <img src={image} className=" rounded-full m-auto" />
        <div>
          <h1 className="text-xl font-semibold">{name}</h1>
          <p className="text-sm text-gray-600">{category}</p>
        </div>
        <div className="flex gap-2 justify-center items-center m-auto mt-5 w-full overflow-x-auto flex-wrap px-2 ">
          {skills &&
            skills.map((ele, index) => (
              <div
                key={index}
                className="px-2 text-sm min-w-1/4 border text-gray-500 overflow-hidden border-gray-200 text-center"
              >
                {ele.name}
              </div>
            ))}
        </div>
      </div>
      <hr className=" border-blue-500 my-5" />
      {infoArray.map((ele, index) => (
        <Info key={index} title={ele.title} icon={ele.icon} name={ele.name} />
      ))}
    </div>
  );
};

export default CandidateCard;
