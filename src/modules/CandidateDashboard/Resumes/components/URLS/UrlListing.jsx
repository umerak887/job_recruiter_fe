import React from "react";
import Url from "./Url";

const UrlListing = ({ URLArray }) => {
  return (
    <div className="bg-white shadow-md pb-2 mt-1 ">
      <h1 className="bg-gray-900 p-4 mb-4  text-white font-semibold">URL(s)</h1>
      <div className=" h-60 overflow-y-auto">
        {URLArray.length != 0 ? (
          URLArray.map((ele, index) => (
            <Url key={index} urlName={ele.urlname} />
          ))
        ) : (
          <h1 className="bg-gray-50 font-sans  rounded-md p-2 mx-2 ">
            Add URL
          </h1>
        )}
      </div>
    </div>
  );
};

export default UrlListing;
