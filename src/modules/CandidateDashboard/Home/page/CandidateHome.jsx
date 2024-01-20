import React from "react";
import Notifications from "../components/Notifications";
import StatsCard from "../components/StatsCard";

const CandidateHome = () => {
  const stats = [
    {
      name: "Total Resumes",
      count: 1,
    },
    {
      name: "Bookmarks",
      count: 1,
    },
    {
      name: "Applications",
      count: 1,
    },
  ];

  return (
    <div className="">
      <div className="grid grid-cols-4 gap-10">
        {/* {stats.map((ele, index) => (
          <StatsCard key={index} className="col-span-1" />
        ))} */}
      </div>

      {/* <Notifications /> */}
    </div>
  );
};

export default CandidateHome;
