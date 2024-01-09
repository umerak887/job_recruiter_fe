import React from "react";
import JobsCard from "../../../../components/JobsCard";
import img from "../../../../assets/company_logo.webp";

const RecentJobsListing = () => {
  const jobsArray = [
    {
      type: "Part Time",
      bookmark: true,
      image: img,
      title: "Web Developer",
      location: "Lahore, Punjab, Pakistan",
      max_salary: "17k",
      min_salary: "15k",
      time: "2 years",
    },
    {
      type: "Part Time",
      bookmark: false,
      image: img, 
      title: "Web Developer",
      location: "Lahore, Punjab, Pakistan",
      max_salary: "17k",
      min_salary: "15k",
      time: "2 years",
    },
    {
      type: "Part Time",
      bookmark: false,
      image: img,
      title: "Web Developer",
      location: "Lahore, Punjab, Pakistan",
      max_salary: "17k",
      min_salary: "15k",
      time: "2 years",
    },
    {
      type: "Part Time",
      bookmark: false,
      image: img,
      title: "Web Developer",
      location: "Lahore, Punjab, Pakistan",
      max_salary: "17k",
      min_salary: "15k",
      time: "2 years",
    },
    {
      type: "Part Time",
      bookmark: false,
      image: img,
      title: "Web Developer",
      location: "Lahore, Punjab, Pakistan",
      max_salary: "17k",
      min_salary: "15k",
      time: "2 years",
    },
    {
      type: "Part Time",
      bookmark: true,
      image: img,
      title: "Web Developer",
      location: "Lahore, Punjab, Pakistan",
      max_salary: "17k",
      min_salary: "15k",
      time: "2 years",
    },
    {
      type: "Part Time",
      bookmark: true,
      image: img,
      title: "Web Developer",
      location: "Lahore, Punjab, Pakistan",
      max_salary: "17k",
      min_salary: "15k",
      time: "2 years",
    },
    {
      type: "Part Time",
      bookmark: true,
      image: img,
      title: "Web Developer",
      location: "Lahore, Punjab, Pakistan",
      max_salary: "17k",
      min_salary: "15k",
      time: "2 years",
    },
  ];
  return (
    <div className="flex justify-center items-center flex-wrap gap-5">
      {jobsArray.map((ele, index) => (
        <JobsCard
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
      {/* <JobsCard /> */}
    </div>
  );
};

export default RecentJobsListing;
