import React from "react";
import { SiGoogleearthengine } from "react-icons/si";

const CategoryCard = ({ icon, title, count }) => {
  return (
    <div className="cursor-pointer bg-white p-5 rounded-md text-xl flex flex-col w-52 justify-center items-center shadow-xl hover:shadow-2xl">
      <p className="text-7xl bg-primary-100 p-2 rounded-md text-primary-300">
        {icon}
      </p>

      <div className="mt-2 text-center">
        <p className="mt-2 text-slate-900">{title}</p>
        <p className="text-slate-400 text-center mt-2">{count} Jobs</p>
      </div>
    </div>
  );
};

export default CategoryCard;
