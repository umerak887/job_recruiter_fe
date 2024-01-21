import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import { CgProfile } from "react-icons/cg";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useNavigate, useSearchParams } from "react-router-dom";

const Dropdown = ({ dropDownArray, onClose }) => {
  const navigate = useNavigate();
  return (
    <div className="absolute top-12 right-[163px] w-32 bg-white shadow-xl rounded-lg mt-1 p-1">
      {dropDownArray.map((ele, index) => (
        <div
          className="m-1 cursor-pointer hover:bg-gray-100 p-2 hover:rounded-md hover:border-transparent border-b border-gray-900"
          key={index}
          onClick={() => navigate(ele.path)}
        >
          {ele.name}
        </div>
      ))}
    </div>
  );
};

const ProfileHeader = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const dropDownArray = [
    {
      name: "Dashboard",
      path: "/candidate_dashboard",
    },
    {
      name: "Logout",
      path: "/auth/sign_in",
    },
  ];

  const toggleDropdown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  const closeDropdown = () => {
    setIsDropDownOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isDropDownOpen && !event.target.closest(".dropdown-container")) {
        closeDropdown();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isDropDownOpen]);

  return (
    <div className="cursor-pointer flex flex-col gap-1 dropdown-container relative">
      <div
        className="flex items-center gap-2 text-white border-b border-white"
        onClick={toggleDropdown}
      >
        <div className="border-r border-white px-1">
          <CgProfile />
        </div>
        <div className="flex items-center">
          <p>UserProfile</p>
          <div>
            <MdKeyboardArrowDown
              className={`${
                isDropDownOpen ? "rotate-180" : "rotate-0"
              } duration-300`}
            />
          </div>
        </div>
      </div>
      {isDropDownOpen &&
        ReactDOM.createPortal(
          <Dropdown dropDownArray={dropDownArray} onClose={closeDropdown} />,
          document.body
        )}
    </div>
  );
};

export default ProfileHeader;
