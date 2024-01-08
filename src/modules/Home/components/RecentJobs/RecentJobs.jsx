import React from "react";
import RecentJobsListing from "./RecentJobsListing";

const RecentJobs = () => {
  return (
    <div className=" bg-bg-100 p-10 flex flex-col items-center justify-start">
      <h2 className="text-2xl font-bold text-primary-300">Recent Jobs</h2>
      <h1 className="text-4xl font-bold my-10">Popular Listed Jobs</h1>
      <RecentJobsListing />
      <div className="mt-10">
        <button className="bg-primary-300 p-4 rounded-md text-white text-xl opacity-90 hover:opacity-100">
          Browse All Jobs
        </button>
      </div>
    </div>
  );
};

export default RecentJobs;
