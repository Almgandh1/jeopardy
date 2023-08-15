import { Route, Routes } from "react-router-dom";
import React from 'react'
import MainPage from "../components/pages/MainPage";

const Router = () => {
  return (
    <Routes>
        <Route path={"/"} element={<MainPage />}/>
    </Routes>
  )
}

export default Router