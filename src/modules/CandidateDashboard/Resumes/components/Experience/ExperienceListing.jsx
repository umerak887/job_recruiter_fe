import React from "react";
import Experience from "./Experience";

const ExperienceListing = ({ experienceArray }) => {
  return (
    <div className="bg-white shadow-md pb-2 mt-1 mb-4">
      <h1 className="bg-gray-900 p-4 mb-4 text-white font-semibold ">
        Experience
      </h1>
      <div className=" h-[525px] overflow-y-auto">
        {experienceArray.length != 0 ? (
          experienceArray.map((ele, index) => (
            <Experience key={index} company={ele.company} title={ele.title} />
          ))
        ) : (
          <h1 className="bg-gray-50 font-sans  rounded-md p-2 mx-2 ">
            Add Experience
          </h1>
        )}
      </div>
    </div>
  );
};

export default ExperienceListing;
