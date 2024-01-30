import React from "react";
import Notifications from "../components/Notifications";
import StatsCard from "../components/StatsCard";
import UserProfile from "../components/UserProfile";

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
      <div className="mx-10 my-2 gap-10 flex justify-between items-center flex-wrap border-y-4 border-gray-900 bg-white shadow-md p-10 ">
        {stats.map((ele, index) => (
          <StatsCard key={index} name={ele.name} count={ele.count} />
        ))}
      </div>
      <div className="md:grid md:grid-cols-6 m-10 md:gap-x-3">
        <div className="col-span-2 md:mb-0 mb-3">
          <UserProfile />
        </div>
        <div className="col-span-4">
          <Notifications />
        </div>
      </div>
    </section>
  );
};

export default CandidateHome;
