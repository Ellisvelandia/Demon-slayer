import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomeDemon } from "../pages/HomeDemon";
import MugenMovie from "../pages/MugenMovie";
import Tanjiro from "../pages/Tanjiro";

const RoutesDemon = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeDemon />} />
      <Route path="/mugenmovie" element={<MugenMovie />} />
      <Route path="resolvearc" element={<Tanjiro />} />
    </Routes>
  );
};

export default RoutesDemon;
