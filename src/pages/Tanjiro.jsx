import React from "react";
import { Link } from "react-router-dom";
import FooterMugen from "../mugenmovies/FooterMugen";
import Introduction from "../resolve_arc/Introduction";
import ListMoviesReveal from "../resolve_arc/ListMoviesReveal";

const Tanjiro = () => {
  return (
    <div className="relative">
      <div className="w-full relative">
        <img
          src="https://res.cloudinary.com/dr49dbp8d/image/upload/v1678388898/demon%20slayer/img-main-pc_huadb9.webp"
          alt="reveal arc"
        />
        <Link to="/">
          <div className="absolute mt-[8%] top-[55%] w-full">
            <div className="w-full flex justify-center">
              <img
                src="https://res.cloudinary.com/dr49dbp8d/image/upload/v1678389067/demon%20slayer/logo_hzjwef.webp"
                alt="logo kimetsu"
                className="w-[35%]"
              />
            </div>
          </div>
        </Link>
      </div>
      <ListMoviesReveal />
      <Introduction />
      <FooterMugen />
    </div>
  );
};

export default Tanjiro;
