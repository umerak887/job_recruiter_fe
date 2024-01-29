import React from "react";
import CandidateForm from "../components/CandidateForm";
import EducationForm from "../components/EducationForm";
import ExperienceForm from "../components/ExperienceForm";
import UrlsForm from "../components/UrlsForm";

// const urlSchema = Joi.object({
//   urlname: Joi.string().required(),
//   urllink: Joi.string().required(),
// });

const Resumes = () => {
  return (
    <div className="">
      <div className="m-10 mt-3">
        <div className="flex justify-start items-start gap-1">
          <CandidateForm />
          <div className="w-1/3">
            <EducationForm />
            <ExperienceForm />
          </div>
        </div>
        <UrlsForm />
      </div>
    </div>
  );
};

export default Resumes;
