import React from "react";
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
        <div className="absolute mt-[8%] top-[55%] w-full">
          <div className="w-full flex justify-center">
            <img
              src="https://res.cloudinary.com/dr49dbp8d/image/upload/v1678389067/demon%20slayer/logo_hzjwef.webp"
              alt="logo kimetsu"
              className="w-[35%]"
            />
          </div>
        </div>
      </div>
      <ListMoviesReveal />
      <Introduction />

    </div>
  );
};

export default Tanjiro;
