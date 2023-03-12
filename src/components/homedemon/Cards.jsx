import React from "react";
import { Link } from "react-router-dom";
import { images } from "../../data/cards";

const Cards = () => {
  return (
    <div className="flex flex-wrap px-2 wrapper">
      {images.map((image) => (
        <div
          className="lg:w-[25%] w-[50%] box-border border-b border-r relative border-solid border-[#6b4312] p-1 overflow-hidden"
          key={image.id}
        >
          <div className="relative block hover:scale-105 transition ease-in-out duration-700 ">
            <Link to={image.link}>
              <img
                src={image.image}
                alt="seasons & movies pictures"
                loading="lazy"
              />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
