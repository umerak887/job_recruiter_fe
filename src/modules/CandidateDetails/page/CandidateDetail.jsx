import React from "react";
import CandidateCard from "../components/CandidateCard";
import CandidateAbout from "../components/CandidateAbout";

const CandidateDetail = () => {
  return (
    <div className="m-10">
      <div className="grid grid-cols-8 gap-x-5">
        <div className="col-span-2">
          <CandidateCard />
        </div>
        <div className="col-span-6">
          <CandidateAbout />
        </div>
      </div>
    </div>
  );
};

export default CandidateDetail;
