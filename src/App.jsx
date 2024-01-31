import React, { useEffect } from "react";
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
import CandidateDashboardLayout from "./layouts/CandidateDashboardLayout";
import CandidateHome from "./modules/CandidateDashboard/Home/page/CandidateHome";
import IntroductionPage from "./modules/Introduction/page";
import Resumes from "./modules/CandidateDashboard/Resumes/page/Resumes";
import Applications from "./modules/CandidateDashboard/Applications/page/Applications";
import Messages from "./modules/CandidateDashboard/Messages/page/Messages";
import Bookmark from "./modules/CandidateDashboard/BookMarks/page/Bookmark";
import EmployerDashboardLayout from "./layouts/EmployerDashboardLayout";
import CandidateDetail from "./modules/CandidateDetails/page/CandidateDetail";
import CandidateResumes from "./modules/CandidateDashboard/ResumesList/page/CandidateResumes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  useEffect(() => {
    // Talk.to widget code
    const talkToScript = document.createElement("script");
    talkToScript.type = "text/javascript";
    talkToScript.innerHTML = `
      var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
      (function(){
        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        s1.async=true;
        s1.src='https://embed.tawk.to/65abb4010ff6374032c2c5fc/1hkjbeb8i';
        s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode.insertBefore(s1,s0);
      })();
    `;
    document.body.appendChild(talkToScript);
  }, []);

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route element={<Register />} path="auth/sign_up" />
        <Route element={<Login />} path="auth/sign_in" />
        {/* Main Content  */}
        <Route element={<IntroductionPage />} path="" />
        <Route element={<NotFoundPage />} path="*" />
        <Route element={<MainLayout />} path="/main">
          <Route element={<HomePage />} path="" />
          <Route element={<FindJob />} path="find_job" />
          <Route element={<CompanyPage />} path="company" />
          <Route element={<CandidatePage />} path="candidate" />
          <Route
            element={<CandidateDetail />}
            path="candidate/candidate_details/:id"
          />
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
          <Route element={<CandidateResumes />} path="resumes" />
          <Route element={<Resumes />} path="add_resume" />
          <Route element={<Applications />} path="applications" />
        </Route>
        {/* Employer Dashboard */}
        <Route
          element={<EmployerDashboardLayout />}
          path="employer_dashboard"
        ></Route>
      </Routes>
    </>
  );
};

export default App;
