import React from "react";
import Sidebar from "../components/SideBar/SideBar";
import { MdDashboard } from "react-icons/md";
import { LuBookMarked, LuMessagesSquare } from "react-icons/lu";
import { IoIosNotificationsOutline, IoMdAdd } from "react-icons/io";
import SidebarItem from "../components/SideBar/SidebarItem";
import { Outlet } from "react-router-dom";
import { IoPeopleOutline, IoNewspaper } from "react-icons/io5";
import Header from "../components/Header";
import { useSelector } from "react-redux";
const CandidateDashboardLayout = () => {
  const linksArray = [
    {
      icon: <MdDashboard size={20} />,
      text: "Dashboard",
      path: "/candidate_dashboard",
    },
    {
      icon: <LuMessagesSquare size={20} />,
      text: "Messages",
      path: "/candidate_dashboard/messages",
    },
    {
      icon: <LuBookMarked size={20} />,
      text: "Bookmarks",
      path: "/candidate_dashboard/bookmarks",
    },
    {
      icon: <IoIosNotificationsOutline size={20} />,
      text: "Job Alerts",
      path: "/candidate_dashboard/job_alert",
    },
    {
      icon: <IoNewspaper size={20} />,
      text: "Applications",
      path: "/candidate_dashboard/applications",
    },
    {
      icon: <IoPeopleOutline size={20} />,
      text: "Resumes",
      path: "/candidate_dashboard/resumes",
    },
  ];

  const expanded = useSelector((state) => state.sidebarReducer.expanded);
  return (
    // ${expanded ? "relative" : ""}
    // ${expanded ? "absolute left-0 top-0 bottom-0" : ""}
    <div className={`relative`}>
      <div className={`flex `}>
        <div className={``}>
          <Sidebar>
            {linksArray.map((ele, index) => (
              <SidebarItem
                key={index}
                icon={ele.icon}
                text={ele.text}
                path={ele.path}
              />
            ))}
          </Sidebar>
        </div>
        <div className="w-full h-[720px] overflow-x-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default CandidateDashboardLayout;
