import React, { useState, useEffect } from "react";
import CandidateForm from "../components/CandidateForm";
import EducationForm from "../components/Education/EducationForm";
import ExperienceForm from "../components/Experience/ExperienceForm";
import UrlsForm from "../components/URLS/UrlsForm";
import Education from "../components/Education/Education";
import EducationListing from "../components/Education/EducationListing";
import UrlListing from "../components/URLS/UrlListing";
import ExperienceListing from "../components/Experience/ExperienceListing";

// const urlSchema = Joi.object({
//   urlname: Joi.string().required(),
//   urllink: Joi.string().required(),
// });

const Resumes = () => {
  const [educationArray, setEducationArray] = useState([]);
  const [experienceArray, setExperienceArray] = useState([]);
  const [URLArray, setURLArray] = useState([]);
  const [candidateData, setCandidateData] = useState();
  const [isCandidateFormSumitted, setIsCandidateFormSubmitted] =
    useState(false);

  useEffect(() => {
    setIsCandidateFormSubmitted(!!candidateData);
  }, [candidateData]);

  const addCandidate = (candidateData) => {
    setCandidateData(candidateData);
    console.log(candidateData);
  };
  const addEducation = (education) => {
    setEducationArray([...educationArray, education]);
  };
  const addURL = (url) => {
    setURLArray([...URLArray, url]);
  };
  const addExperience = (experience) => {
    setExperienceArray([...experienceArray, experience]);
  };

  return (
    <div className="">
      <div className="m-10 mt-3">
        <CandidateForm addCandidate={addCandidate} />
        <div className="md:grid md:grid-cols-4 md:gap-x-2">
          <div className="col-span-3">
            <EducationForm addEducation={addEducation} />
          </div>
          <div className="col-span-1 max-h-[630px] overflow-y-auto bg-white">
            <EducationListing educationArray={educationArray} />
          </div>
        </div>

        <div className="md:grid md:grid-cols-4 md:gap-x-2">
          <div className="col-span-3">
            <ExperienceForm addExperience={addExperience} />
          </div>
          <div className="col-span-1">
            <ExperienceListing experienceArray={experienceArray} />
          </div>
        </div>
        <div className="md:grid md:grid-cols-4 md:gap-x-2">
          <div className="col-span-3">
            <UrlsForm addURL={addURL} />
          </div>
          <div className="col-span-1">
            <UrlListing URLArray={URLArray} />
          </div>
        </div>

        <div className="flex justify-end items-center mt-2">
          <button className="bg-gray-900 p-3 text-white rounded-md">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resumes;
