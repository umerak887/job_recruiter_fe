import React from "react";

const Info = ({ icon, title, name }) => {
  return (
    <div className="my-4">
      <div className="flex justify-normal items-center gap-x-3">
        <div>{icon}</div>
        <div className="flex flex-col justify-center items-start text-gray-600 gap-0 text-sm">
          <div className="font-semibold text-lg">{title}</div>
          <div>{name}</div>
        </div>
      </div>
    </div>
  );
};

export default Info;
