import React from "react";
import { Route, Routes } from "react-router-dom";

const HomePage = React.lazy(() => import("../components/Home/Home"));
const AboutUs = React.lazy(() => import('../components/aboutUs/AboutUs'))
const ErrorPage = React.lazy(() => import('../components/Error/ErrorPage'))
const Login = React.lazy(() => import("../components/login/Login"));

const ConfigRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/HomePage" element={<HomePage />} exact />
        <Route path="/AboutUs" element={<AboutUs />} exact />
    <Route path="*" element={<ErrorPage />} /> 
      </Routes>
  );
};

export default ConfigRoutes;
