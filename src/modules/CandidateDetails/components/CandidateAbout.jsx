import React from "react";

const CandidateAbout = ({ description }) => {
  return (
    <div className="bg-white shadow-md lg:mt-0 mt-2 p-5 rounded-md">
      {/* About */}
      <div className="p-2">
        <h1 className="font-semibold text-xl px-3 my-3">About Info</h1>
        <hr className="" />
        <p className="text-sm mt-4 px-5 text-justify text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CandidateAbout;
