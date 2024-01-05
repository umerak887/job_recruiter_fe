import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import NotFoundPage from "./page/NotFound";
import HeroSection from "./components/hero";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <HeroSection/>
      <Footer/>

      <Routes>{/* <Route element={<NotFoundPage />} path="*" /> */}</Routes>
    </>
  );
}

export default App;
