import React from "react";
import Header from "../components/header/Header";
import Cards from "../components/home/Cards";

export const HomeDemon = () => {
  return (
    <>
      <Header />
      <div className="block w-full min-h-screen" style={{ margin: "0 auto" }}>
        <div className="relative z-10 md:ml-[240px] h-screen">
          <div className="bg-black px-4 py-5 flex border-solid border border-[#6b4312] text-white  justify-center">
            <img
              src="https://i.ibb.co/V24XJZf/1.jpg"
              alt=""
              className="w-full h-52 object-fill relative shadow-md shadow-[#6b4312]"
            />
            <p className="absolute top-5 lg:text-5xl text-xl font-black shadow-lg shadow-slate-800 p-2 tracking-widest leading-5">
              DESTROYER OF DEMONS
            </p>
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/vFFyX928D9k"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="object-fill border-solid border-[#6b4312] w-full sm:px-0 px-4 sm:h-full"
            ></iframe>
          </div>
          <div className="bg-black px-4 py-5 flex border-solid border border-[#6b4312] w-full">
            <Cards />
          </div>
        </div>
      </div>
    </>
  );
};
