import React from "react";
import JobsCardComponent from "../../../components/JobsCard";
import JobsCard from "../../../components/JobsCard";
import image from "../../../assets/company_avatar.webp";
import CompanyCard from "../../../components/CompanyCard";

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
        <CompanyCard
          key={index}
          name={ele.name}
          tagline={ele.tagline}
          min_employee={ele.min_employee}
          max_employee={ele.max_employee}
          min_salary={ele.min_salary}
          max_salary={ele.max_salary}
          location={ele.location}
        />
      ))}
    </div>
  );
};

export default Listing;
