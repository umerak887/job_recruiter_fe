import React from "react";
import CandidateCard from "../components/CandidateCard";
import CandidateAbout from "../components/CandidateAbout";
import ResumeData from "../components/ResumeData";

const CandidateDetail = () => {
  return (
    <div className="m-10">
      <div className="lg:grid lg:grid-cols-8 lg:gap-x-5">
        <div className="col-span-2">
          <CandidateCard />
        </div>
        <div className="col-span-6">
          <CandidateAbout />
          <ResumeData />
        </div>
      </div>
    </div>
  );
};

export default CandidateDetail;
