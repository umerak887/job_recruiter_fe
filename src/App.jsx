import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./modules/Home/page/Home";
import ContactUs from "./modules/ContactUs/Page/ContactUs";
function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />} path="/">
          <Route element={<HomePage />} path="" />
          <Route element={<ContactUs />} path="/contact" />
        </Route>
      </Routes>
    </>
  );
}

export default App;
