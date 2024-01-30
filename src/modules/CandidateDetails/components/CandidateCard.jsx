import React from "react";
import avatar from "../../../assets/company_avatar.webp";
import Info from "./Info";
import { IoEarthOutline } from "react-icons/io5";

const CandidateCard = () => {
  const infoArray = [
    {
      title: "Region",
      name: "Asia",
      icon: (
        <IoEarthOutline className="text-5xl bg-green-200 text-green-500 rounded-md" />
      ),
    },
  ];

  return (
    <div className="bg-white shadow-md rounded-md p-5">
      <div className="flex justify-start items-center">
        <h1 className="bg-green-300 p-2 rounded-sm text-sm text-gray-600 font-semibold">
          Open To Work
        </h1>
      </div>
      <div className="flex-col justify-center items-center mt-5 text-center">
        <img src={avatar} className=" rounded-full m-auto" />
        <div>
          <h1 className="text-xl font-semibold">Umer Abdullah</h1>
          <p className="text-sm text-gray-600">IT</p>
        </div>
      </div>
      <hr className=" border-green-500 my-5" />
      <div>
        {infoArray.map((ele, index) => (
          <Info key={index} title={ele.title} icon={ele.icon} name={ele.name} />
        ))}
      </div>
    </div>
  );
};

export default CandidateCard;
