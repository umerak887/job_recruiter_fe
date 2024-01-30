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
    <section className="overflow-hidden">
      <div className="m-10 gap-10 flex justify-evenly items-center flex-wrap ">
        {stats.map((ele, index) => (
          <StatsCard key={index} name={ele.name} count={ele.count} />
        ))}
      </div>
      <div className="m-10  ">
        <Notifications />
      </div>
    </section>
  );
};

export default CandidateHome;
