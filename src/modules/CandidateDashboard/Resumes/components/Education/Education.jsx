import React from "react";
import { IoTrashBin } from "react-icons/io5";
import { MdOutlineDelete } from "react-icons/md";

const Education = ({ institution, degree, marks, deleteEducation, index }) => {
  return (
    <div className="bg-gray-50 font-sans m-1 rounded-md p-2">
      <div className="flex justify-between items-center px-3">
        <div className="flex-col items-center gap-x-1">
          <h1 className="text-lg">{institution}</h1>
          <div className="flex justify-normal items-center gap-x-1">
            <p className="text-xs">
              {degree}
              {","}
            </p>
            <p className="text-xs">{marks}</p>
          </div>
        </div>
        <MdOutlineDelete size={30} onClick={() => deleteEducation(index)} />
      </div>
    </div>
  );
};

export default Education;
