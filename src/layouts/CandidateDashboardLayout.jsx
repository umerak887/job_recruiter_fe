import React from "react";
import Header from "../components/Header";
import CandidateSideBar from "../components/CandidateSideBar";
import { Outlet } from "react-router";
import CollapsibleSidebar from "../components/DashboardSidebar";

const CandidateDashboardLayout = () => {
  return (
    <div className="w-full h-screen bg-gray-200 flex items-center">
      <CollapsibleSidebar />
      <Outlet />
    </div>
  );
};

export default CandidateDashboardLayout;
