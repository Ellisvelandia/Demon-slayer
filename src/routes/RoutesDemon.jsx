import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomeDemon } from "../pages/HomeDemon";
import MugenMovie from "../pages/MugenMovie";

const RoutesDemon = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeDemon />} />
      <Route path="/mugenmovie" element={<MugenMovie />} />
    </Routes>
  );
};

export default RoutesDemon;
