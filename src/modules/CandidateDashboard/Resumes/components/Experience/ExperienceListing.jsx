import React from "react";
import Experience from "./Experience";

const ExperienceListing = ({ experienceArray }) => {
  return (
    <div className="bg-white shadow-xl pb-2 rounded-md">
      <h1 className="bg-gray-900 p-4 mb-4 text-white font-semibold ">
        Experience
      </h1>

      {experienceArray.length != 0
        ? experienceArray.map((ele, index) => (
            <Experience key={index} company={ele.company} title={ele.title} />
          ))
        : "Add Experience"}
    </div>
  );
};

export default ExperienceListing;
