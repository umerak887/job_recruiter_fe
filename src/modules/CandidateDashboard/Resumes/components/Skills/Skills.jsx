import React from "react";
import { MdOutlineDelete } from "react-icons/md";

const Skills = ({ skillName }) => {
  return (
    <div className="bg-gray-50 font-sans  rounded-md m-2 p-2 ">
      <div className="flex justify-between items-center px-3">
        <h1>{skillName}</h1>
        <MdOutlineDelete size={20} />
      </div>
    </div>
  );
};

export default Skills;
