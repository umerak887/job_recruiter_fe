import React, { useEffect, useState } from "react";
import CandidateCard from "../components/CandidateCard";
import CandidateAbout from "../components/CandidateAbout";
import ResumeData from "../components/ResumeData";
import { useParams } from "react-router-dom";
import axiosInstance from "../../../utils/axios";

const CandidateDetail = () => {
  const { id } = useParams();
  const [candidateData, setCandidateData] = useState([]);

  const getSingleCandidate = async () => {
    try {
      const response = await axiosInstance.get(`/candidate/${id}`);
      console.log(response.data);
      setCandidateData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleCandidate();
  }, []);

  return (
    <div className="m-10">
      <div className="lg:grid lg:grid-cols-8 lg:gap-x-5">
        <div className="col-span-2">
          <CandidateCard
            name={candidateData.name}
            image={candidateData.image}
            category={candidateData.category ? candidateData.category.name : ""}
            skills={candidateData.skills}
            region={candidateData.region}
            location={candidateData.location}
            hourly_rate={candidateData.hourly_rate}
            status={candidateData.status}
          />
        </div>
        <div className="col-span-6">
          <CandidateAbout description={candidateData.description} />
          <ResumeData
            education={candidateData.CandidateEducations}
            experience={candidateData.candidateExperiences}
            urls={candidateData.candidateUrls}
          />
        </div>
      </div>
    </div>
  );
};

export default CandidateDetail;
