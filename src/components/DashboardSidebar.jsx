import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
    { name: "Dashboard", icon: <MdDashboard /> },
    { name: "Messages", icon: <MdMailOutline /> },
    { name: "Bookmarks", icon: <MdBookmark /> },
    { name: "Job Alerts", icon: <MdNotificationsNone /> },
    { name: "Applications", icon: <IoNewspaper /> },
    { name: "Add Resume", icon: <IoMdAdd /> },
    { name: "My Profile", icon: <CgProfile /> },
    { name: "Logout", icon: <CiLogout /> },
  ];

  return (
    <div
      className={`flex flex-col h-screen bg-gray-800 text-white transition-all ${
        isCollapsed ? "w-28" : "w-64"
      } duration-500 text-2xl`}
    >
      <div
        className={`flex justify-start px-4 py-2 items-center cursor-pointer text-2xl text-white`}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <RxHamburgerMenu />
      </div>
      <div className="flex-1 overflow-y-auto">
        {sidebarItems.map((item, index) => (
          <div
            key={index}
            className={`flex items-center gap-4 p-4 transition-all cursor-pointer ${
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
