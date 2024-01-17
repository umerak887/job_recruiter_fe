import React from "react";
import Register from "./modules/Auth/page/Register";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./modules/Home/page/Home";
import ContactUs from "./modules/ContactUs/Page/ContactUs";
import FindJob from "./modules/FindJobs/page/FindJob";
import NotFoundPage from "./page/NotFound";
import Login from "./modules/Auth/page/Login";
import CompanyPage from "./modules/Company/page/CompanyPage";
import CandidatePage from "./modules/Candidates/page/Candidate";
import DashboardLayout from "./layouts/CandidateDashboardLayout";
import CandidateDashboardLayout from "./layouts/CandidateDashboardLayout";
import CandidateHome from "./modules/CandidateDashboard/Home/page/CandidateHome";
const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Register />} path="auth/sign_up" />
        <Route element={<Login />} path="auth/sign_in" />
        <Route element={<NotFoundPage />} path="*" />
        <Route element={<MainLayout />} path="/">
          <Route element={<HomePage />} path="" />
          <Route element={<FindJob />} path="find_job" />
          <Route element={<CompanyPage />} path="company" />
          <Route element={<CandidatePage />} path="candidate" />
          <Route element={<ContactUs />} path="/contact_us" />
        </Route>
        <Route
          element={<CandidateDashboardLayout />}
          path="candidate_dashboard"
        >
          <Route element={<CandidateHome />} path="" />
        </Route>
      </Routes>
    </>
  );
};

export default App;
