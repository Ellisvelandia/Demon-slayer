import React from "react";
import { images } from "../../data/cards";

const Cards = () => {
  return (
    <div className="flex flex-wrap px-2">
      {images.map((image) => (
        <div
          className="lg:w-[25%] md:w-[50%] box-border border-b border-r relative border-solid border-[#6b4312] p-1"
          key={image.id}
        >
          <div className="relative block">
            <img src={image.image} alt="seasons & movies pictures" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
