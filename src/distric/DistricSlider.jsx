import axios from "axios";
import React, { useEffect, useState } from "react";
import Carousel from "better-react-carousel";
import "../distric/distric.css";

const DistricSlider = () => {
  const [districMovies, setDistricMovies] = useState([]);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getDistricMovies = async () => {
      const res = await axios.get(
        "https://demon-slayer-api-production.up.railway.app/Demonslayer/v1/getMovieDistric"
      );
      setDistricMovies(res.data.movie);
    };
    getDistricMovies();
  }, []);

  return (
    <div className="my-20 bg-black bg-distric w-full">
      <Carousel
        cols={2}
        rows={1}
        gap={10}
        loop
        showDots={true}
        scrollSnap={true}
        autoplay={true}
        dotColorInactive="#000"
        mobileBreakpoint={767}
      >
        {districMovies.map((distric) => (
          <Carousel.Item key={distric._id} className="relative">
            <div
              className="w-full border-solid border border-[#b38c48] mx-auto my-8 overflow-hidden"
              key={distric.id}
            >
              <div className="bg-cover opacity-80 hover:opacity-100 relative">
                <img
                  src={distric.posters}
                  alt="logos oficial trailers"
                  className="aspect-video"
                  loading="lazy"
                />
                <p className="absolute top-0 left-0 text-white bg-black px-2 py-1 md:text-base text-xs">
                  {distric.title}
                </p>
                <div className="hover:scale-110 w-full h-full justify-center absolute top-0 flex items-center">
                  <img
                    src="https://res.cloudinary.com/dr49dbp8d/image/upload/v1678418525/demon%20slayer/btn-play_1_isguwo.webp"
                    alt="play logo"
                    className="w-28 h-28 cursor-pointer z-20"
                    onClick={() => setMovie(`${distric.movies}`)}
                  />
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      <div className="w-full justify-center flex mt-8">
        <img
          src="https://res.cloudinary.com/dr49dbp8d/image/upload/v1678575562/demon%20slayer/is-dew8si4-fullview-removebg-preview_pzfxen.webp"
          alt="demons slayer"
          className="md:w-80 w-40"
          loading="lazy"
        />
      </div>

      <div
        className="popup-media z-50"
        style={{ display: movie ? "block" : "none" }}
      >
        {movie && (
          <>
            <iframe
              title=""
              src={movie}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              width="100%"
              height="100%"
              className="aspect-video w-full"
              loading="lazy"
            />
            <button onClick={() => setMovie(null)}>&times;</button>
          </>
        )}
      </div>
    </div>
  );
};

export default DistricSlider;
