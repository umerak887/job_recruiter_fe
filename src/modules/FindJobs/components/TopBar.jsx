import React from "react";

const TopBar = () => {
  return (
    <div className="w-full bg-white shadow-xl rounded-md p-5 flex justify-start items-center border border-gray-200">
      <p className="font-semibold text-lg">
        We have found <span className=" text-primary-200">0</span> Jobs
      </p>
    </div>
  );
};

export default TopBar;
