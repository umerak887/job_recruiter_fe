import React from "react";
import Hero from "../components/Hero/Hero";
import Category from "../components/Category/Category";
import RecentJobs from "../components/RecentJobs/RecentJobs";
import Testomonial from "../components/Testomonials/Testomonial";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Category />
      <RecentJobs />
      <Testomonial />
    </div>
  );
};

export default HomePage;
