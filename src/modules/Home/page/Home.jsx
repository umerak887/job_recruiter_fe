import React from "react";
import Hero from "../components/Hero/Hero";
import Category from "../components/Category/Category";
import RecentJobs from "../components/RecentJobs/RecentJobs";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Category />
      <RecentJobs />
    </div>
  );
};

export default HomePage;
