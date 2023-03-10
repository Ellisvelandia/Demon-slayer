import React from "react";
import { Link } from "react-router-dom";

const FooterDistric = () => {
  return (
    <div className="bg-black color-white text-right text-xs relative mt-96">
      <div className="relative">
          <Link to="/resolvearc" className="list-none relative pl-4 mb-3">
            Demon Slayer: Kimetsu No Yaiba Tanjiro Kamado Unwavering Resolve Arc
          </Link>
          <Link to="/mugenmovie" className="list-none relative pl-4 mb-3">
            Demon Slayer -Kimetsu No Yaiba- The Movie: Mugen Train
          </Link>
          <Link to="/mugentv" className="list-none relative pl-4 mb-3">
            Demon Slayer -Kimetsu No Yaiba- Mugen Train Arc
          </Link>
        </div>
    </div>
  );
};

export default FooterDistric;
