import React, { useEffect, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = lazy(() => import("./modules/Auth/page/Register"));
const Login = lazy(() => import("./modules/Auth/page/Login"));
const MainLayout = lazy(() => import("./layouts/MainLayout"));
const HomePage = lazy(() => import("./modules/Home/page/Home"));
const ContactUs = lazy(() => import("./modules/ContactUs/Page/ContactUs"));
const FindJob = lazy(() => import("./modules/FindJobs/page/FindJob"));
const NotFoundPage = lazy(() => import("./page/NotFound"));
const CompanyPage = lazy(() => import("./modules/Company/page/CompanyPage"));
const CandidatePage = lazy(() => import("./modules/Candidates/page/Candidate"));
const CandidateDashboardLayout = lazy(() =>
  import("./layouts/CandidateDashboardLayout")
);
const CandidateHome = lazy(() =>
  import("./modules/CandidateDashboard/Home/page/CandidateHome")
);
const IntroductionPage = lazy(() => import("./modules/Introduction/page"));
const Resumes = lazy(() =>
  import("./modules/CandidateDashboard/Resumes/page/Resumes")
);
const Applications = lazy(() =>
  import("./modules/CandidateDashboard/Applications/page/Applications")
);
const Messages = lazy(() =>
  import("./modules/CandidateDashboard/Messages/page/Messages")
);
const Bookmark = lazy(() =>
  import("./modules/CandidateDashboard/BookMarks/page/Bookmark")
);
const EmployerDashboardLayout = lazy(() =>
  import("./layouts/EmployerDashboardLayout")
);
const CandidateDetail = lazy(() =>
  import("./modules/CandidateDetails/page/CandidateDetail")
);
const CandidateResumes = lazy(() =>
  import("./modules/CandidateDashboard/ResumesList/page/CandidateResumes")
);

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
      <Suspense
        fallback={
          <div className="flex justify-center items-center  h-screen text-black text-9xl">
            Loading...
          </div>
        }
      >
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
            <Route
              element={<CandidateDetail />}
              path="candidate/candidate_details/:id"
            />
            <Route element={<ContactUs />} path="contact_us" />
          </Route>
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
          <Route
            element={<EmployerDashboardLayout />}
            path="employer_dashboard"
          />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
