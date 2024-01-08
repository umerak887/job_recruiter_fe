import React from "react";
import CategoryCard from "./CategoryCard";
import { BsBank2 } from "react-icons/bs";
import { SiGoogleearthengine } from "react-icons/si";
import { FaComputer } from "react-icons/fa6";
import { MdEngineering } from "react-icons/md";

const CategoryListing = () => {
  const categoryArray = [
    {
      icon: <SiGoogleearthengine />,
      title: "Automotive",
      count: 2,
    },
    {
      icon: <BsBank2 />,
      title: "Accounts",
      count: 5,
    },
    {
      icon: <FaComputer />,
      title: "IT",
      count: 20,
    },
    {
      icon: <MdEngineering />,
      title: "Engineering",
      count: 7,
    },
    {
      icon: <SiGoogleearthengine />,
      title: "Automotive",
      count: 2,
    },
    {
      icon: <BsBank2 />,
      title: "Accounts",
      count: 5,
    },
    {
      icon: <FaComputer />,
      title: "IT",
      count: 20,
    },
    {
      icon: <MdEngineering />,
      title: "Engineering",
      count: 7,
    },
  ];

  return (
    <div className="flex justify-center items-center gap-10 flex-wrap">
      {categoryArray.map((ele, index) => (
        <CategoryCard
          key={index}
          icon={ele.icon}
          title={ele.title}
          count={ele.count}
        />
      ))}
    </div>
  );
};

export default CategoryListing;
