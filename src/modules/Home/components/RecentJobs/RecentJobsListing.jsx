import React from "react";
import JobsCardComponent from "../../../../components/JobsCard";
import image from "../../../../assets/company_avatar.webp";

const RecentJobsListing = () => {
  const jobs = [
    {
      bookmark: true,
      type: "Contract base",
      image,
      title: "Web developer",
      location: "Lahore",
      min_salary: "15k",
      max_salary: "17k",
      time: "2 years",
    },
    {
      bookmark: true,
      type: "Contract base",
      image,
      title: "Web developer",
      location: "Lahore",
      min_salary: "15k",
      max_salary: "17k",
      time: "2 years",
    },
    {
      bookmark: false,
      type: "Contract base",
      image,
      title: "Web developer",
      location: "Lahore",
      min_salary: "15k",
      max_salary: "17k",
      time: "2 years",
    },
    {
      bookmark: false,
      type: "Contract base",
      image,
      title: "Web developer",
      location: "Lahore",
      min_salary: "15k",
      max_salary: "17k",
      time: "2 years",
    },
    {
      bookmark: true,
      type: "Contract base",
      image,
      title: "Web developer",
      location: "Lahore",
      min_salary: "15k",
      max_salary: "17k",
      time: "2 years",
    },
    {
      bookmark: true,
      type: "Contract base",
      image,
      title: "Web developer",
      location: "Lahore",
      min_salary: "15k",
      max_salary: "17k",
      time: "2 years",
    },
    {
      bookmark: true,
      type: "Contract base",
      image,
      title: "Web developer",
      location: "Lahore",
      min_salary: "15k",
      max_salary: "17k",
      time: "2 years",
    },
    {
      bookmark: true,
      type: "Contract base",
      image,
      title: "Web developer",
      location: "Lahore",
      min_salary: "15k",
      max_salary: "17k",
      time: "2 years",
    },
  ];
  return (
    <div className="flex flex-wrap justify-center items-center gap-5">
      {jobs.map((ele, index) => (
        <JobsCardComponent
          key={index}
          bookmark={ele.bookmark}
          type={ele.type}
          image={ele.image}
          title={ele.title}
          location={ele.location}
          max_salary={ele.max_salary}
          min_salary={ele.min_salary}
          time={ele.time}
        />
      ))}
    </div>
  );
};

export default RecentJobsListing;
