import React from "react";
import { MdOutlineWorkOutline } from "react-icons/md";

const CounterCard = ({ icon, count, label }) => {
  return (
    <div className="bg-white p-3 rounded-md text-xl flex flex-col w-52 text-primary-300 justify-center items-center shadow-xl">
      <p className="text-7xl ">{icon}</p>

      <div className="mt-2">
        <div className="flex justify-center items-center gap-2">
          <p className="text-5xl font-bold">{count}</p>
          <p className="text-4xl font-bold">+</p>
        </div>
        <p className="text-slate-400 text-center mt-1">{label}</p>
      </div>
    </div>
  );
};

export default CounterCard;
