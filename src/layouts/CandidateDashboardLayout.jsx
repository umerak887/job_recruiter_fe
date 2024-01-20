import React from "react";
import Header from "../components/Header";
import CandidateSideBar from "../components/CandidateSideBar";
import { Outlet } from "react-router";
import CollapsibleSidebar from "../components/DashboardSidebar";

const CandidateDashboardLayout = () => {
  return (
    <div className="">
      <Header />
      <div className=" flex">
        <div className="h-screen">
          <CollapsibleSidebar />
        </div>
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default CandidateDashboardLayout;
