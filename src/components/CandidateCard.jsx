import React from "react";
import image from "../assets/company_avatar.webp";
import { GoBookmarkFill } from "react-icons/go";
import { BsPeople } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { CiBadgeDollar } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const CandidateCard = () => {
  const candidateSkills = ["html", "css", "javascript"];
  const navigate = useNavigate();
  return (
    <div className="bg-white rounded-md shadow-xl p-5 pt-10 w-64 hover:shadow-xl">
      <div className="flex flex-col items-center justify-center p-1 gap-1 mt-2">
        <img src={image} className="rounded-full" alt="" />
        <h1>name</h1>
        <div className="flex gap-1 justify-start items-center">
          <CiLocationOn />
          <p>location</p>
        </div>
        <div className="flex gap-2 justify-center items-center w-64 flex-wrap px-2 ">
          {candidateSkills.map((ele, index) => (
            <div
              key={index}
              className="px-2 text-sm min-w-1/4 border text-gray-500 overflow-hidden border-gray-200 text-center"
            >
              {ele}
            </div>
          ))}
        </div>
      </div>
      <button
        className="bg-gray-800 text-white px-3 py-1 mt-4 rounded-md w-full hover:bg-gray-900"
        onClick={() => navigate("/main/candidate/candidate_details")}
      >
        View Candidates
      </button>
    </div>
  );
};

export default CandidateCard;
