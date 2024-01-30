import React from "react";
import { IoEarthOutline } from "react-icons/io5";

const Info = ({ icon, title, name }) => {
  return (
    <div>
      <div className="flex justify-normal items-center gap-x-2 w-full">
        {icon}
        <div className="">
          <h1 className="text-md font-semibold">{title}</h1>
          <p className="text-sm text-gray-600">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
