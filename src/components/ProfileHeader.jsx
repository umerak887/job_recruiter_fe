import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import { CgProfile } from "react-icons/cg";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useNavigate, useSearchParams } from "react-router-dom";
import { logout } from "../modules/Auth/store.js";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Dropdown = ({ dropDownArray, onClose }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (logoutBtn, path) => {
    try {
      if (logoutBtn) {
        localStorage.removeItem("token");
        dispatch(logout());
      }
      navigate(path);
    } catch (error) {
      console.error("Something went wrong while Signing out");
    }
  };

  return (
    <div className="absolute top-12 right-[163px] w-32 bg-white shadow-xl rounded-lg mt-1 p-1">
      {dropDownArray.map((ele, index) => (
        <div
          className="m-1 cursor-pointer hover:bg-gray-100 p-2 hover:rounded-md hover:border-transparent border-b border-gray-900"
          key={index}
          onClick={() => handleClick(ele.logoutBtn, ele.path)}
        >
          {ele.name}
        </div>
      ))}
    </div>
  );
};

const ProfileHeader = () => {
  const userData = useSelector((state) => state.auth.userData);

  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const dropDownArray = [
    {
      name: "Dashboard",
      path:
        userData.role == "candidate"
          ? "/candidate_dashboard"
          : "/employer_dashboard",
    },
    {
      name: "Logout",
      path: "/main",
      logoutBtn: true,
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
    <div className="cursor-pointer flex text flex-col gap-1 dropdown-container relative">
      <div
        className="flex items-center justify-center gap-2 text-white border-b border-white"
        onClick={toggleDropdown}
      >
        <div className="border-r border-white px-1">
          <CgProfile />
        </div>
        <div className="flex items-center text-lg">
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
