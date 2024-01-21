import React from "react";
import Listing from "./Listing";

const Testomonial = () => {
  return (
    <div>
      <div className=" bg-gray-50 p-10 flex flex-col items-center justify-start">
        <h2 className="text-2xl font-bold text-rough_black">Our Reviews</h2>
        <h1 className="text-4xl font-bold my-10">What Our Customer Saying</h1>
        <Listing />
      </div>
    </div>
  );
};

export default Testomonial;
