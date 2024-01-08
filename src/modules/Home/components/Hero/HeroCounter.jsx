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
      title: "Cadidates",
    },
  ];

  return (
    <div className="flex justify-center items-center gap-10">
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
