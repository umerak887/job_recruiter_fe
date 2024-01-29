import React from "react";
import Education from "./Education";

const EducationListing = ({ educationArray }) => {
  return (
    <div className="bg-white shadow-xl pb-2 rounded-md">
      <h1 className="bg-gray-900 p-4 mb-4 text-white font-semibold">
        Educations
      </h1>

      {educationArray.length != 0
        ? educationArray.map((ele, index) => (
            <Education
              key={index}
              institution={ele.institution}
              degree={ele.degree}
              marks={ele.marks}
            />
          ))
        : "Add Education"}
    </div>
  );
};

export default EducationListing;
