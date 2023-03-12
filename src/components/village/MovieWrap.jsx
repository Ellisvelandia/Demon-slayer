import React, { useState } from "react";
import { villages } from "../../data/vilageTrailers";
import "./village.css";

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
              loading="lazy"
              width="100%"
              height="100%"
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
                loading="lazy"
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
      ))}
      <div
        className="popup-media z-50"
        style={{ display: movie ? "block" : "none" }}
      >
        {movie && (
          <>
            {villages.map((village) => (
              <iframe
                key={village.id}
                title=""
                src={movie}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                width="100%"
                height="100%"
                className="aspect-video w-full"
                loading="lazy"
                importance="low"
              />
            ))}
            <button onClick={() => setMovie(null)}>&times;</button>
          </>
        )}
      </div>
    </div>
  );
};

export default MovieWrap;
