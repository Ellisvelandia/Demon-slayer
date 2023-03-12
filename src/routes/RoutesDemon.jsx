import React from "react";
import { Routes, Route } from "react-router-dom";
import Distric from "../pages/Distric";
import { HomeDemon } from "../pages/HomeDemon";
import MugenMovie from "../pages/MugenMovie";
import MugenTv from "../pages/MugenTv";
import Tanjiro from "../pages/Tanjiro";
import Village from "../pages/Village";

const RoutesDemon = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeDemon />} />
      <Route path="/mugenmovie" element={<MugenMovie />} />
      <Route path="/resolvearc" element={<Tanjiro />} />
      {/* <Route path="/mugentv" element={<MugenTv />} /> */}
      {/* <Route path="/distric" element={<Distric />} /> */}
      <Route path="/village" element={<Village />} />
    </Routes>
  );
};

export default RoutesDemon;
