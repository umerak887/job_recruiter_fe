import React from "react";

const StatsCard = ({ name, count }) => {
  return (
    <div className="p-5 bg-white w-64 rounded-md flex-col justify-center items-center text-center ">
      <h1 className="text-xl font-semibold">{name}</h1>
      <p className="text-lg">{count}</p>
    </div>
  );
};

export default StatsCard;
