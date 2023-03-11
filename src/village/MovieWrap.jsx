import React, { useState } from "react";
import { villages } from "../data/vilageTrailers";
import "./village.css";
import VillageModal from "./VillageModal";

const MovieWrap = () => {
  const [movie, setMovie] = useState(null);

  return (
    <div className="relative">
      {villages.map((village) => (
        <div
          className="2xl:w-[500px] w-full border-solid border border-[#b38c48] mx-auto my-8 overflow-hidden"
          key={village.id}
        >
          <div className="bg-cover opacity-80 hover:opacity-100 h-[240px] w-full 2xl:w-[500px] relative">
            <img
              src={village.img}
              alt="logos oficial trailers"
              className="aspect-video"
            />
            <p className="absolute top-0 left-0 text-white bg-black px-2 py-1">
              {village.title}
            </p>
            <div className="hover:scale-125 w-full h-full justify-center absolute top-0 flex items-center">
              <img
                src="https://res.cloudinary.com/dr49dbp8d/image/upload/v1678488582/demon%20slayer/btn-play_2_sktbkd.webp"
                alt="play logo"
                className="w-20 h-20 cursor-pointer z-20"
                onClick={() => setMovie(`${village.video}`)}
              />
            </div>
          </div>
        </div>
      ))}
      <VillageModal movie={movie} setMovie={setMovie} />
    </div>
  );
};

export default MovieWrap;
