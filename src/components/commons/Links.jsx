import React from "react";
import { Link } from "react-router-dom";

const Navlinks = [
  { name: "Swordsmith Village Arc", to: "/" },
  { name: "Entertainment District Arc", to: "/" },
  { name: "Mugen Train Arc", to: "/" },
  { name: "Tanjiro Kamado Unwavering Resolve Arc", to: "/resolvearc" },
];

const Links = () => {
  return (
    <div className="px-3 py-5 border-t-2 border-solid border-[#6b4312] text-[#fff] font-normal tracking-widest text-left">
      <p className="inline-block bg-[#6b4312] px-1 py-2 text-base mb-3">
        Tv Anime
      </p>
      {Navlinks.map(({ name, to }) => (
        <Link to={to} key={name + to}>
          <p className="text-sm mb-3">{name}</p>
        </Link>
      ))}
       
      <p className="inline-block bg-[#6b4312] px-1 py-2 text-base mb-3">
        The Movie
      </p>
      <Link to="/mugenmovie">
        <p className="text-sm mb-3">The Movie: Mugen Train</p>
      </Link>
    </div>
  );
};

export default Links;
