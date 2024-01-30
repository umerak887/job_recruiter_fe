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
        <IoEarthOutline className="text-5xl p-2 bg-blue-200 text-gray-500 rounded-md" />
      ),
    },
    {
      title: "Region",
      name: "Asia",
      icon: (
        <IoEarthOutline className="text-5xl p-2 bg-blue-200 text-gray-500 rounded-md" />
      ),
    },
    {
      title: "Region",
      name: "Asia",
      icon: (
        <IoEarthOutline className="text-5xl p-2 bg-blue-200 text-gray-500 rounded-md" />
      ),
    },
    {
      title: "Region",
      name: "Asia",
      icon: (
        <IoEarthOutline className="text-5xl p-2 bg-blue-200 text-gray-500 rounded-md" />
      ),
    },
  ];
  const candidateSkills = ["html", "css", "javascript"];

  return (
    <div className="bg-white shadow-md rounded-md p-5 overflow-hidden">
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
        <div className="flex gap-2 justify-center items-center m-auto mt-5 w-full overflow-x-auto flex-wrap px-2 ">
          {candidateSkills.map((ele, index) => (
            <div
              key={index}
              className="px-2 text-sm min-w-1/4 border text-gray-500 overflow-hidden border-gray-200 text-center"
            >
              {ele}
            </div>
          ))}
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
