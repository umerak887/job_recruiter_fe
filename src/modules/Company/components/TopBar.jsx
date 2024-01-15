import React from "react";

const TopBar = () => {
  return (
    <div className="w-full bg-white shadow-xl rounded-md p-5 flex justify-start items-center border border-gray-200">
      <p className="font-semibold text-lg">
        We have found <span className=" text-gray-500">0</span> Companies
      </p>
    </div>
  );
};

export default TopBar;
