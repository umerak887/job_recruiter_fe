import React from "react";
import CategoryListing from "./CategoryListing";

const Category = () => {
  return (
    <div className=" bg-gray-50 p-10 flex flex-col items-center justify-start">
      <h2 className="text-2xl font-bold text-primary-300">
        Popular Categories
      </h2>
      <h1 className="text-4xl font-bold my-10">Browse Top Categories</h1>
      <CategoryListing />
      <div className="mt-10">
        <button className="bg-primary-300 p-4 rounded-md text-white text-xl opacity-90 hover:opacity-100">
          Browse All Category
        </button>
      </div>
    </div>
  );
};

export default Category;
