import React from "react";
import "./introduction.css";

const ListMoviesReveal = () => {
  return (
    <div className="bg-black pt-[180px] pb-[340px] w-full relative">
      <div className="w-full md:h-[300px] h-[180px] bg-cover absolute block area_up lg:-top-[140px] md:-top-[100px] -top-[20px]"></div>
      <div className="relative px-5 m-auto pb-10 w-full">
        <div className="lg:w-[500px] w-full lg:mr-14 float-left">
          <img
            src="https://i.ytimg.com/vi/n2Sb6HwZB6w/maxresdefault.jpg"
            alt="movies 1 seasons"
            className="cursor-pointer mb-5 h-64"
          />
        </div>
      </div>
    </div>
  );
};

export default ListMoviesReveal;
