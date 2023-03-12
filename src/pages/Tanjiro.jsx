import React from "react";
import { Link } from "react-router-dom";
import FooterReveal from "../components/resolve/FooterReveal";
import Introduction from "../components/resolve/Introduction";
import ListMoviesReveal from "../components/resolve/ListMoviesReveal";

const Tanjiro = () => {
  return (
    <div className="relative">
      <div className="w-full relative">
        <img
          src="https://res.cloudinary.com/dr49dbp8d/image/upload/v1678388898/demon%20slayer/img-main-pc_huadb9.webp"
          alt="reveal arc"
          loading="lazy"
          width="100%"
          height="100%"
        />
        <Link to="/">
          <div className="absolute mt-[8%] top-[55%] w-full">
            <div className="w-full flex justify-center">
              <img
                src="https://res.cloudinary.com/dr49dbp8d/image/upload/v1678389067/demon%20slayer/logo_hzjwef.webp"
                alt="logo kimetsu"
                className="w-[35%]"
                loading="lazy"
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </Link>
      </div>
      <ListMoviesReveal />
      <Introduction />
      <FooterReveal />
    </div>
  );
};

export default Tanjiro;
