import React from "react";
import { GoBookmarkFill } from "react-icons/go";
import { BsPeople } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { CiBadgeDollar } from "react-icons/ci";

import image from "../assets/company_avatar.webp";
const CompanyCard = ({
  name,
  tagline,
  min_employee,
  max_employee,
  min_salary,
  max_salary,
  location,
}) => {
  return (
    <div className="bg-white rounded-md shadow-xl p-5 pt-10 w-64 hover:shadow-2xl">
      <div className="flex flex-col items-center justify-center p-1 gap-1 mt-2 ">
        <img src={image} className="rounded-md p-1" alt="" />
        <h1>{name}</h1>
        <p>{tagline}</p>
      </div>
      <div className="p-3 flex flex-col justify-start items-start gap-1 mt-2">
        <div className="flex gap-1 justify-start items-center ">
          <BsPeople />
          <p>
            {min_employee}-{max_employee} Employee
          </p>
        </div>
        <div className="flex gap-1 justify-start items-center">
          <CiBadgeDollar />
          <p>
            {min_salary} - {max_salary}
          </p>
        </div>
        <div className="flex gap-1 justify-start items-center">
          <CiLocationOn />
          <p>{location}</p>
        </div>
      </div>
      <button className="bg-primary-800 text-white px-3 py-1 rounded-md w-full hover:bg-primary-900">
        See Details
      </button>
    </div>
  );
};

export default CompanyCard;
