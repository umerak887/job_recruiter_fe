import React from "react";
import Skills from "./Skills";

const SkillsListing = ({ skillsArray }) => {
  return (
    <div className="bg-white shadow-md pb-2 mt-1 ">
      <h1 className="bg-gray-900 p-4 mb-4  text-white font-semibold">Skills</h1>
      <div className=" h-[162px] overflow-y-auto">
        {skillsArray.length != 0 ? (
          skillsArray.map((ele, index) => (
            <Skills key={index} skillName={ele.name} />
          ))
        ) : (
          <h1 className="bg-gray-50 font-sans  rounded-md p-2 mx-2 ">
            Add Skill
          </h1>
        )}
      </div>
    </div>
  );
};

export default SkillsListing;
