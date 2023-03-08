import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomeDemon } from "../pages/HomeDemon";

const RoutesDemon = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeDemon />} />
    </Routes>
  );
};

export default RoutesDemon;
