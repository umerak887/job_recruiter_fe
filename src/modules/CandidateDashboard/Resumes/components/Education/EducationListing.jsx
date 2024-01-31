import React from "react";
import Education from "./Education";
import PropTypes from "prop-types";

const EducationListing = ({ educationArray, deleteEducation }) => {
  return (
    <div className="bg-white shadow-md pb-2  mb-4">
      <h1 className="bg-gray-900 p-4 mb-4 text-white font-semibold ">
        Experience
      </h1>
      <div className=" h-[605px] overflow-y-auto">
        {educationArray.length != 0 ? (
          educationArray.map((ele, index) => (
            <Education
              key={index}
              institution={ele.institution}
              degree={ele.degree}
              marks={ele.marks}
              index={index}
              deleteEducation={deleteEducation}
            />
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

EducationListing.propTypes = {
  educationArray: PropTypes.array.isRequired,
  deleteEducation: PropTypes.func.isRequired,
};

export default EducationListing;
