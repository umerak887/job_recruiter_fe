import React from "react";
import { MdOutlineWorkOutline } from "react-icons/md";

const CounterCard = ({ count, label }) => {
  return (
    <div className=" bg-white p-4 rounded-md text-lg md:text-xl flex flex-col w-52  justify-center items-center shadow-md">
      <p className="text-4xl md:text-5xl text-gray-800">
        <MdOutlineWorkOutline />
      </p>

      <div className="mt-3">
        <div className="flex justify-center items-center gap-1 md:gap-2">
          <p className="text-2xl md:text-3xl font-bold text-gray-700">
            {count}
          </p>
          <p className="text-xl md:text-2xl font-bold text-gray-700">+</p>
        </div>
        <p className="text-gray-500 text-center mt-1 text-sm md:text-base">
          {label}
        </p>
      </div>
    </div>
  );
};

export default CounterCard;
