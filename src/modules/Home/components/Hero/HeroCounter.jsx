import React from "react";
import CounterCard from "./CounterCard";
import { FaBriefcase, FaBuilding, FaFileAlt } from "react-icons/fa";

const HeroCounter = () => {
  const counterArray = [
    {
      icon: <FaBriefcase />,
      count: 10,
      title: "Jobs",
    },
    {
      icon: <FaBuilding />,
      count: 7,
      title: "Company",
    },
    {
      icon: <FaFileAlt />,
      count: 21,
      title: "Candidates",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-10">
      {counterArray.map((ele, index) => (
        <CounterCard
          key={index}
          icon={ele.icon}
          count={ele.count}
          label={ele.title}
        />
      ))}
    </div>
  );
};

export default HeroCounter;
