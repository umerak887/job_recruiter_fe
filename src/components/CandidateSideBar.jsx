import React, { useState } from "react";
import { MdDashboard } from "react-icons/md";
import { TiMessages } from "react-icons/ti";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoMdPaper } from "react-icons/io";
import { SlPeople } from "react-icons/sl";
import { IoMdAdd } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { GoBookmark } from "react-icons/go";
import { IoIosLogOut } from "react-icons/io";
import { useNavigate } from "react-router";
import { RxHamburgerMenu } from "react-icons/rx";

const CandidateSideBar = () => {
  const SideBarArray = [
    {
      name: "Dashboard",
      icon: <MdDashboard />,
      path: "/candidate_dashboard",
    },
    {
      name: "Messages",
      icon: <TiMessages />,
      path: "/candidate_dashboard/messages",
    },
    {
      name: "Bookmarks",
      icon: <GoBookmark />,
      path: "/candidate_dashboard/bookmarks",
    },
    {
      name: "Job Alerts",
      icon: <IoIosNotificationsOutline />,
      path: "/candidate_dashboard/job_alerts",
    },
    {
      name: "Applications",
      icon: <IoMdPaper />,
      path: "/candidate_dashboard/bookmarks",
    },
    {
      name: "Resumes",
      icon: <SlPeople />,
      path: "/candidate_dashboard/resumes",
    },
    {
      name: "Add Resume",
      icon: <IoMdAdd />,
      path: "/candidate_dashboard/add_resume",
    },
    {
      name: "My Profile",
      icon: <IoPersonOutline />,
      path: "/candidate_dashboard/profile",
    },
    {
      name: "Logout",
      icon: <IoIosLogOut />,
      //   path: "/candidate_dashboard/bookmarks",
    },
  ];

  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* <div id="sidebar">Sidebar</div> */}
      <div className="bg-white min-h-screen w-64 flex flex-col justify-start items-start p-5 shadow-2xl">
        <div className="mt-2">
          {SideBarArray.map((ele, index) => (
            <div
              key={index}
              className={`flex justify-start gap-4 text-lg py-4 cursor-pointer items-center`}
              onClick={() => navigate(ele.path)}
            >
              {ele.icon}
              {ele.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CandidateSideBar;
