import React, { useEffect, useState } from "react";
import JobsCardComponent from "../../../components/JobsCard";
import JobsCard from "../../../components/JobsCard";
import image from "../../../assets/company_avatar.webp";
import CompanyCard from "../../../components/CompanyCard";
import CandidateCard from "../../../components/CandidateCard";
import axiosInstance from "../../../utils/axios";
import { useSearchParams } from "react-router-dom";

const Listing = () => {
  const [candidateData, setCandidateData] = useState([]);

  const getAllCandidates = async () => {
    try {
      const response = await axiosInstance.get("/candidates");
      console.log(response.data);
      setCandidateData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCandidates();
  }, []);

  return (
    <div className="mt-2 flex justify-start items-start flex-wrap gap-5 p-4 ">
      {candidateData.map((ele, index) => (
        <CandidateCard
          key={index}
          image={ele.image}
          name={ele.name}
          region={ele.region}
          skills={ele.skills}
          id={ele.id}
        />
      ))}
    </div>
  );
};

export default Listing;
