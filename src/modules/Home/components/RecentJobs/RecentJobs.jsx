import React from "react";
import RecentJobsListing from "./RecentJobsListing";

const RecentJobs = () => {
  return (
    <div className="bg-bg-100 p-5 md:p-10 flex flex-col items-center justify-start">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-700">
        Recent Jobs
      </h2>
      <h1 className="text-3xl md:text-4xl font-bold my-5 md:my-10">
        Popular Listed Jobs
      </h1>
      <RecentJobsListing />
      <div className="mt-5 md:mt-10">
        <button className="bg-primary-900 p-3 md:p-4 rounded-md text-white text-lg md:text-xl opacity-90 hover:opacity-100">
          Browse All Jobs
        </button>
      </div>
    </div>
  );
};

export default RecentJobs;
