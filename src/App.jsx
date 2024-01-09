import React from "react";

import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./modules/Home/page/Home";
import IntroductionPage from "./modules/Introduction/page";
function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />} path="/">
          <Route element={<HomePage />} path="" />
        </Route>
      </Routes>
    </>
  );
}

export default App;
