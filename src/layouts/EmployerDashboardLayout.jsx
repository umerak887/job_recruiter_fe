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
const EmployerDashboardLayout = () => {
  const linksArray = [
    {
      icon: <MdDashboard size={20} />,
      text: "Dashboard",
      path: "/employer",
    },
  ];

  const expanded = useSelector((state) => state.sidebarReducer.expanded);
  return (
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

export default EmployerDashboardLayout;
