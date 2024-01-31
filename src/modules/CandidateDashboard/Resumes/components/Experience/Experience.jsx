import React from "react";
import { MdOutlineDelete } from "react-icons/md";

const Experience = ({ title, company }) => {
  return (
    <div className="bg-gray-50 font-sans m-1 rounded-md p-2">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-md">{company}</h1>
          <p className="text-xs">{title}</p>
        </div>
        <MdOutlineDelete size={30} />
      </div>
    </div>
  );
};

export default Experience;
