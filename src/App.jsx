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
import IntroductionPage from "./modules/Introduction/page";
import AddResume from "./modules/CandidateDashboard/AddResume/page/AddResume";
import Resumes from "./modules/CandidateDashboard/Resumes/page/Resumes";
import Applications from "./modules/CandidateDashboard/Applications/page/Applications";
import Messages from "./modules/CandidateDashboard/Messages/page/Messages";
import Bookmark from "./modules/CandidateDashboard/BookMarks/page/Bookmark";
const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Register />} path="auth/sign_up" />
        <Route element={<Login />} path="auth/sign_in" />
        <Route element={<IntroductionPage />} path="" />
        <Route element={<NotFoundPage />} path="*" />
        <Route element={<MainLayout />} path="/main">
          <Route element={<HomePage />} path="" />
          <Route element={<FindJob />} path="find_job" />
          <Route element={<CompanyPage />} path="company" />
          <Route element={<CandidatePage />} path="candidate" />
          <Route element={<ContactUs />} path="contact_us" />
        </Route>

        {/* Candidate Dashboard */}

        <Route
          element={<CandidateDashboardLayout />}
          path="candidate_dashboard"
        >
          <Route element={<CandidateHome />} path="" />
          <Route element={<Messages />} path="messages" />
          <Route element={<Bookmark />} path="bookmarks" />
          <Route element={<AddResume />} path="add_resume" />
          <Route element={<Resumes />} path="resumes" />
          <Route element={<Applications />} path="applications" />
        </Route>
      </Routes>
    </>
  );
};

export default App;
