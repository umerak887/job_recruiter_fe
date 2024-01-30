import React, { useState, useEffect } from "react";
import CandidateForm from "../components/CandidateForm";
import EducationForm from "../components/Education/EducationForm";
import ExperienceForm from "../components/Experience/ExperienceForm";
import UrlsForm from "../components/URLS/UrlsForm";
import EducationListing from "../components/Education/EducationListing";
import UrlListing from "../components/URLS/UrlListing";
import ExperienceListing from "../components/Experience/ExperienceListing";
import SkillsListing from "../components/Skills/SkillsListing";
import SkillsForm from "../components/Skills/SkillsForm";
import axiosInstance from "../../../../utils/axios";

const Resumes = () => {
  const [educationArray, setEducationArray] = useState([]);
  const [experienceArray, setExperienceArray] = useState([]);
  const [URLArray, setURLArray] = useState([]);
  const [skillsArray, setSkillsArray] = useState([]);
  const [candidateData, setCandidateData] = useState();

  const addCandidate = (candidateData) => {
    setCandidateData(candidateData);
    console.log(candidateData);
  };

  const addEducation = (education) => {
    setEducationArray([...educationArray, education]);
  };

  const deleteEducation = (index) => {
    const updatedEducationArray = [...educationArray];
    updatedEducationArray.splice(index, 1);
    setEducationArray(updatedEducationArray);
  };

  const addURL = (url) => {
    setURLArray([...URLArray, url]);
  };

  const addExperience = (experience) => {
    setExperienceArray([...experienceArray, experience]);
  };

  const addSkill = (skill) => {
    const exists = skillsArray.some(
      (ele) => JSON.stringify(ele) === JSON.stringify(skill)
    );
    if (exists) {
      console.log("object already entered");
    } else {
      setSkillsArray([...skillsArray, skill]);
    }
  };

  const saveChanges = async () => {
    try {
      const token = localStorage.getItem("token");
      const payload = {
        ...candidateData,
        skill: skillsArray.map((skill) => ({
          ...skill,
        })),
        url: URLArray.map((url) => ({
          ...url,
        })),
        education: educationArray.map((edu) => ({
          ...edu,
        })),
        experience: experienceArray.map((exp) => ({
          ...exp,
        })),
      };
      const response = await axiosInstance.post("/resume", payload, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(response);
    } catch (error) {}
  };

  return (
    <div className="">
      <div className="m-10 mt-3">
        <CandidateForm addCandidate={addCandidate} />
        <div className="md:grid md:grid-cols-4 md:gap-x-2">
          <div className="col-span-3">
            <EducationForm addEducation={addEducation} />
          </div>
          <div className="col-span-1 ">
            <EducationListing
              educationArray={educationArray}
              deleteEducation={deleteEducation}
            />
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
        <div className="md:grid md:grid-cols-4 md:gap-x-2">
          <div className="col-span-3">
            <SkillsForm addSkill={addSkill} />
          </div>
          <div className="col-span-1">
            <SkillsListing skillsArray={skillsArray} />
          </div>
        </div>

        <div className="flex justify-end items-center mt-2">
          <button
            className="bg-gray-900 p-3 text-white rounded-md"
            onClick={saveChanges}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resumes;
