import React from "react";
import "./introduction.css";

const Introduction = () => {
  return (
    <div className="pt-[180px] pb-[240px] bg_introduction relative">
      <div className="w-full md:h-[300px] h-[180px] bg-cover absolute block area lg:-top-[140px] md:-top-[100px] -top-[20px]"></div>
      <div className="flex justify-center w-full py-20">
        <img
          src="https://res.cloudinary.com/dr49dbp8d/image/upload/v1678390100/demon%20slayer/title-intro_tgiibo.webp"
          alt="introduction"
          loading="lazy"
          className="lg:w-[500px] md:w-96 w-60"
        />
      </div>
      <div className="flex w-full justify-center">
        <img
          src="https://res.cloudinary.com/dr49dbp8d/image/upload/v1678389855/demon%20slayer/text-intro_fxggax.webp"
          alt="about demon slayer"
          loading="lazy"
          className="md:px-8 px-4"
        />
      </div>
      <div className="w-full md:h-[300px] h-[180px] bg-cover absolute block area_up lg:-bottom-[140px] md:-bottom-[200px] -bottom-[150px]"></div>
    </div>
  );
};

export default Introduction;
