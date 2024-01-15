import React from "react";
import FilterSearch from "../components/FilterSearch";
import TopBar from "../components/TopBar";
import Listing from "../components/Lisitng";

const CompanyPage = () => {
  return (
    <div className=" min-h-screen m-5">
      <div className="flex justify-start items-start gap-2">
        <div className="w-72 ">
          <FilterSearch />
        </div>
        <div className="w-screen">
          <div>
            <TopBar />
          </div>
          <div className="">
            <Listing />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyPage;
