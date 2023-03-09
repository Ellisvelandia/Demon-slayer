import React, { useState } from "react";
import Header from "../components/header/Header";
import Cards from "../components/home/Cards";
import { Popup } from "../components/home/Popup";
import VideoTrailer from "../components/home/VideoTrailer";

export const HomeDemon = () => {
  const [movie, setMovie] = useState(null);

  return (
    <>
      <Header />
      <div className="block w-full min-h-screen" style={{ margin: "0 auto" }}>
        <div className="relative z-10 md:ml-[240px] h-screen">
          <div className="bg-black px-4 py-5 flex border-solid border border-[#6b4312] text-white  justify-center">
            <img
              src="https://a-static.besthdwallpaper.com/demon-slayer-9-hashiras-wallpaper-1920x600-90592_57.jpg"
              alt=""
              className="w-full h-52 object-fill relative shadow-md shadow-[#6b4312]"
            />
          </div>
          <div className="bg-black flex px-1 py-2 border-solid border border-[#6b4312] justify-center">
            <img
              src="https://res.cloudinary.com/dr49dbp8d/image/upload/v1678386803/demon%20slayer/title_movie_jd5xps.webp"
              alt="trailer logo"
              className="w-80 h-56"
            />
          </div>
          <div className="w-full h-full flex justify-center items-center sm:p-0 p-2">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/vFFyX928D9k"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="aspect-video border-solid border-[#6b4312] w-full h-full "
            ></iframe>
          </div>

          <VideoTrailer setMovie={setMovie} />
          <Popup setMovie={setMovie} movie={movie} />

          <div className="bg-black flex px-1 py-2 text-base mb-3  md:text-2xl font-black border-solid border border-[#6b4312] text-white">
            <p className="bg-[#6b4312] p-2">Seasons and Movies</p>
          </div>
          <div className="bg-black px-4 py-5 flex border-solid border border-[#6b4312] w-full">
            <Cards />
          </div>
        </div>
      </div>
    </>
  );
};
