import React from "react";
import { GoBookmarkFill } from "react-icons/go";
import company_1 from "../assets/company_logo.webp";
import { CiLocationOn } from "react-icons/ci";
import { CiBadgeDollar } from "react-icons/ci";
import { IoIosTimer } from "react-icons/io";

const JobsCard = ({
  type,
  bookmark,
  image,
  title,
  location,
  max_salary,
  min_salary,
  time,
}) => {
  return (
    <div className="bg-white rounded-md shadow-xl p-5 w-64 hover:shadow-2xl">
      <div className="flex justify-between items-center px-1 py-2 text-xl">
        <p className="text-sm bg-green-400 opacity-70 rounded-md p-0.5 px-2 border-green-700 border-2 text-white">
          {type}
        </p>
        <div
          className={` ${bookmark ? "" : "sr-only"} text-primary-200 text-2xl`}
        >
          <GoBookmarkFill />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center p-1 gap-1 mt-2 ">
        <img src={image} className="p-1" alt="company_logo" />
        <p>{title}</p>
        <div className="flex items-center justify-center">
          <CiLocationOn />
          <p>{location}</p>
        </div>
      </div>
      <div className="p-3 flex flex-col justify-start items-start gap-1 mt-2">
        <div className="flex gap-1 justify-start items-center ">
          <CiBadgeDollar />
          <p>
            {min_salary} - {max_salary}
          </p>
        </div>
        <div className="flex gap-1 justify-start items-center">
          <IoIosTimer />
          <p>{time} ago</p>
        </div>
      </div>
      <button className="bg-primary-100 px-3 py-1 rounded-md w-full hover:bg-primary-200">
        Apply Now
      </button>
    </div>
  );
};

export default JobsCard;
