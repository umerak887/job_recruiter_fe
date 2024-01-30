import React from "react";
import JobsCardComponent from "../../../components/JobsCard";
import JobsCard from "../../../components/JobsCard";
import image from "../../../assets/company_avatar.webp";
import CompanyCard from "../../../components/CompanyCard";
import CandidateCard from "../../../components/CandidateCard";
import { useNavigate } from "react-router-dom";

const Listing = () => {
  const company = [
    {
      name: "company name",
      tagline: "company tagline",
      min_employee: "1",
      max_employee: "10",
      min_salary: "15k",
      max_salary: "20k",
      location: "Lahore",
    },
    {
      name: "company name",
      tagline: "company tagline",
      min_employee: "1",
      max_employee: "10",
      min_salary: "15k",
      max_salary: "20k",
      location: "Lahore",
    },
    {
      name: "company name",
      tagline: "company tagline",
      min_employee: "1",
      max_employee: "10",
      min_salary: "15k",
      max_salary: "20k",
      location: "Lahore",
    },
    {
      name: "company name",
      tagline: "company tagline",
      min_employee: "1",
      max_employee: "10",
      min_salary: "15k",
      max_salary: "20k",
      location: "Lahore",
    },
    {
      name: "company name",
      tagline: "company tagline",
      min_employee: "1",
      max_employee: "10",
      min_salary: "15k",
      max_salary: "20k",
      location: "Lahore",
    },
    {
      name: "company name",
      tagline: "company tagline",
      min_employee: "1",
      max_employee: "10",
      min_salary: "15k",
      max_salary: "20k",
      location: "Lahore",
    },
    {
      name: "company name",
      tagline: "company tagline",
      min_employee: "1",
      max_employee: "10",
      min_salary: "15k",
      max_salary: "20k",
      location: "Lahore",
    },
    {
      name: "company name",
      tagline: "company tagline",
      min_employee: "1",
      max_employee: "10",
      min_salary: "15k",
      max_salary: "20k",
      location: "Lahore",
    },
  ];
  return (
    <div className="mt-2 flex justify-start items-start flex-wrap gap-5 p-4 ">
      {company.map((ele, index) => (
        <CandidateCard key={index} />
      ))}
    </div>
  );
};

export default Listing;
