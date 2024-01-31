import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  MdDashboard,
  MdMailOutline,
  MdBookmark,
  MdNotificationsNone,
} from "react-icons/md";
import { IoNewspaper } from "react-icons/io5";
import { BsArrowLeftShort } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { CiLogout } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";

const CollapsibleSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsCollapsed(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const sidebarItems = [
    { name: "Dashboard", icon: <MdDashboard />, path: "/candidate_dashboard" },
    {
      name: "Messages",
      icon: <MdMailOutline />,
      path: "/candidate_dashboard/messages",
    },
    {
      name: "Bookmarks",
      icon: <MdBookmark />,
      path: "/candidate_dashboard/bookmarks",
    },
    { name: "Job Alerts", icon: <MdNotificationsNone />, path: "non_found" },
    {
      name: "Applications",
      icon: <IoNewspaper />,
      path: "/candidate_dashboard/applications",
    },
    {
      name: "Add Resume",
      icon: <IoMdAdd />,
      path: "/candidate_dashboard/add_resume",
    },
    {
      name: "My Profile",
      icon: <CgProfile />,
      path: "/candidate_dashboard/resumes",
    },
    { name: "Logout", icon: <CiLogout />, path: "/main" },
  ];

  return (
    <div
      className={`flex flex-col h-screen bg-gray-800 text-white transition-all ${
        isCollapsed ? "w-28" : "w-64"
      } duration-500 text-2xl`}
    >
      <div
        className={`flex justify-end px-4 py-2 items-center  text-2xl text-white`}
      >
        <BsArrowLeftShort
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={`${
            isCollapsed ? " rotate-180" : "rotate-0"
          } transition-all duration-500 text-white cursor-pointer hover:bg-white hover:text-black rounded-full bg-glass`}
        />
      </div>
      <div className="flex-1 overflow-y-auto">
        {sidebarItems.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(item.path)}
            className={`flex items-center gap-4 m-1 duration-300 p-4 transition-all cursor-pointer hover:bg-glass rounded-md hover:font-semibold ${
              isCollapsed ? "justify-center text-4xl" : "justify-start"
            }`}
          >
            {isCollapsed && item.icon}
            {!isCollapsed && (
              <>
                {item.icon}
                <span className="ml-2">{item.name}</span>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollapsibleSidebar;
